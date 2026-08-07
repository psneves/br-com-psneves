# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Paulo Neves' personal website — a Next.js application showcasing professional experience with a print-optimized CV page and a pre-generated PDF download. Majority of traffic is mobile; the design system is mobile-first.

The site is **English-only**. There is no i18n setup and no Portuguese version.

## Common Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build production version
npm run start        # Start production server
npm run generate:pdf # Regenerate public/Paulo_Neves_CV.pdf via Puppeteer (see below)
npx tsc --noEmit     # Type check
```

⚠️ **`npm run lint` does not currently work** — there is no ESLint config in the repo, so `next lint` drops into an interactive setup prompt. Use `npx tsc --noEmit` for verification.

⚠️ **The build does NOT enforce types or lint.** `next.config.js` sets `typescript.ignoreBuildErrors`, `eslint.ignoreDuringBuilds` and `images.unoptimized`, all `true`. A green build does not mean a clean type check.

**Type-check baseline: 46 pre-existing errors**, all in unused shadcn components under `components/ui/` plus `hooks/use-toast.ts`. Compare against this number rather than expecting zero:
```bash
npx tsc --noEmit 2>&1 | grep -cE "error TS"   # expect 46
```

### Regenerating the CV PDF
The header "Save PDF" button serves the static, pre-generated `public/Paulo_Neves_CV.pdf`. (The `/cv` page's own "Download PDF" button calls `window.print()` on live HTML instead — the two paths can paginate differently, so check both after layout changes.)

**Whenever content in `lib/data/profile.ts` or the CV layout changes, regenerate it:**
1. `npm run dev` (in one terminal)
2. `npm run generate:pdf` (in another; set `CV_URL` to override the default `http://localhost:3000/cv`)
3. Commit the updated `public/Paulo_Neves_CV.pdf`

`scripts/generate-pdf.js` measures each `.cv-page` against the A4 printable box in print media and **exits non-zero without writing** if content overflows. Do not work around that check by raising the threshold — trim content in `lib/data/profile.ts` instead.

## Architecture & Structure

### Framework Stack
- **Next.js 15** App Router, **TypeScript**, **Tailwind CSS**
- Font: **Inter** via `next/font`
- Theming via next-themes (class strategy); design tokens in `app/globals.css`

### Single Source of Truth for Content
**All profile content lives in `lib/data/profile.ts`** (experience, skills, languages, education, certifications, projects, links, summaries). Both the homepage sections AND `app/cv/page.tsx` render from it.
- NEVER hardcode experience/skills/projects content inside components. Before this file existed, every fact was duplicated across four to six files with no sync, and the published site contradicted itself.
- `cvBullets` and `aiPractice.cvPoints` hold condensed, print-optimized variants. When `cvBullets` is absent the CV renders `bullets`.
- HARD RULE: professional experience may be reworded but never invented — no new facts, metrics, or titles.
- Known gaps are tracked in `CV_GAPS.md`. When a number is missing, write the sentence truthfully without it and add a line there — never ship a placeholder.

### Positioning
The CV targets **hands-on Engineering Manager / Tech Manager roles at product companies**, not IC (Staff/Principal) roles. Content is built around three claims, and a line that supports none of them does not belong:
1. Managing a mixed-seniority team with a business outcome
2. Genuinely hands-on architecture — an EM who still designs and writes systems
3. Mature AI-assisted development practice (`aiPractice`) — surfaced as its own section on both pages, not buried in a skills list

Vocabulary deliberately retired: *sponsor, govern, chapter, SQUAD, initiatives, stakeholder management, SDLC, solution architecture, enterprise scale, Technology leader, IT Manager, Digital Transformation, People Leader, prompt engineering,* and category words as skills (*Artificial Intelligence, Full Stack Architecture, API Platforms*).

### Directory Structure
```
app/
├── layout.tsx          # Metadata (SEO, OG, Twitter), Inter font, ThemeProvider
├── page.tsx            # Homepage
├── cv/page.tsx         # Print-optimized CV (A4 @page rules, 2-page layout)
├── globals.css         # Design tokens + base typography
└── api/chat/route.ts   # Chat endpoint

components/
├── sections/           # Homepage sections (render from lib/data/profile.ts)
│   └── AiPractice.tsx  # AI-assisted engineering practice
├── layout/             # Header, Footer, Chat*
├── chat/               # ChatMessage, ChatInput, TypingIndicator
└── ui/                 # Mostly unused shadcn files; the live ones are
                        # ExperienceItem, RoleItem, ProjectCard, SectionHeader,
                        # EducationItem, theme-toggle, tooltip

lib/
├── data/profile.ts     # ← content single source of truth
├── chat-service.ts     # OpenAI singleton, grounded on public/me/summary.txt
├── chat-utils.ts       # Tools + Pushover notifications
├── chat-types.ts
└── utils.ts            # cn()

public/
├── Paulo_Neves_CV.pdf  # Pre-generated, served by the header button
├── PauloNeves.md       # Public markdown CV — keep in sync with profile.ts
└── me/summary.txt      # Chatbot grounding — keep in sync with profile.ts

scripts/generate-pdf.js # Puppeteer PDF generation (CV_URL env override)
```

### Content surfaces that must stay in sync
Changing a fact in `lib/data/profile.ts` covers the homepage and `/cv` automatically. These three are **not** wired to it and drift silently:
- `public/me/summary.txt` — injected verbatim into the chatbot system prompt (`lib/chat-service.ts`). It is the bot's **only** grounding; the `linkedin.txt`/`linkedin.pdf` fallbacks it looks for do not exist. Leave it stale and the bot contradicts the page it sits on.
- `public/PauloNeves.md` — publicly fetchable, the most likely thing to be scraped into an ATS.
- `public/Paulo_Neves_CV.pdf` — regenerate it; JSX changes do not touch it.

### CV print layout
`app/cv/page.tsx` carries its own `<style>` block. Two traps live there:
- **Do not use Tailwind `print:` variants inside that template literal.** `\:` collapses to `:` in a JS string, so `.print\:text-xs` reaches the browser as the invalid selector `.print:text-xs` and is silently dropped. Use the plain semantic classes (`.cv-bullet`, `.cv-meta`, `.cv-role-title`, `.cv-company`, `.cv-summary`) instead.
- **`app/globals.css` applies prose margins to bare elements** (`ul { my-6 ml-6 [&>li]:mt-2 }`, `p { mt-6 }`, `h2 { border-b pb-2 }`). They are neutralized inside `.cv-page`; do not remove that reset or the CV inflates by ~300px per page.

Never reintroduce `text-align: justify` or `hyphens: auto` — they inject real hyphen characters into the PDF text layer, so an ATS reads `ar-chitecture` and misses the keyword.

Verify page fit by measuring in **print media** at the printable box (703×1032px for A4 with a 12mm margin); the screen-only `min-height` reports the wrong number otherwise.

### Chat API (app/api/chat)
- Requires `OPENAI_API_KEY`, `PUSHOVER_USER`, `PUSHOVER_TOKEN` in `.env` (see `.env.example`; never commit `.env`)
- `lib/chat-service.ts` is a singleton; its system prompt is built from `public/me/summary.txt`

### Conventions
- Mobile-first: tap targets ≥ 44px, test at 390px width
- Keep the existing design language (blue-600/blue-800 accents on the CV, `enhanced-card` on the homepage). Do not redesign layout, typography or colors without asking.
