# Home / Landing Page Redesign — Design Spec

**Date:** 2026-06-13
**Project:** A.A. Sha Impex and Exports (Next.js 15 / React 19, Pages Router, CSS Modules)
**Author:** AJITH + Claude

## Goal

Redesign the home/landing page into a "super latest", light & airy modern
experience with an **interactive particle-network background**, rewrite the
home copy to accurately reflect the real electrical-insulation business, and
bring the rest of the site into visual consistency with the new look.

In this site the home page (`pages/index.js`) **is** the landing page — a single
route. There is no separate landing page.

## Confirmed decisions

| Decision | Choice |
| --- | --- |
| Visual direction | Light & airy modern (lighten everything, including the hero) |
| Background animation | Interactive particle network (canvas, mouse-reactive) |
| Particle intensity (home hero) | **Balanced** — clearly visible + interactive, tuned soft so text stays crisp |
| Copy | Rewrite home copy to match the real business (remove generic "AI trade" boilerplate) |
| Scope | Home full rebuild + **light consistency pass** on inner pages (not full rebuilds) |

## Key findings from the existing codebase

- **Inner pages are already strong and accurate.** `Component/About`,
  `Component/Services`, `Component/Industries`, `Component/Products`,
  `Component/Contact` are light-themed, blue-accented, and use real content
  (ELANTAS varnishes, JBF RAK / ELANTAS Beck / Gujarat Polymers / Mithra
  partnerships, motor/transformer/generator applications, precision slitting,
  Class B/F/H insulation).
- **The home page is the outlier.** `pages/index.js` does **not** reuse any of
  that content. It has its own *generic* inline sections — "AI Logistics
  Optimization", "25+ Years", "Technology / Textiles / Agriculture /
  Pharmaceuticals" — that contradict the rest of the site, and a **dark hero**
  (`Component/Hero`, dark navy + gold) clashing with the **light body**.
- Because every other page is already light, **switching the home hero + body to
  light & airy unifies the whole site** rather than fragmenting it.
- Fonts already loaded in `globals.css`: **Orbitron** (headings) + **Rajdhani**
  (body). Keep them — they give the "latest tech" character.
- `AnimateOnScroll` (driven by `hooks/useInView`) supports: `fadeUp`, `fadeDown`,
  `fadeLeft`, `fadeRight`, `scaleUp`, `zoomIn`, `flipIn`, `riseIn`. Reuse it.

## Canonical business facts (single source of truth for copy)

- Established **1972**; **"House of Electrical Insulation"**; Chennai, India.
- Role: **Importers, Distributors, and Stockists** of electrical insulation
  materials (authorised importer & stockist).
