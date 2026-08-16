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
  /** Header subtitle. Kept short: it wraps badly under the h1 at 390px. */
  title: "Engineering Manager & Product Owner",
  /**
   * The CV title line. Longer than `title` on purpose — the print header has
   * the width for all three threads, the mobile site header does not.
   */
  cvTitle: "Engineering Manager, Product Owner and Information Security Specialist",
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
  /**
   * Rendered by /cv. Security -> product -> scope -> AI, because that is the
   * order this reader needs it in. The five security years lead: they are the
   * foundation the rest of the CV is built on, not a footnote to it.
   */
  cv: "Product-minded engineering leader with a strong security foundation, including five years in Information Security & Risk Management as a point of contact for business areas, leading application security assessments and coordinating security awareness campaigns. As Technical Product Owner, led the roadmap and delivery of the Innovative Medicine HCP portal across LATAM and CENCA. Currently manage 5 direct reports within an 11-engineer team and provide technical leadership to approximately 70 vendor engineers across 25 initiatives. Delivered US$1.2M in cost avoidance year-to-date in 2026, driven by AI adoption across the software development lifecycle.",
  homeLead:
    "Product-minded engineering leader with a strong security foundation \u2014 five years in Information Security & Risk Management at Johnson & Johnson, then product ownership of the Innovative Medicine HCP portal across LATAM and CENCA. Today I lead Full Stack Engineering across a 25-initiative portfolio, 10 of them mine end to end. Integrating AI capabilities across the planning, build, test and release lifecycle produced US$1.2M in cost avoidance in the first seven months of 2026.",
  homeSecondary:
    "Founder and sole engineer of Meus Desafios, a live habit-tracking app on iOS and Android \u2014 and of the grounded conversational assistant on this site. I own product, mobile client, backend, billing and store releases end to end, which is where product ownership and hands-on engineering meet in one pair of hands.",
} as const;

