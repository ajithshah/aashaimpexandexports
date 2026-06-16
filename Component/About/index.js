import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./About.module.css";

const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { number: 50,   suffix: "+", label: "Years in Business",  icon: "bi-award" },
  { number: 1000, suffix: "+", label: "Loyal Customers",    icon: "bi-people" },
  { number: 25,   suffix: "+", label: "Product Lines",      icon: "bi-box-seam" },
  { number: 100,  suffix: "%", label: "Quality Commitment", icon: "bi-shield-check" },
];

const values = [
  {
    title: "Uncompromising Quality",
    description: "Every insulation material we supply — from Polyester Film to Aramid Paper — is chosen with one clear goal: QUALITY. We source only the best from trusted global manufacturers.",
    icon: "bi-shield-check",
    accent: "#6366f1", glow: "rgba(99,102,241,0.12)",
  },
  {
    title: "Decades of Trust",
    description: "Many of our customers have been with us for decades, because they know we stand behind what we supply. Their continued trust is our biggest achievement.",
    icon: "bi-heart",
    accent: "#06b6d4", glow: "rgba(6,182,212,0.12)",
  },
  {
    title: "Strong Supply Network",
    description: "We maintain a strong and efficient supply network across the states, ensuring that even bulk requirements are fulfilled quickly and smoothly.",
    icon: "bi-truck",
    accent: "#8b5cf6", glow: "rgba(139,92,246,0.12)",
  },
  {
    title: "Industry Partnerships",
    description: "Proud to be associated with leading global brands — JBF RAK LLC (UAE), Elantas Beck India Ltd., Gujarat Polymers, and Mithra Fiber Glass Sleeve.",
    icon: "bi-handshake",
    accent: "#10b981", glow: "rgba(16,185,129,0.12)",
  },
];

const whyItems = [
  { icon: "bi-star-fill",     text: "Authorised importer and stockist of leading insulation brands" },
  { icon: "bi-clock-history", text: "Over 50 years of industry experience since 1972" },
  { icon: "bi-layers",        text: "Complete range of Class B, F, and H insulation materials" },
  { icon: "bi-geo-alt-fill",  text: "Strong supply network ensuring timely bulk deliveries" },
  { icon: "bi-tools",         text: "Precision slitting services with German technology" },
  { icon: "bi-people-fill",   text: "Customers who have trusted us for decades stand as proof" },
];

const certifications = [
  { icon: "bi-award-fill",        text: "Authorised Importer & Stockist" },
  { icon: "bi-globe",             text: "JBF RAK LLC (UAE) Partner" },
  { icon: "bi-patch-check-fill",  text: "Elantas Beck India Ltd. Dealer" },
  { icon: "bi-shield-fill-check", text: "Gujarat Polymers Authorised" },
];

