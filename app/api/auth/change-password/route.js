import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback-secret-for-dev-only');

export async function POST(req) {
  try {
    const token = req.cookies.get('admin_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let decoded;
    try {
      const { payload } = await jwtVerify(token, secret);
      decoded = payload;
    } catch (err) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    if (!decoded.email) {
      // This happens if the user has an old token from before the DB upgrade
      return NextResponse.json({ error: 'Session expired or invalid. Please logout and login again.' }, { status: 401 });
    }

    const { action, currentPassword, newPassword, code } = await req.json();
    const admin = await prisma.admin.findUnique({ where: { email: decoded.email } });
    
    if (!admin) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }

    if (action === 'request') {
      // 1. Verify current password before sending code
      const isValid = await bcrypt.compare(currentPassword, admin.password);
      if (!isValid) {
        return NextResponse.json({ error: 'Incorrect current password' }, { status: 401 });
      }

      // 2. Generate 6-digit code
      const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
      const resetCodeExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

      // 3. Save to DB
      await prisma.admin.update({
        where: { email: admin.email },
        data: { resetCode, resetCodeExpires }
      });

      // 4. Send email
      if (process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD) {
        const transporter = nodemailer.createTransport({
          service: 'gmail', // or configured host
          auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
          }
        });

        try {
          await transporter.sendMail({
            from: `"PythaFlow Admin" <${process.env.SMTP_EMAIL}>`,
            to: admin.email,
            subject: 'Your Password Reset Code',
            text: `Your 2FA verification code to change your password is: ${resetCode}\nThis code expires in 15 minutes.`
          });
        } catch (smtpErr) {
          console.error('SMTP Error:', smtpErr.message);
          console.log('--- 2FA CODE (SMTP FAILED) ---');
          console.log(`Email: ${admin.email}`);
          console.log(`Code: ${resetCode}`);
          console.log('--------------------------------------');
        }
      } else {
        // Fallback for development without SMTP
        console.log('--- 2FA CODE (No SMTP configured) ---');
        console.log(`Email: ${admin.email}`);
        console.log(`Code: ${resetCode}`);
        console.log('--------------------------------------');
      }

      return NextResponse.json({ success: true, message: 'Verification code sent to your email.' });
    } 
    
    else if (action === 'verify') {
      // 1. Verify code
      if (!admin.resetCode || admin.resetCode !== code) {
        return NextResponse.json({ error: 'Invalid verification code' }, { status: 400 });
      }
      
      if (!admin.resetCodeExpires || admin.resetCodeExpires < new Date()) {
        return NextResponse.json({ error: 'Verification code expired' }, { status: 400 });
      }

      // 2. Update password
      const hashed = await bcrypt.hash(newPassword, 10);
      await prisma.admin.update({
        where: { email: admin.email },
        data: { 
          password: hashed,
          resetCode: null,
          resetCodeExpires: null
        }
      });

      return NextResponse.json({ success: true, message: 'Password updated successfully.' });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (err) {
    console.error('Password change error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
