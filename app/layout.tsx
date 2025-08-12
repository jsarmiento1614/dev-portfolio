import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import StructuredData from "@/components/structured-data"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Jesús Sarmiento - Desarrollador Full Stack | jsarmiento.dev",
    template: "%s | jsarmiento.dev"
  },
  description: "Desarrollador Full Stack especializado en React, Next.js, Angular y Node.js. Construyo experiencias digitales simples y efectivas. Portafolio con proyectos web y móviles.",
  keywords: [
    "desarrollador full stack",
    "react developer",
    "next.js",
    "angular",
    "node.js",
    "typescript",
    "javascript",
    "desarrollo web",
    "aplicaciones móviles",
    "frontend developer",
    "backend developer",
    "jsarmiento",
    "jesus sarmiento"
  ],
  authors: [{ name: "Jesús Sarmiento" }],
  creator: "Jesús Sarmiento",
  publisher: "Jesús Sarmiento",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jsarmiento.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://jsarmiento.dev',
    title: 'Jesús Sarmiento - Desarrollador Full Stack',
    description: 'Desarrollador Full Stack especializado en React, Next.js, Angular y Node.js. Construyo experiencias digitales simples y efectivas.',
    siteName: 'jsarmiento.dev',
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
    description: 'Desarrollador Full Stack especializado en React, Next.js, Angular y Node.js. Construyo experiencias digitales simples y efectivas.',
    images: ['/og-image.svg'],
    creator: '@jsarmiento_dev',
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
    <html lang="es" className={`${inter.variable} antialiased`}>
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
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
