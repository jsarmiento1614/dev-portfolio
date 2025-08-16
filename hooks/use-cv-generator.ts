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
        console.log('Generando PDF para preview...')
        const result = await generateCV()
        url = result.url
      }

      // Verificar que la URL existe
      if (!url) {
        throw new Error('No se pudo generar la URL del PDF')
      }

      console.log('Abriendo PDF directamente en nueva pestaña...', url)

      // Abrir el PDF directamente en una nueva pestaña
      const newWindow = window.open(url, '_blank')
      
      if (!newWindow) {
        // Fallback: descargar si no se puede abrir ventana (bloqueador de pop-ups)
        console.warn('No se pudo abrir ventana emergente, descargando archivo...')
        await downloadCV()
      }
    } catch (error) {
      console.error('Error mostrando preview:', error)
      // Fallback: intentar descarga
      try {
        console.log('Intentando descarga como fallback...')
        await downloadCV()
      } catch (downloadError) {
        console.error('Error en fallback de descarga:', downloadError)
        throw new Error(`Error en preview y descarga: ${error instanceof Error ? error.message : 'Error desconocido'}`)
      }
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
