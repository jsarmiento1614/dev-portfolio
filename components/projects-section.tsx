"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ExternalLink, Github, Eye, ArrowRight, Calendar, Palette } from "lucide-react"

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { elementRef, isVisible } = useScrollAnimation()

  const developmentProjects = [
    {
      id: 1,
      title: "Randa Ticketera NFT",
      description:
        "Plataforma de ticketera NFT desarrollada con React 18, Node.js, Express, Next.js, PostgreSQL y Docker. Sistema completo de gestión de eventos y tokens NFT.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["React 18", "Node.js", "Express", "Next.js", "PostgreSQL", "Docker"],
      demoUrl: "#",
      repoUrl: "#",
      category: "Web App",
      featured: true,
      period: "2024-12 - 2025-08",
      role: "Desarrollador React"
    },
    {
      id: 2,
      title: "Zero Variance - Ubiquity",
      description:
        "Sistema empresarial desarrollado con Angular 15, .NET Core 8 y SQL Server. Aplicación compleja para gestión de datos y análisis de varianza.",
      image: "/task-management-app.png",
      technologies: ["Angular 15", ".NET Core 8", "SQL Server", "TypeScript"],
      demoUrl: "#",
      repoUrl: "#",
      category: "Enterprise",
      featured: true,
      period: "2023-05 - 2024-12",
      role: "Desarrollador Angular"
    },
    {
      id: 3,
      title: "NexGen Virtual Office",
      description: 
        "Oficina virtual completa desarrollada con Angular. Sistema de gestión empresarial con múltiples módulos integrados.",
      image: "/preview/project4.png",
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
      demoUrl: "#",
      repoUrl: "#",
      category: "Web App",
      featured: false,
      period: "2021-12 - 2023-05",
      role: "Desarrollador Web Angular"
    }
  ]

  const designProjects = [
    {
      id: 4,
      title: "Multicomer - UX/UI Design",
      description:
        "Proyecto completo de diseño UX/UI para plataforma de comercio electrónico. Diseño centrado en el usuario con wireframes, prototipos y sistema de diseño completo.",
      image: "/preview/project4.png",
      technologies: ["Figma", "Adobe XD", "Sketch", "UX Research", "UI Design"],
      demoUrl: "#",
      repoUrl: "#",
      category: "UX/UI Design",
      featured: true,
      period: "2021-01 - 2021-04",
      role: "Diseñador UX/UI"
    },
    {
      id: 5,
      title: "San Rafael - App Design",
      description:
        "Diseño completo de aplicación móvil para San Rafael. Incluye investigación de usuarios, arquitectura de información y diseño de interfaces.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["Figma", "Adobe Creative Suite", "UX Research", "Mobile Design"],
      demoUrl: "#",
      repoUrl: "#",
      category: "Mobile Design",
      featured: false,
      period: "2020-06 - 2021-01",
      role: "Diseñador UX/UI Móvil"
    },
    {
      id: 6,
      title: "Inversiones la Paz - Web Design",
      description:
        "Diseño de interfaz web para sistema empresarial. Creación de sistema de diseño, componentes reutilizables y experiencia de usuario optimizada.",
      image: "/task-management-app.png",
      technologies: ["Figma", "Adobe Photoshop", "UI Design", "Design System"],
      demoUrl: "#",
      repoUrl: "#",
      category: "Web Design",
      featured: false,
      period: "2019-03 - 2020-10",
      role: "Diseñador UI"
    }
  ]

  return (
    <section 
      id="proyectos" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Una selección de mis trabajos más recientes que demuestran mi experiencia en desarrollo web, móvil y diseño UX/UI.
          </p>
        </div>

        {/* Development Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Proyectos de <span className="gradient-text">Desarrollo</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Aplicaciones web y móviles desarrolladas con las últimas tecnologías y mejores prácticas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group relative overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover-lift transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: hoveredProject === project.id ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)"
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <CardContent className="p-0">
                  {/* Project image with overlay */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <Button 
                            asChild 
                            size="sm" 
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                          >
                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <Eye className="w-4 h-4 mr-1" />
                              Demo
                            </Link>
                          </Button>
                          <Button 
                            asChild 
                            size="sm" 
                            variant="outline"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                          >
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-1" />
                              Código
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                          Destacado
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Period and Role */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{project.period}</span>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="mb-2">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {project.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-colors hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <Button 
                        asChild 
                        size="sm" 
                        className="bg-blue-600 hover:bg-blue-700 text-white flex-1 group/btn"
                      >
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                          Ver Demo
                        </Link>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm"
                        className="group/btn"
                      >
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Código
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Proyectos de <span className="gradient-text">Diseño UX/UI</span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Diseños centrados en el usuario con investigación UX, wireframes, prototipos y sistemas de diseño.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group relative overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover-lift transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transform: hoveredProject === project.id ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)"
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <CardContent className="p-0">
                  {/* Project image with overlay */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <Button 
                            asChild 
                            size="sm" 
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                          >
                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <Eye className="w-4 h-4 mr-1" />
                              Ver Diseño
                            </Link>
                          </Button>
                          <Button 
                            asChild 
                            size="sm" 
                            variant="outline"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                          >
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Palette className="w-4 h-4 mr-1" />
                              Portfolio
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                          Destacado
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Period and Role */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{project.period}</span>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="mb-2">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {project.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium transition-colors hover:bg-purple-200 dark:hover:bg-purple-900/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <Button 
                        asChild 
                        size="sm" 
                        className="bg-purple-600 hover:bg-purple-700 text-white flex-1 group/btn"
                      >
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                          Ver Diseño
                        </Link>
                      </Button>
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm"
                        className="group/btn border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20"
                      >
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Palette className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Portfolio
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View more projects button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
          >
            <Link href="/proyectos">
              Ver todos los proyectos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
