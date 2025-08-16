import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos - Portafolio de Desarrollo",
  description: "Explora mi portafolio de proyectos web y móviles desde Honduras. Aplicaciones desarrolladas con React, Next.js, Angular, Java, Node.js y tecnologías modernas para clientes internacionales.",
  keywords: [
    "proyectos desarrollo web Honduras",
    "portfolio desarrollador full stack",
    "aplicaciones react next.js",
    "proyectos angular typescript",
    "desarrollo móvil flutter xamarin",
    "casos estudio desarrollo software",
    "proyectos freelance centroamerica",
    "portfolio jesús sarmiento",
    "trabajos desarrollo web",
    "aplicaciones móviles Honduras",
    "proyectos web san pedro sula",
    "portfolio programador tegucigalpa",
    "casos estudio react Honduras",
    "proyectos angular centroamerica",
    "desarrollo apps móviles Honduras",
    "trabajos freelance tegucigalpa",
    "portfolio desarrollo software Honduras",
    "proyectos ecommerce Honduras",
    "aplicaciones empresariales centroamerica",
    "sistemas web Honduras",
    "desarrollo plataformas digitales Honduras",
    "proyectos startup centroamerica",
    "aplicaciones fintech Honduras",
    "sistemas gestión empresarial Honduras",
    "plataformas web centroamerica"
  ],
  openGraph: {
    title: "Proyectos - Jesús Sarmiento",
    description: "Portafolio de proyectos web y móviles desarrollados desde Honduras con React, Angular, Java, Node.js y tecnologías modernas.",
    url: "https://jsarmiento.vercel.app/proyectos",
  },
  alternates: {
    canonical: "/proyectos",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyectos - Jesús Sarmiento',
    description: 'Portfolio de desarrollo web y móvil desde Honduras',
    creator: '@jsarmiento1614',
  },
}

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
