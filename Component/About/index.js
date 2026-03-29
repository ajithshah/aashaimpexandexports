import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./About.module.css";

const About = () => {
  const stats = [
    { number: "50+", label: "Years of Excellence", icon: "bi-award" },
    { number: "500+", label: "Happy Clients", icon: "bi-people" },
    { number: "50+", label: "Countries Served", icon: "bi-globe" },
    { number: "100%", label: "Satisfaction Rate", icon: "bi-star-fill" },
  ];

  const values = [
    {
      title: "Quality Assurance",
      description:
        "We maintain the highest standards of quality in all our products and services, ensuring customer satisfaction and building long-term relationships.",
      icon: "bi-shield-check",
    },
    {
      title: "Global Reach",
      description:
        "Our extensive network spans across 50+ countries, enabling us to provide seamless import-export solutions worldwide.",
      icon: "bi-globe2",
    },
    {
      title: "Innovation",
      description:
        "We continuously innovate our processes and adopt cutting-edge technology to stay ahead in the dynamic global trade landscape.",
      icon: "bi-lightbulb",
    },
    {
      title: "Reliability",
      description:
        "Our clients trust us for our consistent delivery, transparent communication, and commitment to meeting deadlines.",
      icon: "bi-clock",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "Export-Import License",
    "Chamber of Commerce Member",
    "Trade Association Certified",
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
                Your Partner for Global Trade Excellence
              </h2>
              <h3 className={styles.subtitle}>
                We are into this business since 1972 - over 50 years of excellence
              </h3>
              <p className={styles.description}>
                Powering international commerce with quality, reliability, and
                innovation. A A Sha Impex and Exports is a leading import-export
                company with a heritage spanning over 50 years since 1972. We have
                been at the forefront of providing cutting-edge trade solutions to
                businesses worldwide.
              </p>
              <p className={styles.description}>
                Our expertise lies in sourcing, exporting, and importing a wide
                range of products, ensuring seamless global trade operations for
                our clients. With a commitment to excellence and customer
                satisfaction, we continue to be the preferred partner for
                international business ventures.
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
                <span>Global Trade Solutions</span>
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
                To facilitate seamless global trade by providing exceptional
                import-export services, fostering international business
                relationships, and delivering value-driven solutions that empower
                our clients to succeed in the global marketplace.
              </p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.cardIcon}>
                <i className="bi-eye"></i>
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardDescription}>
                To be the world&apos;s most trusted import-export partner, known for
                our integrity, innovation, and commitment to excellence. We
                envision a future where global trade barriers are minimized
                through our comprehensive solutions and expertise.
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
                    Extensive experience in international trade regulations
                  </span>
                </div>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>Comprehensive logistics and supply chain management</span>
                </div>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>Competitive pricing and transparent cost structure</span>
                </div>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>
                    24/7 customer support and dedicated account managers
                  </span>
                </div>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>
                    Advanced tracking systems for complete shipment visibility
                  </span>
                </div>
                <div className={styles.whyItem}>
                  <i className="bi-check-circle-fill"></i>
                  <span>
                    Strong relationships with global suppliers and distributors
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
              Ready to Start Your Global Trade Journey?
            </h3>
            <p className={styles.ctaDescription}>
              Join hundreds of successful businesses that trust us for their
              international trade needs. Let&apos;s discuss how we can help you expand
              your business globally.
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
