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
      title: "AAEROTHERM® Nomex (APA)",
      description:
        "AEROTHERM Nomex aramid paper for high-temperature Class H electrical insulation in motors, transformers, and generators.",
      image: "/product-page/aerotherm-nomex-apa.png",
      alt: "AEROTHERM Nomex aramid insulation paper",
      link: "/contact",
      tag: "Paper",
    },
    {
      title: "DMD Film",
      description:
        "DMD (Dacron-Mylar-Dacron) composite insulation laminate for Class B slot lining and phase insulation in motor and transformer windings.",
      image: "/product-page/dmd-film.png",
      alt: "DMD composite insulation laminate film",
      link: "/contact",
      tag: "Film",
    },
    {
      title: "Insulating Varnish (ELANTAS)",
      description:
        "ELANTAS insulating varnish range for motor rewinding, impregnation, and coil protection — trusted since 1972.",
      image: "/product-page/insulating-varnish-elantas.png",
      alt: "ELANTAS insulating varnish range",
      link: "/contact",
      tag: "Varnish",
    },
    {
      title: "ELANTAS Elmo Luft 1A Golden",
      description:
        "ELANTAS Elmo Luft 1A-GOLDEN fast drying insulating varnish. Class F rated for motors and transformers.",
      image: "/product-page/elmo-luft-1a-golden.png",
      alt: "ELANTAS Elmo Luft 1A-GOLDEN insulating varnish bottle",
      link: "/contact",
      tag: "Varnish",
    },
    {
      title: "Elmotherm H71",
      description:
        "ELANTAS Elmotherm H71 Class H high-temperature insulating varnish for demanding motor and transformer applications.",
      image: "/product-page/elmotherm-h71.png",
      alt: "ELANTAS Elmotherm H71 insulating varnish",
      link: "/contact",
      tag: "Varnish",
    },
    {
      title: "Epoxy Gel Coat (Red)",
      description:
        "Epoxy gel coat compound in red for sealing, potting, and protective coating of electrical components.",
      image: "/product-page/epoxy-gel-coat-red.png",
      alt: "Red epoxy gel coat compound",
      link: "/contact",
      tag: "Coating",
    },
    {
      title: "F93 Component A",
      description:
        "F93 two-component epoxy resin — Component A — for potting and encapsulation of electrical windings.",
      image: "/product-page/varnish-f93-component-a.png",
      alt: "F93 epoxy resin Component A",
      link: "/contact",
      tag: "Resin",
    },
    {
      title: "F93 Component B",
      description:
        "F93 two-component epoxy resin — Component B hardener — for potting and encapsulation of electrical windings.",
      image: "/product-page/varnish-f93-component-b.png",
      alt: "F93 epoxy resin Component B hardener",
      link: "/contact",
      tag: "Resin",
    },
    {
      title: "Garlam® Insulation Composite Paper",
      description:
        "Garlam laminated insulation paper for slot lining and phase insulation in motors and transformers.",
      image: "/product-page/garlam-insulation-composite-paper.png",
      alt: "Garlam laminated insulation paper",
      link: "/contact",
      tag: "Paper",
    },
    {
      title: "Isonel 51J",
      description:
        "ELANTAS ISONEL 51J industrial-grade insulating varnish in bulk drums for high-volume motor and transformer manufacturing.",
      image: "/product-page/isonel-51j.jpg",
      alt: "ELANTAS ISONEL 51J insulating varnish bulk drum",
      link: "/contact",
      tag: "Varnish",
    },
    {
      title: "Insulating Kraft Paper",
      description:
        "Insulating kraft paper (Leatheroid) for coil wrapping and general-purpose electrical insulation.",
      image: "/product-page/insulating-kraft-paper.png",
      alt: "Insulating kraft paper roll",
      link: "/contact",
      tag: "Paper",
    },
    {
      title: "Polyester Film Milky White",
      description:
        "Milky white polyester (PET) film for slot lining and phase insulation in electrical windings.",
      image: "/product-page/polyester-film-milky-white.png",
      alt: "Milky white polyester insulation film",
      link: "/contact",
      tag: "Film",
    },
    {
      title: "Polyester Film Transparent Slitted",
      description:
        "Transparent slitted polyester film rolls for electrical insulation and wrapping applications.",
      image: "/product-page/transparent-clear-polyester-film-slitted.png",
      alt: "Transparent slitted polyester insulation film rolls",
      link: "/contact",
      tag: "Film",
    },
    {
      title: "Rayon Winding Thread",
      description:
        "Rayon lacing thread for tying and securing electrical coil windings, motor assemblies, and wire harnessing.",
      image: "/product-page/rayon-winding-thread.jpg",
      alt: "Rayon winding lacing thread spools",
      link: "/contact",
      tag: "Thread",
    },
    {
      title: "Thinner 234",
      description:
        "ELANTAS Thinner 234 for diluting and adjusting viscosity of impregnating and finishing varnishes. Ensures smooth, even coating application.",
      image: "/product-page/thinner-234.png",
      alt: "ELANTAS Thinner 234 for insulating varnish dilution",
      link: "/contact",
      tag: "Varnish",
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
