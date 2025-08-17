'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BlogBreadcrumbsProps {
  currentPage?: string
  currentSlug?: string
  variant?: 'light' | 'dark'
}

export default function BlogBreadcrumbs({ currentPage, currentSlug, variant = 'light' }: BlogBreadcrumbsProps) {
  const textColor = variant === 'dark' ? 'text-gray-300' : 'text-gray-600'
  const hoverColor = variant === 'dark' ? 'hover:text-white' : 'hover:text-gray-900'
  const iconColor = variant === 'dark' ? 'text-gray-400' : 'text-gray-500'

  return (
    <nav className="flex items-center space-x-2 text-sm mb-8 animate-fade-in-up">
      <Link 
        href="/" 
        className={`flex items-center gap-1 ${textColor} ${hoverColor} transition-colors duration-200`}
      >
        <Home className="h-4 w-4" />
        Inicio
      </Link>
      
      <ChevronRight className={`h-4 w-4 ${iconColor}`} />
      
      <Link 
        href="/blog"
        className={`${textColor} ${hoverColor} transition-colors duration-200`}
      >
        Blog
      </Link>
      
      {currentSlug && (
        <>
          <ChevronRight className={`h-4 w-4 ${iconColor}`} />
          <span className={`${textColor} font-medium`}>
            {currentSlug}
          </span>
        </>
      )}
      
      {currentPage && !currentSlug && (
        <>
          <ChevronRight className={`h-4 w-4 ${iconColor}`} />
          <span className={`${textColor} font-medium`}>
            {currentPage}
          </span>
        </>
      )}
    </nav>
  )
}
