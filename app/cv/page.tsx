"use client";

import React from "react";
import { Mail, Linkedin, Github, Globe, MapPin, Download, Calendar, Briefcase, GraduationCap, Award, Users, Code, Languages, Phone, Home, ArrowLeft } from "lucide-react";

// Semantic section components
interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function Section({ title, icon, children, className = "" }: SectionProps) {
  return (
    <section className={`mb-6 print:mb-4 print:break-inside-avoid ${className}`}>
      <header className="flex items-baseline gap-2">
        <span className="text-blue-600 icon-align shrink-0" aria-hidden="true">
          {icon}
        </span>
        <h2 className="text-lg font-semibold text-gray-900 uppercase tracking-wide leading-none print:text-base section-header">{title}</h2>
      </header>
      <div className={className}>{children}</div>
    </section>
  );
}

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
  current?: boolean;
}

function ExperienceItem({ title, company, period, location, achievements, current = false }: ExperienceItemProps) {
  return (
    <article className="mb-4 print:mb-3 space-y-0 print:break-inside-avoid">
      <header className="mb-2">
        <div className="flex space-y-0 items-start justify-between gap-2">
          <div className="flex-1 space-y-0 ">
            <h3 className="font-bold text-gray-900 text-base print:text-sm">{company}</h3>
            <p className="text-blue-600 font-medium text-sm print:text-xs">{title}</p>
          </div>
          {current && <span className="bg-green-100 text-green-900 text-xs px-2 py-1 rounded-full font-medium print:hidden">Current</span>}
        </div>
        <div className="flex space-y-0 items-center gap-4 text-xs text-gray-600 mt-1">
          <span className="flex items-center gap-1">
            <Calendar size={12} aria-hidden="true" />
            {period}
          </span>
          {location && (
            <span className="flex items-center gap-1">
              <MapPin size={12} aria-hidden="true" />
              {location}
            </span>
          )}
        </div>
      </header>
      <ul className="space-y-0 text-sm print:text-xs text-gray-700">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-2 leading-relaxed">
            <span className="text-blue-600 flex-shrink-0" aria-hidden="true">
              •
            </span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

interface SkillGroupProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

function SkillGroup({ title, skills, icon }: SkillGroupProps) {
  return (
    <div className="mb-4 print:mb-3">
      <h3 className="flex items-center gap-2 font-medium text-gray-900 text-sm mb-2 leading-none">
        <span className="text-blue-600 icon-align shrink-0" aria-hidden="true">
          {icon}
        </span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => (
          <span key={skill} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded border print:border-gray-300 skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CV() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @page {
          size: A4;
          margin: 0.5in;
          counter-increment: page;
        }

        @page:first {
          counter-reset: page 1;
        }

        @page:after {
          content: counter(page) " / 2";
          position: absolute;
          bottom: 0.25in;
          right: 0.5in;
          font-size: 10px;
          color: #6b7280;
        }

        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          body {
            font-size: 12px;
            line-height: 1.4;
          }

          .cv-container {
            max-height: 10.8in;
            overflow: hidden;
            page-break-after: auto;
          }

          .page-break {
            page-break-before: always;
          }

          .no-break {
            page-break-inside: avoid;
          }

          .print-hidden {
            display: none !important;
          }

          /* Prefer justified alignment for printed text */
          .cv-container p,
          .cv-container li span:last-child {
            text-align: justify !important;
            -webkit-hyphens: auto;
            hyphens: auto;
          }

          /* Ensure colors are preserved (darker blue for print) */
          .text-blue-600 {
            color: #1e40af !important; /* tailwind blue-800 */
          }

          .border-blue-600 {
            border-color: #1e40af !important;
          }

          .bg-green-100 {
            background-color: #dcfce7 !important;
          }

          .text-green-800 {
            color: #166534 !important;
          }

          /* Adjust right column sizing for better fit */
          .print\\:text-xs {
            font-size: 11px !important;
          }

          .print\\:text-sm {
            font-size: 12px !important;
          }

          .print\\:mb-2 {
            margin-bottom: 0.375rem !important;
          }

          .print\\:mb-3 {
            margin-bottom: 0.5rem !important;
          }

          .print\\:space-y-4 > * + * {
            margin-top: 0.75rem !important;
          }

          /* Compact skill tags (slightly larger for readability) */
          .skill-tag {
            font-size: 10px !important;
            padding: 0.125rem 0.375rem !important;
            margin: 0.125rem !important;
          }

          /* Reduce section headers */
          .section-header {
            font-size: 14px !important;
            margin-bottom: 0.5rem !important;
          }
        }

        /* Align icons vertically with labels */
        .icon-align {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .icon-align svg {
          display: block;
        }

        @media screen {
          .cv-container {
            background: white;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            margin: 2rem auto;
            max-width: 8.5in;
            min-height: 11in;
          }

          /* Darker blue tone for on-screen CV page elements */
          .cv-container .text-blue-600 {
            color: #1e40af;
          }
          .cv-container .border-blue-600 {
            border-color: #1e40af;
          }
          .cv-container .hover\\:text-blue-600:hover {
            color: #1e40af;
          }
        }
      `}</style>

      {/* Download Button - Screen Only */}
      <div className="fixed top-4 right-4 z-10 print-hidden flex gap-2">
        <button onClick={() => (window.location.href = "/")} className="button-secondary text-sm px-4 py-2 lg:px-6 lg:py-3" aria-label="Go to Home">
          <ArrowLeft size={16} />
          Return
        </button>
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
          aria-label="Download CV as PDF"
        >
          <Download size={16} aria-hidden="true" />
          Download PDF
        </button>
      </div>

      <div className="cv-container bg-white print:bg-white">
        <div className="p-8 print:p-0">
          {/* Header */}
          <header className="mb-6 print:mb-4 no-break">
            <div className="text-center w-full border-b-2 border-blue-600 pb-4">
              {/* Name and Title */}
              <div className="mb-4 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2 print:text-3xl">Paulo Neves</h1>
                <div className="w-full flex flex-col items-center">
                  <p className="text-lg text-blue-600 font-medium">Full Stack Engineering Manager | People Leader</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-1 text-xs print:text-xs text-gray-600 print:gap-x-12">
                <span className="flex items-center gap-1">
                  <MapPin size={12} aria-hidden="true" />
                  Jacareí-SP, Brazil
                </span>
                <a href="https://br.linkedin.com/in/psneves" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Linkedin size={12} aria-hidden="true" />
                  LinkedIn @psneves
                </a>
                <a href="https://github.com/psneves" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Github size={12} aria-hidden="true" />
                  GitHub @psneves
                </a>
                <a href="https://psneves.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Globe size={12} aria-hidden="true" />
                  psneves.com.br
                </a>
                <a href="mailto:paulo@psneves.com.br" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Mail size={12} aria-hidden="true" />
                  paulo@psneves.com.br
                </a>
                <a href="tel:+551299180173" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Phone size={12} aria-hidden="true" />
                  +55 (12) 99180-1173
                </a>
              </div>
            </div>
          </header>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:grid-cols-3 print:gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 print:col-span-2 space-y-6 print:space-y-4">
              {/* Professional Summary */}
              <Section title="Executive Summary" icon={<Users size={16} />}>
                <p className="text-gray-700 leading-relaxed text-sm print:text-xs print:justify-normal">
                  Technology leader with <strong>15+ years</strong> delivering secure, scalable web/API platforms at enterprise scale. Combines hands-on Full Stack engineering with solution architecture, product strategy, and stakeholder management.
                  Currently leads engineering chapter and AI initiatives that accelerate SDLC with generative/agentic approaches while coaching senior engineers and raising technical standards across multiple SQUADs.
                </p>
              </Section>

              {/* Experience */}
              <Section title="Professional Experience" icon={<Briefcase size={16} />}>
                <ExperienceItem
                  title="IT Manager - Full Stack Chapter Lead"
                  company="Johnson & Johnson - Technology Services"
                  period="Sep 2023 — Present"
                  location="São José dos Campos-SP"
                  current={true}
                  achievements={[
                    "Guide 15 Full Stack parallel initiatives; technical reference and/or budget management",
                    "Govern vendor strategy and capacity; optimize partner tiers, SLAs and delivery outcomes",
                    "Elevate capabilities in DevSecOps, CI/CD, observability and service reliability through chapter programs",
                    "Lead KODA (Key Operations & Development Assistants) initiative to accelerate SDLC with AI",
                  ]}
                />

                <ExperienceItem
                  title="IT Lead - Full Stack Chapter Lead"
                  company="Johnson & Johnson - Technology Services"
                  period="Apr 2023 — Aug 2023"
                  location="São José dos Campos-SP"
                  achievements={[
                    "Interviewed/onboarded engineers; set strategic direction for chapter technologies and training",
                    "Created individual development plans and career pathways; mentored senior and junior engineers",
                    "Led training events to strengthen regional engineering capabilities",
                  ]}
                />
                <ExperienceItem
                  title="IT Lead - Technical Product Owner"
                  company="Johnson & Johnson - Innovative Medicine"
                  period="Sep 2020 — Mar 2023"
                  location="São José dos Campos-SP"
                  achievements={[
                    "Owned roadmap and delivery for personalization, SSO (OIDC/SAML), analytics and search for JanssenProLATAM.com",
                    "Defined API contracts and NFRs; improved reliability, performance and observability",
                    "Established OKRs/KPIs; led demos and executive readouts across markets",
                    "Drove vendor and internal squads through Agile delivery with audited compliance",
                  ]}
                />
              </Section>
              <div className="page-break print:block hidden" />
            </div>

            {/* Right Column */}
            <div className="space-y-6 print:space-y-4">
              {/* Core Skills */}
              <Section title="Skills" icon={<Code size={16} />}>
                
                        <SkillGroup
                          title="Engineering"
                          icon={<Code size={12} />}
                          skills={["React", "Next.js", "NodeJS", "Python", "Docker", "DevSecOps", "CI/CD", "Robot Framework", "Playwright","Full Stack Architecture", "Artificial Intelligence", "API Platforms", "Cloud (AWS/GCP/Azure)", "Product Strategy"]}
                        />
                
                        <SkillGroup
                          title="Management"
                          icon={<Briefcase size={12} />}
                          skills={["Chapter Leadership", "Roadmapping", "OKRs", "Vendor Management", "Budget Management", "Stakeholder Management"]}
                        />
              </Section>

              {/* Languages */}
              <Section title="Languages" icon={<Languages size={16} />} className="no-break">
                <div className="space-y-2 text-sm print:text-xs">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Portuguese</span>
                    <span className="font-medium text-blue-600">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-700">English</span>
                    <span className="font-medium text-blue-600">Fluent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Spanish</span>
                    <span className="font-medium text-blue-600">Fluent</span>
                  </div>
                </div>
              </Section>

              {/* Education */}
              <Section title="Education" icon={<GraduationCap size={16} />} className="no-break">
                <div className="space-y-0 print:space-y-0">
                  <div className="space-y-0 mb-6">
                    <h3 className="font-bold text-gray-900 text-sm print:text-xs">Federal University of São Paulo</h3>
                    <p className="text-blue-600 text-sm print:text-xs">Bachelor in Computer Science</p>
                    <p className="text-gray-600 text-xs">2011 — 2015</p>
                  </div>
                  <div className="space-y-0">
                    <h3 className="font-bold text-gray-900 text-sm print:text-xs">DeVry – Metrocamp</h3>
                    <p className="text-blue-600 text-sm print:text-xs">Post-graduate, Information Security Management</p>
                    <p className="text-gray-600 text-xs">2016 — 2018</p>
                  </div>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </div>
      <div className="cv-container bg-white print:bg-white p-8 print:p-0">
        <Section title="Professional Experience (cont.)" icon={<Briefcase size={16} />}>
          <ExperienceItem
            title="Service Specialist"
            company="Johnson & Johnson - Technology Services"
            location="São José dos Campos-SP"
            period="Feb 2019 — Aug 2020"
            achievements={["Partnered with regional and global IT stakeholders to advance digital transformation"]}
          />
          <ExperienceItem
            title="Sr. Information Security Analyst"
            company="Johnson & Johnson - Technology Services"
            location="São José dos Campos-SP"
            period="Apr 2018 — Feb 2019"
            achievements={["Security liaison for Corporate, Vision Care and LifeScan across LATAM", "Led app-security assessments during M&A due diligence and integrations"]}
          />

          <ExperienceItem
            title="Information Security Analyst"
            company="Johnson & Johnson - Information Security & Risk Management"
            location="São José dos Campos-SP"
            period="Jun 2015 — Mar 2018"
            achievements={["Drove enterprise security awareness programs; performed risk and compliance reviews"]}
          />

          <ExperienceItem
            title="Information Security Intern"
            company="Johnson & Johnson - Information Security & Risk Management"
            location="São José dos Campos-SP"
            period="Jan 2014 — May 2015"
            achievements={[
              "Supported vulnerability assessment and remediation for J&J Medical LATAM web applications",
              "Delivered security training to 800+ end-users and established foundational awareness programs",
              "Guided SDLC methodology adoption and secure coding practices for development teams",
            ]}
          />

          <ExperienceItem
            title="Software Developer"
            company="Mentor Interativa"
            location="São José dos Campos-SP"
            period="Dec 2011 — Nov 2013"
            achievements={["Developed learning management system with social network integration", "Created and launched the company's first mobile application"]}
          />

          <ExperienceItem
            title="Jr. Developer"
            company="Stefanini"
            location="Jaguariúna-SP"
            period="Jan 2011 — Dec 2011"
            achievements={["Led system migration initiatives, successfully translating legacy Delphi applications to modern Java architecture", "Engineered payment processing enhancements - new credit card types in financial transaction systems"]}
          />

          <ExperienceItem
            location="Jaguariúna-SP"
            title="Instructor - Java Programming"
            company="FAJTec"
            period="Jan 2010 — Jul 2010"
            achievements={["Helped students of the course Introduction to Programming in Java to understand the course content", "Created and applied tests for the students"]}
          />

          <ExperienceItem
            title="Instructor - Microsoft Office"
            company="Data Computadores"
            location="Jaguariúna-SP"
            period="May 2008 — Sep 2009"
            achievements={["Taught students on basic computer skills, including Windows configuration and Microsoft Office applications", "Provided personalized computer training for individuals and small groups"]}
          />
        </Section>
      </div>
    </>
  );
}
