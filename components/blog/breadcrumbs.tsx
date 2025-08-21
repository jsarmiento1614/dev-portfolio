'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BlogBreadcrumbsProps {
  currentPage?: string
  currentSlug?: string
}

export default function BlogBreadcrumbs({ currentPage, currentSlug }: BlogBreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-8 animate-fade-in-up">
      <Link 
        href="/" 
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <Home className="h-4 w-4" />
        Inicio
      </Link>
      
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
      
      <Link 
        href="/blog"
        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        Blog
      </Link>
      
      {currentSlug && (
        <>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground font-medium">
            {currentSlug}
          </span>
        </>
      )}
      
      {currentPage && !currentSlug && (
        <>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground font-medium">
            {currentPage}
          </span>
        </>
      )}
    </nav>
  )
}
