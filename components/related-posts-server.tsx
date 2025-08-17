import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'

interface Post {
  slug: string
  title: string
  description: string
  date: string
  readingTime: number
  tags: string[]
}

interface RelatedPostsServerProps {
  posts: Post[]
  currentPostSlug?: string
  maxPosts?: number
}

export function RelatedPostsServer({ posts, currentPostSlug, maxPosts = 3 }: RelatedPostsServerProps) {
  // Filtrar el post actual si existe
  const filteredPosts = currentPostSlug 
    ? posts.filter(post => post.slug !== currentPostSlug)
    : posts

  // Tomar solo los primeros maxPosts
  const displayPosts = filteredPosts.slice(0, maxPosts)

  if (displayPosts.length === 0) {
    return null
  }

  return (
    <section>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4 text-purple-600">
          <BookOpen className="h-5 w-5" />
          <span className="font-medium">Artículos Relacionados</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Descubre más <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">contenido</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explora otros artículos que podrían interesarte
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200 group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-3 w-3 text-purple-600" />
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <CardTitle className="text-base line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="line-clamp-2 text-sm mb-3 text-gray-600">
                  {post.description}
                </CardDescription>
                
                {/* Tags */}
                <div className="flex gap-1 flex-wrap mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs bg-purple-50 text-purple-700 border-purple-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>{post.readingTime} min de lectura</span>
                  </div>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link href="/blog">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
            Ver Todos los Artículos
            <ArrowRight className="ml-2 h-4 w-4 inline" />
          </button>
        </Link>
      </div>
    </section>
  )
}
