# Coaltech: content and creative brief

Research date: 27 September 2026. Phase: research and planning only.

This document proposes the next website. It does not approve claims, change the site, or establish that the current checkout is deployed. Read alongside [OWNER_INPUT_REQUIRED.md](OWNER_INPUT_REQUIRED.md) and [AGENTS.md](../AGENTS.md).

Evidence labels used throughout:

- **Verified in repository** means the named file or asset contains it. This does not independently prove a client relationship, business result, or delivery capability.
- **Observed live** means visible on Coaltech's public site or returned by a read-only HTTP request on the research date. Existing public claims still need owner confirmation before reuse.
- **Proposed** means a recommendation for the future offer or experience, not a statement about current delivery.
- **[OWNER INPUT REQUIRED]** identifies facts needed before final copy or implementation approval. Never publish this marker or an unfinished planning note.

## 1. Executive recommendation

Position Coaltech as a digital studio helping founder-led businesses explain their offer through a considered website, with practical AI-assisted marketing workflows available as a distinct service. Lead with work and decisions. Let clients understand what they would receive before asking them to contact the studio.

Recommended positioning statement, pending confirmation of the marketing scope:

> Coaltech builds websites and develops AI-assisted marketing workflows for businesses that need to explain what they do and keep their marketing moving.

The website can demonstrate interface design and frontend engineering through its own implementation. The portfolio supplies four useful visual records, but it does not yet establish Coaltech's exact role, the project constraints, or outcomes. AI marketing has no documented delivery example in this repository. Give it a clear page, but publish only an owner-confirmed offer supported by a real demonstration. Do not sell unverified performance, automation, campaign management, or channel expertise.

Use the Co + Al origin once in a small, non-blocking identity moment. Then move promptly to selected work. Retain the current cobalt/aluminium tokens, original mark, project images, routes, and PHP endpoint. Improve the story and evidence before spending time on animation.

Proposed navigation: **Work / Website development / AI marketing / Studio / Contact**. The logo returns home. Keep `/services` as a useful overview linked from the footer and service pages. Put process at `/about#process` initially. Defer a journal and a standalone process page until they contain something worth reading.

The first implementation phase should produce approved service scopes, two evidence-backed case studies, final page copy, and static compositions for the homepage and both primary services. It should also settle deployment architecture and the `.in` canonical origin before engineering begins.

## 2. Existing-site audit

### Scope and evidence

Read the root `AGENTS.md`, `PROJECT_ANALYSIS_REPORT.md`, `README.md`, `docs/design-system.md`, every current file under `src/app`, all seven current component modules under `src/components` (including the additional named Wordmark component), `src/data/projects.ts`, `src/index.css`, `package.json`, `next.config.ts`, `contact.php`, and all public asset entries. Visually inspected the four project PNGs and `coaltech-mark.webp`. Favicon and manifest were inventoried. The favicon's individual embedded sizes were not visually reviewed.

Live inspection covered the homepage and Work page through browser accessibility trees, the desktop homepage screenshot, homepage HTML, `/robots.txt`, and `/sitemap.xml`. No enquiry was submitted. Local rendering, mobile interaction, screen-reader operation, live email delivery, field performance, and Search Console were not tested in this planning phase.

The checkout is on `57f0c64521d47a594874193c49275df842365b9c` with extensive pre-existing uncommitted changes. The current package declares Next.js 16.3.5, React 19.3.0, TypeScript, and plain CSS. `README.md` and the analysis report describe the older Vite/React Router site. Treat their architecture, performance claims, commands, and accessibility assertions as historical context. In particular, their Lighthouse targets and estimated savings are not measured results.

The live homepage still serves a Vite-style shell and `/assets/` bundles, including a preloaded Three.js chunk. It is not the local App Router implementation. Its headline promotes websites to founders and startups. Production uses the navy/cream mark and palette, whereas the local system extends that identity into paper, aluminium, ink, and cobalt.

### What should remain

- Co + Al origin and the internal thesis, “Different elements. Better together.”
- Actual project imagery, with provenance and privacy review before reuse.
- Editorial project hierarchy, simple navigation, native links, skip link, visible labels, and the existing reduced-motion support.
- Current App Router architecture, shared CSS tokens, server-rendered content, and small client components.
- The `management@coaltech.in` contact route and `https://coaltech.in/contact.php` endpoint, subject to delivery verification.
- Existing public URLs until a specific migration decision is justified by content equivalence and search evidence.

### What needs to change in a later phase

| Priority | Evidence | Finding | Planned response |
| --- | --- | --- | --- |
| P0 | Live `/robots.txt` and `/sitemap.xml`, fetched 27 Sep | Both point to `coaltech.com`. Sitemap entries carry the same 2024 date. Local metadata uses `.in`. | Establish preferred origin, serve a sitemap containing canonical `.in` URLs, correct robots, remove false dates, then inspect deployed responses. Do not assume ownership of `.com`. |
| P0 | `src/components/ElementIntro.tsx:21`, `src/index.css:168` | An opaque fixed overlay covers the viewport for about 1.45 seconds, with no skip control. It is hidden from assistive technology while covering visual content. | Replace with an inline identity sequence in reserved space. Hero text, links, and navigation remain usable from the first paint. |
| P0 | `src/data/projects.ts`, case route line 17 | Descriptions attribute strategic work and effects to Coaltech without supporting evidence. The page then calls the material verified. | Confirm role and evidence. Replace the public drafting note with actual project information. |
| P1 | Three service route files and `ServiceDetail.tsx` | All use the same short template. None exports route-specific metadata. AI marketing is absent. | Separate web and AI marketing narratives, define their scopes, add unique route metadata. |
| P1 | `src/app/layout.tsx:4` | No canonical is declared. Shared OG URL and artwork describe the homepage on other routes. | Give each indexable route a self-canonical and page-specific social metadata. |
| P1 | `src/components/SiteHeader.tsx:18` | Mobile navigation uses an overlay-like fixed panel, but there is no Escape handler, focus management, or background inertness. | Prefer an in-flow disclosure. If it remains modal, implement the full modal behavior and test it. |
| P1 | `src/index.css:67`, `:30` | Muted text on aluminium computes to 4.41:1, below 4.5:1 for ordinary text. Bright cobalt against cobalt computes to 1.47:1, unsuitable as the sole ring on that surface. | Use ink for secondary text on aluminium and a white/ink focus treatment suited to each surface. |
| P1 | `src/components/ProjectWall.tsx:16` and `/work` | Work page moves from its H1 to project H3s without a section H2. | Use H2 project titles on the work index, H3 under the homepage's selected-work H2. |
| P1 | `ContactForm.tsx:13`, `contact.php` | Client checks HTTP status, not the JSON `ok` contract. PHP handles POST only and allows the production origin. A localhost cross-origin JSON request needs a preflight that this handler does not satisfy. | Preserve endpoint and contract. Plan an approved staging delivery test, parse `ok`, retain typed content on failure, and verify same-origin routing or explicit staging configuration. |
| P1 | Live footer and local contact | Live social, privacy, and terms links resolve to `#`. Local site has no privacy page. Both show location claims without an evidence record. | Request real profiles, approved privacy facts, and current business details. Publish useful destinations only. |
| P2 | `src/index.css:48`, `:102`, `:108` | Display line heights reach .82 to .86 and tracking reaches -.08em. This creates a wrapping/clipping risk with final copy. | Test real headings at 320px, zoom, and text-spacing overrides. Do not claim clipping without a rendered test. |
| P2 | `src/index.css:22`, `:135` | Global smooth scrolling and animated padding add behavior that the brief does not need. | Use natural anchor movement and move only an arrow/underline on service links. |
| P2 | `ProjectWall.tsx:10` | The first work image is always prioritized, including far below the homepage hero. | Set priority by actual page placement. Reserve eager loading for the real LCP candidate. |

PHP security and delivery need a separate engineering review before launch: email validation, header handling, escaping of all interpolated fields, abuse protection, and mail transport behavior. These were source concerns, not tested exploits. Do not replace PHP with a new service by default.

### Component inventory

| Component | Retain | Plan |
| --- | --- | --- |
| `ContactForm` | Required name/email/message and stable status region | Preserve JSON names, improve verified success/error behavior, add privacy context |
| `ElementIntro` | Origin and reduced-motion intent | Inline, skippable, one sequence, no overlay |
| `PageHero` | Shared semantics and consistent page identity | Content-driven height and readable final wrapping |
| `ProjectWall` | Data-driven links and asymmetric desktop structure | Purposeful crops, route-aware headings, safe assets, role captions |
| `ServiceDetail` | Shared small primitives only | Web and marketing pages need distinct content models |
| `SiteHeader` | Native links and clear labels | Five proposed destinations, accessible mobile disclosure, `aria-current` |
| `SiteLayout` | Skip link, main, contact footer | Real policy link and confirmed identity details |
| `Wordmark` within `SiteHeader` | Co/Al recognition | Reconcile textual wordmark with original raster mark without redrawing the logo |

No analytics or tracking integration was found in current `src` or package dependencies. This does not establish that production hosting injects none. Do not add tracking. Preserve any later-verified integration until its owner decides otherwise.

### Skill application and interface-review boundary

Applied `design-taste-frontend` for audit-first preservation and composition, `premium-web-design` for hierarchy and restraint, `better-interface` with all six domain owners including `better-writing`, and the requested `better-ui`, `better-typography`, `better-colors`, `better-layout`, and `better-accessibility` checks. Applied `humanize`, `humanizer`, and `ai-check` to proposed copy.

Reviewed the `editorial` style skill for structured grids and reading rhythm. Its serif and generic palette defaults are not adopted: Coaltech's own grotesk direction and palette take precedence. No additional visual style is needed. Design read: studio sales and portfolio site for business decision-makers, editorial and tactile. Proposed dials: design variance 6, motion intensity 3, visual density 3.

The user requested `interface-review`, so its change-scope rules were read and used to distinguish this documentation change from existing implementation work. This turn changes two Markdown documents and no rendered interface. There are no introduced interface findings from this turn. The broad existing-site findings above belong to the repository audit, not a claim that this turn introduced them. A formal review of the previous migration is outside this phase.

| Domain | Evidence inspected | Coverage |
| --- | --- | --- |
| Accessibility | All component semantics, heading paths, labels, reduced-motion CSS | Source findings recorded. Keyboard/screen-reader runtime not verified |
| Layout | CSS grids, breakpoints, DOM reading order, live desktop hero | Source and one live desktop composition. Local/mobile/zoom not verified |
| Writing | All local page and component copy, project data, live home/work | Reviewed. Unsupported claims and vague offer recorded |
| Typography | Declared stacks, scale, tracking, line heights | Source reviewed. Local glyph rendering not verified |
| Colors | Token values and exact sRGB contrast calculations | Specified solid pairs measured. Full rendered-state audit remains |
| UI | Navigation, intro, form, hover and reduced-motion definitions | Source reviewed. Full runtime state walk remains |

Audit verdict: **Block release of the current website implementation** until the P0 issues and confirmed accessibility failures are resolved. This is not a block on completing or reviewing this planning document.

## 3. Research and positioning options

### Research method and competitive observations

