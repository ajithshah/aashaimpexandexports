import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = () => {
  const heroRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || typeof window === "undefined") return undefined;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let rect = hero.getBoundingClientRect();

    const applyPointerEffects = () => {
      if (!rect.width || !rect.height) {
        frameRef.current = null;
        return;
      }

      const relativeX = pointerX - rect.left;
      const relativeY = pointerY - rect.top;

      const clampedX = Math.max(0, Math.min(rect.width, relativeX));
      const clampedY = Math.max(0, Math.min(rect.height, relativeY));

      const tiltY = ((clampedX / rect.width) - 0.5) * 10;
      const tiltX = ((clampedY / rect.height) - 0.5) * -10;

      hero.style.setProperty("--mouse-x", `${clampedX}px`);
      hero.style.setProperty("--mouse-y", `${clampedY}px`);
      hero.style.setProperty("--rotate-x", `${tiltX.toFixed(2)}deg`);
      hero.style.setProperty("--rotate-y", `${tiltY.toFixed(2)}deg`);
      hero.style.setProperty("--rotate-x-inverse", `${(tiltX * -0.7).toFixed(2)}deg`);
      hero.style.setProperty("--rotate-y-inverse", `${(tiltY * -0.7).toFixed(2)}deg`);

      frameRef.current = null;
    };

    const requestUpdate = () => {
      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(applyPointerEffects);
      }
    };

    const updateRect = () => {
      rect = hero.getBoundingClientRect();
    };

    const handleMouseMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      requestUpdate();
    };

    const resetPointer = () => {
      hero.style.setProperty("--mouse-x", `${rect.width / 2}px`);
      hero.style.setProperty("--mouse-y", `${rect.height / 2}px`);
      hero.style.setProperty("--rotate-x", "0deg");
      hero.style.setProperty("--rotate-y", "0deg");
      hero.style.setProperty("--rotate-x-inverse", "0deg");
      hero.style.setProperty("--rotate-y-inverse", "0deg");
    };

    updateRect();
    resetPointer();

    window.addEventListener("resize", updateRect);
    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", resetPointer);

    return () => {
      window.removeEventListener("resize", updateRect);
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", resetPointer);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.gradientBg} aria-hidden="true"></div>
      <div className={styles.gridOverlay} aria-hidden="true"></div>
      <div className={styles.mouseLight} aria-hidden="true"></div>

      <div className={styles.floatingLayer} aria-hidden="true">
        <span className={styles.orbOne}></span>
        <span className={styles.orbTwo}></span>
        <span className={styles.orbThree}></span>
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>A A Sha Impex And Exports</p>

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

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.visualCard}>
            <span className={styles.cardPing}></span>
            <h3>AI Logistics Pulse</h3>
            <p>
              Real-time visibility across sourcing, customs clearance, and
              destination delivery with intelligent route optimization.
            </p>

            <div className={styles.metricRow}>
              <div>
                <strong>98.7%</strong>
                <span>On-Time Dispatch</span>
              </div>
              <div>
                <strong>42+</strong>
                <span>Trade Lanes</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Shipment Tracking</span>
              </div>
            </div>
          </div>

          <div className={styles.ring}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
