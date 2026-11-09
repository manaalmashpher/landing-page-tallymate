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

`npm start` serves the production build. The build uses `next/font` to download and self-host Geist and Lora; the first build needs access to Google's font service. Browser requests do not fetch the font from Google.

## Page behaviour

- Interactive hero: Sales, Cash & bank, and Stock views use fictional data, with the same content on mobile and desktop. Ask your books scrolls to the example questions on both.
- Preview views cycle every five seconds until a tab is selected or focused. Reduced motion disables cycling; hidden browser tabs pause it.
- Lora hero headings use the same 650 weight on mobile and desktop. Hero entrances, scroll reveals, preview transitions, and a subtle green-to-amber background respect reduced motion.
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
npx lighthouse https://landing-page-tallymate.vercel.app/ --chrome-flags="--headless" --output=html --output=json --output-path=./artifacts/mobile
npx lighthouse https://landing-page-tallymate.vercel.app/ --preset=desktop --chrome-flags="--headless" --output=html --output=json --output-path=./artifacts/desktop
node scripts/summarize-lighthouse.mjs artifacts/mobile.report.json artifacts/desktop.report.json
```

The assignment preview deliberately sends `noindex, nofollow` through metadata, which lowers the Lighthouse SEO score. Remove that only when turning this into an approved production marketing site. Metadata uses https://landing-page-tallymate.vercel.app/ as the canonical URL and base for social preview URLs. Update `src/app/layout.tsx` if the production domain changes.

## Latest deployed Lighthouse audit

Google PageSpeed Insights, Lighthouse 13.6.0, 10 November 2026 at 01:38 IST:

| Category | Mobile | Desktop |
| --- | --- | --- |
| Performance | 97 | 100 |
| Accessibility | 98 | 98 |
| Best Practices | 100 | 100 |
| SEO | 63 | 63 |

Reports: [mobile](https://pagespeed.web.dev/analysis/https-landing-page-tallymate-vercel-app/tash26sc5o?form_factor=mobile) and [desktop](https://pagespeed.web.dev/analysis/https-landing-page-tallymate-vercel-app/tash26sc5o?form_factor=desktop).

Both runs meet the 90+ performance target. Accessibility flags a skipped heading level in the hero preview. SEO is reduced by intentional `noindex, nofollow`. These are single-run lab results; no real-user field data was available. See `HANDOVER.md` for metrics, findings, and historical measurements.

## Files

- `src/app/page.tsx`: page sections and server-rendered content.
- `src/components/interactive.tsx`: example questions, mobile menu, and demo enquiry.
- `src/components/product-preview.tsx`: consistent mobile/desktop hero views and automatic cycling with manual override.
- `src/components/page-motion.tsx`: progressive scroll reveals and reduced-motion handling.
- `src/app/globals.css`: responsive design system and styles; Tailwind v4 is available.
- `src/app/layout.tsx`: fonts and page metadata.
- `src/app/opengraph-image.tsx`: generated share image.
- `HANDOVER.md`: design rationale, assumptions, sources, limitations, and AI disclosure.

## Data and assets

No confidential assignment screenshots or real business records are included. All example names, figures, and charts were authored as fictional illustrations. No customer endorsement is claimed. The customer-story slot is visibly marked as a placeholder.

The lowercase typographic wordmark is an assignment design treatment, not a replacement official brand asset. Icons are from Phosphor. Geist and Lora are distributed through `next/font`.
