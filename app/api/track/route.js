import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const { path } = body;
    
    if (!path) {
      return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    // Skip tracking for admin and api routes
    if (path.startsWith('/admin') || path.startsWith('/api') || path.includes('_next')) {
      return NextResponse.json({ success: true, ignored: true });
    }

    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const ipHash = ip.split(',')[0].trim();

    await prisma.siteVisit.create({
      data: {
        path,
        ipHash
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking visit:', error);
    return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 });
  }
}
