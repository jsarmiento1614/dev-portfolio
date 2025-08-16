"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { 
  Mail, 
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

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

  return (
    <section 
      id="contacto" 
      className="py-20 relative overflow-hidden"
      style={{ background: 'var(--color-contact-bg)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Tienes un <span className="gradient-text">proyecto</span> en mente?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Me encantaría escuchar sobre tu idea y ayudarte a convertirla en realidad. 
            Estoy disponible para proyectos freelance y oportunidades de colaboración.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div>
            <div 
              className="backdrop-blur-md border rounded-xl p-8"
              style={{
                backgroundColor: 'var(--color-contact-card-bg)',
                borderColor: 'var(--color-contact-card-border)',
                boxShadow: '0 20px 25px -5px var(--color-contact-shadow), 0 10px 10px -5px var(--color-contact-shadow)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Envíame un mensaje</h3>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-300 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>¡Mensaje enviado correctamente! Te responderé pronto.</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 text-red-300 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-foreground placeholder-muted-foreground rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-contact-input-bg)',
                      borderColor: 'var(--color-contact-input-border)'
                    }}
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-foreground placeholder-muted-foreground rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-contact-input-bg)',
                      borderColor: 'var(--color-contact-input-border)'
                    }}
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 text-foreground placeholder-muted-foreground rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    style={{
                      backgroundColor: 'var(--color-contact-input-bg)',
                      borderColor: 'var(--color-contact-input-border)'
                    }}
                    placeholder="Cuéntame sobre tu proyecto, timeline, presupuesto y cualquier detalle relevante..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full disabled:opacity-50 py-3 text-lg font-semibold text-white rounded-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  style={{ background: 'var(--color-projects-accent-dev)' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando mensaje...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Información de contacto
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 backdrop-blur-md rounded-lg transition-all duration-300 border group"
                    style={{
                      backgroundColor: 'var(--color-contact-card-bg)',
                      borderColor: 'var(--color-contact-card-border)',
                      boxShadow: '0 10px 15px -3px var(--color-contact-shadow)'
                    }}
                  >
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary" />
                Conectemos
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
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
                    className="flex items-center gap-4 p-4 backdrop-blur-md rounded-lg transition-all duration-300 border group"
                    style={{
                      backgroundColor: 'var(--color-contact-card-bg)',
                      borderColor: 'var(--color-contact-card-border)',
                      boxShadow: '0 10px 15px -3px var(--color-contact-shadow)'
                    }}
                  >
                    <div className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{social.name}</h4>
                      <p className="text-muted-foreground">{social.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-foreground">Disponible para proyectos</span>
              </div>
              <p className="text-muted-foreground text-sm">
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
