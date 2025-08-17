'use client'

import { Button } from '@/components/ui/button'
import { Share2 } from 'lucide-react'

interface ShareButtonsProps {
  url: string
  title: string
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}

export default function ShareButtons({ url, title, variant = 'outline', size = 'default' }: ShareButtonsProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ url, title })
    } else {
      // Fallback: copiar URL al portapapeles
      navigator.clipboard.writeText(url)
      // Aquí podrías mostrar un toast de confirmación
    }
  }

  const handleTwitterShare = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`)
  }

  const handleLinkedInShare = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)
  }

  return (
    <div className="flex gap-2">
      <Button
        variant={variant}
        size={size}
        onClick={handleShare}
        className="flex items-center gap-2 share-button"
      >
        <Share2 className="h-4 w-4" />
        Compartir
      </Button>
      
      <Button
        variant={variant}
        size={size}
        onClick={handleTwitterShare}
        className="share-button"
      >
        Twitter
      </Button>
      
      <Button
        variant={variant}
        size={size}
        onClick={handleLinkedInShare}
        className="share-button"
      >
        LinkedIn
      </Button>
    </div>
  )
}
