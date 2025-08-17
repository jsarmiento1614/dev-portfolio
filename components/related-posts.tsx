import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock } from 'lucide-react'
import { Post } from '@/lib/mdx'

interface RelatedPostsProps {
  currentPost: Post
  allPosts: Post[]
}

export default function RelatedPosts({ currentPost, allPosts }: RelatedPostsProps) {
  // Filtrar posts relacionados por tags comunes
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .filter(post => {
      const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag))
      return commonTags.length > 0
    })
    .sort((a, b) => {
      const aCommonTags = a.tags.filter(tag => currentPost.tags.includes(tag)).length
      const bCommonTags = b.tags.filter(tag => currentPost.tags.includes(tag)).length
      return bCommonTags - aCommonTags
    })
    .slice(0, 3)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <CardTitle className="text-base line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="line-clamp-2 text-sm mb-3">
                  {post.description}
                </CardDescription>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{post.readingTime} min de lectura</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
