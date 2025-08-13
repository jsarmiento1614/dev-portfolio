"use client"

import { useState } from "react"
import Image from "next/image"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useAnalytics } from "@/hooks/use-analytics"
import { useVercelAnalytics } from "@/hooks/use-vercel-analytics"
import { ExternalLink, Github, Eye, ArrowRight, Calendar, Palette, Code } from "lucide-react"

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { elementRef, isVisible } = useScrollAnimation()
  const { trackProject } = useAnalytics()
  const { trackProject: trackVercelProject } = useVercelAnalytics()

  // Función para detectar si una imagen es de una app móvil
  const isMobileAppImage = (imagePath: string) => {
    return imagePath.includes('-app.png') || imagePath.includes('app-')
  }

  const developmentProjects = [
    {
      id: 1,
      title: "Trading Automatizado - Plataforma Backend",
      description:
        "Diseño e implementación de una plataforma backend para gestión y ejecución de estrategias de trading automatizado en mercados como Forex, Criptomonedas e Índices bursátiles. Desarrollo de lógica para determinar en tiempo real si un mercado está abierto o cerrado usando horarios internacionales y zonas horarias.",
      image: "/preview/trading-platform.png",
      technologies: ["TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "WebSockets", "REST API", "Docker", "Redis", "Fly.io", "SimpleFX API", "JavaScript ES6+", "Git", "CI/CD"],
      demoUrl: "#",
      repoUrl: "#",
      category: "Full Stack",
      featured: true,
      period: "2025-03 - 2025-08",
      role: "Desarrollador Full Stack",
      isPrivate: true,
      privateReason: "Proyecto de trading automatizado - Código propietario",
      type: "development"
    },
    {
      id: 2,
      title: "Randa Ticketera NFT UI/UX",
      description:
        "Plataforma de ticketera NFT desarrollada con React 18. Sistema completo de gestión de eventos y tokens NFT.",
      image: "/preview/randa-site.png",
      technologies: ["React 18", "Vite", "Tailwind CSS", "TypeScript", "JavaScript ES6+", "Git"],
      demoUrl: "#",
      repoUrl: "#",
      category: "Web App",
      featured: true,
      period: "2024-12 - 2025-08",
      role: "Desarrollador React",
      isPrivate: true,
      privateReason: "Proyecto empresarial - Código propietario",
      type: "development"
    },
    {
      id: 3,
      title: "Zero Variance - Ubiquity",
      description:
        "Sistema empresarial desarrollado con Angular 15, .NET Core 8 y SQL Server. Aplicación compleja para gestión de datos y análisis de varianza.",
      image: "/preview/zerovariance-site.png",
      technologies: ["Angular 15", ".NET Core 8", "SQL Server", "TypeScript"],
      demoUrl: "#",
      repoUrl: "#",
      category: "Enterprise",
      featured: true,
      period: "2023-05 - 2024-12",
      role: "Desarrollador Angular",
      isPrivate: true,
      privateReason: "Sistema empresarial privado",
      type: "development"
    },
    {
      id: 4,
      title: "NexGen Virtual Office",
      description: 
        "Oficina virtual completa desarrollada con Angular. Sistema de gestión empresarial con múltiples módulos integrados.",
      image: "/preview/nextgen-site.png",
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
      demoUrl: "#",
      repoUrl: "#",
      category: "Web App",
      featured: false,
      period: "2021-12 - 2023-05",
      role: "Desarrollador Web Angular",
      isPrivate: true,
      privateReason: "Aplicación interna corporativa",
      type: "development"
    }
  ]

  const designProjects = [
    {
      id: 5,
      title: "Aplicación de Encuestas - Grupo Leitz",
      description:
        "Diseño UX y prototipado de aplicación móvil para recolección, monitoreo y gestión de datos de cosecha de granos de café. Optimización de procesos agrícolas con experiencia de usuario centrada en el usuario.",
      image: "/preview/survey-app.png",
      technologies: ["Figma", "UX Research", "Prototyping", "Mobile Design", "Agricultural UX"],
      demoUrl: "https://www.behance.net/gallery/188075513/Survey-App",
      repoUrl: "https://www.behance.net/gallery/188075513/Survey-App",
      category: "UX/UI Design",
      featured: true,
      period: "2021-04 - 2021-11",
      role: "Diseñador UX/UI",
      client: "Grupo Leitz, TerraKappe",
      isPrivate: true,
      privateReason: "Proyecto interno corporativo",
      type: "design"
    },
    {
      id: 6,
      title: "Manual de Marca Securex",
      description:
        "Creación de identidad de marca y prototipo de aplicación para soluciones de seguridad residencial. Diseño de experiencia visual coherente y funcional con enfoque en seguridad y confianza.",
      image: "/preview/securex-app.png",
      technologies: ["Figma", "Brand Identity", "UI Design", "Security UX", "Prototyping"],
      demoUrl: "https://www.behance.net/gallery/170720981/Securex",
      repoUrl: "https://www.behance.net/gallery/170720981/Securex",
      category: "Brand Design",
      featured: true,
      period: "2021-12 - 2022-05",
      role: "Diseñador UX/UI",
      client: "Securex App",
      type: "design"
    },
    {
      id: 7,
      title: "SuperCompra - E-commerce UX",
      description:
        "Diseño UX y prototipado de aplicación de comercio electrónico para Distribuidora San Rafael. Enfoque en facilitar la experiencia de compra en línea con navegación intuitiva y procesos optimizados.",
      image: "/preview/supercompra-app.png",
      technologies: ["Figma", "E-commerce UX", "Mobile Design", "User Research", "Prototyping"],
      demoUrl: "https://www.behance.net/gallery/142323061/SuperCompra",
      repoUrl: "https://www.behance.net/gallery/142323061/SuperCompra",
      category: "E-commerce UX",
      featured: false,
      type: "design"
    },
    {
      id: 8,
      title: "Multicomer - Diseño UX y Desarrollo Angular",
      description:
        "Proceso de diseño UX y maquetado web para Multicomer, utilizando Figma para el prototipado y Angular 9 con TypeScript para el desarrollo frontend. Creación de interfaces modernas y funcionales.",
      image: "/preview/easy-pos-site.png",
      technologies: ["Figma", "Angular 9", "TypeScript", "UX Design", "Web Development"],
      demoUrl: "https://multicomer.com",
      repoUrl: "#",
      category: "UX/UI Design",
      featured: false,
      period: "2021-01 - 2021-04",
      role: "Diseñador UX, Desarrollador Web Angular",
      isPrivate: true,
      privateReason: "Proyecto interno corporativo",
      type: "design"
    },
    {
      id: 7,
      title: "Orange - Delivery App",
      description:
        "Diseño de identidad de marca y prototipo de aplicación para startup local de servicios de delivery. Experiencia de usuario intuitiva alineada con los valores de la marca y necesidades del usuario.",
      image: "/preview/orange-app.png",
      technologies: ["Figma", "Brand Design", "Delivery UX", "Mobile Design", "Startup UX"],
      demoUrl: "https://www.behance.net/gallery/98890391/Orange-app",
      repoUrl: "https://www.behance.net/gallery/98890391/Orange-app",
      category: "Brand + UX",
      featured: false,
      period: "2019-02 - 2019-05",
      role: "Diseñador UX/UI",
      client: "Orange App",
      type: "design",
      isPrivate: true,
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
        <div className="mb-20 relative">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-3xl -m-8"></div>
          
          {/* Section Header */}
          <div className="relative z-10 text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Proyectos de <span className="gradient-text">Desarrollo</span>
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Aplicaciones web y móviles desarrolladas con las últimas tecnologías y mejores prácticas.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                {/* Development card accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <CardContent className="p-0">
                  {/* Project image with overlay */}
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className={`w-full h-48 ${
                        isMobileAppImage(project.image) 
                          ? 'object-contain bg-gray-100 dark:bg-gray-700' 
                          : 'object-cover'
                      }`}
                      fallbackSrc="/placeholder.svg"
                    />
                    
                    {/* Hover overlay - removed redundant buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                          Destacado
                        </span>
                      </div>
                    )}

                    {/* Private badge */}
                    {project.isPrivate && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border border-orange-300 dark:border-orange-600 text-xs font-semibold rounded-full">
                          🔒 Privado
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
                      {project.isPrivate ? (
                        <>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="flex-1 border-orange-300 text-orange-600 hover:bg-orange-50 dark:border-orange-600 dark:text-orange-400 dark:hover:bg-orange-900/20"
                            disabled
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Sitio Privado
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-orange-300 text-orange-600 hover:bg-orange-50 dark:border-orange-600 dark:text-orange-400 dark:hover:bg-orange-900/20"
                            disabled
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Código Privado
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button 
                            asChild 
                            size="sm" 
                            className="bg-blue-600 hover:bg-blue-700 text-white flex-1 group/btn"
                          >
                            <Link 
                              href={project.demoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={() => {
                                trackProject(project.title)
                                trackVercelProject(project.title)
                              }}
                            >
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
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Separator */}
        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white dark:bg-gray-900 px-8 py-4 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">VS</span>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Projects Section */}
        <div className="mb-20 relative">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl -m-8"></div>
          
          {/* Section Header */}
          <div className="relative z-10 text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Proyectos de <span className="gradient-text">Diseño UX/UI</span>
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Diseños centrados en el usuario con investigación UX, wireframes, prototipos y sistemas de diseño.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                {/* Design card accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <CardContent className="p-0">
                  {/* Project image with overlay */}
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className={`w-full h-48 ${
                        isMobileAppImage(project.image) 
                          ? 'object-contain bg-gray-100 dark:bg-gray-700' 
                          : 'object-cover'
                      }`}
                      fallbackSrc="/placeholder.svg"
                    />
                    
                    {/* Hover overlay - removed redundant buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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

                    {/* Role and Client */}
                    <div className="mb-2">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {project.role}
                      </span>
                      {project.client && (
                        <div className="mt-1">
                          {project.demoUrl && project.demoUrl !== "#" ? (
                            <Link 
                              href={project.demoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              {project.client}
                            </Link>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                              {project.client}
                            </span>
                          )}
                        </div>
                      )}
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
                      {project.type === "design" && project.demoUrl && project.demoUrl !== "#" && (
                        <Button 
                          asChild 
                          size="sm" 
                          className="bg-purple-600 hover:bg-purple-700 text-white w-full group/btn"
                        >
                          <Link 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => {
                              trackProject(project.title)
                              trackVercelProject(project.title)
                            }}
                          >
                            <Eye className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                            Ver Prototipo
                          </Link>
                        </Button>
                      )}
                      {project.type === "development" && project.repoUrl && project.repoUrl !== "#" && (
                        <Button 
                          asChild 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700 text-white w-full group/btn"
                        >
                          <Link 
                            href={project.repoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => {
                              trackProject(project.title)
                              trackVercelProject(project.title)
                            }}
                          >
                            <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Ver Código
                          </Link>
                        </Button>
                      )}
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
