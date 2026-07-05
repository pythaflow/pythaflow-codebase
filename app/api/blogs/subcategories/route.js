import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const subcats = await prisma.blogSubCategory.findMany({
      include: { category: true },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(subcats);
  } catch (error) {
    console.error('Error fetching blog subcategories:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, slug, categoryId, status } = body;
    
    if (!name || !slug || !categoryId) {
      return NextResponse.json({ error: 'Name, slug, and categoryId are required' }, { status: 400 });
    }

    const subcat = await prisma.blogSubCategory.create({
      data: {
        name,
        slug,
        categoryId,
        status: status === undefined ? true : Boolean(status)
      }
    });

    return NextResponse.json(subcat);
  } catch (error) {
    console.error('Error creating subcategory:', error);
    return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
  }
}
