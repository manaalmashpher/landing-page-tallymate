# TallyMate landing page handover

## Audience and message

Founders, CEOs, and business owners whose teams use TallyPrime. They want answers and decisions without learning accounting software. The core message is “Your business. The whole picture.” Copy connects records to owner decisions: collecting customer dues, paying suppliers, and reviewing unsold stock.

## Section order

Hero → problem → what you will see → how it works → example questions → trust and security → social-proof placeholder → talk to sales → FAQ → final demo enquiry and footer.

This follows the assignment: establish relevance, make the problem recognisable, demonstrate specific value, explain connection, show the experience, address trust, then support an enquiry. All ten required sections are represented.

## Visual direction

Light, calm, product-led B2B design. Lora display headings pair with Geist interface and body text. The hero headline uses weight 650 on mobile and desktop. Deep green, sage surfaces, amber primary actions, restrained borders, and rounded panels carry the visual language. The hero has a slowly drifting light green-to-amber background. Motion intensity is 5, design variance is 5, and visual density is 4. Hero entrances, section reveals, and preview transitions honor reduced-motion preferences. Layers: header 20, mobile navigation 30, skip link 40.

Product previews are functioning React component illustrations with wholly fictional data, not screenshots of the live app. Sales, Cash & bank, and Stock have the same metrics and attention panels on mobile and desktop; Ask your books scrolls to the example questions on both. Desktop retains the tilted panel. Views cycle every five seconds until a visitor selects or focuses a tab. Automatic cycling pauses in hidden browser tabs and is disabled for reduced motion. Switching views uses a 650 ms eased fade. The page borrows the real product structure without copying its figures or exact appearance. The wordmark is a typographic assignment treatment; replace with an approved asset before a real brand launch.

Below-fold sections use content-visibility to defer layout. Only Tailwind's theme and utility layers are imported; the page has explicit CSS resets. The self-hosted Geist font uses optional display to avoid a late font swap on slow connections.


## Assumptions and decisions

- One English marketing page; product language support is described, not implemented as website localisation.
- Current pricing and a scheduling URL were not supplied. Talk to sales leads to the same enquiry section as Book a demo.
- `info@itnetai.com` is the contact listed in the assignment. An email draft is the initial working enquiry route; no message is sent automatically.
- Booking is a request, not a confirmed appointment. The visitor needs a configured email app or can write directly to the displayed email address.
- No backend, Tally connection, authentication, or AI API is implemented in this marketing site.
- Fictional preview amounts are examples, not measured customer outcomes. Preview views and question examples are separate illustrative snapshots.
- Social proof remains an explicitly labelled placeholder, permitted by the brief.
- Figma was not used. The design was developed in code, so no Figma deliverable applies.
- Assignment preview uses noindex metadata pending approval for a real public marketing launch.

## Outstanding before submission / real launch

- Live preview: https://landing-page-tallymate.vercel.app/. The current deployed URL was audited on 10 November 2026; reports are linked below.
- Latest deployed mobile Lighthouse CLI performance: 96 at 02:10 IST on 10 November 2026. The latest recorded desktop result is 100 from the earlier 01:38 IST PageSpeed run, before the performance optimizations. Conditions and remaining findings are recorded below.
- Confirm the enquiry contact with the lead and replace email drafts with an approved scheduler or lead endpoint if requested.
- Obtain an approved customer story if available; otherwise retain the explicit placeholder.
- Confirm supported TallyPrime versions, access roles, processing location, retention/deletion terms, and final legal documents before stronger claims or onboarding.
- Canonical and social preview metadata now use https://landing-page-tallymate.vercel.app/. Update `src/app/layout.tsx` if the production domain changes.

## AI-tool disclosure

Codex assisted with reading and interpreting the assignment and product references, the implementation plan, copy, visual design, Next.js/React implementation, and verification. Product examples and charts are fictional. No real customer testimonials, confidential business records, or private screenshots were generated or published.

## Historical local verification results (9 November 2026)

Local production build verified on 9 November 2026. These are local measurements, not deployed guarantees.

