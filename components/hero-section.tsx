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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div 
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div 
          className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-200 dark:bg-cyan-800 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Name with gradient effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Jesús Alberto Sarmiento Bautista
          </h1>
          
          {/* Animated title */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
              Full Stack Web/Móvil Developer
            </h2>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Desarrollo Web</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                <span>Desarrollo Móvil</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4" />
                <span>UI/UX Design</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Profesional enfocado en el diseño y desarrollo de aplicaciones web/móviles; aplicando un toque de UX/UI 
            a cada proyecto. Especializado en Angular, React, .NET/C#, Flutter y tecnologías modernas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover-glow group"
            >
              Ver proyectos
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Conoce más
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfacción del cliente</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Parallax background element */}
      <div
        ref={elementRef}
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
