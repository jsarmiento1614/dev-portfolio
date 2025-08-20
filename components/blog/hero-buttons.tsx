'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function BlogHeroButtons() {
  const scrollToPosts = () => {
    document.getElementById('posts-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0 card-hover-effect"
        onClick={scrollToPosts}
      >
        Explorar Artículos
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button 
        size="lg" 
        variant="outline" 
        className="border-primary text-primary hover:bg-primary/10 card-hover-effect"
      >
        Suscribirse
      </Button>
    </div>
  )
}
