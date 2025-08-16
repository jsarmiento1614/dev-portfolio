import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Preguntas Frecuentes sobre Desarrollo Full Stack",
  description: "Respuestas a preguntas frecuentes sobre servicios de desarrollo web desde Honduras, aplicaciones móviles, tecnologías React, Next.js, Angular, Node.js y procesos de trabajo con Jesús Sarmiento.",
  keywords: [
    "preguntas frecuentes desarrollo web",
    "FAQ desarrollador full stack",
    "consultas desarrollo react next.js",
    "dudas desarrollo aplicaciones móviles",
    "proceso desarrollo software",
    "precios desarrollo web Honduras",
    "tiempos desarrollo aplicaciones",
    "tecnologías react angular node.js",
    "soporte post-lanzamiento web",
    "hosting despliegue aplicaciones",
    "desarrollador freelance centroamerica",
    "servicios desarrollo Honduras",
    "consultor tecnológico Honduras",
    "FAQ programador freelance",
    "preguntas desarrollo web Honduras",
    "FAQ programador san pedro sula",
    "consultas freelancer tegucigalpa",
    "dudas programador centroamerica",
    "precios desarrollo software Honduras",
    "costos programador freelance Honduras",
    "tarifas desarrollo web centroamerica",
    "presupuesto aplicación móvil Honduras",
    "FAQ desarrollo react Honduras",
    "preguntas angular typescript Honduras",
    "consultas node.js centroamerica",
    "dudas desarrollo frontend Honduras",
    "FAQ backend developer centroamerica",
    "preguntas diseño UX UI Honduras",
    "consultas ecommerce desarrollo Honduras",
    "FAQ sistemas web centroamerica",
    "dudas hosting aplicaciones Honduras",
    "preguntas mantenimiento web Honduras"
  ],
  openGraph: {
    title: "FAQ Desarrollo Web | Precios, Procesos y Tecnologías | Jesús Sarmiento",
    description: "❓ ¿Cuánto cuesta una app? ¿Qué tecnologías uso? ⏱️ ¿Tiempos de entrega? Respuestas claras sobre desarrollo web, móvil y precios desde Honduras. 💰 Acepto criptomonedas USDT",
    url: "https://jsarmiento.vercel.app/faq",
    type: 'website',
    locale: 'es_HN',
    siteName: 'jsarmiento.vercel.app',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'FAQ Desarrollo Web - Preguntas Frecuentes Jesús Sarmiento',
      }
    ],
  },
  alternates: {
    canonical: "/faq",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ Desarrollo Web | Precios y Procesos',
    description: '❓ Preguntas sobre desarrollo web y móvil 💰 Precios transparentes 🔧 Tecnologías React, Angular 💎 Acepto USDT',
    creator: '@jsarmiento1614',
    images: ['/og-image.svg'],
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
