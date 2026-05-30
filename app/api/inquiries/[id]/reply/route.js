import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(req, { params }) {
  try {
    const { id } = params;
    const { replyMessage } = await req.json();

    const inquiry = await prisma.contactInquiry.findUnique({ where: { id } });
    if (!inquiry) {
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
    }

    // Try to send email if SMTP is configured
    if (process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }
      });

      try {
        await transporter.sendMail({
          from: `"PythaFlow Admin" <${process.env.SMTP_EMAIL}>`,
          to: inquiry.email,
          subject: 'Reply regarding your PythaFlow Inquiry',
          text: replyMessage
        });
      } catch (smtpErr) {
        console.error('SMTP Error during reply:', smtpErr.message);
        return NextResponse.json({ error: 'Failed to send email. Check SMTP settings.' }, { status: 500 });
      }
    } else {
      // If no SMTP, just log it as simulated success for dev
      console.log('--- SIMULATED EMAIL REPLY ---');
      console.log(`To: ${inquiry.email}`);
      console.log(`Message: \n${replyMessage}`);
      console.log('-----------------------------');
    }

    // Update status to REPLIED
    await prisma.contactInquiry.update({
      where: { id },
      data: { status: 'REPLIED' }
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error('Reply error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
