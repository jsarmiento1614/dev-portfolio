# Configuración de Google Analytics

Este documento explica cómo configurar y usar Google Analytics en el proyecto.

## Configuración Inicial

### 1. Crear cuenta de Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una nueva cuenta o usa una existente
3. Crea una nueva propiedad para tu sitio web
4. Obtén tu **ID de medición** (formato: G-XXXXXXXXXX)

### 2. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Reemplaza G-XXXXXXXXXX con tu ID real de Google Analytics
```

## Componentes Creados

### GoogleAnalytics Component (`components/google-analytics.tsx`)
- Maneja la carga del script de Google Analytics
- Rastrea automáticamente las navegaciones entre páginas
- Se integra en el layout principal

### Analytics Library (`lib/analytics.ts`)
- Funciones para rastrear eventos personalizados
- Eventos específicos para el portafolio:
  - `trackContactForm()` - Envío de formulario de contacto
  - `trackProjectView(projectName)` - Visualización de proyectos
  - `trackDownloadCV()` - Descarga de CV
  - `trackSocialLink(platform)` - Clicks en enlaces sociales

### useAnalytics Hook (`hooks/use-analytics.ts`)
- Hook personalizado para facilitar el uso de analytics
- Proporciona funciones de tracking optimizadas

## Uso en Componentes

### Tracking básico de eventos

```tsx
import { useAnalytics } from '@/hooks/use-analytics'

export default function MyComponent() {
  const { trackEvent, trackContact, trackProject } = useAnalytics()

  const handleContactSubmit = () => {
    trackContact() // Rastrea el envío del formulario
  }

  const handleProjectClick = (projectName: string) => {
    trackProject(projectName) // Rastrea la visualización del proyecto
  }

  const handleCustomEvent = () => {
    trackEvent('custom_action', 'engagement', 'custom_label')
  }

  return (
    // Tu componente aquí
  )
}
```

### Tracking de enlaces sociales

```tsx
const { trackSocial } = useAnalytics()

const handleSocialClick = (platform: string) => {
  trackSocial(platform)
}

// En tu JSX
<a href="https://linkedin.com" onClick={() => handleSocialClick('linkedin')}>
  LinkedIn
</a>
```

## Eventos Disponibles

### Eventos Automáticos
- **Page Views**: Se rastrean automáticamente al navegar entre páginas
- **Session Start**: Se rastrea automáticamente al cargar la página

### Eventos Personalizados
- **Contact Form Submission**: `trackContact()`
- **Project View**: `trackProject(projectName)`
- **CV Download**: `trackCVDownload()`
- **Social Link Click**: `trackSocial(platform)`
- **Custom Event**: `trackEvent(action, category, label, value?)`

## Verificación

### 1. Verificar en Google Analytics
1. Ve a tu panel de Google Analytics
2. Navega a "Reports" > "Realtime" > "Overview"
3. Visita tu sitio web
4. Deberías ver actividad en tiempo real

### 2. Verificar en el navegador
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Network"
3. Busca requests a `googletagmanager.com`
4. Deberías ver requests de analytics

### 3. Verificar en la consola
1. Abre la consola del navegador
2. Escribe `window.gtag` y presiona Enter
3. Deberías ver la función gtag disponible

## Troubleshooting

### El tracking no funciona
1. Verifica que `NEXT_PUBLIC_GA_ID` esté configurado correctamente
2. Asegúrate de que el ID comience con "G-"
3. Verifica que no haya bloqueadores de anuncios activos
4. Revisa la consola del navegador para errores

### No aparecen datos en Google Analytics
1. Espera 24-48 horas para que aparezcan los datos
2. Verifica que estés en la propiedad correcta de GA
3. Asegúrate de que el filtro de IP no esté bloqueando tu IP

## Privacidad y GDPR

### Configuración de consentimiento
Para cumplir con GDPR, considera implementar:

1. Banner de consentimiento de cookies
2. Opción de opt-out
3. Información clara sobre el uso de analytics

### Ejemplo de banner de consentimiento

```tsx
const [analyticsConsent, setAnalyticsConsent] = useState(false)

useEffect(() => {
  if (analyticsConsent) {
    // Habilitar Google Analytics
  }
}, [analyticsConsent])
```

## Recursos Adicionales

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Analytics Integration](https://nextjs.org/docs/advanced-features/measuring-performance)
- [GDPR Compliance Guide](https://developers.google.com/analytics/devguides/collection/ga4/consent)
