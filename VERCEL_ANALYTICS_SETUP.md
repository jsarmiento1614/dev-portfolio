# Configuración de Vercel Analytics

Este documento explica cómo configurar y usar Vercel Analytics en el proyecto.

## ¿Qué es Vercel Analytics?

Vercel Analytics es una solución de analytics moderna, privada y rápida diseñada específicamente para aplicaciones web. Ofrece:

- **Privacidad por defecto**: No requiere cookies de consentimiento
- **Rendimiento optimizado**: Carga rápida y sin impacto en Core Web Vitals
- **Integración nativa**: Funciona perfectamente con Next.js y Vercel
- **Speed Insights**: Métricas de rendimiento automáticas
- **Eventos personalizados**: Tracking de interacciones específicas

## Configuración Automática

### 1. Instalación

```bash
npm install @vercel/analytics
```

### 2. Integración en el Layout

El componente `VercelAnalytics` ya está integrado en `app/layout.tsx`:

```tsx
import VercelAnalytics from "@/components/vercel-analytics"

// En el layout
<VercelAnalytics />
```

### 3. Configuración en Vercel

1. Ve a tu dashboard de Vercel
2. Selecciona tu proyecto
3. Ve a "Analytics" en el menú lateral
4. Habilita "Web Analytics" y "Speed Insights"

## Componentes Creados

### VercelAnalytics Component (`components/vercel-analytics.tsx`)
- Incluye tanto Analytics como Speed Insights
- Se integra automáticamente en el layout principal

### useVercelAnalytics Hook (`hooks/use-vercel-analytics.ts`)
- Hook personalizado para eventos específicos del portafolio
- Funciones optimizadas para tracking de interacciones

## Eventos Disponibles

### Eventos Automáticos
- **Page Views**: Se rastrean automáticamente
- **Speed Insights**: Métricas de rendimiento automáticas
- **Core Web Vitals**: LCP, FID, CLS automáticos

### Eventos Personalizados

```tsx
import { useVercelAnalytics } from '@/hooks/use-vercel-analytics'

const { 
  trackContact, 
  trackProject, 
  trackSocial, 
  trackPageView,
  trackDownload,
  trackScroll 
} = useVercelAnalytics()

// Tracking de formulario de contacto
trackContact()

// Tracking de visualización de proyectos
trackProject('Nombre del Proyecto')

// Tracking de enlaces sociales
trackSocial('linkedin')

// Tracking de navegación
trackPageView('/proyectos')

// Tracking de descargas
trackDownload('cv')

// Tracking de scroll a secciones
trackScroll('contacto')
```

## Uso en Componentes

### Ejemplo básico

```tsx
import { useVercelAnalytics } from '@/hooks/use-vercel-analytics'

export default function MyComponent() {
  const { trackContact, trackProject } = useVercelAnalytics()

  const handleContactSubmit = () => {
    trackContact()
  }

  const handleProjectClick = (projectName: string) => {
    trackProject(projectName)
  }

  return (
    // Tu componente aquí
  )
}
```

### Tracking de enlaces sociales

```tsx
const { trackSocial } = useVercelAnalytics()

const handleSocialClick = (platform: string) => {
  trackSocial(platform)
}

// En tu JSX
<a href="https://linkedin.com" onClick={() => handleSocialClick('linkedin')}>
  LinkedIn
</a>
```

## Ventajas sobre Google Analytics

### Privacidad
- No requiere banner de cookies
- Cumple con GDPR por defecto
- No rastrea datos personales

### Rendimiento
- Carga más rápida
- No afecta Core Web Vitals
- Optimizado para aplicaciones modernas

### Simplicidad
- Configuración automática
- Integración nativa con Next.js
- Dashboard intuitivo

## Verificación

### 1. Verificar en Vercel Dashboard
1. Ve a tu dashboard de Vercel
2. Navega a "Analytics" > "Web Analytics"
3. Visita tu sitio web
4. Deberías ver datos en tiempo real

### 2. Verificar en el navegador
1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Network"
3. Busca requests a `vitals.vercel-insights.com`
4. Deberías ver requests de analytics

### 3. Usar el componente de debug
1. Abre tu sitio web
2. Haz clic en "Debug Analytics" (esquina inferior derecha)
3. Prueba los eventos de Vercel Analytics
4. Verifica que aparezcan en el dashboard

## Métricas Disponibles

### Web Analytics
- **Page Views**: Vistas de página
- **Unique Visitors**: Visitantes únicos
- **Bounce Rate**: Tasa de rebote
- **Top Pages**: Páginas más visitadas
- **Referrers**: Fuentes de tráfico

### Speed Insights
- **LCP (Largest Contentful Paint)**: Rendimiento de carga
- **FID (First Input Delay)**: Interactividad
- **CLS (Cumulative Layout Shift)**: Estabilidad visual
- **TTFB (Time to First Byte)**: Tiempo de respuesta del servidor

## Eventos Personalizados Implementados

### Contact Form
```tsx
trackContact() // Rastrea envío de formulario de contacto
```

### Project Views
```tsx
trackProject('Nombre del Proyecto') // Rastrea visualización de proyectos
```

### Social Links
```tsx
trackSocial('linkedin') // Rastrea clicks en enlaces sociales
```

### Page Navigation
```tsx
trackPageView('/proyectos') // Rastrea navegación entre páginas
```

### File Downloads
```tsx
trackDownload('cv') // Rastrea descargas de archivos
```

### Section Scroll
```tsx
trackScroll('contacto') // Rastrea scroll a secciones específicas
```

## Troubleshooting

### No aparecen datos
1. Verifica que Analytics esté habilitado en Vercel
2. Asegúrate de que el componente esté en el layout
3. Espera unos minutos para que aparezcan los datos

### Eventos no se registran
1. Verifica que el hook esté importado correctamente
2. Asegúrate de que las funciones se llamen
3. Revisa la consola del navegador para errores

### Speed Insights no funciona
1. Verifica que Speed Insights esté habilitado en Vercel
2. Asegúrate de que el componente esté en el layout
3. Los datos pueden tardar hasta 24 horas en aparecer

## Recursos Adicionales

- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Next.js Analytics Integration](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Core Web Vitals](https://web.dev/vitals/)

## Comparación: Google Analytics vs Vercel Analytics

| Característica | Google Analytics | Vercel Analytics |
|----------------|------------------|------------------|
| Privacidad | Requiere consentimiento | Privado por defecto |
| Rendimiento | Puede afectar Core Web Vitals | Optimizado |
| Configuración | Compleja | Automática |
| Integración | Manual | Nativa con Next.js |
| Costo | Gratis con limitaciones | Incluido en Vercel |
| Tiempo real | Limitado | Completo |
| Speed Insights | No incluido | Incluido |

## Recomendación

Para este portafolio, **Vercel Analytics es la opción recomendada** porque:

1. **Simplicidad**: Configuración automática
2. **Privacidad**: No requiere banner de cookies
3. **Rendimiento**: No afecta la velocidad del sitio
4. **Integración**: Funciona perfectamente con Next.js
5. **Speed Insights**: Métricas de rendimiento incluidas

Google Analytics se mantiene como respaldo para casos específicos donde necesites funcionalidades avanzadas.
