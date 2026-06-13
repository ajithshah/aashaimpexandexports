# Home / Landing Page Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the home/landing page as a light & airy modern experience with an interactive particle-network background and accurate copy, then bring the rest of the site into visual consistency.

**Architecture:** A new hand-rolled `<ParticleField />` canvas component provides the interactive background. Shared design tokens move into `globals.css`. The Hero is restyled light (keeping its product-showcase logic) and the home body is rebuilt with real business copy that links to the existing deep pages. Inner pages get a light consistency pass (shared token alignment + faint particle accent), not a rebuild.

**Tech Stack:** Next.js 15 (Pages Router), React 19, CSS Modules, Canvas 2D, Bootstrap Icons. No new dependencies.

**Verification note:** This repo has no test framework and the change is visual/canvas. "Verify" steps therefore mean: `npm run build` succeeds with no new errors, `npm run dev` renders the page with no console errors or hydration warnings, responsive widths look correct, and `prefers-reduced-motion` shows the static fallback. Reference spec: `docs/superpowers/specs/2026-06-13-home-landing-redesign-design.md`.

**Branch:** `redesign/home-landing` (already created; spec already committed).

---

## File Structure

**Create:**
- `Component/ParticleField/index.js` — interactive canvas particle network (one responsibility: render the animated background).
- `Component/ParticleField/ParticleField.module.css` — wrapper positioning + reduced-motion static fallback.

**Modify:**
- `styles/globals.css` — add shared design tokens (`--pf-*`, accent gradient, radii, shadows, section rhythm).
- `Component/Hero/index.js` — integrate `ParticleField`, light markup (keep showcase + ticker + count-up logic).
- `Component/Hero/Hero.module.css` — rewrite dark → light & airy.
- `pages/index.js` — rebuild body sections with accurate copy + deep-page links; remove generic content.
- `styles/Home.module.css` — restyle sections light & airy; add brand-partners + industries-preview styles.
- Inner-page consistency pass (faint `ParticleField` accent in header band + token alignment):
  - `Component/About/index.js` + `Component/About/About.module.css`
  - `Component/Services/index.js` + `Component/Services/Services.module.css`
  - `Component/Industries/index.js` + `Component/Industries/Industries.module.css`
  - `Component/Products/index.js` + `Component/Products/Products.module.css`
  - `Component/Contact/index.js` + `Component/Contact/Contact.module.css`

---

## Task 1: Shared design tokens in `globals.css`

**Files:**
- Modify: `styles/globals.css` (inside the existing `:root { ... }` block)

- [ ] **Step 1: Add tokens to `:root`**

Append these variables inside the existing `:root` block (after the existing `--white-pure` line):

```css
  /* ---- Redesign tokens ---- */
  --accent-blue: #3b82f6;
  --accent-sky: #0ea5e9;
  --accent-indigo: #6366f1;
  --accent-amber: #f59e0b;            /* heritage micro-accent only */
  --accent-gradient: linear-gradient(135deg, #3b82f6 0%, #0ea5e9 60%, #6366f1 100%);

  --surface: #ffffff;
  --surface-2: #f8fafc;
  --surface-3: #f1f5f9;
  --hairline: #e2e8f0;

  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-lg: 24px;

  --shadow-soft: 0 4px 20px rgba(2, 6, 23, 0.06);
  --shadow-raise: 0 14px 40px rgba(59, 130, 246, 0.14);
  --section-pad: clamp(4.5rem, 9vw, 7rem);

  /* ParticleField (light theme) */
  --pf-bg: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.10), transparent 70%), linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
  --pf-dot: rgba(59, 130, 246, 0.55);
  --pf-line: rgba(59, 130, 246, 0.18);
  --pf-glow: rgba(14, 165, 233, 0.9);
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build completes with no new errors.

- [ ] **Step 3: Commit**

```bash
git add styles/globals.css
git commit -m "feat: add shared light-theme design tokens"
```

---

## Task 2: `<ParticleField />` component (the core new piece)

**Files:**
- Create: `Component/ParticleField/index.js`
- Create: `Component/ParticleField/ParticleField.module.css`

- [ ] **Step 1: Create the CSS module**

`Component/ParticleField/ParticleField.module.css`:

```css
.wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background: var(--pf-bg);
}

.canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

