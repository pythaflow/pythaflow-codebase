import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, shortDescription, description, imageUrl, tags, liveLink, githubLink, sorting, serviceId, status } = body;
    
    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
    }

    const project = await prisma.project.create({
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
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
