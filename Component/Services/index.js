import React from "react";
import Link from "next/link";
import styles from "./Services.module.css";

const Services = () => {
  const services = [
    {
      icon: "🚢",
      title: "Import Services",
      description:
        "Comprehensive import solutions with customs clearance, documentation, and logistics support for seamless international procurement.",
      features: [
        "Customs Clearance",
        "Documentation",
        "Quality Inspection",
        "Warehousing",
      ],
    },
    {
      icon: "📦",
      title: "Export Services",
      description:
        "End-to-end export management including market research, documentation, shipping, and compliance with international trade regulations.",
      features: [
        "Market Research",
        "Export Documentation",
        "Shipping Coordination",
        "Compliance Support",
      ],
    },
    {
      icon: "🚛",
      title: "Logistics & Supply Chain",
      description:
        "Integrated logistics solutions with warehousing, transportation, and supply chain management for efficient global distribution.",
      features: [
        "Warehousing",
        "Transportation",
        "Supply Chain",
        "Inventory Management",
      ],
    },
    {
      icon: "💼",
      title: "Trade Consulting",
      description:
        "Expert trade consulting services including market analysis, regulatory compliance, and strategic business development support.",
      features: [
        "Market Analysis",
        "Regulatory Compliance",
        "Business Development",
        "Risk Assessment",
      ],
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionDescription}>
            Comprehensive import-export solutions tailored to meet your global
            business needs
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span>{service.icon}</span>
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.serviceFeatures}>
                <h4 className={styles.featuresTitle}>Key Features:</h4>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className={styles.serviceLink}>
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.servicesCTA}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Ready to Start Your Global Journey?
            </h3>
            <p className={styles.ctaDescription}>
              Contact us today to discuss your import-export requirements and
              discover how we can help grow your international business.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryBtn}>
                Get Started
              </Link>
              <Link href="/about" className={styles.secondaryBtn}>
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
