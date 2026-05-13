import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./About.module.css";

const About = () => {
  const stats = [
    { number: "50+", label: "Years in Business", icon: "bi-award" },
    { number: "500+", label: "Loyal Customers", icon: "bi-people" },
    { number: "15+", label: "Product Lines", icon: "bi-box-seam" },
    { number: "100%", label: "Quality Commitment", icon: "bi-shield-check" },
  ];

  const values = [
    {
      title: "Uncompromising Quality",
      description:
        "Every insulation material we supply — from Polyester Film to Aramid Paper — is chosen with one clear goal: QUALITY. We source only the best from trusted global manufacturers.",
      icon: "bi-shield-check",
    },
    {
      title: "Decades of Trust",
      description:
        "Many of our customers have been with us for decades, because they know we stand behind what we supply. Their continued trust is the biggest reflection of our commitment.",
      icon: "bi-heart",
    },
    {
      title: "Strong Supply Network",
      description:
        "We maintain a strong and efficient supply network across the states, ensuring that even bulk requirements are fulfilled quickly and smoothly.",
      icon: "bi-truck",
    },
    {
      title: "Industry Partnerships",
      description:
        "Proud to be associated with leading global brands including M/s. JBF RAK LLC (UAE), M/s. Elantas Beck India Ltd., M/s. Gujarat Polymers, and M/s. Mithra Fiber Glass Sleeve.",
      icon: "bi-handshake",
    },
  ];

  const certifications = [
    "Authorised Importer & Stockist",
    "JBF RAK LLC (UAE) Partner",
    "Elantas Beck India Ltd. Dealer",
    "Gujarat Polymers Authorised",
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Logo Section */}
        <AnimateOnScroll animation="scaleUp">
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <Image
                src="/logo.png"
                alt="A A Sha Impex & Exports"
                width={120}
                height={120}
                priority
                className={styles.aboutLogo}
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Hero Section */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>
                Trusted Insulation Partners Since 1972
              </h2>
              <h3 className={styles.subtitle}>
                House of Electrical Insulation — Based in Chennai, India
              </h3>
              <p className={styles.description}>
                At A A SHA IMPEX AND EXPORTS, quality isn&apos;t just a promise — it&apos;s
                the foundation we&apos;ve built our business on since 1972. We work as
                Importers, Distributors, and Stockists of electrical insulation
                materials, carefully sourcing only the best products from trusted
                global manufacturers.
              </p>
              <p className={styles.description}>
                For us, insulation materials are not just commodities. They
                protect motors, transformers, and machines that power industries
                — and we take that responsibility seriously. Whether it&apos;s
                Polyester Film, Class F &amp; H insulation, Kraft Paper, Aramid
                fire-retardant paper, FPF/DMD laminates, Silicon-coated films,
                or PU Coated Fiber Glass Sleeves — every product is chosen with
                one clear goal: QUALITY.
              </p>
              <div className={styles.aboutActions}>
                <Link href="/products" className={styles.primaryBtn}>
                  Explore Our Products
                </Link>
                <Link href="/contact" className={styles.secondaryBtn}>
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <div className={styles.imagePlaceholder}>
                <span>House of Electrical Insulation</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Mission & Vision */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.missionVision}>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>
                <i className="bi-bullseye"></i>
              </div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardDescription}>
                To supply the finest-quality electrical insulation materials that
                protect motors, transformers, and machines powering industries
                across India — ensuring the right material reaches our customers
                at the right time, without compromise.
              </p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.cardIcon}>
                <i className="bi-eye"></i>
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardDescription}>
                To be India&apos;s most trusted name in electrical insulation
                materials — known for our attention to detail, insistence on
                quality, and genuine focus on customer satisfaction. We envision
                building lasting partnerships through honesty, performance, and
                trust.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Statistics */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.statsSection}>
            <h3 className={styles.statsTitle}>Our Achievements in Numbers</h3>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <i className={stat.icon}></i>
                  </div>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Core Values */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.valuesSection}>
            <h3 className={styles.valuesTitle}>Our Core Values</h3>
            <p className={styles.valuesDescription}>
              These fundamental principles guide everything we do and define who
              we are as a company.
            </p>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <div key={index} className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <i className={value.icon}></i>
                  </div>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Why Choose Us */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.whyChooseUs}>
            <div className={styles.whyContent}>
              <h3 className={styles.whyTitle}>
                Why Choose A A Sha Impex and Exports?
              </h3>
              <div className={styles.whyGrid}>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>
                    Authorised importer and stockist of leading insulation brands
                  </span>
                </div>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>Over 50 years of industry experience since 1972</span>
                </div>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>Complete range of Class B, F, and H insulation materials</span>
                </div>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>
                    Strong supply network ensuring timely bulk deliveries across states
                  </span>
                </div>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>
                    Precision slitting services with German technology
                  </span>
                </div>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>
                    Customers who have trusted us for decades stand as proof of our quality
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Certifications */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.certifications}>
            <h3 className={styles.certificationsTitle}>
              Certifications &amp; Memberships
            </h3>
            <div className={styles.certificationsGrid}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certificationCard}>
                  <i className="bi-award-fill"></i>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Call to Action */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.aboutCta}>
            <h3 className={styles.ctaTitle}>
              Need Quality Insulation Materials?
            </h3>
            <p className={styles.ctaDescription}>
              Join hundreds of satisfied customers who trust us for their
              electrical insulation needs. Let&apos;s discuss how we can supply the
              right materials for your motors, transformers, and generators.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaPrimary}>
                Get Started Today <i className="bi-arrow-right"></i>
              </Link>
              <Link href="/products" className={styles.ctaSecondary}>
                View Our Services
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default About;
