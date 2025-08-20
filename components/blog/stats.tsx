'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Users, Clock, TrendingUp } from 'lucide-react'

interface BlogStatsProps {
  totalPosts: number
  totalCategories?: number
  avgReadingTime?: number
  isFree?: boolean
}

export function BlogStats({ 
  totalPosts, 
  totalCategories = 3, 
  avgReadingTime = 15, 
  isFree = true 
}: BlogStatsProps) {
  const [counts, setCounts] = useState({
    posts: 0,
    categories: 0,
    readingTime: 0,
    free: 0
  })

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000 // 2 segundos
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0

      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounts({
          posts: Math.floor(totalPosts * progress),
          categories: Math.floor(totalCategories * progress),
          readingTime: Math.floor(avgReadingTime * progress),
          free: isFree ? Math.floor(100 * progress) : 0
        })

        if (currentStep >= steps) {
          clearInterval(interval)
          setCounts({
            posts: totalPosts,
            categories: totalCategories,
            readingTime: avgReadingTime,
            free: isFree ? 100 : 0
          })
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }

    // Iniciar animación después de un pequeño delay
    const timer = setTimeout(animateCounts, 500)
    return () => clearTimeout(timer)
  }, [totalPosts, totalCategories, avgReadingTime, isFree])

  const stats = [
    {
      icon: BookOpen,
      value: counts.posts,
      label: 'Artículos Publicados',
      color: 'text-primary',
      bgColor: 'bg-primary/20'
    },
    {
      icon: TrendingUp,
      value: counts.categories,
      label: 'Categorías',
      color: 'text-accent',
      bgColor: 'bg-accent/20'
    },
    {
      icon: Clock,
      value: `${counts.readingTime}+`,
      label: 'Min de Lectura',
      color: 'text-primary',
      bgColor: 'bg-primary/20'
    },
    {
      icon: Users,
      value: `${counts.free}%`,
      label: 'Gratuito',
      color: 'text-accent',
      bgColor: 'bg-accent/20'
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <Card className="bg-card backdrop-blur-sm border border-border hover:bg-card/80 transition-all duration-300 card-hover-effect">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
