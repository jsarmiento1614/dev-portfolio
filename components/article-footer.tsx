'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Heart, MessageCircle, ThumbsUp, ThumbsDown } from 'lucide-react'

interface ArticleFooterProps {
  onLike?: () => void
  onComment?: () => void
  onFeedback?: (type: 'positive' | 'negative') => void
}

export function ArticleFooter({ onLike, onComment, onFeedback }: ArticleFooterProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [feedback, setFeedback] = useState<'positive' | 'negative' | null>(null)

  const handleLike = () => {
    setIsLiked(!isLiked)
    onLike?.()
  }

  const handleFeedback = (type: 'positive' | 'negative') => {
    setFeedback(type)
    onFeedback?.(type)
  }

  return (
    <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span className="font-medium">¿Te gustó este artículo?</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={`text-gray-700 hover:text-green-600 hover:bg-green-50 ${
                feedback === 'positive' ? 'text-green-600 bg-green-50' : ''
              }`}
              onClick={() => handleFeedback('positive')}
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              Útil
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`text-gray-700 hover:text-red-600 hover:bg-red-50 ${
                feedback === 'negative' ? 'text-red-600 bg-red-50' : ''
              }`}
              onClick={() => handleFeedback('negative')}
            >
              <ThumbsDown className="h-4 w-4 mr-2" />
              No útil
            </Button>
          </div>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className={`text-gray-700 border-gray-300 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50 ${
              isLiked ? 'text-purple-600 border-purple-600 bg-purple-50' : ''
            }`}
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
            {isLiked ? 'Me gustó' : 'Me gusta'}
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-gray-700 border-gray-300 hover:text-purple-600 hover:border-purple-300 hover:bg-purple-50"
            onClick={onComment}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Comentar
          </Button>
        </div>
      </div>
      
      {feedback && (
        <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200">
          <p className="text-sm text-green-700 font-medium">
            ¡Gracias por tu feedback! Nos ayuda a mejorar nuestro contenido.
          </p>
        </div>
      )}
    </div>
  )
}
