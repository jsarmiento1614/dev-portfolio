'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Eye, Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react'

interface ArticleStatsProps {
  views?: number
  likes?: number
  comments?: number
  url: string
  title: string
}

export function ArticleStats({ 
  views = 1200, 
  likes = 48, 
  comments = 12, 
  url, 
  title 
}: ArticleStatsProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [currentLikes, setCurrentLikes] = useState(likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setCurrentLikes(isLiked ? currentLikes - 1 : currentLikes + 1)
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ url, title })
    } else {
      navigator.clipboard.writeText(url)
      // Aquí podrías mostrar un toast
    }
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-8 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-gray-600" />
            <span className="font-medium">{views.toLocaleString()} vistas</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className={`h-4 w-4 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
            <span className="font-medium">{currentLikes.toLocaleString()} likes</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-gray-600" />
            <span className="font-medium">{comments} comentarios</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-gray-700 hover:text-purple-600 hover:bg-purple-50 ${isBookmarked ? 'text-purple-600 bg-purple-50' : ''}`}
            onClick={handleBookmark}
          >
            <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
            {isBookmarked ? 'Guardado' : 'Guardar'}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-700 hover:text-purple-600 hover:bg-purple-50"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Compartir
          </Button>
        </div>
      </div>
    </div>
  )
}
