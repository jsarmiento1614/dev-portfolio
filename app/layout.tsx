import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import StructuredData from "@/components/structured-data"
import { ThemeProvider } from "@/components/theme-provider"
import GoogleAnalytics from "@/components/google-analytics"
import VercelAnalytics from "@/components/vercel-analytics"
import AnalyticsDebug from "@/components/analytics-debug"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Jesús Sarmiento - Desarrollador Full Stack | jsarmiento.vercel.app",
    template: "%s | jsarmiento.vercel.app"
  },
  description: "Desarrollador Full Stack Honduras con 6+ años de experiencia especializado en React, Next.js, Angular y Node.js. Creo aplicaciones web responsivas y aplicaciones móviles nativas para empresas y startups. Portfolio con 15+ proyectos completados.",
  keywords: [
    "desarrollador full stack Honduras",
    "programador react tegucigalpa",
    "desarrollador next.js freelance centroamerica",
    "especialista angular typescript",
    "desarrollador node.js backend",
    "creador aplicaciones web responsivas",
    "desarrollador aplicaciones móviles nativas",
    "frontend developer react vue",
    "backend developer apis rest",
    "desarrollador freelance Honduras",
    "portfolio desarrollador web",
    "jesús sarmiento desarrollador",
    "jsarmiento.vercel.app",
    "desarrollo software a medida",
    "consultor tecnológico react",
    "arquitecto software javascript",
    "desarrollador san pedro sula",
    "programador centroamerica",
    "desarrollador web san pedro sula",
    "programador freelance tegucigalpa",
    "desarrollo aplicaciones móviles Honduras",
    "consultor react centroamerica",
    "servicios desarrollo software Honduras",
    "desarrollador angular san pedro sula",
    "programador node.js Honduras",
    "freelancer tecnológico centroamerica",
    "desarrollo apps móviles tegucigalpa",
    "consultor desarrollo web Honduras",
    "programador typescript centroamerica",
    "especialista react native Honduras",
    "desarrollador flutter Honduras",
    "arquitecto software centroamerica",
    "consultor tecnológico san pedro sula",
    "desarrollo sistemas web Honduras",
    "programador bases datos Honduras",
    "desarrollador apis rest centroamerica",
    "especialista frontend Honduras",
    "consultor backend centroamerica",
    "desarrollo ecommerce Honduras"
  ],
  authors: [{ name: "Jesús Sarmiento" }],
  creator: "Jesús Sarmiento",
  publisher: "Jesús Sarmiento",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jsarmiento.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_HN',
    url: 'https://jsarmiento.vercel.app',
    title: 'Jesús Sarmiento - Desarrollador Full Stack',
    description: 'Desarrollador Full Stack Honduras con 6+ años de experiencia especializado en React, Next.js, Angular y Node.js. Construyo experiencias digitales simples y efectivas.',
    siteName: 'jsarmiento.vercel.app',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Jesús Sarmiento - Desarrollador Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesús Sarmiento - Desarrollador Full Stack',
    description: 'Desarrollador Full Stack Honduras con 6+ años de experiencia especializado en React, Next.js, Angular y Node.js. Construyo experiencias digitales simples y efectivas.',
    images: ['/og-image.svg'],
    creator: '@jsarmiento1614',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.svg" sizes="16x16" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.svg" sizes="32x32" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <GoogleAnalytics />
          <VercelAnalytics />
          <StructuredData />
          {children}
          <AnalyticsDebug />
        </ThemeProvider>
      </body>
    </html>
  )
}
