import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await prisma.project.delete({
      where: { id }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { title, shortDescription, description, imageUrl, tags, liveLink, githubLink, sorting, serviceId, status } = body;
    
    const project = await prisma.project.update({
      where: { id },
      data: {
        title,
        shortDescription,
        description,
        imageUrl,
        tags,
        liveLink,
        githubLink,
        sorting: parseInt(sorting) || 0,
        serviceId: serviceId || null,
        status: status === undefined ? true : Boolean(status)
      }
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}
