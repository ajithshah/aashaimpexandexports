import React from "react";
import Link from "next/link";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Industries.module.css";

const industries = [
  {
    name: "Electrical & Power",
    icon: "bi-lightning-charge-fill",
    accent: "#3b82f6",
    iconBg: "#eff6ff",
    tagBorder: "#dbeafe",
    description: "Insulation films, varnishes, and tapes for motors, transformers, and switchgear manufacturing.",
    tag: "Insulation · Varnish · Tapes",
  },
  {
    name: "Electronics & PCB",
    icon: "bi-cpu-fill",
    accent: "#8b5cf6",
    iconBg: "#f5f3ff",
    tagBorder: "#ede9fe",
    description: "Copper foils, adhesive films, and EMI shielding materials for PCB and semiconductor assembly.",
    tag: "Copper Foil · EMI · Films",
  },
  {
    name: "Automotive & EV",
    icon: "bi-car-front-fill",
    accent: "#10b981",
    iconBg: "#ecfdf5",
    tagBorder: "#d1fae5",
    description: "Thermal interface materials, silicone sheets, and PTFE products for automotive systems.",
    tag: "Thermal · PTFE · Silicone",
  },
  {
    name: "Aerospace & Defence",
    icon: "bi-send-fill",
    accent: "#f59e0b",
    iconBg: "#fffbeb",
    tagBorder: "#fef3c7",
    description: "Aramid fiber composites, Nomex paper, and polyimide films for high-reliability applications.",
    tag: "Aramid · Nomex · Polyimide",
  },
  {
    name: "Packaging & Printing",
    icon: "bi-box-seam-fill",
    accent: "#06b6d4",
    iconBg: "#ecfeff",
    tagBorder: "#cffafe",
    description: "BOPP films, PET films, and nylon laminates for flexible packaging and label printing.",
    tag: "BOPP · PET · Nylon Films",
  },
  {
    name: "Textiles & Apparel",
    icon: "bi-scissors",
    accent: "#ec4899",
    iconBg: "#fdf2f8",
    tagBorder: "#fce7f3",
    description: "Royan threads, acetate tapes, and specialty fibers for textile and apparel manufacturing.",
    tag: "Royan · Acetate · Fibers",
  },
  {
    name: "Construction & Infrastructure",
    icon: "bi-building-fill",
    accent: "#64748b",
    iconBg: "#f1f5f9",
    tagBorder: "#e2e8f0",
    description: "Epoxy sheets, phenolic laminates, and fiberglass sleeving for structural and electrical use.",
    tag: "Epoxy · Phenolic · Laminates",
  },
  {
    name: "Medical & Healthcare",
    icon: "bi-heart-pulse-fill",
    accent: "#ef4444",
    iconBg: "#fef2f2",
    tagBorder: "#fecaca",
    description: "PTFE products, silicone rubbers, and specialty adhesives for medical device manufacturing.",
    tag: "PTFE · Silicone · Adhesives",
  },
  {
    name: "Energy & Renewables",
    icon: "bi-sun-fill",
    accent: "#f97316",
    iconBg: "#fff7ed",
    tagBorder: "#fed7aa",
    description: "Mica tape, glass cloth, and prepreg materials for wind, solar, and battery applications.",
    tag: "Mica · Glass Cloth · Prepreg",
  },
  {
    name: "Chemicals & Pharma",
    icon: "bi-flask-fill",
    accent: "#14b8a6",
    iconBg: "#f0fdfa",
    tagBorder: "#ccfbf1",
    description: "Chemical-resistant PTFE, nylon films, and resin systems for process and pharmaceutical industry.",
    tag: "PTFE · Nylon · Resins",
  },
  {
    name: "Industrial Manufacturing",
    icon: "bi-gear-fill",
    accent: "#6366f1",
    iconBg: "#eef2ff",
    tagBorder: "#e0e7ff",
    description: "Comprehensive range of insulation, films, and slitting job work for all manufacturing sectors.",
    tag: "Tapes · Films · Job Work",
  },
  {
    name: "Transformers & Coils",
    icon: "bi-plugin",
    accent: "#0ea5e9",
    iconBg: "#f0f9ff",
    tagBorder: "#bae6fd",
    description: "Kraft paper, crepe tape, cotton tape, and impregnating varnish for transformer winding.",
    tag: "Kraft · Varnish · Cotton Tape",
  },
];

const Industries = () => {
  return (
    <section className={styles.industries}>
      <div className={styles.container}>

        {/* Header */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>Sectors We Serve</div>
            <h2 className={styles.sectionTitle}>Industries We Power</h2>
            <p className={styles.sectionDescription}>
              From electrical insulation to aerospace composites — our specialty
              materials reach the world&apos;s most demanding industries.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Stats Strip */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.statsStrip}>
            <div className={styles.stripStat}>
              <span className={styles.stripNum}>12+</span>
              <span className={styles.stripLabel}>Industries</span>
            </div>
            <div className={styles.stripStat}>
              <span className={styles.stripNum}>20+</span>
              <span className={styles.stripLabel}>Countries</span>
            </div>
            <div className={styles.stripStat}>
              <span className={styles.stripNum}>500+</span>
              <span className={styles.stripLabel}>Clients</span>
            </div>
            <div className={styles.stripStat}>
              <span className={styles.stripNum}>50+</span>
              <span className={styles.stripLabel}>Years Active</span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Grid */}
        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 60}>
              <div
                className={styles.industryCard}
                style={{
                  "--card-accent": industry.accent,
                  "--icon-bg": industry.iconBg,
                  "--tag-border": industry.tagBorder,
                }}
              >
                <div className={styles.iconWrap}>
                  <i className={industry.icon}></i>
                </div>
                <h3 className={styles.industryName}>{industry.name}</h3>
                <p className={styles.industryDescription}>
                  {industry.description}
                </p>
                <span className={styles.industryTag}>{industry.tag}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaInner}>
              <h3>Don&apos;t See Your Industry?</h3>
              <p>
                We supply specialty materials to virtually every manufacturing
                sector. Contact us and we&apos;ll find the right solution for you.
              </p>
              <Link href="/contact" className={styles.ctaBtn}>
                Talk to Our Experts →
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default Industries;
