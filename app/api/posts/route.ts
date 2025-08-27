import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'

// Esquema de validación para crear/actualizar posts
const CreatePostSchema = z.object({
  slug: z.string().min(1, 'El slug es requerido'),
  title: z.string().min(1, 'El título es requerido'),
  description: z.string().optional(),
  content: z.any(), // MDX content as JSON
  tags: z.array(z.string()).optional(),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  publishedAt: z.string().optional().transform((val) => val ? new Date(val) : undefined)
})

// GET - Obtener todos los posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const tag = searchParams.get('tag')
    const limit = parseInt(searchParams.get('limit') || '10')
    const page = parseInt(searchParams.get('page') || '1')
    const search = searchParams.get('search')

    const where: any = {}

    // Filtros
    if (status && ['DRAFT', 'PUBLISHED', 'ARCHIVED'].includes(status)) {
      where.status = status
    }

    if (tag) {
      where.tags = {
        some: {
          tag: {
            slug: tag
          }
        }
      }
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ]
    }

    const posts = await prisma.post.findMany({
      where,
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
        _count: {
          select: {
            comments: true,
            analytics: true
          }
        }
      },
      orderBy: {
        publishedAt: 'desc'
      },
      take: limit,
      skip: (page - 1) * limit
    })

    // Transformar datos para el frontend
    const transformedPosts = posts.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      description: post.description,
      excerpt: post.excerpt,
      readingTime: post.readingTime,
      status: post.status,
      publishedAt: post.publishedAt,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      viewCount: post.viewCount,
      shareCount: post.shareCount,
      likeCount: post.likeCount,
      author: post.author,
      tags: post.tags.map(pt => pt.tag),
      commentsCount: post._count.comments,
      analyticsCount: post._count.analytics
    }))

    return NextResponse.json({
      posts: transformedPosts,
      pagination: {
        page,
        limit,
        total: await prisma.post.count({ where })
      }
    })

  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// POST - Crear nuevo post (para N8n)
export async function POST(request: NextRequest) {
  try {
    // Verificar autenticación para N8n
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.API_SECRET}`) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = CreatePostSchema.parse(body)

    // Calcular tiempo de lectura si no se proporciona
    let readingTime = 0
    if (validatedData.content) {
      const contentString = typeof validatedData.content === 'string' 
        ? validatedData.content 
        : JSON.stringify(validatedData.content)
      const wordCount = contentString.split(/\s+/).length
      readingTime = Math.ceil(wordCount / 200)
    }

    // Obtener o crear autor por defecto
    let author = await prisma.user.findFirst({
      where: { email: 'jsarmiento1614@gmail.com' }
    })

    if (!author) {
      author = await prisma.user.create({
        data: {
          email: 'jsarmiento1614@gmail.com',
          name: 'Jesús Sarmiento',
          role: 'ADMIN'
        }
      })
    }

    // Crear o actualizar post
    const post = await prisma.post.upsert({
      where: { slug: validatedData.slug },
      update: {
        title: validatedData.title,
        description: validatedData.description,
        content: validatedData.content,
        status: validatedData.status,
        seoTitle: validatedData.seoTitle,
        seoDescription: validatedData.seoDescription,
        readingTime,
        publishedAt: validatedData.publishedAt || (validatedData.status === 'PUBLISHED' ? new Date() : null),
        updatedAt: new Date()
      },
      create: {
        slug: validatedData.slug,
        title: validatedData.title,
        description: validatedData.description,
        content: validatedData.content,
        status: validatedData.status,
        seoTitle: validatedData.seoTitle,
        seoDescription: validatedData.seoDescription,
        readingTime,
        authorId: author.id,
        publishedAt: validatedData.publishedAt || (validatedData.status === 'PUBLISHED' ? new Date() : null)
      }
    })

    // Manejar tags
    if (validatedData.tags && validatedData.tags.length > 0) {
      // Eliminar tags existentes
      await prisma.postTag.deleteMany({
        where: { postId: post.id }
      })

      // Crear o conectar nuevos tags
      for (const tagName of validatedData.tags) {
        const tagSlug = tagName.toLowerCase().replace(/\s+/g, '-')
        
        const tag = await prisma.tag.upsert({
          where: { slug: tagSlug },
          update: {},
          create: {
            name: tagName,
            slug: tagSlug,
            color: generateTagColor(tagName)
          }
        })

        await prisma.postTag.create({
          data: {
            postId: post.id,
            tagId: tag.id
          }
        })
      }
    }

    return NextResponse.json({ 
      success: true, 
      post: { 
        id: post.id, 
        slug: post.slug,
        title: post.title,
        status: post.status
      } 
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Función auxiliar para generar colores de tags
function generateTagColor(tagName: string): string {
  const colors = [
    '#3B82F6', // blue
    '#EF4444', // red
    '#10B981', // green
    '#F59E0B', // yellow
    '#8B5CF6', // purple
    '#EC4899', // pink
    '#06B6D4', // cyan
    '#84CC16', // lime
    '#F97316', // orange
    '#6366F1'  // indigo
  ]
  
  const index = tagName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  return colors[index]
}
