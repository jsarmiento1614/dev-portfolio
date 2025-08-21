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
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-card backdrop-blur-sm border border-border">
              <CardContent className="p-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ¡Gracias por suscribirte!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Te mantendremos informado sobre nuevos artículos y contenido exclusivo.
                </p>
                <Button
                  onClick={() => setIsSubscribed(false)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
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
    <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-left">
              <div className="flex items-center gap-3 text-primary">
                <Bell className="h-6 w-6" />
                <span className="font-medium">Newsletter</span>
              </div>
              
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                No te pierdas{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ningún artículo
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Suscríbete para recibir las últimas novedades sobre desarrollo web, 
                mejores prácticas y tutoriales directamente en tu email.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Artículos exclusivos cada semana</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Tips y trucos de desarrollo</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sin spam, solo contenido valioso</span>
                </div>
              </div>
            </div>

            {/* Right Content - Newsletter Form */}
            <div className="animate-fade-in-right">
              <Card className="bg-card backdrop-blur-sm border border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Suscríbete Gratis
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
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
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground border-0 card-hover-effect"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                          Suscribiendo...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Suscribirse
                        </div>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
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
