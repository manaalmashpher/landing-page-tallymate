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

## Product sources reviewed on 9 November 2026

- Assignment: https://itnetai-buildtest.netlify.app/#task1
- Public product information: https://tallymate.live/
- Public product connection explanation: https://tallymate.live/#how-heading
- User-opened demo: dashboard, customer dues, stock, insights, and chat.
- Privacy draft reviewed: https://tallymate.live/privacy

The public homepage confirms read-only behaviour, checked figures, multilingual questions, a connector for PC/server TallyPrime, and an add-on for Tally Cloud Access. The cloud route sends a copy of the books; the page deliberately does not claim all data stays on the user's computer. Freshness depends on the connection and available books.

The privacy page is explicitly marked as a draft with placeholders and facts to confirm. No draft legal interpretation, retention guarantee, security certification, or compliance assertion has been promoted into marketing copy.

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

- Deploy on Vercel or Netlify and add the live URL to this document.
- Measure deployed Lighthouse performance on mobile and desktop and retain reports; target 90+.
- Confirm the enquiry contact with the lead and replace email drafts with an approved scheduler or lead endpoint if requested.
- Obtain an approved customer story if available; otherwise retain the explicit placeholder.
- Confirm supported TallyPrime versions, access roles, processing location, retention/deletion terms, and final legal documents before stronger claims or onboarding.
- Set canonical URL after hosting is known. MetadataBase already reads the deployment URL variables supplied by Netlify or Vercel, with a localhost fallback.

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

Deployment remains pending. Netlify configuration is prepared; add the hosted URL and its verification results before submission.
