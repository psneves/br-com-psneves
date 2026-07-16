# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Paulo Neves' personal website — a Next.js application showcasing professional experience with a print-optimized CV page and a pre-generated PDF download. Majority of traffic is mobile; the design system is mobile-first.

## Common Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build production version (TypeScript + ESLint errors FAIL the build)
npm run start        # Start production server
npm run lint         # Run ESLint
npm run generate:pdf # Regenerate public/Paulo_Neves_CV.pdf via Puppeteer (see below)
```

### Regenerating the CV PDF
The "Download PDF"/"Save PDF" buttons serve the static, pre-generated `public/Paulo_Neves_CV.pdf`.
**Whenever content in `lib/data/profile.ts` or the CV layout changes, regenerate it:**
1. `npm run dev` (in one terminal)
2. `npm run generate:pdf` (in another; set `CV_URL` to override the default `http://localhost:3000/cv`)
3. Commit the updated `public/Paulo_Neves_CV.pdf`

## Architecture & Structure

### Framework Stack
- **Next.js 15** App Router, **TypeScript (strict, enforced at build)**, **Tailwind CSS**
- Fonts: **Schibsted Grotesk** (display/body) + **IBM Plex Mono** (metadata) via next/font
- Design system: "blueprint ledger" — warm paper/ink/cobalt light theme, midnight blueprint dark theme; mono labels for dates/indices; tokens in `app/globals.css`
- Theming via next-themes (class strategy); image optimization ENABLED (do not add `unoptimized`)

### Single Source of Truth for Content
**All profile content lives in `lib/data/profile.ts`** (experience, skills, languages, education, certifications, projects, links, summaries). Both the homepage sections AND `app/cv/page.tsx` render from it.
- NEVER hardcode experience/skills/projects content inside components.
- `cvBullets`/`cvTitle`/`cvName` fields hold condensed CV-specific variants.
- HARD RULE: professional experience may be reworded but never invented — no new facts, metrics, or titles.

### Directory Structure
```
app/
├── layout.tsx          # Metadata (SEO, OG, JSON-LD Person schema), fonts, skip link
├── page.tsx            # Homepage (section anchors #about #experience #projects #skills)
├── cv/page.tsx         # Print-optimized CV (A4 @page rules, 2-page layout)
├── cv/layout.tsx       # CV-specific metadata
├── opengraph-image.tsx # Generated OG card (next/og)
├── robots.ts, sitemap.ts
└── api/chat/route.ts   # Chat endpoint (zod-validated, rate-limited)

components/
├── sections/           # Homepage sections (render from lib/data/profile.ts)
├── layout/             # Header, Footer, SectionNav, ScrollToTop, Chat*
├── chat/               # ChatMessage, ChatInput, TypingIndicator
└── ui/                 # Only ACTIVELY USED components (do not re-add unused shadcn files)

lib/
├── data/profile.ts     # ← content single source of truth
├── chat-service.ts     # OpenAI singleton (bounded tool loop, zod-validated tool args)
├── chat-utils.ts       # Tools + Pushover notifications
├── rate-limit.ts       # In-memory token bucket (per-IP, 10 req/min)
├── format.tsx          # emphasize() renders **bold** markers from profile strings
└── utils.ts            # cn()

scripts/generate-pdf.js # Puppeteer PDF generation (CV_URL env override)
```

### Chat API (app/api/chat)
- Requires `OPENAI_API_KEY`, `PUSHOVER_USER`, `PUSHOVER_TOKEN` in `.env` (see `.env.example`; never commit `.env`)
- Request validation: message ≤ 2000 chars; history ≤ 20 entries, roles restricted to user/assistant
- Rate limited per IP (10/min) BEFORE validation; agent loop bounded at 5 iterations, max_tokens 600

### Conventions
- Mobile-first: tap targets ≥ 44px (`min-h-11`), test at 390px width
- `prefers-reduced-motion` must stay honored (block in globals.css); hover transforms behind `@media (hover: hover)`
- Accessibility: skip link in layout, aria-expanded on accordions/chat, role="status" on async indicators
- Keep TypeScript/ESLint build enforcement ON (`next.config.js` has no ignore flags)
