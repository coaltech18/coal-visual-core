# Coaltech local revamp — implementation notes

Implemented 27 September 2026 following the content brief and the owner's instruction to continue implementation.

## Confirmed scope

The owner confirmed AI graphic design, AI videos/reels, website design and hosting services. These now lead the homepage and dedicated service pages. AI marketing is presented as creative production; the site does not promise paid-media management, automated publishing, lead guarantees or measured campaign outcomes.

This confirmation supersedes questions about whether these core services are offered in OWNER_INPUT_REQUIRED.md. Exact packages, delivery times, project attribution, testimonials, team details and hosting terms still require owner facts before publication.

## What changed

- New homepage narrative, early project proof, compact static Co + Al signature and service links.
- Distinct website and AI creative service content, plus preserved application and social service routes.
- Four project records rewritten around observable interface content; unsupported years, results and role claims removed.
- Responsive editorial layout; native scrolling, no blocking intro, no added libraries or tracking.
- In-flow mobile navigation with Escape handling, focus return and active-page semantics.
- Contact form checks both HTTP status and the PHP JSON contract, times out, prevents concurrent submissions, preserves failed enquiries and prevents edits while sending.
- Unique route metadata, canonicals, social tags, Organization data and the new service in the sitemap.
- Existing project images, contact.php and the previous migration work preserved.

## Validation

- npm run lint — passed.
- npm run type-check — passed.
- npm run build — passed; all 13 content routes prerendered.
- node scripts/check-contact-form.cjs — success, payload trimming, HTTP/application/JSON/network failure and concurrent-submit behavior passed, with mocked transport and no email sent.
- node scripts/check-routes.mjs — 13 route checks, 15 internal targets, unique branded titles, descriptions, canonicals, Open Graph URLs, one H1 per page, project 404 and robots sitemap passed. Start the preview on port 3100 first, or set COALTECH_PREVIEW_URL.
- Browser visual review at 320, 390, 768, 1024, 1440 and 1920 widths on representative homepage/service layouts. No horizontal document overflow in inspected views.
- Mobile menu open/close/Escape/focus return and native required-field validation checked in the browser.
- Reduced-motion rules reviewed in source; browser media emulation and assistive-technology testing were not performed.

## Local preview

Run `npm run build`, then `npm run start -- --port 3100`. Open http://localhost:3100.

## Still outside local validation

Nothing has been deployed. Production email delivery and cross-origin behavior require a deployment check; no production enquiry was submitted. The PHP endpoint remains at https://coaltech.in/contact.php. Next.js does not execute PHP, so deployment must preserve PHP handling separately from the Next server.

Supplied project screenshots remain unchanged. Owner review of screenshot publication permissions, visible dashboard records and third-party claims is still needed before release. No AI portfolio examples, invented results, legal policy or unverifiable company details were added.
