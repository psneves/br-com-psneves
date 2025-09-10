"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import "./styles.css";

export default function CVPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    if (!contentRef.current) return;

    setIsGenerating(true);
    try {
      // Try using print media query approach first (cleaner result)
      const originalDisplay = contentRef.current.style.display;
      contentRef.current.style.display = "block";

      // Apply print styles
      const style = document.createElement("style");
      style.textContent = `
        @page { size: A4; margin: 10mm; }
        @media print { body { -webkit-print-color-adjust: exact; } }
      `;
      document.head.appendChild(style);

      window.print();

      // If print dialog is canceled, fall back to PDF generation
      setTimeout(async () => {
        // Reset the display style
        if (contentRef.current) {
          contentRef.current.style.display = originalDisplay;
        }
        document.head.removeChild(style);

        // If still generating, use jsPDF as fallback
        if (isGenerating) {
          const jsPDF = (await import("jspdf")).default;
          const html2pdf = (await import("html2pdf.js")).default;

          const options = {
            margin: 10,
            filename: "Paulo_Neves_CV.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: {
              scale: 2,
              useCORS: true,
              letterRendering: true,
            },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            pagebreak: { mode: ["avoid-all", "css", "legacy"] },
          };

          await html2pdf().set(options).from(contentRef.current).save();
        }

        setIsGenerating(false);
      }, 1000);
    } catch (error) {
      console.error("Error generating PDF:", error);
      window.print();
      setIsGenerating(false);
    }
  };

  // Auto-generate PDF once content is rendered
  useEffect(() => {
    const timer = setTimeout(() => {
      generatePDF();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    "Cloud (AWS/GCP/Azure)",
    "Full‑Stack (React/NextJS/NodeJS/Python)",
    "API Platforms & Microservices",
    "AI/IA Architecture",
    "Generative & Agentic AI",
    "Kubernetes & Docker",
    "DevSecOps & CI/CD",
    "Enterprise Architecture & Standards",
    "Security, Privacy & Compliance",
    "Audit Readiness (SOX)",
    "Product & Platform Management",
    "Roadmapping & OKRs",
    "Stakeholder Management",
    "People Leadership & Mentoring",
    "Vendor & Budget Management",
  ];

  const personalProjects = [
    {
      name: "Meus Desafios",
      url: "meusdesafios.com.br",
      status: "LIVE",
      description:
        "A habit-building and goal-tracking platform with ranking, streak tracking, and community features.",
    },
    {
      name: "75 Hard Challenge",
      url: "75hard.com.br",
      status: "PAUSED",
      description:
        "A digital log and motivation tool to track progress on the 75 Hard mental toughness program.",
    },
    {
      name: "Papelando",
      url: "papelando.com.br",
      status: "PAUSED",
      description:
        "A virtual stationery brand offering customized planners, notebooks, and journals.",
    },

    {
      name: "DietaFlex",
      url: "dietaflex.com.br",
      status: "PAUSED",
      description:
        "A flexible diet management tool designed to help users balance macros and calories.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 print:p-0 bg-white">
      <div className="mb-8 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to website
        </Link>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Download size={16} className="text-blue-600" />
            <span className="font-medium text-blue-900">PDF Generation</span>
          </div>
          {isGenerating ? (
            <p className="text-blue-700 text-sm">
              Generating your PDF... This may take a few seconds.
            </p>
          ) : (
            <div>
              <p className="text-blue-700 text-sm mb-2">
                Your PDF should download automatically. If it doesn't, you can:
              </p>
              <button
                onClick={generatePDF}
                disabled={isGenerating}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm disabled:opacity-50"
              >
                <Download size={14} />
                Download PDF Manually
              </button>
            </div>
          )}
        </div>
      </div>

      <div ref={contentRef} className="print:mx-0 bg-white print:bg-white">
        <header className="mb-6 border-b-2 border-gray-800 pb-4 print:border-gray-800 print:break-inside-avoid print:mb-4 print:pb-3">
          <div className="text-center print:text-left">
            <h1 className="text-4xl font-bold text-gray-900 print:text-3xl print:font-bold print:tracking-tight print:mb-1">
              PAULO NEVES
            </h1>
            <p className="text-xl text-gray-700 mt-2 font-medium print:text-lg print:font-semibold print:mt-1 print:mb-3">
              IT Manager • Full‑Stack AI Engineering & Architecture
            </p>
            <div className="w-16 h-1 bg-gray-800 mx-auto print:mx-0 mt-2 print:mt-1"></div>
          </div>

          <div className="mt-4 print:mt-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:grid-cols-3 print:gap-2 text-sm text-gray-600 print:text-xs">
              <div className="flex items-center justify-center md:justify-start print:justify-start">
                <span className="font-medium">📍</span>
                <span className="ml-1">Jacareí-SP, Brazil</span>
              </div>
              <div className="flex items-center justify-center md:justify-start print:justify-start">
                <span className="font-medium">📧</span>
                <span className="ml-1">paulo@psneves.com.br</span>
              </div>
              <div className="flex items-center justify-center md:justify-start print:justify-start">
                <span className="font-medium">🌐</span>
                <span className="ml-1">linkedin.com/in/psneves</span>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-6 section print:mb-4">
          <div className="flex items-center gap-3 mb-4 print:mb-3">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center print:w-6 print:h-6">
              <span className="text-white text-sm font-bold print:text-xs">P</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide print:text-lg print:font-bold">
              Professional Summary
            </h2>
          </div>
          <div className="keep-together bg-gray-50 p-4 rounded-lg print:bg-transparent print:p-0 print:border-l-4 print:border-gray-800 print:pl-4">
            <p className="text-gray-700 mb-3 leading-relaxed print:text-sm print:mb-2 print:leading-relaxed">
              Technology leader with <strong>15+ years</strong> delivering at platform scale across LATAM in pharmaceutical and enterprise domains at Johnson & Johnson. 
              Blends hands‑on full‑stack engineering with solution architecture, product/platform strategy, and stakeholder management.
            </p>
            <p className="text-gray-700 leading-relaxed print:text-sm print:leading-relaxed">
              Expertise in <strong>generative & agentic AI</strong>, intelligent automation (IA), reusable reference architectures, microservices and API platforms, 
              and modern engineering practices (DevSecOps, CI/CD, containerization). Delivers <strong>secure, compliant, and audit‑ready</strong> solutions in complex environments (SOX and privacy).
            </p>
          </div>
        </section>

        <section className="mb-6 section print:mb-4">
          <div className="flex items-center gap-3 mb-4 print:mb-3">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center print:w-6 print:h-6">
              <span className="text-white text-sm font-bold print:text-xs">E</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide print:text-lg print:font-bold">
              Professional Experience
            </h2>
          </div>

          <div className="company-block allow-page-break mb-6 print:mb-4">
            <div className="bg-gray-100 p-4 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-gray-600 print:pl-3">
              <div className="flex justify-between items-start mb-3 print:mb-2">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg print:text-base print:font-bold">
                    Johnson & Johnson
                  </h3>
                  <p className="text-gray-600 text-sm print:text-xs font-medium">
                    São José dos Campos-SP, Brazil
                  </p>
                </div>
                <p className="text-gray-500 text-sm print:text-xs font-bold bg-gray-200 px-2 py-1 rounded print:bg-transparent print:px-0 print:py-0">
                  2014 — Present
                </p>
              </div>

            <div className="mt-2 pl-4 border-l-2 border-gray-200 print:border-gray-300 print:pl-3">
              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      IT Manager - Full Stack Chapter Lead
                    </h4>
                    <p className="text-gray-500 text-sm print:text-xs">
                      Sep 2023 — Present
                    </p>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>
                      Set platform architecture guardrails and reusable patterns to accelerate secure, scalable delivery across squads
                    </li>
                    <li>
                      Elevating technical capabilities— DevSecOps, CI/CD, observability, reliability
                    </li>
                    <li>
                      Lead KODA (Key Operations & Development Assistants) AI initiative to reduce software development lead time
                    </li>
                    <li>
                      Orchestrate cross-regional portfolio planning with BT and Global Architecture; sequence demand and funding against OKRs
                    </li>
                    <li>
                      Govern vendor strategy and capacity at chapter scale; optimize partner tiers, SLAs, and outcomes
                    </li>
                    <li>
                      Oversee environment strategy and operations (dev/QA/prod), security baselines, and cost/usage governance
                    </li>
                  </ul>
                </div>
              </div>

              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      IT Lead - Full Stack Chapter Lead
                    </h4>
                    <p className="text-gray-500 text-sm print:text-xs">
                      Apr 2023 — Oct 2023
                    </p>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>
                      Interview and onboard talent as required by digital products and Chapter growth
                    </li>
                    <li>
                      Act as point of escalation for talent resource issues and Chapter member performance management
                    </li>
                    <li>
                      Design individual development plans and career progression pathways for Chapter members
                    </li>
                    <li>
                      Set strategic direction of Chapter's associated technologies/skillsets and professional training plans
                    </li>
                    <li>
                      Lead training events and support the development of Chapter members through mentorship programs
                    </li>
                    <li>
                      Propose new and better ways of leveraging technology and capabilities under Chapter purview
                    </li>
                  </ul>
                </div>
              </div>

              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      IT Lead - Technical Product Owner
                    </h4>
                    <p className="text-gray-500 text-sm print:text-xs">
                      Sep 2020 — Mar 2023
                    </p>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>
                      Owned roadmap and delivery for Janssen Pro LATAM: personalization, SSO (OIDC/SAML), analytics and search across multiple markets
                    </li>
                    <li>
                      Defined API contracts, integration patterns and non‑functional requirements; improved reliability, performance and observability
                    </li>
                    <li>
                      Established OKRs/KPIs and stakeholder reporting; led demos and executive readouts to align outcomes with business goals
                    </li>
                    <li>
                      Led vendors and internal squads with Agile practices; managed scope, budget and cross‑regional dependencies
                    </li>
                    <li>
                      Ensured compliance and audit readiness focused on privacy and data protection
                    </li>
                  </ul>
                </div>
              </div>

              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      Service Specialist - Digital & RPA
                    </h4>
                    <p className="text-gray-500 text-sm print:text-xs">
                      Feb 2019 — Aug 2020
                    </p>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>
                      Architected intelligent automation (RPA) solutions and established platform governance aligned to enterprise standards
                    </li>
                    <li>
                      Coordinated PoCs for automation opportunities; quantified ROI and scaled successful patterns across functions
                    </li>
                    <li>
                      Established QA frameworks, delivery metrics and risk escalation protocols for automation initiatives
                    </li>
                    <li>
                      Partnered with regional and global IT stakeholders to advance digital transformation
                    </li>
                  </ul>
                </div>
              </div>

              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      Sr. Information Security Analyst
                    </h4>
                    <p className="text-gray-500 text-sm print:text-xs">
                      Apr 2018 — Feb 2019
                    </p>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>
                      Security liaison for Corporate, Vision Care and LifeScan across LATAM; guided risk posture and remediation
                    </li>
                    <li>
                      Led application security assessments during M&A due diligence and integration
                    </li>
                    <li>
                      Evaluated and strengthened security controls to meet corporate and regulatory requirements
                    </li>
                  </ul>
                </div>
              </div>

              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      Information Security Analyst
                    </h4>
                    <p className="text-gray-500 text-sm print:text-xs">
                      Jun 2015 — Mar 2018
                    </p>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>
                      Drove enterprise security awareness programs across LATAM for business and IT audiences
                    </li>
                    <li>
                      Performed application risk assessments and compliance reviews; ensured adherence to corporate standards
                    </li>
                    <li>Led SOX testing for IT operations and partnered with corporate internal audit</li>
                    <li>Coordinated incident response for device loss/theft and supported physical security assessments</li>
                    <li>Optimized security training processes (−50% completion time); mentored interns</li>
                  </ul>
                </div>
              </div>

              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      Information Security Intern
                    </h4>
                    <p className="text-gray-500 text-sm print:text-xs">
                      Jan 2014 — Jun 2015
                    </p>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>Supported vulnerability assessment and remediation for LATAM web applications</li>
                    <li>Delivered security training to 800+ end‑users; established foundational awareness programs</li>
                    <li>Guided SDLC methodology adoption and secure coding practices for development teams</li>
                    <li>Administered JD Edwards change management processes with compliant audit trails</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="company-block allow-page-break">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">
                  Mentor Interativa
                </h3>
                <p className="text-gray-600 text-sm print:text-xs">
                  São José dos Campos-SP, Brazil
                </p>
              </div>
              <p className="text-gray-500 text-sm print:text-xs">
                Dec 2011 — Nov 2013
              </p>
            </div>

            <div className="mt-2 pl-4 border-l-2 border-gray-200 print:border-gray-300 print:pl-3">
              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      Software Developer
                    </h4>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>
                      Developed learning management system with social network
                      integration
                    </li>
                    <li>
                      Created and launched the company's first mobile
                      application
                    </li>
                    <li>
                      Technologies: Java, Google App Engine, SQL Server, PHP,
                      MySQL, PhoneGap
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="company-block allow-page-break">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">
                  Stefanini
                </h3>
                <p className="text-gray-600 text-sm print:text-xs">
                  Jaguariúna-SP, Brazil
                </p>
              </div>
              <p className="text-gray-500 text-sm print:text-xs">
                Jan 2011 — Dec 2011
              </p>
            </div>

            <div className="mt-2 pl-4 border-l-2 border-gray-200 print:border-gray-300 print:pl-3">
              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      Junior Software Developer
                    </h4>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>
                      Led system migration initiatives from Delphi to Java
                    </li>
                    <li>
                      Engineered payment processing enhancements for credit card
                      systems
                    </li>
                    <li>Technologies: Java, C#, Struts, SQL Server, MySQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="company-block allow-page-break">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">
                  FAJTec - Faculdade Jaguariúna
                </h3>
                <p className="text-gray-600 text-sm print:text-xs">
                  Jaguariúna-SP, Brazil
                </p>
              </div>
              <p className="text-gray-500 text-sm print:text-xs">
                Jan 2010 — Jul 2010
              </p>
            </div>

            <div className="mt-2 pl-4 border-l-2 border-gray-200 print:border-gray-300 print:pl-3">
              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      Intern
                    </h4>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>
                      Helped students of the course Introduction to Programming in Java to understand the course content
                    </li>
                    <li>
                      Created and applied tests for the students
                    </li>
                    <li>
                      Assisted in academic support for programming fundamentals and Java development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="company-block allow-page-break">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">
                  Data Computadores
                </h3>
                <p className="text-gray-600 text-sm print:text-xs">
                  Jaguariúna-SP, Brazil
                </p>
              </div>
              <p className="text-gray-500 text-sm print:text-xs">
                May 2008 — Sep 2009
              </p>
            </div>

            <div className="mt-2 pl-4 border-l-2 border-gray-200 print:border-gray-300 print:pl-3">
              <div className="role-item">
                <div className="role-header-content">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-gray-800 print:text-sm">
                      Instructor
                    </h4>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4 print:space-y-0">
                    <li>
                      Taught students how to use computer, change Windows basic configurations and operate Microsoft Office applications
                    </li>
                    <li>
                      Provided personalized computer training for individuals and small groups
                    </li>
                    <li>
                      Developed instructional materials for basic computer literacy programs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4 grid-section print:mb-4">
          <section className="education-item">
            <div className="flex items-center gap-3 mb-4 print:mb-3">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center print:w-6 print:h-6">
                <span className="text-white text-sm font-bold print:text-xs">🎓</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide print:text-lg print:font-bold">
                Education
              </h2>
            </div>
            <div className="keep-together space-y-4 print:space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-gray-600 print:pl-3">
                <h3 className="font-bold text-gray-800 print:text-sm print:font-bold">
                  Federal University of São Paulo
                </h3>
                <p className="text-gray-700 text-sm print:text-xs font-medium">
                  Bachelor of Computer Science
                </p>
                <p className="text-gray-500 text-xs print:text-xs font-semibold">
                  2011 — 2015
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-gray-600 print:pl-3">
                <h3 className="font-bold text-gray-800 print:text-sm print:font-bold">
                  DeVry - Metrocamp
                </h3>
                <p className="text-gray-700 text-sm print:text-xs font-medium">
                  Post-graduation, Information Security
                </p>
                <p className="text-gray-500 text-xs print:text-xs font-semibold">
                  2016 — 2018
                </p>
              </div>
            </div>
          </section>

          <section className="certification-item print:break-inside-avoid">
            <div className="flex items-center gap-3 mb-4 print:mb-3">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center print:w-6 print:h-6">
                <span className="text-white text-sm font-bold print:text-xs">🏆</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide print:text-lg print:font-bold">
                Certifications
              </h2>
            </div>
            <div className="keep-together space-y-4 print:space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-gray-600 print:pl-3">
                <h3 className="font-bold text-gray-800 print:text-sm print:font-bold">
                  CompTIA Security+
                </h3>
                <p className="text-gray-500 text-xs print:text-xs font-semibold">
                  2017 — 2020
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-gray-600 print:pl-3">
                <h3 className="font-bold text-gray-800 print:text-sm print:font-bold">
                  SAFe® 5 Agilist
                </h3>
                <p className="text-gray-500 text-xs print:text-xs font-semibold">
                  2020 — 2021
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-gray-600 print:pl-3">
                <h3 className="font-bold text-gray-800 print:text-sm print:font-bold">
                  Blue Prism Developer
                </h3>
                <p className="text-gray-500 text-xs print:text-xs font-semibold">
                  2020 — Present
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4 grid-section print:break-inside-avoid print:mb-4">
          <section className="print:break-inside-avoid">
            <div className="flex items-center gap-3 mb-4 print:mb-3">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center print:w-6 print:h-6">
                <span className="text-white text-sm font-bold print:text-xs">L</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide print:text-lg print:font-bold">
                Languages
              </h2>
            </div>
            <div className="keep-together space-y-3 print:space-y-2">
              <div className="bg-gray-50 p-3 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-gray-600 print:pl-3 flex justify-between items-center">
                <span className="text-gray-800 font-semibold print:text-sm">Portuguese</span>
                <span className="text-gray-600 font-bold text-sm print:text-xs">Native</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-gray-600 print:pl-3 flex justify-between items-center">
                <span className="text-gray-800 font-semibold print:text-sm">English</span>
                <span className="text-gray-600 font-bold text-sm print:text-xs">Fluent</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg print:bg-transparent print:p-0 print:border-l-2 print:border-gray-600 print:pl-3 flex justify-between items-center">
                <span className="text-gray-800 font-semibold print:text-sm">Spanish</span>
                <span className="text-gray-600 font-bold text-sm print:text-xs">Fluent</span>
              </div>
            </div>
          </section>

          <section className="print:break-inside-avoid">
            <div className="flex items-center gap-3 mb-4 print:mb-3">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center print:w-6 print:h-6">
                <span className="text-white text-sm font-bold print:text-xs">S</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide print:text-lg print:font-bold">
                Core Skills
              </h2>
            </div>
            <div className="keep-together">
              <div className="flex flex-wrap gap-2 print:gap-1">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-gray-800 text-white text-xs rounded-lg font-semibold print:bg-gray-700 print:text-white print:text-xxs print:px-2 print:py-1 print:rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="mb-8 section print:break-inside-avoid print:mb-4">
          <div className="flex items-center gap-3 mb-4 print:mb-3">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center print:w-6 print:h-6">
              <span className="text-white text-sm font-bold print:text-xs">💼</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide print:text-lg print:font-bold">
              Personal Projects
            </h2>
          </div>
          <div className="space-y-4 print:space-y-3">
            {personalProjects.map((project) => (
              <div
                key={project.name}
                className="bg-gray-50 p-4 rounded-lg print:bg-transparent print:p-0 print:border-l-4 print:border-gray-800 print:pl-4 print:break-inside-avoid"
              >
                <div className="keep-together">
                  <div className="flex justify-between items-start mb-2 print:mb-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-gray-800 print:text-sm print:font-bold">
                          {project.name}
                        </h3>
                        <span className="text-gray-600 text-sm print:text-xs font-medium">
                          ({project.url})
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded font-semibold print:px-1 print:py-0 print:text-xs
                            ${
                              project.status === "LIVE"
                                ? "bg-green-100 text-green-800 print:bg-transparent print:text-green-700 print:border print:border-green-700"
                                : "bg-amber-100 text-amber-800 print:bg-transparent print:text-amber-700 print:border print:border-amber-700"
                            }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed print:text-xs print:leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-8 pt-4 border-t text-center text-gray-500 text-xs print:text-xxs print:mb-4 print:pt-3 print:break-inside-avoid">
          Last updated: September 2025 • Contact: paulo@psneves.com.br
        </footer>
      </div>
    </div>
  );
}
