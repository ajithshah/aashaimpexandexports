import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Motor Manufacturer",
      company: "Kumar Motors, Chennai",
      content:
        "We have been buying insulation materials from A A Sha Impex for over 15 years. Their polyester films and DMD laminates are consistently high quality. Reliable supply and fair pricing.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Suresh Babu",
      position: "Transformer Division Head",
      company: "Power Transformers Ltd",
      content:
        "Excellent Kraft paper and Presspahn quality. A A Sha Impex has been our trusted supplier for transformer insulation materials. Their stock availability saves us critical production time.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Venkatesh R",
      position: "Owner, Motor Rewinding Shop",
      company: "Sri Vinayaga Electricals",
      content:
        "Best place for motor rewinding materials in Chennai. ELANTAS varnish, rayon tape, slot liners — everything under one roof. They understand what we need and deliver promptly.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Anand Prakash",
      position: "Purchase Manager",
      company: "National Electricals",
      content:
        "We’ve been sourcing fibre glass sleeves, epoxy sheets, and rubber compound tapes from A A Sha for decades. Their commitment to quality and timely delivery is unmatched.",
      rating: 5,
      image: "👨‍💼",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`${styles.star} ${index < rating ? styles.starActive : ""}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <p className={styles.sectionDescription}>
            Trusted by motor manufacturers, transformer makers, and rewinding
            shops across India for quality insulation materials
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.clientImage}>
                  <span>{testimonial.image}</span>
                </div>
                <div className={styles.clientInfo}>
                  <h4 className={styles.clientName}>{testimonial.name}</h4>
                  <p className={styles.clientPosition}>
                    {testimonial.position}
                  </p>
                  <p className={styles.clientCompany}>{testimonial.company}</p>
                </div>
              </div>

              <div className={styles.rating}>
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className={styles.testimonialContent}>
                "{testimonial.content}"
              </blockquote>

              <div className={styles.quoteMark}>❝</div>
            </div>
          ))}
        </div>

        <div className={styles.testimonialsStats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Loyal Customers</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Years of Trust</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Product Lines</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Quality Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
