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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 text-primary">
            <BookOpen className="h-5 w-5" />
            <span className="font-medium">Artículos Relacionados</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Descubre más <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">contenido</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora otros artículos que podrían interesarte
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((post, index) => (
            <div
              key={post.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full bg-card backdrop-blur-sm border border-border hover:bg-card/80 hover:border-primary/50 transition-all duration-300 cursor-pointer card-hover-effect group blog-card-dark">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-3 w-3 text-primary" />
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <CardTitle className="text-base line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="line-clamp-2 text-sm mb-3 text-muted-foreground">
                      {post.description}
                    </CardDescription>
                    
                    {/* Tags */}
                    <div className="flex gap-1 flex-wrap mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary border-primary/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{post.readingTime} min de lectura</span>
                      </div>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link href="/blog">
            <button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 card-hover-effect">
              Ver Todos los Artículos
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
