# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Paulo Neves' personal website — a Next.js application showcasing professional experience with a print-optimized CV page and a pre-generated PDF download. Majority of traffic is mobile; the design system is mobile-first.

The site is **English-only**. There is no i18n setup and no Portuguese version.

## Common Commands

### Development
```bash
npm run dev               # Start development server on http://localhost:3000
npm run build             # Build production version
npm run start             # Start production server
npm run generate:pdf      # Regenerate public/Paulo_Neves_CV.pdf via Puppeteer (see below)
npx tsc --noEmit          # Type check
```

⚠️ **`npm run lint` does not currently work** — there is no ESLint config in the repo, so `next lint` drops into an interactive setup prompt. Use `npx tsc --noEmit` for verification.

⚠️ **The build does NOT enforce types or lint.** `next.config.js` sets `typescript.ignoreBuildErrors`, `eslint.ignoreDuringBuilds` and `images.unoptimized`, all `true`. A green build does not mean a clean type check.

**Type-check baseline: 46 pre-existing errors**, all in unused shadcn components under `components/ui/` plus `hooks/use-toast.ts`. Compare against this number rather than expecting zero:
```bash
npx tsc --noEmit 2>&1 | grep -cE "error TS"   # expect 46
```

### Regenerating the CV PDF
Both download buttons — "Save PDF" in the homepage header and "Download PDF" on `/cv` — serve the same static, pre-generated `public/Paulo_Neves_CV.pdf`. Do not wire either of them to `window.print()`: browser printing applies its own margins and stamps header/footer chrome (URL, date, page numbers) onto the output, so the site would ship two visibly different PDFs.

**Whenever content in `lib/data/profile.ts` or the CV layout changes, regenerate it:**
1. `npm run dev` (in one terminal)
2. `npm run generate:pdf` (in another; set `CV_URL` to override the default `http://localhost:3000/cv`)
3. Commit the updated `public/Paulo_Neves_CV.pdf`

`scripts/generate-pdf.js` measures each `.cv-page` against the A4 printable box in print media and **exits non-zero without writing** if content overflows. Do not work around that check by raising the threshold — trim content in the data file behind the page instead.

Both ends are overridable — `CV_URL` for the page, `CV_OUTPUT` for the file (resolved from the repo root). To measure a page without touching a committed PDF, point `CV_OUTPUT` at a scratch path. The dev server falls back to port 3001 when 3000 is taken, so pass `CV_URL` when that happens.

**Current page budget** (703×1032px printable box), so you know how much room an edit has:

| Page | Height | Headroom |
|---|---|---|
| 1 | 1025px | **7px** |
| 2 | 727px | 305px |

**Page 1 is full.** 7px is under half a line of body copy (`.cv-bullet` is 11px at 1.4 line-height ≈ 15px), so essentially any addition to page 1 will overflow and the generator will refuse to write. Recover space by trimming copy, or move a role to page 2 with `PAGE_1_ROLE_COUNT` in `app/cv/page.tsx`.

**Height is not a content check.** Swapping a 70-character title for a 30-character one leaves page 1 at exactly 1025px — the overflow guard is blind to wrong content. When a change is supposed to preserve the rendered output, verify it:
```bash
CV_OUTPUT=/tmp/candidate.pdf node scripts/generate-pdf.js
diff <(pdftotext -layout /tmp/candidate.pdf -) <(pdftotext -layout public/Paulo_Neves_CV.pdf -)
```

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
The homepage and `/cv` target **product and service ownership where security, digital product and AI delivery meet** — including senior IC/principal tracks, not only people-management roles. Content is built around four claims, and a line that supports none of them does not belong:
1. Five years in Information Security & Risk Management (2014–2019) — application security assessments, SOX testing, security awareness, risk acknowledgement
2. Product ownership of a real digital experience — the Innovative Medicine HCP portal on Drupal across LATAM and CENCA
3. AI taken to production with a measured outcome — US$1.2M cost avoidance in the first seven months of 2026
4. Still hands-on — designs architecture and writes the production systems

**This replaced an Engineering-Manager-at-a-product-company positioning in Aug 2026.** If you find guidance anywhere in the repo that contradicts the four claims above, it is a leftover from that and should be corrected, not followed.

Vocabulary deliberately retired: *sponsor, stakeholder management, solution architecture, Technology leader, IT Manager, Digital Transformation, People Leader, prompt engineering,* and unfalsifiable category words as skills (*Artificial Intelligence, Full Stack Architecture, API Platforms*).

### Redaction policy — THIS REPO IS PUBLIC ON GITHUB
`lib/data/profile.ts` is published five ways: the homepage, `/cv`, `public/Paulo_Neves_CV.pdf`, `public/PauloNeves.md`, and `public/me/summary.txt` — which is both the chatbot's grounding and, being under `public/`, a world-readable file in its own right.

