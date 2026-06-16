"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Products.module.css";

const ACCENT_KEYS = ["a0", "a1", "a2", "a3", "a4", "a5"];

const Products = () => {
  const [query, setQuery] = useState("");

  const productCategories = [
    {
      title: "ELANTAS Varnish 900ml",
      description:
        "ELANTAS Elmo Luft 1A-GOLDEN fast drying insulating varnish in 900ml bottles. Class F rated for motors, transformers, and electrical windings.",
      image: "/product/01.jpg",
      alt: "ELANTAS Elmo Luft 1A-GOLDEN 900ml insulating varnish bottle",
      link: "/contact",
      tag: "Varnish",
    },
    {
      title: "ELANTAS Thinner 234",
      description:
        "ELANTAS Thinner 234 for diluting and adjusting viscosity of impregnating and finishing varnishes. Ensures smooth, even coating application.",
      image: "/product/02.jpg",
      alt: "ELANTAS Thinner 234 for insulating varnish dilution",
      link: "/contact",
      tag: "Varnish",
    },
    {
      title: "Pink Rayon Tape",
      description:
        "Trinity brand pink rayon fabric insulation tape for coil winding, motor assembly, and transformer insulation applications.",
      image: "/product/03.jpg",
      alt: "Trinity pink rayon fabric insulation tape roll",
      link: "/contact",
      tag: "Tape",
    },
    {
      title: "Polyester Tape",
      description:
        "High-quality polyester woven tape with centre-line indicator for precise electrical insulation and coil banding applications.",
      image: "/product/05.jpg",
      alt: "Polyester woven insulation tape with centre-line",
      link: "/contact",
      tag: "Tape",
    },
    {
      title: "Rayon Thread",
      description:
        "Durable synthetic rayon lacing thread for tying and securing electrical coil windings, motor assemblies, and wire harnessing.",
      image: "/product/06.jpg",
      alt: "Synthetic rayon lacing thread spools",
      link: "/contact",
      tag: "Thread",
    },
    {
      title: "Omega Rubber Compound Tape",
      description:
        "OMEGA brand self-amalgamating rubber compound tape for shock-proof and water-proof electrical insulation and joint sealing.",
      image: "/product/07.jpg",
      alt: "OMEGA self-amalgamating rubber compound tape",
      link: "/contact",
      tag: "Tape",
    },
    {
      title: "Aseal Rubber Compound Tape",
      description:
        "A-SEAL No. 1 quality self-adhesive rubber compound tape for reliable electrical insulation, cable jointing, and sealing.",
      image: "/product/08.jpg",
      alt: "A-SEAL No.1 self-adhesive rubber compound tape",
      link: "/contact",
      tag: "Tape",
    },
    {
      title: "ELANTAS Varnish ISONEL 31J",
      description:
        "ELANTAS ISONEL 31J industrial-grade insulating varnish in bulk drums for high-volume motor and transformer manufacturing.",
      image: "/product/09.jpeg",
      alt: "ELANTAS ISONEL 31J insulating varnish bulk drum",
      link: "/contact",
      tag: "Varnish",
    },
    {
      title: "ELANTAS Varnish 225ml",
      description:
        "ELANTAS Elmo Luft 1A-GOLDEN Class F air-drying insulating varnish in convenient 225ml pouch for small-batch and repair applications.",
      image: "/product/10.jpeg",
      alt: "ELANTAS Elmo Luft 1A-GOLDEN 225ml varnish pouch",
      link: "/contact",
      tag: "Varnish",
    },
    {
      title: "Aseal Varnish",
      description:
        "A-SEAL fast drying insulating varnish available in multiple sizes for motor rewinding, transformer impregnation, and coil protection.",
      image: "/product/11.jpg",
      alt: "A-SEAL fast drying insulating varnish bottles",
      link: "/contact",
      tag: "Varnish",
    },
    {
      title: "Slitting Service",
      description:
        "Precision slitting and rewinding services for non-adhesive films, tapes, and flexible insulation materials to custom widths.",
      image: "/product/12.jpeg",
      alt: "Precision film slitting and rewinding machine",
      link: "/contact",
      tag: "Service",
    },
    {
      title: "Webbing Tape",
      description:
        "Woven webbing tape with centre-line marker for electrical insulation wrapping, coil binding, and transformer winding applications.",
      image: "/product/13.jpeg",
      alt: "Woven webbing insulation tape with centre-line",
      link: "/contact",
      tag: "Tape",
    },
    {
      title: "PressBoard",
      description:
        "High-density electrical pressboard sheets in various grades for transformer insulation, slot liners, and phase barriers.",
      image: "/product/15.png",
      alt: "High-density electrical pressboard sheets",
      link: "/contact",
      tag: "Sheet",
    },
    {
      title: "Epoxy Sheet",
      description:
        "Glass-reinforced epoxy laminate sheets (FR4/G10) for electrical insulation, switchboards, and structural support applications.",
      image: "/product/16.jpeg",
      alt: "FR4 G10 glass-reinforced epoxy laminate sheets",
      link: "/contact",
      tag: "Sheet",
    },
    {
      title: "Fire Retardant Fiberglass Sleeves",
      description:
        "Heat-resistant braided fiberglass sleeving for wire and cable protection in high-temperature electrical and industrial environments.",
      image: "/product/fire-retardant-fiberglass-sleeves.jpeg",
      alt: "Heat-resistant braided fiberglass sleeving",
      link: "/contact",
      tag: "Sleeve",
    },
  ];

  const filtered = useMemo(() => {
    if (!query.trim()) return productCategories;
    const q = query.toLowerCase();
    return productCategories.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="products" className={styles.products}>
      <div className={styles.bgBlob1} aria-hidden="true" />
      <div className={styles.bgBlob2} aria-hidden="true" />

      <div className={styles.container}>

        {/* ── HEADER ── */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.header}>
            <span className={styles.headerWatermark} aria-hidden="true">PRODUCTS</span>
            <p className={styles.headerOverline}>
              <span className={styles.overlineDot} />
              Authorised Importer &amp; Stockist
            </p>
            <h1 className={styles.headerTitle}>
              Electrical Insulation
              <br />
              <span className={styles.holoText}>Materials &amp; Supplies</span>
            </h1>
            <p className={styles.headerDesc}>
              A complete range of electrical insulation materials — Polyester Films,
              Aramid Papers, Insulating Varnishes, Fibre Glass Sleeves and more.
              Sourced from the world&apos;s finest manufacturers.
            </p>
            <a
              href="/catalog/catalog.pdf"
              download="AASha-Product-Catalog.pdf"
              className={styles.downloadBtn}
              aria-label="Download product catalog PDF"
            >
              <i className="bi-download"></i>
              Download Full Catalog (PDF)
            </a>
          </div>
        </AnimateOnScroll>

        {/* ── STATS STRIP ── */}
        <AnimateOnScroll animation="scaleUp">
          <div className={styles.statsStrip}>
            {[
              { num: "15+",      label: "Product Lines",    icon: "bi-box-seam" },
              { num: "50+",      label: "Years of Trust",   icon: "bi-award" },
              { num: "1000+",    label: "Loyal Customers",  icon: "bi-people" },
              { num: "Pan India",label: "Supply Network",   icon: "bi-geo-alt" },
            ].map((s, i) => (
              <div key={i} className={styles.statItem}>
                <i className={`${s.icon} ${styles.statIcon}`}></i>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* ── SEARCH ── */}
        <div className={styles.searchWrap}>
          <div className={styles.searchBar}>
            <svg className={styles.searchIcon} width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search products, tags…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search products"
            />
            {query && (
              <button className={styles.searchClear} onClick={() => setQuery("")} aria-label="Clear search">
                <i className="bi-x"></i>
              </button>
            )}
          </div>
          <span className={styles.resultCount}>
            <span className={styles.resultNum}>{filtered.length}</span>
            &nbsp;of {productCategories.length} products
          </span>
        </div>

        {/* ── GRID ── */}
        <div className={styles.grid}>
          {filtered.length > 0 ? (
            filtered.map((product, index) => {
              const accentKey = ACCENT_KEYS[index % ACCENT_KEYS.length];
              return (
                <article
                  key={product.title}
                  className={`${styles.card} ${styles[accentKey]}`}
                >
                  {/* Image */}
                  <div className={styles.cardImg}>
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={420}
                      height={220}
                      className={styles.img}
                      loading={index < 6 ? "eager" : "lazy"}
                    />
                    <div className={styles.imgOverlay} />
                    {/* Index badge */}
                    <span className={styles.cardNum}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {/* Tag chip */}
                    <span className={styles.cardTag}>{product.tag}</span>
                  </div>

                  {/* Content */}
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{product.title}</h3>
                    <p className={styles.cardDesc}>{product.description}</p>
                    <Link href={product.link} className={styles.cardCta}>
                      Get a Quote
                      <i className="bi-arrow-right" style={{ marginLeft: "0.35rem" }}></i>
                    </Link>
                  </div>
                </article>
              );
            })
          ) : (
            <div className={styles.noResults}>
              <span className={styles.noResultsIcon}>✦</span>
              <p>No products found for <strong>&ldquo;{query}&rdquo;</strong></p>
              <button className={styles.noResultsReset} onClick={() => setQuery("")}>
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* ── CTA BAND ── */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.ctaBand}>
            <div className={styles.ctaGlow1} aria-hidden="true" />
            <div className={styles.ctaGlow2} aria-hidden="true" />
            <div className={styles.ctaContent}>
              <p className={styles.ctaEyebrow}>Ready to work together?</p>
              <h2 className={styles.ctaTitle}>
                Need a Specific<br />
                <span className={styles.holoText}>Insulation Material?</span>
              </h2>
              <p className={styles.ctaBody}>
                We stock a wide range of electrical insulation materials and can source
                specialty items on request. Contact us for custom slitting, punching,
                and shaping services.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact" className={styles.btnPrimary}>
                  Request a Quote
                  <i className="bi-arrow-right" style={{ marginLeft: "0.45rem" }}></i>
                </Link>
                <a
                  href="/catalog/catalog.pdf"
                  download="AASha-Product-Catalog.pdf"
                  className={styles.btnGhostLight}
                >
                  <i className="bi-download" style={{ marginRight: "0.4rem" }}></i>
                  Download Catalog
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};

export default Products;
