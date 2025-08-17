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
    purple: 'bg-purple-600/20 text-purple-300 border-purple-400/30 hover:bg-purple-600/30',
    blue: 'bg-blue-600/20 text-blue-300 border-blue-400/30 hover:bg-blue-600/30',
    green: 'bg-green-600/20 text-green-300 border-green-400/30 hover:bg-green-600/30',
    orange: 'bg-orange-600/20 text-orange-300 border-orange-400/30 hover:bg-orange-600/30',
    pink: 'bg-pink-600/20 text-pink-300 border-pink-400/30 hover:bg-pink-600/30',
    indigo: 'bg-indigo-600/20 text-indigo-300 border-indigo-400/30 hover:bg-indigo-600/30'
  }

  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-purple-400" />
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
    'bg-purple-600/20 text-purple-300 border-purple-400/30',
    'bg-blue-600/20 text-blue-300 border-blue-400/30',
    'bg-green-600/20 text-green-300 border-green-400/30',
    'bg-orange-600/20 text-orange-300 border-orange-400/30',
    'bg-pink-600/20 text-pink-300 border-pink-400/30',
    'bg-indigo-600/20 text-indigo-300 border-indigo-400/30'
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
