"use client";

/**
 * Shared chrome for every print CV variant.
 *
 * `/cv` composes its own pages from these primitives rather than driving a
 * layout config. What must NOT be duplicated is `CvStyles` — it carries the two
 * print traps documented in CLAUDE.md, and a second copy is a second chance to
 * re-break them. If a targeted CV variant is ever added again, it imports from
 * here; it does not copy the style block.
 */

import React from "react";
import { ArrowLeft, Award, Calendar, Download, Github, Globe, GraduationCap, Languages as LanguagesIcon, Linkedin, Mail, MapPin, Phone } from "lucide-react";

/**
 * Every rule the print CV depends on, in one place.
 *
 * Two traps live here — see CLAUDE.md:
 *  1. No Tailwind `print:` variants inside this template literal. "\:" collapses
 *     to ":" in a JS string, so `.print\:text-xs` reaches the browser as the
 *     invalid selector `.print:text-xs` and is silently dropped.
 *  2. The `.cv-page` prose reset is load-bearing. app/globals.css styles bare
 *     elements for prose; without the reset each page inflates by ~300px.
 */
export function CvStyles() {
  return (
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

        /* Never hyphenate: justified text with hyphens: auto injects real
           hyphen characters into the PDF text layer, so an ATS reads
           "ar-chitecture" and misses the keyword. */
        .cv-page * {
          -webkit-hyphens: none !important;
          hyphens: none !important;
        }

        /* Left-align body copy only. Scoped to the summary and bullet text
           on purpose — a blanket "p { text-align: left }" also flattens the
           centered name and title in the header. */
        .cv-page .cv-summary,
        .cv-page li span:last-child {
          text-align: left !important;
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
  );
}

/**
 * Screen-only actions. `pdfHref` is optional: a variant whose PDF is not served
 * from public/ renders the Return button alone rather than a dead download.
 */
export function CvActions({ pdfHref }: { pdfHref?: string }) {
  // Serves the pre-generated file rather than window.print(). Printing from
  // the browser paginates with the browser's own margins and stamps its
  // header/footer chrome (URL, date, page numbers) onto the output, so the
  // two download buttons on the site produced visibly different PDFs.
  // scripts/generate-pdf.js is the single path, and it verifies page fit.
  const handleDownloadPDF = () => {
    if (!pdfHref) return;
    const link = document.createElement("a");
    link.href = pdfHref;
    link.download = pdfHref.split("/").pop() ?? "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed top-4 right-4 z-10 print-hidden flex gap-2">
      <button onClick={() => (window.location.href = "/")} className="button-secondary text-sm px-4 py-2 lg:px-6 lg:py-3" aria-label="Go to Home">
        <ArrowLeft size={16} />
        Return
      </button>
      {pdfHref && (
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
          aria-label="Download CV as PDF"
        >
          <Download size={16} aria-hidden="true" />
          Download PDF
        </button>
      )}
    </div>
  );
}

export interface CvIdentity {
  name: string;
  location: string;
  /** Optional: a variant may drop it when the target makes it noise. */
  availability?: string;
  email: string;
  phone: string;
  phoneHref: string;
  website: string;
  websiteUrl: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
}

/** `title` is passed separately because it is the line each variant retargets. */
export function CvHeader({ identity, title }: { identity: CvIdentity; title: string }) {
  return (
    <header className="mb-4">
      <div className="text-center w-full border-b-2 border-blue-600 pb-3">
        <h1 className="text-3xl font-bold mb-1 cv-name-text" style={{ color: "#1f2937" }}>
          {identity.name}
        </h1>
        <p className="text-blue-600 font-medium mb-2" style={{ fontSize: "15px" }}>
          {title}
        </p>

        {/* Email and phone first, plain text — parsers look here first. */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-1 text-gray-700 cv-meta">
          <a href={`mailto:${identity.email}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Mail size={11} aria-hidden="true" />
            {identity.email}
          </a>
          <a href={`tel:${identity.phoneHref}`} className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Phone size={11} aria-hidden="true" />
            {identity.phone}
          </a>
          <span className="flex items-center gap-1">
            <MapPin size={11} aria-hidden="true" />
            {identity.availability ? `${identity.location} · ${identity.availability}` : identity.location}
          </span>
        </div>

        {/* Full URLs, not @handles — parsers match URL patterns. */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-1 text-gray-600 cv-meta mt-1">
          <a href={identity.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Linkedin size={11} aria-hidden="true" />
            {identity.linkedin}
          </a>
          <a href={identity.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Github size={11} aria-hidden="true" />
            {identity.github}
          </a>
          <a href={identity.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
            <Globe size={11} aria-hidden="true" />
            {identity.website}
          </a>
        </div>
      </div>
    </header>
  );
}

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, icon, children, className = "" }: SectionProps) {
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

/**
 * Company header. Roles nest underneath so a long tenure reads as one employer.
 * `location` is optional — a remote-by-definition entry has nothing useful to
 * put there, and an empty pin reads worse than no pin.
 */
export function EmployerHeader({ company, context, location, period, url }: { company: string; context?: string; location?: string; period: string; url?: string }) {
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
        {location && (
          <span className="flex items-center gap-1">
            <MapPin size={10} aria-hidden="true" />
            {location}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Calendar size={10} aria-hidden="true" />
          {period}
        </span>
      </div>
    </div>
  );
}

export function RoleBlock({ title, period, bullets }: { title: string; period?: string; bullets: readonly string[] }) {
  return (
    <article className="mb-3 cv-role">
      <header className="flex items-baseline justify-between gap-3">
        <p className="text-blue-600 font-semibold cv-role-title">{title}</p>
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

export function SkillGroupBlock({ title, skills }: { title: string; skills: readonly string[] }) {
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

/** Education, certifications and languages share one three-column row. */
export function CredentialsGrid({
  education,
  certifications,
  languages,
}: {
  education: readonly { institution: string; degree: string; period: string }[];
  certifications: readonly { title: string; period: string }[];
  languages: readonly { name: string; level: string }[];
}) {
  return (
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
  );
}

export function EarlierExperienceList({ roles }: { roles: readonly { title: string; company: string; period: string; detail: string }[] }) {
  return (
    <ul className="text-gray-700">
      {roles.map((role) => (
        <li key={`${role.company}-${role.period}`} className="cv-bullet mb-1">
          <span className="font-semibold text-gray-900">{role.title}</span>
          <span className="text-gray-700"> — {role.company}</span>
          <span className="text-gray-600"> ({role.period})</span>
          <span className="text-gray-700">. {role.detail}</span>
        </li>
      ))}
    </ul>
  );
}
