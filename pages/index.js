import { useEffect } from "react";
import Hero from "@/Component/Hero";
import Meta from "@/Component/Meta";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "@/styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    const orb = document.querySelector(`.${styles.orb}`);

    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      if (orb) {
        orb.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`${styles.pageWrapper} d-flex flex-column min-vh-100`}>
      <Meta
        title="A A Sha Impex and Exports | Electrical Insulation & Specialty Films Supplier India"
        description="A A Sha Impex and Exports is a leading supplier and exporter of electrical insulation materials, specialty films, industrial tapes, BOPP films, PET films, polyimide films, and Nomex paper from India. 50+ years of trusted global trade."
        keywords="electrical insulation materials India, specialty films supplier India, BOPP films exporter, PET films supplier, polyimide films Kapton India, Nomex paper supplier, industrial tapes exporter India, insulation varnish supplier, ELANTAS resins India, mica tape supplier, A A Sha Impex, specialty materials export India"
        url="https://aashaimpexandexports.com"
        siteName="A A Sha Impex and Exports"
      />

      <main className={`${styles.mainContent} flex-grow-1`}>
        {/* HERO */}
        <Hero />

        {/* ================= ABOUT ================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.gridTwo}>
              <AnimateOnScroll animation="fadeLeft" className={styles.gridCol}>
                <h2 className={styles.sectionTitle}>
                  25+ Years of Global Trade Excellence
                </h2>
                <p className={styles.sectionText}>
                  A A Sha Impex and Exports has been driving international
                  commerce with precision, reliability, and innovation for over
                  two decades.
                </p>
                <p className={styles.sectionText}>
                  We specialize in intelligent sourcing, seamless logistics, and
                  next-generation import-export solutions.
                </p>

                <div className={styles.buttonGroup}>
                  <a href="/products" className={styles.primaryBtn}>
                    Explore Products
                  </a>
                  <a href="/contact" className={styles.secondaryBtn}>
                    Get In Touch
                  </a>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="scaleUp" delay={200} className={styles.gridCol}>
                <div className={styles.aiVisual}>
                  <div className={styles.orb}></div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <h2 className={styles.centerTitle}>
                Our Intelligent Trade Services
              </h2>
            </AnimateOnScroll>

            <div className={styles.cardGrid}>
              {[
                "Import Solutions",
                "Export Management",
                "AI Logistics Optimization",
                "Global Trade Consulting",
              ].map((item, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fadeUp"
                  delay={index * 100}
                >
                  <div className={styles.card}>
                    <div className={styles.cardGlow}></div>
                    <h3>{item}</h3>
                    <p>
                      Smart, automated, and optimized global trade operations
                      powered by experience and technology.
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <h2 className={styles.centerTitle}>Industries We Empower</h2>
            </AnimateOnScroll>

            <div className={styles.industryGrid}>
              {[
                "Technology",
                "Textiles",
                "Agriculture",
                "Pharmaceuticals",
                "Automotive",
                "Industrial Equipment",
              ].map((industry, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fadeUp"
                  delay={index * 80}
                >
                  <div className={styles.industryItem}>{industry}</div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <h2 className={styles.ctaTitle}>Ready to Expand Globally?</h2>
              <p className={styles.ctaText}>
                Join the future of AI-powered global trade and accelerate your
                growth.
              </p>
              <a href="/contact" className={styles.ctaButton}>
                Start Your Journey →
              </a>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
    </div>
  );
}
