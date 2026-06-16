import React from "react";
import Link from "next/link";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Industries.module.css";

const industries = [
  {
    name: "Electric Motors",
    icon: "bi-lightning-charge-fill",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.18)",
    description: "Slot liners, slot closures, phase insulation, DMD/FPF laminates, and impregnating varnishes for F.H.P. and H.P. motors.",
    tag: "Slot Liner · DMD · Varnish",
  },
  {
    name: "Transformers",
    icon: "bi-plugin",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.18)",
    description: "Kraft paper, crepe paper, Presspahn, layer insulation, core insulation, and conductor insulation materials for all transformer types.",
    tag: "Kraft Paper · Presspahn · Crepe",
  },
  {
    name: "Generators",
    icon: "bi-gear-fill",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.18)",
    description: "Polyester films, Aramid papers, epoxy slot wedges, and fibre glass sleeves for generator winding and slot insulation.",
    tag: "Polyester · Aramid · Wedges",
  },
  {
    name: "Fans & Blowers",
    icon: "bi-fan",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    description: "Class B and F insulation materials, GARLAM/GAR-FLEX composites, and winding tapes for ceiling and industrial fan manufacturing.",
    tag: "GARLAM · Class B · Class F",
  },
  {
    name: "Choke Coils & Reactors",
    icon: "bi-cpu-fill",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.18)",
    description: "Conductor insulation, formed insulating components, Aramid paper, and polyester film for choke coils and inductors.",
    tag: "Aramid · Polyester · Coils",
  },
  {
    name: "Switchgear & Panels",
    icon: "bi-toggles",
    accent: "#ec4899",
    glow: "rgba(236,72,153,0.18)",
    description: "Epoxy sheets, phenolic laminates, and fibre glass sleeving for switchgear, control panels, and bus bar insulation.",
    tag: "Epoxy · Laminates · Sleeves",
  },
  {
    name: "Pumps & Compressors",
    icon: "bi-water",
    accent: "#64748b",
    glow: "rgba(100,116,139,0.18)",
    description: "Insulation materials for submersible pump motors, compressor motors, and water pump winding applications.",
    tag: "Submersible · Winding · Tapes",
  },
  {
    name: "Railways & Traction",
    icon: "bi-train-front-fill",
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.18)",
    description: "High-performance Nomex paper, polyimide films, and Class H insulation for traction motors and railway electrical systems.",
    tag: "Nomex · Polyimide · Class H",
  },
  {
    name: "Renewable Energy",
    icon: "bi-sun-fill",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.18)",
    description: "Insulation materials for wind turbine generators, solar inverter transformers, and battery management system applications.",
    tag: "Wind · Solar · Inverters",
  },
  {
    name: "Automotive & EV",
    icon: "bi-car-front-fill",
    accent: "#14b8a6",
    glow: "rgba(20,184,166,0.18)",
    description: "Thermal insulation, fire-retardant sleeves, and high-temperature materials for EV motors and automotive electrical systems.",
    tag: "EV Motors · Thermal · FR Sleeve",
  },
  {
    name: "Motor Rewinding Shops",
    icon: "bi-wrench-adjustable",
    accent: "#6366f1",
    glow: "rgba(99,102,241,0.18)",
    description: "Complete rewinding materials — varnish, slot liners, lacing thread, rayon tape, cotton tape, and fibre glass wire for service workshops.",
    tag: "Varnish · Thread · Tapes",
  },
  {
    name: "Heavy Engineering",
    icon: "bi-building-fill",
    accent: "#0ea5e9",
    glow: "rgba(14,165,233,0.18)",
    description: "Bulk insulation materials for heavy-duty motor and transformer manufacturing in steel, cement, and process industries.",
    tag: "Bulk Supply · Industrial · OEM",
  },
];

const Industries = () => {
  return (
    <section className={styles.industries}>
      <div className={styles.bgBlob1} aria-hidden="true" />
      <div className={styles.bgBlob2} aria-hidden="true" />

      <div className={styles.container}>

        {/* ── HEADER ── */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.header}>
            <span className={styles.headerWatermark} aria-hidden="true">SECTORS</span>
            <p className={styles.headerOverline}>
              <span className={styles.overlineDot} />
              Industries We Serve
            </p>
            <h1 className={styles.headerTitle}>
              Where Our Materials
              <br />
              <span className={styles.holoText}>Power the World</span>
            </h1>
            <p className={styles.headerDesc}>
              From motor rewinding workshops to heavy engineering OEMs — our
              electrical insulation materials keep industries running safely
              and efficiently across India and beyond.
            </p>
          </div>
        </AnimateOnScroll>

        {/* ── STATS STRIP ── */}
        <AnimateOnScroll animation="scaleUp">
          <div className={styles.statsStrip}>
            {[
              { num: "12+",  label: "Industries Served", icon: "bi-buildings" },
              { num: "20+",  label: "Countries",         icon: "bi-globe" },
              { num: "1000+",label: "Clients",           icon: "bi-people" },
              { num: "50+",  label: "Years Active",      icon: "bi-award" },
            ].map((s, i) => (
              <div key={i} className={styles.statItem}>
                <i className={`${s.icon} ${styles.statIcon}`}></i>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* ── INDUSTRIES GRID ── */}
        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <AnimateOnScroll
              key={index}
              animation="riseIn"
              delay={index * 55}
              className={styles.gridItem}
            >
              <div
                className={styles.card}
                style={{
                  "--accent":  industry.accent,
                  "--glow":    industry.glow,
                }}
              >
                {/* Index number watermark */}
                <span className={styles.cardIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className={styles.iconWrap}>
                  <i className={industry.icon}></i>
                </div>

                {/* Text */}
                <h3 className={styles.cardName}>{industry.name}</h3>
                <p className={styles.cardDesc}>{industry.description}</p>

                {/* Tag */}
                <span className={styles.cardTag}>{industry.tag}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* ── CTA BAND ── */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.ctaBand}>
            <div className={styles.ctaGlow1} aria-hidden="true" />
            <div className={styles.ctaGlow2} aria-hidden="true" />
            <div className={styles.ctaContent}>
              <p className={styles.ctaEyebrow}>Don&apos;t see your application?</p>
              <h2 className={styles.ctaTitle}>
                We Supply For<br />
                <span className={styles.holoText}>Every Application</span>
              </h2>
              <p className={styles.ctaBody}>
                We supply insulation materials for virtually every electrical and
                industrial application. Contact us with your requirements and
                we&apos;ll recommend the right material.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact" className={styles.btnPrimary}>
                  Talk to Our Experts
                  <i className="bi-arrow-right" style={{ marginLeft: "0.45rem" }}></i>
                </Link>
                <Link href="/products" className={styles.btnGhostLight}>
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default Industries;
