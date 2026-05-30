import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await prisma.service.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { name, sorting, description, tags, tasks, status } = body;
    
    const service = await prisma.service.update({
      where: { id },
      data: {
        name,
        sorting: parseInt(sorting) || 0,
        description,
        tags,
        tasks,
        status: status === undefined ? true : Boolean(status)
      }
    });

    return NextResponse.json(service);
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}
