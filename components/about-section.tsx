"use client"

import { useState } from "react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Zap,
  Award,
  Users,
  Clock,
  TrendingUp
} from "lucide-react"

export default function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const { elementRef, isVisible } = useScrollAnimation()

  const skills = [
    { name: "React", icon: Code, category: "Frontend", level: 95 },
    { name: "Next.js", icon: Globe, category: "Frontend", level: 90 },
    { name: "TypeScript", icon: Code, category: "Frontend", level: 88 },
    { name: "Node.js", icon: Code, category: "Backend", level: 85 },
    { name: "Python", icon: Code, category: "Backend", level: 80 },
    { name: "PostgreSQL", icon: Database, category: "Database", level: 85 },
    { name: "MongoDB", icon: Database, category: "Database", level: 80 },
    { name: "AWS", icon: Cloud, category: "Cloud", level: 75 },
  ]

  const experiences = [
    {
      icon: Award,
      title: "5+ Años",
      description: "Experiencia profesional"
    },
    {
      icon: Users,
      title: "50+ Proyectos",
      description: "Completados exitosamente"
    },
    {
      icon: Clock,
      title: "24/7",
      description: "Soporte disponible"
    },
    {
      icon: TrendingUp,
      title: "100%",
      description: "Satisfacción del cliente"
    }
  ]

  const skillCategories = ["Frontend", "Backend", "Database", "Cloud"]

  return (
    <section id="sobre-mi" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div 
            ref={elementRef}
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Sobre <span className="gradient-text">mí</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Soy un desarrollador full stack apasionado por crear soluciones digitales innovadoras. 
                Con más de 5 años de experiencia, he trabajado en proyectos que van desde aplicaciones 
                web complejas hasta sistemas empresariales.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre 
                buscando las mejores prácticas y las tecnologías más actuales para ofrecer 
                resultados excepcionales.
              </p>
            </div>

            {/* Experience cards */}
            <div className="grid grid-cols-2 gap-4">
              {experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-lg hover-lift"
                >
                  <CardContent className="p-4 text-center">
                    <exp.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right column - Image and skills */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            {/* Profile image */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-xl hover-lift">
                  <Image
                    src="/professional-developer-portrait.png"
                    alt="Jesús Sarmiento - Desarrollador Full Stack"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center animate-float">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Skills section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                Tecnologías que domino
              </h3>
              
              {/* Skill categories */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {skillCategories.map((category) => (
                  <Badge 
                    key={category}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover-lift cursor-pointer group"
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    {/* Level indicator */}
                    <div className="absolute top-2 right-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
