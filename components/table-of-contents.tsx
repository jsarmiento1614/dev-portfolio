'use client'

import { useEffect, useState } from 'react'
import { BookOpen, ChevronRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  className?: string
}

export function TableOfContents({ className = '' }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    // Extraer headings del artículo
    const articleHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .map((heading, index) => {
        const id = heading.id || `heading-${index}`
        heading.id = id
        return {
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1))
        }
      })
      .filter(item => item.text.trim().length > 0)

    setHeadings(articleHeadings)

    // Observer para el progreso de lectura
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -35% 0px'
      }
    )

    // Observer para el progreso de lectura
    const progressObserver = new IntersectionObserver(
      (entries) => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = window.scrollY
        const progress = Math.min((scrolled / totalHeight) * 100, 100)
        setReadingProgress(progress)
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    // Observar todos los headings
    articleHeadings.forEach(item => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    // Observar el progreso
    progressObserver.observe(document.body)

    return () => {
      observer.disconnect()
      progressObserver.disconnect()
    }
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (headings.length === 0) {
    return (
      <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 ${className}`}>
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-purple-600" />
          Contenido
        </h3>
        <p className="text-sm text-gray-500">Cargando contenido...</p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 ${className}`}>
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-purple-600" />
        Contenido
      </h3>
      
      <nav className="space-y-1 mb-6">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`w-full text-left block text-sm transition-colors rounded px-2 py-1 ${
              activeId === heading.id
                ? 'text-purple-600 bg-purple-50 font-medium'
                : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
            }`}
            style={{ paddingLeft: `${(heading.level - 1) * 12 + 8}px` }}
          >
            <div className="flex items-center gap-2">
              {heading.level > 2 && <ChevronRight className="h-3 w-3 flex-shrink-0" />}
              <span className="truncate">{heading.text}</span>
            </div>
          </button>
        ))}
      </nav>
      
      <Separator className="my-4" />
      
      {/* Reading Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-700 font-medium">Progreso de lectura</span>
          <span className="text-purple-600 font-semibold">{Math.round(readingProgress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${readingProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
