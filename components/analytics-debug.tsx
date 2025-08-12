'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAnalytics } from '@/hooks/use-analytics'
import { useVercelAnalytics } from '@/hooks/use-vercel-analytics'
import { GA_TRACKING_ID } from '@/lib/analytics'
import { CheckCircle, AlertCircle, Play, Mail, Github, Linkedin, Zap } from 'lucide-react'

export default function AnalyticsDebug() {
  const [isVisible, setIsVisible] = useState(false)
  const { trackEvent, trackContact, trackProject, trackSocial } = useAnalytics()
  const { 
    trackEvent: trackVercelEvent, 
    trackContact: trackVercelContact, 
    trackProject: trackVercelProject, 
    trackSocial: trackVercelSocial 
  } = useVercelAnalytics()

  const testEvents = [
    {
      name: 'GA - Contact Form',
      action: () => trackContact(),
      icon: Mail
    },
    {
      name: 'GA - Project View',
      action: () => trackProject('Test Project'),
      icon: Play
    },
    {
      name: 'GA - Social Link',
      action: () => trackSocial('linkedin'),
      icon: Linkedin
    },
    {
      name: 'Vercel - Contact Form',
      action: () => trackVercelContact(),
      icon: Zap
    },
    {
      name: 'Vercel - Project View',
      action: () => trackVercelProject('Test Project'),
      icon: Zap
    },
    {
      name: 'Vercel - Social Link',
      action: () => trackVercelSocial('linkedin'),
      icon: Zap
    },
    {
      name: 'Vercel - Custom Event',
      action: () => trackVercelEvent('test_custom_event', { test: true }),
      icon: CheckCircle
    }
  ]

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          variant="outline"
          size="sm"
          className="bg-white dark:bg-gray-800 shadow-lg"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Debug Analytics
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <Card className="shadow-xl border-2">
        <CardHeader className="pb-3">
                   <CardTitle className="text-lg flex items-center gap-2">
           <CheckCircle className="w-5 h-5 text-green-500" />
           Analytics Debug
         </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
                     {/* Analytics Status */}
           <div className="space-y-2">
             <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
               {GA_TRACKING_ID ? (
                 <>
                   <CheckCircle className="w-4 h-4 text-green-500" />
                   <span className="text-sm">Google Analytics: {GA_TRACKING_ID}</span>
                 </>
               ) : (
                 <>
                   <AlertCircle className="w-4 h-4 text-red-500" />
                   <span className="text-sm text-red-500">Google Analytics: No configurado</span>
                 </>
               )}
             </div>
             <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
               <Zap className="w-4 h-4 text-blue-500" />
               <span className="text-sm">Vercel Analytics: Activo</span>
             </div>
           </div>

          {/* Test Events */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Test Events:</h4>
            {testEvents.map((event, index) => (
              <Button
                key={index}
                onClick={event.action}
                variant="outline"
                size="sm"
                className="w-full justify-start"
              >
                <event.icon className="w-4 h-4 mr-2" />
                {event.name}
              </Button>
            ))}
          </div>

          {/* Instructions */}
          <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            <p>1. Abre las herramientas de desarrollador (F12)</p>
            <p>2. Ve a la pestaña "Network"</p>
            <p>3. Haz clic en los botones de arriba</p>
            <p>4. Busca requests a "googletagmanager.com"</p>
          </div>

          {/* Close Button */}
          <Button
            onClick={() => setIsVisible(false)}
            variant="ghost"
            size="sm"
            className="w-full"
          >
            Cerrar
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
