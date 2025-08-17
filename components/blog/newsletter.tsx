'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Bell, CheckCircle } from 'lucide-react'

export function BlogNewsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  ¡Gracias por suscribirte!
                </h3>
                <p className="text-gray-300 mb-6">
                  Te mantendremos informado sobre nuevos artículos y contenido exclusivo.
                </p>
                <Button
                  onClick={() => setIsSubscribed(false)}
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400/10"
                >
                  Suscribir otro email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left">
              <div className="flex items-center gap-3 text-purple-400">
                <Bell className="h-6 w-6" />
                <span className="font-medium">Newsletter</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white leading-tight">
                No te pierdas{' '}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ningún artículo
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Suscríbete para recibir las últimas novedades sobre desarrollo web, 
                mejores prácticas y tutoriales directamente en tu email.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Artículos exclusivos cada semana</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Tips y trucos de desarrollo</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Sin spam, solo contenido valioso</span>
                </div>
              </div>
            </div>

            {/* Right Content - Newsletter Form */}
            <div className="animate-fade-in-right">
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Mail className="h-5 w-5 text-purple-400" />
                    Suscríbete Gratis
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Recibe contenido exclusivo directamente en tu bandeja de entrada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 card-hover-effect"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Suscribiendo...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Suscribirse
                        </div>
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Al suscribirte, aceptas recibir emails promocionales. 
                      Puedes cancelar en cualquier momento.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