Never put in `profile.ts` (or any tracked file, **including code comments**):
- Internal J&J system, program or project names, or descriptions specific enough to identify one
- Internal financial figures — spend, budget, portfolio value, per-area breakdowns
- Internal usage metrics — user counts, traffic, volumes
- Security findings attributable to a named third party

A comment explaining *why* a figure was omitted must not restate the figure. Guardrails written into `public/me/summary.txt` must stay generic: it is public, so a specific "do not mention X" instruction publishes X.

### Directory Structure
```
app/
├── layout.tsx           # Metadata (SEO, OG, Twitter), Inter font, ThemeProvider
├── page.tsx             # Homepage
├── cv/page.tsx          # Print-optimized CV (2-page layout, composed from CvShell)
├── globals.css          # Design tokens + base typography
└── api/chat/route.ts    # Chat endpoint

components/
├── cv/CvShell.tsx       # ← ALL print CSS + shared CV primitives. Both routes
│                        #   import it; never copy the <style> block out of it.
├── sections/            # Homepage sections (render from lib/data/profile.ts)
│   └── AiPractice.tsx   # AI-assisted engineering practice
├── layout/              # Header, Footer, Chat*
├── chat/                # ChatMessage, ChatInput, TypingIndicator
└── ui/                  # Mostly unused shadcn files; the live ones are
                         # ExperienceItem, RoleItem, ProjectCard, SectionHeader,
                         # EducationItem, theme-toggle, tooltip

lib/
├── data/profile.ts      # ← content single source of truth
├── chat-service.ts      # OpenAI singleton, grounded on public/me/summary.txt
├── chat-utils.ts        # Tools + Pushover notifications
├── chat-types.ts
└── utils.ts             # cn()

public/
├── Paulo_Neves_CV.pdf   # Pre-generated, served by the header button
├── PauloNeves.md        # Public markdown CV — keep in sync with profile.ts
└── me/summary.txt       # Chatbot grounding — keep in sync with profile.ts

docs/                    # Working files. docs/*.pdf is gitignored.

scripts/generate-pdf.js  # Puppeteer PDF generation (CV_URL / CV_OUTPUT overrides)
```

### Content surfaces that must stay in sync
Changing a fact in `lib/data/profile.ts` covers the homepage and `/cv` automatically. These three are **not** wired to it and drift silently:
- `public/me/summary.txt` — injected verbatim into the chatbot system prompt (`lib/chat-service.ts`). It is the bot's **only** grounding; the `linkedin.txt`/`linkedin.pdf` fallbacks it looks for do not exist. Leave it stale and the bot contradicts the page it sits on.
- `public/PauloNeves.md` — publicly fetchable, the most likely thing to be scraped into an ATS.
- `public/Paulo_Neves_CV.pdf` — regenerate it; JSX changes do not touch it.

### CV print layout
**`components/cv/CvShell.tsx` owns every print rule, for every CV route.** `CvStyles` is the single `<style>` block; the routes only compose sections. Do not copy that block into a route — a second copy is a second chance to re-break the two traps in it:
- **Do not use Tailwind `print:` variants inside that template literal.** `\:` collapses to `:` in a JS string, so `.print\:text-xs` reaches the browser as the invalid selector `.print:text-xs` and is silently dropped. Use the plain semantic classes (`.cv-bullet`, `.cv-meta`, `.cv-role-title`, `.cv-company`, `.cv-summary`) instead.
- **`app/globals.css` applies prose margins to bare elements** (`ul { my-6 ml-6 [&>li]:mt-2 }`, `p { mt-6 }`, `h2 { border-b pb-2 }`). They are neutralized inside `.cv-page`; do not remove that reset or the CV inflates by ~300px per page.

The routes compose their own pages rather than driving a layout config, on purpose: the variants reorder and re-weight sections deliberately, and that difference is the reason a variant exists. Shared *chrome* is what must not be duplicated, not the composition.

Never reintroduce `text-align: justify` or `hyphens: auto` — they inject real hyphen characters into the PDF text layer, so an ATS reads `ar-chitecture` and misses the keyword.

Verify page fit by measuring in **print media** at the printable box (703×1032px for A4 with a 12mm margin); the screen-only `min-height` reports the wrong number otherwise.

### Chat API (app/api/chat)
- Requires `OPENAI_API_KEY`, `PUSHOVER_USER`, `PUSHOVER_TOKEN` in `.env` (see `.env.example`; never commit `.env`)
- `lib/chat-service.ts` is a singleton; its system prompt is built from `public/me/summary.txt`

### Conventions
- Mobile-first: tap targets ≥ 44px, test at 390px width
- Keep the existing design language (blue-600/blue-800 accents on the CV, `enhanced-card` on the homepage). Do not redesign layout, typography or colors without asking.
