import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const products = [
  { src: "/product/01.jpg", name: "Polyester Film", desc: "High-performance electrical insulation" },
  { src: "/product/02.jpg", name: "Aramid Paper", desc: "Superior thermal resistance" },
  { src: "/product/03.jpg", name: "DMD Laminate", desc: "Composite insulation solution" },
  { src: "/product/05.jpg", name: "Fibre Glass Sleeve", desc: "Flexible protection tubing" },
  { src: "/product/06.jpg", name: "Kraft Paper", desc: "Industrial grade insulation" },
  { src: "/product/07.jpg", name: "Epoxy Sheet", desc: "Rigid insulation boards" },
  { src: "/product/08.jpg", name: "Insulating Varnish", desc: "Premium coating solutions" },
  { src: "/product/09.jpeg", name: "Rubber Compound Tape", desc: "Self-fusing insulation tape" },
  { src: "/product/10.jpeg", name: "Rayon Thread", desc: "Binding & wrapping thread" },
  { src: "/product/11.jpg", name: "Polyester Tape", desc: "Heat-resistant adhesive tape" },
];

/* Animated counter hook */
function useCountUp(end, duration = 1800, delay = 0) {
  const [val, setVal] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setVal(Math.round(p * p * (3 - 2 * p) * end));
        if (p < 1) raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(t); if (raf.current) cancelAnimationFrame(raf.current); };
  }, [end, duration, delay]);
  return val;
}

const Stat = ({ value, suffix, label, delay }) => {
  const n = useCountUp(value, 1800, delay);
  return (
    <div className={styles.stat}>
      <strong>{n}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
};

const Hero = () => {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  const goTo = useCallback((idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(idx);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 300);
  }, [isTransitioning]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % products.length);
        setTimeout(() => setIsTransitioning(false), 500);
      }, 300);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleProductClick = (idx) => {
    clearInterval(intervalRef.current);
    goTo(idx);
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % products.length);
        setTimeout(() => setIsTransitioning(false), 500);
      }, 300);
    }, 4000);
  };

  /* Get surrounding products for orbital display */
  const getOrbitalProducts = () => {
    const count = products.length;
    const indices = [];
    for (let i = 1; i <= 4; i++) {
      indices.push((active + i) % count);
    }
    return indices;
  };

  return (
    <section className={styles.hero}>
      {/* Gradient mesh background */}
      <div className={styles.meshBg} aria-hidden="true" />
      <div className={styles.noiseOverlay} aria-hidden="true" />

      {/* Animated grid lines */}
      <div className={styles.gridLines} aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={`v${i}`} className={styles.gridLineV} style={{ left: `${12.5 * (i + 1)}%` }} />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={`h${i}`} className={styles.gridLineH} style={{ top: `${20 * (i + 1)}%` }} />
        ))}
      </div>

      {/* Floating particles */}
      <div className={styles.particles} aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 8}s`,
              '--size': `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      {/* ---- Split Layout ---- */}
      <div className={styles.splitLayout}>

        {/* LEFT — Brand & CTA */}
        <div className={styles.leftCol}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Est. 1972 &bull; Chennai, India
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine1}>A.A. SHA IMPEX</span>
            <span className={styles.titleAmp}>&amp;</span>
            <span className={styles.titleLine2}>EXPORTS</span>
          </h1>

          <div className={styles.tagWrap}>
            <span className={styles.tagAccent} />
            <p className={styles.tag}>House of Electrical Insulation</p>
          </div>

          <p className={styles.subtitle}>
            Authorised importer &amp; stockist for premium electrical insulation
            materials — Polyester Films, Aramid Papers, Fibre Glass Sleeves,
            Laminates &amp; more.
          </p>

          <div className={styles.actions}>
            <Link href="/products" className={styles.btnPrimary}>
              <span>Explore Products</span>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link href="/contact" className={styles.btnOutline}>
              Request a Quote
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <Stat value={50} suffix="+" label="Years" delay={800} />
            <div className={styles.statDivider} />
            <Stat value={500} suffix="+" label="Clients" delay={1000} />
            <div className={styles.statDivider} />
            <Stat value={15} suffix="+" label="Products" delay={1200} />
          </div>
        </div>

        {/* RIGHT — Product Showcase */}
        <div className={styles.rightCol}>
          {/* Spotlight glow behind featured product */}
          <div className={styles.spotlight} aria-hidden="true" />

          {/* Featured product card */}
          <div className={styles.featuredCard}>
            <div className={`${styles.featuredImageWrap} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
              <Image
                src={products[active].src}
                alt={products[active].name}
                width={420}
                height={340}
                className={styles.featuredImage}
                priority
              />
            </div>
            <div className={`${styles.featuredInfo} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
              <span className={styles.featuredLabel}>Featured Product</span>
              <h3 className={styles.featuredName}>{products[active].name}</h3>
              <p className={styles.featuredDesc}>{products[active].desc}</p>
            </div>
            {/* Progress bar */}
            <div className={styles.progressBar}>
              <div className={styles.progressFill} key={active} />
            </div>
          </div>

          {/* Orbital product thumbnails */}
          <div className={styles.orbitalRing}>
            {getOrbitalProducts().map((idx, i) => (
              <button
                key={idx}
                className={`${styles.orbitalThumb} ${styles[`orbital${i}`]}`}
                onClick={() => handleProductClick(idx)}
                aria-label={`View ${products[idx].name}`}
              >
                <Image
                  src={products[idx].src}
                  alt={products[idx].name}
                  width={80}
                  height={80}
                  className={styles.orbitalImg}
                />
                <span className={styles.orbitalName}>{products[idx].name}</span>
              </button>
            ))}
          </div>

          {/* Product counter */}
          <div className={styles.counter}>
            <span className={styles.counterCurrent}>{String(active + 1).padStart(2, '0')}</span>
            <span className={styles.counterSep}>/</span>
            <span className={styles.counterTotal}>{String(products.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      {/* ---- Bottom product ticker ---- */}
      <div className={styles.tickerWrap}>
        <div className={styles.tickerLabel}>Our Products</div>
        <div className={styles.tickerTrack}>
          {[...products, ...products].map((p, i) => (
            <Link href="/products" key={i} className={styles.tickerCard}>
              <Image src={p.src} alt={p.name} width={140} height={100} className={styles.tickerImg} />
              <span className={styles.tickerName}>{p.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
