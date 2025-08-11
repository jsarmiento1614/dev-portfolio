import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Juan Pérez - Desarrollador Full Stack",
  description: "Portafolio personal de Juan Pérez, Desarrollador Full Stack especializado en React, Next.js y Node.js",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  )
}
