"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Breadcrumbs from "@/components/breadcrumbs"
import { ArrowLeft, MessageSquare, Clock, Code, Smartphone, Globe, Palette } from "lucide-react"

export default function FAQPage() {
  const breadcrumbItems = [
    { label: "FAQ", current: true }
  ]

  const faqCategories = [
    {
      id: "general",
      title: "Servicios Generales",
      icon: MessageSquare,
      questions: [
        {
          id: "what-do-i-do",
          question: "¿Qué servicios de desarrollo ofreces?",
          answer: "Ofrezco servicios completos de desarrollo Full Stack incluyendo: desarrollo de aplicaciones web con React/Next.js/Angular, desarrollo backend con Node.js, creación de aplicaciones móviles nativas y híbridas, diseño de APIs REST y GraphQL, integración de bases de datos PostgreSQL/MongoDB, y arquitectura de sistemas escalables."
        },
        {
          id: "technologies",
          question: "¿Con qué tecnologías trabajas?",
          answer: "Mi stack principal incluye React.js, Next.js, Angular, Node.js, TypeScript, JavaScript ES6+, PostgreSQL, MongoDB, Docker, Redis, y servicios cloud como Vercel y Fly.io. También trabajo con Flutter, Xamarine para desarrollo móvil y si el cliente solicta experiencia con otro stack no soportado se considera trabajar."
        },
        {
          id: "experience",
          question: "¿Cuánta experiencia tienes como desarrollador?",
          answer: "Tengo más de 6 años de experiencia en desarrollo Full Stack, habiendo trabajado en más de 15 proyectos para empresas y startups. Mi experiencia abarca desde aplicaciones web simples hasta sistemas complejos de trading automatizado y plataformas empresariales."
        },
        {
          id: "location",
          question: "¿Desde dónde trabajas y qué horarios manejas?",
          answer: "Trabajo desde Honduras y estoy disponible en horario central (GMT-6). Ofrezco servicios tanto para clientes locales como internacionales, adaptándome a diferentes zonas horarias cuando el proyecto lo requiere."
        }
      ]
    },
    {
      id: "process",
      title: "Proceso de Trabajo",
      icon: Clock,
      questions: [
        {
          id: "project-timeline",
          question: "¿Cuánto tiempo toma desarrollar un proyecto?",
          answer: "El tiempo varía según la complejidad: una landing page puede tomar 1-2 semanas, una aplicación web completa 1-3 meses, y sistemas complejos pueden requerir 3-6 meses. Siempre proporciono estimaciones detalladas después de analizar los requisitos."
        },
        {
          id: "project-process",
          question: "¿Cómo es tu proceso de desarrollo?",
          answer: "Sigo una metodología ágil: 1) Análisis de requisitos y planificación, 2) Diseño de arquitectura y mockups, 3) Desarrollo iterativo con entregas semanales, 4) Testing y optimización, 5) Despliegue y documentación. Mantengo comunicación constante durante todo el proceso."
        },
        {
          id: "communication",
          question: "¿Cómo mantienes la comunicación durante el proyecto?",
          answer: "Utilizo herramientas como Slack, WhatsApp o email para comunicación diaria, y reuniones semanales por Zoom/Meet para revisiones de progreso. Proporciono actualizaciones regulares y acceso a versiones de desarrollo para feedback continuo."
        },
        {
          id: "revisions",
          question: "¿Incluyes revisiones en tus proyectos?",
          answer: "Sí, incluyo 2-3 rondas de revisiones en cada fase del proyecto. Las revisiones mayores de alcance se discuten por separado. Mi objetivo es asegurar que el resultado final supere las expectativas del cliente."
        }
      ]
    },
    {
      id: "technical",
      title: "Aspectos Técnicos",
      icon: Code,
      questions: [
        {
          id: "responsive-design",
          question: "¿Todos tus proyectos son responsive?",
          answer: "Absolutamente. Todos mis proyectos están optimizados para dispositivos móviles, tablets y desktop. Utilizo un enfoque mobile-first y testing en múltiples dispositivos para garantizar una experiencia perfecta en cualquier pantalla."
        },
        {
          id: "seo-optimization",
          question: "¿Incluyes optimización SEO?",
          answer: "Sí el proyecto lo requiere, implemento SEO técnico básico en todos los proyectos: metadata optimizada, structured data (Schema.org), sitemap.xml, robots.txt, optimización de imágenes, Core Web Vitals, y URLs semánticas."
        },
        {
          id: "performance",
          question: "¿Cómo garantizas el rendimiento de las aplicaciones?",
          answer: "Optimizo el rendimiento mediante: code splitting, lazy loading, optimización de imágenes WebP/AVIF, minificación de assets, CDN, caching estratégico, y monitoreo con Core Web Vitals. Objetivo: puntuaciones 90+ en PageSpeed Insights."
        },
        {
          id: "security",
          question: "¿Qué medidas de seguridad implementas?",
          answer: "Implemento: HTTPS obligatorio, validación de inputs, sanitización de datos, autenticación JWT, rate limiting, headers de seguridad, actualizaciones regulares de dependencias, y testing de vulnerabilidades con herramientas especializadas."
        }
      ]
    },
    {
      id: "business",
      title: "Aspectos Comerciales", 
      icon: Globe,
      questions: [
        {
          id: "pricing",
          question: "¿Cómo calculas el precio de un proyecto?",
          answer: "Los precios se basan en: complejidad técnica, tiempo estimado, tecnologías requeridas, y valor para el negocio. Ofrezco presupuestos fijos para proyectos definidos y tarifas por hora para desarrollos iterativos. Siempre proporciono presupuestos detallados sin compromiso."
        },
        {
          id: "payment-terms",
          question: "¿Cuáles son tus términos de pago?",
          answer: "Generalmente trabajo con: 30% al inicio del proyecto, 40% en el hito intermedio, y 30% al finalizar. Para proyectos largos ofrezco pagos mensuales. Acepto múltiples métodos de pago: transferencias bancarias, PayPal, y criptomonedas (USDT) a través de exchanges reconocidos para mayor flexibilidad internacional."
        },
        {
          id: "project-ownership",
          question: "¿Quién es propietario del código desarrollado?",
          answer: "El cliente es propietario completo del código una vez completado el pago. Proporciono documentación completa, código fuente, y instrucciones de despliegue. Mantengo confidencialidad absoluta sobre todos los proyectos."
        },
        {
          id: "post-launch-support",
          question: "¿Ofreces soporte post-lanzamiento?",
          answer: "Sí, ofrezco 30 días de soporte gratuito para bugs tras el lanzamiento. Adicionalmente, proporciono planes de mantenimiento mensual que incluyen: actualizaciones de seguridad, respaldos, monitoreo, y pequeñas mejoras funcionales."
        },
        {
          id: "hosting-deployment",
          question: "¿Te encargas del hosting y despliegue?",
          answer: "Puedo gestionar el despliegue en plataformas como Vercel, Netlify, AWS, o servidores específicos. También puedo recomendar y configurar soluciones de hosting según las necesidades del proyecto. El costo del hosting va por separado."
        }
      ]
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.questions.map(qa => ({
        "@type": "Question",
        "name": qa.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": qa.answer
        }
      }))
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumbs items={breadcrumbItems} className="mb-4" />
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Preguntas Frecuentes
              </h1>
              <p className="text-slate-300">
                Respuestas a las preguntas más comunes sobre mis servicios de desarrollo
              </p>
            </div>
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Volver al portafolio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.id} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <IconComponent className="w-6 h-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((qa) => (
                      <AccordionItem key={qa.id} value={qa.id} className="border-slate-600">
                        <AccordionTrigger className="text-left text-white hover:text-blue-400">
                          {qa.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-300 leading-relaxed">
                          {qa.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                ¿No encuentras la respuesta que buscas?
              </h2>
              <p className="text-slate-300 mb-6">
                Estaré encantado de responder cualquier pregunta adicional sobre tu proyecto
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/#contacto">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Contactar ahora
                  </Button>
                </Link>
                <Link href="/#proyectos">
                  <Button variant="outline" size="lg">
                    Ver proyectos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
