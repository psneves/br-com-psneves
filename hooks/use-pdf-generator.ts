"use client"

import { useCallback, useState } from 'react'

interface PDFOptions {
  filename?: string
  margin?: number
  quality?: number
  scale?: number
}

export const usePDFGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generatePDF = useCallback(async (
    elementRef: React.RefObject<HTMLElement>,
    options: PDFOptions = {}
  ) => {
    if (!elementRef.current) {
      setError('Element reference is null')
      return false
    }

    setIsGenerating(true)
    setError(null)

    try {
      // Always import the bundled build for stability across environments
      const mod: any = await import('html2pdf.js/dist/html2pdf.bundle.min.js')
      const html2pdf = mod?.default?.default || mod?.default || mod
      if (typeof html2pdf !== 'function') throw new Error('html2pdf failed to load')

      const defaultOptions = {
        filename: options.filename || 'Paulo_Neves_CV.pdf',
        margin: options.margin || 10,
        quality: options.quality || 0.98,
        scale: options.scale || 2,
      }

      // Prepare the element for PDF generation
      const element = elementRef.current
      const originalStyle = element.style.cssText

      // Apply PDF-specific styling
      element.classList.add('pdf-export')
      element.style.width = '794px' // A4 width
      element.style.minHeight = '1123px' // A4 height
      element.style.background = 'white'
      element.style.color = 'black'
      element.style.fontSize = '12px'
      element.style.lineHeight = '1.4'
      // Ensure the element participates in layout
      element.style.visibility = 'visible'
      element.style.opacity = '1'

      // Configure html2pdf options
      const pdfOptions = {
        margin: defaultOptions.margin,
        filename: defaultOptions.filename,
        image: { 
          type: 'jpeg', 
          quality: defaultOptions.quality 
        },
        html2canvas: { 
          scale: defaultOptions.scale,
          useCORS: true,
          letterRendering: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          scrollX: 0,
          scrollY: 0,
          dpi: 192,
          imageTimeout: 0,
          removeContainer: true,
          onclone: (clonedDoc: Document) => {
            // Apply PDF styles to cloned document
            const style = clonedDoc.createElement('style')
            style.textContent = `
              html, body { background: #ffffff !important; }
              .pdf-export {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
                font-size: 11px !important;
                line-height: 1.4 !important;
                color: #1a1a1a !important;
                background: white !important;
              }
              .pdf-export * {
                box-shadow: none !important;
                text-shadow: none !important;
              }
              .pdf-export .enhanced-card {
                background: white !important;
                border: 1px solid #e5e7eb !important;
                backdrop-filter: none !important;
              }
              .pdf-export .bg-primary\\/10 {
                background-color: #f3f4f6 !important;
              }
              .pdf-export .text-primary {
                color: #1f2937 !important;
              }
              .pdf-export .animate-fade-in,
              .pdf-export .animate-slide-in,
              .pdf-export .animate-scale-in {
                animation: none !important;
              }
            `
            clonedDoc.head.appendChild(style)
          }
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
          after: '.page-break-after',
          avoid: '.page-break-inside-avoid'
        }
      }

      // Generate PDF
      // Small delay to ensure layout flush
      await new Promise((r) => setTimeout(r, 100))
      await html2pdf()
        .set(pdfOptions)
        .from(element)
        .save()

      // Restore original styling
      element.style.cssText = originalStyle
      element.classList.remove('pdf-export')

      setIsGenerating(false)
      return true

    } catch (err) {
      console.error('PDF generation error:', err)
      setError(err instanceof Error ? err.message : 'Failed to generate PDF')
      setIsGenerating(false)
      return false
    }
  }, [])

  const generatePDFFromData = useCallback(async (data: any, options: PDFOptions = {}) => {
    setIsGenerating(true)
    setError(null)

    try {
      // Create a temporary DOM element for PDF generation
      const tempDiv = document.createElement('div')
      tempDiv.style.position = 'fixed'
      tempDiv.style.left = '0'
      tempDiv.style.top = '0'
      tempDiv.style.visibility = 'hidden'
      tempDiv.style.pointerEvents = 'none'
      tempDiv.style.zIndex = '9999'
      tempDiv.style.width = '794px'
      tempDiv.style.background = 'white'
      
      // Import PDFDocument component dynamically
      const { default: PDFDocument } = await import('../components/cv/page')
      const React = await import('react')
      const ReactDOM = await import('react-dom/client')

      // Create React element
      const pdfElement = React.createElement(PDFDocument, { data })
      
      document.body.appendChild(tempDiv)
      const root = ReactDOM.createRoot(tempDiv)
      root.render(pdfElement)

      // Wait for render + fonts
      await new Promise(requestAnimationFrame)
      await new Promise(requestAnimationFrame)
      await new Promise((r) => setTimeout(r, 200))
      if ((document as any).fonts?.ready) {
        try { await (document as any).fonts.ready } catch {}
      }

      // Generate PDF from the rendered element
      const result = await generatePDF({ current: tempDiv }, options)

      // Cleanup
      root.unmount()
      document.body.removeChild(tempDiv)

      return result

    } catch (err) {
      console.error('PDF generation from data error:', err)
      setError(err instanceof Error ? err.message : 'Failed to generate PDF from data')
      setIsGenerating(false)
      return false
    }
  }, [generatePDF])

  return {
    generatePDF,
    generatePDFFromData,
    isGenerating,
    error,
    clearError: () => setError(null)
  }
}
