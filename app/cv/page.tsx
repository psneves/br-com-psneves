"use client";

/**
 * The print CV. Content comes from lib/data/profile.ts; chrome and every print
 * rule come from components/cv/CvShell.tsx. Regenerate the PDF with:
 *   npm run dev && npm run generate:pdf   ->  public/Paulo_Neves_CV.pdf
 *
 * Composition notes, all deliberate:
 *
 *  - Professional Experience is ONE section covering the whole J&J tenure,
 *    running unbroken from Engineering Manager back to Information Security
 *    Intern. The security years are not a separate block; they are the back half
 *    of one continuous record. It currently fits entirely on page 1 — if a
 *    future edit pushes it over, PAGE_1_ROLE_COUNT splits it and the section and
 *    employer headers repeat on page 2.
 *
 *  - Every experience section comes before Skills — the J&J run, then Earlier
 *    Experience, then Skills. Skills summarises the record, so it reads after
 *    the record rather than interrupting it.
 *
 *  - Independent Product closes the CV, after the credentials block.
 *
 *  - Education is reversed so the post-graduate in Information Security
 *    Management reads before the B.Sc.
 *
 *  - `availability` is stripped from the identity here. It is a job-search
 *    signal for the site header, and on the CV it answers a question nobody
 *    asked. Header.tsx still renders it, so the field stays in profile.ts.
 *
 *  - Bullets come from `cvBullets ?? bullets`. Both are populated per role, as
 *    separate literals, so rewording the homepage cannot change the PDF. That
 *    matters: page 1 runs with single-digit headroom.
 */

import React from "react";
import { Briefcase, Code, Smartphone, Users } from "lucide-react";
import { profile, summary, experiences, earlierExperience, skillGroups, languages, education, certifications } from "@/lib/data/profile";
import {
  CredentialsGrid,
  CvActions,
  CvHeader,
  CvStyles,
  EarlierExperienceList,
  EmployerHeader,
  RoleBlock,
  Section,
  SkillGroupBlock,
} from "@/components/cv/CvShell";

const [johnsonAndJohnson, meusDesafios] = experiences;

/**
 * Where the J&J run breaks across pages. Purely a fit decision — move it and
 * re-run `npm run generate:pdf`, which refuses to write if either page
 * overflows. 6 keeps the whole record on page 1.
 */
const PAGE_1_ROLE_COUNT = 6;
const PAGE_1_JJ_ROLES = johnsonAndJohnson.roles.slice(0, PAGE_1_ROLE_COUNT);
const CONTINUED_JJ_ROLES = johnsonAndJohnson.roles.slice(PAGE_1_ROLE_COUNT);

/**
 * Date range for the repeated employer header on page 2, derived from whichever
 * roles land there. Hardcoding it would silently go stale the moment
 * PAGE_1_ROLE_COUNT changes.
 */
const CONTINUED_PERIOD = (() => {
  const years = CONTINUED_JJ_ROLES.flatMap((role) => role.period.match(/\d{4}/g) ?? []).map(Number);
  if (years.length === 0) return "";
  const [from, to] = [Math.min(...years), Math.max(...years)];
  return from === to ? `${from}` : `${from} — ${to}`;
})();

/** Highest and most relevant qualification first. */
const EDUCATION_SECURITY_FIRST = [...education].reverse();

/** The CV header shows location alone; see the note above. */
const { availability: _availabilityOmitted, ...cvIdentity } = profile;

export default function CV() {
  return (
    <>
      <CvStyles />
      <CvActions pdfHref="/Paulo_Neves_CV.pdf" />

      {/* ---------------------------------------------------------------- */}
      {/* Page 1 — summary and the J&J record                               */}
      {/* ---------------------------------------------------------------- */}
      <div className="cv-page bg-white">
        <div className="p-8 print:p-0">
          <CvHeader identity={cvIdentity} title={profile.cvTitle} />

          <Section title="Summary" icon={<Users size={14} />}>
            <p className="text-gray-700 cv-summary">{summary.cv}</p>
          </Section>

          <Section title="Professional Experience" icon={<Briefcase size={14} />}>
            <EmployerHeader company={johnsonAndJohnson.company} location={johnsonAndJohnson.location} period={johnsonAndJohnson.period} />
            {PAGE_1_JJ_ROLES.map((role) => (
              <RoleBlock key={role.title} title={role.title} period={role.period} bullets={role.cvBullets ?? role.bullets} />
            ))}
          </Section>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Page 2 — history, skills, credentials, side venture               */}
      {/* ---------------------------------------------------------------- */}
      <div className="cv-page bg-white">
        <div className="p-8 print:p-0">
          {CONTINUED_JJ_ROLES.length > 0 && (
            <Section title="Professional Experience" icon={<Briefcase size={14} />}>
              <EmployerHeader company={johnsonAndJohnson.company} location={johnsonAndJohnson.location} period={CONTINUED_PERIOD} />
              {CONTINUED_JJ_ROLES.map((role) => (
                <RoleBlock key={role.title} title={role.title} period={role.period} bullets={role.cvBullets ?? role.bullets} />
              ))}
            </Section>
          )}

          {/* Every experience section — the J&J run above and the pre-2014
              roles here — finishes before Skills starts. */}
          <Section title="Earlier Experience" icon={<Code size={14} />}>
            <EarlierExperienceList roles={earlierExperience} />
          </Section>

          <Section title="Skills" icon={<Code size={14} />}>
            {skillGroups.map((group) => (
              <SkillGroupBlock key={group.title} title={group.title} skills={group.skills} />
            ))}
          </Section>

          <CredentialsGrid education={EDUCATION_SECURITY_FIRST} certifications={certifications} languages={languages} />

          {/* Last block on the CV, below the credentials grid. */}
          <Section title="Independent Product" icon={<Smartphone size={14} />}>
            {/* No location: "Remote — Brazil" says nothing about a solo app
                that has no office, and the header reads cleaner without it. */}
            <EmployerHeader company={meusDesafios.company} period={meusDesafios.period} url={meusDesafios.url} />
            {meusDesafios.roles.map((role) => (
              <RoleBlock key={role.title} title={role.title} bullets={role.cvBullets ?? role.bullets} />
            ))}
          </Section>
        </div>
      </div>
    </>
  );
}
