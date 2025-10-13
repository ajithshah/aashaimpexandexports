import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Revolutionizing Global Trade Through Innovation
          </h1>
          <h2 className={styles.heroSubtitle}>
            Next-Generation Import-Export Solutions
          </h2>
          <p className={styles.heroDescription}>
            Harnessing cutting-edge technology and AI-driven logistics to connect markets
            across continents. Experience seamless, intelligent trade solutions that
            transcend traditional boundaries and accelerate your business growth.
          </p>
          <div className={styles.heroActions}>
            <Link href="/products" className={styles.primaryBtn}>
              Get Started
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Connect Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
