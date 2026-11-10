# TallyMate landing page handover

## Assignment and deliverables

ITNET AI Task 1: TallyMate B2B landing page (UI). Owner: Manaal Mashpher. Due: Wednesday, 11 November 2026, followed by a team walkthrough after submission.

- Assignment brief: https://itnetai-buildtest.netlify.app/#task1
- Product reference: https://tallymate.live/
- Live URL: https://landing-page-tallymate.vercel.app/
- GitHub repository: https://github.com/manaalmashpher/landing-page-tallymate
- Setup and build instructions: `README.md`.
- Short handover, assumptions, and unfinished items: this document.

## Audience and message

Founders, CEOs, and business owners whose teams use TallyPrime. They want to understand their business without learning accounting software or waiting for reports.

The visible hero message is “Ask your books. Get clear answers.” Supporting copy connects the product to customer dues, supplier bills, unsold stock, and questions in plain language.

## Section order

Hero → problem → what you will see → how it works → example questions → trust and security → social-proof placeholder → talk to sales → FAQ → final demo enquiry and footer.

The page establishes relevance, illustrates the problem, demonstrates value, explains connection, addresses trust, and supports an enquiry. All ten required sections are represented.

| Required section | Implementation and purpose |
| --- | --- |
| Hero | Owner-focused headline, short description, Book a demo CTA, and interactive product illustration establish the value immediately. |
| Problem | Explains dependence on prepared reports and incomplete visibility without blaming the accounts team. |
| What you will see | Customer dues, bills, unsold stock, and business patterns connect figures to owner decisions. |
| How it works | Connect Tally, see what is happening, and ask questions explain the workflow in three steps. |
| Product demo / example questions | Selectable fictional answers make the experience tangible before asking for an enquiry. |
| Trust and security | Read-only access, freshness, connection options, and access/data-handling questions address objections without inventing security or compatibility guarantees. |
| Social proof | A horizontal carousel of three explicitly marked placeholder reviews avoids fabricated endorsements. |
| Pricing / talk to sales | Invites a discussion of setup and pricing rather than inventing a price. |
| FAQ | Answers common product, connection, freshness, access, and pricing questions. |
| Final CTA and footer | Repeats the enquiry route and provides useful navigation and attribution. |

The implementation uses the preferred Next.js and Tailwind stack and Vercel hosting. Copy is specific to the owner audience, avoids accounting jargon, and contains no lorem ipsum; the social-proof placeholder is intentional and permitted by the brief.

## Visual direction and responsive layout

Light, calm B2B design with Lora display headings and Geist body/interface text. Deep green, sage surfaces, amber primary buttons, restrained borders, and rounded panels carry the visual language. The hero has a subtle drifting green-to-amber background.

Both hero lines use Lora at weight 650 without italics and at matching sizes. Desktop above 900px uses 11.5cqi within the copy column; mobile up to 600px uses 12.5cqi. The intermediate stacked layout retains its responsive headline sizing. Desktop grid columns use zero minimum widths so the headline cannot squeeze the dashboard. The mobile headline remains two single-line sentences.

The header wordmark retains its original green styling. Footer attribution is “Made by Manaal Mashpher”, rendered as plain text with the same typography as adjacent navigation links.

## Interaction and motion

Product previews are React illustrations with wholly fictional data, not screenshots of the live app. Sales, Cash & bank, and Stock expose the same metrics on mobile and desktop. Ask your books scrolls to the example questions; desktop retains a tilted panel.

Views cycle every five seconds until a visitor selects or focuses a preview tab. Cycling pauses in hidden browser tabs and is disabled for reduced motion. Switching views uses a 650 ms eased fade. All three panels share a grid area; hidden, inert panels reserve the tallest height without exposing duplicate content to assistive technology. This prevents preview changes from shifting the page.

The problem illustration drops its four existing cards one by one: 420 ms per drop, staggered by 100 ms, completing in 720 ms. It replays each time it re-enters view. All section reveals also replay when they re-enter view. Reduced motion leaves the illustration static and disables entrance motion.

Section links scroll immediately with offsets matched to the sticky header, hiding the previous divider. Mobile navigation closes on link selection or Escape. Three example questions update an accessible answer region, and native details/summary elements provide FAQs.

The reviews carousel contains three explicitly labelled placeholders, scrolling horizontally in a continuous 28-second CSS animation. A duplicate set makes the loop seamless and is hidden from assistive technology. Hover or keyboard focus pauses the loop; reduced-motion preferences disable autoplay and allow manual horizontal scrolling. Cards are 350px wide on desktop and 280px on mobile. Soft fades blend the carousel edges into the page instead of abruptly clipping cards. The divider below the carousel is removed, and reduced bottom padding plus tighter sales-section top padding bring the next section closer.

Below-fold sections use content-visibility to defer layout. Reveal initialization measures nearby sections and batches geometry reads before style writes. Only Tailwind theme and utility layers are imported; explicit CSS resets style the page. Geist uses optional font display to avoid a late swap on slow connections. Layers: header 20, mobile navigation 30, skip link 40.

## Enquiry route, assumptions, and unfinished items

The demo form validates name and company, then prepares an email draft to `info@itnetai.com`. Visitors must open, review, and send it themselves. A configured email app is required, or visitors can write directly to the displayed address. Booking is a request, not a confirmed appointment.

- One English marketing page; product language support is described, not implemented as website localisation.
- No backend, Tally connection, authentication, or AI API is implemented here.
- Current pricing and a scheduler were not supplied. Talk to sales and Book a demo lead to the enquiry section.
- Preview views and example answers are separate fictional snapshots, not customer outcomes.
- Social proof uses three explicitly labelled placeholder reviews in a horizontally scrolling carousel, with continuous automatic scrolling, pause on hover/focus, and manual scrolling for reduced motion.
- The wordmark is an assignment treatment.
- The assignment preview uses noindex metadata.

## Deployment and release review

Preview: https://landing-page-tallymate.vercel.app/

Vercel uses `vercel.json` for the Next.js build and security headers. Node.js 22.x is declared in `package.json`; no environment variables are required. See README for setup and audit commands.

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

## AI-tool disclosure

Codex assisted with planning, drafting and revising copy, visual design, Next.js/React implementation, documentation, and verification. Product examples and charts are fictional. No real customer testimonials, confidential business records, or private screenshots were generated or published.
