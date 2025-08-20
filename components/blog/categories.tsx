'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tag, TrendingUp } from 'lucide-react'

interface BlogCategoriesProps {
  categories: Array<{
    name: string
    count: number
    color: string
  }>
}

export function BlogCategories({ categories }: BlogCategoriesProps) {
  const colorVariants = {
    purple: 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30',
    blue: 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30',
    green: 'bg-accent/20 text-accent border-accent/30 hover:bg-accent/30',
    orange: 'bg-accent/20 text-accent border-accent/30 hover:bg-accent/30',
    pink: 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30',
    indigo: 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30',
    red: 'bg-accent/20 text-accent border-accent/30 hover:bg-accent/30',
    yellow: 'bg-accent/20 text-accent border-accent/30 hover:bg-accent/30'
  }

  return (
    <Card className="bg-card backdrop-blur-sm border border-border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Categorías Populares
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Badge
              key={category.name}
              variant="secondary"
              className={`text-sm transition-all duration-300 cursor-pointer animate-fade-in-up ${
                colorVariants[category.color as keyof typeof colorVariants] || colorVariants.purple
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Tag className="h-3 w-3 mr-1" />
              {category.name}
              <span className="ml-1 text-xs opacity-75">({category.count})</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Componente para mostrar tags individuales
interface TagCloudProps {
  tags: string[]
  maxTags?: number
}

export function TagCloud({ tags, maxTags = 10 }: TagCloudProps) {
  const displayTags = tags.slice(0, maxTags)
  
  const colors = [
    'bg-primary/20 text-primary border-primary/30',
    'bg-accent/20 text-accent border-accent/30',
    'bg-primary/20 text-primary border-primary/30',
    'bg-accent/20 text-accent border-accent/30',
    'bg-primary/20 text-primary border-primary/30',
    'bg-accent/20 text-accent border-accent/30'
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {displayTags.map((tag, index) => (
        <Badge
          key={tag}
          variant="secondary"
          className={`text-xs transition-all duration-300 cursor-pointer animate-fade-in-up hover:scale-105 ${
            colors[index % colors.length]
          }`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {tag}
        </Badge>
      ))}
    </div>
  )
}
