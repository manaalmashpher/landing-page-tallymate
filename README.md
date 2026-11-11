# TallyMate landing page

An owner-focused B2B landing page for TallyMate, built for ITNET AI Task 1 with Next.js App Router, React, TypeScript, Tailwind CSS v4, and Phosphor icons.

Assignment brief: https://itnetai-buildtest.netlify.app/#task1. Product reference: https://tallymate.live/. See `HANDOVER.md` for the required deliverables, audience, section rationale, visual direction, assumptions, unfinished items, confidentiality handling, and AI-tool disclosure. Figma is not applicable because the page was designed in code.

## Local development

Use Node.js 22.x to match the deployment runtime.

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js, normally http://127.0.0.1:3000.

```sh
npm run lint
npm run typecheck
node --test tests/page-motion.test.mjs
npm run build
npm start
```

`npm start` serves the production build. The build uses `next/font` to download and self-host Geist and Lora; the first build needs access to Google's font service. Browser requests do not fetch fonts from Google.

## Page behaviour

- Hero headline: “Ask your books. Get clear answers.” Both lines use Lora at weight 650, without italics, at matching sizes. Container-relative sizing keeps the text within its column on desktop and mobile. Desktop grid columns protect the dashboard width.
- Interactive hero: Sales, Cash & bank, and Stock show fictional metrics and attention panels on mobile and desktop. Ask your books scrolls to the example questions.
- Preview views cycle every five seconds until a tab is selected or focused. Reduced motion disables cycling; hidden browser tabs pause it. Panels reserve the tallest view's height to prevent page shifts when switching.
- The problem illustration drops its four cards in a staggered sequence over 0.72 seconds whenever it re-enters view. Section reveals also replay whenever they re-enter view.
- Hero entrances, scroll reveals, preview transitions, and the subtle green-to-amber background respect reduced motion.
- Section links scroll immediately, using offsets matched to the sticky header so the preceding divider stays beneath it.
- Three selectable example questions update an accessible answer region.
- Three clearly labelled placeholder reviews scroll horizontally in a continuous 28-second loop. Hover or keyboard focus pauses the animation; reduced motion disables autoplay and allows manual scrolling. Soft fades blend both edges into the page, with no divider below the carousel and a tighter gap to the sales section.
- Native details/summary FAQs work without JavaScript. Mobile navigation supports Escape to close.
- Demo enquiry validates name and company, then prepares a mailto link. The visitor opens, reviews, and sends the draft. There is no server-side lead collection or automatic email submission.
- External product and sign-in links point to the real TallyMate service.
- Primary buttons are amber; the header wordmark retains its green styling. Footer attribution reads “Made by Manaal Mashpher”, styled to match adjacent navigation links.

## Deployment

Assignment preview: https://landing-page-tallymate.vercel.app/

Repository: https://github.com/manaalmashpher/landing-page-tallymate

Vercel configuration:

- Root directory: repository root (`./`).
- Framework: Next.js, declared in `vercel.json`.
- Build command: `npm run build`, declared in `vercel.json`.
- Install command and output directory: framework defaults.
- Node.js: 22.x, declared in `package.json`.
- Environment variables: none required.

`vercel.json` applies security headers. Next.js handles routing and build output.

After deployment, verify section navigation, responsive hero sizing, preview switching, card replay, mobile menu, example questions, FAQ, and email drafts. Run Lighthouse against the deployed URL on mobile and desktop; the assignment requires Performance 90+.

Example audit commands (create `artifacts` first):

```sh
npx lighthouse https://landing-page-tallymate.vercel.app/ --chrome-flags="--headless" --output=html --output=json --output-path=./artifacts/mobile
npx lighthouse https://landing-page-tallymate.vercel.app/ --preset=desktop --chrome-flags="--headless" --output=html --output=json --output-path=./artifacts/desktop
node scripts/summarize-lighthouse.mjs artifacts/mobile.report.json artifacts/desktop.report.json
```

The assignment preview deliberately uses `noindex, nofollow`, which affects Lighthouse SEO. Remove this only for an approved public marketing launch. Metadata uses the assignment preview domain for canonical and social URLs; update `src/app/layout.tsx` if the domain changes. Browser/social titles and the generated share image use the tagline “Ask your books. Get clear answers.”

## Latest Lighthouse metrics

Lighthouse 13.6.0 audited the deployed assignment page on mobile and desktop, using simulated throttling.

| Metric | Mobile | Desktop |
| --- | --- | --- |
| Performance | 93 | 100 |
| Accessibility | 99 | 99 |
| Best Practices | 100 | 100 |
| SEO | 63 | 63 |
| Agentic Browsing | 100 | 100 |
| First Contentful Paint | 1.7 s | 0.5 s |
| Largest Contentful Paint | 1.7 s | 0.5 s |
| Total Blocking Time | 270 ms | 20 ms |
| Cumulative Layout Shift | 0 | 0 |
| Speed Index | 2.5 s | 0.8 s |

Both runs meet the assignment's Performance 90+ target. SEO is affected by the intentional noindex setting. These are individual lab measurements, not real-user field data or a guarantee of identical repeat results. Raw reports are excluded from version control.

## Files

- `src/app/page.tsx`: sections and server-rendered copy.
- `src/components/interactive.tsx`: example questions, mobile menu, and demo enquiry.
- `src/components/product-preview.tsx`: stable-height hero views and automatic cycling with manual override.
- `src/components/review-carousel.tsx`: three placeholder reviews and a duplicate set hidden from assistive technology for the continuous scrolling loop.
- `src/components/page-motion.tsx`: progressive reveals, replaying illustration, and reduced-motion handling.
- `src/app/globals.css`: responsive design and styles.
- `src/app/layout.tsx`: fonts and metadata.
- `src/app/opengraph-image.tsx`: generated share image.
- `tests/page-motion.test.mjs`: reveal-controller regression tests, including replay on viewport re-entry.
- `HANDOVER.md`: rationale, assumptions, limitations, and AI disclosure.

## Data, assets, and repository hygiene

All example names, figures, and charts are fictional illustrations. No customer endorsement is claimed. The reviews carousel contains three clearly marked placeholders, scrolling automatically in a continuous loop; hover or keyboard focus pauses it, and reduced motion provides manual scrolling. No confidential assignment screenshots or real business records are included.

The lowercase typographic wordmark is an assignment treatment, not an official replacement brand asset. Icons are from Phosphor; fonts are provided through `next/font`.

Generated Lighthouse HTML reports (`*.report.html`) and `artifacts/` are ignored by Git.
