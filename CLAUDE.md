# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PoECalc (poecalc.tools) is a Path of Exile crafting calculator toolkit. Currently features a Vorici Chromatic Calculator with exact probability math. All calculations run client-side. Deployed on Vercel.

## Commands

```bash
npm run dev      # Dev server (port 3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (PostCSS plugin, no tailwind.config — uses CSS-based config in globals.css)
- Vercel deployment
- Path alias: `@/*` → `./src/*`

## Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts: Cinzel, Crimson Text, Fira Code)
│   ├── page.tsx            # Homepage with SEO content, tool cards, FAQ
│   ├── vorici-calculator/  # Vorici calculator page (functional)
│   ├── timeless-jewel-calculator/  # Placeholder ("Coming Soon")
│   ├── about/, privacy/    # Static pages
│   ├── sitemap.ts, robots.ts  # SEO
│   └── globals.css         # PoE theme: custom colors, animations, socket styles
├── components/
│   ├── VoriciCalculator.tsx # Client component — form state + useMemo for calculations
│   ├── Header.tsx, Footer.tsx, Breadcrumb.tsx
└── lib/
    └── vorici.ts           # Core math: multinomial probability, crafting bench costs
```

**Data flow:** User selects socket colors → `calculateVorici()` computes probabilities using PoE's attribute-based formula → compares chromatic spam vs crafting bench recipes → highlights cheapest method.

## Key Design Decisions

- **Client-side only**: No API routes, no server computation. Privacy-first approach.
- **PoE dark fantasy theme**: Custom color palette (gold #af6025, dark backgrounds #080706), gem-styled socket buttons with radial gradients. Defined in `globals.css`, not Tailwind config.
- **SEO-heavy**: JSON-LD structured data (FAQPage, WebApplication, BreadcrumbList), 800+ word homepage content, sitemap, robots.txt, canonical URLs.
- **WWW redirect**: `next.config.ts` has 301 redirect from www.poecalc.tools → poecalc.tools.

## Calculation Logic (src/lib/vorici.ts)

Core formula: `probability = (attribute + 10) / (total_attributes + 30)` per socket. Uses multinomial distribution for exact probability of a specific color combination. Crafting bench recipes have fixed chromatic costs (e.g., "At least 1 Red" = 15 chroms).

## Content Language

All user-facing content is in **English**. The site targets an international PoE player audience.
