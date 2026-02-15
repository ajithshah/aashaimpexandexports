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
              Ready to Expand Your Global Business?
            </h2>
            <p className={styles.ctaDescription}>
              Join hundreds of successful businesses that trust A A Sha Impex
              and Exports for their international trade needs. Let's discuss how
              we can help you achieve your global business goals.
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.primaryBtn}>
              Start Your Journey
              <span className={styles.btnIcon}>🚀</span>
            </Link>
            <Link href="/products" className={styles.secondaryBtn}>
              Explore Products
            </Link>
          </div>

          <div className={styles.ctaFeatures}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Free Consultation</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>Expert Guidance</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✓</span>
              <span>24/7 Support</span>
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
