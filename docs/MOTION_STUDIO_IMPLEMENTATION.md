# Coaltech creative studio implementation

Implemented locally on 5 October 2026 following the owner's instruction to build the recommended cinematic, bold creative studio direction directly.

## Scope

The homepage now uses an animated type entrance, a layered composition of actual website screenshots, a Co + Al origin section, a larger editorial project wall, motion-led website and AI creative scenes, a website collection and a typographic studio closing. The header, footer, portfolio and service pages share the same type, palette and motion system.

Manrope is self-hosted through Next.js. Its original SIL Open Font License is bundled at `/licenses/manrope.txt`. No new JavaScript dependencies or tracking were introduced.

## Motion behavior

`MotionExperience.tsx` is the isolated client controller. Native Web Animations handle the initial type/image entrance and once-only section entrances. IntersectionObserver starts and stops the service artwork through viewport attributes. CSS handles the repeating transform motion and interface feedback.

The global pause control cancels active Web Animations and disables CSS animations. System reduced motion selects the complete static composition. Content stays visible without JavaScript. Observers, media listeners and animations are cleaned up when the route or motion preference changes.

## Preservation

All ten live website screenshot entries and four featured projects remain. The current MatchPod image stays in use. Routes, navigation labels, service facts, metadata and the existing contact transport are preserved. The PHP endpoint remains separate from the Next.js runtime.

## Validation

- Production build and lint passed.
- All 13 content routes passed unique-title, metadata, canonical, Open Graph and one-H1 checks. All 15 internal targets passed; unknown project returns 404.
- Existing contact-form success/failure/concurrency checks passed using mocked transport. No email was sent.
- Browser review covered 320, 390, 768, 900, 1024, 1440 and 1920px layouts. No horizontal document overflow was found in inspected views.
- Mobile navigation remains visible with motion paused. Escape closes it and restores focus to its trigger.
- Motion pause/play and viewport-gated service animation were verified in the production browser preview.
- `node scripts/check-motion.cjs` passed preference changes, manual pause, animation cancellation, observer/listener cleanup, once-only entrances and visible fallback using the actual controller with mocked DOM/media APIs.
- All ten website preview images loaded successfully in the production browser. The collection uses two columns on desktop and one on mobile.
- Desktop and mobile proof images are saved in `docs/screenshots/motion-studio-desktop.png` and `docs/screenshots/motion-studio-mobile.png`. No browser console warnings or errors were captured in the final production preview.

Final review on 6 October 2026 gated hero drift behind the initialized motion controller, keeping the no-JavaScript fallback static. Production build, lint, type check, route checks and both motion/contact verification scripts passed again. Browser pause/resume still works, with no warnings or errors captured in the rebuilt local preview.

## Preview and deployment

The local production preview uses `npm run start -- --port 3102`, at `http://127.0.0.1:3102/`.

This change has not been deployed. Hostinger Node.js Web App remains the current deployment path, with separate PHP handling required for the contact endpoint. Browser emulation of a system reduced-motion setting and production email delivery are not claimed by this local validation.
