import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, Tech Solutions India",
      company: "Tech Solutions India",
      content:
        "A A Sha Impex has been our trusted partner for international procurement. Their expertise in electronics imports and customs clearance has helped us scale our operations significantly.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Priya Sharma",
      position: "Export Manager, Global Textiles",
      company: "Global Textiles Ltd",
      content:
        "Outstanding export services! They handled our textile shipments to multiple countries with exceptional professionalism and ensured timely delivery every time.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Michael Chen",
      position: "Operations Director, Asia Pacific Corp",
      company: "Asia Pacific Corporation",
      content:
        "Their logistics expertise and supply chain management have streamlined our import operations. Highly recommended for any international business needs.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Sarah Johnson",
      position: "Founder, Johnson Enterprises",
      company: "Johnson Enterprises",
      content:
        "From market research to final delivery, A A Sha Impex provided end-to-end solutions that exceeded our expectations. Their team is knowledgeable and reliable.",
      rating: 5,
      image: "👩‍💻",
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
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
          <p className={styles.sectionDescription}>
            Trusted by businesses worldwide for reliable import-export solutions
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
            <div className={styles.statLabel}>Happy Clients</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>25+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Countries Served</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
