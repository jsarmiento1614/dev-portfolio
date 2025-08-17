import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BlogBreadcrumbsProps {
  currentPage?: string
  currentSlug?: string
  variant?: 'light' | 'dark'
}

export default function BlogBreadcrumbs({ currentPage, currentSlug, variant = 'light' }: BlogBreadcrumbsProps) {
  const isDark = variant === 'dark'
  
  const baseClasses = isDark 
    ? "text-gray-300 hover:text-purple-400" 
    : "text-gray-700 hover:text-purple-600"
  
  const separatorClasses = isDark 
    ? "text-gray-500" 
    : "text-gray-500"
  
  const currentClasses = isDark 
    ? "text-white font-semibold" 
    : "text-gray-900 font-semibold"

  return (
    <nav className={`flex items-center space-x-2 text-sm mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
      <Link 
        href="/" 
        className={`flex items-center transition-colors font-medium ${baseClasses}`}
      >
        <Home className="h-4 w-4 mr-1" />
        Inicio
      </Link>
      
      <ChevronRight className={`h-4 w-4 ${separatorClasses}`} />
      
      <Link 
        href="/blog" 
        className={`transition-colors font-medium ${baseClasses}`}
      >
        Blog
      </Link>
      
      {currentPage && (
        <>
          <ChevronRight className={`h-4 w-4 ${separatorClasses}`} />
          <span className={currentClasses}>
            {currentPage}
          </span>
        </>
      )}
      
      {currentSlug && (
        <>
          <ChevronRight className={`h-4 w-4 ${separatorClasses}`} />
          <span className={`${currentClasses} capitalize`}>
            {currentSlug.replace(/-/g, ' ')}
          </span>
        </>
      )}
    </nav>
  )
}
