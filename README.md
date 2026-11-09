# TallyMate landing page

ITNET AI Task 1: an owner-focused B2B landing page for TallyMate. Built with Next.js App Router, React, TypeScript, Tailwind CSS, and Phosphor icons.

## Local development

Use Node.js 22.x to match the deployment runtime.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Next.js, normally http://127.0.0.1:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serves the production build. The build uses `next/font` to download and self-host Geist; the first build needs access to Google's font service. Browser requests do not fetch the font from Google.

## Page behaviour

- Interactive hero: Overview, Cash & bank, and Stock views use fictional example data.
- Three selectable example questions update an accessible answer region.
- Native details/summary FAQ works without JavaScript.
- Mobile navigation supports Escape to close.
- Demo enquiry validates name and company, then prepares a mailto link. The visitor must open, review, and send the draft themselves. There is no server-side lead collection or simulated submission success.
- External product and sign-in links point to the real TallyMate service.

## Deployment

Live assignment preview: https://landing-page-tallymate.vercel.app/

Vercel is the selected host. Import https://github.com/manaalmashpher/landing-page-tallymate as a new Vercel project.

- Root directory: repository root (`./`).
- Framework: Next.js, declared in `vercel.json`.
- Build command: `npm run build`, declared in `vercel.json`.
- Install command and output directory: leave at the framework defaults.
- Node.js: 22.x, declared in `package.json`.
- Environment variables: none required for this implementation.

`vercel.json` also applies the security headers to Vercel responses. Next.js handles routing and build output automatically.

After deployment, verify the URL, product links, mobile menu, question examples, FAQ, and email-draft route. Run Lighthouse against the deployed production URL on mobile and desktop; the assignment requires performance 90+. Local measurements do not establish deployed performance.

Example audit commands (create `artifacts` first):

```sh
npx lighthouse http://127.0.0.1:3000 --chrome-flags="--headless" --output=html --output=json --output-path=./artifacts/mobile
npx lighthouse http://127.0.0.1:3000 --preset=desktop --chrome-flags="--headless" --output=html --output=json --output-path=./artifacts/desktop
node scripts/summarize-lighthouse.mjs artifacts/mobile.report.json artifacts/desktop.report.json
```

The assignment preview deliberately sends `noindex, nofollow` through metadata, which lowers the Lighthouse SEO score. Remove that only when turning this into an approved production marketing site. Metadata uses https://landing-page-tallymate.vercel.app/ as the canonical URL and base for social preview URLs. Update `src/app/layout.tsx` if the production domain changes.

## Files

- `src/app/page.tsx`: page sections and server-rendered content.
- `src/components/interactive.tsx`: interactive product examples, mobile menu, and demo enquiry.
- `src/app/globals.css`: responsive design system and styles; Tailwind v4 is available.
- `src/app/layout.tsx`: fonts and page metadata.
- `src/app/opengraph-image.tsx`: generated share image.
- `HANDOVER.md`: design rationale, assumptions, sources, limitations, and AI disclosure.

## Data and assets

No confidential assignment screenshots or real business records are included. All example names, figures, and charts were authored as fictional illustrations. No customer endorsement is claimed. The customer-story slot is visibly marked as a placeholder.

The lowercase typographic wordmark is an assignment design treatment, not a replacement official brand asset. Icons are from Phosphor. Geist is distributed through `next/font`.