/* Static fallback for reduced motion / no-JS: soft gradient only */
.fallback {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 22% 30%, rgba(59,130,246,0.10), transparent 45%),
    radial-gradient(circle at 78% 65%, rgba(14,165,233,0.10), transparent 45%);
}

@media (prefers-reduced-motion: reduce) {
  .canvas { display: none; }
}
```

- [ ] **Step 2: Create the component**

`Component/ParticleField/index.js` — SSR-safe, DPR-aware, paused when hidden/offscreen, reduced-motion fallback, capped count:

```jsx
import { useEffect, useRef } from "react";
import styles from "./ParticleField.module.css";

const PRESETS = {
  subtle:   { speed: 0.12, link: 110, lineMul: 0.5, pull: 0.015, base: 7000 },
  balanced: { speed: 0.22, link: 130, lineMul: 1.0, pull: 0.030, base: 4800 },
  bold:     { speed: 0.40, link: 150, lineMul: 1.4, pull: 0.060, base: 3400 },
};

export default function ParticleField({
  intensity = "balanced",
  interactive = true,
  density,
  className = "",
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // CSS fallback handles the visual

    const cfg = PRESETS[intensity] || PRESETS.balanced;
    const areaPer = density ? Math.max(2000, density) : cfg.base;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    let particles = [];
    let raf = null;
    let running = true;
    const mouse = { x: -9999, y: -9999, active: false };

    const makeParticles = () => {
      const target = Math.min(
        140,
        Math.max(24, Math.round((w * h) / areaPer))
      );
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * cfg.speed,
        vy: (Math.random() - 0.5) * cfg.speed,
        r: 1 + Math.random() * 1.6,
      }));
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeParticles();
    };

    const css = getComputedStyle(document.documentElement);
    const dotColor = css.getPropertyValue("--pf-dot").trim() || "rgba(59,130,246,0.55)";
    const lineColor = css.getPropertyValue("--pf-line").trim() || "rgba(59,130,246,0.18)";
    const glow = css.getPropertyValue("--pf-glow").trim() || "rgba(14,165,233,0.9)";

    const linkDist = cfg.link;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        if (interactive && mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 180 * 180 && d2 > 1) {
            const f = cfg.pull / Math.sqrt(d2);
            p.vx += dx * f;
            p.vy += dy * f;
          }
        }
        // gentle damping so cursor pull doesn't accelerate forever
        p.vx *= 0.995;
        p.vy *= 0.995;
      }

      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * cfg.lineMul;
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = Math.min(1, alpha);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const near =
          interactive && mouse.active &&
          (mouse.x - p.x) ** 2 + (mouse.y - p.y) ** 2 < 150 * 150;
        ctx.beginPath();
        ctx.fillStyle = near ? glow : dotColor;
        ctx.arc(p.x, p.y, near ? p.r + 0.8 : p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (running) raf = requestAnimationFrame(draw);
    };

    const start = () => { if (!running) { running = true; raf = requestAnimationFrame(draw); } };
    const stop = () => { running = false; if (raf) cancelAnimationFrame(raf); raf = null; };

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999; };
    const onVis = () => (document.hidden ? stop() : start());

    resize();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(wrap);
    document.addEventListener("visibilitychange", onVis);
    if (interactive) {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseout", onLeave, { passive: true });
    }

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [intensity, interactive, density]);

  return (
    <div ref={wrapRef} className={`${styles.wrap} ${className}`} aria-hidden="true">
      <div className={styles.fallback} />
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: compiles with no errors (component not yet imported anywhere — that's fine).

- [ ] **Step 4: Commit**

```bash
git add Component/ParticleField
git commit -m "feat: add interactive ParticleField canvas background"
```

---

## Task 3: Light Hero rewrite

**Files:**
- Modify: `Component/Hero/index.js`
- Modify: `Component/Hero/Hero.module.css`

Keep ALL existing JS logic (`useCountUp`, `Stat`, the `products` array, the active/transition state, `goTo`, `handleProductClick`, `getOrbitalProducts`, the featured card, orbital ring, counter, and ticker). Only change: (a) replace the dark background layers (`meshBg`, `noiseOverlay`, `gridLines`, `particles`) with `<ParticleField intensity="balanced" />`, and (b) restyle the CSS to light.

- [ ] **Step 1: Swap background layers in `Component/Hero/index.js`**

Add the import at the top:

```jsx
import ParticleField from "@/Component/ParticleField";
```

Replace the four background-layer blocks (the `meshBg`, `noiseOverlay`, `gridLines`, and `particles` divs at the start of the returned `<section>`) with a single:

```jsx
      {/* Interactive particle background */}
      <ParticleField intensity="balanced" className={styles.heroBg} />
```

Leave the rest of the JSX (splitLayout, leftCol, rightCol, tickerWrap) unchanged.

- [ ] **Step 2: Rewrite `Component/Hero/Hero.module.css` to light theme**

Key changes (rewrite the file; preserve every class name still referenced by `index.js`: `hero`, `heroBg`, `splitLayout`, `leftCol`, `badge`, `badgeDot`, `title`, `titleLine1`, `titleAmp`, `titleLine2`, `tagWrap`, `tagAccent`, `tag`, `subtitle`, `actions`, `btnPrimary`, `btnOutline`, `stats`, `stat`, `statDivider`, `rightCol`, `spotlight`, `featuredCard`, `featuredImageWrap`, `featuredImage`, `featuredInfo`, `fadeOut`, `fadeIn`, `featuredLabel`, `featuredName`, `featuredDesc`, `progressBar`, `progressFill`, `orbitalRing`, `orbitalThumb`, `orbital0`–`orbital3`, `orbitalImg`, `orbitalName`, `counter`, `counterCurrent`, `counterSep`, `counterTotal`, `tickerWrap`, `tickerLabel`, `tickerTrack`, `tickerCard`, `tickerImg`, `tickerName`, and all keyframes still in use: `progressSlide`, `scroll`, `orbitalFloat0`–`3`, `spotlightPulse`, `slideRight`, `scaleReveal`, `dotBlink`, `shineSweep`).

Light-theme rules (the diff that matters — apply throughout):
- `.hero` → `background: transparent; color: #0f172a;` (ParticleField provides the backdrop via `--pf-bg`).
- `.heroBg` → `z-index: 0;` (wrapper positioning already absolute from module; this just guarantees layering under `.splitLayout` which is `z-index: 4`).
- `.titleLine1` → gradient `linear-gradient(135deg, #1e3a8a 0%, #3b82f6 55%, #0ea5e9 100%)` clipped to text.
- `.titleLine2` → `color: #0f172a; -webkit-text-fill-color: #0f172a;`
- `.titleAmp` → `color: var(--accent-amber); -webkit-text-fill-color: var(--accent-amber);`
- `.badge` → amber heritage chip: `color: #b45309; border: 1px solid rgba(245,158,11,0.3); background: rgba(245,158,11,0.08);` `.badgeDot { background: #f59e0b; }`
- `.tag` → `color: #2563eb;` `.tagAccent` → `background: linear-gradient(90deg, #3b82f6, transparent);`
- `.subtitle` → `color: #475569;`
- `.btnPrimary` → `color:#fff; background: var(--accent-gradient); box-shadow: var(--shadow-raise);` keep the `::after` shine sweep.
- `.btnOutline` → `color:#1e293b; border:1.5px solid var(--hairline); background:#fff;` hover → `border-color: rgba(59,130,246,0.5); color:#2563eb; background: rgba(59,130,246,0.05);`
- `.stat strong` → `color:#0f172a;` `.stat span` → `color:#64748b;` `.statDivider` → `background: linear-gradient(180deg, transparent, rgba(59,130,246,0.3), transparent);`
- `.featuredCard` → `background:#fff; border:1px solid var(--hairline); box-shadow: var(--shadow-soft);` hover → `box-shadow: var(--shadow-raise);`
- `.featuredLabel` → `color:#2563eb; background: rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.18);`
- `.featuredName` → `color:#0f172a;` `.featuredDesc` → `color:#64748b;`
- `.progressBar` → `background:#eef2f7;` `.progressFill` → `background: var(--accent-gradient);`
- `.spotlight` → `background: radial-gradient(circle, rgba(59,130,246,0.14) 0%, rgba(14,165,233,0.06) 50%, transparent 70%);`
- `.orbitalThumb` → `background:#fff; border:1px solid var(--hairline); box-shadow: var(--shadow-soft);` hover border `rgba(59,130,246,0.4)`. `.orbitalName` keep dark translucent bg (sits over image) — leave as is.
- `.counter .counterCurrent` → `color:#2563eb;` sep/total → slate greys (`#94a3b8` / `#cbd5e1`).
- `.tickerWrap` → `background: rgba(248,250,252,0.7); border-top:1px solid var(--hairline);` keep mask.
- `.tickerCard` → `background:#fff; border:1px solid var(--hairline);` hover → `var(--shadow-raise)`, border `rgba(59,130,246,0.3)`. `.tickerName` → `color:#475569; background: rgba(248,250,252,0.8);`
- `.hero::before` (top accent line) → `background: linear-gradient(90deg, transparent, #3b82f6 30%, #0ea5e9 50%, #3b82f6 70%, transparent);`
- Delete the now-unused `.meshBg`, `.noiseOverlay`, `.gridLines`, `.gridLineV`, `.gridLineH`, `.particles`, `.particle` rules and their keyframes (`meshShift`, `gridFadeIn`, `particleFloat`, `lineGlow`).
- Keep ALL responsive `@media` blocks and the `prefers-reduced-motion` block (remove references to deleted classes inside them).

- [ ] **Step 3: Verify in dev**

Run: `npm run dev`, open `http://localhost:3000`.
Expected: light hero, particles drift + react to cursor, product showcase rotates, ticker scrolls, no console errors, no hydration warning.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: success, no errors.

- [ ] **Step 5: Commit**

```bash
git add Component/Hero
git commit -m "feat: restyle hero light & airy with interactive particle background"
```

---

## Task 4: Home body rebuild with accurate copy

**Files:**
- Modify: `pages/index.js`
- Modify: `styles/Home.module.css`

Replace the generic sections (About with "25+ Years / AI logistics", Services with "AI Logistics Optimization", Industries with "Technology/Textiles/Agriculture/Pharma", and CTA) with accurate summary sections. Keep `<Meta>` and `<Hero />` exactly as they are.

- [ ] **Step 1: Rebuild `pages/index.js` body**

Keep the imports + `<Meta>` + `<Hero />`. Replace `<main>`'s post-Hero content with these sections (data-driven, using `AnimateOnScroll`):

```jsx
        {/* ABOUT STRIP */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.gridTwo}>
              <AnimateOnScroll animation="fadeRight" className={styles.gridCol}>
                <span className={styles.eyebrow}>House of Electrical Insulation</span>
                <h2 className={styles.sectionTitle}>Trusted Insulation Partners Since 1972</h2>
                <p className={styles.sectionText}>
                  A A Sha Impex and Exports are Importers, Distributors, and Stockists
                  of premium electrical insulation materials — sourcing only the best
                  from trusted global manufacturers for over five decades.
                </p>
                <p className={styles.sectionText}>
                  From Polyester Films and Aramid Papers to ELANTAS varnishes, DMD/FPF
                  laminates, and fibre glass sleeves — every product protects the motors,
                  transformers, and machines that power industry.
                </p>
                <div className={styles.buttonGroup}>
                  <a href="/about" className={styles.primaryBtn}>Our Story</a>
                  <a href="/contact" className={styles.secondaryBtn}>Get In Touch</a>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="scaleUp" delay={150} className={styles.gridCol}>
                <div className={styles.statsShowcase}>
                  <div className={styles.statsGrid}>
                    <div className={styles.statCard}><span className={styles.statNumber}>50+</span><span className={styles.statLabel}>Years Since 1972</span></div>
                    <div className={`${styles.statCard} ${styles.statCardAccent}`}><span className={styles.statNumber}>500+</span><span className={styles.statLabel}>Loyal Customers</span></div>
                    <div className={`${styles.statCard} ${styles.statCardAccent}`}><span className={styles.statNumber}>15+</span><span className={styles.statLabel}>Product Lines</span></div>
                    <div className={styles.statCard}><span className={styles.statNumber}>100%</span><span className={styles.statLabel}>Quality Commitment</span></div>
                  </div>
                  <div className={styles.showcaseGlow}></div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <span className={`${styles.eyebrow} ${styles.eyebrowCenter}`}>What We Offer</span>
              <h2 className={styles.centerTitle}>Your One-Stop Insulation Source</h2>
            </AnimateOnScroll>
            <div className={styles.cardGrid}>
              {[
                { icon: "bi-layers-half", title: "Insulation Materials", desc: "Polyester Films, Aramid & Nomex Papers, DMD/FPF Laminates, Kraft & Presspahn for motors, transformers, and generators." },
                { icon: "bi-droplet-half", title: "Varnishes & Coatings", desc: "Authorised stockist of ELANTAS and A-SEAL insulating varnishes for motor rewinding, impregnation, and coil protection." },
                { icon: "bi-scissors", title: "Precision Slitting", desc: "Custom slitting, roll-to-sheet cutting, and shaping using German technology — widths from 5mm onwards." },
                { icon: "bi-shield-check", title: "Tapes & Sleeves", desc: "Rubber compound tapes, rayon & polyester tapes, and PU/silicone fibre glass sleeves — including fire-retardant grades." },
              ].map((s, i) => (
                <AnimateOnScroll key={i} animation="fadeUp" delay={i * 90}>
                  <div className={styles.card}>
                    <div className={styles.cardIcon}><i className={s.icon}></i></div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll animation="fadeUp">
              <div className={styles.sectionCtaRow}>
                <a href="/products" className={styles.primaryBtn}>View All Products</a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* INDUSTRIES PREVIEW */}
        <section className={styles.section}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <span className={`${styles.eyebrow} ${styles.eyebrowCenter}`}>Industries We Serve</span>
              <h2 className={styles.centerTitle}>Where Our Materials Are Used</h2>
            </AnimateOnScroll>
            <div className={styles.industryGrid}>
              {[
                { icon: "bi-lightning-charge-fill", name: "Electric Motors" },
                { icon: "bi-plugin", name: "Transformers" },
                { icon: "bi-gear-fill", name: "Generators" },
                { icon: "bi-toggles", name: "Switchgear & Panels" },
                { icon: "bi-train-front-fill", name: "Railways & Traction" },
                { icon: "bi-car-front-fill", name: "Automotive & EV" },
              ].map((ind, i) => (
                <AnimateOnScroll key={i} animation="fadeUp" delay={i * 70}>
                  <div className={styles.industryItem}>
                    <i className={ind.icon}></i>
                    <span>{ind.name}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll animation="fadeUp">
              <div className={styles.sectionCtaRow}>
                <a href="/industries" className={styles.secondaryBtn}>See All Industries</a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* BRAND PARTNERS */}
        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <span className={`${styles.eyebrow} ${styles.eyebrowCenter}`}>Trusted Partnerships</span>
              <h2 className={styles.centerTitle}>Authorised For Leading Brands</h2>
            </AnimateOnScroll>
            <div className={styles.partnerGrid}>
              {["JBF RAK LLC (UAE)", "ELANTAS Beck India Ltd.", "Gujarat Polymers", "Mithra Fiber Glass Sleeve"].map((p, i) => (
                <AnimateOnScroll key={i} animation="zoomIn" delay={i * 80}>
                  <div className={styles.partnerCard}>{p}</div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <h2 className={styles.ctaTitle}>Need Quality Insulation Materials?</h2>
              <p className={styles.ctaText}>
                Join hundreds of customers who trust us for motor, transformer, and
                generator insulation. Let&apos;s supply the right material, on time.
              </p>
              <a href="/contact" className={styles.ctaButton}>Request a Quote →</a>
            </AnimateOnScroll>
          </div>
        </section>
```

- [ ] **Step 2: Update `styles/Home.module.css`**

Keep existing `.pageWrapper`, `.section`, `.sectionDark`, `.container`, `.gridTwo`, `.gridCol`, `.sectionTitle`, `.sectionText`, `.centerTitle`, `.buttonGroup`, `.primaryBtn`, `.secondaryBtn`, `.statsShowcase`, `.statsGrid`, `.statCard*`, `.statNumber`, `.statLabel`, `.showcaseGlow`, `.cardGrid`, `.card`, `.industryGrid`, `.industryItem`, `.ctaSection`, `.ctaTitle`, `.ctaText`, `.ctaButton`, and keyframes. Add/adjust these:

```css
/* Eyebrow label */
.eyebrow {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.8rem;
}
.eyebrowCenter { display: block; text-align: center; }

/* Card icon */
.cardIcon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #2563eb;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
}

/* Industry item — now icon + label */
.industryItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1.6rem 0.9rem;
}
.industryItem i { font-size: 1.8rem; color: #3b82f6; }

/* Centered CTA row under a section */
.sectionCtaRow {
  margin-top: clamp(2rem, 4vw, 3rem);
  display: flex;
  justify-content: center;
}

/* Brand partners */
.partnerGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.partnerCard {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 96px;
  padding: 1.4rem 1.2rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--hairline);
  background: #fff;
  box-shadow: var(--shadow-soft);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.03em;
  color: #1e293b;
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
}
.partnerCard:hover {
  transform: translateY(-5px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: var(--shadow-raise);
}
```

Confirm `.statNumber` already uses `-webkit-text-fill-color: transparent` over the blue gradient (it does) so it reads on the light card.

- [ ] **Step 3: Verify in dev**

Run: `npm run dev`, open `http://localhost:3000`.
Expected: 5 new accurate sections render, icons show (Bootstrap Icons), links go to /about /products /industries /contact, scroll animations fire, no console errors.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: success.

- [ ] **Step 5: Commit**

```bash
git add pages/index.js styles/Home.module.css
git commit -m "feat: rebuild home body with accurate insulation copy + brand partners"
```

---

## Task 5: Inner-pages consistency pass

**Files (per page: add a faint, non-interactive `ParticleField` accent into the existing top/header band, and align accent colors to tokens):**
- Modify: `Component/About/index.js` + `Component/About/About.module.css`
- Modify: `Component/Services/index.js` + `Component/Services/Services.module.css`
- Modify: `Component/Industries/index.js` + `Component/Industries/Industries.module.css`
- Modify: `Component/Products/index.js` + `Component/Products/Products.module.css`
- Modify: `Component/Contact/index.js` + `Component/Contact/Contact.module.css`

For EACH component:

- [ ] **Step 1: Import ParticleField**

Add: `import ParticleField from "@/Component/ParticleField";`

- [ ] **Step 2: Make the section a positioned host and drop in the accent**

Ensure the outermost `<section>` has `position: relative; overflow: hidden;` in its CSS (most already do — verify), then add as the first child inside that section:

```jsx
      <ParticleField intensity="subtle" interactive={false} className={styles.pageBg} />
```

Add this rule to each module CSS (the field sits behind content; ensure the inner `.container` has `position: relative; z-index: 1;` — add if missing):

```css
.pageBg { opacity: 0.5; }
.pageBg::after {  /* fade the field out below the header band */
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, var(--surface) 70%);
}
```

Note: because `intensity="subtle"` + `interactive={false}`, this is ambient only and pauses offscreen — safe for perf.

- [ ] **Step 3: Verify each page in dev**

Run: `npm run dev`, visit `/about`, `/products`, `/industries`, `/contact`.
Expected: faint particle accent behind each page header, content fully readable, no layout shift, no console errors. If any page's content sits visually behind the field, bump that page's content wrapper `z-index` to `1`.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: success.

- [ ] **Step 5: Commit**

```bash
git add Component/About Component/Services Component/Industries Component/Products Component/Contact
git commit -m "feat: add shared particle accent + token alignment across inner pages"
```

---

## Task 6: Full verification pass

**Files:** none (verification only)

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: compiles, no errors, no new warnings.

- [ ] **Step 2: Dev walk-through (desktop ~1280px)**

Run: `npm run dev`. Visit `/`, `/about`, `/products`, `/industries`, `/contact`.
Check: light & airy look consistent; hero particles interactive; product showcase + ticker animate; all home links resolve; no console errors; no hydration mismatch warning.

- [ ] **Step 3: Responsive check**

In devtools, test ~375px (mobile) and ~768px (tablet) on `/`.
Expected: hero stacks, buttons full-width, particle count visibly lower on mobile, no horizontal scroll.

- [ ] **Step 4: Reduced-motion check**

In devtools, enable "Emulate prefers-reduced-motion: reduce", reload `/`.
Expected: no canvas animation (static soft gradient fallback shows), page still fully usable.

- [ ] **Step 5: Final commit (if any tweaks made)**

```bash
git add -A
git commit -m "chore: redesign verification fixes"
```

---

## Self-Review (completed during planning)

- **Spec coverage:** tokens (T1) ✓, ParticleField w/ perf+reduced-motion+SSR (T2) ✓, light hero keeping showcase (T3) ✓, accurate home copy + brand partners + deep links (T4) ✓, inner-page light consistency pass (T5) ✓, verification incl. responsive + reduced-motion + build (T6) ✓. "No new dependencies" honored (hand-rolled canvas).
- **Placeholder scan:** none — full code given for the novel component and tokens; precise class-by-class diffs for the CSS rewrites.
- **Type/name consistency:** `ParticleField` props (`intensity`, `interactive`, `density`, `className`) used identically in T3/T5; class name `heroBg`/`pageBg` defined where referenced; all Hero class names preserved per the explicit keep-list.