Current first-party pages were reviewed on 27 September 2026. Competitor statements are evidence of positioning, not independently audited business achievements. Search results are a directional sample, not localized rank tracking or keyword-volume data. No search-volume, CPC, difficulty, market-size, or conversion statistics are inferred.

| Reference and category | Observed positioning/content pattern | Coaltech implication |
| --- | --- | --- |
| [Webstacks](https://www.webstacks.com/), premium website development | Separates website projects and ongoing retainers, names stack expertise, and links work to operational needs | Explain editing, handover, and post-launch support if offered. Avoid selling an enterprise service structure without capacity |
| [Bakken & Bæck](https://bakkenbaeck.com/), creative development | A direct studio description leads into work classified by brand, web, and product | Make project roles legible. Let the work carry the visual argument |
| [AREA 17](https://area17.com/), strategic digital studio | Connects capabilities, industries, and client stories | Tell why a project needed a particular decision. Do not borrow its breadth of sector authority |
| [Instrument](https://www.instrument.com/), brand/product/marketing | Uses work, services, and named proof across disciplines | Two services can share a point of view. They still need their own proof |
| [Ray Creations](https://www.raycreations.net/), India-based studio serving global clients | Describes a focused WordPress service and ongoing support | Specific scope can make a smaller operation understandable without implying scale |
| [ibs Fulcro](https://www.ibsfulcro.com/), India marketing and technology | Separates marketing and technology offerings and publishes case-study paths | Explain the boundary between marketing support and engineering. Do not reproduce a large agency's service catalogue |
| [Tigma AI marketing](https://studio.tigmagram.com/services/ai-marketing), Indian AI service competitor | Dedicated AI marketing page with service and buying questions | Answer buyer questions on the service page, with owner-approved terms |
| [Animalz](https://www.animalz.co/), AI-assisted content and growth | Names a B2B SaaS audience, concrete content services, research, and AI workflows | Show inputs, editorial review, and a finished artifact. Avoid generic AI claims |

The useful gap is a hypothesis, not a claim that competitors lack these qualities: Coaltech can make a compact offer unusually easy to assess through specific work, candid scope, and readable delivery plans. Validate it against recent enquiry conversations.

### Option A: Clear websites, workable marketing

- Positioning: A studio connecting a business's website with the practical work of explaining it through marketing.
- Ideal client: Founder-led service/product business or lean marketing team with a real offer and an unclear website.
- Problem: Prospects need too much explanation, and publishing starts from scratch each time.
- Distinct advantage to establish: Website thinking and marketing workflows use the same approved customer understanding. Co + Al gives this relationship a memorable identity.
- Emotional promise: Relief that someone can make the problem understandable and give the next decision a shape.
- Proof required: Website contribution records, one real content workflow, and named responsibility for review.
- SEO value: Strong service-page fit for custom website development and AI marketing strategy. Broad India queries remain competitive.
- Risk: Can sound broad unless deliverables and exclusions are explicit. Marketing proof is currently missing.
- Sample hero: “Make your business easier to understand.” Supporting line: “Website development and AI marketing from Coaltech.”
- CTA: “Tell us what needs to change.”
- Sample service language: “Start with the questions customers ask before they contact you. Those questions shape the pages, the examples, and the next step.”

### Option B: The website relaunch studio

- Positioning: Coaltech helps businesses whose existing site no longer explains their work.
- Ideal client: Established small business with an outdated site and an accountable internal decision-maker.
- Problem: Content has become inaccurate, mobile journeys are awkward, and changing pages feels difficult.
- Distinct advantage to establish: A documented audit connects content, design, and technical changes.
- Emotional promise: Confidence in replacing the site without losing useful material or routes.
- Proof required: Authentic before/after material, redirect record, ownership/handover terms, and a maintenance example.
- SEO value: Clear fit for website redesign and custom business websites.
- Risk: Narrows the opportunity to existing sites and makes AI marketing feel secondary.
- Sample hero: “Your business has changed. Has your website?” Supporting line: “Website redesign and development from Coaltech, with marketing support for what comes next.”
- CTA: “Send us your website.”
- Sample service language: “We review the pages you have, identify what still earns its place, and agree on the changes before design begins.”

### Option C: A product-minded digital studio

- Positioning: Coaltech designs websites and operational interfaces around real user decisions.
- Ideal client: Product founder or operations lead buying an interface or platform.
- Problem: A useful product is difficult to explain or operate.
- Distinct advantage to establish: Experience moving between public pages and complex product screens.
- Emotional promise: A collaborator who understands what happens after the first screen.
- Proof required: Hybits Suite role, working flows, technical scope, tests, and product ownership disclosures.
- SEO value: Digital product development and SaaS interface work.
- Risk: Product work can overwhelm the user's chosen website/AI marketing focus. A dashboard screenshot proves no backend or security capability.
- Sample hero: “Give the next decision a clearer interface.” Supporting line: “Websites and product interfaces from Coaltech.”
- CTA: “Show us the flow.”
- Sample service language: “A useful dashboard makes it clear what needs attention and what someone can do next.”

### Option D: Marketing production with human direction

- Positioning: Coaltech creates repeatable AI-assisted content workflows with explicit human approval.
- Ideal client: Small marketing team already publishing and struggling with research, adaptation, or approvals.
- Problem: Tool use has increased output without making the work easier to manage.
- Distinct advantage to establish: Concrete workflows, review responsibilities, and the ability to build supporting website pages.
- Emotional promise: Control over what is published and why.
- Proof required: A real workflow, input/output examples, review log, tool cost boundaries, and measurement methodology.
- SEO value: AI content marketing, AI marketing strategy, and marketing automation.
- Risk: Weakest current evidence. Could attract automation requests Coaltech cannot support.
- Sample hero: “Give your marketing a process you can follow.” Supporting line: “AI-assisted research and content workflows, with a person responsible for the final work.”
- CTA: “Discuss a marketing workflow.”
- Sample service language: “Agree on the source material and the reviewer before automating the draft.”

All sample service commitments above are proposed. [OWNER INPUT REQUIRED] Confirm which practices Coaltech will actually deliver.

## 4. Recommended positioning

Choose **Option A**, with the practical scoping discipline of Option B. The existing portfolio gives website work a starting point, while a separate AI marketing offer reflects the owner's stated business direction. Option C remains supporting evidence through selected projects. Option D should not lead the company until its proof exists.

Co + Al should express complementary ways of working, not label engineering as cobalt and AI as aluminium in every section. The material contrast can shape density, white space, and interaction without becoming a taxonomy.

Public language should use “Coaltech” and “studio.” `AGENTS.md` establishes a sole proprietorship. Do not imply incorporation, a large team, permanent specialists, international offices, or a founder-led delivery model until the owner supplies those facts. Targeting founder-led clients does not assert that Coaltech is founder-led.

Differentiation must be earned in five visible ways: the specific explanation of the offer, annotated project decisions, explicit inclusions/exclusions, a recognizable elemental composition, and a contact path that works. None requires invented results.

## 5. Ideal client profiles

These are recommended audiences to validate, not claims about the current client base.

| Audience | Trigger | Decision-maker and buying concern | Relevant evidence | Fit boundary |
| --- | --- | --- | --- | --- |
| Founder-led service business | Existing site no longer explains the offer | Owner asks whether scope, price, and responsibilities will be clear | Service website with approved role and before/after decisions | Must provide offer details, examples, and an approver |
| Early product business | Product exists but public explanation is weak | Founder/product lead worries about translating complexity | MatchPod site or Hybits interface, accurately categorized | Avoid claiming product-market-fit consulting or backend delivery without proof |
| Lean marketing team | Research, publishing, and approvals are fragmented | Marketing lead asks who checks content and maintains automation | Real workflow demonstration and editorial record | Must have source material and a person authorized to approve |
| Business preparing a relaunch | New positioning, service, or customer segment | Owner/marketing lead worries about losing URLs or enquiry delivery | Migration plan, source records, contact test | No guaranteed ranking, lead, or revenue improvement |

Do not list every industry as a specialism. Select sectors only after owner interviews show repeat experience and commercially useful proof.

## 6. Client problems and buying concerns

| Buyer question | Where the site answers it | What the answer needs |
| --- | --- | --- |
| Do you understand my business? | Hero, service opening, relevant case | A specific problem and explanation, not sector badges |
| What will you actually deliver? | Service scope and process | Named documents, screens, code, content, or workflows |
| Who is responsible? | Studio and case credits | Real names, roles, collaborators, approval responsibilities |
| Can I edit and own the result? | Website FAQ and proposal | CMS fit, account/code ownership, handover conditions |
| What does AI do, and who checks it? | AI service example | Sources, review points, publishing authority, failure handling |
| How much work is required from us? | Inputs and process | Decision-maker, content, access, review expectations |
| What will this cost and how long will it take? | Service buying questions and contact | Owner-confirmed ranges or clear estimating variables, no invented starting price |
| What happens after launch? | Service closing section | Warranty/support distinction, optional maintenance, ownership of incidents |
| Have you done this before? | Work and case studies | Accurate role, artifact, permission, verified outcome if available |

Useful even without conversion: web page includes a preparation checklist, AI page includes a workflow suitability test, cases explain decisions, and Studio describes what clients need to approve.

## 7. Website information architecture

### Launch architecture

| URL | Decision | Navigation and migration notes |
| --- | --- | --- |
| `/` | Retain, revise | Brand overview with two explicit services |
| `/work` | Retain | Primary navigation, curated project records |
| `/work/matchpod` | Retain | Expand when role and rights are confirmed |
| `/work/hybits-suite` | Retain | Operational interface case, safe imagery needed |
| `/work/animathon` | Retain | Event website case |
| `/work/hybits-dishware` | Retain | Service website case, not automatically ecommerce |
| `/services` | Retain | Overview and scope comparison, footer/service cross-links |
| `/services/web-development` | Retain | Primary service destination |
| `/services/ai-marketing` | Add after scope approval | Primary service destination |
| `/about` | Retain, label Studio | Includes `/about#process`, people and way of working |
| `/contact` | Retain | Direct email plus short form |
| `/services/social-media-marketing` | Preserve pending offer decision | If still offered, keep a distinct channel-specific page. If genuinely replaced, use a single server redirect to a relevant AI page section only after scope equivalence is confirmed |
| `/services/app-development` | Preserve as secondary capability pending decision | Keep useful product-interface content if offered. Do not redirect to web development just for tidiness |
| `/privacy` | Proposed supporting page | Owner-approved handling facts required before publication, linked beside form and in footer |

Current local inventory has 12 indexable content URLs. The primary proposal adds AI marketing and a privacy page, giving 14 if both legacy service pages remain. This is an architecture count, not a claim that all 14 are ready to publish.

Preserve `/about` rather than inventing `/studio`. Keep descriptive existing service paths. Do not add city, industry, or AI-tool landing pages without distinct evidence and buyer value. If a route is retired without an equivalent, decide 404/410 treatment from its actual content and traffic rather than redirecting everything home. Obtain Search Console landing pages and backlink destinations first.

### Deferred routes

| Candidate | Decision and reason | Condition to revisit |
| --- | --- | --- |
| `/process` | Defer. An About anchor and service-specific delivery detail are enough initially | Multiple substantial engagements establish a distinct, reusable method worth documenting |
| `/insights` and article routes | Defer. No empty journal, generic launch articles, or mass AI SEO publishing | Named reviewer/author, original source artifacts, editorial owner, and a sustainable publishing commitment |
| Separate redesign page | Defer. Cover redesign within website development | Search evidence and distinct case studies justify a separate buyer journey |
| New cases from live-only portfolio | Hold | Confirm attribution, rights, current URLs, and source assets |

## 8. Page-by-page content strategy

The title/meta pairs in section 15 are part of each dossier. Case dossiers in section 13 extend the shared case-page strategy below. All proposed service promises remain subject to owner confirmation.

### Home: `/`

- Intent: Branded discovery and comparison of studio fit. Audience: referred prospects and business decision-makers.
- Purpose: Explain the two services, establish taste, and lead to relevant proof.
- Primary theme: Coaltech website development and AI marketing. Secondary: custom websites, AI-assisted content workflows, digital studio.
- H1: “Make your business easier to understand.” Put “Website development + AI marketing” immediately above it as readable text.
- Narrative: Identify the offer, establish the elemental identity briefly, show work, explain scope, make contact easy.
- Sections: non-blocking identity signature within hero, point of view, selected work, website development, AI marketing, delivery artifacts, studio, final enquiry invitation. Detailed draft in section 9.
- Primary CTA: “See selected work.” Secondary: “Tell us what needs to change.”
- Required proof: approved project captions, accurate service scope, one workflow artifact.
- Internal links: work, both primary services, Studio/process, contact.
- Schema: Organization and WebSite, only with verified fields.
- [OWNER INPUT REQUIRED] Service scope, target client, legal/public identity, project permissions.

### Work: `/work`

- Intent: Commercial evaluation. Audience: buyers checking execution and relevance.
- Purpose: Help a prospect select a project that resembles their problem.
- Primary theme: Coaltech portfolio. Secondary: website projects, interface design, development case studies.
- H1: “Selected work.”
- Narrative/sections: short explanation of the collection, large lead website, smaller contrasting website, product-interface example, project credits/role captions, enquiry link. No filters for four items.
- Primary CTA: “Read the [project] story.” Secondary: “Discuss a similar project.”
- Proof: actual project screenshots with role/relationship captions, source and date records. Do not call internal products client commissions.
- Links: each approved case, website service, secondary product page when appropriate, contact. Link AI service only from actual marketing evidence.
- Schema: CollectionPage, optional ItemList of visible case URLs, breadcrumb.
- [OWNER INPUT REQUIRED] Priority order, project relationships, public permissions, missing live-site projects.

### Website development: `/services/web-development`

- Intent: Commercial service selection and redesign evaluation. Audience: owners and marketing leads.
- Primary theme: custom website development for businesses. Secondary: website development company India (after location confirmation), premium website design and development, website redesign.
- H1: “Website development for a clearer business story.”
- Narrative/sections: buyer situation, real project evidence, pages and journeys, included deliverables, optional systems, redesign/migration, client inputs, approval points, support boundaries, genuine buying questions, contact. See section 10.
- Primary CTA: “Discuss your website.” Secondary: “See website projects.”
- Proof: approved website case, mobile screenshots, real QA/handover example.
- Links: relevant cases, `/services`, `/about#process`, AI service where continued publishing is relevant, contact.
- Schema: Service, WebPage, BreadcrumbList. No automatic FAQ markup.
- [OWNER INPUT REQUIRED] CMS/integration offers, copy responsibility, maintenance, timing, ownership, price policy, platform expertise.

### AI marketing: `/services/ai-marketing`

- Intent: Commercial investigation with educational needs. Audience: owners and lean marketing teams.
- Primary theme: AI marketing strategy for businesses. Secondary: AI marketing agency India after location confirmation, AI content marketing, AI automation for marketing where actually offered.
- H1: “AI marketing with a clear brief and a human reviewer.”
- Narrative/sections: plain-English definition, suitable tasks, one real workflow, human decisions, outputs, inputs/access, measurement limits, exclusions, engagement options, questions, contact. See section 11.
- Primary CTA: “Discuss your marketing workflow.” Secondary: “See how the review works” linking to the visible on-page example.
- Proof: real, permissioned input/output and review record. If no client example exists, use a genuine Coaltech internal pilot clearly labeled as such. A diagram of a proposed process is not delivery proof.
- Links: website service for destination pages, Studio/process, contact, actual marketing case when available.
- Schema: Service with accurate `serviceType`, WebPage and breadcrumb. No AI-specific invented schema.
- [OWNER INPUT REQUIRED] Every offered task/channel, tool/data policy, publishing authority, support model, evidence, reporting, and commercial terms.

### Studio and process: `/about`, `/about#process`

- Intent: Branded trust and collaboration fit. Audience: shortlisted clients.
- Primary theme: about Coaltech. Secondary: digital studio, website development process, AI marketing collaboration.
- H1: “Meet Coaltech.”
- Narrative/sections: who is responsible, Co + Al origin in concise text, real working artifacts, process with client decisions, verified location/collaboration, scope boundaries, contact. Section 12 contains the artifact model.
- Primary CTA: “Tell us about the project.” Secondary: “See the work.”
- Proof: approved names/bios, genuine work-in-progress, actual process examples.
- Links: both primary services, relevant work, contact. Process anchor is not a separate sitemap URL.
- Schema: AboutPage, breadcrumb, Organization reference. Person nodes only for actual public biographies.
- [OWNER INPUT REQUIRED] Names, roles, collaborator relationships, location, communication cadence, delivery responsibility.

### Contact: `/contact`

- Intent: Transactional enquiry. Audience: prospects ready to explain a need.
- Primary theme: contact Coaltech. Secondary: website project enquiry, AI marketing enquiry.
- H1: “Bring us something unfinished.”
- Narrative/sections: invitation with examples, direct email, name/email/message form, explanation of next step, privacy link. Avoid another oversized sales manifesto before the form.
- Primary CTA: “Send enquiry.” Secondary: “Email Coaltech.”
- Proof: working delivery path and approved response expectations. Do not claim a response time before the owner commits to it.
- Links: privacy, services for uncertain prospects, work. Keep email usable on failure.
- Schema: ContactPage and breadcrumb. ContactPoint only with verified contact details.
- [OWNER INPUT REQUIRED] Monitored mailbox, enquiry triage, retention, service hours if stated, hosting and delivery test access.

### Services overview: `/services`

- Intent: Compare Coaltech services. Audience: visitor unsure whether the issue is a site or an ongoing marketing process.
- Primary theme: Coaltech services. Secondary: website development, AI marketing services.
- H1: “What do you need to work on?”
- Narrative/sections: two plain-language entry paths, a compact comparison of inputs and outputs, where they connect, secondary product/social work only if confirmed, contact.
- Primary CTA: “Explore website development.” Parallel service link: “Explore AI marketing.” Secondary CTA: “Describe the problem.”
- Proof: confirmed scope. No icon-card catalogue or extra offerings added to fill space.
- Links: all offered service pages, Studio/process, contact, Work.
- Schema: CollectionPage and breadcrumb. Reference genuine Service entities rather than duplicating every property.
- [OWNER INPUT REQUIRED] Which secondary services remain available and how joint engagements are scoped.

### Retained social page: `/services/social-media-marketing`

- Intent: Channel-specific publishing support. Audience: owners/marketers buying social content.
- Primary theme: social media content services. Secondary: campaign content, social publishing workflows.
- H1: “Social content built around something worth saying.”
- Narrative/sections: supported channels, actual formats, editorial calendar and approvals, example work, publishing/community/paid-media boundaries, inputs, questions, contact. Keep distinct from AI strategy.
- Primary CTA: “Discuss social content.” Secondary: “Explore AI marketing.”
- Proof: real posts/campaigns and approval responsibility.
- Links: AI service, relevant case if available, contact, services.
- Schema: Service and breadcrumb if genuinely offered.
- [OWNER INPUT REQUIRED] Confirm offer or approve consolidation, supported channels, frequency, community management, publishing and paid-media scope. If consolidated, this dossier is replaced by a redirect, not a duplicate page.

### Retained product page: `/services/app-development`

- Intent: Product/interface service evaluation. Audience: product/operations buyers.
- Primary theme: digital product development, limited to proven scope. Secondary: dashboard interface development, product UI.
- H1: “Interfaces for the work behind the business.”
- Narrative/sections: operational problem, Hybits interface evidence, confirmed responsibility, user flows, deliverables, integrations/backend boundaries, input requirements, contact.
- Primary CTA: “Discuss a product interface.” Secondary: “Read the Hybits Suite story.”
- Proof: functioning flow and role evidence. Do not claim native iOS/Android, backend, security certification, or scalability from a PNG.
- Links: Hybits Suite, website service, Studio/process, contact.
- Schema: Service and breadcrumb if offered. URL may remain `/app-development` while copy accurately narrows the service.
- [OWNER INPUT REQUIRED] Backend/native-app capability, actual implementation stack, ownership and maintenance scope, continued availability.

### Individual cases: `/work/[existing-slug]`

- Intent: Project-specific research and service evaluation. Audience: a buyer seeking proof.
- Primary theme: project name plus verified work category. Secondary: the actual problem and relevant service.
- H1/title/meta: project-specific records in section 13 and section 15.
- Narrative: context, scope, challenge, decisions, visible result, limits, credits, next step. Cases may vary in length according to evidence.
- Primary CTA: “Discuss a similar project.” Secondary: “View the project” only after its current destination is checked.
- Proof: permission, Coaltech role, authentic screenshots, technology source, approved result language.
- Links: matching service, Work, a relevant next case, contact.
- Schema: WebPage initially. CreativeWork or Article only when its contents justify that type. BreadcrumbList.
- [OWNER INPUT REQUIRED] Complete the per-project questions in the companion file.

### Privacy: `/privacy`

- Intent: Understand enquiry-data handling. Audience: anyone using the form.
- Primary theme: Coaltech privacy. Secondary: contact enquiry data.
- H1: “Privacy at Coaltech.”
- Narrative/sections: operator, data collected, purpose, delivery/providers, retention, access/deletion contact, applicable disclosures, revision date based on an actual revision.
- Primary CTA: “Email a privacy question.” Secondary: “Return to contact.”
- Proof: actual business practices and owner-approved text. This is a content specification, not a legal determination.
- Links: contact, footer. Schema: WebPage and breadcrumb. Indexable once useful and approved, self-canonical, no keyword expansion.
- [OWNER INPUT REQUIRED] Verified operator details, providers, retention, enquiry access and applicable policy requirements.

## 9. Complete homepage outline

### Recommended concept: an introduction worth following

The site opens with the relationship between two elements, then immediately demonstrates the relationship between explanation and execution. The work follows quickly. Its still frame should be enough to understand the offer.

Alternative considered: a large project image filling the hero. This would foreground proof but currently gives one incomplete project record too much weight. Another alternative, a long elemental story before the portfolio, repeats the current delay to proof. Keep the origin short and let projects take the visual space.

The following is a **proposed public-copy draft**, pending the owner checks beside it:

| Sequence | Copy direction | Composition and purpose | Evidence/approval |
| --- | --- | --- | --- |
| 1. Identity within hero | `Co / Cobalt` + `Al / Aluminium` resolving to Coaltech | Small inline signature, reserved dimensions, visible Skip animation control. Under 1.2 seconds, optional, static on return/reduced motion | Brand origin established in AGENTS. No splash screen |
| 2. Hero | Eyebrow: “Website development + AI marketing”. H1: “Make your business easier to understand.” Body: “Coaltech builds websites and develops AI-assisted marketing workflows for businesses with something worth explaining.” | Paper canvas, left-aligned grotesk, text and one authentic project crop. Work link primary, enquiry link secondary | [OWNER INPUT REQUIRED] Confirm marketed workflow scope |
| 3. Point of view | “Start with the questions people bring.” Body: “A visitor may be comparing options, checking a price, or trying to work out whether you can help. Give them enough detail to decide.” | Short editorial paragraph beside a real annotated page detail. No statistic or decorative dashboard | This is a point of view, not a performance claim |
| 4. Selected work | “Selected work.” Use factual project summaries from section 13 | Lead website on seven columns, second on five, one wide supporting interface. On mobile show the strongest website first with its role caption | [OWNER INPUT REQUIRED] Role and permission. Default lead candidate MatchPod, subject to evidence freshness |
| 5. Website service | “Give each page a job.” Body: “The offer, the examples, and the contact path need to make sense together. A website brief should settle those decisions before the visual details take over.” Link: “Explore website development” | Large authentic screen with two annotated decisions and scope link. Warm paper and ink | Publish commitments only after web scope approval |
| 6. AI service | “Where does the marketing get stuck?” Body: “Start with one recurring task. A research brief, an approval queue, or an article that needs adapting for another channel gives the workflow a concrete job.” Link: “Explore AI marketing” | Aluminium field, real document sequence, reviewer attribution. No fake analytics. Different rhythm from website section | [OWNER INPUT REQUIRED] Genuine workflow demonstration and offered tasks |
| 7. Delivery | “Know what you are approving.” Body: “A page plan makes the content decisions visible. A working preview lets you try the site. For marketing work, a reviewed sample shows what the process will produce.” Link: “How projects take shape” | Evidence-led list of artifacts with short approval notes, not numbered slogan cards | [OWNER INPUT REQUIRED] Confirm actual process |
| 8. Studio | “Meet Coaltech.” Follow with a named person and a short, factual account of their role | Real portrait or working artifact. If no portrait is supplied, use text and approved process imagery | [OWNER INPUT REQUIRED] People, location, responsibility, genuine image |
| 9. Enquiry | “Bring us something unfinished.” Body: “Send the current website, a short brief, or a description of the work that keeps getting delayed.” Link: “Tell us about the project”. Show email | Compact ink closing section with readable white text and one contact route | Mailbox exists in repo/live site. Monitoring and response promise need confirmation |

Use “Different elements. Better together.” as internal direction and, at most, one small public origin caption. Remove the full-height second chemistry lesson. No automatic video, scroll reveal, or countdown to the content. At 390px, the service descriptor, H1, short body, and both links should fit naturally without enforcing a viewport-height hero.

## 10. Website development page outline

The web page is artifact-led and spatial: actual pages, content hierarchy, responsive decisions, and an explicit handover.

1. **Opening.** H1 from section 8. Proposed intro: “Your website should help someone understand the offer and decide what to do next. Start with the pages and questions that matter to the business.” State who it is for: new business sites, existing sites needing a rethink, and focused launch pages where offered.
2. **A relevant project.** Show one authentic desktop/mobile pair, the client/product context, and Coaltech's exact role. Explain one design decision. A screenshot of the Coaltech site can demonstrate its implementation, but cannot substitute for a client result.
3. **The scope.** Proposed base deliverables: page inventory, information architecture, responsive interface design, frontend implementation, and agreed QA/handover. The repository demonstrates these techniques on Coaltech's own site. [OWNER INPUT REQUIRED] Confirm they are commercial inclusions and who supplies final copy.
4. **Additional systems.** CMS, ecommerce, booking, CRM, backend, integrations, copywriting, photography, ongoing SEO, and maintenance are separate scoping questions. Display only the confirmed options with platform limits. Do not inherit Shopify claims from live copy without evidence.
5. **Redesign responsibilities.** Review existing URLs and useful content, prepare a redirect map where needed, preserve working enquiry paths, and agree who controls DNS/hosting. State that search recovery or ranking gains cannot be guaranteed.
6. **Client preparation.** A decision-maker, approved offer and audience, existing URL, examples of current customer questions, usable imagery with rights, access through an approved secure channel, and content/review availability. No credential collection in the enquiry form.
7. **Decision points.** Agree the page plan, approve representative design, review a working site, then sign off content and launch checks. Each checkpoint produces an artifact; scope changes get a written impact note.
8. **Handover and aftercare.** [OWNER INPUT REQUIRED] Code/design ownership, account ownership, CMS training, documentation, defect period, hosting responsibility, maintenance availability, and exclusions. Do not promise lifetime support.
9. **Buying questions.** Address editing, current domain, platform choice, migration, accessibility testing, copy responsibility, support, price and timing. If ranges are unavailable, explain that page count, integrations, content readiness, and migration complexity inform the estimate. Do not invent a “typical four-week build.”
10. **Contact.** “Discuss your website.” Supporting draft: “Share the current URL and the part that needs to work differently.”

Explicit proposed exclusions unless contracted: paid advertising, unlimited revisions, ongoing content production, unrelated custom software, legal drafting, licensing costs, and continuing maintenance. [OWNER INPUT REQUIRED] Approve these boundaries. Accessibility and performance are delivery acceptance criteria, not unsupported certification claims.

Objection handling should use evidence. “Can I edit it?” needs a real editing/handover explanation. “Will it generate leads?” needs agreed goals and measurement, without a guarantee. “Will we lose content?” needs an inventory and migration test, not a reassuring adjective.

## 11. AI marketing page outline

The marketing page is process-led and document-based. Show how a task moves from source material to reviewed output, with the human decisions visible.

1. **Plain-English definition.** Proposed copy: “AI marketing uses software to help with work such as research, drafting, and adapting content. A person still needs to decide what is accurate, useful, and right for the business.” This explains the category; it is not a claim that Coaltech sells every activity.
2. **Who it suits.** Teams with a defined offer, usable source material, recurring marketing work, and a person who can approve output. It is a poor fit when the business expects autonomous strategy, unreviewed publishing, or guaranteed demand.
3. **Choose a task.** Proposed options for owner evaluation: research briefs, content plans, draft/review workflows, channel adaptation, repetitive handoffs, experiment records, and reporting summaries. [OWNER INPUT REQUIRED] Mark each “offered now,” “pilot only,” or “not offered.” Publish only the confirmed list.
4. **Show one workflow.** Use a real source brief, an annotated draft, reviewer corrections, and the approved artifact. Label an internal Coaltech pilot clearly. Explain the stop condition when sources are missing or output fails review. No invented workflow UI, performance chart, or client identifier.
5. **Human responsibility.** Name who chooses topics, approves factual claims, handles brand voice, and authorizes publication. State what happens when AI output is unusable. A human reviewer must be an actual assigned role.
6. **Deliverables.** Depending on approved scope: source inventory, workflow map, editable briefs/templates, reviewed samples, handoff instructions, and a test/measurement log. A package of prompts alone should not be sold as an automated system.
7. **Client inputs.** Offer details, actual customer questions, authorized source content, brand examples, approved tools/accounts, reviewers, and baseline reporting where measurement is requested. [OWNER INPUT REQUIRED] Data handling, tool vendors, account ownership, permitted uploads, and access revocation.
8. **Measurement.** Agree the task and baseline first. Candidate measures include review time, correction reasons, publishability, qualified enquiries, or a defined campaign metric if the channel is actually managed. Do not conflate output count with impact. A result needs a date range, source, sample, and limitations.
9. **Engagement and complexity.** Propose a bounded pilot before recurring work. Complexity depends on source quality, number of channels, review requirements, integration access, and maintenance needs. [OWNER INPUT REQUIRED] Pilot scope, paid/free status, pricing, schedule, reporting cadence, and who maintains it.
10. **Questions and enquiry.** Answer: Who checks facts? Will this sound like us? Who pays for tools? Can work remain private? Do you publish for us? What if it fails? What happens when a vendor changes? CTA: “Discuss your marketing workflow.”

Proposed exclusions: unattended publishing, fabricated reviews/personas, unlicensed assets, purchased engagement, bulk low-value SEO pages, guaranteed rankings/revenue, model training or custom agents without a separately verified offer. Paid ads, community management, email/WhatsApp automation, CRM implementation, and analytics setup are not assumed inclusions.

The distinction from the website page must be visible: compact opening definition, annotated document sequence, review responsibilities, and operational questions. Keep long website screenshots on the web page. Keep metrics out of both pages unless proven.

## 12. About, process, and contact content outline

### Studio

The first paragraph should identify the actual operator and their role. [OWNER INPUT REQUIRED] Supply a publishable name, short biography grounded in real work, collaborators and responsibilities, and current location. Avoid generic “we are a passionate team” or a photograph implying an office that does not exist.

The origin can be explained in one paragraph: “Coaltech takes its name from cobalt and aluminium. Their different qualities give us a useful starting point for thinking about the work.” Add a factual owner anecdote only if supplied. Do not invent the story of when the name was chosen.

### Proposed process with tangible outputs

| Work stage | Client receives | Client decision/input | Responsibility to confirm |
| --- | --- | --- | --- |
| Understand the problem | Short brief, constraints, evidence inventory | Confirm audience, objective, access, and approver | Who conducts discovery and documents it |
| Set the scope | Page plan or workflow map, inclusions, exclusions, estimate | Approve the scope and priorities | Who owns estimates, change requests, and contracts |
| Make a representative piece | Website direction and key page, or reviewed marketing sample | Approve content and direction before expansion | Actual review method and revision allowance |
| Build and examine | Working preview or bounded workflow pilot, recorded issues | Test against the agreed use cases | Who handles QA and failed cases |
| Handover and agree follow-up | Approved files/accounts/instructions, outstanding-items list | Confirm ownership, support, and launch/publishing authority | Ongoing support owner and boundaries |

These are proposed engagement checkpoints, not assertions of past practice. On the homepage show only a few artifacts; put the full responsibilities on Studio and the applicable service page.

### Contact behavior and copy

Keep required fields `name`, `email`, and `message`. The PHP handler also accepts optional phone, company, budget, and projectType, but their existence does not justify adding friction. A service context may be offered optionally after scope approval without breaking the current payload contract.

Proposed helper: “A link and a few sentences are enough to start.” Label the message field “What needs to change?” Preserve the submit action “Send enquiry.” During submission use “Sending enquiry…” and retain the original context. Confirm JSON success before clearing fields. Proposed success: “Your enquiry was submitted.” This acknowledges submission, not inbox delivery. Error: “Your enquiry could not be sent. Try again or email management@coaltech.in.” Retain typed values, provide a real email link, and announce status accessibly.

[OWNER INPUT REQUIRED] Approve response expectations and a factual privacy notice. Never silently subscribe enquiries to marketing. Do not add a scheduling tool, file upload, phone requirement, or tracking pixel by default.

## 13. Work and case-study model

### Evidence model

Every case needs: slug, name, category, relationship (client/internal/collaboration), permission, date source, public URL/status, Coaltech role, collaborators, initial context, challenge, decision evidence, solution artifacts, visible result, verified technology source, outcome evidence, limitations, credits, asset provenance, alt text, SEO metadata, and owner sign-off. Unknown fields remain internal `[OWNER INPUT REQUIRED]` markers until resolved.

Use the narrative: what was made, what existed before, relevant problem, central idea, design/engineering decisions, visible detail, result and limitations, lesson if supported. A case may be concise. Omit unsupported chapters instead of writing plausible history.

### MatchPod

- Existing slug: `/work/matchpod`. Category safe from image: roommate-matching website/product presentation.
- Known: the PNG displays the MatchPod brand, a lifestyle-based roommate proposition, navigation, and calls to action. Data records `https://matchpod.in` and year 2026. The asset is a marketing homepage, not evidence of the matching backend or a native application.
- Safe provisional summary: “A website introducing MatchPod and its approach to roommate compatibility.”
- Case title/H1: “MatchPod: introducing roommate compatibility.” SEO metadata in section 15.
- Context/role: [OWNER INPUT REQUIRED] Is MatchPod an internal product, paid client, or collaboration? Which pages, brand elements, product flows, and implementation did Coaltech own?
- Challenge and solution: [OWNER INPUT REQUIRED] Original brief, audience, constraints, actual decisions, and launch version. The visible hierarchy presents the proposition and starting actions; do not label that a tested usability improvement.
- Visible result: A completed homepage representation in the supplied asset. Current live status and attribution need confirmation.
- Technology: Not established by this repository's screenshot or by Coaltech's own stack. Request source evidence.
- Must not claim: safer roommate decisions, successful matches, user growth, conversion lift, a matching algorithm, or full product delivery.
- Imagery needed: current approved desktop/mobile captures, one real flow if included in scope, dated earlier version if making a comparison. Preserve source appearance.
- Alt direction: “MatchPod homepage introducing lifestyle-based roommate matching.”

### Hybits Suite

- Existing slug: `/work/hybits-suite`. Category: operational dashboard/interface. “SaaS” and production deployment need confirmation.
- Known: screenshot shows inventory, customers, orders, billing and subscription navigation, an organization selector, summary panels, and a recent order. Data records `https://suite.hybits.in` and 2025. Production Coaltech currently links its CRM card to `hybits.in`, a destination mismatch to resolve.
- Safe provisional summary: “An operational dashboard with customer, inventory, order, and billing views.”
- Case title/H1: “Hybits Suite: an operational workspace.”
- Context/role: [OWNER INPUT REQUIRED] Commissioning entity, product relationship, Coaltech's design/frontend/backend role, collaborators, and current name (Suite or CRM).
- Challenge and solution: [OWNER INPUT REQUIRED] Which real operational task changed? Request a complete flow, not only the dashboard. Visible navigation groups operations and billing; this is a screen observation, not proof of efficiency.
- Visible result: Dashboard representation. Totals are displayed interface content, not outcome metrics.
- Technology: Unverified. Do not infer React, tenancy, database, authorization, or payment handling.
- Must not claim: reduced admin time, revenue gains, successful payments, production security, active customer counts, or a complete platform built by Coaltech.
- Imagery needed: permissioned test-account capture or owner-approved redaction of organization/account/order details, a real workflow, mobile/tablet views if supported. Do not manufacture improved figures.
- Alt direction: “Hybits Suite dashboard with navigation for inventory, customers, orders, and billing.” Do not repeat account details in alt text.

### Animathon

- Existing slug: `/work/animathon`. Category: event website.
- Known: PNG shows Animathon branding and navigation for competitions, experiences, team, contact and registration. Data records `https://animathon.in` and 2025.
- Safe provisional summary: “An event website presenting Animathon's competitions, experiences, and registration entry point.”
- Case title/H1: “Animathon: an event website.”
- Context/role: [OWNER INPUT REQUIRED] Organizer, event edition, permission, Coaltech contribution, collaborators, and project date.
- Challenge and solution: [OWNER INPUT REQUIRED] Audience, content constraints, actual registration path, and approved decision account. A still image does not prove the current “cinematic pulse” or motion quality claim.
- Visible result: Branded event entry screen with visible navigation. Registration completion and accessibility are not established.
- Technology: Unverified. Request stack and source proof if relevant to the story.
- Must not claim: ticket sales, registrations, attendance, engagement, event success, animation authorship, or working payment integrations.
- Imagery needed: programme/competition detail, registration stages with safe data, mobile capture, and rights for event artwork/video.
- Alt direction: “Animathon homepage with competition, experience, and registration navigation.”

### Hybits Dishware

- Existing slug: `/work/hybits-dishware`. Category: service website. Current data calls it commerce, but no checkout is shown.
- Known: PNG describes dishware, glassware and centralized washing, with service navigation and contact. Data records `https://hybits.in` and 2025.
- Safe provisional summary: “A service website introducing Hybits dishware and washing services.”
- Case title/H1: “Hybits: explaining the dishware service.”
- Context/role: [OWNER INPUT REQUIRED] Client/owner relationship, actual service scope, Coaltech contribution, launch date, and right to display claims within the screenshot.
- Challenge and solution: [OWNER INPUT REQUIRED] Audience, original brief, how service explanation or contact flow was designed, and actual commerce functionality. The image visibly combines service language with product imagery.
- Visible result: Service homepage representation. No measured customer understanding or environmental result established.
- Technology: Unverified. Do not infer ecommerce platform, payments, or logistics integrations.
- Must not claim: “India's first,” sterilization guarantees, waste reductions, delivery guarantees, sales growth, or environmental benefits without substantiation. These appear within the asset and need review even if excluded from surrounding copy.
- Imagery needed: approved claim-safe capture, process/service detail, mobile view, source rights for dishware photography. Preserve the original file as evidence and use an approved derivative when needed.
- Alt direction: “Hybits homepage introducing reusable dishware and washing services.”

### Live-only portfolio records

Observed on [Coaltech Work](https://coaltech.in/work): Pruthviraj Dodamani, Skazka Beach Resort, and DMen Wear. They are absent from current local project data and public assets. Treat as candidate evidence only. [OWNER INPUT REQUIRED] Confirm role, permission, site status, source images, and whether each should remain. Do not add finished cases or invented slugs before this is settled. Confirm why Hybits Dishware appears as a local case while the live work list emphasizes CRM.

## 14. SEO keyword themes and search intent

Searches performed included every requested theme below. The table records an interpretation of sampled results. It does not promise ranking potential or represent an India-localized SERP export. Exact “premium” phrasing produced noisy results; use it as a quality qualifier rather than a forced keyword target.

| Query theme | Observed/inferred intent | Recommended destination | Useful response and evidence |
| --- | --- | --- | --- |
| website development company India | Commercial vendor comparison, scope/ownership/support questions | Web service | Verified India context, work, delivery and handover details. Sample first-party result: [ACSIUS](https://www.acsius.com/web-development) |
| custom website development for businesses | Commercial, fit for non-template needs | Web service | Explain when custom work is justified and what is included. [DevTrios](https://devtrios.com/services/custom-website-development) illustrates this service intent |
| premium website design and development | Commercial, craft and confidence | Web service + cases | Real typography, imagery and decision evidence. No “premium” badge or award claim |
| AI marketing agency India | Commercial, broad service comparison | AI service | State actual task/channel scope and geographic facts. [Tigma](https://studio.tigmagram.com/services/ai-marketing) is a direct service result |
| AI marketing strategy for businesses | Mixed educational and service investigation | AI service initially | Explain pilot selection, inputs and review responsibility. [BCG's framework](https://www.bcg.com/publications/2024/blueprint-for-ai-powered-marketing) illustrates the planning dimension |
| AI content marketing | Mixed definitions, workflows, software and services | AI service section | Explain sources, draft, review and distribution boundaries. [Braze](https://www.braze.com/resources/articles/ai-content-marketing) discusses lifecycle use cases |
| AI automation for marketing | Mixed implementation and tool selection | AI service only if automation is offered | Show one actual workflow, failure handling and maintenance. [IBM](https://www.ibm.com/think/topics/ai-marketing-automation) explains the category |
| website redesign company | Commercial, existing-site improvement | Web service redesign section | Preserve useful content/URLs, show actual before/after decisions. [WebsiteRedesign.com](https://websiteredesign.com/website-redesign-company/) is a service example |
| digital product development | Broad commercial/product discovery | Retained product page if offered | Narrow to evidenced interface/platform scope. Product results are not automatically website buyers |

Highest priorities: correct origin signals, create distinct service content and metadata, improve case evidence, connect service/case/contact paths, and publish real business identity. Journal work is lower priority until the sales pages are useful.

Use [Google's people-first guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) as the editorial standard: provide original experience, useful detail and clear responsibility for content. Avoid pages created merely to capture keyword variants. When a journal becomes justified, start with a documented decision such as preparing website content or choosing one marketing task for a pilot. Assign an actual reviewer and cite original artifacts.

## 15. Titles, descriptions, and social metadata

These are draft rendered titles including the brand. Avoid adding the brand twice through Next's title template. Descriptions summarize useful page contents rather than promise results. Owner approval conditions from section 8 apply to each row.

| URL | Suggested title | Suggested meta description |
| --- | --- | --- |
| `/` | Coaltech: Website Development & AI Marketing | Explore Coaltech's website development and AI marketing services, selected projects, and approach to planning, design, delivery, and review. |
| `/work` | Selected Website & Product Work \| Coaltech | Explore the MatchPod website, Hybits Suite interface, Animathon event website, and Hybits service website in Coaltech's selected project collection. |
| `/services` | Website & AI Marketing Services \| Coaltech | Compare Coaltech's website development and AI marketing services. Find the scope, inputs, and next steps for the work your business needs. |
| `/services/web-development` | Custom Website Development \| Coaltech | Explore website design and development for businesses, including page planning, responsive interfaces, project reviews, and delivery scope. |
| `/services/ai-marketing` | AI Marketing Strategy & Content Workflows \| Coaltech | Explore AI-assisted marketing workflows, the source material they need, human review responsibilities, and how a focused pilot can be scoped. |
| `/about` | About the Studio \| Coaltech | Meet the people responsible for Coaltech's work, learn the Co + Al story, and see how website and marketing projects are planned and reviewed. |
| `/contact` | Discuss Your Project \| Coaltech | Tell Coaltech about your website or marketing project. Send a short enquiry or email management@coaltech.in with the work you need help with. |
| `/work/matchpod` | MatchPod Website Project \| Coaltech | A look at the MatchPod website, its roommate-compatibility proposition, and the page details that introduce the product. |
| `/work/hybits-suite` | Hybits Suite Interface Project \| Coaltech | Explore the Hybits Suite dashboard, including navigation for customer records, inventory, orders, invoices, payments, and subscriptions. |
| `/work/animathon` | Animathon Event Website \| Coaltech | A look at the Animathon event website, with competition and experience navigation and a visible registration entry point. |
| `/work/hybits-dishware` | Hybits Dishware Website \| Coaltech | Explore the Hybits website and its presentation of dishware and washing services through product imagery, service information, and contact links. |
| `/services/social-media-marketing` | Social Content & Campaign Support \| Coaltech | Explore Coaltech's social content scope, supported formats, review process, and the information needed to plan a campaign or publishing brief. |
| `/services/app-development` | Digital Product Interfaces \| Coaltech | Explore Coaltech's product interface work, including dashboards, user flows, and the design and development scope available for your project. |
| `/privacy` | Privacy at Coaltech | Read how Coaltech handles contact enquiries, which information is collected, and how to contact the studio about your data. |

After case approval, make descriptions more specific with the actual role or central decision where useful. These descriptive drafts do not establish attribution. Hold any case publication that lacks permission or an accurate contribution record.

For every indexable route: one clear H1, logical H2/H3 hierarchy, absolute self-canonical on the confirmed host, unique title/description, OG title/description/URL/image, and matching Twitter card. Create a real 1200×630 social composition from the mark and approved image, with important content away from crop edges. The current square mark alone is an unsuitable default large landscape card. Define image dimensions and alt text. Use no fake award seals.

Noindex preview environments through appropriate headers/meta and access protection, not robots blocking alone. Robots must allow resources needed for rendering. Only canonical, public, successful indexable URLs belong in the sitemap. Omit redirects and anchors. Use `lastmod` only for real material changes. Confirm the deployed 404 returns an actual 404. Google may rewrite titles/descriptions; neither is a guaranteed display format.

## 16. Internal-linking plan

| Source | Destination | Anchor/context |
| --- | --- | --- |
| Home | Work and case lead | “See selected work” and named project title |
| Home | Web and AI services | Full service names beside scope descriptions |
| Web service | MatchPod, Animathon, Hybits Dishware | Project name plus the relevant decision, only after attribution |
| AI service | Real pilot/example section | “See how the review works”; no link to unrelated dashboard as marketing proof |
| Web service | AI service | Continued content or campaign needs, as a separate optional service |
| AI service | Web service | Landing pages/website destination needs, without bundling by implication |
| Work | Each case | Descriptive name and category, not four “Learn more” links |
| Case | Matching service, Work, contact, relevant next case | Choose the next case by useful relation, not only array order |
| Services hub | Primary and retained offered services | Plain-language service labels |
| Studio | `/about#process`, services, work, contact | Responsibilities, delivery artifacts, and evidence |
| Contact | Privacy and services | Place privacy context beside the form |
| Footer | Work, services, Studio, contact, privacy | No placeholder social/legal links |

Use native crawlable links. Do not rely on JavaScript click handlers for navigation. Breadcrumbs should reflect page hierarchy even when a service is directly in the top navigation. Do not link empty future journal or process routes.

## 17. Structured-data plan

Markup must describe the visible page and use supported Schema.org types. Valid vocabulary does not guarantee a Google rich result. See [Google's introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) and [Organization guidance](https://developers.google.com/search/docs/appearance/structured-data/organization).

| Type | Location and fields | Conditions |
| --- | --- | --- |
| Organization | Home, stable `https://coaltech.in/#organization`; name, URL, logo | Brand can be an Organization without claiming incorporation. No invented `legalName`, foundingDate, headcount, award, revenue or address |
| WebSite | Home, stable `#website`; name, URL, publisher reference | Do not add SearchAction without a real site search |
| WebPage / AboutPage / ContactPage / CollectionPage | Relevant routes; name, URL, description, isPartOf | Match the actual page type and content |
| BreadcrumbList | Service pages and cases, Studio/Contact where visible | Render useful breadcrumbs that agree with markup |
| Service | Confirmed service-detail pages; name, serviceType, description, provider | [OWNER INPUT REQUIRED] Scope and area served. No unsupported price/Offer or guaranteed result |
| CreativeWork | A substantial case if useful; name, description, image, creator where proven | [Schema.org CreativeWork](https://schema.org/CreativeWork). Separate the case article's author from the underlying project's creator |
| Article | Only if a case is actually an authored editorial article | Real author and dates, not fabricated publication history |
| LocalBusiness | Omit initially | Public location data in old copy is insufficient confirmation of current location, business type, or public visiting address |
| FAQPage | Omit by default | Consider only for genuine visible FAQs if still useful/appropriate under current guidance. Do not promise FAQ rich results |

Use [Schema.org Service](https://schema.org/Service) for actual service descriptions. There is no special “CaseStudy” rich-result guarantee. Avoid Product, SoftwareApplication, Review, AggregateRating, or a nonexistent project type merely to make cases look rich. Recheck Google documentation during implementation: the previous FAQ documentation URL redirected to Search updates during this research.

Validate JSON-LD syntax and vocabulary with Schema.org's validator, and test Google-supported types with Rich Results Test. A Service or CreativeWork can be semantically valid without generating a supported rich result. Do not treat an empty rich-result report as automatic schema failure.

## 18. Image and asset plan

All seven current public files were inventoried. Sizes below are source bytes, not delivered image payloads. PNG dimensions were read from their file headers.

| Asset | Source dimensions/bytes | Use and treatment | Alt/provenance action |
| --- | --- | --- | --- |
| `projects/matchpod-hero.png` | 1898×910, 381,161 bytes | Website evidence, preserve readable proposition and controls. Request mobile/source update | Alt in case dossier. Confirm owner, capture date and current version |
| `projects/hybits-suite-dashboard.png` | 1917×908, 174,456 bytes | Product-interface evidence. Account/order details require permission or a safe capture | Describe navigation, omit account data. Record redaction or demo-data provenance |
| `projects/animathon-hero.png` | 1900×907, 283,950 bytes | Event identity evidence. Pair with a useful content/registration screen | Describe event navigation. Confirm artwork/video rights |
| `projects/hybits-dishware.png` | 1896×907, 814,590 bytes | Service explanation, current largest PNG. Verify embedded claims before publication | Describe service page, not environmental metrics. Confirm photography rights |
| `coaltech-mark.webp` | 1200×1200, 39,270 bytes | Original navy/cream Co Al mark, preserve as brand asset | `Coaltech` if standalone, `Coaltech home` for functional home link. Avoid duplicate accessible naming |
| `favicon.ico` | 59,404 bytes | Preserve pending small-size visual QA | No alt text. Confirm crisp favicon forms during implementation |
| `manifest.json` | 353 bytes | Retain useful metadata after identity consistency review | No image alt. Does not by itself establish an installable PWA |

The four source screenshots have different ratios from the hardcoded 1900×950 dimensions used by components. Use actual aspect ratios and reserve layout space. Cropping can be editorial, but should not cut off the specific UI detail the caption discusses. On mobile prefer an authentic mobile capture; otherwise show the uncropped desktop evidence with a readable detail crop rather than pretending it is responsive proof.

Maintain an asset register with original filename, source owner, capture date, permission, project/version, derivative sizes, redactions, rights restrictions, and alt text. Asset presence is not a license. Keep originals intact. Do not recolor client work to make it match Coaltech.

Generate responsive AVIF/WebP derivatives during implementation, with PNG fallback when necessary. Suggested widths: 480, 768, 1200 and 1600, capped by source dimensions. Tune compression for interface text and compare visually. Plan initial mobile project images around 100–180 KB where legibility permits; this is a budget, not a measured current result. Use lazy loading below the fold, real `sizes`, intrinsic dimensions, and one justified high-priority image.

Missing authentic assets, in priority order: role-confirmed current website captures, a mobile pair, a real AI workflow with review annotations, studio/person imagery if the owner wants it, and a landscape OG image. A diagram built from a confirmed workflow can be rendered with HTML/SVG; no generated imagery is needed to convey an operational process.

## 19. Image-generation prompts

No images are generated in this phase. Authentic project and process material takes priority. Generated imagery is optional brand atmosphere only and cannot fill an evidence gap.

**Prompt A, optional origin detail:** “Create a restrained editorial still life for Coaltech's abstract material identity. A dense cobalt-blue solid block beside a thin folded aluminium sheet, on a matte warm off-white surface. Side lighting reveals small surface variations and a clean contact shadow. Asymmetric composition with generous empty space for separately typeset text. Palette anchored to #1247A5, #07162F, #E5E7E8 and #F4F3ED. No letters, numbers, logos, people, office, screens, charts, particles, neon, gradients, chrome typography, or floating objects. Landscape 3:2. This is conceptual brand artwork, not a photograph documenting an actual Coaltech object.”

Use only once near the origin or Studio story if real artifacts are insufficient. Decorative alt should be empty when adjacent text explains the concept. If the image itself teaches the contrast, alt: “Concept illustration of a cobalt block beside a folded aluminium sheet.” Store generation provenance internally.

**Prompt B, optional editorial background crop:** “A close, quiet composition of matte aluminium with a single deep cobalt edge entering the lower-left corner. Fine tactile surface detail, soft natural shadows, flat paper-colored background, no reflective chrome, no decorative circuitry. Leave the upper two-thirds visually calm. No text, symbols, logos, devices, people, workspace, or data visualization. Vertical 4:5 and landscape 16:9 variants. Abstract conceptual artwork using #E5E7E8, #F4F3ED, #1247A5 and #07162F.”

Use as a secondary Studio crop only if it adds compositional value. Empty alt when decorative. Do not place it as case-study proof, fake hardware, fake campaign output, or an image of the studio's actual office. Do not put generated text inside the social card: typeset approved copy separately from the original mark and real imagery.

## 20. Motion and interaction brief

Principle: scrolling moves the document; interaction moves the interface. Default state is still. Each behavior must remain understandable with JavaScript unavailable or motion reduced. Motion implementation skills and the installed Next.js guides must be loaded when implementation begins; no animation dependency is selected now.

Use the existing easing `cubic-bezier(.16,1,.3,1)` as **E** below. Durations are proposed design tokens, not measured present behavior. Delays are zero unless specified. Essential means the state change is necessary; interpolation is always optional.

| Behavior/category | Trigger and purpose | Properties, duration, easing, delay | Mobile | Reduced motion | Risk and priority |
| --- | --- | --- | --- | --- | --- |
| Inline Co + Al / Bond → Release | First visit, teach name origin without covering content | Local transform/opacity in reserved box, total 1100ms, E; wordmark resolution starts at 550ms | Smaller inline mark, same readable hero | Final wordmark immediately; origin still readable | Optional. Hydration/storage must fail safely. No LCP text hidden |
| Skip intro / Release | Activate visible “Skip animation” or move onward | Set final state immediately, 0ms, no easing/delay | Same touch control | No animation control needed when sequence absent | Essential when sequence runs. Never intercept scrolling |
| Link/button attraction / Attract | Hover or focus makes destination apparent | Arrow translate up to 2px, underline transform, 180ms E, 0 | Hover only on hover-capable pointers; native active state | Static underline and focus ring | Optional low cost. Never move hitbox or follow pointer |
| Repeated navigation feedback / Attract | Hover/focus on top navigation | Underline/color, 120ms E, 0 | Static active/expanded states | Instant static feedback | Optional, low cost. `aria-current` supplies persistent state |
| Mobile menu / Form | Explicit button reveals links | Prefer in-flow disclosure, immediate layout change; optional opacity 180ms E, 0 | Full-size targets, scrollable with long labels | Immediate open/close | State essential. Avoid animated height and content clipping |
| Menu close / Release | Close button, Escape, or navigation | Opacity 160ms E, 0, focus restored when appropriate | Same | Immediate | Low cost. Focus must not wait for visual exit |
| Project hover / Form | Hover previews that image is a link | Image scale 1 → 1.015 inside fixed frame, 240ms E, 0 | No zoom on touch, persistent caption | Static image plus link/focus | Optional. No saturation filter or large GPU layer by default |
| Project opening / Bond | User follows case link; preserve visual context | Progressive shared-image view transition, 450ms E, 0 | Omit if costly or unstable; normal route works | Normal route and immediate content | Optional medium risk. No route delay, screenshot flash, or motion dependency |
| Project settling / Release | End of supported project transition | Same transition completes at final position within 450ms, no separate bounce | Normal final image | Final layout | Optional. Do not add a second long sequence |
| Service-row state / Attract | Hover/focus signals destination | Arrow transform, 180ms E, 0 | Static full-row link and label | Static underline/focus | Optional. Replace padding animation to avoid layout work |
| Form feedback / Release | Submit, success, or recoverable error | Persistent text status instantly; optional status opacity 160ms E, 0 | Same | Instant text | State essential. No result conveyed only by motion or color |
| FAQ disclosure / Form | Explicit summary activation if FAQs are published | Native open/close, 0ms | Same | Same | State essential. No animated height required |

Explicit decisions for other requested animation ideas:

- Hero text entrance: **omit**. The H1 and service explanation are visible in the initial HTML and at first paint.
- Word/line masking and general text reveals: **omit**. They add reading delay and clipping risk.
- Section reveals: **omit by default**. Viewport entry is not a sufficient reason to animate content.
- Image cropping: choose a static crop per breakpoint. No scroll-scrub settling.
- General page/route transitions: native navigation. Only the optional project-context transition above is proposed.
- Filters: not needed for four projects. If the portfolio grows, use real buttons, persistent selected state, result announcements, immediate filtering and optional 180ms opacity; reduced motion is instant, with no forced masonry reshuffle.
- Cursor: keep native pointer/text cursors. No custom following object or contextual circle.
- Theme transitions: content sections have fixed surface roles. No scroll-driven global background tween and no automatic mode flip.

Reject scroll hijacking, artificial inertia, smooth-scroll libraries, forced horizontal scrolling, endless parallax, pinned reading sequences, constant motion, autoplay showreels, excessive stagger, blur transitions, and any animation that delays focus or content access. A full static capture and the reduced-motion experience must pass the same hierarchy review.

## 21. Visual art direction

### Context and foundations

Use Coaltech's existing system as a material contrast: dense ink/cobalt and open paper/aluminium. Typography and project imagery do most of the work. Current local colors are intentional extensions of the original navy/cream mark; do not replace the mark or quietly recolor it. [OWNER INPUT REQUIRED] Confirm that the current local palette extension and textual wordmark are approved brand expressions.

| Token | Value | Role |
| --- | --- | --- |
| Ink | `#07162F` | Body/headline text, compact dark ending, structural emphasis |
| Cobalt | `#1247A5` | Main action, one material interruption, selected identity detail |
| Bright cobalt | `#245FD0` | Focus on compatible light backgrounds only |
| Aluminium | `#E5E7E8` | Workflow/process surface and image breathing room |
| Paper | `#F4F3ED` | Primary canvas |
| White | `#FBFAF6` | Text on cobalt/ink, contextual dark-surface focus |
| Muted | `#626A75` | Secondary copy on paper only after context check |
| Line | `#C8CBD0` | Decorative grouping lines, not sole form boundaries |

Measured specified solid-pair contrast using sRGB relative luminance: ink/paper 16.22:1; muted/paper 4.92:1; muted/aluminium 4.41:1; white/cobalt 8.14:1; bright cobalt/cobalt 1.47:1; bright cobalt/ink 3.11:1; line/paper 1.46:1. These are exact-token calculations rounded to two decimals, not a full browser contrast audit. Text opacity changes require recomputation. Use ink instead of muted on aluminium. Use a white or two-tone ring on cobalt. Keep normal text at least 4.5:1 and meaningful non-text indicators at least 3:1 against the relevant adjacent surface.

Cobalt should occupy roughly a tenth of the visual area as a direction, not a quota. Let paper/aluminium create air around dense work. Use one deliberate ink ending or short origin accent. Surface changes belong to content sections and happen through ordinary scrolling; avoid alternating colors mechanically every other block.

### Typography and composition

- Retain the license-safe native grotesk stack initially. Native Arial/Helvetica is an intentional baseline, not a reason to introduce a new font. If the owner has a licensed brand font, inspect its files/license and compare a specimen before adopting it. No default serif substitution.
- Display: proposed 44–64px on compact mobile, 76–112px on desktop as content permits, using fluid rem-based sizing. Start around 1.02 line-height for short display lines and test descenders. Use 1.1–1.2 for longer headings. Avoid the present .82 line-height as a blanket token.
- H2: approximately 32–56px; H3: 22–28px. Body: 17–19px, 1.5–1.6 line-height, measure about 60–70ch. Captions: 14px. Metadata: 12–13px system mono, reserved for role/year/material notation.
- Use weight and controlled scale, not a different typeface for an emphasized word. Check available weights with `font-synthesis: none`. Do not pretend native 750 produces a distinct variable-font weight.
- Desktop: maximum 1440px working width, 12-column grid, 20–24px gutters. Text commonly occupies 5–7 columns. Mobile: 16–20px side margins, deliberate single-column sequence, comfortable gaps between target areas.
- Spacing proposals: 8, 16, 24, 32, 48, 64, 96 and 128px role-based steps. Use roughly 64–88px mobile section rhythm and 96–144px desktop where content earns it. Compact sections may be shorter. Do not force every hero to a screen height.
- Borders: 1px for useful structural divisions. Content containers and project frames remain square. No nested rounded panels. Native input/button appearance may be normalized only while preserving accessibility.

### Component-level direction

| Element | Anatomy and states | Responsive requirement |
| --- | --- | --- |
| Hero | Descriptor, one H1, short body, primary work link, secondary enquiry, authentic image detail | Final copy dictates wrapping. No isolated punctuation line or crop that obscures controls |
| Project composition | Fixed-ratio media, category, project title, exact contribution, short explanation | Caption always visible. Pair wide view with detail/mobile evidence when available |
| Website service | Large page evidence plus decision annotations and deliverables | Annotations become text below the image, not tiny overlaid labels |
| AI service | Source → review → output as actual documents with captions | Linear reading sequence, no horizontal drag requirement |
| Navigation | Native links, current state, explicit Menu/Close control | Prefer in-flow disclosure with targets at least 44px tall |
| Form | Persistent labels, inputs, helper text, submission state, recovery | Inputs at least 16px; submit reachable with keyboard open |
| Studio | Real name/role and genuine working artifact | Text alone is preferable to fabricated office imagery |

Default/hover/focus/active states must be distinct without changing layout. Disabled/sending form state must remain legible. Empty project collections should never ship; if data fails, show a plain recovery link to contact without fake placeholder cards. Error, success, and expanded states retain textual meaning when motion is absent.

The originality test is practical: remove the logo and look for the elemental typography, controlled material contrast, specific project decisions, and useful scope. A generic headline inside a cobalt rectangle does not pass. No glass, neon, arbitrary gradients, sparkles, decorative metrics, mock testimonials, or copied reference layouts.

## 22. Accessibility requirements

Target WCAG 2.2 AA and verify with automated checks plus keyboard and screen-reader review. [WCAG 2.2](https://www.w3.org/TR/WCAG22/) is the source for conformance criteria; a visual inspection alone cannot establish compliance.

- Native document landmarks, one clear H1, nested headings, first-focusable skip link, meaningful link labels, appropriate language attribute.
- All paths usable with keyboard. Visible focus across paper, aluminium, cobalt and ink. Do not rely on color alone for current/selected/error states.
- Mobile navigation explicitly defined as disclosure or modal. A modal requires focus containment, Escape, restoration, and inactive background. A disclosure must not cover the focused page content.
- Normal text contrast at least 4.5:1; large text and meaningful non-text controls at least 3:1 under applicable criteria. Test opacity/composited colors, focus, disabled handling, and forced-colors mode separately.
- Design for 44×44px touch targets and adequate spacing. At least meet the applicable 24×24px AA target-size/spacing criterion and exceptions.
- Informative images have useful alt text; decorative generated art has empty alt. Do not repeat an adjacent caption word for word or describe unrelated decoration.
- Labels remain present, validation names the field/problem, errors preserve input, and submission results announce through a stable status region. Confirm accessible name and visible label agree.
- Reflow at 320px, text resize/zoom at 200%, and representative 390, 768, 1024, 1440 and 1920px views. Check text-spacing overrides, long names, long email addresses, and mobile keyboard obstruction.
- Reduced-motion and no-JavaScript paths show the complete content. No hidden default text waiting for IntersectionObserver.

Acceptance requires a recorded keyboard path from entry to contact, screen-reader checks for navigation/form state, and zero unresolved critical/serious automated issues in the covered routes. Automated success is necessary but insufficient.

## 23. Performance requirements

Targets requested by the owner: LCP **under 2.5 seconds**, INP **under 200 milliseconds**, CLS **under 0.1**. Evaluate field data at the 75th percentile where enough data exists, segmented by device. Lab tests diagnose issues and provide a provisional release check; they do not prove field INP. See [web.dev Web Vitals](https://web.dev/articles/vitals).

Proposed implementation budgets, to validate against a baseline: no decorative hero video/3D, no added animation framework by default, no third-party marketing scripts, no unnecessary webfont download, and mobile project derivatives generally around 100–180 KB where readable. Measure transferred bytes rather than equating source PNG sizes with delivered Next Image payloads.

Keep static content in Server Components. Client code belongs in navigation, form handling, and the optional inline intro. Reserve image dimensions and prevent font/layout swaps. Do not prioritize a below-fold image while the actual hero competes for bandwidth. Audit route prefetching if project assets are fetched unnecessarily.

At implementation: baseline the existing checkout under a production build; run representative home, service, work, case and contact routes on a throttled mobile profile. Record three runs, tool versions, network/device settings and ranges. Check slow interactions and long tasks on a real ordinary phone where possible. Recheck live responses after deployment. Do not promise Lighthouse 100 or publish unmeasured speed claims.

Resolve deployment explicitly: current `next.config.ts` is not a static-export configuration. A Next server/image optimizer and the root PHP script require a supported hosting arrangement. Confirm whether a reverse proxy serves PHP on the existing host or whether an approved export strategy is necessary. Preserve `/contact.php` behavior. Check old service-worker caches during migration so returning visitors do not keep the Vite shell.

## 24. Content risks and unsupported claims

| Risk | Evidence boundary | Required action |
| --- | --- | --- |
| AI marketing capacity | Owner requested business focus, repository proves no delivered marketing service | Confirm scope and make a genuine pilot/example before claiming experience |
| Project attribution | Data and screenshots are insufficient proof of who made each part | Approved role and collaborator credits per case |
| Outcome language | “Safe,” “easier to run,” “high-converting” imply results not documented here | Use descriptive interface language or provide measured evidence |
| Company identity | AGENTS states sole proprietorship; old public copy lists location/contact | Use Coaltech, request current public details, avoid corporate suffixes |
| Years/dates | Project data lists 2025/2026 without source history | Confirm year/launch scope or omit year |
| Embedded claims | Dishware screenshot includes “first,” sterilization, waste and delivery claims | Verify or use a claim-safe approved source capture |
| Dashboard information | Account, organization, name and order details visible | Obtain permission or use a safe capture/redaction with provenance |
| Stack/service breadth | Coaltech site uses Next/React; other project stacks are unknown | Do not generalize to native apps, backend, ecommerce or integrations |
| Scope promises | “Same thinking” and “small enough” imply a delivery arrangement | Describe actual responsibility after owner confirmation |
| Legal/privacy links | Live links are placeholders, local privacy absent | Publish factual owner-approved information; no invented terms |

Testimonials, awards, rankings, client logos as endorsements, years of experience, team size, financial metrics, conversion results, locations and response guarantees require a source and permission where relevant. No proxy evidence from another workspace is used to assert Coaltech capability.

### Writing review record

`humanize` and `humanizer` were applied as editing checks: state the task concretely, preserve evidence boundaries, remove inflated adjectives, avoid repeated contrast formulas, and keep CTA language tied to the action. The copy drafts cover positioning options, page H1s, homepage text, service introductions, case summaries, titles/descriptions and form messages. The planning tables are intentionally structured because the requested artifact is a specification, not public prose.

Do not certify this copy as human-authored or detector-proof. It was generated and edited with AI. `ai-check` is used for stylistic review, with source/owner review still required. The user's supplied brand thesis and preferred final CTA remain deliberate brand lines rather than being rewritten to satisfy a detector score.

AI-CHECK REPORT
===============

VERDICT: Uncertain
CONFIDENCE: Low
OVERALL SCORE: 9 / 27
AI-EDITED FRACTION: Pure AI

SIGNAL BREAKDOWN
----------------
A. Perplexity             1  Some broad words remain in the positioning options.
B. Burstiness             1  Short service snippets have limited rhythmic evidence.
C. Hedge density          0  Public copy avoids reflexive hedges; internal evidence labels are necessary.
D. Structural tells       2  Parallel short instructions recur across alternative positioning samples.
E. Specificity            2  Marketing copy lacks owner-supplied examples; those cannot be invented.
F. Transitions            0  No stock conclusion or article-opening transitions in proposed public copy.
G. Punctuation            0  Proposed public copy uses plain punctuation without decorative dashes.
H. Voice / register       1  The studio voice still needs an actual operator's account of the work.
I. Rhetorical scaffolding 2  Some brief headline constructions remain polished and aphoristic.

EVIDENCE LOG
------------
SIGNAL-A | “keep their marketing moving” | severity: weak
SIGNAL-B | Short H1 and CTA fragments cannot establish natural long-form rhythm | severity: weak
SIGNAL-D | Alternative snippets repeatedly open with instructions such as “Start,” “Agree,” and “We review” | severity: moderate
SIGNAL-E | Proposed AI service passages describe tasks without a named delivered workflow | severity: moderate
SIGNAL-H | Studio section has no owner-supplied biography or firsthand anecdote | severity: weak
SIGNAL-I | “Give each page a job.” | severity: moderate

WHAT GAVE IT AWAY
-----------------
The service copy has a clear subject but little firsthand project detail. The most useful next edit is to replace general workflow language with a real example and its reviewer. The short headings are marketing devices, not evidence of authorship.

RECOMMENDED FIXES
-----------------
Replace the broad marketing phrase with the actual offered deliverable. Add one approved account of a decision from each lead case. Review the full assembled page aloud with the owner once factual gaps are filled, avoiding repeated command-shaped headings.

This is an editorial judgment, not an external classifier result or a measured probability. The residual lack of specificity is recorded as an owner dependency instead of being filled with invented facts.

## 25. Owner questions

The complete actionable questionnaire is [OWNER_INPUT_REQUIRED.md](OWNER_INPUT_REQUIRED.md). Highest-priority answers:

1. Which website and AI marketing tasks will Coaltech sell now, and which are explicitly excluded?
2. For each project, what did Coaltech actually contribute, what is the relationship, and what can be shown publicly?
3. Who performs and reviews the work, and which names, location and business details may be published?
4. What are the engagement terms: ownership, inputs, revision boundaries, realistic schedule, pricing policy, and support?
5. What real AI marketing example can demonstrate source material, human review, output, and limitations?

A separate launch dependency is the hosting plan and tested PHP delivery path. Collect Search Console and deployment facts before any URL migration. No answer is assumed merely because it appeared in older public copy.

## 26. Implementation phases

| Phase | Work and output | Completion gate |
| --- | --- | --- |
| A. Evidence and offer | Owner answers, claims register, project rights, service scopes, deployment decision, current URL/search inventory | Every launch claim has a source or is omitted; no guessed service commitments |
| B. Final copy and static direction | Complete homepage, distinct web/AI service copy, two lead cases, other concise records, metadata, 390px and desktop static compositions | Owner reviews concrete copy and compositions; mobile and static originality checks pass |
| C. Structure and semantics | Reuse App Router and shared primitives; content models, route metadata, headings, internal links, accessible navigation/form | Routes and contact payload preserved; no styling dependency added casually; local Next docs read |
| D. Assets and visual refinement | Safe approved captures, responsive derivatives, typography, color roles, final layouts | Rights/provenance complete, contrast fixed, no unreadable crop or fictional evidence |
| E. Motion enhancement | Inline origin and justified interactions from section 20; relevant animation guidance loaded | Static and reduced-motion experience remain complete, native navigation works without enhancement |
| F. QA and delivery rehearsal | Type-check, lint, production build, route checks, browser/a11y/zoom/mobile review, production-like PHP delivery test, migration rehearsal | Recorded evidence for checks and recovery path; no unresolved release blockers |
| G. Approved release and follow-up | Deploy to confirmed target, verify canonicals/robots/sitemap/redirects, approved enquiry test with inbox receipt, cache check and Search Console submission | Owner authorizes deployment, live evidence captured; field CWV follow-up explicitly tracked |

No production edits, dependency installation, deployment, image generation, analytics addition, or real enquiry submission belongs to this research phase. During engineering, read the installed Next.js documentation specified by AGENTS before code changes. Keep the existing uncommitted migration work intact and establish an agreed baseline rather than resetting it.

For URL changes follow [Google's site-move guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes): map real equivalents, update internal references and canonical signals, and verify redirects and indexable destinations. Avoid combining a speculative domain move with this revamp.

## 27. Acceptance criteria

### Research-phase deliverable

- [x] Repository and live site distinguished; old architecture documents flagged.
- [x] Four positioning directions with client/problem/proof/SEO/risk and sample language.
- [x] Recommended navigation, retained-route decisions, and deferred pages stated.
- [x] Page dossiers cover intent, audience, keywords, H1, narrative, outline, CTAs, proof, links, schema and owner dependencies. Titles/metas appear for every proposed launch route.
- [x] Homepage and two primary service strategies differ in purpose, copy and visual rhythm.
- [x] All four local projects have evidence boundaries and case metadata; live-only project gaps recorded.
- [x] Public asset inventory, alt directions, provenance, optional generation prompts, motion specification, visual system, accessibility and performance criteria documented.
- [x] Owner questionnaire contains only requested facts/questions.
- [x] Changes limited to the two requested Markdown documents.

### Copy and design approval before implementation

- [ ] Website and AI marketing scopes signed off, including exclusions and human review responsibility.
- [ ] Exact role/rights established for every displayed project. At least two lead cases explain a real decision with evidence.
- [ ] Real AI workflow example exists or the page transparently offers a bounded owner-approved pilot without claiming delivery history.
- [ ] No public owner markers, drafting notes, unsupported years, inherited result claims, or fabricated social proof.
- [ ] Primary services understandable from the initial hero without waiting or scrolling through an intro.
- [ ] Static desktop/mobile compositions approved before motion work.

### Engineering and launch acceptance

- [ ] Existing and new routes resolve intentionally; no unexplained deletion. Any redirects map to relevant equivalents.
- [ ] Unique rendered titles, descriptions, one H1, canonical and social metadata verified for each indexable route.
- [ ] Live sitemap/robots use the confirmed origin, valid URLs and genuine dates; preview environments are protected/noindexed appropriately.
- [ ] Structured data matches visible facts and validates. No fake rating/review/FAQ or project schema.
- [ ] Keyboard, focus, screen-reader, contrast, reduced-motion, zoom and responsive checks recorded for representative route types and all shared interactions.
- [ ] Form success, server error, invalid input and network failure tested in an approved environment, with content retained on failure. Live inbox receipt separately confirmed after approved test.
- [ ] PHP endpoint remains operational under the chosen host setup. Old caches and service workers cannot strand returning visitors.
- [ ] `npm run type-check`, `npm run lint`, and `npm run build` pass for the implementation. Do not count prior-run results as new evidence.
- [ ] LCP/INP/CLS targets evaluated with documented lab/field limitations; no slow decorative sequence blocks reading or navigation.
- [ ] Source images and brand mark preserved, safe derivatives reviewed, social cards inspected, no new tracking introduced.
- [ ] Owner approves the actual release candidate. Post-launch field data, email reliability and search monitoring remain explicit follow-up work if not yet proven.

### Research source register

All pages below were accessed or attempted on 27 September 2026. Competitor analysis uses first-party descriptions only, with no independent endorsement of their numerical claims. Search-result-only examples are used only to classify intent.

- Coaltech homepage and Work were inspected in browser: [Home](https://coaltech.in/), [Work](https://coaltech.in/work). Robots/sitemap were fetched directly through PowerShell when the web reader returned an error: [robots](https://coaltech.in/robots.txt), [sitemap](https://coaltech.in/sitemap.xml).
- Competitive scope: [Webstacks](https://www.webstacks.com/), [Bakken & Bæck](https://bakkenbaeck.com/), [AREA 17](https://area17.com/), [Instrument](https://www.instrument.com/), [Ray Creations](https://www.raycreations.net/), [ibs Fulcro](https://www.ibsfulcro.com/), [Tigma](https://studio.tigmagram.com/services/ai-marketing), [Animalz](https://www.animalz.co/).
- Search-intent examples: [ACSIUS](https://www.acsius.com/web-development), [DevTrios](https://devtrios.com/services/custom-website-development), [WebsiteRedesign.com](https://websiteredesign.com/website-redesign-company/), [IBM](https://www.ibm.com/think/topics/ai-marketing-automation), [Braze](https://www.braze.com/resources/articles/ai-content-marketing), [BCG](https://www.bcg.com/publications/2024/blueprint-for-ai-powered-marketing).
- Standards and implementation planning: [Google people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [structured-data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data), [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization), [site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [Service](https://schema.org/Service), [CreativeWork](https://schema.org/CreativeWork), [Web Vitals](https://web.dev/articles/vitals), [WCAG 2.2](https://www.w3.org/TR/WCAG22/).
- Search limitations: no authenticated Search Console, keyword planner, backlink export or sales interview data was available. No competitor mobile/motion benchmarking was performed. Failed retrievals for some additional candidate studios were excluded from the comparative conclusions.
