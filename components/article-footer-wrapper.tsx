'use client'

import { ArticleFooter } from './article-footer'

export function ArticleFooterWrapper() {
  const handleLike = () => {
    console.log('Liked article')
    // Aquí podrías implementar la lógica real de like
  }

  const handleComment = () => {
    console.log('Comment clicked')
    // Aquí podrías abrir un modal de comentarios o redirigir
  }

  const handleFeedback = (type: 'positive' | 'negative') => {
    console.log('Feedback:', type)
    // Aquí podrías enviar el feedback a tu backend
  }

  return (
    <ArticleFooter 
      onLike={handleLike}
      onComment={handleComment}
      onFeedback={handleFeedback}
    />
  )
}
