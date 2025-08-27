import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

interface Params {
  slug: string
}

// GET - Obtener un post específico
export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const { slug } = params

    const post = await prisma.post.findUnique({
      where: { 
        slug,
        status: 'PUBLISHED' // Solo posts publicados para el frontend
      },
      include: {
        tags: {
          include: {
            tag: true
          }
        },
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        comments: {
          where: {
            status: 'APPROVED'
          },
          orderBy: {
            createdAt: 'desc'
          },
          take: 10
        }
      }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      )
    }

    // Incrementar contador de vistas
    await prisma.post.update({
      where: { id: post.id },
      data: {
        viewCount: {
          increment: 1
        }
      }
    })

    // Registrar analytics
    const sessionId = request.headers.get('x-session-id')
    const userAgent = request.headers.get('user-agent')
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ipAddress = forwardedFor?.split(',')[0] || request.ip

    await prisma.postAnalytics.create({
      data: {
        postId: post.id,
        action: 'view',
        sessionId,
        userAgent,
        ipAddress,
        metadata: {
          timestamp: new Date().toISOString(),
          referrer: request.headers.get('referer')
        }
      }
    })

    // Transformar datos para el frontend
    const transformedPost = {
      id: post.id,
      slug: post.slug,
      title: post.title,
      description: post.description,
      content: post.content,
      excerpt: post.excerpt,
      readingTime: post.readingTime,
      status: post.status,
      publishedAt: post.publishedAt,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      viewCount: post.viewCount + 1, // Incluir la nueva vista
      shareCount: post.shareCount,
      likeCount: post.likeCount,
      seoTitle: post.seoTitle,
      seoDescription: post.seoDescription,
      canonicalUrl: post.canonicalUrl,
      author: post.author,
      tags: post.tags.map(pt => pt.tag),
      comments: post.comments
    }

    return NextResponse.json({ post: transformedPost })

  } catch (error) {
    console.error('Error fetching post:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// PUT - Actualizar post (para administración)
export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    // Verificar autenticación
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.API_SECRET}`) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { slug } = params
    const body = await request.json()

    const post = await prisma.post.findUnique({
      where: { slug }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      )
    }

    const updatedPost = await prisma.post.update({
      where: { slug },
      data: {
        ...body,
        updatedAt: new Date()
      }
    })

    return NextResponse.json({ 
      success: true, 
      post: updatedPost 
    })

  } catch (error) {
    console.error('Error updating post:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// DELETE - Eliminar post (para administración)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    // Verificar autenticación
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.API_SECRET}`) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { slug } = params

    const post = await prisma.post.findUnique({
      where: { slug }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Post no encontrado' },
        { status: 404 }
      )
    }

    // Eliminar post (esto eliminará automáticamente las relaciones debido a onDelete: Cascade)
    await prisma.post.delete({
      where: { slug }
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Post eliminado correctamente' 
    })

  } catch (error) {
    console.error('Error deleting post:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
