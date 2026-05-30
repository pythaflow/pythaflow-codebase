import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, company, website, service, budget, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Save to Database
    const inquiry = await prisma.contactInquiry.create({
      data: {
        name,
        email,
        company,
        message: `Website: ${website}\nService: ${service}\nBudget: ${budget}\n\nMessage:\n${message}`,
      },
    });

    // 2. Send Email
    if (process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'nsl.kawsar@gmail.com',
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: '"Pythaflow Contact" <nsl.kawsar@gmail.com>',
        to: 'nsl.kawsar@gmail.com',
        replyTo: email,
        subject: `New Lead: ${name} from ${company || 'Website'}`,
        text: `
You have received a new project inquiry from the Pythaflow website.

Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Website: ${website || 'N/A'}
Service Interested: ${service || 'N/A'}
Budget: ${budget || 'N/A'}

Message:
${message}
        `,
      });
    } else {
      console.warn("GMAIL_APP_PASSWORD is not set in .env.local, email not sent.");
    }

    return NextResponse.json({ success: true, inquiry });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 500 });
  }
}
