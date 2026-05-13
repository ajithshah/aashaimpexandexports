import React from "react";
import Link from "next/link";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Industries.module.css";

const industries = [
  {
    name: "Electric Motors",
    icon: "bi-lightning-charge-fill",
    accent: "#3b82f6",
    iconBg: "#eff6ff",
    tagBorder: "#dbeafe",
    description: "Slot liners, slot closures, phase insulation, DMD/FPF laminates, and impregnating varnishes for F.H.P. and H.P. motors.",
    tag: "Slot Liner · DMD · Varnish",
  },
  {
    name: "Transformers",
    icon: "bi-plugin",
    accent: "#8b5cf6",
    iconBg: "#f5f3ff",
    tagBorder: "#ede9fe",
    description: "Kraft paper, crepe paper, Presspahn, layer insulation, core insulation, and conductor insulation materials for all transformer types.",
    tag: "Kraft Paper · Presspahn · Crepe",
  },
  {
    name: "Generators",
    icon: "bi-gear-fill",
    accent: "#10b981",
    iconBg: "#ecfdf5",
    tagBorder: "#d1fae5",
    description: "Polyester films, Aramid papers, epoxy slot wedges, and fibre glass sleeves for generator winding and slot insulation.",
    tag: "Polyester · Aramid · Wedges",
  },
  {
    name: "Fans & Blowers",
    icon: "bi-fan",
    accent: "#f59e0b",
    iconBg: "#fffbeb",
    tagBorder: "#fef3c7",
    description: "Class B and F insulation materials, GARLAM/GAR-FLEX composites, and winding tapes for ceiling and industrial fan manufacturing.",
    tag: "GARLAM · Class B · Class F",
  },
  {
    name: "Choke Coils & Reactors",
    icon: "bi-cpu-fill",
    accent: "#06b6d4",
    iconBg: "#ecfeff",
    tagBorder: "#cffafe",
    description: "Conductor insulation, formed insulating components, Aramid paper, and polyester film for choke coils and inductors.",
    tag: "Aramid · Polyester · Coils",
  },
  {
    name: "Switchgear & Panels",
    icon: "bi-toggles",
    accent: "#ec4899",
    iconBg: "#fdf2f8",
    tagBorder: "#fce7f3",
    description: "Epoxy sheets, phenolic laminates, and fibre glass sleeving for switchgear, control panels, and bus bar insulation.",
    tag: "Epoxy · Laminates · Sleeves",
  },
  {
    name: "Pumps & Compressors",
    icon: "bi-water",
    accent: "#64748b",
    iconBg: "#f1f5f9",
    tagBorder: "#e2e8f0",
    description: "Insulation materials for submersible pump motors, compressor motors, and water pump winding applications.",
    tag: "Submersible · Winding · Tapes",
  },
  {
    name: "Railways & Traction",
    icon: "bi-train-front-fill",
    accent: "#ef4444",
    iconBg: "#fef2f2",
    tagBorder: "#fecaca",
    description: "High-performance Nomex paper, polyimide films, and Class H insulation for traction motors and railway electrical systems.",
    tag: "Nomex · Polyimide · Class H",
  },
  {
    name: "Renewable Energy",
    icon: "bi-sun-fill",
    accent: "#f97316",
    iconBg: "#fff7ed",
    tagBorder: "#fed7aa",
    description: "Insulation materials for wind turbine generators, solar inverter transformers, and battery management system applications.",
    tag: "Wind · Solar · Inverters",
  },
  {
    name: "Automotive & EV",
    icon: "bi-car-front-fill",
    accent: "#14b8a6",
    iconBg: "#f0fdfa",
    tagBorder: "#ccfbf1",
    description: "Thermal insulation, fire-retardant sleeves, and high-temperature materials for EV motors and automotive electrical systems.",
    tag: "EV Motors · Thermal · FR Sleeve",
  },
  {
    name: "Motor Rewinding Shops",
    icon: "bi-wrench-adjustable",
    accent: "#6366f1",
    iconBg: "#eef2ff",
    tagBorder: "#e0e7ff",
    description: "Complete rewinding materials — varnish, slot liners, lacing thread, rayon tape, cotton tape, and fibre glass wire for service workshops.",
    tag: "Varnish · Thread · Tapes",
  },
  {
    name: "Heavy Engineering",
    icon: "bi-building-fill",
    accent: "#0ea5e9",
    iconBg: "#f0f9ff",
    tagBorder: "#bae6fd",
    description: "Bulk insulation materials for heavy-duty motor and transformer manufacturing in steel, cement, and process industries.",
    tag: "Bulk Supply · Industrial · OEM",
  },
];

const Industries = () => {
  return (
    <section className={styles.industries}>
      <div className={styles.container}>

        {/* Header */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.sectionHeader}>
            <div className={styles.eyebrow}>Industries We Serve</div>
            <h2 className={styles.sectionTitle}>Where Our Insulation Materials Are Used</h2>
            <p className={styles.sectionDescription}>
              From motor rewinding workshops to heavy engineering OEMs — our
              electrical insulation materials power industries that keep the
              world running.
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
              <h3>Don&apos;t See Your Application?</h3>
              <p>
                We supply insulation materials for virtually every electrical
                and industrial application. Contact us with your requirements
                and we&apos;ll recommend the right material.
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
