/**
 * Single source of truth for all profile content.
 *
 * Both the homepage sections and app/cv/page.tsx render from this file.
 * Never hardcode experience/skills/projects content inside components.
 *
 * HARD RULE: professional experience may be reworded but never invented.
 * No new facts, metrics, or titles. Gaps are tracked in CV_GAPS.md.
 *
 * `cvBullets` holds the condensed, print-optimized variant of `bullets`.
 * When `cvBullets` is absent, the CV renders `bullets`.
 */

export interface Role {
  /** Market-facing title. */
  title: string;
  /** Literal internal title, when it differs from the market-facing one. */
  internalTitle?: string;
  period: string;
  bullets: string[];
  /** Condensed variant for the print/PDF CV. */
  cvBullets?: string[];
  current?: boolean;
}

export interface Experience {
  company: string;
  /** Short qualifier rendered next to the company name on the CV. */
  context?: string;
  logo?: string;
  location: string;
  period: string;
  url?: string;
  roles: Role[];
}

/** Pre-2014 roles, rendered as a single line each with no bullets. */
export interface EarlierRole {
  title: string;
  company: string;
  period: string;
  detail: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const profile = {
  name: "Paulo Neves",
  title: "Full Stack Engineering Manager",
  /** Where he is based. */
  location: "Jacareí, SP, Brazil",
  /** Rendered next to the location. Must not exclude hybrid São Paulo roles. */
  availability: "Remote (Brazil) or São Paulo",
  email: "paulo@psneves.com.br",
  /** Display form. */
  phone: "+55 (12) 99180-1173",
  /** E.164, for the tel: href. */
  phoneHref: "+5512991801173",
  website: "psneves.com.br",
  websiteUrl: "https://psneves.com.br",
  linkedin: "linkedin.com/in/psneves",
  linkedinUrl: "https://br.linkedin.com/in/psneves",
  github: "github.com/psneves",
  githubUrl: "https://github.com/psneves",
} as const;

/**
 * Three jobs, one per sentence: identity + span, what he personally builds,
 * strongest proof + direction.
 */
export const summary = {
  cv: "Full Stack Engineering Manager with 17 years in software and 3 managing engineering teams. At Johnson & Johnson I manage 5 direct reports inside an 11-engineer group spanning intern to coordinator, support ~70 contractors across 18 parallel initiatives, and still design and write the production systems we ship. AI across the team's planning, build and release cycle drove US$1.2M in cost avoidance through July 2026. Outside it, I am the founder and sole engineer of a live habit-tracking app on iOS and Android, owning product, mobile, backend, billing and store releases end to end.",
  homeLead:
    "Full Stack Engineering Manager with 17 years in software and 3 managing engineering teams. I manage 5 direct reports inside an 11-engineer group at Johnson & Johnson that spans intern to coordinator, support ~70 contractors across 18 parallel initiatives — and I still design and write the systems we ship. AI across the team's planning, build and release cycle drove US$1.2M in cost avoidance through July 2026.",
  homeSecondary:
    "Founder and sole engineer of Meus Desafios, a live habit-tracking app on iOS and Android. I own product, mobile client, backend, billing and store releases end to end — which is where the standards I set for my team get tested against my own code.",
} as const;

export const highlights = [
  { label: "US$1.2M Avoided", description: "Through July 2026, from AI across the delivery process" },
  { label: "Mixed-Seniority Team", description: "5 direct reports, intern to coordinator" },
  { label: "Still Hands-On", description: "Architecture, code and releases" },
] as const;

/**
 * Homepage-only section. Every line follows "<concrete mechanism> so that
 * <failure prevented>". No metrics — none of this has been instrumented.
 *
 * The print CV does NOT render this: the same practice is folded into the
 * bullets of the two current roles, so it reads as evidence for the jobs
 * rather than competing with them for page-1 space. Keep the two in sync by
 * hand — if a mechanism changes here, update those role bullets too.
 */
export const aiPractice = {
  title: "AI-Assisted Engineering Practice",
  intro:
    "How I work, and the bar I hold agent-written code to. Every mechanism below exists because of a failure it prevents.",
  points: [
    "Specs and agent instructions (SPEC.md, AGENTS.md, CLAUDE.md) are committed next to the code and reviewed like source, so intent and constraints survive across sessions, engineers and hand-offs.",
    "Agents run on scoped subtasks in isolated git worktrees, so parallel work cannot collide and every change stays independently reviewable.",
    "A reviewer agent audits the writer agent's diff before a human sees it — first output is never the output that ships.",
    "Agent changes clear the same gate as human ones: build, typecheck, lint and tests pass before review, and a person approves every merge.",
    "Headless runs handle the repetitive passes — migrations, codebase-wide sweeps, release checks — that do not need someone in the loop.",
  ],
} as const;

export const experiences: Experience[] = [
  {
    company: "Johnson & Johnson",
    logo: "/images/logos/jj-logo.webp",
    location: "São José dos Campos, SP, Brazil",
    period: "2014 — Present",
    roles: [
      {
        title: "Full Stack Engineering Manager",
        internalTitle: "IT Manager — Full Stack Chapter Lead",
        period: "Apr 2023 — Present",
        current: true,
        bullets: [
          "Manage 5 direct reports inside an 11-engineer group spanning intern to coordinator, plus ~70 contractors across the delivery org; accountable for hiring, leveling, individual development plans and the technical bar.",
          "Drove US$1.2M in cost avoidance through July 2026 by applying AI across the team's planning, build, test and release cycle.",
          "Lead the internal program behind it, and run engineering on committed specs: agent instructions (SPEC.md, AGENTS.md, CLAUDE.md) live next to the code and are reviewed like source, so intent survives across sessions and hand-offs.",
          "Hold agent output to the human bar — a reviewer agent audits the writer agent's diff, and build, typecheck, lint and tests gate every change before a person approves the merge.",
          "Support 18 parallel initiatives across the chapter through vendor management, budget ownership and technical direction.",
          "Design and write the production systems the group ships, on TypeScript, Next.js, PostgreSQL and TypeORM, containerized with Docker.",
          "Brought automated tests to every initiative the team owns, so nothing ships on manual verification alone — internal and partner squads held to the same bar.",
          "Promoted from chapter lead to manager in Sep 2023 after establishing the group's hiring, onboarding and career-path foundations.",
        ],
        cvBullets: [
          "Manage 5 direct reports inside an 11-engineer group spanning intern to coordinator, plus ~70 contractors across the delivery org; accountable for hiring, leveling, career plans and the technical bar.",
          "Drove US$1.2M in cost avoidance through July 2026 by applying AI across the team's planning, build, test and release cycle.",
          "Lead the internal program behind it, and run engineering on committed specs: agent instructions (SPEC.md, AGENTS.md, CLAUDE.md) live next to the code and are reviewed like source, so intent survives across sessions and hand-offs.",
          "Hold agent output to the human bar — a reviewer agent audits the writer agent's diff, and build, typecheck, lint and tests gate every change before a person approves the merge.",
          "Support 18 parallel initiatives across the chapter through vendor management, budget ownership and technical direction.",
          "Design and write the production systems the group ships — TypeScript, Next.js, PostgreSQL, TypeORM, Docker.",
          "Brought automated tests to every initiative the team owns, so nothing ships on manual verification alone — internal and partner squads held to the same bar.",
          "Promoted from chapter lead to manager in Sep 2023.",
        ],
      },
      {
        title: "Technical Product Owner",
        internalTitle: "IT Lead",
        period: "Sep 2020 — Mar 2023",
        bullets: [
          "Owned roadmap and delivery for personalization, SSO (OIDC/SAML), analytics and site search on the Innovative Medicine professional portal for LATAM.",
          "Defined the API contracts and non-functional requirements, and drove the reliability, performance and observability work behind them.",
          "Set OKRs and ran demos and executive readouts across LATAM markets.",
          "Ran internal and partner squads through Agile delivery under audited compliance.",
        ],
        cvBullets: [
          "Owned roadmap and delivery for personalization, SSO (OIDC/SAML), analytics and site search on the Innovative Medicine professional portal for LATAM.",
          "Defined the API contracts and non-functional requirements, and drove the reliability, performance and observability work behind them.",
          "Set OKRs and ran demos and executive readouts across LATAM markets.",
        ],
      },
      {
        title: "Service Specialist — Digital & RPA",
        period: "Feb 2019 — Aug 2020",
        bullets: [
          "Main technical point of contact and escalation for regional digital initiatives.",
          "Ran automation proofs of concept with Blue Prism and Python, and set the delivery and QA metrics they were judged on.",
        ],
        cvBullets: [
          "Main technical point of contact and escalation for regional digital initiatives.",
          "Ran automation proofs of concept with Blue Prism and Python, and set the delivery and QA metrics they were judged on.",
        ],
      },
      {
        title: "Sr. Information Security Analyst",
        period: "Apr 2018 — Feb 2019",
        bullets: [
          "Security liaison for J&J Corporate, Vision Care and LifeScan across LATAM; guided risk posture and remediation.",
          "Led application-security assessments during M&A due diligence and integration.",
        ],
        cvBullets: [
          "Security liaison for J&J Corporate, Vision Care and LifeScan across LATAM; guided risk posture and remediation.",
          "Led application-security assessments during M&A due diligence and integration.",
        ],
      },
      {
        title: "Information Security Analyst",
        period: "Jun 2015 — Mar 2018",
        bullets: [
          "Ran application risk assessments and compliance reviews against corporate and regulatory standards.",
          "Led SOX testing for IT operations and partnered with corporate internal audit.",
          "Cut security training completion time in half by reworking the process; mentored interns.",
        ],
        cvBullets: [
          "Ran application risk assessments and compliance reviews against corporate and regulatory standards.",
          "Led SOX testing for IT operations and partnered with corporate internal audit.",
          "Cut security training completion time in half by reworking the process; mentored interns.",
        ],
      },
      {
        title: "Information Security Intern",
        period: "Jan 2014 — May 2015",
        bullets: [
          "Supported vulnerability assessment and remediation for J&J Medical LATAM web applications.",
          "Delivered security training to 800+ end users and guided secure coding practices for development teams.",
        ],
        cvBullets: [
          "Supported vulnerability assessment and remediation for J&J Medical LATAM web applications.",
          "Delivered security training to 800+ end users and guided secure coding practices for development teams.",
        ],
      },
    ],
  },
  {
    company: "Meus Desafios",
    context: "Independent consumer app",
    logo: "/images/projects/meus-desafios.png",
    location: "Remote — Brazil",
    period: "2026 — Present",
    url: "https://meusdesafios.com.br",
    roles: [
      {
        title: "Founder & Sole Engineer",
        period: "2026 — Present",
        current: true,
        bullets: [
          "Founded and build Meus Desafios end to end — a live habit-tracking app on iOS and Android covering sleep, water, calories and exercise, with duels, private groups and weekly leaderboards.",
          "Own the whole stack alone: React Native and Expo on the client, Next.js and PostgreSQL on Vercel behind it, and the monthly and annual billing that separates the free tier from Premium.",
          "Every release ships behind a Maestro end-to-end suite, because with no QA function a regression reaches users through an app-store queue measured in days, not minutes.",
          "Build it with parallel agents in isolated git worktrees and headless runs for migrations and release checks — where I pressure-test the workflow before my team uses it.",
          "Make the product calls a PM would normally make — which habits to track, what stays free and what sits behind Premium, what to cut to keep the surface small enough for one engineer to maintain — and then live with them in the support inbox.",
          "Run it deliberately at one-person scale — not fundraising, not hiring — which keeps me fluent in what my engineers deal with daily.",
        ],
        cvBullets: [
          "Founded and build a live habit-tracking app on iOS and Android — sleep, water, calories and exercise, with duels, private groups and weekly leaderboards.",
          "Own the whole stack alone: React Native and Expo on the client, Next.js and PostgreSQL on Vercel behind it, and the billing that separates the free tier from Premium.",
          "Every release ships behind a Maestro end-to-end suite, because with no QA function a regression reaches users through an app-store queue measured in days, not minutes.",
          "Build it with parallel agents in isolated git worktrees and headless runs for migrations and release checks — where I pressure-test the workflow before my team uses it.",
          "Make the product calls a PM would normally make — what stays free, what sits behind Premium, and what to cut to keep the surface small enough for one engineer to maintain.",
          "Run it deliberately at one-person scale — not fundraising, not hiring — which keeps me fluent in what my engineers deal with daily.",
        ],
      },
    ],
  },
];

/** Rendered as one line each. Nothing before 2014 earns a bullet list. */
export const earlierExperience: EarlierRole[] = [
  {
    title: "Software Developer",
    company: "Mentor Interativa",
    period: "2011 — 2013",
    detail: "Built a learning management system in Java and shipped the company's first mobile app.",
  },
  {
    title: "Junior Software Developer",
    company: "Stefanini",
    period: "2011",
    detail: "Migrated legacy Delphi applications to Java; added credit-card types to payment processing.",
  },
  {
    title: "Teaching Assistant, Java",
    company: "FAJTec — Faculdade Jaguariúna",
    period: "2010",
    detail: "Supported the Introduction to Programming in Java course and authored its assessments.",
  },
  {
    title: "Instructor",
    company: "Data Computadores",
    period: "2008 — 2009",
    detail: "Taught computer fundamentals, Windows configuration and Microsoft Office to entry-level students.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Build with",
    skills: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "React Native / Expo",
      "PostgreSQL",
      "TypeORM",
      "Docker",
      "Microsoft Entra SSO (OIDC/SAML)",
      "OpenTelemetry",
      "Pino",
      "Playwright",
      "Maestro",
      "Vercel",
      "Python",
    ],
  },
  {
    title: "Lead",
    skills: [
      "Hiring & leveling",
      "Career development",
      "Architecture & technical direction",
      "Code review standards",
      "Roadmap & OKRs",
      "Delivery & release management",
      "Partner squad delivery",
      "Budget Management",
    ],
  },
];

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Fluent" },
] as const;

