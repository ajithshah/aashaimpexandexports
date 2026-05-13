import React from "react";
import Link from "next/link";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaTitle}>
              Need Quality Electrical Insulation Materials?
            </h2>
            <p className={styles.ctaDescription}>
              Join hundreds of satisfied customers who trust A A Sha Impex
              and Exports for their insulation needs. From Polyester Films to
              Fibre Glass Sleeves — we have you covered.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.primaryBtn}>
              Request a Quote
              <span className={styles.btnIcon}>⚡</span>
            </Link>
            <Link href="/products" className={styles.secondaryBtn}>
              Browse Products
            </Link>
          </div>

          <div className={styles.ctaFeatures}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Ready Stock Available</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Bulk Orders Welcome</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Pan-India Delivery</span>
            </div>
          </div>
        </div>

        <div className={styles.ctaBackground}>
          <div className={styles.bgShape1}></div>
          <div className={styles.bgShape2}></div>
          <div className={styles.bgShape3}></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
