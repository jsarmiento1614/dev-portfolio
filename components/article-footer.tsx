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
    <div className="bg-card px-8 py-6 border-t border-border blog-card-dark article-footer-dark">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <span className="font-medium">¿Te gustó este artículo?</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={`text-foreground hover:text-green-500 hover:bg-green-500/10 ${
                feedback === 'positive' ? 'text-green-500 bg-green-500/10' : ''
              }`}
              onClick={() => handleFeedback('positive')}
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              Útil
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`text-foreground hover:text-red-500 hover:bg-red-500/10 ${
                feedback === 'negative' ? 'text-red-500 bg-red-500/10' : ''
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
            className={`text-foreground border-border hover:text-primary hover:border-primary hover:bg-primary/10 ${
              isLiked ? 'text-primary border-primary bg-primary/10' : ''
            }`}
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
            {isLiked ? 'Me gustó' : 'Me gusta'}
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-foreground border-border hover:text-primary hover:border-primary hover:bg-primary/10"
            onClick={onComment}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Comentar
          </Button>
        </div>
      </div>
      
      {feedback && (
        <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
          <p className="text-sm text-green-500 font-medium">
            ¡Gracias por tu feedback! Nos ayuda a mejorar nuestro contenido.
          </p>
        </div>
      )}
    </div>
  )
}
