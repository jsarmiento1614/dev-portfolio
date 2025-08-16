"use client"

import Link from "next/link"
import { 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Palette,
  Heart,
  ArrowUp
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="text-foreground relative overflow-hidden"
      style={{ background: 'var(--color-footer-bg)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {/* Personal Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Jesús Alberto Sarmiento Bautista
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Full Stack Web/Móvil Developer con más de 6 años de experiencia en desarrollo 
              de aplicaciones web, móviles y diseño UX/UI. Apasionado por crear soluciones 
              digitales innovadoras y experiencias de usuario excepcionales.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:jsarmiento1614@gmail.com" className="hover:text-primary transition-colors">
                  jsarmiento1614@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <a href="https://wa.me/50487857498" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +504 8785-7498
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>San Pedro Sula, Honduras</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Redes Sociales</h4>
            <div className="space-y-3">
              <Link
                href="https://linkedin.com/in/jsarmiento1614"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </Link>
              
              <Link
                href="https://github.com/jsarmiento1614"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </Link>
              
              <Link
                href="https://behance.net/jsarmiento1614"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Palette className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Behance</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {currentYear} Jesús Alberto Sarmiento Bautista. Todos los derechos reservados.
              </p>
              <p className="text-muted-foreground/70 text-sm mt-1">
                Hecho con <Heart className="inline w-4 h-4 text-red-500" /> en Honduras
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span className="ml-2">Volver arriba</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
