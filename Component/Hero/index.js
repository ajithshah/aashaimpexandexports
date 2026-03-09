import React from "react";
import Link from "next/link";
import styles from "./Hero.module.css";
import WorldMapDots from "../WorldMapDots";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* NO WorldMapDots component here anymore — the map is now pure CSS background */}

      <div className={styles.floatingLayer} aria-hidden="true">
        <span className={styles.orbOne}></span>
        <span className={styles.orbTwo}></span>
        <span className={styles.orbThree}></span>
      </div>

      <WorldMapDots />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>A A Sha Impex And Exports</p>

          <h1 className={styles.heroTitle}>
            Connecting Markets Across Continents
          </h1>

          <h2 className={styles.heroSubtitle}>
            Your Trusted Import & Export Partner
          </h2>

          <p className={styles.heroDescription}>
            We specialize in seamless global trade solutions, delivering quality
            products worldwide with reliability and excellence. From sourcing to
            delivery, we make international trade effortless.
          </p>

          <div className={styles.heroActions}>
            <Link href="/products" className={styles.primaryBtn}>
              Explore Products
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;