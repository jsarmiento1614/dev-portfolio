"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useCVGenerator } from '@/hooks/use-cv-generator'
import { Download, Eye, X, FileText, Loader2 } from 'lucide-react'

interface CVPreviewModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CVPreviewModal({ isOpen, onClose }: CVPreviewModalProps) {
  const { isGenerating, downloadCV, previewCV, pdfUrl, generateCV } = useCVGenerator()
  const [hasGenerated, setHasGenerated] = useState(false)

  const handlePreview = async () => {
    try {
      if (!hasGenerated) {
        await generateCV()
        setHasGenerated(true)
      }
      await previewCV()
    } catch (error) {
      console.error('Error en preview:', error)
    }
  }

  const handleDownload = async () => {
    try {
      await downloadCV()
      onClose()
    } catch (error) {
      console.error('Error en descarga:', error)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-background border border-border rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <FileText className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Descargar Currículum
              </h2>
              <p className="text-muted-foreground">
                Currículum actualizado en formato PDF profesional
              </p>
            </div>

            {/* CV Info */}
            <div className="bg-muted/30 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-foreground mb-2">Contenido incluido:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Información de contacto</li>
                <li>• Resumen profesional</li>
                <li>• Habilidades técnicas</li>
                <li>• Experiencia laboral</li>
                <li>• Proyectos destacados</li>
                <li>• Educación</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button
                onClick={handlePreview}
                variant="outline"
                className="w-full"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Vista Previa
                  </>
                )}
              </Button>

              <Button
                onClick={handleDownload}
                className="w-full"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Descargar PDF
                  </>
                )}
              </Button>
            </div>

            {/* Footer */}
            <p className="text-xs text-muted-foreground text-center mt-4">
              Actualizado: {new Date().toLocaleDateString('es-ES')}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
