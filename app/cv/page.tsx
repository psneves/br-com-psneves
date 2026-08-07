"use client";

import React from "react";
import { Mail, Linkedin, Github, Globe, MapPin, Download, Calendar, Briefcase, GraduationCap, Award, Users, Code, Languages as LanguagesIcon, Phone, ArrowLeft, Smartphone } from "lucide-react";
import { profile, summary, experiences, earlierExperience, skillGroups, languages, education, certifications } from "@/lib/data/profile";

const [johnsonAndJohnson, meusDesafios] = experiences;
/** Page 1 carries roughly the last five years; page 2 carries the rest. */
const RECENT_JJ_ROLES = johnsonAndJohnson.roles.slice(0, 3);
const EARLIER_JJ_ROLES = johnsonAndJohnson.roles.slice(3);

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function Section({ title, icon, children, className = "" }: SectionProps) {
  return (
    <section className={`mb-4 cv-section ${className}`}>
      <header className="flex items-baseline gap-2 mb-2">
        <span className="text-blue-600 icon-align shrink-0" aria-hidden="true">
          {icon}
        </span>
        <h2 className="text-lg font-semibold text-gray-900 uppercase tracking-wide leading-none section-header">{title}</h2>
      </header>
      <div>{children}</div>
    </section>
  );
}

/** Company header. Roles nest underneath so a long tenure reads as one employer. */
function EmployerHeader({ company, context, location, period, url }: { company: string; context?: string; location: string; period: string; url?: string }) {
  // Stacks below sm so the company name does not wrap mid-word on a 390px
  // screen. Print renders at 703px, so it is always the row form.
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 border-b border-gray-200 pb-1 mb-2 employer-header">
      <div className="flex items-baseline gap-2 flex-wrap">
        <h3 className="font-bold text-gray-900 text-base cv-company">{company}</h3>
        {context && <span className="text-gray-600 cv-meta">· {context}</span>}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 cv-meta hover:underline">
            {url.replace("https://", "")}
          </a>
        )}
      </div>
      <div className="flex items-center gap-3 text-gray-600 cv-meta shrink-0">
        <span className="flex items-center gap-1">
          <MapPin size={10} aria-hidden="true" />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={10} aria-hidden="true" />
          {period}
        </span>
      </div>
    </div>
  );
}

