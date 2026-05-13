import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap-icons/font/bootstrap-icons.css";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Contact.module.css";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.contactHeader}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.sectionDescription}>
              Need insulation materials? Request a quote or ask about our
              products and services.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={100}>
          <div className={styles.contactContent}>
          <div className={styles.contactForm}>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="+91 9999999999"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.label}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message <span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  placeholder="Tell us about your insulation material requirements..."
                  rows="5"
                ></textarea>
              </div>

              {status === "success" && (
                <p style={{ color: "green", marginBottom: "1rem" }}>
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "red", marginBottom: "1rem" }}>
                  Failed to send message. Please try again.
                </p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Contact Information</h3>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i
                    className="bi bi-geo-alt-fill"
                    style={{ fontSize: "1.1em", verticalAlign: "middle" }}
                  ></i>
                </div>
                <div>
                  <strong>Office:</strong>
                  <br />
                  No.24, Sembudoss Street, Broadway,
                  <br />
                  Chennai - 600 001
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i
                    className="bi bi-telephone-fill"
                    style={{ fontSize: "1.1em", verticalAlign: "middle" }}
                  ></i>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <br />
                  +91 94444 55626
                  <br />
                  +91 94441 84855
                  <br />
                  +91 81228 16789
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <i
                    className="bi bi-envelope-fill"
                    style={{ fontSize: "1.1em", verticalAlign: "middle" }}
                  ></i>
                </div>
                <div>
                  <strong>Email:</strong>
                  <br />
                  aashaimpexandexports@gmail.com
                </div>
              </div>
            </div>

            <div className={styles.quickLinks}>
              <h3 className={styles.linksTitle}>Quick Links</h3>
              <div className={styles.linksGrid}>
                <a href="/about" className={styles.link}>
                  About Us
                </a>
                <a href="/products" className={styles.link}>
                  Products
                </a>
                <a href="/industries" className={styles.link}>
                  Industries
                </a>
                <a href="/contact" className={styles.link}>
                  Contact
                </a>
              </div>
            </div>
          </div>
          </div>
        </AnimateOnScroll>
        {/* Google Map */}
        <AnimateOnScroll animation="fadeUp" delay={200}>
          <div className={styles.mapContainer} style={{ marginTop: "2rem" }}>
            <iframe
              title="A A Sha Impex and Exports Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0756735748723!2d80.28444877532364!3d13.094390512173847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f8c9f69363f%3A0x434d86e1f9007946!2sA%20A%20Sha%20Impex%20and%20Exports!5e0!3m2!1sen!2sin!4v1757837550725!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "8px", width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contact;
