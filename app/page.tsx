import Image from "next/image"
import Link from "next/link"
import { Download, Linkedin, Mail, MapPin, Globe, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-200">
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

            <div className="flex gap-3">
              <Link
                href="/PauloNeves.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                <Download size={18} />
                Download CV
              </Link>
              <Link
                href="https://br.linkedin.com/in/psneves"
                target="_blank"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                <Linkedin size={18} />
                LinkedIn
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
            <section>
              <h2 className="text-2xl font-light text-black mb-6">About</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Experienced IT professional with 15+ years in technology leadership, specializing in digital
                  transformation, team management, and product development.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Bachelor of Computer Science from Federal University of São Paulo with background as People
                  Manager, Technical Product Owner, Service Specialist, Information Security Analyst, and Software
                  Developer.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Currently leading web and API development initiatives at Johnson & Johnson, focusing on strategic
                  technology direction and team development.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-light text-black mb-6">Experience</h2>

              <div className="space-y-8">
                <div className="border-l-2 border-gray-100 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded overflow-hidden bg-gray-100">
                        <Image
                          src="/images/logos/jj-logo.png"
                          alt="Johnson & Johnson"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <h3 className="text-xl font-medium text-black">Johnson & Johnson</h3>
                    </div>
                    <span className="text-sm text-gray-500 font-mono">2014 — Present</span>
                  </div>
                  <p className="text-gray-500 mb-4">São José dos Campos-SP, Brazil</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">IT Manager - Web and API Development</h4>
                      <p className="text-sm text-gray-500 mb-3 font-mono">Apr 2023 — Present</p>
                      <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                        <li>
                          • Lead talent acquisition and onboarding processes for digital product development teams
                        </li>
                        <li>
                          • Design comprehensive individual development plans and career progression pathways for
                          chapter members
                        </li>
                        <li>• Define strategic technology direction and establish professional training frameworks</li>
                        <li>
                          • Drive organizational capability enhancement through targeted training events and mentorship
                          programs
                        </li>
                        <li>• Serve as escalation point for resource allocation and performance management issues</li>
                        <li>
                          • Spearhead AI Agents initiative to automate software development and testing processes,
                          targeting significant reduction in development lead time
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">IT Lead - Technical Product Owner</h4>
                      <p className="text-sm text-gray-500 mb-3 font-mono">Sep 2020 — Mar 2023</p>
                      <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                        <li>
                          • Delivered end-to-end personalization, SSO integrations, web analytics, and search
                          capabilities for Janssen Pro LATAM
                        </li>
                        <li>
                          • Managed product backlog and sprint planning using JIRA, aligning development with OKR-driven
                          business objectives
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
                          • Conducted stakeholder reporting through OKR reviews and product demonstrations to executive
                          leadership
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Service Specialist - Digital & RPA</h4>
                      <p className="text-sm text-gray-500 mb-3 font-mono">Feb 2019 — Aug 2020</p>
                      <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                        <li>
                          • Architected RPA and digital transformation solutions ensuring compliance with enterprise
                          engineering standards
                        </li>
                        <li>
                          • Coordinated proof-of-concept initiatives and managed development capacity across regional
                          and global teams
                        </li>
                        <li>
                          • Established quality assurance frameworks, generating performance metrics and risk escalation
                          protocols
                        </li>
                        <li>
                          • Built strategic partnerships with regional and global IT stakeholders to drive digital
                          innovation
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Sr. Information Security Analyst</h4>
                      <p className="text-sm text-gray-500 mb-3 font-mono">Apr 2018 — Feb 2019</p>
                      <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                        <li>
                          • Served as primary information security liaison for J&J Corporate, Vision Care, and LifeScan
                          across Latin America
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

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Information Security Analyst</h4>
                      <p className="text-sm text-gray-500 mb-3 font-mono">Jun 2015 — Mar 2018</p>
                      <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
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
                          • Managed security incident response protocols for device theft/loss and coordinated physical
                          security assessments
                        </li>
                        <li>
                          • Streamlined security training processes, achieving 50% reduction in training completion time
                        </li>
                        <li>
                          • Mentored and supervised departmental interns in security operations and compliance
                          activities
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Information Security Intern</h4>
                      <p className="text-sm text-gray-500 mb-3 font-mono">Jan 2014 — Jun 2015</p>
                      <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                        <li>
                          • Managed vulnerability assessments and remediation for J&J Medical LATAM web applications
                        </li>
                        <li>
                          • Delivered security training to 800+ end-users, establishing foundational security awareness
                          programs
                        </li>
                        <li>
                          • Provided SDLC methodology guidance to IT development teams ensuring secure coding practices
                        </li>
                        <li>
                          • Administered JD Edwards change management processes maintaining compliance and audit trails
                        </li>
                        <li>• Developed and maintained IT policies and procedures for J&J Medical LATAM operations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-gray-100 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded overflow-hidden bg-gray-100">
                        <Image
                          src="/images/logos/mentor-logo.png"
                          alt="Mentor Interativa"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <h3 className="text-xl font-medium text-black">Mentor Interativa</h3>
                    </div>
                    <span className="text-sm text-gray-500 font-mono">2011 — 2013</span>
                  </div>
                  <p className="text-gray-500 mb-2">São José dos Campos-SP, Brazil</p>
                  <h4 className="font-medium text-gray-900 mb-3">Software Developer</h4>
                  <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                    <li>• Developed learning management system with social network integration</li>
                    <li>• Created and launched the company's first mobile application</li>
                    <li>• Technologies: Java, Google App Engine, SQL Server, PHP, MySQL, PhoneGap</li>
                  </ul>
                </div>

                <div className="border-l-2 border-gray-100 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded overflow-hidden bg-gray-100">
                        <Image
                          src="/images/logos/stefanini-logo.png"
                          alt="Stefanini"
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <h3 className="text-xl font-medium text-black">Stefanini</h3>
                    </div>
                    <span className="text-sm text-gray-500 font-mono">Jan 2011 — Dec 2011</span>
                  </div>
                  <p className="text-gray-500 mb-2">Jaguariúna-SP, Brazil</p>
                  <h4 className="font-medium text-gray-900 mb-3">Junior Software Developer</h4>
                  <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                    <li>
                      • Led system migration initiatives, successfully translating legacy Delphi applications to modern
                      Java architecture
                    </li>
                    <li>
                      • Engineered payment processing enhancements, implementing support for new credit card types in
                      financial transaction systems
                    </li>
                    <li>
                      • Utilized enterprise technologies including Java, C#, Struts framework, SQL Server, and MySQL for
                      full-stack development
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Personal Projects */}
            <section>
              <h2 className="text-2xl font-light text-black mb-6">Personal Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Papelando", url: "https://papelando.com.br" },
                  { name: "75 Hard Challenge", url: "https://75hard.com.br" },
                  { name: "DietaFlex", url: "https://dietaflex.com.br" },
                  { name: "Meus Desafios", url: "https://meusdesafios.com.br" },

                ].map((project) => (
                  <Link
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    className="group border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-900 transition-colors">
                        {project.name}
                      </h3>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-900 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Languages */}
            <section>
              <h3 className="text-lg font-medium text-black mb-4">Languages</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Portuguese</span>
                  <span className="text-sm text-gray-500">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">English</span>
                  <span className="text-sm text-gray-500">Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Spanish</span>
                  <span className="text-sm text-gray-500">Fluent</span>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-lg font-medium text-black mb-4">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900">Federal University of São Paulo</h4>
                  <p className="text-sm text-gray-600">Bachelor of Computer Science</p>
                  <p className="text-sm text-gray-500 font-mono">2011 — 2015</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">DeVry - Metrocamp</h4>
                  <p className="text-sm text-gray-600">Post-graduation, Information Security</p>
                  <p className="text-sm text-gray-500 font-mono">2016 — 2018</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-lg font-medium text-black mb-4">Certifications</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">CompTIA Security+</h4>
                  <p className="text-sm text-gray-500 font-mono">2017 — 2020</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">SAFe® 5 Agilist</h4>
                  <p className="text-sm text-gray-500 font-mono">2020 — 2021</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Blue Prism Developer</h4>
                  <p className="text-sm text-gray-500 font-mono">2020 — Present</p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-lg font-medium text-black mb-4">Core Skills</h3>
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
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-gray-500">
            Last updated June 2025 • Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
