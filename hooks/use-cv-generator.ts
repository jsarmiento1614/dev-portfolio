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

      console.log('Abriendo PDF en nueva ventana...', url)

      // Intentar abrir en nueva ventana
      const newWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes')
      
      if (newWindow) {
        // Crear una página HTML simple con el PDF embedido
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>CV - Jesús Sarmiento</title>
              <style>
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                .container { text-align: center; }
                iframe { border: none; }
                .download-link { 
                  margin-bottom: 10px; 
                  padding: 10px 20px; 
                  background: #3B82F6; 
                  color: white; 
                  text-decoration: none; 
                  border-radius: 5px; 
                  display: inline-block;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>CV - Jesús Alberto Sarmiento Bautista</h2>
                <a href="${url}" download="Jesus_Sarmiento_CV.pdf" class="download-link">⬇ Descargar PDF</a>
                <br><br>
                <iframe src="${url}" width="100%" height="600px"></iframe>
              </div>
            </body>
          </html>
        `)
        newWindow.document.close()
      } else {
        // Fallback: descargar si no se puede abrir ventana
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
