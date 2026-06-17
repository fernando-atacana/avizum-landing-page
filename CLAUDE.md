# avizum-landing-page — Specialist Context

## Purpose
Marketing landing page for Avizum — Atacana's AI-powered competitive intelligence platform (AICI). Targets B2B pharma/healthcare customers, collects leads via AWeber waitlist signup.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.2
- **Styling**: Tailwind CSS 3.3 with custom color palette
- **Animation**: Framer Motion 10
- **Runtime**: React 18
- **Deploy**: Vercel (implicit, no CI/CD pipeline configured)

## How to Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Key Directories
```
app/                        # Next.js App Router pages
├── layout.tsx              # Root layout, metadata, favicon
├── page.tsx                # Home page
├── globals.css             # Global styles + custom scrollbars
├── about/page.tsx
├── blog/page.tsx
├── contact/page.tsx
└── waitlist/confirmed/page.tsx   # Post-signup confirmation

components/
├── Navigation.tsx          # Fixed navbar, scroll-aware (semi-transparent on scroll)
├── Hero.tsx                # Hero: animated gradient text, floating particles, CTA
├── AIVisualization.tsx     # SVG neural network animation (desktop only)
├── WaitlistModal.tsx       # AWeber form modal (6 fields, client-side validation)
├── ContactModal.tsx        # Contact info modal
├── Features.tsx            # 6-feature grid
├── Benefits.tsx            # 4-benefit cards with metrics
├── UseCases.tsx            # 4 use-case cards
├── CTA.tsx                 # Call-to-action section
└── Footer.tsx

public/
├── avizum-logo.png / avizum-logo-white-bg.png / avizum-logo-transparent.png
└── favicon.svg / favicon.png
```

## Pages & Routes
| Route | Purpose |
|---|---|
| `/` | Home — Hero + Navigation + Footer |
| `/about` | Company/mission |
| `/blog` | Blog listing (3 hardcoded sample posts, no dynamic routes) |
| `/contact` | Contact info + ContactModal |
| `/waitlist/confirmed` | Post-AWeber-form success page |

## AWeber Integration (WaitlistModal)
- Form POSTs to `https://www.aweber.com/scripts/addlead.pl`
- Fields: First Name, Last Name, Email, Phone, Company Website, Job Title
- Uses AWeber field naming: `name (awf_first)`, `custom Phone Number`, etc.
- On success → redirects to `/waitlist/confirmed`
- All validation is client-side (email regex, phone sanitization, min length)

## Tailwind Theme
Custom colors in `tailwind.config.js`:
- **Primary** (blue, 50–900): `#f0f9ff` → `#0c4a6e`
- **Accent** (purple, 50–900): `#fdf4ff` → `#701a75`

Custom animations:
- `gradient` — 8s gradient shift (used for text effects)
- `float` — 6s translateY -20px oscillation

## Conventions
- All interactive components use `'use client'` directive
- Home page is dark (`bg-gray-900`); other pages are light (`bg-white`) — inconsistent by design
- Framer Motion used for: `whileInView`, `whileHover`, `AnimatePresence` exit animations
- Path alias `@/*` → project root (tsconfig)
- Source maps disabled in production builds

## Gotchas
- Blog `/blog/[slug]` dynamic route **not implemented** — sample post links are dead
- Contact page phone/address are **placeholders** — not real
- `Features`, `Benefits`, `UseCases`, `CTA` components exist but are **not imported** into home page (planned)
- AWeber field IDs are hardcoded in `WaitlistModal.tsx`
- No backend or API routes — fully client-side
- App ID is `com.example.voice_ai_app` placeholder on mobile builds
