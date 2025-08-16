import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Preguntas Frecuentes sobre Desarrollo Full Stack",
  description: "Respuestas a preguntas frecuentes sobre servicios de desarrollo web, aplicaciones móviles, tecnologías React, Next.js, Angular, Node.js y procesos de trabajo con Jesús Sarmiento.",
  keywords: [
    "preguntas frecuentes desarrollo web",
    "FAQ desarrollador full stack",
    "consultas desarrollo react next.js",
    "dudas desarrollo aplicaciones móviles",
    "proceso desarrollo software",
    "precios desarrollo web España",
    "tiempos desarrollo aplicaciones",
    "tecnologías react angular node.js",
    "soporte post-lanzamiento web",
    "hosting despliegue aplicaciones"
  ],
  openGraph: {
    title: "FAQ - Preguntas Frecuentes | Jesús Sarmiento",
    description: "Encuentra respuestas a las preguntas más comunes sobre desarrollo Full Stack, tecnologías, procesos y servicios.",
    url: "https://jsarmiento.dev/faq",
  },
  alternates: {
    canonical: "/faq",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
