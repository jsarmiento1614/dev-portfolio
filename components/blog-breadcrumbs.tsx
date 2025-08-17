import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BlogBreadcrumbsProps {
  currentPage?: string
  currentSlug?: string
}

export default function BlogBreadcrumbs({ currentPage, currentSlug }: BlogBreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
      <Link 
        href="/" 
        className="flex items-center hover:text-primary transition-colors"
      >
        <Home className="h-4 w-4 mr-1" />
        Inicio
      </Link>
      
      <ChevronRight className="h-4 w-4" />
      
      <Link 
        href="/blog" 
        className="hover:text-primary transition-colors"
      >
        Blog
      </Link>
      
      {currentPage && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">
            {currentPage}
          </span>
        </>
      )}
      
      {currentSlug && (
        <>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium capitalize">
            {currentSlug.replace(/-/g, ' ')}
          </span>
        </>
      )}
    </nav>
  )
}
