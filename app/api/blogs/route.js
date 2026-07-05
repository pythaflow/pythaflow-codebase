import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get('categoryId');
    const subcategoryId = searchParams.get('subcategoryId');

    let where = {};
    if (categoryId) where.categoryId = categoryId;
    if (subcategoryId) where.subcategoryId = subcategoryId;

    const blogs = await prisma.blog.findMany({
      where,
      include: {
        category: true,
        subcategory: true,
        contentBlocks: {
          orderBy: { sorting: 'asc' }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, slug, mainImage, categoryId, subcategoryId, metaTitle, metaDescription, keywords, status, contentBlocks } = body;
    
    if (!title || !slug || !categoryId) {
      return NextResponse.json({ error: 'Title, slug, and categoryId are required' }, { status: 400 });
    }

    const blog = await prisma.blog.create({
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
            images: b.images, // JSON string
            layoutStyle: b.layoutStyle || 'grid',
            content: b.content,
            sorting: b.sorting !== undefined ? parseInt(b.sorting) : i
          }))
        }
      }
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
