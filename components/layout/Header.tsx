"use client"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail, MapPin, Github, FileDown } from "lucide-react"

export default function Header() {
  const handleDownloadPDF = () => {
    window.open("https://psneves.com.br/cv", "_blank")
  }

  return (
    <header className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-200 shadow-md">
            <Image src="/images/perfil-quadrada.webp" alt="Paulo Neves" fill className="object-cover" />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-light text-black mb-2">Paulo Neves</h1>
            <p className="text-xl text-gray-600 mb-4">IT Manager at Johnson & Johnson</p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span>Jacareí-SP, Brazil</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gray-400" />
                <span>paulo@psneves.com.br</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium shadow-sm hover:shadow-md"
            >
              <FileDown size={18} />
              Save PDF
            </button>
            <Link
              href="https://br.linkedin.com/in/psneves"
              target="_blank"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium shadow-sm hover:shadow-md"
            >
              <Linkedin size={18} />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/psneves"
              target="_blank"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium shadow-sm hover:shadow-md"
            >
              <Github size={18} />
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
