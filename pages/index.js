import { useEffect } from "react";
import Header from "@/Component/Header";
import Hero from "@/Component/Hero";
import Footer from "@/Component/Footer";
import Meta from "@/Component/Meta";
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
        title="A A Sha Impex and Exports - Empowering Global Trade"
        description="A A Sha Impex and Exports connects global markets with quality products and reliable import-export solutions."
        keywords="import export, global trade, India export, logistics, supply chain"
        url="https://aashaimpexandexports.com"
        image="/logo.png"
        siteName="A A Sha Impex and Exports"
      />

      <Header />

      <main className={`${styles.mainContent} flex-grow-1`}>
        {/* HERO */}
        <Hero />

        {/* ================= ABOUT ================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.gridTwo}>
              <div className={styles.fadeLeft}>
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
              </div>

              <div className={styles.aiVisual}>
                <div className={styles.orb}></div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className={styles.sectionDark}>
          <div className={styles.container}>
            <h2 className={styles.centerTitle}>
              Our Intelligent Trade Services
            </h2>

            <div className={styles.cardGrid}>
              {[
                "Import Solutions",
                "Export Management",
                "AI Logistics Optimization",
                "Global Trade Consulting",
              ].map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cardGlow}></div>
                  <h3>{item}</h3>
                  <p>
                    Smart, automated, and optimized global trade operations
                    powered by experience and technology.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INDUSTRIES ================= */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.centerTitle}>Industries We Empower</h2>

            <div className={styles.industryGrid}>
              {[
                "Technology",
                "Textiles",
                "Agriculture",
                "Pharmaceuticals",
                "Automotive",
                "Industrial Equipment",
              ].map((industry, index) => (
                <div key={index} className={styles.industryItem}>
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Ready to Expand Globally?</h2>
            <p className={styles.ctaText}>
              Join the future of AI-powered global trade and accelerate your
              growth.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Start Your Journey →
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
