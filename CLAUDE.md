# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Paulo Neves' personal website - a Next.js application showcasing professional experience and resume with PDF download functionality. The project uses modern web technologies and follows a clean, professional design.

## Common Commands

### Development
```bash
npm run dev     # Start development server on http://localhost:3000
npm run build   # Build production version
npm run start   # Start production server
npm run lint    # Run ESLint
```

### Dependencies
```bash
npm install     # Install dependencies (package-lock.json is used, not pnpm)
```

## Architecture & Structure

### Framework Stack
- **Next.js 15.4.2** with App Router (`experimental.appDir: true`)
- **TypeScript** with relaxed build settings (`ignoreBuildErrors: true`)
- **Tailwind CSS** for styling with custom gradients
- **Shadcn/ui** component library (extensive UI components in `components/ui/`)

### Directory Structure
```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with metadata and Inter font
├── page.tsx           # Homepage
├── cv/page.tsx        # CV/Resume page
└── globals.css        # Global styles

components/
├── sections/          # Content sections (About, Skills, Experience, etc.)
├── ui/               # Shadcn/ui components (50+ components)
└── layout/           # Header, Footer components

lib/
└── utils.ts          # Utility functions (likely Tailwind utilities)

hooks/
├── use-mobile.tsx    # Mobile detection hook
└── use-toast.ts      # Toast notifications

types/
└── html2pdf.d.ts     # Type definitions for PDF generation
```

### Key Features & Dependencies
- **PDF Generation**: Uses `html2pdf.js`, `jspdf`, and `html2canvas` for CV download
- **UI Components**: Comprehensive Radix UI component set via Shadcn/ui
- **Icons**: Lucide React for iconography
- **Forms**: React Hook Form with Zod validation
- **Theming**: Next-themes for dark/light mode support
- **Charts**: Recharts for data visualization
- **Notifications**: Sonner for toast notifications

### Configuration Notes
- ESLint and TypeScript errors are ignored during builds
- Images are unoptimized (`images.unoptimized: true`)
- Uses Inter font with specific weights (300, 400, 500, 600)
- Tailwind configured with custom gradient utilities
- Component aliases set up via `components.json` for Shadcn/ui

### Content Structure
The website appears to be a professional portfolio with sections for:
- About/Personal information
- Work experience
- Education
- Skills and certifications
- Personal projects
- Languages

### Development Patterns
- Uses App Router pattern with TypeScript
- Component-based architecture with separation of UI and content components
- Custom components for specific resume elements (ExperienceItem, EducationItem, etc.)
- Extensive use of Shadcn/ui for consistent styling
- Professional metadata setup for SEO optimization