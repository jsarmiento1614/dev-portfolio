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
    title: "15+ Proyectos de Desarrollo Web y Móvil | Jesús Sarmiento",
    description: "🎯 Explora casos reales de éxito: E-commerce, Fintech, Apps móviles y sistemas empresariales. Desarrollados con React, Next.js, Angular, Flutter desde Honduras para clientes de 🌎 Centroamérica y Estados Unidos.",
    url: "https://jsarmiento.vercel.app/proyectos",
    type: 'website',
    locale: 'es_HN',
    siteName: 'jsarmiento.vercel.app',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Portfolio de Proyectos - Jesús Sarmiento Desarrollador Full Stack',
      }
    ],
  },
  alternates: {
    canonical: "/proyectos",
  },
  twitter: {
    card: 'summary_large_image',
    title: '15+ Proyectos Web y Móviles | Jesús Sarmiento',
    description: '🚀 Casos reales: E-commerce, Fintech, Apps empresariales 💼 React, Angular, Flutter 🌎 Clientes internacionales',
    creator: '@jsarmiento1614',
    images: ['/og-image.svg'],
  },
}

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
