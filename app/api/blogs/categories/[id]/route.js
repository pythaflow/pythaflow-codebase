import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { name, slug, status } = body;
    
    const category = await prisma.blogCategory.update({
      where: { id },
      data: {
        name,
        slug,
        status: status === undefined ? true : Boolean(status)
      }
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await prisma.blogCategory.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
