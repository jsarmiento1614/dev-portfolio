'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationsProps {
  children: React.ReactNode
}

export function ScrollAnimations({ children }: ScrollAnimationsProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Crear partículas de fondo
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 6
    }))
    setParticles(newParticles)

    // Función para manejar animaciones de scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal')
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.8
        
        if (isVisible) {
          element.classList.add('revealed')
        }
      })
    }

    // Agregar event listener
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Ejecutar una vez al cargar

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      {/* Partículas de fondo */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      
      {children}
    </div>
  )
}

interface AnimatedCardProps {
  children: React.ReactNode
  index: number
  className?: string
}

export function AnimatedCard({ children, index, className = '' }: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, index * 100)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`scroll-reveal ${className} ${isVisible ? 'revealed' : ''}`}
      style={{
        transitionDelay: `${index * 0.1}s`
      }}
    >
      {children}
    </div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FloatingElement({ children, className = '', delay = 0 }: FloatingElementProps) {
  return (
    <div
      className={`animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  )
}

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

interface ShimmerTextProps {
  children: React.ReactNode
  className?: string
}

export function ShimmerText({ children, className = '' }: ShimmerTextProps) {
  return (
    <span className={`text-shimmer ${className}`}>
      {children}
    </span>
  )
}
