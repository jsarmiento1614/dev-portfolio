"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}>
      <Link 
        href="/" 
        className="flex items-center hover:text-foreground transition-colors"
        aria-label="Ir al inicio"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Inicio</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-1" />
          {item.href && !item.current ? (
            <Link 
              href={item.href}
              className="hover:text-foreground transition-colors"
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </Link>
          ) : (
            <span 
              className={cn(
                item.current && "text-foreground font-medium",
                !item.current && "text-muted-foreground"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}

// Hook para generar breadcrumbs automáticamente basado en la ruta
export function useBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean)
  
  const breadcrumbs: BreadcrumbItem[] = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const isLast = index === segments.length - 1
    
    // Mapear segmentos a labels más legibles
    const labelMap: Record<string, string> = {
      "proyectos": "Proyectos",
      "about": "Acerca de",
      "contact": "Contacto",
      "blog": "Blog",
      "servicios": "Servicios"
    }
    
    const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
    
    return {
      label,
      href: isLast ? undefined : href,
      current: isLast
    }
  })
  
  return breadcrumbs
}
