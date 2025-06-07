"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Languages,
  Code,
  Github,
  Download,
} from "lucide-react"

export default function Home() {
  const [expandedRole, setExpandedRole] = useState<string | null>("IT Manager - Web and API Development")

  const toggleRole = (role: string) => {
    setExpandedRole(expandedRole === role ? null : role)
  }

  const handleDownloadPDF = () => {
    // Open the CV in a new tab - this is more reliable than direct download
    window.open("https://psneves.com.br/cv", "_blank")
  }

  const isExpanded = (role: string) => {
    return expandedRole === role
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-200 shadow-md">
              <Image src="/images/perfil-quadrada.jpg" alt="Paulo Neves" fill className="object-cover" />
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
                <Download size={18} />
                Download CV
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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Summary */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-900" size={24} />
                <h2 className="text-2xl font-light text-black">About</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Experienced IT professional with 15+ years in technology leadership, specializing in digital
                  transformation, team management, and product development.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bachelor of Computer Science from Federal University of São Paulo with background as People Manager,
                  Technical Product Owner, Service Specialist, Information Security Analyst, and Software Developer.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Currently leading web and API development initiatives at Johnson & Johnson, focusing on strategic
                  technology direction and team development.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-900" size={24} />
                <h2 className="text-2xl font-light text-black">Experience</h2>
              </div>

              <div className="space-y-8">
                {/* Johnson & Johnson */}
                <div className="experience-item relative border-l-2 border-blue-100 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded overflow-hidden bg-white shadow-sm border border-gray-100">
                        <Image
                          src="/images/logos/jj-logo.png"
                          alt="Johnson & Johnson"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <h3 className="text-xl font-medium text-black">Johnson & Johnson</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                      <Calendar size={14} className="text-gray-400" />
                      <span>2014 — Present</span>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-4">São José dos Campos-SP, Brazil</p>

                  <div className="space-y-6">
                    {/* IT Manager Role */}
                    <div className="bg-white rounded-lg border border-gray-100 p-4 transition-all duration-200 hover:shadow-md">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleRole("IT Manager - Web and API Development")}
                      >
                        <h4 className="font-medium text-gray-900">IT Manager - Web and API Development</h4>
                        <button className="text-gray-400 hover:text-blue-900 transition-colors">
                          {isExpanded("IT Manager - Web and API Development") ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 mb-3 font-mono flex items-center gap-1">
                        <Calendar size={12} className="text-gray-400" />
                        Apr 2023 — Present
                      </p>

                      <div
                        className={`role-details ${isExpanded("IT Manager - Web and API Development") ? "block" : "hidden"}`}
                      >
                        <ul className="text-gray-600 space-y-2 text-sm leading-relaxed mt-3 animate-fade-in">
                          <li>
                            • Lead talent acquisition and onboarding processes for digital product development teams
                          </li>
                          <li>
                            • Design comprehensive individual development plans and career progression pathways for
                            chapter members
                          </li>
                          <li>
                            • Define strategic technology direction and establish professional training frameworks
                          </li>
                          <li>
                            • Drive organizational capability enhancement through targeted training events and
                            mentorship programs
                          </li>
                          <li>• Serve as escalation point for resource allocation and performance management issues</li>
                          <li>
                            • Spearhead AI Agents initiative to automate software development and testing processes,
                            targeting significant reduction in development lead time
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* IT Lead Role */}
                    <div className="bg-white rounded-lg border border-gray-100 p-4 transition-all duration-200 hover:shadow-md">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleRole("IT Lead - Technical Product Owner")}
                      >
                        <h4 className="font-medium text-gray-900">IT Lead - Technical Product Owner</h4>
                        <button className="text-gray-400 hover:text-blue-900 transition-colors">
                          {isExpanded("IT Lead - Technical Product Owner") ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 mb-3 font-mono flex items-center gap-1">
                        <Calendar size={12} className="text-gray-400" />
                        Sep 2020 — Mar 2023
                      </p>

                      <div
                        className={`role-details ${isExpanded("IT Lead - Technical Product Owner") ? "block" : "hidden"}`}
                      >
                        <ul className="text-gray-600 space-y-2 text-sm leading-relaxed mt-3 animate-fade-in">
                          <li>
                            • Delivered end-to-end personalization, SSO integrations, web analytics, and search
                            capabilities for Janssen Pro LATAM
                          </li>
                          <li>
                            • Managed product backlog and sprint planning using JIRA, aligning development with
                            OKR-driven business objectives
                          </li>
                          <li>
                            • Implemented comprehensive CSAT solution measuring customer satisfaction across F2F
                            interactions, webcalls, and events
                          </li>
                          <li>
                            • Served as technical lead for Oracle Eloqua email marketing platform across Janssen LATAM
                            operations
                          </li>
                          <li>
                            • Conducted stakeholder reporting through OKR reviews and product demonstrations to
                            executive leadership
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Service Specialist Role */}
                    <div className="bg-white rounded-lg border border-gray-100 p-4 transition-all duration-200 hover:shadow-md">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleRole("Service Specialist - Digital & RPA")}
                      >
                        <h4 className="font-medium text-gray-900">Service Specialist - Digital & RPA</h4>
                        <button className="text-gray-400 hover:text-blue-900 transition-colors">
                          {isExpanded("Service Specialist - Digital & RPA") ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 mb-3 font-mono flex items-center gap-1">
                        <Calendar size={12} className="text-gray-400" />
                        Feb 2019 — Aug 2020
                      </p>

                      <div
                        className={`role-details ${isExpanded("Service Specialist - Digital & RPA") ? "block" : "hidden"}`}
                      >
                        <ul className="text-gray-600 space-y-2 text-sm leading-relaxed mt-3 animate-fade-in">
                          <li>
                            • Architected RPA and digital transformation solutions ensuring compliance with enterprise
                            engineering standards
                          </li>
                          <li>
                            • Coordinated proof-of-concept initiatives and managed development capacity across regional
                            and global teams
                          </li>
                          <li>
                            • Established quality assurance frameworks, generating performance metrics and risk
                            escalation protocols
                          </li>
                          <li>
                            • Built strategic partnerships with regional and global IT stakeholders to drive digital
                            innovation
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Sr. Information Security Analyst Role */}
                    <div className="bg-white rounded-lg border border-gray-100 p-4 transition-all duration-200 hover:shadow-md">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleRole("Sr. Information Security Analyst")}
                      >
                        <h4 className="font-medium text-gray-900">Sr. Information Security Analyst</h4>
                        <button className="text-gray-400 hover:text-blue-900 transition-colors">
                          {isExpanded("Sr. Information Security Analyst") ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 mb-3 font-mono flex items-center gap-1">
                        <Calendar size={12} className="text-gray-400" />
                        Apr 2018 — Feb 2019
                      </p>

                      <div
                        className={`role-details ${isExpanded("Sr. Information Security Analyst") ? "block" : "hidden"}`}
                      >
                        <ul className="text-gray-600 space-y-2 text-sm leading-relaxed mt-3 animate-fade-in">
                          <li>
                            • Served as primary information security liaison for J&J Corporate, Vision Care, and
                            LifeScan across Latin America
                          </li>
                          <li>
                            • Conducted comprehensive security assessments for acquired company applications during M&A
                            integration
                          </li>
                          <li>
                            • Evaluated and validated security controls ensuring compliance with corporate security
                            standards
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Information Security Analyst Role */}
                    <div className="bg-white rounded-lg border border-gray-100 p-4 transition-all duration-200 hover:shadow-md">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleRole("Information Security Analyst")}
                      >
                        <h4 className="font-medium text-gray-900">Information Security Analyst</h4>
                        <button className="text-gray-400 hover:text-blue-900 transition-colors">
                          {isExpanded("Information Security Analyst") ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 mb-3 font-mono flex items-center gap-1">
                        <Calendar size={12} className="text-gray-400" />
                        Jun 2015 — Mar 2018
                      </p>

                      <div
                        className={`role-details ${isExpanded("Information Security Analyst") ? "block" : "hidden"}`}
                      >
                        <ul className="text-gray-600 space-y-2 text-sm leading-relaxed mt-3 animate-fade-in">
                          <li>
                            • Orchestrated enterprise-wide security awareness programs across Latin America, training
                            business and IT personnel
                          </li>
                          <li>
                            • Performed application risk assessments and compliance analysis ensuring adherence to
                            regulatory requirements
                          </li>
                          <li>
                            • Led SOX compliance testing for IT operations and participated in corporate internal audit
                            processes
                          </li>
                          <li>
                            • Managed security incident response protocols for device theft/loss and coordinated
                            physical security assessments
                          </li>
                          <li>
                            • Streamlined security training processes, achieving 50% reduction in training completion
                            time
                          </li>
                          <li>
                            • Mentored and supervised departmental interns in security operations and compliance
                            activities
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Information Security Intern Role */}
                    <div className="bg-white rounded-lg border border-gray-100 p-4 transition-all duration-200 hover:shadow-md">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleRole("Information Security Intern")}
                      >
                        <h4 className="font-medium text-gray-900">Information Security Intern</h4>
                        <button className="text-gray-400 hover:text-blue-900 transition-colors">
                          {isExpanded("Information Security Intern") ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 mb-3 font-mono flex items-center gap-1">
                        <Calendar size={12} className="text-gray-400" />
                        Jan 2014 — Jun 2015
                      </p>

                      <div className={`role-details ${isExpanded("Information Security Intern") ? "block" : "hidden"}`}>
                        <ul className="text-gray-600 space-y-2 text-sm leading-relaxed mt-3 animate-fade-in">
                          <li>
                            • Managed vulnerability assessments and remediation for J&J Medical LATAM web applications
                          </li>
                          <li>
                            • Delivered security training to 800+ end-users, establishing foundational security
                            awareness programs
                          </li>
                          <li>
                            • Provided SDLC methodology guidance to IT development teams ensuring secure coding
                            practices
                          </li>
                          <li>
                            • Administered JD Edwards change management processes maintaining compliance and audit
                            trails
                          </li>
                          <li>
                            • Developed and maintained IT policies and procedures for J&J Medical LATAM operations
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mentor Interativa */}
                <div className="experience-item relative border-l-2 border-blue-100 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded overflow-hidden bg-white shadow-sm border border-gray-100">
                        <Image
                          src="/images/logos/mentor-logo.png"
                          alt="Mentor Interativa"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <h3 className="text-xl font-medium text-black">Mentor Interativa</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                      <Calendar size={14} className="text-gray-400" />
                      <span>2011 — 2013</span>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-2">São José dos Campos-SP, Brazil</p>

                  <div className="bg-white rounded-lg border border-gray-100 p-4 transition-all duration-200 hover:shadow-md">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleRole("Software Developer")}
                    >
                      <h4 className="font-medium text-gray-900">Software Developer</h4>
                      <button className="text-gray-400 hover:text-blue-900 transition-colors">
                        {isExpanded("Software Developer") ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>

                    <div className={`role-details ${isExpanded("Software Developer") ? "block" : "hidden"}`}>
                      <ul className="text-gray-600 space-y-2 text-sm leading-relaxed mt-3 animate-fade-in">
                        <li>• Developed learning management system with social network integration</li>
                        <li>• Created and launched the company's first mobile application</li>
                        <li>• Technologies: Java, Google App Engine, SQL Server, PHP, MySQL, PhoneGap</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Stefanini */}
                <div className="experience-item relative border-l-2 border-blue-100 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded overflow-hidden bg-white shadow-sm border border-gray-100">
                        <Image
                          src="/images/logos/stefanini-logo.png"
                          alt="Stefanini"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <h3 className="text-xl font-medium text-black">Stefanini</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                      <Calendar size={14} className="text-gray-400" />
                      <span>Jan 2011 — Dec 2011</span>
                    </div>
                  </div>
                  <p className="text-gray-500 mb-2">Jaguariúna-SP, Brazil</p>

                  <div className="bg-white rounded-lg border border-gray-100 p-4 transition-all duration-200 hover:shadow-md">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleRole("Junior Software Developer")}
                    >
                      <h4 className="font-medium text-gray-900">Junior Software Developer</h4>
                      <button className="text-gray-400 hover:text-blue-900 transition-colors">
                        {isExpanded("Junior Software Developer") ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>

                    <div className={`role-details ${isExpanded("Junior Software Developer") ? "block" : "hidden"}`}>
                      <ul className="text-gray-600 space-y-2 text-sm leading-relaxed mt-3 animate-fade-in">
                        <li>
                          • Led system migration initiatives, successfully translating legacy Delphi applications to
                          modern Java architecture
                        </li>
                        <li>
                          • Engineered payment processing enhancements, implementing support for new credit card types
                          in financial transaction systems
                        </li>
                        <li>
                          • Utilized enterprise technologies including Java, C#, Struts framework, SQL Server, and MySQL
                          for full-stack development
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Personal Projects */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Code className="text-blue-900" size={24} />
                <h2 className="text-2xl font-light text-black">Personal Projects</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Meus Desafios */}
                <div className="project-card bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/3 h-48 md:h-auto bg-gray-50 flex items-center justify-center">
                      <Image
                        src="/images/projects/meus-desafios.png"
                        alt="Meus Desafios"
                        fill
                        className="object-contain p-2"
                      />
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200 flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          LIVE
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-medium text-gray-900 flex items-center gap-2">
                          <span>Meus Desafios</span>
                        </h3>
                        <Link
                          href="https://meusdesafios.com.br"
                          target="_blank"
                          className="text-blue-900 hover:text-blue-700"
                        >
                          <ExternalLink size={18} />
                        </Link>
                      </div>
                      <p className="mt-3 text-gray-600">
                        A habit-building and goal-tracking platform that encourages users to take on challenges in areas
                        like fitness, productivity, and personal development. Includes ranking, streak tracking, and
                        community interaction features. Features both a web platform and a mobile app built with React
                        Native for on-the-go challenge tracking.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Goal Tracking</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Community</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Personal Development
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React Native</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Papelando */}
                <div className="project-card bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/3 h-48 md:h-auto bg-gray-50 flex items-center justify-center">
                      <Image src="/images/projects/papelando.png" alt="Papelando" fill className="object-contain p-2" />
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200 flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          LIVE
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-medium text-gray-900 flex items-center gap-2">
                          <span>Papelando</span>
                        </h3>
                        <Link
                          href="https://papelando.com.br"
                          target="_blank"
                          className="text-blue-900 hover:text-blue-700"
                        >
                          <ExternalLink size={18} />
                        </Link>
                      </div>
                      <p className="mt-3 text-gray-600">
                        A virtual stationery brand offering customized planners, notebooks, and journals. Focused on
                        combining design and functionality, Papelando helps users stay organized and motivated through
                        personalized print products.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">E-commerce</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Custom Products
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Design</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 75 Hard Challenge */}
                <div className="project-card bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/3 h-48 md:h-auto bg-gray-50 flex items-center justify-center">
                      <Image
                        src="/images/projects/75hard.png"
                        alt="75 Hard Challenge"
                        fill
                        className="object-contain p-2"
                      />
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full border border-amber-200 flex items-center gap-1">
                          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                          PAUSED
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-medium text-gray-900 flex items-center gap-2">
                          <span>75 Hard Challenge</span>
                        </h3>
                        <Link
                          href="https://75hard.com.br"
                          target="_blank"
                          className="text-blue-900 hover:text-blue-700"
                        >
                          <ExternalLink size={18} />
                        </Link>
                      </div>
                      <p className="mt-3 text-gray-600">
                        A digital log and motivation tool to track progress on the 75 Hard mental toughness program.
                        Includes daily checklists, habit tracking, and visual streak indicators for enhanced commitment
                        and discipline.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Habit Tracking</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Fitness</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Mental Toughness
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DietaFlex */}
                <div className="project-card bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/3 h-48 md:h-auto bg-gray-50 flex items-center justify-center">
                      <Image src="/images/projects/dietaflex.png" alt="DietaFlex" fill className="object-contain p-2" />
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full border border-amber-200 flex items-center gap-1">
                          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                          PAUSED
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-medium text-gray-900 flex items-center gap-2">
                          <span>DietaFlex</span>
                        </h3>
                        <Link
                          href="https://dietaflex.com.br"
                          target="_blank"
                          className="text-blue-900 hover:text-blue-700"
                        >
                          <ExternalLink size={18} />
                        </Link>
                      </div>
                      <p className="mt-3 text-gray-600">
                        A flexible diet management tool designed to help users balance macros and calories while
                        maintaining freedom of food choice. Ideal for people seeking sustainability in their nutrition
                        goals without strict food restrictions.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Nutrition</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Macro Tracking</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Flexible Dieting
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Languages */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Languages className="text-blue-900" size={20} />
                <h3 className="text-lg font-medium text-black">Languages</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Portuguese</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="h-full bg-blue-900 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <span className="text-sm text-gray-500">Native</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">English</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="h-full bg-blue-900 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                    <span className="text-sm text-gray-500">Fluent</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Spanish</span>
                  <div className="flex items-center">
                    <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="h-full bg-blue-900 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-sm text-gray-500">Fluent</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-900" size={20} />
                <h3 className="text-lg font-medium text-black">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-blue-100 pl-4">
                  <h4 className="font-medium text-gray-900">Federal University of São Paulo</h4>
                  <p className="text-sm text-gray-600">Bachelor of Computer Science</p>
                  <p className="text-sm text-gray-500 font-mono flex items-center gap-1 mt-1">
                    <Calendar size={12} className="text-gray-400" />
                    2011 — 2015
                  </p>
                </div>
                <div className="border-l-2 border-blue-100 pl-4">
                  <h4 className="font-medium text-gray-900">DeVry - Metrocamp</h4>
                  <p className="text-sm text-gray-600">Post-graduation, Information Security</p>
                  <p className="text-sm text-gray-500 font-mono flex items-center gap-1 mt-1">
                    <Calendar size={12} className="text-gray-400" />
                    2016 — 2018
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-blue-900" size={20} />
                <h3 className="text-lg font-medium text-black">Certifications</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-100 pl-4">
                  <Link
                    href="https://www.credly.com/badges/17833853-d263-4c5d-8910-5ba917c0035a"
                    target="_blank"
                    className="font-medium text-gray-900 hover:text-blue-900 transition-colors inline-flex items-center gap-1"
                  >
                    CompTIA Security+
                    <ExternalLink size={14} className="text-gray-400" />
                  </Link>
                  <p className="text-sm text-gray-500 font-mono flex items-center gap-1 mt-1">
                    <Calendar size={12} className="text-gray-400" />
                    2017 — 2020
                  </p>
                </div>
                <div className="border-l-2 border-blue-100 pl-4">
                  <Link
                    href="https://www.credly.com/badges/6edbb4e1-608a-404e-8185-114e3820f7cf"
                    target="_blank"
                    className="font-medium text-gray-900 hover:text-blue-900 transition-colors inline-flex items-center gap-1"
                  >
                    SAFe® 5 Agilist
                    <ExternalLink size={14} className="text-gray-400" />
                  </Link>
                  <p className="text-sm text-gray-500 font-mono flex items-center gap-1 mt-1">
                    <Calendar size={12} className="text-gray-400" />
                    2020 — 2021
                  </p>
                </div>
                <div className="border-l-2 border-blue-100 pl-4">
                  <Link
                    href="https://www.credly.com/badges/92b24cf6-5666-4e22-85c3-4b5b699d7698"
                    target="_blank"
                    className="font-medium text-gray-900 hover:text-blue-900 transition-colors inline-flex items-center gap-1"
                  >
                    Blue Prism Developer
                    <ExternalLink size={14} className="text-gray-400" />
                  </Link>
                  <p className="text-sm text-gray-500 font-mono flex items-center gap-1 mt-1">
                    <Calendar size={12} className="text-gray-400" />
                    2020 — Present
                  </p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-900" size={20} />
                <h3 className="text-lg font-medium text-black">Core Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Team Leadership",
                  "Product Management",
                  "Digital Transformation",
                  "Information Security",
                  "AI/ML Integration",
                  "Web Development",
                  "API Development",
                  "Agile/Scrum",
                  "JIRA",
                  "Oracle Eloqua",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-800 text-sm rounded-full border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-gray-500">
            Last updated June 2025 • Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
