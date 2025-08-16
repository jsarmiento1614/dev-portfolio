"use client"

import { useState } from 'react'
import React from 'react'

export function useCVGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)

  const generateCV = async () => {
    try {
      setIsGenerating(true)
      
      // Generar el PDF usando jsPDF (implementación dinámica)
      const { generatePDF } = await import('@/utils/pdf-generator')
      const blob = await generatePDF()
      setPdfBlob(blob)
      
      // Crear URL para preview
      const url = URL.createObjectURL(blob)
      setPdfUrl(url)
      
      return { blob, url }
    } catch (error) {
      console.error('Error generando CV:', error)
      throw error
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadCV = async () => {
    try {
      let blob = pdfBlob
      
      // Si no existe el blob, generarlo
      if (!blob) {
        const result = await generateCV()
        blob = result.blob
      }

      // Crear enlace de descarga
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'Jesus_Sarmiento_CV.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error descargando CV:', error)
      throw error
    }
  }

  const previewCV = async () => {
    try {
      let url = pdfUrl
      
      // Si no existe la URL, generar el PDF
      if (!url) {
        const result = await generateCV()
        url = result.url
      }

      // Abrir en nueva ventana
      window.open(url, '_blank')
    } catch (error) {
      console.error('Error mostrando preview:', error)
      throw error
    }
  }

  const cleanup = () => {
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl)
      setPdfUrl(null)
    }
    setPdfBlob(null)
  }

  return {
    isGenerating,
    generateCV,
    downloadCV,
    previewCV,
    cleanup,
    pdfBlob,
    pdfUrl
  }
}
