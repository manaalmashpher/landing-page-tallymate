# TallyMate landing page handover

## Audience and message

Founders, CEOs, and business owners whose teams use TallyPrime. They want answers and decisions without learning accounting software. The core message is “Your business. The whole picture.” Copy connects records to owner decisions: collecting customer dues, paying suppliers, and reviewing unsold stock.

## Section order

Hero → problem → what you will see → how it works → example questions → trust and security → social-proof placeholder → talk to sales → FAQ → final demo enquiry and footer.

This follows the assignment: establish relevance, make the problem recognisable, demonstrate specific value, explain connection, show the experience, address trust, then support an enquiry. All ten required sections are represented.

## Visual direction

Light, calm, product-led B2B design. Geist typography, a deep green accent, sage surfaces, restrained borders, and varied layouts. The design stays light in accordance with the agreed plan. Consistent radii: 16px panels, 8px buttons, smaller internal product elements. Motion intensity is 3: interaction feedback rather than automatic animation. Design variance is 5 and visual density is 4. Layers: header 20, mobile navigation 30, skip link 40.

Product previews are functioning React component illustrations with selectable views and wholly fictional data. They are not screenshots of the live app and are labelled accordingly. Mobile uses a compact view with readable figures and horizontal view controls; the desktop chart is omitted on narrow screens. The page does not copy confidential reference screenshots. The wordmark is a typographic assignment treatment; replace with an approved asset before a real brand launch.

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

- Live preview: https://landing-page-tallymate.vercel.app/ (updated after correcting the connected GitHub repository). Publish the latest local canonical metadata changes through Vercel.
- Deployed Lighthouse performance target achieved on 9 November 2026: 99 mobile and 100 desktop. Report links and conditions are recorded below.
- Confirm the enquiry contact with the lead and replace email drafts with an approved scheduler or lead endpoint if requested.
- Obtain an approved customer story if available; otherwise retain the explicit placeholder.
- Confirm supported TallyPrime versions, access roles, processing location, retention/deletion terms, and final legal documents before stronger claims or onboarding.
- Canonical and social preview metadata now use https://landing-page-tallymate.vercel.app/. Update `src/app/layout.tsx` if the production domain changes.

## AI-tool disclosure

Codex assisted with reading and interpreting the assignment and product references, the implementation plan, copy, visual design, Next.js/React implementation, and verification. Product examples and charts are fictional. No real customer testimonials, confidential business records, or private screenshots were generated or published.

## Verification results

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

The assignment preview is live at https://landing-page-tallymate.vercel.app/; the domain was updated after correcting the connected GitHub repository. Vercel configuration is prepared in `vercel.json`, with Node.js 22.x declared in `package.json`. The latest local configuration and canonical metadata changes still need to be published. A complete deployed interaction review remains pending.

## Deployed Lighthouse results

Historical audit: these results and report links refer to the previous deployment, `https://tallymate-landing-page.vercel.app/`, not the newly connected production domain. Google PageSpeed Insights audited that URL on 9 November 2026 at 19:42 IST using Lighthouse 13.6.0. Mobile used an emulated Moto G Power with Slow 4G throttling; desktop used emulated Desktop with custom throttling. These are single initial-page-load lab measurements and may vary. PageSpeed Insights has no real-user field data for this site yet.

| Check | Mobile | Desktop |
| --- | --- | --- |
| Performance | 99 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 60 | 60 |
| First Contentful Paint | 0.9 s | 0.3 s |
| Largest Contentful Paint | 0.9 s | 0.3 s |
| Total Blocking Time | 30 ms | 60 ms |
| Cumulative Layout Shift | 0 | 0 |
| Speed Index | 3.6 s | 0.4 s |

Reports: [mobile](https://pagespeed.web.dev/analysis/https-tallymate-landing-page-vercel-app/uml3lzq389?form_factor=mobile) and [desktop](https://pagespeed.web.dev/analysis/https-tallymate-landing-page-vercel-app/uml3lzq389?form_factor=desktop). SEO reports the expected indexing block from intentional `noindex` metadata. Remaining optimisation suggestions include unused JavaScript (55 KiB) and legacy JavaScript (14 KiB); mobile also reports an estimated 110 ms of render-blocking savings. The deployed performance requirement of 90+ is met on both form factors. Local scores were 92 mobile and 100 desktop, but the environments differ, so this is not a controlled before/after comparison.

Raw Lighthouse HTML and JSON were not exported from PageSpeed Insights; the hosted report links above provide the audit results.

## User-run Lighthouse CLI reports

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

The mobile CLI result does not meet the 90+ performance target, despite the earlier PageSpeed Insights score of 99. Its main measured difference is higher Total Blocking Time (1,120 ms versus 30 ms). The cause has not been established; differences in the host environment and run conditions mean these scores should not be treated as a controlled regression comparison. Desktop still meets the target. SEO remains 60 because indexing is intentionally blocked. Retain both sets of results; investigate the mobile blocking time before claiming consistently reproducible 90+ mobile performance.