- Numbers (reconciled — fix the home page's wrong "25+"):
  **50+ years**, **500+ customers**, **15+ product lines**, **100% quality**.
- Address: No.24, Sembudoss Street, Broadway, Chennai - 600 001.
- Phones: +91 94444 55626, +91 94441 84855, +91 81228 16789.
- Email: aashaimpexandexports@gmail.com.
- Brand partners: **JBF RAK LLC (UAE)**, **ELANTAS Beck India Ltd.**,
  **Gujarat Polymers**, **Mithra Fiber Glass Sleeve**.
- Real product groups: ELANTAS / A-SEAL insulating varnishes & thinners,
  Polyester films & tapes, Aramid & Nomex papers, DMD/FPF laminates, Kraft paper
  & Presspahn/pressboard, epoxy (FR4/G10) sheets, rubber compound tapes (OMEGA,
  A-SEAL), rayon/cotton tapes & lacing thread, fibre glass sleeves
  (PU/Silicone), fire-retardant fibreglass sleeves, webbing tape, precision
  slitting (German technology).
- Classes: B, F, H insulation.
- Industries served: electric motors, transformers, generators, fans/blowers,
  choke coils & reactors, switchgear & panels, pumps & compressors,
  railways & traction, renewable energy, automotive & EV, motor rewinding shops,
  heavy engineering.

## Architecture

### A. `<ParticleField />` — new reusable component

Path: `Component/ParticleField/index.js` + `Component/ParticleField/ParticleField.module.css`

Responsibility: render an animated, mouse-interactive particle network on a
`<canvas>`. One clear purpose; no business logic.

**Public interface (props):**
- `density` (number, default tuned for "balanced") — particles per area unit.
- `interactive` (bool, default `true`) — whether particles react to the cursor.
- `intensity` (`"subtle" | "balanced" | "bold"`, default `"balanced"`) — preset
  bundling speed, line opacity, link distance, and cursor-pull strength.
- `className` — passthrough for positioning/opacity from the consumer.

**Behavior:**
- Faint blue dots (`var(--pf-dot)`) drifting slowly; thin connecting lines drawn
  between dots within `linkDistance`; near the cursor, dots/lines brighten and
  drift gently toward it.
- Light-theme tuned colors driven by CSS variables so consumers can re-tint.

**Performance & safety (hard requirements):**
- Canvas only initialised inside `useEffect` (SSR-safe; no `window`/`document`
  at module scope).
- DPR-aware sizing; `ResizeObserver` (or window `resize`) to re-fit.
- Single `requestAnimationFrame` loop; **paused** when `document.hidden`
  (visibilitychange) and when the host element is off-screen
  (`IntersectionObserver`).
- Particle count capped and scaled down on small screens / high DPR to protect
  mobile perf.
- `prefers-reduced-motion: reduce` → **no JS animation loop**; render a static
  soft gradient (CSS only) as the fallback. Detected via `matchMedia`.
- Full cleanup on unmount (cancel RAF, disconnect observers, remove listeners).

**Placement:**
- **Home hero:** primary, "balanced" intensity, interactive, clearly visible
  but with a mask/opacity fade so it does not sit behind body copy.
- **Inner page hero/header bands:** reused at lower density + reduced opacity
  (and `interactive={false}` or subtle) as a cohesion accent — never a full-page
  fixed layer behind running text.

### B. Design tokens (`styles/globals.css`)

Promote the light palette to shared `:root` variables so all pages share one
source of truth:
- Accent gradient stops (blue `#3b82f6`, sky `#0ea5e9`, indigo `#6366f1`).
- Heritage micro-accent amber `#f59e0b` (used only on the "Since 1972" badge).
- ParticleField vars (`--pf-dot`, `--pf-line`, `--pf-bg`).
- Section rhythm, card radius, glass background, shadow scale.

Keep existing fonts and the reduced-motion global guard.

### C. Home page rebuild (`pages/index.js` + `styles/Home.module.css`)

Rebuild the home Hero to a **light** theme and replace the generic body sections
with accurate summary sections that link to the deep pages.

**New light Hero** (rewrite `Component/Hero/index.js` styling + integrate
`ParticleField`; keep the rotating featured-product showcase + bottom ticker
logic, which are good — only restyle to light):
- "House of Electrical Insulation • Since 1972" heritage badge (amber micro-accent).
- Brand title (A.A. SHA IMPEX & EXPORTS), real subtitle.
- CTAs: Explore Products → `/products`, Request a Quote → `/contact`.
- Count-up stats: 50+ Years · 500+ Clients · 15+ Product Lines.
- Rotating featured product card + orbital thumbnails + scrolling product ticker.

**Home body sections (all copy accurate, each links to its deep page):**
1. **About strip** — "Trusted Insulation Partners Since 1972"; importer/
   distributor/stockist summary → `/about`.
2. **What We Offer** — 4 real service cards: Insulation Material Supply ·
   Insulating Varnishes & Coatings · Precision Slitting Services ·
   Tapes & Sleeves Supply → `/products`.
3. **Industries** — 6 real applications (Electric Motors, Transformers,
   Generators, Switchgear & Panels, Railways & Traction, Automotive & EV) with
   bootstrap icons → `/industries`.
4. **Brand partners** — JBF RAK, ELANTAS Beck, Gujarat Polymers, Mithra
   (trust strip).
5. **CTA** — "Need Quality Insulation Materials?" → `/contact`.

Remove all "AI logistics / global trade / 25+ years / Agriculture / Pharma"
generic content. Keep the `<Meta>` block (SEO) intact.

### D. Inner pages — light consistency pass (no rebuilds)

For `about`, `products`, `industries`, `contact`: keep existing layouts; add the
faint shared `ParticleField` accent to their hero/header band and align
buttons, eyebrows, section spacing, and shadows to the new tokens. Flag (do not
silently rebuild) any page that needs more than light touch-ups.

## Out of scope (YAGNI)

- No new dependencies (particles are hand-rolled canvas; no three.js/tsparticles).
- No CMS, no new routes, no functional/data changes to the contact form or APIs.
- No full rebuilds of inner-page layouts.
- No changes to `Meta`/SEO schema content beyond what copy accuracy requires.

## Testing / verification

- Run `next dev`; load `/`, `/about`, `/products`, `/industries`, `/contact`.
- Verify at desktop (≥1200px), tablet (~768px), and mobile (~375px) widths.
- Confirm: no console errors, no hydration mismatch, particle loop pauses on
  hidden tab, and `prefers-reduced-motion` shows the static fallback (no RAF).
- Sanity-check Lighthouse/perf feel on mobile (particle count scales down).
- `next build` succeeds with no new warnings/errors.

## Risks & mitigations

- **Canvas perf on low-end mobile** → cap + scale particle count, pause offscreen.
- **Hydration / SSR** → all canvas work inside `useEffect`, guarded.
- **Readability over animation** → masked/low-opacity field behind hero only.
- **Regressions on inner pages** → consistency pass only; verify each page.