export const education = [
  {
    institution: "Federal University of São Paulo (UNIFESP)",
    degree: "B.Sc. in Computer Science",
    period: "2011 — 2015",
  },
  {
    institution: "DeVry — Metrocamp",
    degree: "Post-graduate, Information Security Management",
    period: "2016 — 2018",
  },
] as const;

export const certifications = [
  {
    title: "CompTIA Security+",
    period: "2017 — 2020",
    url: "https://www.credly.com/badges/17833853-d263-4c5d-8910-5ba917c0035a",
  },
  {
    title: "SAFe® 5 Agilist",
    period: "2020 — 2021",
    url: "https://www.credly.com/badges/6edbb4e1-608a-404e-8185-114e3820f7cf",
  },
  {
    title: "Blue Prism Developer",
    period: "2020 — Present",
    url: "https://www.credly.com/badges/92b24cf6-5666-4e22-85c3-4b5b699d7698",
  },
] as const;

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  status: "LIVE" | "PAUSED";
  tags: string[];
}

/**
 * Meus Desafios lives in `experiences` as a first-class role. The card here is
 * the artifact that proves it — deliberately different wording, not a repeat.
 */
export const projects: Project[] = [
  {
    title: "Meus Desafios",
    description:
      "The app I founded and build alone. React Native and Expo on the client, Next.js and PostgreSQL on Vercel behind it, a Maestro end-to-end suite gating every release, and freemium billing behind the Premium tier. Tracks sleep, water, calories and exercise, with duels, private groups and weekly leaderboards.",
    image: "/images/projects/meus-desafios.png",
    url: "https://meusdesafios.com.br",
    status: "LIVE",
    tags: ["React Native", "Expo", "Next.js", "PostgreSQL", "Vercel", "Maestro", "Freemium billing"],
  },
  {
    title: "Marduk Barber",
    description:
      "A premium barbershop site with subscription plans and a tailored booking experience.",
    image: "/images/projects/marduk-barber.webp",
    url: "https://mardukbarber.com.br",
    status: "LIVE",
    tags: ["Next.js", "Subscriptions", "Booking"],
  },
  {
    title: "Papelando",
    description:
      "A virtual stationery brand selling customized planners, notebooks and journals.",
    image: "/images/projects/papelando.webp",
    url: "https://papelando.com.br",
    status: "PAUSED",
    tags: ["E-commerce", "Custom Products"],
  },
  {
    title: "75 Hard Challenge",
    description:
      "A tracker for the 75 Hard program: daily checklists, habit tracking and streak indicators.",
    image: "/images/projects/75hard.webp",
    url: "https://75hard.com.br",
    status: "PAUSED",
    tags: ["Habit Tracking", "Streaks"],
  },
  {
    title: "DietaFlex",
    description:
      "A flexible-dieting tool for balancing macros and calories without strict food restrictions.",
    image: "/images/projects/dietaflex.webp",
    url: "https://dietaflex.com.br",
    status: "PAUSED",
    tags: ["Nutrition", "Macro Tracking"],
  },
];
