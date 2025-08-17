'use client'

import { Button } from '@/components/ui/button'
import { Share2, Twitter, Linkedin } from 'lucide-react'

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

  // Determinar si estamos en un contexto oscuro basado en el parent
  const isDarkContext = typeof document !== 'undefined' && 
    document.querySelector('.bg-gradient-to-br.from-slate-900') !== null

  const baseClasses = isDarkContext 
    ? "bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-purple-600 hover:border-purple-300"

  const twitterClasses = isDarkContext
    ? "bg-white/10 text-white border-white/20 hover:bg-blue-500/20 backdrop-blur-sm"
    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"

  const linkedinClasses = isDarkContext
    ? "bg-white/10 text-white border-white/20 hover:bg-blue-500/20 backdrop-blur-sm"
    : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"

  return (
    <div className="flex gap-2">
      <Button
        variant={variant}
        size={size}
        onClick={handleShare}
        className={`flex items-center gap-2 ${baseClasses}`}
      >
        <Share2 className="h-4 w-4" />
        Compartir
      </Button>
      
      <Button
        variant={variant}
        size={size}
        onClick={handleTwitterShare}
        className={`${twitterClasses}`}
      >
        <Twitter className="h-4 w-4 mr-2" />
        Twitter
      </Button>
      
      <Button
        variant={variant}
        size={size}
        onClick={handleLinkedInShare}
        className={`${linkedinClasses}`}
      >
        <Linkedin className="h-4 w-4 mr-2" />
        LinkedIn
      </Button>
    </div>
  )
}
