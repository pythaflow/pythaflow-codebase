import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const sliders = await prisma.sliderContent.findMany({
      orderBy: { sorting: 'asc' }
    });
    return NextResponse.json(sliders);
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return NextResponse.json({ error: 'Failed to fetch sliders' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, imageUrl, sorting, status } = body;
    
    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const slider = await prisma.sliderContent.create({
      data: {
        title,
        imageUrl,
        sorting: parseInt(sorting) || 0,
        status: status === undefined ? true : Boolean(status)
      }
    });

    return NextResponse.json(slider);
  } catch (error) {
    console.error('Error creating slider:', error);
    return NextResponse.json({ error: 'Failed to create slider' }, { status: 500 });
  }
}
