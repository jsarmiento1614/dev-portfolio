import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos - Portafolio de Desarrollo",
  description: "Explora mi portafolio de proyectos web y móviles. Aplicaciones desarrolladas con React, Next.js, Angular, Node.js y tecnologías modernas.",
  openGraph: {
    title: "Proyectos - Jesús Sarmiento",
    description: "Portafolio de proyectos web y móviles desarrollados con tecnologías modernas.",
  },
}

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