const About = () => (
  <section id="about" className={styles.about}>
    <div className={styles.bgBlob1} aria-hidden="true" />
    <div className={styles.bgBlob2} aria-hidden="true" />

    <div className={styles.container}>

      {/* ── HEADER ── */}
      <AnimateOnScroll animation="fadeUp">
        <div className={styles.header}>
          <span className={styles.headerWatermark} aria-hidden="true">ABOUT</span>
          <p className={styles.headerOverline}>
            <span className={styles.overlineDot} />
            Est. 1972 · Chennai, India
          </p>
          <h1 className={styles.headerTitle}>
            Our <span className={styles.holoText}>Story</span>
          </h1>
          <p className={styles.headerDesc}>
            House of Best Quality Electrical Insulation — trusted by motors,
            transformers, and machine manufacturers across India for over 50 years.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── HERO SPLIT — orb + copy ── */}
      <div className={styles.heroGrid}>
        <AnimateOnScroll animation="fadeLeft" className={styles.heroLeft}>
          <h2 className={styles.heroH2}>
            Trusted Insulation<br />
            <span className={styles.holoText}>Partners</span> Since 1972
          </h2>
          <p className={styles.heroBody}>
            At A A SHA IMPEX AND EXPORTS, quality isn&apos;t just a promise — it&apos;s
            the foundation we&apos;ve built our business on since 1972. We work as
            Importers, Distributors, and Stockists of electrical insulation
            materials, carefully sourcing only the best products from trusted
            global manufacturers.
          </p>
          <p className={styles.heroBody}>
            Polyester Film · Kraft Paper · Aramid Paper · FPF/DMD Laminates ·
            Silicon-Coated Films · PU Coated Fiber Glass Sleeves. Every product
            chosen with one clear goal: <strong>QUALITY.</strong>
          </p>
          <div className={styles.heroCtas}>
            <Link href="/products" className={styles.btnPrimary}>
              Explore Products
              <i className="bi-arrow-right" style={{ marginLeft: "0.45rem" }}></i>
            </Link>
            <Link href="/contact" className={styles.btnGhost}>Get In Touch</Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeRight" className={styles.heroRight}>
          <div className={styles.orbWrap}>
            <div className={styles.orbHalo} />
            <div className={styles.orbRing1} />
            <div className={styles.orbRing2} />
            <div className={styles.orbCore}>
              <Image
                src="/logo.png" alt="AA Sha Impex & Exports"
                width={88} height={88} priority
                className={styles.orbLogo}
              />
            </div>
            <div className={`${styles.floatChip} ${styles.chip1}`}>
              <span className={styles.chipNum}>50+</span>
              <span className={styles.chipLabel}>Years</span>
            </div>
            <div className={`${styles.floatChip} ${styles.chip2}`}>
              <span className={styles.chipNum}>1K+</span>
              <span className={styles.chipLabel}>Clients</span>
            </div>
            <div className={`${styles.floatChip} ${styles.chip3}`}>
              <span className={styles.chipNum}>25+</span>
              <span className={styles.chipLabel}>Products</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* ── STATS STRIP — same dark strip as all pages ── */}
      <AnimateOnScroll animation="scaleUp">
        <div className={styles.statsStrip}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <i className={`${s.icon} ${styles.statIcon}`}></i>
              <span className={styles.statNum}>
                <CountUp end={s.number} suffix={s.suffix} />
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      {/* ── MISSION / VISION ── */}
      <div className={styles.mvSection}>
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.mvRow}>
            <div className={styles.mvMeta}>
              <span className={styles.mvNum}>01</span>
              <span className={styles.mvTag}>Mission</span>
            </div>
            <div className={styles.mvBody}>
              <h3 className={styles.mvTitle}>Our Mission</h3>
              <p className={styles.mvText}>
                To supply the finest-quality electrical insulation materials that
                protect motors, transformers, and machines powering industries
                across India — ensuring the right material reaches our customers
                at the right time, without compromise.
              </p>
            </div>
            <div className={`${styles.mvPanel} ${styles.mvBlue}`}>
              <i className="bi-bullseye"></i>
            </div>
          </div>
        </AnimateOnScroll>

        <div className={styles.mvDivider} />

        <AnimateOnScroll animation="fadeUp">
          <div className={`${styles.mvRow} ${styles.mvReverse}`}>
            <div className={styles.mvMeta}>
              <span className={styles.mvNum}>02</span>
              <span className={styles.mvTag}>Vision</span>
            </div>
            <div className={styles.mvBody}>
              <h3 className={styles.mvTitle}>Our Vision</h3>
              <p className={styles.mvText}>
                To be India&apos;s most trusted name in electrical insulation
                materials — known for our attention to detail, insistence on
                quality, and genuine focus on customer satisfaction. Building
                lasting partnerships through honesty, performance, and trust.
              </p>
            </div>
            <div className={`${styles.mvPanel} ${styles.mvViolet}`}>
              <i className="bi-eye"></i>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* ── CORE VALUES ── */}
      <div className={styles.valuesSection}>
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.secHead}>
            <span className={styles.secLabel}>Core Values</span>
            <h2 className={styles.secTitle}>
              What We <span className={styles.holoText}>Stand For</span>
            </h2>
          </div>
        </AnimateOnScroll>

        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <AnimateOnScroll key={i} animation="riseIn" delay={i * 80} className={styles.vcWrap}>
              <div
                className={styles.vc}
                style={{ "--accent": v.accent, "--glow": v.glow }}
              >
                <span className={styles.vcIndex} aria-hidden="true">0{i + 1}</span>
                <div className={styles.vcIcon}><i className={v.icon}></i></div>
                <h4 className={styles.vcTitle}>{v.title}</h4>
                <p className={styles.vcDesc}>{v.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* ── WHY CHOOSE US ── */}
      <AnimateOnScroll animation="fadeUp">
        <div className={styles.whySection}>
          <div className={styles.secHead}>
            <span className={styles.secLabel}>Reasons to Partner</span>
            <h2 className={styles.secTitle}>
              Why Choose <span className={styles.holoText}>Us</span>
            </h2>
          </div>
          <div className={styles.whyList}>
            {whyItems.map((item, i) => (
              <div key={i} className={styles.whyItem}>
                <span className={styles.whyNum}>0{i + 1}</span>
                <div className={styles.whyIcon}><i className={item.icon}></i></div>
                <span className={styles.whyText}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── CERTIFICATIONS ── */}
      <AnimateOnScroll animation="fadeUp">
        <div className={styles.certSection}>
          <span className={styles.secLabel}>Verified Partnerships</span>
          <div className={styles.certStrip}>
            {certifications.map((c, i) => (
              <div key={i} className={styles.certPill}>
                <i className={c.icon}></i>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── CTA BAND ── */}
      <AnimateOnScroll animation="fadeUp">
        <div className={styles.ctaBand}>
          <div className={styles.ctaGlow1} aria-hidden="true" />
          <div className={styles.ctaGlow2} aria-hidden="true" />
          <div className={styles.ctaContent}>
            <p className={styles.ctaEyebrow}>Ready to work together?</p>
            <h2 className={styles.ctaTitle}>
              Need Quality<br />
              <span className={styles.holoText}>Insulation Materials?</span>
            </h2>
            <p className={styles.ctaBody}>
              Join hundreds of satisfied customers who trust us for their electrical
              insulation needs. Let&apos;s discuss how we can supply the right materials
              for your motors, transformers, and generators.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.btnPrimary}>
                Get Started Today
                <i className="bi-arrow-right" style={{ marginLeft: "0.45rem" }}></i>
              </Link>
              <Link href="/products" className={styles.btnGhostLight}>
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

    </div>
  </section>
);

export default About;
