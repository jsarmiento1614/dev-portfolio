"use client"

import { useState } from "react"
import Image from "next/image"
import { OptimizedImage } from "@/components/ui/optimized-image"
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
  TrendingUp,
  Palette,
  GraduationCap,
  MapPin,
  Mail,
  Phone
} from "lucide-react"

export default function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const { elementRef, isVisible } = useScrollAnimation()

  const skills = [
    { name: "Angular", icon: Code, category: "Frontend", level: 95 },
    { name: "React", icon: Code, category: "Frontend", level: 95 },
    { name: ".NET/C#", icon: Code, category: "Backend", level: 95 },
    { name: "TypeScript", icon: Code, category: "Frontend", level: 95 },
    { name: "JavaScript", icon: Code, category: "Frontend", level: 95 },
    { name: "NodeJS", icon: Code, category: "Backend", level: 95 },
    { name: "Java", icon: Code, category: "Backend", level: 70 },
    { name: "Flutter", icon: Smartphone, category: "Mobile", level: 80 },
    { name: "Xamarin", icon: Smartphone, category: "Mobile", level: 80 },
    { name: "SQL Server", icon: Database, category: "Database", level: 80 },
    { name: "PostgreSQL", icon: Database, category: "Database", level: 60 },
    { name: "MongoDB", icon: Database, category: "Database", level: 80 },
    { name: "Docker", icon: Cloud, category: "DevOps", level: 80 },
    { name: "Figma", icon: Palette, category: "Design", level: 95 },
    { name: "Illustrator", icon: Palette, category: "Design", level: 80 },
    { name: "Photoshop", icon: Palette, category: "Design", level: 80 },
  ]

  const experiences = [
    {
      icon: Award,
      title: "6+ Años",
      description: "Experiencia profesional"
    },
    {
      icon: Users,
      title: "15+ Proyectos",
      description: "Completados exitosamente"
    },
    {
      icon: GraduationCap,
      title: "Ingeniería",
      description: "En Informática"
    },
    {
      icon: MapPin,
      title: "San Pedro Sula",
      description: "Honduras"
    }
  ]

  const skillCategories = ["Frontend", "Backend", "Mobile", "Database", "DevOps", "Design"]

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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Sobre <span className="gradient-text">mí</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Soy un profesional enfocado en el diseño y desarrollo de aplicaciones web/móviles, 
                aplicando un toque de UX/UI a cada proyecto. Con más de 6 años de experiencia, 
                he trabajado en proyectos que van desde aplicaciones web complejas hasta sistemas móviles.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre 
                buscando las mejores prácticas y las tecnologías más actuales para ofrecer 
                resultados excepcionales.
              </p>
            </div>

                         {/* Personal Info */}
             <div className="space-y-4">
               <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Información Personal</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">jsarmiento1614@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">+504 8785-7498</span>
                </div>
                                 <div className="flex items-center gap-3">
                   <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                   <span className="text-gray-600 dark:text-gray-300">San Pedro Sula, Honduras</span>
                 </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-300">Hondureño</span>
                </div>
              </div>
            </div>

            {/* Experience cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-xl hover-lift">
                  <OptimizedImage
                    src="/jesus-sarmiento-profile.png"
                    alt="Jesús Alberto Sarmiento Bautista - Full Stack Web/Móvil Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center animate-float">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                  <Palette className="w-6 h-6 text-white" />
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
