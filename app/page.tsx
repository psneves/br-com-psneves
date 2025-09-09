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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="relative">
        {/* Enhanced Background with Multiple Layers */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Primary gradient orbs */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 to-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          
          {/* Secondary accent orbs */}
          <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-gradient-to-br from-muted/20 to-muted/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }}></div>
          <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: "6s" }}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-6 py-8 lg:py-16">
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
        </div>
      </main>

      <Footer />
    </div>
  )
}
