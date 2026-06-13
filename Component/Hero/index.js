import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const SLIDES = [
  { src: "/hero/hero-1.jpg" },
  { src: "/hero/hero-2.jpg" },
  { src: "/hero/hero-3.jpg" },
  
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    setActive(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % SLIDES.length);
    }, 5000);
  };

  return (
    <section className={styles.hero}>

      {/* 3 full-screen background images */}
      {SLIDES.map((s, i) => (
        <div key={i} className={`${styles.bgSlide} ${active === i ? styles.bgOn : ""}`}>
          <Image
            src={s.src}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.inner}>

          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Estd 1972 &bull; Chennai, India
          </div>

          <h1 className={styles.title}>
            <span className={styles.t1}>A.A. SHA IMPEX</span>
            <span className={styles.t2}>&amp; EXPORTS</span>
          </h1>

          <p className={styles.tagline}>House of Best Quality Electrical Insulation</p>

          <p className={styles.subtitle}>
            Authorised importer &amp; stockist for best quality  electrical insulation
            materials — Polyester Films, Aramid Papers, Varnishes,
            Fibre Glass Sleeves &amp; more.
          </p>

          <div className={styles.actions}>
            <Link href="/products" className={styles.btnPrimary}>
              Explore Products
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/contact" className={styles.btnOutline}>
              Request a Quote
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}><strong>50+</strong><span>Years</span></div>
            <div className={styles.statDiv} />
            <div className={styles.stat}><strong>1000+</strong><span>Clients</span></div>
            <div className={styles.statDiv} />
            <div className={styles.stat}><strong>25+</strong><span>Products</span></div>
          </div>

        </div>
      </div>

      {/* Slide dots */}
      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${active === i ? styles.dotOn : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
