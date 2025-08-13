"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useAnalytics } from "@/hooks/use-analytics"
import { useVercelAnalytics } from "@/hooks/use-vercel-analytics"
import Link from "next/link"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Linkedin, 
  Github, 
  Palette,
  MessageSquare,
  Clock,
  Globe,
  MessageCircle,
  AlertCircle
} from "lucide-react"

export default function ContactSection() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const { elementRef, isVisible } = useScrollAnimation()
  const { trackContact, trackSocial } = useAnalytics()
  const { trackContact: trackVercelContact, trackSocial: trackVercelSocial } = useVercelAnalytics()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje')
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      trackContact() // Track contact form submission
      trackVercelContact() // Track with Vercel Analytics
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el mensaje')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.message

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jsarmiento1614@gmail.com",
      href: "mailto:jsarmiento1614@gmail.com",
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+504 8785-7498",
      href: "https://wa.me/50487857498?text=Hola%20Jesús,%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte%20para%20discutir%20un%20proyecto%20o%20oportunidad%20laboral.%20¿Podrías%20darme%20más%20información?",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "San Pedro Sula, Honduras",
      href: "#",
      color: "bg-purple-500"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/jsarmiento1614",
      color: "bg-blue-600",
      description: "Conecta conmigo profesionalmente"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/jsarmiento1614",
      color: "bg-gray-900",
      description: "Revisa mi código y proyectos"
    },
    {
      icon: Palette,
      name: "Behance",
      url: "https://www.behance.net/jsarmiento1614",
      color: "bg-blue-500",
      description: "Portfolio de diseño UX/UI"
    }
  ]

  if (!mounted) {
    return (
      <section id="contacto" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Tienes un <span className="gradient-text">proyecto</span> en mente?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Me encantaría escuchar sobre tu idea y ayudarte a convertirla en realidad. 
              Estoy disponible para proyectos freelance y oportunidades de colaboración.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Tienes un <span className="gradient-text">proyecto</span> en mente?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Me encantaría escuchar sobre tu idea y ayudarte a convertirla en realidad. 
            Estoy disponible para proyectos freelance y oportunidades de colaboración.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <Card className="shadow-xl border-0 bg-white dark:bg-gray-800 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Envíame un mensaje</h3>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>¡Mensaje enviado correctamente! Te responderé pronto.</span>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Nombre completo
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Cuéntame sobre tu proyecto, timeline, presupuesto y cualquier detalle relevante..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 py-3 text-lg font-semibold group transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando mensaje...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Enviar mensaje
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Información de contacto
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover-lift border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Conectemos
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes o simplemente charlar
                sobre tecnología. ¡No dudes en contactarme!
              </p>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackSocial(social.name.toLowerCase())
                      trackVercelSocial(social.name.toLowerCase())
                    }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover-lift border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{social.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{social.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-gray-900 dark:text-white">Disponible para proyectos</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Actualmente aceptando nuevos proyectos freelance y oportunidades de colaboración.
                Tiempo de respuesta: 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
