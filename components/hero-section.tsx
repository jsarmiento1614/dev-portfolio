"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useParallax } from "@/hooks/use-scroll-animation"
import { ArrowDown, Code, Palette, Zap, Smartphone, Globe } from "lucide-react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { elementRef, offset } = useParallax(0.3)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("proyectos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById("sobre-mi")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-8 sm:py-12"
    >
      {/* Animated background - Marca Personal */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      {/* Floating elements - Marca Personal */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-brand-primary/20 dark:bg-brand-primary/30 rounded-full opacity-20 sm:opacity-30 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div 
          className="absolute top-20 sm:top-40 right-5 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-brand-accent/20 dark:bg-brand-accent/30 rounded-full opacity-20 sm:opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div 
          className="absolute bottom-20 sm:bottom-40 left-5 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 bg-brand-primary/20 dark:bg-brand-primary/30 rounded-full opacity-20 sm:opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Name with gradient effect - Marca Personal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 gradient-text font-brand-primary leading-tight">
            Jesús Sarmiento
          </h1>
          
          {/* Animated title */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-primary dark:text-brand-primary font-semibold mb-3 sm:mb-4 font-brand-primary">
              Full Stack Developer
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 md:gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1 sm:gap-2">
                <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Desarrollo Web</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center gap-1 sm:gap-2">
                <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Desarrollo Móvil</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="flex items-center gap-1 sm:gap-2">
                <Palette className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 font-brand-secondary">
            Profesional enfocado en el diseño y desarrollo de aplicaciones web/móviles; aplicando un toque de UX/UI 
            a cada proyecto. Especializado en Angular, React, .NET/C#, Java, Flutter y tecnologías modernas.
          </p>

          {/* CTA Buttons - Marca Personal */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-2 sm:px-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="btn-brand-primary px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
            >
              Ver proyectos
              <ArrowDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="btn-brand-secondary px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Conoce más
            </Button>
          </div>

          {/* Stats - Marca Personal */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-2 sm:px-4">
            <div className="text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2 font-brand-primary">6+</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-brand-secondary leading-tight">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2 font-brand-primary">15+</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-brand-secondary leading-tight">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2 font-brand-primary">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-brand-secondary leading-tight">Satisfacción del cliente</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-muted-foreground rounded-full mt-1.5 sm:mt-2 animate-pulse" />
        </div>
      </div>

      {/* Parallax background element - Marca Personal */}
      <div
        ref={elementRef}
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full blur-3xl" />
      </div>
    </section>
  )
}
