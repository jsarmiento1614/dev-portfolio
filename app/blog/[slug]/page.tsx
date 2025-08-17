import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Tag, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import BlogBreadcrumbs from '@/components/blog-breadcrumbs'
import RelatedPosts from '@/components/related-posts'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post no encontrado',
    }
  }

  return {
    title: `${post.title} | Blog - Jesús Sarmiento`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Jesús Sarmiento'],
      tags: post.tags,
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const allPosts = await getAllPosts()
  const shareUrl = `https://jsarmiento.vercel.app/blog/${params.slug}`

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <BlogBreadcrumbs currentSlug={params.slug} />
      
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {new Date(post.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{post.description}</p>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {post.readingTime} min de lectura
            </span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigator.share?.({ url: shareUrl, title: post.title })}
            className="flex items-center gap-2 share-button"
          >
            <Share2 className="h-4 w-4" />
            Compartir
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="tag-badge">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <Separator className="mb-8" />

      {/* Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <MDXRemote source={post.content} />
      </div>

      {/* Related Posts */}
      <RelatedPosts currentPost={post} allPosts={allPosts} />

      {/* Footer */}
      <Separator className="my-8" />
      
      <footer className="text-center text-muted-foreground">
        <p>¿Te gustó este artículo? ¡Compártelo en redes sociales!</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button
            variant="outline"
            onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`)}
            className="share-button"
          >
            Twitter
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`)}
            className="share-button"
          >
            LinkedIn
          </Button>
        </div>
      </footer>
    </article>
  )
}
