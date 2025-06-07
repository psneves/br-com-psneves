"use client"

import { useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  useEffect(() => {
    // Trigger print dialog when the page loads
    const timer = setTimeout(() => {
      window.print()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-8 print:p-0">
      {/* Back button - only visible on screen, not when printing */}
      <div className="mb-8 print:hidden">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowLeft size={16} />
          Back to website
        </Link>
        <p className="mt-2 text-gray-500 text-sm">
          The print dialog should open automatically. If it doesn't, please use your browser's print function.
        </p>
      </div>

      {/* CV Content - optimized for printing */}
      <div className="print:mx-0">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-900">Paulo Neves</h1>
          <p className="text-xl text-gray-600 mt-1">IT Manager at Johnson & Johnson</p>

          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
            <div>Jacareí-SP, Brazil</div>
            <div>paulo@psneves.com.br</div>
            <div>linkedin.com/in/psneves</div>
            <div>github.com/psneves</div>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Summary</h2>
          <p className="text-gray-700 mb-2">
            Experienced IT professional with 15+ years in technology leadership, specializing in digital transformation,
            team management, and product development.
          </p>
          <p className="text-gray-700">
            Bachelor of Computer Science from Federal University of São Paulo with background as People Manager,
            Technical Product Owner, Service Specialist, Information Security Analyst, and Software Developer.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Experience</h2>

          <div className="mb-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Johnson & Johnson</h3>
                <p className="text-gray-600 text-sm">São José dos Campos-SP, Brazil</p>
              </div>
              <p className="text-gray-500 text-sm">2014 — Present</p>
            </div>

            <div className="mt-3 pl-4 border-l-2 border-gray-200">
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">IT Manager - Web and API Development</h4>
                  <p className="text-gray-500 text-sm">Apr 2023 — Present</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1">
                  <li>Lead talent acquisition and onboarding processes for digital product development teams</li>
                  <li>Design comprehensive individual development plans and career progression pathways</li>
                  <li>Define strategic technology direction and establish professional training frameworks</li>
                  <li>Drive organizational capability enhancement through targeted training events</li>
                  <li>Serve as escalation point for resource allocation and performance management issues</li>
                  <li>Spearhead AI Agents initiative to automate software development processes</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">IT Lead - Technical Product Owner</h4>
                  <p className="text-gray-500 text-sm">Sep 2020 — Mar 2023</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1">
                  <li>
                    Delivered end-to-end personalization, SSO integrations, web analytics, and search capabilities
                  </li>
                  <li>Managed product backlog and sprint planning using JIRA, aligning with OKR-driven objectives</li>
                  <li>Implemented comprehensive CSAT solution measuring customer satisfaction</li>
                  <li>Served as technical lead for Oracle Eloqua email marketing platform</li>
                  <li>Conducted stakeholder reporting through OKR reviews and product demonstrations</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">Service Specialist - Digital & RPA</h4>
                  <p className="text-gray-500 text-sm">Feb 2019 — Aug 2020</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1">
                  <li>Architected RPA and digital transformation solutions ensuring compliance with standards</li>
                  <li>Coordinated proof-of-concept initiatives and managed development capacity</li>
                  <li>Established quality assurance frameworks and risk escalation protocols</li>
                  <li>Built strategic partnerships with regional and global IT stakeholders</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">Sr. Information Security Analyst</h4>
                  <p className="text-gray-500 text-sm">Apr 2018 — Feb 2019</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1">
                  <li>Served as primary information security liaison across Latin America</li>
                  <li>Conducted comprehensive security assessments during M&A integration</li>
                  <li>Evaluated and validated security controls ensuring compliance</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">Information Security Analyst</h4>
                  <p className="text-gray-500 text-sm">Jun 2015 — Mar 2018</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1">
                  <li>Orchestrated enterprise-wide security awareness programs</li>
                  <li>Performed application risk assessments and compliance analysis</li>
                  <li>Led SOX compliance testing for IT operations</li>
                  <li>Managed security incident response protocols</li>
                  <li>Streamlined security training processes, achieving 50% reduction in completion time</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">Information Security Intern</h4>
                  <p className="text-gray-500 text-sm">Jan 2014 — Jun 2015</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1">
                  <li>Managed vulnerability assessments and remediation for web applications</li>
                  <li>Delivered security training to 800+ end-users</li>
                  <li>Provided SDLC methodology guidance to IT development teams</li>
                  <li>Administered JD Edwards change management processes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Mentor Interativa</h3>
                <p className="text-gray-600 text-sm">São José dos Campos-SP, Brazil</p>
              </div>
              <p className="text-gray-500 text-sm">Dec 2011 — Nov 2013</p>
            </div>

            <div className="mt-3 pl-4 border-l-2 border-gray-200">
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">Software Developer</h4>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1">
                  <li>Developed learning management system with social network integration</li>
                  <li>Created and launched the company's first mobile application</li>
                  <li>Technologies: Java, Google App Engine, SQL Server, PHP, MySQL, PhoneGap</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Stefanini</h3>
                <p className="text-gray-600 text-sm">Jaguariúna-SP, Brazil</p>
              </div>
              <p className="text-gray-500 text-sm">Jan 2011 — Dec 2011</p>
            </div>

            <div className="mt-3 pl-4 border-l-2 border-gray-200">
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">Junior Software Developer</h4>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1">
                  <li>Led system migration initiatives from Delphi to Java</li>
                  <li>Engineered payment processing enhancements for credit card systems</li>
                  <li>Technologies: Java, C#, Struts, SQL Server, MySQL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Education</h2>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">Federal University of São Paulo</h3>
              <p className="text-gray-700 text-sm">Bachelor of Computer Science</p>
              <p className="text-gray-500 text-sm">2011 — 2015</p>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">DeVry - Metrocamp</h3>
              <p className="text-gray-700 text-sm">Post-graduation, Information Security</p>
              <p className="text-gray-500 text-sm">2016 — 2018</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Certifications</h2>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">CompTIA Security+</h3>
              <p className="text-gray-500 text-sm">2017 — 2020</p>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">SAFe® 5 Agilist</h3>
              <p className="text-gray-500 text-sm">2020 — 2021</p>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800">Blue Prism Developer</h3>
              <p className="text-gray-500 text-sm">2020 — Present</p>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Languages</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Portuguese</span>
                <span className="text-gray-600">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">English</span>
                <span className="text-gray-600">Fluent</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Spanish</span>
                <span className="text-gray-600">Fluent</span>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Core Skills</h2>
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
              ].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Personal Projects</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-800">Meus Desafios</h3>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">LIVE</span>
              </div>
              <p className="text-gray-700 text-sm mt-1">
                A habit-building and goal-tracking platform with ranking, streak tracking, and community features.
              </p>
            </div>

            <div>
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-800">Papelando</h3>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">LIVE</span>
              </div>
              <p className="text-gray-700 text-sm mt-1">
                A virtual stationery brand offering customized planners, notebooks, and journals.
              </p>
            </div>

            <div>
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-800">75 Hard Challenge</h3>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">PAUSED</span>
              </div>
              <p className="text-gray-700 text-sm mt-1">
                A digital log and motivation tool to track progress on the 75 Hard mental toughness program.
              </p>
            </div>

            <div>
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-800">DietaFlex</h3>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">PAUSED</span>
              </div>
              <p className="text-gray-700 text-sm mt-1">
                A flexible diet management tool designed to help users balance macros and calories.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-8 pt-4 border-t text-center text-gray-500 text-xs">
          Last updated: June 2025 • Contact: paulo@psneves.com.br
        </footer>
      </div>
    </div>
  )
}
