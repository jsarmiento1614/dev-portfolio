"use client"

import { useState } from "react"
import Image from "next/image"
import { OptimizedImage } from "@/components/ui/optimized-image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { 
  ExternalLink, 
  Github, 
  Eye, 
  ArrowLeft, 
  Calendar, 
  Filter,
  Search,
  Code,
  Smartphone,
  Palette,
  Database,
  Cloud
} from "lucide-react"

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const [searchTerm, setSearchTerm] = useState("")
  const { elementRef, isVisible } = useScrollAnimation()

  // Función para detectar si una imagen es de una app móvil
  const isMobileAppImage = (imagePath: string) => {
    return imagePath.includes('-app.png') || imagePath.includes('app-')
  }

  const allProjects = [
    {
      id: 1,
      title: "Trading Automatizado - Plataforma Backend",
      type: "development",
      description:
        "Diseño e implementación de una plataforma backend para gestión y ejecución de estrategias de trading automatizado en mercados como Forex, Criptomonedas e Índices bursátiles. Desarrollo de lógica para determinar en tiempo real si un mercado está abierto o cerrado usando horarios internacionales y zonas horarias.",
      image: "/preview/trading-platform.png",
      technologies: ["TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "WebSockets", "REST API", "Docker", "Redis", "Fly.io", "SimpleFX API", "JavaScript ES6+", "Git", "CI/CD"],
      demoUrl: "https://github.com/jsarmiento1614/jtrading-api",
      repoUrl: "https://github.com/jsarmiento1614/jtrading-api",
      category: "Full Stack",
      featured: true,
      period: "2025-03 - 2025-08",
      role: "Desarrollador Full Stack",
      status: "En desarrollo",
      isPrivate: false,
      privateReason: "Proyecto de trading automatizado - Código propietario"
    },
    {
      id: 2,
      title: "Randa Ticketera NFT UI/UX",
      type: "development",
       description:
         "Plataforma de ticketera NFT desarrollada con React 18. Sistema completo de gestión de eventos y tokens NFT con funcionalidades avanzadas de blockchain.",
       image: "/preview/randa-site.png",
       technologies: ["React 18", "Vite", "Tailwind CSS", "TypeScript", "JavaScript ES6+", "Git"],
       demoUrl: "#",
       repoUrl: "#",
       category: "Web App",
       featured: true,
       period: "2024-12 - 2025-08",
       role: "Desarrollador React",
       status: "En desarrollo",
       isPrivate: true,
       privateReason: "Proyecto empresarial - Código propietario"
     },
         {
       id: 2,
       title: "Zero Variance - Ubiquity",
       type: "development",
       description:
         "Sistema empresarial desarrollado con Angular 15, .NET Core 8 y SQL Server. Aplicación compleja para gestión de datos y análisis de varianza con reportes avanzados y dashboards interactivos.",
       image: "/preview/zerovariance-site.png",
       technologies: ["Angular 15", ".NET Core 8", "SQL Server", "TypeScript", "Entity Framework"],
       demoUrl: "#",
       repoUrl: "#",
       category: "Enterprise",
       featured: true,
       period: "2023-05 - 2024-12",
       role: "Desarrollador Angular",
       status: "Completado",
       isPrivate: true,
       privateReason: "Sistema empresarial privado"
     },
         {
       id: 3,
       title: "NexGen Virtual Office",
       type: "development",
       description: 
         "Oficina virtual completa desarrollada con Angular. Sistema de gestión empresarial con múltiples módulos integrados incluyendo gestión de empleados, proyectos, y comunicación interna.",
       image: "/preview/nextgen-site.png",
       technologies: ["Angular", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
       demoUrl: "#",
       repoUrl: "#",
       category: "Web App",
       featured: false,
       period: "2021-12 - 2023-05",
       role: "Desarrollador Web Angular",
       status: "Completado",
       isPrivate: true,
       privateReason: "Aplicación interna corporativa"
     },
         {
               id: 4,
        title: "Grupo Leitz - App Móvil",
        type: "development",
        description:
          "Aplicación móvil desarrollada con Xamarin Forms para gestión interna del Grupo Leitz. Sistema completo de gestión empresarial móvil con sincronización offline y reportes en tiempo real.",
        image: "/preview/inloher-app.png",
        technologies: ["Xamarin Forms", "C#", ".NET", "SQL Server", "Azure"],
        demoUrl: "#",
        repoUrl: "#",
        category: "Mobile App",
        featured: false,
        period: "2021-04 - 2021-11",
        role: "Desarrollador Móvil Xamarin",
        status: "Completado",
        isPrivate: true,
        privateReason: "Aplicación interna corporativa"
     },
         {
               id: 5,
        title: "Chocolats Halba",
        type: "development",
        description:
          "Sistema de gestión para Chocolats Halba desarrollado con .NET, Xamarin, DotLiquid y Razor. Aplicación web y móvil integrada para gestión de inventario y ventas.",
        image: "/preview/olympic-app.png",
        technologies: [".NET", "Xamarin", "DotLiquid", "Razor", "C#", "SQL Server"],
        demoUrl: "#",
        repoUrl: "#",
        category: "Full Stack",
        featured: false,
        period: "2021-01 - 2021-04",
        role: "Desarrollador .NET/C#",
        status: "Completado",
        isPrivate: true,
        privateReason: "Sistema empresarial privado"
     },
         {
               id: 6,
        title: "Aplicación de Encuestas - Grupo Leitz",
        type: "design",
        description:
          "Diseño UX y prototipado de aplicación móvil para recolección, monitoreo y gestión de datos de cosecha de granos de café. Optimización de procesos agrícolas con experiencia de usuario centrada en el usuario.",
        image: "/preview/inloher-app.png",
        technologies: ["Figma", "UX Research", "Prototyping", "Mobile Design", "Agricultural UX"],
        demoUrl: "https://www.behance.net/gallery/188075513/Survey-App",
        repoUrl: "https://www.behance.net/gallery/188075513/Survey-App",
        category: "UX/UI Design",
        featured: true,
        period: "2021-04 - 2021-11",
        role: "Diseñador UX/UI",
        status: "Completado",
        client: "Grupo Leitz, TerraKappe",
        isPrivate: false
     },
         {
       id: 7,
       title: "Manual de Marca Securex",
       type: "design",
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
       status: "Completado",
       client: "Securex App"
     },
         {
       id: 8,
       title: "SuperCompra - E-commerce UX",
       type: "design",
       description:
         "Diseño UX y prototipado de aplicación de comercio electrónico para Distribuidora San Rafael. Enfoque en facilitar la experiencia de compra en línea con navegación intuitiva y procesos optimizados.",
       image: "/preview/supercompra-app.png",
       technologies: ["Figma", "E-commerce UX", "Mobile Design", "User Research", "Prototyping"],
       demoUrl: "https://www.behance.net/gallery/142323061/SuperCompra",
       repoUrl: "https://www.behance.net/gallery/142323061/SuperCompra",
       category: "E-commerce UX",
       featured: false,
       period: "2020-03 - 2020-07",
       role: "Diseñador UX/UI",
       status: "Completado",
       client: "Distribuidora San Rafael"
     },
         {
               id: 9,
        title: "Orange - Delivery App",
        type: "design",
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
        status: "Completado",
        client: "Orange App",
        isPrivate: true,
        privateReason: "Proyecto privado de startup"
     },
         {
               id: 10,
        title: "Grupo Leitz - ASP.NET",
        type: "development",
        description:
          "Sistema web desarrollado con ASP.NET Core para Grupo Leitz. Aplicación de gestión empresarial con arquitectura moderna y patrones de diseño avanzados.",
        image: "/preview/lmi-site.png",
        technologies: ["ASP.NET", ".NET Core", "C#", "SQL Server", "Entity Framework"],
        demoUrl: "#",
        repoUrl: "#",
        category: "Web App",
        featured: false,
        period: "2019-12 - 2019-02",
        role: "Desarrollador Web ASP.NET/.NET/C#",
        status: "Completado",
        isPrivate: true,
        privateReason: "Sistema interno corporativo"
     },
     {
       id: 11,
       title: "Timbrit App - Migración Flutter",
       type: "development",
       description:
         "Proceso de migración de aplicación desde Windows Móvil a sistema Android utilizando Flutter. Desarrollo de aplicación móvil moderna con funcionalidades avanzadas y experiencia de usuario optimizada.",
       image: "/preview/timbrit-app.png",
       technologies: ["Flutter", "Dart", "Android", "Mobile Development", "Migration"],
       demoUrl: "#",
       repoUrl: "#",
       category: "Mobile App",
       featured: false,
       period: "2021-04 - 2021-11",
       role: "Desarrollador Móvil Flutter",
       status: "Completado",
       isPrivate: true,
       privateReason: "Aplicación móvil privada"
     },
     {
       id: 12,
       title: "Grupo Leitz - Migración Xamarin",
       type: "development",
       description:
         "Proceso de migración de la aplicación Olympic desde Windows Móvil a sistema Android utilizando Xamarin Forms. Desarrollo de aplicación empresarial con sincronización de datos y funcionalidades avanzadas.",
       image: "/preview/olympic-app.png",
       technologies: ["Xamarin Forms", "C#", ".NET", "Android", "Migration", "SQL Server"],
       demoUrl: "#",
       repoUrl: "#",
       category: "Mobile App",
       featured: false,
       period: "2021-04 - 2021-11",
       role: "Desarrollador Móvil Xamarin",
       status: "Completado",
       isPrivate: true,
       privateReason: "Aplicación interna corporativa"
     },
     {
       id: 13,
       title: "Multicomer - Diseño UX y Desarrollo Angular",
       type: "design",
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
       status: "Completado",
       client: "Multicomer"
     },
     {
       id: 14,
       title: "San Rafael - SuperCompra y SuperEntregas",
       type: "development",
       description:
         "Análisis, diseño y ejecución del proceso UX de las aplicaciones SuperCompra y SuperEntregas. Diseño con Figma y desarrollo móvil con Flutter, integrando .NET y SQL Server para funcionalidades backend.",
       image: "/preview/supercompra-app.png",
       technologies: ["Figma", "Flutter", ".NET", "SQL Server", "UX Design", "Mobile Development"],
       demoUrl: "https://sanrafaelhn.com",
       repoUrl: "#",
       category: "Full Stack",
       featured: false,
       period: "2020-06 - 2021-01",
       role: "Diseñador UX, Desarrollador Móvil Flutter",
       status: "Completado",
       client: "San Rafael"
     },
     {
       id: 15,
       title: "Grupo ASESOR - INCIENSA",
       type: "development",
       description:
         "Apoyo en el desarrollo de la migración de dos módulos del proyecto para la clínica INCIENSA, utilizando framework propio de Grupo ASESOR. Integración de JavaScript, C# y Stored Procedures en SQL Server.",
       image: "/preview/inciensa-site.png",
       technologies: ["JavaScript", "C#", "SQL Server", "Stored Procedures", "Migration"],
       demoUrl: "https://www.grupoasesor.net",
       repoUrl: "#",
       category: "Web App",
       featured: false,
       period: "2020-11 - 2020-12",
       role: "Desarrollador Web Vanilla JS/Node.js",
       status: "Completado",
       client: "Grupo ASESOR"
     },
     {
       id: 16,
       title: "Inversiones La Paz - Sistema POS",
       type: "development",
       description:
         "Desarrollo del sistema POS (Punto de Venta) como maquetador y desarrollador web, utilizando Angular 6, TypeScript, MongoDB y Spring Boot de Java. Logro exitoso de la salida en vivo del proyecto.",
       image: "/preview/ilp-pos.png",
       technologies: ["Angular 6", "TypeScript", "MongoDB", "Spring Boot", "Java"],
       demoUrl: "https://www.grupoilp.hn",
       repoUrl: "#",
       category: "Web App",
       featured: false,
       period: "2019-03 - 2020-10",
       role: "Diseñador UI, Desarrollador Web Angular",
       status: "Completado",
       client: "Inversiones La Paz"
     }
  ]

  const categories = ["Todos", "Web App", "Mobile App", "Enterprise", "Full Stack", "UX/UI Design", "Brand Design", "E-commerce UX", "Brand + UX"]

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === "Todos" || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "En desarrollo": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "En pausa": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web App": return <Code className="w-4 h-4" />
      case "Mobile App": return <Smartphone className="w-4 h-4" />
      case "Design + Web": return <Palette className="w-4 h-4" />
      case "Enterprise": return <Database className="w-4 h-4" />
      case "Full Stack": return <Cloud className="w-4 h-4" />
      default: return <Code className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Volver al portafolio
                </Button>
              </Link>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Todos los Proyectos
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div 
          ref={elementRef}
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar proyectos, tecnologías..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                {category !== "Todos" && getCategoryIcon(category)}
                {category}
              </Button>
            ))}
          </div>

          {/* Results count */}
          <div className="text-gray-600 dark:text-gray-400">
            Mostrando {filteredProjects.length} de {allProjects.length} proyectos
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group relative overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover-lift transition-all duration-500"
            >
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
                  
                  {/* Status badge - only show if not private */}
                  {!project.isPrivate && (
                    <div className="absolute top-4 left-4">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  )}

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        Destacado
                      </Badge>
                    </div>
                  )}

                  {/* Private badge - takes priority over status */}
                  {project.isPrivate && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border border-orange-300 dark:border-orange-600">
                        🔒 Privado
                      </Badge>
                    </div>
                  )}

                  {/* Hover overlay - removed redundant buttons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  {/* Period and Role */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      {getCategoryIcon(project.category)}
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

                  {/* Client information */}
                  {project.client && (
                    <div className="mb-4">
                      {project.demoUrl && project.demoUrl !== "#" ? (
                        <Link 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {project.client}
                        </Link>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                          {project.client}
                        </span>
                      )}
                    </div>
                  )}

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
                        {/* Design projects - Show Prototype button only if demoUrl is valid */}
                        {project.type === "design" && project.demoUrl && project.demoUrl !== "#" && project.demoUrl !== "" && (
                          <Button 
                            asChild 
                            size="sm" 
                            className="bg-purple-600 hover:bg-purple-700 text-white flex-1 group/btn"
                          >
                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <Eye className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                              Ver Prototipo
                            </Link>
                          </Button>
                        )}
                        {/* Development projects - Show Code button only if repoUrl is valid */}
                        {project.type === "development" && project.repoUrl && project.repoUrl !== "#" && project.repoUrl !== "" && (
                          <Button 
                            asChild 
                            size="sm" 
                            className="bg-blue-600 hover:bg-blue-700 text-white flex-1 group/btn"
                          >
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                              Ver Código
                            </Link>
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              No se encontraron proyectos que coincidan con tu búsqueda.
            </div>
            <Button 
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("Todos")
              }}
              className="mt-4"
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
