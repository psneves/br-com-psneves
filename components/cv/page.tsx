"use client"

import React from 'react'
import { Award, Users, Zap, Briefcase, GraduationCap, Globe, Code } from 'lucide-react'

interface PDFDocumentProps {
  data: {
    personalInfo: {
      name: string
      title: string
      location: string
      email: string
      website: string
    }
    summary: string[]
    experience: Array<{
      company: string
      roles: Array<{
        title: string
        period: string
        responsibilities: string[]
      }>
    }>
    skills: string[]
    education: Array<{
      institution: string
      degree: string
      period: string
    }>
    certifications: Array<{
      name: string
      period: string
    }>
    languages: Array<{
      language: string
      level: string
    }>
    projects: Array<{
      name: string
      url: string
      status: string
      description: string
    }>
  }
}

const PDFDocument: React.FC<PDFDocumentProps> = ({ data }) => {
  return (
    <div className="pdf-document bg-white text-black font-sans leading-relaxed page-break-inside-avoid">
      {/* Header Section */}
      <header className="pdf-header border-b-4 border-gray-800 pb-8 mb-10 page-break-inside-avoid">
        <div className="text-center">
          <h1 className="text-6xl font-black text-gray-900 tracking-wider mb-3 uppercase leading-none">
            {data.personalInfo.name}
          </h1>
          <p className="text-2xl text-gray-600 font-light mb-6 tracking-wide">
            {data.personalInfo.title}
          </p>
          <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-3 gap-6 text-base text-gray-700">
          <div className="flex items-center justify-center font-medium">
            <span className="font-bold mr-3 text-lg">📍</span>
            <span>{data.personalInfo.location}</span>
          </div>
          <div className="flex items-center justify-center font-medium">
            <span className="font-bold mr-3 text-lg">📧</span>
            <span>{data.personalInfo.email}</span>
          </div>
          <div className="flex items-center justify-center font-medium">
            <span className="font-bold mr-3 text-lg">🌐</span>
            <span>{data.personalInfo.website}</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="pdf-section mb-10 page-break-inside-avoid">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-base font-bold">P</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider">
            Professional Summary
          </h2>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gray-800 page-break-inside-avoid">
          {data.summary.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed text-base font-light">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="pdf-section mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-base font-bold">E</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider">
            Professional Experience
          </h2>
        </div>

        {data.experience.map((company, companyIndex) => (
          <div key={companyIndex} className="company-block mb-8 page-break-inside-avoid">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-gray-800 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-black text-gray-900 text-xl mb-1">
                    {company.company}
                  </h3>
                  <div className="w-16 h-0.5 bg-gray-400"></div>
                </div>
              </div>

              <div className="space-y-6">
                {company.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="role-item bg-white p-5 rounded-lg border border-gray-200 page-break-inside-avoid">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-bold text-gray-800 text-lg leading-tight">
                        {role.title}
                      </h4>
                      <p className="text-gray-600 text-sm font-semibold bg-gray-100 px-3 py-1 rounded-full">
                        {role.period}
                      </p>
                    </div>
                    <ul className="text-gray-700 text-sm list-none space-y-2">
                      {role.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start page-break-inside-avoid">
                          <span className="text-gray-400 mr-3 mt-1">•</span>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Two Column Layout for Skills/Education/etc */}
      <div className="grid grid-cols-2 gap-10 mb-12">
        {/* Education */}
        <section className="pdf-section">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-base font-bold">🎓</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider">
              Education
            </h2>
          </div>
          <div className="space-y-5">
            {data.education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-xl border-l-4 border-blue-600 shadow-sm">
                <h3 className="font-bold text-gray-900 text-base">{edu.institution}</h3>
                <p className="text-gray-700 text-sm font-medium mt-1">{edu.degree}</p>
                <p className="text-blue-600 text-xs font-bold mt-2 bg-blue-200 px-2 py-1 rounded-full inline-block">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="pdf-section">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-base font-bold">🏆</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider">
              Certifications
            </h2>
          </div>
          <div className="space-y-5">
            {data.certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-amber-50 to-amber-100 p-5 rounded-xl border-l-4 border-amber-600 shadow-sm">
                <h3 className="font-bold text-gray-900 text-base">{cert.name}</h3>
                <p className="text-amber-700 text-xs font-bold mt-2 bg-amber-200 px-2 py-1 rounded-full inline-block">{cert.period}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-2 gap-10 mb-12">
        {/* Languages */}
        <section className="pdf-section">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-base font-bold">L</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider">
              Languages
            </h2>
          </div>
          <div className="space-y-4">
            {data.languages.map((lang, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border-l-4 border-green-600 flex justify-between items-center shadow-sm">
                <span className="text-gray-900 font-bold text-base">{lang.language}</span>
                <span className="text-green-700 font-bold text-sm bg-green-200 px-3 py-1 rounded-full">{lang.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Core Skills */}
        <section className="pdf-section">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-base font-bold">S</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wider">
              Core Skills
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs rounded-full font-bold shadow-sm hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Personal Projects */}
      <section className="pdf-section mb-12 page-break-inside-avoid">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-base font-bold">💼</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider">
            Personal Projects
          </h2>
        </div>
        <div className="space-y-6">
          {data.projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl border-l-4 border-indigo-600 shadow-lg page-break-inside-avoid">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className="font-black text-gray-900 text-lg">{project.name}</h3>
                    <span className="text-indigo-700 text-sm font-semibold bg-indigo-200 px-2 py-1 rounded">
                      {project.url}
                    </span>
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-bold shadow-sm ${
                        project.status === "LIVE"
                          ? "bg-green-500 text-white"
                          : "bg-amber-500 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-medium">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pdf-footer mt-12 pt-6 border-t-2 border-gray-300 text-center page-break-inside-avoid">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg">
          <p className="text-gray-600 text-sm font-semibold">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} • Contact: {data.personalInfo.email}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Generated with professional PDF technology • Designed for excellence
          </p>
        </div>
      </footer>
    </div>
  )
}

export default PDFDocument