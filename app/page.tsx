"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import About from "@/components/sections/About"
import Experiences from "@/components/sections/Experiences"
import PersonalProjects from "@/components/sections/PersonalProjects"
import Languages from "@/components/sections/Languages"
import Educations from "@/components/sections/Educations"
import Certifications from "@/components/sections/Certifications"
import Skills from "@/components/sections/Skills"

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 section-spacing">
            <div className="animate-fade-in">
              <About />
            </div>
            <div className="animate-fade-in animate-delay-100">
              <Experiences />
            </div>
            <div className="animate-fade-in animate-delay-200">
              <PersonalProjects />
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6 lg:space-y-8">
            <div className="animate-slide-in animate-delay-300">
              <Skills />
            </div>
            <div className="animate-slide-in animate-delay-400">
              <Languages />
            </div>
            <div className="animate-slide-in animate-delay-500">
              <Educations />
            </div>
            <div className="animate-slide-in animate-delay-500">
              <Certifications />
            </div>
          </div>
        </div>

        {/* Background decorations */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
