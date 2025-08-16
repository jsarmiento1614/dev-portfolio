"use client"

import { useState } from "react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  Smartphone,
  Palette,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Globe,
  Award,
  Users,
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
    { name: "Docker", icon: Palette, category: "DevOps", level: 80 },
    { name: "Figma", icon: Palette, category: "Design", level: 95 },
    { name: "Illustrator", icon: Palette, category: "Design", level: 80 },
    { name: "Photoshop", icon: Palette, category: "Design", level: 80 },
  ]

  const experiences = [
    {
      icon: Award,
      title: "6+ Años",
      description: "Experiencia profesional",
    },
    {
      icon: Users,
      title: "15+ Proyectos",
      description: "Completados exitosamente",
    },
    {
      icon: GraduationCap,
      title: "Ingeniería",
      description: "En Informática",
    },
    {
      icon: MapPin,
      title: "San Pedro Sula",
      description: "Honduras",
    },
  ]

  const skillCategories = ["Frontend", "Backend", "Mobile", "Database", "DevOps", "Design"]

  return (
    <section id="sobre-mi" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sobre <span className="text-primary">mí</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Soy un profesional enfocado en el diseño y desarrollo de aplicaciones web/móviles,
                aplicando un toque de UX/UI a cada proyecto. Con más de 6 años de experiencia,
                he trabajado en proyectos que van desde aplicaciones web complejas hasta sistemas móviles.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                Mi enfoque se centra en escribir código limpio, escalable y mantenible, siempre
                buscando las mejores prácticas y las tecnologías más actuales para ofrecer
                resultados excepcionales.
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Información Personal</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">jsarmiento1614@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+504 8785-7498</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">San Pedro Sula, Honduras</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Hondureño</span>
                </div>
              </div>
            </div>

            {/* Experience cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="bg-card backdrop-blur-sm border border-border shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl"
                >
                  <CardContent className="p-4 text-center">
                    <exp.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{exp.title}</div>
                    <div className="text-sm text-muted-foreground">{exp.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right column - Image and skills */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Profile image */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-border shadow-xl hover:shadow-2xl transition-all duration-500">
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
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <Palette className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Skills section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground text-center">Tecnologías que domino</h3>

              {/* Skill categories */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {skillCategories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium cursor-pointer bg-card border-border text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
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
                    className={`relative p-4 bg-card border border-border rounded-lg hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                      activeSkill === skill.name ? "ring-2 ring-ring" : ""
                    }`}
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-[width] duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Level indicator */}
                    <div className="absolute top-2 right-2 text-xs font-bold text-primary">{skill.level}%</div>
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
