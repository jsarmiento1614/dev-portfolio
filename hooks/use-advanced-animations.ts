"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, useSpring, useTransform } from "framer-motion"

// Hook para animaciones avanzadas de entrada
export function useAdvancedScrollAnimation(options?: {
  threshold?: number
  triggerOnce?: boolean
  delay?: number
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    amount: options?.threshold || 0.1,
    once: options?.triggerOnce !== false,
    margin: "-10% 0px -10% 0px"
  })

  const [animationState, setAnimationState] = useState({
    isVisible: false,
    hasAnimated: false
  })

  useEffect(() => {
    if (isInView && !animationState.hasAnimated) {
      const delay = options?.delay || 0
      setTimeout(() => {
        setAnimationState({
          isVisible: true,
          hasAnimated: true
        })
      }, delay)
    }
  }, [isInView, animationState.hasAnimated, options?.delay])

  return {
    ref,
    isInView,
    isVisible: animationState.isVisible,
    hasAnimated: animationState.hasAnimated
  }
}

// Hook para parallax suave con spring
export function useSmoothParallax(speed: number = 0.5, stiffness: number = 100) {
  const ref = useRef<HTMLDivElement>(null)
  const scrollY = useMotionValue(0)
  const smoothScrollY = useSpring(scrollY, { stiffness, damping: 50, mass: 0.1 })
  const y = useTransform(smoothScrollY, [0, 1], [0, speed])

  useEffect(() => {
    const updateScrollY = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const elementTop = rect.top + scrolled
        const windowHeight = window.innerHeight
        const elementHeight = rect.height
        
        // Calcular el progreso del scroll para este elemento
        const start = elementTop - windowHeight
        const end = elementTop + elementHeight
        const progress = (scrolled - start) / (end - start)
        
        scrollY.set(Math.max(0, Math.min(1, progress)))
      }
    }

    window.addEventListener("scroll", updateScrollY, { passive: true })
    updateScrollY()

    return () => window.removeEventListener("scroll", updateScrollY)
  }, [scrollY, speed])

  return { ref, y }
}

// Hook para animaciones de revelar texto
export function useTextReveal(options?: {
  delay?: number
  duration?: number
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    amount: 0.1, 
    once: true,
    margin: "-10% 0px -10% 0px"
  })

  const [revealState, setRevealState] = useState({
    shouldReveal: false,
    progress: 0
  })

  useEffect(() => {
    if (isInView) {
      const delay = options?.delay || 0
      const duration = options?.duration || 1000
      
      setTimeout(() => {
        setRevealState({ shouldReveal: true, progress: 0 })
        
        // Animar el progreso
        let start = 0
        const animate = (timestamp: number) => {
          if (!start) start = timestamp
          const elapsed = timestamp - start
          const progress = Math.min(elapsed / duration, 1)
          
          setRevealState(prev => ({ ...prev, progress }))
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        
        requestAnimationFrame(animate)
      }, delay)
    }
  }, [isInView, options?.delay, options?.duration])

  return {
    ref,
    isInView,
    shouldReveal: revealState.shouldReveal,
    progress: revealState.progress
  }
}

// Hook para scroll con múltiples triggers
export function useMultiTriggerAnimation(triggers: number[] = [0.1, 0.5, 0.8]) {
  const ref = useRef<HTMLDivElement>(null)
  const [triggeredStates, setTriggeredStates] = useState<boolean[]>(
    new Array(triggers.length).fill(false)
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio
            
            triggers.forEach((threshold, index) => {
              if (ratio >= threshold && !triggeredStates[index]) {
                setTriggeredStates(prev => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }
            })
          }
        })
      },
      {
        threshold: triggers,
        rootMargin: "0px"
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [triggers, triggeredStates])

  return {
    ref,
    triggeredStates,
    isFullyVisible: triggeredStates[triggeredStates.length - 1]
  }
}

// Hook para scroll con callback de progreso
export function useScrollProgress(callback?: (progress: number) => void) {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calcular progreso basado en la posición del elemento
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // El elemento está completamente visible cuando top = 0 y bottom = windowHeight
      const startPoint = windowHeight
      const endPoint = -elementHeight
      
      const currentProgress = Math.max(0, Math.min(1, 
        (startPoint - elementTop) / (startPoint - endPoint)
      ))
      
      setProgress(currentProgress)
      callback?.(currentProgress)
    }

    window.addEventListener("scroll", updateProgress, { passive: true })
    updateProgress()

    return () => window.removeEventListener("scroll", updateProgress)
  }, [callback])

  return { ref, progress }
}

// Hook para animaciones de entrada con dirección
export function useDirectionalAnimation(direction: 'up' | 'down' | 'left' | 'right' = 'up') {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    amount: 0.1, 
    once: true,
    margin: "-5% 0px -5% 0px"
  })

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return { y: 50, x: 0 }
      case 'down': return { y: -50, x: 0 }
      case 'left': return { y: 0, x: 50 }
      case 'right': return { y: 0, x: -50 }
      default: return { y: 50, x: 0 }
    }
  }

  const getFinalTransform = () => ({ y: 0, x: 0 })

  return {
    ref,
    isInView,
    initial: { 
      opacity: 0, 
      ...getInitialTransform() 
    },
    animate: isInView ? { 
      opacity: 1, 
      ...getFinalTransform() 
    } : { 
      opacity: 0, 
      ...getInitialTransform() 
    }
  }
}

// Hook para animaciones escalonadas de elementos hijos
export function useStaggerAnimation(childCount: number, staggerDelay: number = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    amount: 0.1, 
    once: true,
    margin: "-10% 0px -10% 0px"
  })

  const [animatedChildren, setAnimatedChildren] = useState<boolean[]>(
    new Array(childCount).fill(false)
  )

  useEffect(() => {
    if (isInView) {
      // Animar cada hijo con delay escalonado
      for (let i = 0; i < childCount; i++) {
        setTimeout(() => {
          setAnimatedChildren(prev => {
            const newState = [...prev]
            newState[i] = true
            return newState
          })
        }, i * staggerDelay * 1000)
      }
    }
  }, [isInView, childCount, staggerDelay])

  return {
    ref,
    isInView,
    animatedChildren,
    getChildAnimation: (index: number) => ({
      initial: { opacity: 0, y: 20 },
      animate: animatedChildren[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.6 }
    })
  }
}