function RoleBlock({ title, internalTitle, period, bullets }: { title: string; internalTitle?: string; period?: string; bullets: string[] }) {
  return (
    <article className="mb-3 cv-role">
      <header className="flex items-baseline justify-between gap-3">
        <p className="text-blue-600 font-semibold cv-role-title">
          {title}
          {internalTitle && <span className="text-gray-500 font-normal"> (internal title: {internalTitle})</span>}
        </p>
        {period && <span className="text-gray-600 cv-meta shrink-0">{period}</span>}
      </header>
      <ul className="text-gray-700 mt-1">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 cv-bullet">
            <span className="text-blue-600 flex-shrink-0" aria-hidden="true">
              •
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function SkillGroupBlock({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="mb-3">
      <h3 className="font-semibold text-gray-900 cv-role-title mb-1">{title}</h3>
      <div className="flex flex-wrap gap-1">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-100 text-gray-700 px-2 py-1 rounded border print:border-gray-300 skill-tag">
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
      <style>{`
        @page {
          size: A4;
          margin: 12mm;
        }

        /* app/globals.css applies typographic base styles to bare elements
           (ul { my-6 ml-6 list-disc [&>li]:mt-2 }, p { mt-6 }, h2 { border-b
           pb-2 }). They are right for prose and wrong for a density-critical
           CV, so neutralize them inside .cv-page and control spacing here. */
        .cv-page h1, .cv-page h2, .cv-page h3 { margin: 0; scroll-margin: 0; }
        .cv-page h2 { border-bottom: 0; padding-bottom: 0; }
        .cv-page p, .cv-page p:not(:first-child) { margin: 0; line-height: inherit; }
        .cv-page ul { margin: 0; padding: 0; list-style: none; }
        .cv-page ul > li { margin-top: 0; }

        /* Semantic sizing, shared by screen and print.
           NOTE: do not reintroduce Tailwind "print:" variants inside this
           template literal — "\\:" collapses to ":" and the browser drops the
           rule as an invalid selector. Plain class names only. */
        .cv-page .cv-meta { font-size: 10px; line-height: 1.35; }
        .cv-page .cv-bullet { font-size: 11px; line-height: 1.4; }
        .cv-page .cv-role-title { font-size: 12px; line-height: 1.35; }
        .cv-page .cv-company { font-size: 14px; line-height: 1.3; }
        .cv-page .cv-summary { font-size: 11px; line-height: 1.5; }
        .cv-page .section-header { font-size: 13px; }
        .cv-page .skill-tag { font-size: 10px; padding: 0.1rem 0.35rem; }

        @media print {
          body { font-size: 11px; }

          .cv-name-text {
            color: #1f2937 !important;
            -webkit-text-fill-color: #1f2937 !important;
          }

          /* Content that outgrows the page must spill onto a visible extra
             page rather than be silently clipped. No max-height, no overflow
             hidden — a regression has to be seen to be fixed. */
          .cv-page {
            break-after: page;
            page-break-after: always;
          }
          .cv-page:last-of-type {
            break-after: auto;
            page-break-after: auto;
          }

          .cv-section, .cv-role, .employer-header {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .print-hidden { display: none !important; }

          /* Left-aligned and unhyphenated on purpose: justified text with
             hyphens: auto injects real hyphen characters into the PDF text
             layer, so an ATS reads "ar-chitecture" and misses the keyword. */
          .cv-page p, .cv-page li span:last-child {
            text-align: left !important;
            -webkit-hyphens: none !important;
            hyphens: none !important;
          }

          .text-blue-600 { color: #1e40af !important; }
          .border-blue-600 { border-color: #1e40af !important; }
        }

        .icon-align {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .icon-align svg { display: block; }

        @media screen {
          .cv-page {
            background: white;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            margin: 2rem auto;
            max-width: 8.27in;
            min-height: 11.69in;
          }
          .cv-page .text-blue-600 { color: #1e40af; }
          .cv-page .border-blue-600 { border-color: #1e40af; }
        }
      `}</style>

      {/* Screen-only actions */}
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

      {/* ---------------------------------------------------------------- */}
      {/* Page 1 — the only page that decides anything                      */}
      {/* ---------------------------------------------------------------- */}
      <div className="cv-page bg-white">
        <div className="p-8 print:p-0">
          <header className="mb-4">
            <div className="text-center w-full border-b-2 border-blue-600 pb-3">
              <h1 className="text-3xl font-bold mb-1 cv-name-text" style={{ color: "#1f2937" }}>
                {profile.name}
              </h1>
              <p className="text-blue-600 font-medium mb-2" style={{ fontSize: "15px" }}>
                {profile.title}
              </p>

              {/* Email and phone first, plain text — parsers look here first. */}
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-1 text-gray-700 cv-meta">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Mail size={11} aria-hidden="true" />
                  {profile.email}
                </a>
                <a href={`tel:${profile.phoneHref}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Phone size={11} aria-hidden="true" />
                  {profile.phone}
                </a>
                <span className="flex items-center gap-1">
                  <MapPin size={11} aria-hidden="true" />
                  {profile.location} · {profile.availability}
                </span>
              </div>

              {/* Full URLs, not @handles — parsers match URL patterns. */}
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-1 text-gray-600 cv-meta mt-1">
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Linkedin size={11} aria-hidden="true" />
                  {profile.linkedin}
                </a>
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Github size={11} aria-hidden="true" />
                  {profile.github}
                </a>
                <a href={profile.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  <Globe size={11} aria-hidden="true" />
                  {profile.website}
                </a>
              </div>
            </div>
          </header>

          <Section title="Summary" icon={<Users size={14} />}>
            <p className="text-gray-700 cv-summary">{summary.cv}</p>
          </Section>

          {/* The AI-assisted practice is folded into the two current roles
              rather than standing alone: on a 2-page CV it competes with the
              experience it is supposed to be evidence for. The homepage keeps
              the dedicated section, where there is no page budget. */}
          <Section title="Professional Experience" icon={<Briefcase size={14} />}>
            <EmployerHeader company={johnsonAndJohnson.company} location={johnsonAndJohnson.location} period={johnsonAndJohnson.period} />
            {/* The internal title ("IT Manager — Full Stack Chapter Lead") is
                shown on the homepage but kept off the print CV: "IT Manager"
                reads as internal back-office at a product company and undoes
                the positioning the rest of the page is doing. */}
            {RECENT_JJ_ROLES.map((role) => (
              <RoleBlock key={role.title} title={role.title} period={role.period} bullets={role.cvBullets ?? role.bullets} />
            ))}
          </Section>

          {/* Its own section, not a "Projects" bucket: the label has to read as
              real work or the reader relocates it to the bottom of the page.
              The role period is omitted because the header already carries it. */}
          <Section title="Independent Product" icon={<Smartphone size={14} />}>
            <EmployerHeader company={meusDesafios.company} location={meusDesafios.location} period={meusDesafios.period} url={meusDesafios.url} />
            {meusDesafios.roles.map((role) => (
              <RoleBlock key={role.title} title={role.title} bullets={role.cvBullets ?? role.bullets} />
            ))}
          </Section>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Page 2 — history, compressed, plus credentials                    */}
      {/* ---------------------------------------------------------------- */}
      <div className="cv-page bg-white">
        <div className="p-8 print:p-0">
          <Section title="Professional Experience" icon={<Briefcase size={14} />}>
            <EmployerHeader company={johnsonAndJohnson.company} location={johnsonAndJohnson.location} period="2014 — 2019" />
            {EARLIER_JJ_ROLES.map((role) => (
              <RoleBlock key={role.title} title={role.title} period={role.period} bullets={role.cvBullets ?? role.bullets} />
            ))}
          </Section>

          <Section title="Earlier Experience" icon={<Code size={14} />}>
            <ul className="text-gray-700">
              {earlierExperience.map((role) => (
                <li key={`${role.company}-${role.period}`} className="cv-bullet mb-1">
                  <span className="font-semibold text-gray-900">{role.title}</span>
                  <span className="text-gray-700"> — {role.company}</span>
                  <span className="text-gray-600"> ({role.period})</span>
                  <span className="text-gray-700">. {role.detail}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Skills" icon={<Code size={14} />}>
            {skillGroups.map((group) => (
              <SkillGroupBlock key={group.title} title={group.title} skills={group.skills} />
            ))}
          </Section>

          <div className="grid grid-cols-3 gap-6 items-start">
            <Section title="Education" icon={<GraduationCap size={14} />}>
              {education.map((item) => (
                <div key={item.institution} className="mb-2">
                  <h3 className="font-semibold text-gray-900 cv-role-title">{item.institution}</h3>
                  <p className="text-blue-600 cv-meta">{item.degree}</p>
                  <p className="text-gray-600 cv-meta">{item.period}</p>
                </div>
              ))}
            </Section>

            <Section title="Certifications" icon={<Award size={14} />}>
              {certifications.map((cert) => (
                <div key={cert.title} className="mb-2">
                  <h3 className="font-semibold text-gray-900 cv-role-title">{cert.title}</h3>
                  <p className="text-gray-600 cv-meta">{cert.period}</p>
                </div>
              ))}
            </Section>

            <Section title="Languages" icon={<LanguagesIcon size={14} />}>
              {languages.map((language) => (
                <div key={language.name} className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-700 cv-role-title">{language.name}</span>
                  <span className="text-blue-600 cv-role-title">{language.level}</span>
                </div>
              ))}
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}
