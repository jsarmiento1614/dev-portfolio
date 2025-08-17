import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Tag, Share2, ArrowLeft, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BlogBreadcrumbs } from '@/components/blog'
import { RelatedPostsServer } from '@/components/related-posts-server'
import ShareButtons from '@/components/share-buttons'
import { TableOfContents } from '@/components/table-of-contents'
import { ArticleStats } from '@/components/article-stats'
import { ArticleFooterWrapper } from '@/components/article-footer-wrapper'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-900/20"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <div className="grid grid-cols-4 gap-4 p-8 opacity-10">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-purple-600/40 rounded-lg h-16 animate-pulse"
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
                <Button variant="ghost" className="text-white hover:bg-white/20 border border-white/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Blog
                </Button>
              </Link>
            </div>

            {/* Article Header */}
            <header className="text-center text-white">
              <div className="flex items-center justify-center gap-2 mb-4 text-purple-200">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">Artículo</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                {post.description}
              </p>
              
              {/* Meta Information */}
              <div className="flex items-center justify-center gap-6 mb-6 text-gray-200">
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
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
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
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumbs */}
            <BlogBreadcrumbs currentSlug={slug} />
            
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar - Table of Contents */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <TableOfContents />
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  {/* Article Stats Bar */}
                  <ArticleStats 
                    views={1200}
                    likes={48}
                    comments={12}
                    url={shareUrl}
                    title={post.title}
                  />

                  {/* Article Content */}
                  <div className="p-8 lg:p-12">
                    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200 prose-blockquote:border-l-4 prose-blockquote:border-purple-400 prose-blockquote:bg-purple-50 prose-blockquote:pl-6 prose-li:text-gray-700 prose-img:rounded-lg prose-img:shadow-md prose-hr:border-gray-200 prose-table:border-gray-200 prose-th:bg-gray-50 prose-th:text-gray-900 prose-td:border-gray-200">
                      <MDXRemote source={post.content} />
                    </div>
                  </div>

                  {/* Article Footer */}
                  <ArticleFooterWrapper />
                </article>

                {/* Share Section */}
                <div className="mt-8 text-center">
                  <p className="text-gray-700 mb-6 font-medium">¡Comparte este artículo si te resultó útil!</p>
                  <div className="flex justify-center gap-4">
                    <ShareButtons url={shareUrl} title={post.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RelatedPostsServer posts={allPosts} currentPostSlug={slug} maxPosts={3} />
          </div>
        </div>
      </section>
    </div>
  )
}