| Check | Result |
| --- | --- |
| Production build | Passed, including Next.js TypeScript compilation |
| ESLint | Passed without warnings after cleanup |
| Standalone TypeScript | Passed |
| npm audit | Zero reported vulnerabilities after a scoped minimatch override in the lint-tool dependency tree |
| Mobile Lighthouse Performance | 92 |
| Desktop Lighthouse Performance | 100 |
| Lighthouse Accessibility | 100 on mobile and desktop |
| Lighthouse Best Practices | 100 on mobile and desktop |
| Lighthouse SEO | 60; intentional noindex metadata prevents indexing of the assignment preview |
| Mobile LCP / TBT / CLS | 2.6 seconds / 270 ms / 0 |
| Desktop LCP / TBT / CLS | 0.6 seconds / 20 ms / 0 |
| Responsive review | 320, 375, 768, and 1440 CSS-pixel widths checked; no horizontal overflow found |
| Page structure | Exactly ten main sections, one H1, no unresolved section-link targets |
| Product interaction | Stock view and stock/supplier question examples verified |
| FAQ | Native disclosure verified |
| Enquiry | Empty required field rejected; fictional details produce the expected mailto draft; no email sent |
| Keyboard interaction | Tab order, Enter activation of navigation and CTA, question selection, FAQ toggle, form submission to a draft, and Escape focus return verified |

Audits used Lighthouse 13.6.0 with default simulated mobile throttling and the desktop preset, against http://127.0.0.1:3000. Final raw reports, summaries, and screenshots are in the ignored local `artifacts/` directory, with filenames `lighthouse-mobile-release` and `lighthouse-desktop-release`. Use `scripts/summarize-lighthouse.mjs` to extract summaries and screenshots from future reports.

Performance fixes were driven by failed audit runs: contrast corrections, deferred offscreen layout, leaner styling resets, optional font display, and a compact mobile product composition. Section navigation uses immediate scrolling to keep targets stable. Run fresh audits on the hosted URL and repeat the complete keyboard walkthrough before submission.

The assignment preview is live at https://landing-page-tallymate.vercel.app/; the domain was updated after correcting the connected GitHub repository. Vercel configuration is prepared in `vercel.json`, with Node.js 22.x declared in `package.json`. The current deployed audit is recorded below. A complete deployed interaction review remains pending.

## Deployed Lighthouse results

### Latest mobile CLI audit (10 November 2026, 02:10 IST)

The user ran Lighthouse CLI 13.6.0 against `https://landing-page-tallymate.vercel.app/` at 02:10:19 IST on 10 November 2026. This is the latest mobile measurement after the performance optimizations. It used the mobile preset with simulated throttling: 150 ms RTT, approximately 1,638 Kbps throughput, and 4x CPU slowdown.

| Check | Latest mobile CLI |
| --- | --- |
| Performance | 96 |
| Accessibility | 98 |
| Best Practices | 100 |
| SEO | 63 |
| First Contentful Paint | 1.4 s |
| Largest Contentful Paint | 1.4 s |
| Total Blocking Time | 180 ms |
| Cumulative Layout Shift | 0 |
| Speed Index | 3.1 s |

Source: local user-supplied `landing-page-tallymate.vercel.app_2026-11-10_02-10-19.report.html`. The raw HTML remains untracked and is not part of the repository; no hosted PageSpeed link exists for this CLI report.

Compared with the preceding user-supplied mobile CLI report at 01:51 IST, Performance increased from 84 to 96, TBT decreased from 520 ms to 180 ms, and FCP/LCP decreased from 2.1 s to 1.4 s. CLS remained 0; Speed Index increased from 2.8 s to 3.1 s. This is a comparison of individual runs, not proof of a consistently reproducible gain or isolated causality. The latest run meets the 90+ mobile target.

Implementation changes preserve the design: reveal initialization measures only nearby sections and batches geometry reads before animation writes; the existing Geist extended subset containing the rupee symbol is preloaded. CSS, colors, layouts, font families/weights, and animation timings were not changed. The production build, ESLint, TypeScript, and three reveal-controller regression tests passed.

