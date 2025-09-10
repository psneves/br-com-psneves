import React from "react";
import { Mail, Linkedin, Github, Globe, MapPin, Calendar, Award, Users, Code, Shield, Briefcase, GraduationCap, Languages } from "lucide-react";

// Accent color (Modern Professional)
const ACCENT = "#2563eb";
// Expose as CSS variable so Tailwind can use it in arbitrary values
const ACCENT_VARS = { "--accent": ACCENT } as React.CSSProperties;

function SectionTitle({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      {icon && <span className="text-[var(--accent)]">{icon}</span>}
      <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-800 flex-1">{children}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-[var(--accent)] to-transparent"></div>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 leading-relaxed group">
      <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" aria-hidden></span>
      <span className="text-[13px] text-gray-700">{children}</span>
    </li>
  );
}

function Meta({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-gray-500">{children}</p>;
}

export default function CV() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-blue-50 py-6 print:bg-white print:py-0" style={ACCENT_VARS}>
      {/* SINGLE PAGE CV */}
      <div className="mx-auto bg-white shadow-lg rounded-2xl print:shadow-none print:rounded-none overflow-hidden" style={{ width: "210mm", maxWidth: "calc(100vw - 2rem)" }}>
        {/* Header */}
        <header className="mb-6 relative">
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-t-lg border-l-4 border-[var(--accent)]">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Paulo Neves</h1>
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--accent)] to-blue-400 rounded-full mt-2"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 font-medium">Full Stack Engineering Manager | People Leader</p>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin size={14} />
                <span className="text-sm">Jacareí-SP, Brazil</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-6 pb-6">
          {/* Two-column grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* LEFT COLUMN */}
            <aside className="col-span-12 md:col-span-4 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <SectionTitle icon={<Languages size={16} />}>Languages</SectionTitle>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-700">Portuguese</span>
                    <span className="text-[11px] font-medium text-[var(--accent)]">Native</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-700">English</span>
                    <span className="text-[11px] font-medium text-[var(--accent)]">Fluent</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-gray-700">Spanish</span>
                    <span className="text-[11px] font-medium text-[var(--accent)]">Fluent</span>
                  </div>
                </div>
              </div>

              <div>
                <SectionTitle icon={<Users size={16} />}>Professional Summary</SectionTitle>
                <p className="text-[12px] leading-snug text-gray-800">
                  Technology leader with <strong>15+ years</strong> delivering secure, scalable web/API platforms at enterprise scale. Combines hands-on Full Stack engineering with solution architecture, product/platform strategy, and stakeholder
                  management. Leads engineering chapter and AI initiatives that accelerate SDLC while coaching senior engineers.
                </p>
              </div>

              <div>
                <SectionTitle icon={<Code size={16} />}>Core Competencies</SectionTitle>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                      <Briefcase size={12} /> Technical Leadership
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {["Full Stack", "API Platforms", "Cloud (AWS/GCP/Azure)", "Artificial Intelligence", "Architecture"].map((skill) => (
                        <span key={skill} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                      <Code size={12} /> Engineering
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {["React", "Next.js", "NodeJS", "Python", "Kubernetes", "Docker", "DevSecOps", "CI/CD", "Robot Framework", "Playwright"].map((skill) => (
                        <span key={skill} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 mb-1 flex items-center gap-1">
                      <Users size={12} /> Management
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {["Product Strategy", "Roadmapping", "OKRs", "People Leadership", "Chapter Lead", "Vendor Management"].map((skill) => (
                        <span key={skill} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN */}
            <main className="col-span-12 md:col-span-8">
              <SectionTitle icon={<Briefcase size={16} />}>Experience (Last 5 years)</SectionTitle>

              {/* J&J – IT Manager */}
              <div className="mb-4 border-l-4 border-blue-500 pl-4 bg-gradient-to-r from-blue-50/30 to-transparent p-3 rounded-r-lg">
                <div className="flex space-y-0 items-start justify-between mb-2">
                  <div className="space-y-0">
                    <h3 className="font-bold text-[14px] text-gray-900">IT Manager</h3>
                    <p className="text-[12px] text-blue-700 font-medium">Full Stack Chapter Lead — Johnson & Johnson Technology Services</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Current</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2 text-xs">
                  <Calendar size={10} />
                  <span>Sep 2023 — Present</span>
                  <span className="text-gray-400">•</span>
                  <span>São José dos Campos-SP</span>
                </div>
                <ul className="space-y-1">
                  <BulletItem>Elevate capabilities in DevSecOps, CI/CD, observability and service reliability through chapter programs</BulletItem>
                  <BulletItem>Lead KODA (Key Operations & Development Assistants) initiative to accelerate SDLC with AI</BulletItem>
                  <BulletItem>Guide 15 Full Stack parallel initiatives; technical reference and/or budget management</BulletItem>
                  <BulletItem>Govern vendor strategy and capacity; optimize partner tiers, SLAs and delivery outcomes</BulletItem>
                </ul>
              </div>

              {/* J&J – IT Lead Chapter Lead */}
              <div className="mb-4 border-l-4 border-blue-400 pl-4 bg-gradient-to-r from-blue-50/20 to-transparent p-3 rounded-r-lg">
                <div className="mb-2 space-y-0">
                  <h3 className="font-bold text-[14px] text-gray-900">IT Lead</h3>
                  <p className="text-[12px] text-blue-700 font-medium">Full Stack Chapter Lead — Johnson & Johnson</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2 text-xs">
                  <Calendar size={10} />
                  <span>Apr 2023 — Oct 2023</span>
                </div>
                <ul className="space-y-1">
                  <BulletItem>Interviewed/onboarded engineers; set strategic direction for chapter technologies and training</BulletItem>
                  <BulletItem>Created individual development plans and career pathways; mentored senior engineers</BulletItem>
                  <BulletItem>Led training events to strengthen regional engineering capabilities</BulletItem>
                </ul>
              </div>

              {/* J&J – TPO */}
              <div className="mb-4 border-l-4 border-blue-500 pl-4 bg-gradient-to-r from-blue-50/20 to-transparent p-3 rounded-r-lg">
                <div className="mb-2 space-y-0">
                  <h3 className="font-bold text-[14px] text-gray-900">IT Lead</h3>
                  <p className="text-[12px] text-blue-700 font-medium">Technical Product Owner — Johnson & Johnson Innovative Medicine</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-2 text-xs">
                  <Calendar size={10} />
                  <span>Sep 2020 — Mar 2023</span>
                </div>
                <ul className="space-y-1">
                  <BulletItem>Owned roadmap and delivery for personalization, SSO (OIDC/SAML), analytics and search</BulletItem>
                  <BulletItem>Defined API contracts and NFRs; improved reliability, performance and observability</BulletItem>
                  <BulletItem>Established OKRs/KPIs; led demos and executive readouts across markets</BulletItem>
                  <BulletItem>Drove vendor and internal squads through Agile delivery with audited compliance</BulletItem>
                </ul>
              </div>
            </main>
            <main className="col-span-12">
              <SectionTitle icon={<Briefcase size={16} />}>Experience (cont.)</SectionTitle>

              {/* Recent J&J Roles - Condensed */}
              <div className="mb-4 space-y-0">
                <div className="border-l-4 border-gray-400 pl-3 bg-gradient-to-r from-gray-50/20 to-transparent space-y-0 p-2 rounded-r-lg">
                  <h3 className="font-bold text-[13px] text-gray-900">Service Specialist</h3>
                  <p className="text-[11px] text-gray-700 font-medium">Johnson & Johnson - Technology Services (Feb 2019 — Aug 2020)</p>
                  <ul className="mt-1 space-y-0.5">
                    <BulletItem>Architected RPA solutions and platform governance aligned to enterprise standards</BulletItem>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-3 bg-gradient-to-r from-gray-50/20 to-transparent space-y-0 p-2 rounded-r-lg">
                  <h3 className="font-bold text-[13px] text-gray-900">Sr. Information Security Analyst</h3>
                  <p className="text-[11px] text-gray-700 font-medium">Johnson & Johnson (Apr 2018 — Feb 2019)</p>
                  <ul className="mt-1 space-y-0.5">
                    <BulletItem>Security liaison for Corporate, Vision Care and LifeScan across LATAM</BulletItem>
                    <BulletItem>Led app-security assessments during M&A due diligence and integrations</BulletItem>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-3 bg-gradient-to-r from-gray-50/20 to-transparent space-y-0 p-2 rounded-r-lg">
                  <h3 className="font-bold text-[13px] text-gray-900">Information Security Analyst</h3>
                  <p className="text-[11px] text-gray-700 font-medium">Johnson & Johnson (Jun 2015 — Mar 2018)</p>
                  <ul className="mt-1 space-y-0.5">
                    <BulletItem>Drove enterprise security awareness programs; performed risk and compliance reviews</BulletItem>
                  </ul>
                </div>

                {/* Earlier Experience */}

                <div className="border-l-4 border-gray-400 pl-3 bg-gradient-to-r from-gray-50/20 to-transparent space-y-0 p-2 rounded-r-lg">
                  <h3 className="font-bold text-[13px] text-gray-900">Information Security Intern</h3>
                  <p className="text-[11px] text-gray-700 font-medium">Johnson & Johnson (2014 — 2015)</p>
                  <ul className="mt-1 space-y-0.5">
                    <BulletItem>Supported vulnerability assessment and remediation for J&J Medical LATAM web applications</BulletItem>
                    <BulletItem>Delivered security training to 800+ end-users and established foundational awareness programs</BulletItem>
                    <BulletItem>Guided SDLC methodology adoption and secure coding practices for development teams</BulletItem>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-3 bg-gradient-to-r from-gray-50/20 to-transparent space-y-0 p-2 rounded-r-lg">
                  <h3 className="font-bold text-[13px] text-gray-900">Software Developer</h3>
                  <p className="text-[11px] text-gray-700 font-medium">Mentor Interativa (2011 — 2013)</p>
                  <ul className="mt-1 space-y-0.5">
                    <BulletItem>Developed learning management system with social network integration</BulletItem>
                    <BulletItem>Created and launched the company's first mobile application</BulletItem>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-3 bg-gradient-to-r from-gray-50/20 to-transparent space-y-0 p-2 rounded-r-lg">
                  <h3 className="font-bold text-[13px] text-gray-900">Jr. Developer</h3>
                  <p className="text-[11px] text-gray-700 font-medium">Stefanini (2010 — 2011)</p>
                  <ul className="mt-1 space-y-0.5">
                    <BulletItem>Led system migration initiatives, successfully translating legacy Delphi applications to modern Java architecture</BulletItem>
                    <BulletItem>Engineered payment processing enhancements, implementing support for new credit card types in financial transaction systems</BulletItem>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-3 bg-gradient-to-r from-gray-50/20 to-transparent space-y-0 p-2 rounded-r-lg">
                  <h3 className="font-bold text-[13px] text-gray-900">Java Intern</h3>
                  <p className="text-[11px] text-gray-700 font-medium">FAJTec (2010 — 2011)</p>
                  <ul className="mt-1 space-y-0.5">
                    <BulletItem>Helped students of the course Introduction to Programming in Java to understand the course content</BulletItem>
                    <BulletItem>Created and applied tests for the students</BulletItem>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-3 bg-gradient-to-r from-gray-50/20 to-transparent space-y-0 p-2 rounded-r-lg">
                  <h3 className="font-bold text-[13px] text-gray-900">Instructor</h3>
                  <p className="text-[11px] text-gray-700 font-medium">Data Computadores (2008 — 2009)</p>
                  <ul className="mt-1 space-y-0.5">
                    <BulletItem>Taught students how to use computer, change Windows basic configurations and operate Microsoft Office applications</BulletItem>
                    <BulletItem>Provided personalized computer training for individuals and small groups</BulletItem>
                  </ul>
                </div>
              </div>
            </main>
          </div>

          {/* Bottom sections in full width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {/* Education */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <SectionTitle icon={<GraduationCap size={16} />}>Education</SectionTitle>
              <div className="space-y-2">
                <div className="bg-white p-2 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold text-[12px] text-gray-900">Federal University of São Paulo</h4>
                  <p className="text-[10px] text-blue-700">Computer Science • Bachelor's Degree</p>
                  <p className="text-[9px] text-gray-500">2011 — 2015</p>
                </div>
                <div className="bg-white p-2 rounded border-l-4 border-blue-400">
                  <h4 className="font-semibold text-[12px] text-gray-900">DeVry – Metrocamp</h4>
                  <p className="text-[10px] text-blue-700">Information Security Management • Post-graduate</p>
                  <p className="text-[9px] text-gray-500">2016 — 2018</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
              <SectionTitle icon={<Award size={16} />}>Certifications</SectionTitle>
              <div className="space-y-2">
                <div className="bg-white p-2 rounded border-l-4 border-green-500">
                  <a href="https://www.credly.com/badges/17833853-d263-4c5d-8910-5ba917c0035a" target="_blank" rel="noreferrer noopener" className="text-[11px] font-medium text-green-700 hover:text-green-800">
                    CompTIA Security+
                  </a>
                  <p className="text-[9px] text-gray-500">2017 — 2020</p>
                </div>
                <div className="bg-white p-2 rounded border-l-4 border-orange-500">
                  <a href="https://www.credly.com/badges/6edbb4e1-608a-404e-8185-114e3820f7cf" target="_blank" rel="noreferrer noopener" className="text-[11px] font-medium text-orange-700 hover:text-orange-800">
                    SAFe® 5 Agilist
                  </a>
                  <p className="text-[9px] text-gray-500">2020 — 2021</p>
                </div>
                <div className="bg-white p-2 rounded border-l-4 border-blue-500">
                  <a href="https://www.credly.com/badges/92b24cf6-5666-4e22-85c3-4b5b699d7698" target="_blank" rel="noreferrer noopener" className="text-[11px] font-medium text-blue-700 hover:text-blue-800">
                    Blue Prism Developer
                  </a>
                  <p className="text-[9px] text-gray-500">2020 — Present</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-4 rounded-lg border border-gray-200">
              <SectionTitle icon={<Mail size={16} />}>Contact</SectionTitle>
              <div className="space-y-2">
                <a href="mailto:paulo@psneves.com.br" className="flex items-center gap-2 text-[11px] text-gray-700 hover:text-blue-600 bg-white p-2 rounded border-l-4 border-red-400">
                  <Mail size={12} />
                  paulo@psneves.com.br
                </a>
                <a href="https://br.linkedin.com/in/psneves" target="_blank" rel="noreferrer noopener" className="flex items-center gap-2 text-[11px] text-gray-700 hover:text-blue-600 bg-white p-2 rounded border-l-4 border-blue-400">
                  <Linkedin size={12} />
                  LinkedIn Profile
                </a>
                <a href="https://github.com/psneves" target="_blank" rel="noreferrer noopener" className="flex items-center gap-2 text-[11px] text-gray-700 hover:text-gray-900 bg-white p-2 rounded border-l-4 border-gray-400">
                  <Github size={12} />
                  GitHub Portfolio
                </a>
                <a href="https://psneves.com.br" target="_blank" rel="noreferrer noopener" className="flex items-center gap-2 text-[11px] text-gray-700 hover:text-green-600 bg-white p-2 rounded border-l-4 border-green-400">
                  <Globe size={12} />
                  Personal Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
