import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await prisma.sliderContent.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting slider:', error);
    return NextResponse.json({ error: 'Failed to delete slider' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { title, imageUrl, sorting, status } = body;
    
    const slider = await prisma.sliderContent.update({
      where: { id },
      data: {
        title,
        imageUrl,
        sorting: parseInt(sorting) || 0,
        status: status === undefined ? true : Boolean(status)
      }
    });

    return NextResponse.json(slider);
  } catch (error) {
    console.error('Error updating slider:', error);
    return NextResponse.json({ error: 'Failed to update slider' }, { status: 500 });
  }
}
