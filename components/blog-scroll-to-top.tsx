'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

interface BlogScrollToTopProps {
  showProgress?: boolean
}

export function BlogScrollToTop({ showProgress = true }: BlogScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxHeight) * 100

      // Mostrar el botón después de hacer scroll hacia abajo 200px
      if (scrolled > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Actualizar el progreso de lectura
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          {/* Círculo de progreso */}
          {showProgress && (
            <div className="absolute inset-0 rounded-full">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                {/* Círculo de fondo */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-border opacity-30"
                />
                {/* Círculo de progreso */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${scrollProgress}, 100`}
                  className="text-primary transition-all duration-150"
                />
              </svg>
            </div>
          )}
          
          {/* Botón */}
          <Button
            onClick={scrollToTop}
            className="scroll-to-top-button bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0 rounded-full w-12 h-12 p-0 shadow-lg transition-all duration-300 animate-fade-in-scale relative"
            aria-label="Volver al inicio del artículo"
            title={`Volver arriba (${Math.round(scrollProgress)}% leído)`}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      )}
    </>
  )
}
