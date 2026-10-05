# Coaltech design system

## Creative premise

Coaltech sits between two material behaviours: cobalt gives the work weight, precision and magnetic pull; aluminium gives it lightness, adaptability and room. The elemental story appears strongly at the beginning, then becomes an underlying design rule rather than recurring decoration.

## Colour

- Ink `#07162F`: primary text and the dense origin chapter.
- Cobalt `#1247A5`: the single expressive accent and interactive focus colour.
- Bright cobalt `#245FD0`: accessible focus indication.
- Aluminium `#E5E7E8`: adaptable secondary surface.
- Paper `#F4F3ED`: primary canvas.
- White `#FBFAF6`: high-contrast text on cobalt and ink.
- Muted `#626A75`: secondary copy.
- Line `#C8CBD0`: structural borders.

Cobalt is deliberately scarce. It marks the elemental idea, key interaction and one large compositional interruption. There are no decorative gradients or glows.

## Typography

The system uses Manrope, a variable grotesk self-hosted by Next.js. The SIL Open Font License is included in `public/licenses/manrope.txt`. Display text relies on tight tracking, controlled line-height and scale. Monospace is reserved for compact project and format metadata.

- Display: Manrope, 600-800 weight.
- Body: Manrope, 400-600 weight.
- Metadata: system monospace, 600 weight, uppercase.

## Grid and spacing

- Maximum working width: 1440px.
- Desktop project layouts use a 12-column editorial grid.
- Navigation and service layouts adapt at 900px. The homepage hero uses one column at 768px and the website collection uses one column at 700px.
- Section rhythm is intentionally varied. Repeated card rows are avoided.

## Shape

The core system is square and structural. Border radius is not used on content containers. Form follows the elemental tiles and editorial frames.

## Motion grammar

- Attract: underlines and small directional shifts on interactive targets.
- Form: project media subtly scales inside a fixed frame.
- Bond: Co + Al introduces the relationship between design and engineering in a single origin composition.
- Release: entrances settle into their final composition; repeating service artwork stops outside the viewport and all motion can be paused.

Shared timing lives in `src/index.css` and `src/styles/studio.css`. The 5 October 2026 creative-studio direction adds a kinetic type entrance, layered real website screenshots, once-only scene entrances, and viewport-gated graphic/reel compositions. Native scrolling is retained. No motion dependency, scroll handler, canvas, artificial inertia or blocking intro is required.

The global Pause motion button disables CSS motion and cancels active Web Animations. A system reduced-motion preference applies the complete static composition and hides the unnecessary pause control. Content is visible before JavaScript. Hero drift starts only once the motion controller is ready, keeping the fallback static. Route changes clean up observers and animations. Mobile navigation remains visible with motion paused.

## Creative studio composition

- The homepage opens with two lines of bold type and a layered portfolio composition. The current MatchPod screenshot remains the foreground project.
- Co + Al appears once as a name-origin composition, followed by project proof.
- Featured projects retain varying editorial scale. Website collection screenshots use two columns on desktop and one on mobile.
- Website and AI creative scenes explain the confirmed service scope with real screenshots and illustrative typographic format studies.
- Interior pages share bold full-width titles and the cobalt closing scene. Existing route titles, service facts, contact transport and site metadata remain intact.
- Working layouts are reviewed at 320, 390, 768, 900, 1024, 1440 and 1920px. The mobile version uses a single-column hero and a smaller, separately composed portfolio stage.

## Content rules

Copy is specific, short and evidence-based. Project records only use information supported by repository content. Case studies explicitly remain concise until verified context, process and outcomes are supplied.
