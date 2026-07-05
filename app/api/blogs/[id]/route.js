import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        category: true,
        subcategory: true,
        contentBlocks: {
          orderBy: { sorting: 'asc' }
        }
      }
    });
    
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const { title, slug, mainImage, categoryId, subcategoryId, metaTitle, metaDescription, keywords, status, contentBlocks } = body;
    
    // Using a transaction to delete old content blocks and create new ones
    const blog = await prisma.$transaction(async (tx) => {
      // Delete old blocks
      await tx.blogContentBlock.deleteMany({
        where: { blogId: id }
      });
      
      // Update blog and create new blocks
      return await tx.blog.update({
        where: { id },
        data: {
          title,
          slug,
          mainImage,
          categoryId,
          subcategoryId: subcategoryId || null,
          metaTitle,
          metaDescription,
          keywords,
          status: status === undefined ? true : Boolean(status),
          contentBlocks: {
            create: (contentBlocks || []).map((b, i) => ({
              subTitle: b.subTitle,
              images: b.images,
              layoutStyle: b.layoutStyle || 'grid',
              content: b.content,
              sorting: b.sorting !== undefined ? parseInt(b.sorting) : i
            }))
          }
        },
        include: { contentBlocks: true }
      });
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await prisma.blog.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 });
  }
}
