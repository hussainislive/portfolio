# Hussain A Portfolio (Next.js)

Modern personal portfolio built with Next.js App Router, TailwindCSS, Framer Motion, and Lenis smooth scrolling.

## Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Lenis

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Customize Content

Main portfolio content is in:

- `components/portfolio-page.tsx`

Update these arrays to match your real profile:

- `roles`
- `skills`
- `projects`
- `testimonials`
- `socialLinks`

## SEO

- Metadata + Open Graph: `app/layout.tsx`
- Sitemap: `app/sitemap.ts`
- Robots: `app/robots.ts`
- OG image: `public/og-image.svg`

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Deploy with default Next.js settings.

No extra build configuration is required.
