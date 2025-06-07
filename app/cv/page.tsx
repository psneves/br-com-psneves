"use client"

import { useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.print()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const skills = [
    "Team Leadership",
    "Product Management",
    "Digital Transformation",
    "Information Security",
    "AI/ML Integration",
    "Web Development",
    "API Development",
    "Agile/Scrum",
    "JIRA",
    "Technology Strategy",
    "Vendor Management",
    "Budgeting & Forecasting",
  ]

  const personalProjects = [
    {
      name: "Meus Desafios",
      url: "meusdesafios.com.br",
      status: "LIVE",
      description: "A habit-building and goal-tracking platform with ranking, streak tracking, and community features.",
    },
    {
      name: "Papelando",
      url: "papelando.com.br",
      status: "LIVE",
      description: "A virtual stationery brand offering customized planners, notebooks, and journals.",
    },
    {
      name: "75 Hard Challenge",
      url: "75hard.com.br",
      status: "PAUSED",
      description: "A digital log and motivation tool to track progress on the 75 Hard mental toughness program.",
    },
    {
      name: "DietaFlex",
      url: "dietaflex.com.br",
      status: "PAUSED",
      description: "A flexible diet management tool designed to help users balance macros and calories.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-8 print:p-0 bg-white">
      <div className="mb-8 print:hidden">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowLeft size={16} />
          Back to website
        </Link>
        <p className="mt-2 text-gray-500 text-sm">
          The print dialog should open automatically. If it doesn't, please use your browser's print function (Ctrl/Cmd
          + P). For best results, enable "Background graphics" in your browser's print settings if available, and choose
          "Save as PDF".
        </p>
      </div>

      <div className="print:mx-0">
        <header className="mb-8 border-b pb-6 print:border-gray-300">
          <h1 className="text-3xl font-bold text-gray-900 print:text-2xl">Paulo Neves</h1>
          <p className="text-xl text-gray-600 mt-1 print:text-lg">IT Manager at Johnson & Johnson</p>

          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-4 text-sm text-gray-500 print:grid print:grid-cols-2 print:gap-x-4 print:gap-y-0 print:mt-3">
            <div>Jacareí-SP, Brazil</div>
            <a href="mailto:paulo@psneves.com.br" className="hover:text-blue-700 print:text-gray-600">
              paulo@psneves.com.br
            </a>
            <a
              href="https://linkedin.com/in/psneves"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 print:text-gray-600"
            >
              linkedin.com/in/psneves
            </a>
            <a
              href="https://github.com/psneves"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 print:text-gray-600"
            >
              github.com/psneves
            </a>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 print:text-lg">Summary</h2>
          <p className="text-gray-700 mb-2 print:text-sm">
            Experienced IT professional with 15+ years in technology leadership, specializing in digital transformation,
            team management, and product development.
          </p>
          <p className="text-gray-700 print:text-sm">
            Bachelor of Computer Science from Federal University of São Paulo with background as People Manager,
            Technical Product Owner, Service Specialist, Information Security Analyst, and Software Developer.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 print:text-lg">Experience</h2>

          <div className="mb-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900 print:text-base">Johnson & Johnson</h3>
                <p className="text-gray-600 text-sm print:text-xs">São José dos Campos-SP, Brazil</p>
              </div>
              <p className="text-gray-500 text-sm print:text-xs">2014 — Present</p>
            </div>

            <div className="mt-3 pl-4 border-l-2 border-gray-200 print:border-gray-300 print:pl-3">
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800 print:text-sm">IT Manager - Web and API Development</h4>
                  <p className="text-gray-500 text-sm print:text-xs">Apr 2023 — Present</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4">
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
                  <h4 className="font-medium text-gray-800 print:text-sm">IT Lead - Technical Product Owner</h4>
                  <p className="text-gray-500 text-sm print:text-xs">Sep 2020 — Mar 2023</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4">
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
                  <h4 className="font-medium text-gray-800 print:text-sm">Service Specialist - Digital & RPA</h4>
                  <p className="text-gray-500 text-sm print:text-xs">Feb 2019 — Aug 2020</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4">
                  <li>Architected RPA and digital transformation solutions ensuring compliance with standards</li>
                  <li>Coordinated proof-of-concept initiatives and managed development capacity</li>
                  <li>Established quality assurance frameworks and risk escalation protocols</li>
                  <li>Built strategic partnerships with regional and global IT stakeholders</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800 print:text-sm">Sr. Information Security Analyst</h4>
                  <p className="text-gray-500 text-sm print:text-xs">Apr 2018 — Feb 2019</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4">
                  <li>Served as primary information security liaison across Latin America</li>
                  <li>Conducted comprehensive security assessments during M&A integration</li>
                  <li>Evaluated and validated security controls ensuring compliance</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800 print:text-sm">Information Security Analyst</h4>
                  <p className="text-gray-500 text-sm print:text-xs">Jun 2015 — Mar 2018</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4">
                  <li>Orchestrated enterprise-wide security awareness programs</li>
                  <li>Performed application risk assessments and compliance analysis</li>
                  <li>Led SOX compliance testing for IT operations</li>
                  <li>Managed security incident response protocols</li>
                  <li>Streamlined security training processes, achieving 50% reduction in completion time</li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800 print:text-sm">Information Security Intern</h4>
                  <p className="text-gray-500 text-sm print:text-xs">Jan 2014 — Jun 2015</p>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4">
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
                <h3 className="font-semibold text-gray-900 print:text-base">Mentor Interativa</h3>
                <p className="text-gray-600 text-sm print:text-xs">São José dos Campos-SP, Brazil</p>
              </div>
              <p className="text-gray-500 text-sm print:text-xs">Dec 2011 — Nov 2013</p>
            </div>

            <div className="mt-3 pl-4 border-l-2 border-gray-200 print:border-gray-300 print:pl-3">
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800 print:text-sm">Software Developer</h4>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4">
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
                <h3 className="font-semibold text-gray-900 print:text-base">Stefanini</h3>
                <p className="text-gray-600 text-sm print:text-xs">Jaguariúna-SP, Brazil</p>
              </div>
              <p className="text-gray-500 text-sm print:text-xs">Jan 2011 — Dec 2011</p>
            </div>

            <div className="mt-3 pl-4 border-l-2 border-gray-200 print:border-gray-300 print:pl-3">
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800 print:text-sm">Junior Software Developer</h4>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc pl-5 space-y-1 print:text-xs print:pl-4">
                  <li>Led system migration initiatives from Delphi to Java</li>
                  <li>Engineered payment processing enhancements for credit card systems</li>
                  <li>Technologies: Java, C#, Struts, SQL Server, MySQL</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 print:text-lg">Education</h2>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 print:text-sm">Federal University of São Paulo</h3>
              <p className="text-gray-700 text-sm print:text-xs">Bachelor of Computer Science</p>
              <p className="text-gray-500 text-sm print:text-xs">2011 — 2015</p>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 print:text-sm">DeVry - Metrocamp</h3>
              <p className="text-gray-700 text-sm print:text-xs">Post-graduation, Information Security</p>
              <p className="text-gray-500 text-sm print:text-xs">2016 — 2018</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 print:text-lg">Certifications</h2>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 print:text-sm">CompTIA Security+</h3>
              <p className="text-gray-500 text-sm print:text-xs">2017 — 2020</p>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 print:text-sm">SAFe® 5 Agilist</h3>
              <p className="text-gray-500 text-sm print:text-xs">2020 — 2021</p>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 print:text-sm">Blue Prism Developer</h3>
              <p className="text-gray-500 text-sm print:text-xs">2020 — Present</p>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 print:text-lg">Languages</h2>
            <div className="space-y-2">
              <div className="flex justify-between print:justify-start print:gap-4">
                <span className="text-gray-700 print:text-sm">Portuguese</span>
                <span className="text-gray-600 print:text-sm">Native</span>
              </div>
              <div className="flex justify-between print:justify-start print:gap-4">
                <span className="text-gray-700 print:text-sm">English</span>
                <span className="text-gray-600 print:text-sm">Fluent</span>
              </div>
              <div className="flex justify-between print:justify-start print:gap-4">
                <span className="text-gray-700 print:text-sm">Spanish</span>
                <span className="text-gray-600 print:text-sm">Fluent</span>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 print:text-lg">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded print:text-xxs">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 print:text-lg">Personal Projects</h2>
          <div className="space-y-4">
            {personalProjects.map((project) => (
              <div key={project.name}>
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-800 print:text-sm">{project.name}</h3>
                  <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">
                    <span
                      className={`text-xs px-2 py-0.5 rounded
                                    ${project.status === "LIVE" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}
                    >
                      {project.status}
                    </span>
                  </a>
                </div>
                <p className="text-gray-700 text-sm mt-1 print:text-xs">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-8 pt-4 border-t text-center text-gray-500 text-xs print:text-xxs print:mt-5">
          Last updated: June 2025 • Contact: paulo@psneves.com.br
        </footer>
      </div>
    </div>
  )
}
