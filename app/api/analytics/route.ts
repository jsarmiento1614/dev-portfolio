import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { z } from 'zod'

// Esquema de validación para analytics
const AnalyticsSchema = z.object({
  postSlug: z.string().optional(),
  action: z.enum(['view', 'share', 'like', 'comment', 'search', 'tag_click', 'newsletter_signup']),
  metadata: z.record(z.any()).optional(),
  sessionId: z.string().optional()
})

// POST - Registrar evento de analytics
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = AnalyticsSchema.parse(body)

    const userAgent = request.headers.get('user-agent')
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ipAddress = forwardedFor?.split(',')[0] || request.ip

    // Si es un evento relacionado con un post específico
    if (validatedData.postSlug) {
      const post = await prisma.post.findUnique({
        where: { slug: validatedData.postSlug }
      })

      if (!post) {
        return NextResponse.json(
          { error: 'Post no encontrado' },
          { status: 404 }
        )
      }

      // Registrar analytics del post
      await prisma.postAnalytics.create({
        data: {
          postId: post.id,
          action: validatedData.action,
          sessionId: validatedData.sessionId,
          userAgent,
          ipAddress,
          metadata: {
            ...validatedData.metadata,
            timestamp: new Date().toISOString(),
            referrer: request.headers.get('referer')
          }
        }
      })

      // Actualizar contadores según la acción
      switch (validatedData.action) {
        case 'share':
          await prisma.post.update({
            where: { id: post.id },
            data: { shareCount: { increment: 1 } }
          })
          break
        case 'like':
          await prisma.post.update({
            where: { id: post.id },
            data: { likeCount: { increment: 1 } }
          })
          break
      }
    }

    // Si es una búsqueda, registrarla en la tabla de búsquedas
    if (validatedData.action === 'search' && validatedData.metadata?.query) {
      await prisma.search.create({
        data: {
          query: validatedData.metadata.query,
          resultsCount: validatedData.metadata.resultsCount || 0,
          sessionId: validatedData.sessionId,
          userAgent,
          ipAddress
        }
      })
    }

    return NextResponse.json({ 
      success: true,
      message: 'Evento registrado correctamente'
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Error registering analytics:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// GET - Obtener estadísticas (para dashboard admin)
export async function GET(request: NextRequest) {
  try {
    // Verificar autenticación
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.API_SECRET}`) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || '30' // días
    const postSlug = searchParams.get('postSlug')

    const startDate = new Date()
    startDate.setDate(startDate.getDate() - parseInt(period))

    // Estadísticas generales
    const totalPosts = await prisma.post.count({
      where: { status: 'PUBLISHED' }
    })

    const totalViews = await prisma.post.aggregate({
      _sum: { viewCount: true },
      where: { status: 'PUBLISHED' }
    })

    const totalShares = await prisma.post.aggregate({
      _sum: { shareCount: true },
      where: { status: 'PUBLISHED' }
    })

    const totalLikes = await prisma.post.aggregate({
      _sum: { likeCount: true },
      where: { status: 'PUBLISHED' }
    })

    // Posts más populares
    const topPosts = await prisma.post.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { viewCount: 'desc' },
      take: 10,
      select: {
        slug: true,
        title: true,
        viewCount: true,
        shareCount: true,
        likeCount: true,
        publishedAt: true
      }
    })

    // Búsquedas más frecuentes
    const topSearches = await prisma.search.groupBy({
      by: ['query'],
      _count: { query: true },
      where: {
        createdAt: { gte: startDate }
      },
      orderBy: {
        _count: { query: 'desc' }
      },
      take: 10
    })

    // Analytics por día (últimos 30 días)
    const dailyAnalytics = await prisma.postAnalytics.groupBy({
      by: ['createdAt'],
      _count: { id: true },
      where: {
        createdAt: { gte: startDate },
        action: 'view'
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

    // Si se especifica un post, obtener sus estadísticas específicas
    let postStats = null
    if (postSlug) {
      const post = await prisma.post.findUnique({
        where: { slug: postSlug },
        include: {
          analytics: {
            where: {
              createdAt: { gte: startDate }
            }
          }
        }
      })

      if (post) {
        postStats = {
          slug: post.slug,
          title: post.title,
          viewCount: post.viewCount,
          shareCount: post.shareCount,
          likeCount: post.likeCount,
          recentAnalytics: post.analytics.length
        }
      }
    }

    return NextResponse.json({
      summary: {
        totalPosts,
        totalViews: totalViews._sum.viewCount || 0,
        totalShares: totalShares._sum.shareCount || 0,
        totalLikes: totalLikes._sum.likeCount || 0
      },
      topPosts,
      topSearches: topSearches.map(s => ({
        query: s.query,
        count: s._count.query
      })),
      dailyViews: dailyAnalytics.map(d => ({
        date: d.createdAt.toISOString().split('T')[0],
        views: d._count.id
      })),
      postStats
    })

  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
