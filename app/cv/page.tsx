import React from "react";
import { Mail, Linkedin, Github, Globe } from "lucide-react";

// Accent color (J&J Red)
const ACCENT = "#D52B1E";
// Expose as CSS variable so Tailwind can use it in arbitrary values
const ACCENT_VARS = { "--accent": ACCENT } as React.CSSProperties;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-700 border-b border-gray-200 pb-1 mb-2">{children}</h3>;
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 leading-relaxed">
      {/* larger, accent-colored bullet dot */}
      <span className="text-[18px] leading-[1] text-[var(--accent)]" aria-hidden>
        •
      </span>
      <span className="text-[13px]">{children}</span>
    </li>
  );
}

function Meta({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-gray-500">{children}</p>;
}

export default function CV() {
  return (
    <div className="min-h-screen w-full bg-neutral-50 py-8 print:bg-white" style={ACCENT_VARS}>
      {/* PAGE 1 */}
      <div className="mx-auto bg-white shadow-sm rounded-2xl p-8 print:shadow-none print:rounded-none" style={{ width: "210mm", maxWidth: "calc(100vw - 2rem)" }}>
        {/* Header */}
        <header className="mb-3">
          <div className="space-y-0.5">
            <p className="text-4xl font-bold text-[#D52B1E]">Paulo Neves</p>
            <p className="text-base text-gray-800">Full Stack Engineering Manager | People Leader</p>
            <Meta>Jacareí-SP, Brazil</Meta>
          </div>
        </header>

        {/* Two-column grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT COLUMN */}
          <aside className="col-span-12 md:col-span-4">
            <SectionTitle>Languages</SectionTitle>
            <ul className="space-y-1 text-[13px]">
              <li>Portuguese — Native</li>
              <li>English — Fluent</li>
              <li>Spanish — Fluent</li>
            </ul>

            <div className="h-4" />
            <SectionTitle>Professional Summary</SectionTitle>
            <p className="text-[13px] leading-relaxed text-gray-800">
              Technology leader with 15+ years delivering secure, scalable web/API platforms at enterprise scale. Combines hands-on Full Stack engineering with solution architecture, product/platform strategy, and stakeholder management. Leads an
              engineering chapter and AI initiatives that accelerate SDLC with generative/agentic approaches while coaching senior engineers and raising technical standards.
            </p>

            <div className="h-4" />
            <SectionTitle>Core Competencies</SectionTitle>
            <ul className="space-y-1 text-[13px]">
              <li>Full Stack (React/Next.js/Node/Python)</li>
              <li>API Platforms & Integration</li>
              <li>Cloud (AWS/GCP/Azure)</li>
              <li>Generative & Agentic AI</li>
              <li>Architecture & Patterns</li>
              <li>Kubernetes & Docker</li>
              <li>DevSecOps & CI/CD</li>
              <li>Observability & Reliability</li>
              <li>Security</li>
              <li>Privacy & Compliance</li>
              <li>Product & Platform Strategy</li>
              <li>Roadmapping & OKRs</li>
              <li>Stakeholder Management</li>
              <li>People Leadership</li>
              <li>Vendor & Budget Management</li>
            </ul>
          </aside>

          {/* RIGHT COLUMN */}
          <main className="col-span-12 md:col-span-8">
            <SectionTitle>Experience</SectionTitle>

            {/* J&J – IT Manager */}
            <div className="mb-4 space-y-0.5">
              <p className="font-semibold text-[14px]">IT Manager <small>— Full Stack Chapter Lead — Johnson & Johnson Technology Services</small></p>
              <Meta>São José dos Campos-SP, Brazil · Sep 2023 — Present</Meta>
              <ul className="mt-1 space-y-1">
                <BulletItem>Elevate capabilities in DevSecOps, CI/CD, observability and service reliability through chapter programs</BulletItem>
                <BulletItem>Lead KODA (Key Operations & Development Assistants) initiative to accelerate SDLC with AI</BulletItem>
                <BulletItem>Guide 15 Full Stack parallel initiatives; technical reference and/or budget management</BulletItem>
                <BulletItem>Govern vendor strategy and capacity; optimize partner tiers, SLAs and delivery outcomes</BulletItem>
                <BulletItem>Oversee environment strategy, security baselines and cost/usage governance</BulletItem>
              </ul>
            </div>

            {/* J&J – IT Lead Chapter Lead */}
            <div className="mb-4 space-y-0.5">
              <p className="font-semibold text-[14px]">IT Lead <small>— Full Stack Chapter Lead — Johnson & Johnson</small></p>
              <Meta>São José dos Campos-SP, Brazil · Apr 2023 — Oct 2023</Meta>
              <ul className="mt-1 space-y-1">
                <BulletItem>Interviewed/onboarded engineers; set strategic direction for chapter technologies and training</BulletItem>
                <BulletItem>Created individual development plans and career pathways; mentored senior engineers</BulletItem>
                <BulletItem>Led training events to strengthen regional engineering capabilities</BulletItem>
              </ul>
            </div>

            {/* J&J – TPO */}
            <div className="mb-4 space-y-0.5">
              <p className="font-semibold text-[14px]">IT Lead <small>— Technical Product Owner — Johnson & Johnson Innovative Medicine</small></p>
              <Meta>São José dos Campos-SP, Brazil · Sep 2020 — Mar 2023</Meta>
              <ul className="mt-1 space-y-1">
                <BulletItem>Owned roadmap and delivery for personalization, SSO (OIDC/SAML), analytics and search</BulletItem>
                <BulletItem>Defined API contracts and NFRs; improved reliability, performance and observability</BulletItem>
                <BulletItem>Established OKRs/KPIs; led demos and executive readouts across markets</BulletItem>
                <BulletItem>Drove vendor and internal squads through Agile delivery with audited compliance</BulletItem>
              </ul>
            </div>

            {/* J&J – Service Specialist */}
            <div className="mb-4 space-y-0.5">
              <p className="font-semibold text-[14px]">Service Specialist <small>— Johnson & Johnson - Technology Services</small></p>
              <Meta>São José dos Campos-SP, Brazil · Feb 2019 — Aug 2020</Meta>
              <ul className="mt-1 space-y-1">
                <BulletItem>Architected RPA solutions and platform governance aligned to enterprise standards</BulletItem>
                <BulletItem>Scaled successful PoCs, quantified ROI and established delivery/QA metrics</BulletItem>
              </ul>
            </div>
          </main>
        </div>
      </div>

      {/* PAGE 2 */}
      <div className="mx-auto bg-white shadow-sm rounded-2xl p-8 mt-8 print:shadow-none print:rounded-none" style={{ width: "210mm", maxWidth: "calc(100vw - 2rem)" }}>
        {/* Experience continued */}
        <SectionTitle>Experience (continued)</SectionTitle>
        {/* Sr Sec Analyst */}
        <div className="mb-4">
          <p className="font-semibold text-[14px]">Sr. Information Security Analyst — Johnson & Johnson — Information Security & Risk Management</p>
          <Meta>São José dos Campos-SP, Brazil · Apr 2018 — Feb 2019</Meta>
          <ul className="mt-1 space-y-1">
            <BulletItem>Security liaison for Corporate, Vision Care and LifeScan across LATAM</BulletItem>
            <BulletItem>Led app-security assessments during M&A due diligence and integrations</BulletItem>
          </ul>
        </div>

        {/* Info Sec Analyst */}
        <div className="mb-4">
          <p className="font-semibold text-[14px]">Information Security Analyst — Johnson & Johnson</p>
          <Meta>São José dos Campos-SP, Brazil · Jun 2015 — Mar 2018</Meta>
          <ul className="mt-1 space-y-1">
            <BulletItem>Drove enterprise security awareness programs; performed risk and compliance reviews</BulletItem>
            <BulletItem>Led SOX testing; coordinated incident response for device loss/theft</BulletItem>
          </ul>
        </div>

        {/* Intern */}
        <div className="mb-4">
          <p className="font-semibold text-[14px]">Information Security Intern — Johnson & Johnson</p>
          <Meta>São José dos Campos-SP, Brazil · Jan 2014 — Jun 2015</Meta>
          <ul className="mt-1 space-y-1">
            <BulletItem>Supported vulnerability remediation for LATAM web apps; delivered training to 800+ users</BulletItem>
            <BulletItem>Guided SDLC adoption and secure coding best practices</BulletItem>
          </ul>
        </div>

        {/* Earlier Experience with details */}
        <SectionTitle>Earlier Experience</SectionTitle>
        <div className="mb-3 space-y-0.5">
          <p className="font-semibold text-[14px]">Software Developer — Mentor Interativa</p>
          <Meta>São José dos Campos-SP · Dec 2011 — Nov 2013</Meta>
          <ul className="mt-1 space-y-1">
            <BulletItem>Developed a learning management system with social network integration</BulletItem>
            <BulletItem>Idealized and implemented the company's first mobile application</BulletItem>
            <BulletItem>Stack: Java, Google App Engine, SQL Server, PHP, MySQL, PhoneGap</BulletItem>
          </ul>
        </div>
        <div className="mb-3 space-y-0.5">
          <p className="font-semibold text-[14px]">Junior Software Developer — Stefanini</p>
          <Meta>Jaguariúna-SP · Jan 2011 — Dec 2011</Meta>
          <ul className="mt-1 space-y-1">
            <BulletItem>Translated legacy Delphi applications to Java; enhanced payment processing for new card types</BulletItem>
            <BulletItem>Stack: Java, C#, Struts, SQL Server, MySQL</BulletItem>
          </ul>
        </div>
        <div className="mb-3 space-y-0.5">
          <p className="font-semibold text-[14px]">Intern (Java) — FAJTec – Faculdade Jaguariúna</p>
          <Meta>Jaguariúna-SP · Jan 2010 — Jul 2010</Meta>
          <ul className="mt-1 space-y-1">
            <BulletItem>Supported "Introduction to Programming in Java" course: tutoring, test creation and grading</BulletItem>
          </ul>
        </div>
        <div className="mb-6 space-y-0.5">
          <p className="font-semibold text-[14px]">Instructor — Data Computadores</p>
          <Meta>Jaguariúna-SP · May 2008 — Sep 2009</Meta>
          <ul className="mt-1 space-y-1">
            <BulletItem>Taught computer literacy: Windows basics and Microsoft Office for individuals and small groups</BulletItem>
          </ul>
        </div>

        {/* Education */}
        <SectionTitle>Education</SectionTitle>
        <ul className="space-y-1">
          <BulletItem>
            <span className="font-semibold">Federal University of São Paulo (UNIFESP)</span> — Bacharel in Computer Science (2011 — 2015)
          </BulletItem>
          <BulletItem>
            <span className="font-semibold">DeVry – Metrocamp</span> — Post-graduate, Information Security Management (2016 — 2018)
          </BulletItem>
        </ul>

        {/* Certifications */}
        <div className="h-4" />
        <SectionTitle>Certifications</SectionTitle>
        <ul className="space-y-1">
          <BulletItem>
            <a href="https://www.credly.com/badges/17833853-d263-4c5d-8910-5ba917c0035a" target="_blank" rel="noreferrer noopener" className="text-[13px] underline text-[var(--accent)]">
              CompTIA Security+ (2017 — 2020)
            </a>
          </BulletItem>
          <BulletItem>
            <a href="https://www.credly.com/badges/6edbb4e1-608a-404e-8185-114e3820f7cf" target="_blank" rel="noreferrer noopener" className="text-[13px] underline text-[var(--accent)]">
              SAFe® 5 Agilist (2020 — 2021)
            </a>
          </BulletItem>
          <BulletItem>
            <a href="https://www.credly.com/badges/92b24cf6-5666-4e22-85c3-4b5b699d7698" target="_blank" rel="noreferrer noopener" className="text-[13px] underline text-[var(--accent)]">
              Blue Prism Developer (2020 — Present)
            </a>
          </BulletItem>
        </ul>

        {/* Links (only here) */}
        <div className="h-4" />
        <SectionTitle>Links</SectionTitle>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          <a href="mailto:paulo@psneves.com.br" className="inline-flex items-center gap-1 underline text-[var(--accent)]">
            <Mail size={14} /> paulo@psneves.com.br
          </a>
          <a href="https://br.linkedin.com/in/psneves" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 underline text-[var(--accent)]">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href="https://github.com/psneves" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 underline text-[var(--accent)]">
            <Github size={14} /> GitHub
          </a>
          <a href="https://psneves.com.br" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 underline text-[var(--accent)]">
            <Globe size={14} /> psneves.com.br
          </a>
        </div>
      </div>
    </div>
  );
}
