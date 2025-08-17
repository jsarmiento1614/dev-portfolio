"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  // Navegación para la página principal (con scroll y enlaces)
  const homeNavItems = [
    { id: "inicio", label: "Inicio", type: "scroll" as const },
    { id: "sobre-mi", label: "Sobre mí", type: "scroll" as const },
    { id: "proyectos", label: "Proyectos", type: "scroll" as const },
    { href: "/blog", label: "Blog", type: "link" as const },
  ]

  // Navegación para otras páginas (con enlaces)
  const pageNavItems = [
    { href: "/", label: "Inicio" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Sobre mí" },
    { href: "/contact", label: "Contacto" },
  ]

  const isHomePage = pathname === "/"

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Marca Personal */}
          <Link 
            href="/" 
            className="text-xl font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-brand-primary"
          >
            <span className="gradient-text">jsarmiento.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {isHomePage ? (
              // Navegación con scroll y enlaces para página principal
              homeNavItems.map((item) => (
                item.type === "scroll" ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 relative group font-brand-secondary"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 relative group font-brand-secondary"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                )
              ))
            ) : (
              // Navegación con enlaces para otras páginas
              pageNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-muted-foreground hover:text-primary transition-all duration-300 relative group font-brand-secondary ${
                    pathname === item.href ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))
            )}
            
            {/* Dark mode toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            {isHomePage ? (
              <Button
                onClick={() => scrollToSection("contacto")}
                className="btn-brand-primary px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contáctame
              </Button>
            ) : (
              <Link href="/#contacto">
                <Button className="btn-brand-primary px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
                  Contáctame
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 p-0 rounded-full hover:bg-muted"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-border">
            {isHomePage ? (
              // Navegación móvil con scroll y enlaces para página principal
              homeNavItems.map((item) => (
                item.type === "scroll" ? (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))
            ) : (
              // Navegación móvil con enlaces para otras páginas
              pageNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-300 ${
                    pathname === item.href ? "text-primary bg-muted" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))
            )}
            
            <div className="px-4 pt-2">
              {isHomePage ? (
                <Button
                  onClick={() => scrollToSection("contacto")}
                  className="w-full btn-brand-primary py-3 rounded-lg transition-all duration-300"
                >
                  Contáctame
                </Button>
              ) : (
                <Link href="/#contacto" className="block">
                  <Button
                    className="w-full btn-brand-primary py-3 rounded-lg transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contáctame
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
