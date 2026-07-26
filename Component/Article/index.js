import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Article.module.css";

const Article = () => (
  <section id="article" className={styles.article}>
    <div className={styles.bgBlob1} aria-hidden="true" />
    <div className={styles.bgBlob2} aria-hidden="true" />

    <div className={styles.container}>
      {/* ── HEADER ── */}
      <AnimateOnScroll animation="fadeUp">
        <div className={styles.header}>
          <span className={styles.headerWatermark} aria-hidden="true">STORY</span>
          <p className={styles.headerOverline}>
            <span className={styles.overlineDot} />
            Est. 1972 · Chennai, India
          </p>
          <h1 className={styles.headerTitle}>
            Our <span className={styles.holoText}>Story</span>
          </h1>
          <p className={styles.byline}>
            A A Sha Impex and Exports · House of Electrical Insulation
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── HERO IMAGE ── */}
      <AnimateOnScroll animation="scaleUp">
        <div className={styles.heroImageWrap}>
          <Image
            src="/hero/hero-1.jpg"
            alt="A A Sha Impex and Exports — electrical insulation materials"
            fill
            sizes="(max-width: 900px) 100vw, 1100px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </AnimateOnScroll>

      {/* ── ARTICLE BODY ── */}
      <div className={styles.body}>
        <AnimateOnScroll animation="fadeUp">
          <p className={styles.lede}>
            For more than fifty years, A A Sha Impex and Exports has supplied
            the materials that keep India&apos;s motors, transformers, and
            generators running — one roll of insulation film, one drum of
            varnish, one reel of aramid paper at a time.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={60}>
          <h2 className={styles.subheading}>Where It All Began</h2>
          <p className={styles.bodyText}>
            Since 1972, we have worked as Importers, Distributors, and
            Stockists of electrical insulation materials, carefully sourcing
            only the best products from trusted global manufacturers. What
            started as a Chennai-based trading business grew, year after
            year, into a name that motor rewinding shops and heavy
            engineering OEMs across India came to rely on.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={90}>
          <h2 className={styles.subheading}>Growing With Indian Industry</h2>
          <p className={styles.bodyText}>
            As Indian industry expanded, so did our range — Polyester Films,
            Aramid and Nomex Papers, DMD/FPF Laminates, Kraft Paper, and
            insulating varnishes for Class B, F, and H applications. Along
            the way we built lasting partnerships with leading global
            manufacturers, including JBF RAK LLC (UAE), ELANTAS Beck India
            Ltd., Gujarat Polymers, and Mithra Fiber Glass Sleeve, and added
            precision slitting services using German technology.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={60}>
          <blockquote className={styles.pullQuote}>
            &ldquo;Quality isn&apos;t just a promise — it&apos;s the
            foundation we&apos;ve built our business on since 1972.&rdquo;
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={90}>
          <h2 className={styles.subheading}>Where We Stand Today</h2>
          <p className={styles.bodyText}>
            Today, A A Sha Impex and Exports serves 1000+ loyal customers
            across 25+ product lines, backed by a strong supply network that
            keeps bulk orders moving without compromise. Five decades on, our
            goal remains unchanged: source the finest insulation materials,
            and deliver them where Indian industry needs them, on time, every
            time.
          </p>
        </AnimateOnScroll>
      </div>

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
            <p className={styles.ctaBodyText}>
              Join hundreds of customers who trust us for motor, transformer,
              and generator insulation. Ready stock, bulk orders, and expert
              guidance — all from one authorised source in Chennai.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.btnPrimary}>
                Get In Touch
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

export default Article;