Remaining findings: skipped heading level in the hero preview, intentional indexing block, approximately 55 KiB of unused JavaScript, approximately 14 KiB of legacy JavaScript, render-blocking requests, and the network dependency tree. Forced reflow is no longer listed as a failing insight in this report; this does not establish that every layout cost has been eliminated. Desktop has not been re-audited after these optimizations; its latest recorded result is the earlier PageSpeed score of 100 below.

### Earlier PageSpeed audit (10 November 2026, 01:38 IST)

Google PageSpeed Insights audited the current deployment, `https://landing-page-tallymate.vercel.app/`, on 10 November 2026 at 01:38 IST using Lighthouse 13.6.0. Mobile used an emulated Moto G Power with Slow 4G throttling; desktop used emulated Desktop with custom throttling. These are single initial-page-load lab measurements and may vary. No real-user field data was available.

| Check | Mobile | Desktop |
| --- | --- | --- |
| Performance | 97 | 100 |
| Accessibility | 98 | 98 |
| Best Practices | 100 | 100 |
| SEO | 63 | 63 |
| First Contentful Paint | 0.9 s | 0.3 s |
| Largest Contentful Paint | 0.9 s | 0.3 s |
| Total Blocking Time | 40 ms | 40 ms |
| Cumulative Layout Shift | 0 | 0 |
| Speed Index | 4.5 s | 0.5 s |

Earlier PageSpeed reports: [mobile](https://pagespeed.web.dev/analysis/https-landing-page-tallymate-vercel-app/tash26sc5o?form_factor=mobile) and [desktop](https://pagespeed.web.dev/analysis/https-landing-page-tallymate-vercel-app/tash26sc5o?form_factor=desktop). These superseded the previous deployment's PageSpeed links, but do not contain the later CLI results above.

The 90+ performance target is met in both runs. SEO is reduced by intentional `noindex, nofollow` metadata. Accessibility flags a skipped heading level in the hero product preview: its H3 follows the page H1 without an intervening H2. Remaining performance suggestions include unused JavaScript (53 KiB mobile, 55 KiB desktop), legacy JavaScript (14 KiB), forced reflow, and one long main-thread task. Mobile reports an estimated 120 ms of render-blocking savings. Mobile Speed Index is 4.5 s despite a 0.9 s LCP; these metrics describe different aspects of rendering.

Raw Lighthouse HTML and JSON were not exported from PageSpeed Insights; the hosted report links above provide the audit results. The historical local and user-run CLI measurements in this document refer to a different build or URL and are not a controlled before/after comparison with this audit.

## Historical user-run Lighthouse CLI reports (9 November 2026)

Two further audits of the previous deployment URL (`https://tallymate-landing-page.vercel.app/`) were run on 9 November 2026 using Lighthouse 13.6.0 through the CLI, with simulated throttling. These are separate measurements from PageSpeed Insights.

| Check | Mobile (19:53 IST) | Desktop (19:56 IST) |
| --- | --- | --- |
| Performance | 77 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 60 | 60 |
| First Contentful Paint | 1.0 s | 0.4 s |
| Largest Contentful Paint | 1.0 s | 0.5 s |
| Total Blocking Time | 1,120 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0 |
| Speed Index | 2.0 s | 0.6 s |

Saved HTML reports: [mobile](./tallymate-landing-page.vercel.app_2026-11-09_19-53-51.report.html) and [desktop](./tallymate-landing-page.vercel.app_2026-11-09_19-56-45.report.html).

Mobile emulated a Moto G Power at 412 × 823 CSS pixels, with 4× CPU slowdown and 150 ms simulated network RTT. Desktop used 1350 × 940 CSS pixels, no CPU slowdown, and 40 ms simulated network RTT. Both used an initial navigation with storage reset enabled.

This historical mobile CLI run did not meet the 90+ performance target; its Total Blocking Time was 1,120 ms. The desktop CLI run met the target, and both SEO scores were 60 because indexing was intentionally blocked. The cause of the high mobile blocking time was not established. These runs used a previous deployment and different conditions from the current PageSpeed audit above, so they are not a controlled regression comparison. Retain these historical CLI measurements for context; do not substitute them for the current deployed audit or claim consistently reproducible performance from a single run.
