import React from "react";
import Link from "next/link";
import styles from "./Services.module.css";

const Services = () => {
  const services = [
    {
      icon: "�",
      title: "Insulation Material Supply",
      description:
        "Complete range of electrical insulation materials — Polyester Films, Aramid Papers, Kraft Paper, DMD/FPF Laminates, and Presspahn for motors, transformers, and generators.",
      features: [
        "Polyester Films (Class F)",
        "Aramid & Nomex Papers",
        "DMD/FPF Laminates",
        "Kraft & Presspahn Paper",
      ],
    },
    {
      icon: "🧪",
      title: "Insulating Varnishes & Coatings",
      description:
        "Authorised stockist of ELANTAS and A-SEAL insulating varnishes for motor rewinding, transformer impregnation, and coil protection applications.",
      features: [
        "ELANTAS Elmo Luft Varnish",
        "ELANTAS ISONEL 31J",
        "A-SEAL Fast Drying Varnish",
        "Thinners & Solvents",
      ],
    },
    {
      icon: "✂️",
      title: "Precision Slitting Services",
      description:
        "Custom slitting, roll-to-sheet cutting, punching, and shaping services using German technology for films, foils, BOPP/LDPE, and all types of papers.",
      features: [
        "Film & Tape Slitting",
        "Roll-to-Sheet Cutting",
        "Custom Punching & Shaping",
        "Width from 5mm onwards",
      ],
    },
    {
      icon: "🛡️",
      title: "Tapes & Sleeves Supply",
      description:
        "Wide range of insulation tapes and protective sleeves — Rubber Compound Tape, Rayon Tape, Polyester Tape, Fibre Glass Sleeves, and Fire Retardant Sleeves.",
      features: [
        "Rubber Compound Tapes",
        "Pink Rayon & Cotton Tapes",
        "Fibre Glass Sleeves (PU/Silicone)",
        "Polyimide & Polyester Tapes",
      ],
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <p className={styles.sectionDescription}>
            Your one-stop source for electrical insulation materials, varnishes,
            precision slitting services, and industrial tapes
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
              Looking for Quality Insulation Materials?
            </h3>
            <p className={styles.ctaDescription}>
              Contact us today to discuss your insulation material requirements.
              We maintain ready stock and can fulfil bulk orders quickly across
              India.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.primaryBtn}>
                Get a Quote
              </Link>
              <Link href="/products" className={styles.secondaryBtn}>
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
