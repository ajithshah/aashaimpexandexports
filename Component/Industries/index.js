import React from 'react';
import styles from './Industries.module.css';

const Industries = () => {
  const industries = [
    { name: 'Electronics & Technology', icon: 'bi-laptop' },
    { name: 'Textiles & Fashion', icon: 'bi-scissors' },
    { name: 'Agriculture & Food', icon: 'bi-tree' },
    { name: 'Chemicals & Pharmaceuticals', icon: 'bi-flask' },
    { name: 'Automotive & Machinery', icon: 'bi-car-front' },
    { name: 'Construction & Building', icon: 'bi-building' },
    { name: 'Consumer Goods', icon: 'bi-bag' },
    { name: 'Industrial Equipment', icon: 'bi-gear' }
  ];

  return (
    <section className={styles.industries}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <p className={styles.sectionDescription}>
            We provide comprehensive import-export solutions across diverse industries worldwide
          </p>
        </div>

        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.industryCard}>
              <div className={styles.industryIcon}>
                <i className={industry.icon}></i>
              </div>
              <h3 className={styles.industryName}>{industry.name}</h3>
              <p className={styles.industryDescription}>
                Specialized import-export services tailored for {industry.name.toLowerCase()} industry requirements.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
