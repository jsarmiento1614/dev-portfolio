"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react"

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { elementRef, isVisible } = useScrollAnimation()

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con panel de administración, gestión de inventario y pasarela de pagos integrada.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      demoUrl: "https://demo-ecommerce.vercel.app",
      repoUrl: "https://github.com/juanperez/ecommerce-platform",
      category: "Full Stack",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y análisis de productividad avanzado.",
      image: "/task-management-app.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      demoUrl: "https://taskmanager-demo.vercel.app",
      repoUrl: "https://github.com/juanperez/task-manager",
      category: "Web App",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: 
        "Dashboard meteorológico con pronósticos detallados, mapas interactivos y alertas personalizadas para múltiples ubicaciones.",
      image: "/preview/project4.png",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      demoUrl: "https://weather-dashboard-demo.vercel.app",
      repoUrl: "https://github.com/juanperez/weather-dashboard",
      category: "Dashboard",
      featured: false,
    },
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
            Una selección de mis trabajos más recientes que demuestran mis habilidades y experiencia en desarrollo full stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                  {/* Category */}
                  <div className="mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
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

        {/* View more projects button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <Button 
            size="lg" 
            variant="outline"
            className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
          >
            Ver todos los proyectos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
