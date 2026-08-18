# songk.xyz

Personal portfolio site for Eunsong Koh. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Fonts are Archivo and JetBrains Mono, loaded via `next/font/google`. Dark/light theming is handled by `next-themes` (dark by default).

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The page auto-updates as you edit files under `src/`.

## Structure

- `src/app/page.tsx` — page layout and section order
- `src/lib/data.ts` — all site content (experience, about, contact)
- `src/components/sections/` — Experience, About, Contact section components
- `src/components/layout/` — Navbar, Footer
- `src/components/ui/` — shared UI primitives (Section wrapper, ScrollReveal, ThemeToggle)

## Deploy

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
