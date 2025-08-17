import { getAllPosts } from '@/lib/mdx'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Tag, BookOpen, Code, Lightbulb } from 'lucide-react'
import BlogBreadcrumbs from '@/components/blog-breadcrumbs'
import { ScrollAnimations, AnimatedCard, FloatingElement, GradientText } from '@/components/blog-scroll-animations'
import { ScrollToTop } from '@/components/scroll-to-top'
import { BlogStats } from '@/components/blog-stats'
import { BlogCategories } from '@/components/blog-categories'
import { RelatedPosts } from '@/components/related-posts'
import { BlogNewsletter } from '@/components/blog-newsletter'
import { BlogHeroButtons } from '@/components/blog-hero-buttons'
import './blog-animations.css'

export const metadata = {
  title: 'Blog - Jesús Sarmiento | Desarrollador Full Stack',
  description: 'Artículos sobre desarrollo web, React, Next.js, Angular y mejores prácticas de programación. Tutoriales y tips para desarrolladores.',
  keywords: [
    'blog desarrollo web',
    'react tutorial',
    'next.js tips',
    'angular desarrollo',
    'programación honduras',
    'desarrollador full stack blog'
  ],
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <ScrollAnimations>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section - Onboarding */}
        <section className="relative min-h-screen flex items-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-900/20"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <div className="grid grid-cols-6 gap-4 p-8 opacity-20">
                {Array.from({ length: 24 }).map((_, i) => (
                  <FloatingElement key={i} delay={i * 0.1}>
                    <div className="bg-purple-600/30 rounded-lg h-20"></div>
                  </FloatingElement>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4 animate-fade-in-left">
                  <div className="flex items-center gap-2 text-purple-400 font-medium">
                    <BookOpen className="h-5 w-5" />
                    <span>Blog de Desarrollo</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Tu código, tu{' '}
                    <GradientText>historia</GradientText>
                  </h1>
                  
                  <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                    Explora artículos sobre desarrollo web, mejores prácticas y experiencias 
                    en React, Next.js, Angular y tecnologías modernas.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-purple-600/20 rounded-lg">
                      <Code className="h-5 w-5 text-purple-400" />
                    </div>
                    <span className="text-sm">Tutoriales Prácticos</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <Lightbulb className="h-5 w-5 text-blue-400" />
                    </div>
                    <span className="text-sm">Mejores Prácticas</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-2 bg-green-600/20 rounded-lg">
                      <BookOpen className="h-5 w-5 text-green-400" />
                    </div>
                    <span className="text-sm">Experiencias Reales</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <BlogHeroButtons />

                {/* Pagination Indicator */}
                <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Right Content - Stats or Preview */}
              <div className="hidden lg:block animate-fade-in-right">
                <BlogStats totalPosts={posts.length} />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

      {/* Posts Section */}
      <section id="posts-section" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <BlogBreadcrumbs />
          
          <div className="mb-12 text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-4">
              Artículos <GradientText>Recientes</GradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubre contenido valioso sobre desarrollo web y mejores prácticas
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <AnimatedCard key={post.slug} index={index}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer card-hover-effect">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-purple-400" />
                        <span className="text-sm text-gray-400">
                          {new Date(post.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2 text-white group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-gray-400">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="h-4 w-4 text-purple-400" />
                        <div className="flex gap-1 flex-wrap">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge 
                              key={tag} 
                              variant="secondary" 
                              className="text-xs bg-purple-600/20 text-purple-300 border-purple-400/30"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{post.readingTime} min de lectura</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-4">
                Explora por <GradientText>Categorías</GradientText>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Encuentra contenido específico sobre las tecnologías que te interesan
              </p>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <BlogCategories 
                categories={[
                  { name: 'React', count: 2, color: 'blue' },
                  { name: 'Next.js', count: 1, color: 'purple' },
                  { name: 'Angular', count: 1, color: 'red' },
                  { name: 'JavaScript', count: 3, color: 'yellow' },
                  { name: 'TypeScript', count: 2, color: 'blue' },
                  { name: 'Web Development', count: 3, color: 'green' }
                ]} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <RelatedPosts posts={posts} maxPosts={3} />

      {/* Newsletter Section */}
      <BlogNewsletter />
      
      <ScrollToTop />
    </div>
    </ScrollAnimations>
  )
}
