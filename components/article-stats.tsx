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
    <div className="px-8 py-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        {/* Stats */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-gray-500">
            <Eye className="h-4 w-4" />
            <span className="text-sm font-medium">{views.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <Heart className={`h-4 w-4 ${isLiked ? 'text-red-500 fill-current' : ''}`} />
            <span className="text-sm font-medium">{currentLikes.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm font-medium">{comments}</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-9 w-9 p-0 rounded-full ${isBookmarked ? 'text-purple-600 bg-purple-50' : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'}`}
            onClick={handleBookmark}
          >
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-9 w-9 p-0 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
