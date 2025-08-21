"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useAnalytics } from "@/hooks/use-analytics"
import { useVercelAnalytics } from "@/hooks/use-vercel-analytics"
import { ExternalLink, Github, Eye, ArrowRight, Calendar, Palette, Code } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const { elementRef, isVisible } = useScrollAnimation()
  const { trackProject } = useAnalytics()
  const { trackProject: trackVercelProject } = useVercelAnalytics()
  const developmentRef = useRef(null)
  const designRef = useRef(null)
  const isDevelopmentInView = useInView(developmentRef, { once: true, margin: "-100px" })
  const isDesignInView = useInView(designRef, { once: true, margin: "-100px" })

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
      image: "/placeholder.svg",
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
      id: 9,
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
      className="pt-20 pb-12 relative overflow-hidden"
      style={{ background: 'var(--color-projects-bg)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={elementRef}
          className={`text-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
                      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
                      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Una selección de mis trabajos más recientes que demuestran mi experiencia en desarrollo web, móvil y diseño UX/UI.
          </p>
          
          {/* Visual separator after main title */}
          <div className="flex justify-center mb-8">
            <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        {/* Development Projects Section */}
        <motion.div 
          ref={developmentRef}
          className="mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isDevelopmentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Header - Simplified for better hierarchy */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isDevelopmentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <motion.div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--color-projects-accent-dev)' }}
                initial={{ scale: 0, rotate: -180 }}
                animate={isDevelopmentInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 150 }}
              >
                <Code className="w-4 h-4 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground">
                Proyectos de <span className="text-primary">Desarrollo</span>
              </h3>
            </div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Aplicaciones web y móviles desarrolladas con las últimas tecnologías y mejores prácticas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {developmentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isDevelopmentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card 
                  className="group relative overflow-hidden backdrop-blur-md border transition-all duration-500 rounded-xl hover:backdrop-blur-lg"
                  style={{ 
                    backgroundColor: 'var(--color-projects-card-bg)',
                    borderColor: 'var(--color-projects-card-border)',
                    boxShadow: '0 20px 25px -5px var(--color-projects-shadow), 0 10px 10px -5px var(--color-projects-shadow)'
                  }}
                >
                {/* Development card accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: 'var(--color-projects-accent-dev)' }}
                ></div>
                <CardContent className="p-0">
                  {/* Project image with overlay */}
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={project.image || "/placeholder.svg"}
                      alt={`Captura de pantalla del proyecto ${project.title} - ${project.description.substring(0, 60)}. Desarrollado con ${project.technologies.slice(0, 3).join(', ')}`}
                      width={500}
                      height={300}
                      className={`w-full h-48 ${
                        isMobileAppImage(project.image) 
                          ? 'object-contain bg-muted/50' 
                          : 'object-cover'
                      }`}
                      fallbackSrc="/placeholder.svg"
                    />
                    
                    {/* Hover overlay - removed redundant buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span 
                          className="px-3 py-1 text-white text-xs font-semibold rounded-full shadow-lg"
                          style={{ background: 'var(--color-projects-accent-design)' }}
                        >
                          ⭐ Destacado
                        </span>
                      </div>
                    )}

                    {/* Private badge */}
                    {project.isPrivate && (
                      <div className="absolute top-4 left-4">
                        <span 
                          className="px-3 py-1 text-xs font-semibold rounded-full shadow-lg border"
                          style={{ 
                            backgroundColor: 'var(--color-projects-private-bg)',
                            color: 'var(--color-projects-private-text)',
                            borderColor: 'var(--color-projects-private-text)'
                          }}
                        >
                          🔒 Privado
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Period and Role */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{project.period}</span>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="mb-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        {project.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 rounded-full text-sm font-medium transition-colors hover:opacity-80 border"
                          style={{
                            backgroundColor: 'var(--color-projects-badge-bg)',
                            color: 'var(--color-projects-badge-text)',
                            borderColor: 'var(--color-projects-badge-text)'
                          }}
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
                            className="flex-1 disabled:opacity-50"
                            style={{
                              borderColor: 'var(--color-projects-private-text)',
                              color: 'var(--color-projects-private-text)'
                            }}
                            disabled
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Sitio Privado
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="disabled:opacity-50"
                            style={{
                              borderColor: 'var(--color-projects-private-text)',
                              color: 'var(--color-projects-private-text)'
                            }}
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
                            className="text-white flex-1 group/btn shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{ background: 'var(--color-projects-accent-dev)' }}
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Separator - Enhanced for better focus */}
        <div className="relative mb-20">
          <div className="flex justify-center">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-muted to-transparent"></div>
          </div>
        </div>

        {/* Design Projects Section */}
        <motion.div 
          ref={designRef}
          className="mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isDesignInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Section Header - Simplified for better hierarchy */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isDesignInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <motion.div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--color-projects-accent-design)' }}
                initial={{ scale: 0, rotate: -180 }}
                animate={isDesignInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 150 }}
              >
                <Palette className="w-4 h-4 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground">
                Proyectos de <span className="text-accent">Diseño UX/UI</span>
              </h3>
            </div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Diseños centrados en el usuario con investigación UX, wireframes, prototipos y sistemas de diseño.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {designProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isDesignInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card 
                  className="group relative overflow-hidden backdrop-blur-md border transition-all duration-500 rounded-xl hover:backdrop-blur-lg"
                  style={{ 
                    backgroundColor: 'var(--color-projects-card-bg)',
                    borderColor: 'var(--color-projects-card-border)',
                    boxShadow: '0 20px 25px -5px var(--color-projects-shadow), 0 10px 10px -5px var(--color-projects-shadow)'
                  }}
                >
                {/* Design card accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: 'var(--color-projects-accent-design)' }}
                ></div>
                <CardContent className="p-0">
                  {/* Project image with overlay */}
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={project.image || "/placeholder.svg"}
                      alt={`Captura de pantalla del proyecto ${project.title} - ${project.description.substring(0, 60)}. Desarrollado con ${project.technologies.slice(0, 3).join(', ')}`}
                      width={500}
                      height={300}
                      className={`w-full h-48 ${
                        isMobileAppImage(project.image) 
                          ? 'object-contain bg-muted/50' 
                          : 'object-cover'
                      }`}
                      fallbackSrc="/placeholder.svg"
                    />
                    
                    {/* Hover overlay - removed redundant buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-lg">
                          ⭐ Destacado
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Period and Role */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm font-medium text-accent">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{project.period}</span>
                      </div>
                    </div>

                    {/* Role and Client */}
                    <div className="mb-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        {project.role}
                      </span>
                      {project.client && (
                        <div className="mt-1">
                          {project.demoUrl && project.demoUrl !== "#" ? (
                            <Link 
                              href={project.demoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              {project.client}
                            </Link>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              {project.client}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 rounded-full text-sm font-medium transition-colors hover:opacity-80 border"
                          style={{
                            backgroundColor: 'var(--color-projects-badge-bg)',
                            color: 'var(--color-projects-badge-text)',
                            borderColor: 'var(--color-projects-badge-text)'
                          }}
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
                            className="text-white w-full group/btn shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{ background: 'var(--color-projects-accent-design)' }}
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
                          className="text-white w-full group/btn shadow-lg hover:shadow-xl transition-all duration-300"
                          style={{ background: 'var(--color-projects-accent-dev)' }}
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View more projects button */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/proyectos">
                Ver todos los proyectos
                <motion.div
                  className="ml-2 inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
