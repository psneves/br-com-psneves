"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, MapPin, Github, FileDown } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { usePDFGenerator } from "@/hooks/use-pdf-generator"
import { transformToPDFData } from "@/utils/pdf-data-transformer"
import { useState } from "react"

export default function Header() {
  const { generatePDFFromData, isGenerating, error } = usePDFGenerator()
  const [showError, setShowError] = useState(false)

  const handleDownloadPDF = async () => {
    const pdfData = transformToPDFData()
    const success = await generatePDFFromData(pdfData, {
      filename: 'Paulo_Neves_CV.pdf',
      quality: 0.98,
      scale: 2
    })
    
    if (!success && error) {
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
          {/* Profile Image with Enhanced Styling */}
          <div className="relative group">
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Image 
                src="/images/perfil-quadrada.webp" 
                alt="Paulo Neves" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-3">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-1">
                Paulo Neves
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground font-medium">
                IT Manager at Johnson & Johnson
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin size={16} className="text-primary" />
                <span>Jacareí-SP, Brazil</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={16} className="text-primary" />
                <span>paulo@psneves.com.br</span>
              </div>
            </div>
          </div>

          {/* Actions Section */}
          <div className="flex items-center gap-2 lg:gap-3">
            <ThemeToggle />
            
            <div className="flex flex-wrap gap-2 lg:gap-3">
              <div className="relative">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isGenerating}
                  className="button-primary text-sm px-4 py-2 lg:px-6 lg:py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FileDown size={16} className={isGenerating ? "animate-bounce" : ""} />
                  <span className="hidden sm:inline">
                    {isGenerating ? "Generating..." : "Save PDF"}
                  </span>
                </button>
                
                {showError && error && (
                  <div className="absolute top-full left-0 mt-2 p-2 bg-red-100 text-red-800 text-xs rounded shadow-lg whitespace-nowrap z-50">
                    Failed to generate PDF. Please try again.
                  </div>
                )}
              </div>
              
              <Link
                href="https://br.linkedin.com/in/psneves"
                target="_blank"
                className="button-secondary text-sm px-4 py-2 lg:px-6 lg:py-3"
              >
                <Linkedin size={16} />
                <span className="hidden sm:inline">LinkedIn</span>
              </Link>
              
              <Link
                href="https://github.com/psneves"
                target="_blank"
                className="button-secondary text-sm px-4 py-2 lg:px-6 lg:py-3"
              >
                <Github size={16} />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}