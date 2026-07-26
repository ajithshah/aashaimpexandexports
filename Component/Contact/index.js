import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap-icons/font/bootstrap-icons.css";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Contact.module.css";

const contactDetails = [
  {
    icon: "bi-geo-alt-fill",
    label: "Office Address",
    lines: [
      "No.24, Sembudoss Street, Broadway,",
      "Chennai - 600 001, Tamil Nadu",
    ],
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    icon: "bi-telephone-fill",
    label: "Phone",
    lines: ["+91 94441 84855", "+91 81228 16789"],
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: "bi-envelope-fill",
    label: "Email",
    lines: ["aashaimpexandexports@gmail.com"],
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: "bi-clock-fill",
    label: "Business Hours",
    lines: ["Mon – Sat: 9:30 AM – 6:30 PM", "Sunday: Closed"],
    accent: "#10b981",
    glow: "rgba(16,185,129,0.15)",
  },
];

const quickLinks = [
  { label: "About Us",   href: "/about",      icon: "bi-info-circle" },
  { label: "Products",   href: "/products",   icon: "bi-box-seam" },
  { label: "Industries", href: "/industries", icon: "bi-buildings" },
  { label: "Contact",    href: "/contact",    icon: "bi-chat-dots" },
];

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "",
  });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.bgBlob1} aria-hidden="true" />
      <div className={styles.bgBlob2} aria-hidden="true" />

      <div className={styles.container}>

        {/* ── HEADER ── */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.header}>
            <span className={styles.headerWatermark} aria-hidden="true">CONTACT</span>
            <p className={styles.headerOverline}>
              <span className={styles.overlineDot} />
              Get In Touch
            </p>
            <h1 className={styles.headerTitle}>
              Let&apos;s Start a
              <br />
              <span className={styles.holoText}>Conversation</span>
            </h1>
            <p className={styles.headerDesc}>
              Need insulation materials? Request a quote, ask about our products,
              or discuss custom slitting and supply requirements.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── MAIN GRID ── */}
        <div className={styles.mainGrid}>

          {/* LEFT — dark form panel */}
          <AnimateOnScroll animation="fadeLeft" className={styles.formSide}>
            <div className={styles.formPanel}>
              <div className={styles.formPanelHead}>
                <span className={styles.formEyebrow}>
                  <span className={styles.formEyebrowDot} />
                  Send a Message
                </span>
                <h2 className={styles.formTitle}>Request a Quote</h2>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name <span className={styles.req}>*</span>
                    </label>
                    <div className={styles.inputWrap}>
                      <i className={`bi-person ${styles.inputIcon}`}></i>
                      <input
                        type="text" id="name" name="name"
                        value={formData.name} onChange={handleChange}
                        required className={styles.input}
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email <span className={styles.req}>*</span>
                    </label>
                    <div className={styles.inputWrap}>
                      <i className={`bi-envelope ${styles.inputIcon}`}></i>
                      <input
                        type="email" id="email" name="email"
                        value={formData.email} onChange={handleChange}
                        required className={styles.input}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Phone <span className={styles.req}>*</span>
                    </label>
                    <div className={styles.inputWrap}>
                      <i className={`bi-telephone ${styles.inputIcon}`}></i>
                      <input
                        type="tel" id="phone" name="phone"
                        value={formData.phone} onChange={handleChange}
                        required className={styles.input}
                        placeholder="+91 9999999999"
                      />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>Company</label>
                    <div className={styles.inputWrap}>
                      <i className={`bi-building ${styles.inputIcon}`}></i>
                      <input
                        type="text" id="company" name="company"
                        value={formData.company} onChange={handleChange}
                        className={styles.input}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message <span className={styles.req}>*</span>
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    required rows={5} className={styles.textarea}
                    placeholder="Tell us about your insulation material requirements…"
                  />
                </div>

                {/* Status banners */}
                {status === "success" && (
                  <div className={styles.statusSuccess}>
                    <i className="bi-check-circle-fill"></i>
                    Message sent successfully! We&apos;ll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className={styles.statusError}>
                    <i className="bi-exclamation-triangle-fill"></i>
                    Failed to send. Please try again or call us directly.
                  </div>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className={styles.spinner} />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="bi-send-fill" style={{ marginLeft: "0.45rem" }}></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimateOnScroll>

          {/* RIGHT — info + quick links */}
          <AnimateOnScroll animation="fadeRight" className={styles.infoSide}>

            {/* Contact details */}
            <div className={styles.infoStack}>
              {contactDetails.map((item, i) => (
                <div
                  key={i}
                  className={styles.infoCard}
                  style={{ "--accent": item.accent, "--glow": item.glow }}
                >
                  <div className={styles.infoIcon}>
                    <i className={item.icon}></i>
                  </div>
                  <div className={styles.infoBody}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    {item.lines.map((line, j) => (
                      <span key={j} className={styles.infoLine}>{line}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className={styles.quickLinks}>
              <span className={styles.qlLabel}>Quick Links</span>
              <div className={styles.qlGrid}>
                {quickLinks.map((ql, i) => (
                  <a key={i} href={ql.href} className={styles.qlChip}>
                    <i className={ql.icon}></i>
                    {ql.label}
                  </a>
                ))}
              </div>
            </div>

          </AnimateOnScroll>
        </div>

        {/* ── MAP ── */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.mapWrap}>
            <div className={styles.mapHead}>
              <span className={styles.headerOverline} style={{ marginBottom: 0 }}>
                <span className={styles.overlineDot} />
                Find Us
              </span>
              <p className={styles.mapAddress}>
                No.24, Sembudoss Street, Broadway, Chennai – 600 001
              </p>
            </div>
            <div className={styles.mapFrame}>
              <iframe
                title="A A Sha Impex and Exports Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0756735748723!2d80.28444877532364!3d13.094390512173847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f8c9f69363f%3A0x434d86e1f9007946!2sA%20A%20Sha%20Impex%20and%20Exports!5e0!3m2!1sen!2sin!4v1757837550725!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default Contact;
