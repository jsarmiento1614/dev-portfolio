"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Quote, Star, ChevronLeft, ChevronRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { elementRef, isVisible } = useScrollAnimation()
  const testimonialsRef = useRef(null)
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "Product Manager",
      company: "TechStart SRL",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Jesús transformó completamente nuestra visión digital. Su expertise en Angular y diseño UX/UI resultó en una aplicación que superó todas nuestras expectativas. El equipo quedó impresionado con su profesionalismo y atención al detalle.",
      project: "Plataforma de Gestión Empresarial"
    },
    {
      id: 2,
      name: "Carlos Mendoza", 
      position: "CEO",
      company: "Innovación Digital",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Trabajar con Jesús fue excepcional. No solo entregó un producto de alta calidad, sino que también aportó ideas valiosas que mejoraron significativamente nuestro flujo de trabajo. Su conocimiento técnico es impresionante.",
      project: "Sistema de Trading Automatizado"
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      position: "Directora de Marketing",
      company: "Grupo Leitz",
      avatar: "/placeholder-user.jpg", 
      rating: 5,
      text: "El diseño UX/UI que desarrolló Jesús para nuestra aplicación móvil de encuestas fue perfecto. Entendió exactamente lo que necesitábamos y lo ejecutó de manera brillante. Los usuarios aman la interfaz.",
      project: "Aplicación de Encuestas Móvil"
    },
    {
      id: 4,
      name: "Roberto Silva",
      position: "CTO", 
      company: "SecureX Solutions",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Jesús no solo es un desarrollador talentoso, sino también un excelente consultor. Su trabajo en nuestro manual de marca y prototipo de aplicación demostró su versatilidad y creatividad excepcional.",
      project: "Manual de Marca y Prototipo"
    },
    {
      id: 5,
      name: "Lucía Herrera",
      position: "Founder",
      company: "Orange Delivery",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Desde el primer día, Jesús entendió nuestra visión para la startup. Su trabajo en el diseño de identidad de marca y UX fue fundamental para el éxito de nuestro lanzamiento. Altamente recomendado.",
      project: "Identidad de Marca y UX Design"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section 
      id="testimonios" 
      className="py-20 relative overflow-hidden"
      style={{ background: 'var(--color-about-bg)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <motion.div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--color-projects-accent-design)' }}
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 150 }}
              >
                <Quote className="w-4 h-4 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Lo que dicen mis <span className="gradient-text">Clientes</span>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Testimonios reales de clientes que han confiado en mi trabajo para transformar sus ideas en realidad digital.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Carousel */}
        <motion.div 
          ref={testimonialsRef}
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Main Testimonial Card */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <Card 
                className="max-w-4xl mx-auto backdrop-blur-md border transition-all duration-500"
                style={{
                  backgroundColor: 'var(--color-contact-card-bg)',
                  borderColor: 'var(--color-contact-card-border)',
                  boxShadow: '0 20px 25px -5px var(--color-contact-shadow), 0 10px 10px -5px var(--color-contact-shadow)'
                }}
              >
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: 'var(--color-projects-accent-design)' }}
                      >
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>

                    {/* Project Info */}
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground font-medium">
                        Proyecto: <span className="text-primary">{testimonials[currentTestimonial].project}</span>
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="text-center sm:text-left">
                          <p className="font-semibold text-foreground text-lg">
                            {testimonials[currentTestimonial].name}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {testimonials[currentTestimonial].position}
                          </p>
                          <p className="text-primary text-sm font-medium">
                            {testimonials[currentTestimonial].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-16">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-16">
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div 
          className="flex justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6+</div>
            <div className="text-muted-foreground">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Clientes Satisfechos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
