import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Tag, Share2, ArrowLeft, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BlogBreadcrumbs, ProgressIndicator } from '@/components/blog'
import { RelatedPostsServer } from '@/components/related-posts-server'
import ShareButtons from '@/components/share-buttons'
import { ArticleStats } from '@/components/article-stats'
import { ArticleFooterWrapper } from '@/components/article-footer-wrapper'
import { MDXContent } from '@/components/mdx-content'
import { BlogScrollToTop } from '@/components/blog-scroll-to-top'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const allPosts = await getAllPosts()
  const shareUrl = `https://jsarmiento.vercel.app/blog/${slug}`

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-bg py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <div className="grid grid-cols-4 gap-4 p-8 opacity-10">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-primary/40 rounded-lg h-16 animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '3s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/blog">
                <Button variant="ghost" className="text-foreground hover:bg-muted border border-border">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Blog
                </Button>
              </Link>
            </div>

            {/* Article Header */}
            <header className="text-center text-foreground">
              <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">Artículo</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                {post.description}
              </p>
              
              {/* Meta Information */}
              <div className="flex items-center justify-center gap-6 mb-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{post.readingTime} min de lectura</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex justify-center gap-2 flex-wrap mb-8">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="flex justify-center">
                <ShareButtons url={shareUrl} title={post.title} variant="outline" />
              </div>
            </header>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <BlogBreadcrumbs currentSlug={slug} />
            
            {/* Progress Indicator */}
            <ProgressIndicator />

            {/* Main Content */}
            <article className="bg-card rounded-2xl border border-border overflow-hidden">
              {/* Article Stats Bar */}
              <ArticleStats 
                views={1200}
                likes={48}
                comments={12}
                url={shareUrl}
                title={post.title}
              />

              {/* Article Content */}
              <div className="p-8 lg:p-12 bg-card">
                <div className="prose prose-lg max-w-none">
                  <MDXContent source={post.content} />
                </div>
              </div>

              {/* Article Footer */}
              <ArticleFooterWrapper />
            </article>

            {/* Share Section */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6 font-medium">¡Comparte este artículo si te resultó útil!</p>
              <div className="flex justify-center gap-4">
                <ShareButtons url={shareUrl} title={post.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RelatedPostsServer posts={allPosts} currentPostSlug={slug} maxPosts={3} />
          </div>
        </div>
      </section>

      {/* Blog Scroll to Top Button with Progress */}
      <BlogScrollToTop />
    </div>
  )
}
