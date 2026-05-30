import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const contents = await prisma.pageContent.findMany();
    // Return an object mapped by key for easier frontend consumption
    const contentMap = contents.reduce((acc, curr) => {
      acc[curr.key] = {
        value: curr.value,
        section: curr.section,
        id: curr.id
      };
      return acc;
    }, {});
    
    return NextResponse.json(contentMap);
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { key, value, section } = body;
    
    if (!key || !value || !section) {
      return NextResponse.json({ error: 'Key, value, and section are required' }, { status: 400 });
    }

    const content = await prisma.pageContent.upsert({
      where: { key },
      update: { value, section },
      create: { key, value, section }
    });

    return NextResponse.json(content);
  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json({ error: 'Failed to save content' }, { status: 500 });
  }
}
