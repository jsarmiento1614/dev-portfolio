'use client'

import { useEffect, useState } from 'react'

export function ProgressIndicator() {
  const [currentSection, setCurrentSection] = useState(0)
  const [sections, setSections] = useState<Element[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Detectar las secciones del artículo
    const articleSections = Array.from(document.querySelectorAll('h1, h2, h3'))
    setSections(articleSections)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight

      // Ocultar el indicador cuando esté en el banner (primeros 400px)
      const bannerHeight = 400
      if (scrollTop < bannerHeight) {
        setIsVisible(false)
        return
      } else {
        setIsVisible(true)
      }

      // Encontrar la sección actual basada en la posición del scroll
      let currentIndex = 0
      for (let i = 0; i < articleSections.length; i++) {
        const section = articleSections[i] as HTMLElement
        const sectionTop = section.offsetTop - 100 // Offset para mejor detección
        
        if (scrollTop >= sectionTop) {
          currentIndex = i
        } else {
          break
        }
      }
      
      setCurrentSection(currentIndex)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (sections.length === 0) return null

  // Filtrar secciones para mostrar solo cada 2
  const filteredSections = sections.filter((_, index) => index % 2 === 0)
  const currentFilteredIndex = Math.floor(currentSection / 2)

  return (
    <div className={`fixed left-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="flex flex-col items-center space-y-4">
        {filteredSections.map((section, index) => {
          const isActive = index <= currentFilteredIndex
          const sectionText = (section as HTMLElement).textContent?.slice(0, 20) || ''
          
          return (
            <div
              key={index}
              className={`group relative w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-purple-600 scale-110 shadow-md shadow-purple-600/40'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {/* Tooltip */}
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {sectionText}...
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Progress bar */}
      <div className="absolute left-1.25 top-0 w-0.5 bg-gray-200 h-full -z-10">
        <div 
          className="bg-purple-600 transition-all duration-300 ease-out"
          style={{ 
            height: `${((currentFilteredIndex + 1) / filteredSections.length) * 100}%` 
          }}
        />
      </div>
    </div>
  )
}
