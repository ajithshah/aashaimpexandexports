import React from "react";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Industries.module.css";

const Industries = () => {
  const industries = [
    { name: "Electronics & Technology", icon: "bi-laptop" },
    { name: "Textiles & Fashion", icon: "bi-scissors" },
    { name: "Agriculture & Food", icon: "bi-tree" },
    { name: "Chemicals & Pharmaceuticals", icon: "bi-flask" },
    { name: "Automotive & Machinery", icon: "bi-car-front" },
    { name: "Construction & Building", icon: "bi-building" },
    { name: "Consumer Goods", icon: "bi-bag" },
    { name: "Industrial Equipment", icon: "bi-gear" },
  ];

  return (
    <section className={styles.industries}>
      <div className={styles.container}>
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Industries We Serve</h2>
            <p className={styles.sectionDescription}>
              Future-ready import-export intelligence for high-impact industries
              across global markets
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <AnimateOnScroll
              key={index}
              animation="fadeUp"
              delay={index * 80}
            >
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>
                  <i className={industry.icon}></i>
                </div>
                <h3 className={styles.industryName}>{industry.name}</h3>
                <p className={styles.industryDescription}>
                  Intelligent sourcing, compliant trade operations, and precision
                  logistics tailored for the {industry.name.toLowerCase()} sector.
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
