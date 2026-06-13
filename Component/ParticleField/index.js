import { useEffect, useRef } from "react";
import styles from "./ParticleField.module.css";

const PRESETS = {
  subtle: { speed: 0.12, link: 110, lineMul: 0.5, pull: 0.015, base: 7000 },
  balanced: { speed: 0.22, link: 130, lineMul: 1.0, pull: 0.03, base: 4800 },
  bold: { speed: 0.4, link: 150, lineMul: 1.4, pull: 0.06, base: 3400 },
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
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return; // CSS fallback handles the visual

    const cfg = PRESETS[intensity] || PRESETS.balanced;
    const areaPer = density ? Math.max(2000, density) : cfg.base;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
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
    const dotColor =
      css.getPropertyValue("--pf-dot").trim() || "rgba(59,130,246,0.55)";
    const lineColor =
      css.getPropertyValue("--pf-line").trim() || "rgba(59,130,246,0.18)";
    const glow =
      css.getPropertyValue("--pf-glow").trim() || "rgba(14,165,233,0.9)";

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
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
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
          interactive &&
          mouse.active &&
          (mouse.x - p.x) ** 2 + (mouse.y - p.y) ** 2 < 150 * 150;
        ctx.beginPath();
        ctx.fillStyle = near ? glow : dotColor;
        ctx.arc(p.x, p.y, near ? p.r + 0.8 : p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (running) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = null;
    };

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
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