export const highlights = [
  { label: "US$1.2M Avoided", description: "First seven months of 2026, from AI across the delivery lifecycle" },
  { label: "5 Years in Security", description: "Information Security & Risk Management at J&J, 2014 \u2014 2019" },
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
    "The practice behind the US$1.2M \u2014 how AI is integrated across planning, build, test and release, and the bar agent-written work has to clear. Every mechanism below exists because of a failure it prevents.",
  points: [
    "Specifications and agent instructions are version-controlled artifacts committed next to the code and reviewed like source, so the context an agent works from is owned and current rather than re-explained each session.",
    "Recurring workflows are packaged as reusable agent skills rather than re-prompted from scratch, so the same task produces the same shape of output whoever runs it.",
    "Agents run on scoped subtasks in isolated git worktrees, so parallel work cannot collide and every change stays independently reviewable.",
    "A reviewer agent audits the writer agent's diff before a human sees it \u2014 first output is never the output that ships.",
    "Agent changes clear the same gate as human ones: build, typecheck, lint and tests pass before review, and a person approves every merge.",
    "Headless runs handle the repetitive passes \u2014 migrations, codebase-wide sweeps, release checks \u2014 that do not need someone in the loop.",
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
        title: "Full Stack Engineering Manager, Technology Services",
        period: "Apr 2023 — Present",
        current: true,
        bullets: [
          "Led the team that took 1st place globally in the 2026 Hack4Health hackathon, Care Community theme.",
          "Delivered US$1.2M in cost avoidance in the first seven months of 2026 by integrating AI capabilities across the team's planning, build, test and release cycle.",
          "Own Engineering engagements for Vision, while supporting Full Stack Engineering across additional business areas.",
          "Lead Full Stack Engineering for 10 initiatives, while providing technical guidance and oversight across 15 additional initiatives; manage vendors and budgets, and interview Full Stack engineers for open positions.",
          "Standardized the team on GitHub Copilot and AWS Kiro across the delivery cycle and built the reusable agent skills they adopted; specification-driven development emerged as the practice that keeps AI output reviewable.",
          "Manage 5 direct reports within an 11-engineer J&J team spanning intern to coordinator, accountable for hiring, career development and performance; zero voluntary attrition across three years in the role.",
          "Remain hands-on: design architecture and write production software, with CI/CD and infrastructure-as-code on Terraform and AWS.",
          "Stepped up from Chapter Lead in September 2023 after establishing the group's hiring, onboarding and career-path foundations.",
        ],
        cvBullets: [
          "Led the team that took 1st place globally in the 2026 Hack4Health hackathon, Care Community theme.",
          "Delivered US$1.2M in cost avoidance in the first seven months of 2026 by integrating AI capabilities across the team's planning, build, test and release cycle.",
          "Own Engineering engagements for Vision, while supporting Full Stack Engineering across additional business areas.",
          "Lead Full Stack Engineering for 10 initiatives, while providing technical guidance and oversight across 15 additional initiatives; manage vendors and budgets, and interview Full Stack engineers for open positions.",
          "Standardized the team on GitHub Copilot and AWS Kiro across the delivery cycle and built the reusable agent skills they adopted; specification-driven development emerged as the practice that keeps AI output reviewable.",
          "Manage 5 direct reports within an 11-engineer J&J team spanning intern to coordinator, accountable for hiring, career development and performance; zero voluntary attrition across three years in the role.",
          "Remain hands-on: design architecture and write production software, with CI/CD and infrastructure-as-code on Terraform and AWS.",
          "Stepped up from Chapter Lead in September 2023 after establishing the group's hiring, onboarding and career-path foundations.",
        ],
      },
      {
        title: "Technical Product Owner, Innovative Medicine",
        period: "Sep 2020 — Mar 2023",
        bullets: [
          "Owned roadmap and delivery for the Innovative Medicine HCP portal across LATAM and CENCA, on Drupal: personalization, single sign-on federated to third-party services, site search and analytics.",
          "Ran agency-led acquisition campaigns for the portal targeting doctors, nurses and pharmacists, with analytics as the feedback loop into what shipped next.",
          "Defined the API contracts and non-functional requirements behind it, and drove the reliability, performance and observability work they implied.",
          "Set OKRs and ran demos and executive readouts across LATAM markets.",
        ],
        cvBullets: [
          "Owned roadmap and delivery for the Innovative Medicine HCP portal across LATAM and CENCA, on Drupal: personalization, single sign-on federated to third-party services, site search and analytics.",
          "Ran agency-led acquisition campaigns for the portal targeting doctors, nurses and pharmacists, with analytics as the feedback loop into what shipped next.",
          "Defined the API contracts and non-functional requirements behind it, and drove the reliability, performance and observability work they implied.",
          "Set OKRs and ran demos and executive readouts across LATAM markets.",
        ],
      },
      {
        title: "Service Specialist — Digital & RPA, Technology Services",
        period: "Feb 2019 — Aug 2020",
        bullets: [
          "Main technical point of contact and escalation for regional digital initiatives.",
          "Ran workflow-automation proofs of concept with Blue Prism and Python, and set the delivery and QA metrics they were judged on.",
          "Managed vendor delivery, interviewed and selected engineers for the regional squads, and set the technical direction they built against.",
        ],
        cvBullets: [
          "Main technical point of contact and escalation for regional digital initiatives.",
          "Ran workflow-automation proofs of concept with Blue Prism and Python, and set the delivery and QA metrics they were judged on.",
          "Managed vendor delivery, interviewed and selected engineers for the regional squads, and set the technical direction they built against.",
        ],
      },
      {
        title: "Sr. Information Security Analyst, Information Security & Risk Management",
        period: "Apr 2018 — Feb 2019",
        bullets: [
          "Security single point of contact for J&J Corporate and Vision across LATAM: owned the SDLC security documentation, documented and tracked risks through to remediation or formal acceptance, and referred out-of-scope assessments to the specialist teams that owned them.",
          "Led application security work during M&A integration, assessing high-risk applications on-site in Switzerland and identifying risks ahead of migration into J&J infrastructure.",
          "Coordinated security awareness campaigns across J&J LATAM offices, leading communications and on-site and remote training for employees and partners.",
        ],
        cvBullets: [
          "Security single point of contact for J&J Corporate and Vision across LATAM: owned the SDLC security documentation, documented and tracked risks through to remediation or formal acceptance, and referred out-of-scope assessments to the specialist teams that owned them.",
          "Led application security work during M&A integration, assessing high-risk applications on-site in Switzerland and identifying risks ahead of migration into J&J infrastructure.",
          "Coordinated security awareness campaigns across J&J LATAM offices, leading communications and on-site and remote training for employees and partners.",
        ],
      },
      {
        title: "Information Security Analyst, Information Security & Risk Management",
        period: "Jun 2015 — Mar 2018",
        bullets: [
          "Ran application security assessments and compliance reviews for LATAM business applications, from requirements review through remediation follow-up with development and vendor teams.",
          "Led SOX testing for IT operations across Change Management, User Access Management and Operations Management, partnering with corporate internal audit on scoping and evidence.",
          "Coordinated the regional information-security newsletters to business and technology staff across LATAM.",
        ],
        cvBullets: [
          "Ran application security assessments and compliance reviews for LATAM business applications, from requirements review through remediation follow-up with development and vendor teams.",
          "Led SOX testing for IT operations across Change Management, User Access Management and Operations Management, partnering with corporate internal audit on scoping and evidence.",
          "Coordinated the regional information-security newsletters to business and technology staff across LATAM.",
        ],
      },
      {
        title: "Information Security Intern, Information Security & Risk Management",
        period: "Jan 2014 — May 2015",
        bullets: [
          "Trained 800+ employees across manufacturing and logistics on security awareness (instructor-led sessions).",
          "Supported vulnerability assessment and remediation for J&J Medical LATAM web applications.",
        ],
        cvBullets: [
          "Trained 800+ employees across manufacturing and logistics on security awareness (instructor-led sessions).",
          "Supported vulnerability assessment and remediation for J&J Medical LATAM web applications.",
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
          "Built the grounded conversational assistant on psneves.com.br — OpenAI tool calling over a curated knowledge document, with a tool that logs every question it could not answer.",
          "Every release ships behind a Maestro end-to-end suite, because with no QA function a regression reaches users through an app-store queue measured in days, not minutes.",
          "Make the product calls a PM would normally make — what stays free, what sits behind Premium, and what to cut to keep the surface small enough for one engineer to maintain.",
        ],
        // Deliberately does not mention psneves.com.br: the print CV is read
        // alongside the site itself, so the section spends its lines on the
        // shipped product rather than on the page the reader is already on.
        cvBullets: [
          "Own the product end to end — discovery, roadmap, design, build and store releases — for a gamified habit-tracking mobile app.",
          "Shipped subscription billing with monthly and annual Premium tiers, Sign in with Apple and Google, calorie logging and social challenge features; run the full submission and release cycle on both App Store Connect and Google Play Console.",
          "Built on React Native/Expo, Next.js and PostgreSQL on Vercel, with Maestro end-to-end tests on every release.",
          "Develop it with AI-assisted workflows — the side project is another place to put product and engineering experience into practice.",
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
    title: "Product & experience",
    skills: [
      "Product ownership",
      "Roadmap & OKRs",
      "Drupal",
      "Contentstack",
      "Payload CMS",
      "Personalization",
      "Site search",
      "Web analytics",
      "Self-service portals",
      "Identity Providers",
      "LLM integrations",
      "RAG",
      "Chatbots",
      "Agile delivery under audited compliance",
      "Vendor management",
      "Budget ownership",
      "Architecture & technical direction",
      "Hiring & career development",
    ],
  },
  {
    title: "Security & risk",
    skills: [
      "Application security assessment",
      "Compliance reviews",
      "SOX testing for IT operations",
      "Security awareness & training",
      "Vulnerability assessment & remediation",
      "Secure coding guidance",
    ],
  },
  {
    title: "Build with",
    skills: [
      "LangGraph",
      "Agent orchestration",
      "Tool-calling assistants",
      "GitHub Copilot",
      "AWS Kiro",
      "Specification-driven development",
      "TypeScript",
      "Next.js",
      "React Native",
      "PostgreSQL",
      "Python",
      "Terraform",
      "AWS (Lambda, API Gateway, EKS)",
      "Vercel",
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
