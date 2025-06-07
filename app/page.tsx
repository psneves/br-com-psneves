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
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            <About />
            <Experiences />
            <PersonalProjects />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <Languages />
            <Educations />
            <Certifications />
            <Skills />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
