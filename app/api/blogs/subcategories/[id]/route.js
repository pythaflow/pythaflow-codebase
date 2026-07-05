import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { name, slug, categoryId, status } = body;
    
    const subcat = await prisma.blogSubCategory.update({
      where: { id },
      data: {
        name,
        slug,
        categoryId,
        status: status === undefined ? true : Boolean(status)
      }
    });

    return NextResponse.json(subcat);
  } catch (error) {
    console.error('Error updating subcategory:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await prisma.blogSubCategory.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting subcategory:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
