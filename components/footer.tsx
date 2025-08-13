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
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {/* Personal Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Jesús Alberto Sarmiento Bautista
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full Stack Web/Móvil Developer con más de 6 años de experiencia en desarrollo 
              de aplicaciones web, móviles y diseño UX/UI. Apasionado por crear soluciones 
              digitales innovadoras y experiencias de usuario excepcionales.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:jsarmiento1614@gmail.com" className="hover:text-blue-400 transition-colors">
                  jsarmiento1614@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="https://wa.me/50487857498" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  +504 8785-7498
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>San Pedro Sula, Honduras</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre-mi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre mí
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Proyectos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Redes Sociales</h4>
            <div className="space-y-3">
              <Link
                href="https://linkedin.com/in/jsarmiento1614"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </Link>
              
              <Link
                href="https://github.com/jsarmiento1614"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-gray-400 transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </Link>
              
              <Link
                href="https://behance.net/jsarmiento1614"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
              >
                <Palette className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Behance</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} Jesús Alberto Sarmiento Bautista. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Hecho con <Heart className="inline w-4 h-4 text-red-500" /> en Honduras
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 group"
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
