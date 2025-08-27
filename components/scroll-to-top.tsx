'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón después de hacer scroll hacia abajo 200px
      if (window.pageYOffset > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
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
        <Button
          onClick={scrollToTop}
          className="scroll-to-top-button fixed bottom-8 right-8 z-50 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0 rounded-full w-12 h-12 p-0 shadow-lg transition-all duration-300 animate-fade-in-scale"
          aria-label="Volver al inicio del artículo"
          title="Volver arriba"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
