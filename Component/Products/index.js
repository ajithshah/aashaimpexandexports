"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Products.module.css";

const Products = () => {
  const [query, setQuery] = useState("");

  const productCategories = [
    {
      title: "ELANTAS Varnish 900ml",
      description:
        "ELANTAS Elmo Luft 1A-GOLDEN fast drying insulating varnish in 900ml bottles. Class F rated for motors, transformers, and electrical windings.",
      image: "/product/01.jpg",
      alt: "ELANTAS Elmo Luft 1A-GOLDEN 900ml insulating varnish bottle – Class F electrical insulation varnish supplier India",
      link: "/contact",
    },
    {
      title: "ELANTAS Thinner 234",
      description:
        "ELANTAS Thinner 234 for diluting and adjusting viscosity of impregnating and finishing varnishes. Ensures smooth, even coating application.",
      image: "/product/02.jpg",
      alt: "ELANTAS Thinner 234 for insulating varnish dilution – varnish thinner supplier India",
      link: "/contact",
    },
    {
      title: "Pink Rayon Tape",
      description:
        "Trinity brand pink rayon fabric insulation tape for coil winding, motor assembly, and transformer insulation applications.",
      image: "/product/03.jpg",
      alt: "Trinity pink rayon fabric insulation tape roll – electrical coil winding tape India",
      link: "/contact",
    },
    {
      title: "Polyester Tape",
      description:
        "High-quality polyester woven tape with centre-line indicator for precise electrical insulation and coil banding applications.",
      image: "/product/05.jpg",
      alt: "Polyester woven insulation tape with centre-line – electrical coil banding tape supplier",
      link: "/contact",
    },
    {
      title: "Rayon Thread",
      description:
        "Durable synthetic rayon lacing thread for tying and securing electrical coil windings, motor assemblies, and wire harnessing.",
      image: "/product/06.jpg",
      alt: "Synthetic rayon lacing thread spools – electrical coil winding thread exporter India",
      link: "/contact",
    },
    {
      title: "Omega Rubber Compound Tape",
      description:
        "OMEGA brand self-amalgamating rubber compound tape for shock-proof and water-proof electrical insulation and joint sealing.",
      image: "/product/07.jpg",
      alt: "OMEGA self-amalgamating rubber compound tape – waterproof electrical insulation tape India",
      link: "/contact",
    },
    {
      title: "Aseal Rubber Compound Tape",
      description:
        "A-SEAL No. 1 quality self-adhesive rubber compound tape for reliable electrical insulation, cable jointing, and sealing.",
      image: "/product/08.jpg",
      alt: "A-SEAL No.1 self-adhesive rubber compound tape – cable jointing insulation tape supplier",
      link: "/contact",
    },
    {
      title: "ELANTAS Varnish ISONEL 31J",
      description:
        "ELANTAS ISONEL 31J industrial-grade insulating varnish in bulk drums for high-volume motor and transformer manufacturing.",
      image: "/product/09.jpeg",
      alt: "ELANTAS ISONEL 31J insulating varnish bulk drum – industrial motor transformer varnish India",
      link: "/contact",
    },
    {
      title: "ELANTAS Varnish 225ml",
      description:
        "ELANTAS Elmo Luft 1A-GOLDEN Class F air-drying insulating varnish in convenient 225ml pouch for small-batch and repair applications.",
      image: "/product/10.jpeg",
      alt: "ELANTAS Elmo Luft 1A-GOLDEN 225ml varnish pouch – Class F air-drying insulating varnish India",
      link: "/contact",
    },
    {
      title: "Aseal Varnish",
      description:
        "A-SEAL fast drying insulating varnish available in multiple sizes for motor rewinding, transformer impregnation, and coil protection.",
      image: "/product/11.jpg",
      alt: "A-SEAL fast drying insulating varnish bottles – motor rewinding varnish supplier India",
      link: "/contact",
    },
    {
      title: "Slitting Service (Non-Adhesive)",
      description:
        "Precision slitting and rewinding services for non-adhesive films, tapes, and flexible insulation materials to custom widths.",
      image: "/product/12.jpeg",
      alt: "Precision film slitting and rewinding machine – custom width insulation film cutting service India",
      link: "/contact",
    },
    {
      title: "Webbing Tape",
      description:
        "Woven webbing tape with centre-line marker for electrical insulation wrapping, coil binding, and transformer winding applications.",
      image: "/product/13.jpeg",
      alt: "Woven webbing insulation tape with centre-line – transformer coil binding tape supplier India",
      link: "/contact",
    },
    {
      title: "PressBoard",
      description:
        "High-density electrical pressboard sheets in various grades for transformer insulation, slot liners, and phase barriers.",
      image: "/product/15.png",
      alt: "High-density electrical pressboard sheets – transformer insulation pressboard supplier India",
      link: "/contact",
    },
    {
      title: "Epoxy Sheet",
      description:
        "Glass-reinforced epoxy laminate sheets (FR4/G10) for electrical insulation, switchboards, and structural support applications.",
      image: "/product/16.jpeg",
      alt: "FR4 G10 glass-reinforced epoxy laminate sheets – electrical insulation epoxy board India",
      link: "/contact",
    },
    {
      title: "Fire Retardant Fiberglass Sleeves",
      description:
        "Heat-resistant braided fiberglass sleeving for wire and cable protection in high-temperature electrical and industrial environments.",
      image: "/product/17.jpg",
      alt: "Heat-resistant braided fiberglass sleeving – fire retardant wire protection sleeve India",
      link: "/contact",
    },
  ];

  const filtered = useMemo(() => {
    if (!query.trim()) return productCategories;
    const q = query.toLowerCase();
    return productCategories.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        {/* Hero Header */}
        <AnimateOnScroll animation="fadeUp">
          <header className={styles.heroHeader}>
            <div className={styles.eyebrow}>Global Product Portfolio</div>
            <h2 className={styles.sectionTitle}>
              World-Class Industrial
              <br />
              Materials & Specialty Films
            </h2>
            <p className={styles.sectionDescription}>
              50+ years of expertise in international trade. Delivering premium
              insulation, packaging, and specialty materials to industries
              worldwide.
            </p>
            <div className={styles.headerActions}>
              <a
                href="/catalog/catalog.pdf"
                download="AASha-Product-Catalog.pdf"
                className={styles.downloadBtn}
                aria-label="Download product catalog PDF"
              >
                ↓ Download Full Product Catalog (PDF)
              </a>
            </div>
          </header>
        </AnimateOnScroll>

        {/* Stats Bar */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Product Lines</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Years of Trade</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Countries Served</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <svg
            className={styles.searchIcon}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search products"
          />
          <span className={styles.resultCount}>
            {filtered.length} / {productCategories.length}
          </span>
        </div>

        {/* Products Grid */}
        <div className={styles.categoriesGrid}>
          {filtered.length > 0 ? (
            filtered.map((category, index) => (
              <article key={category.title} className={styles.categoryCard}>
                <div className={styles.categoryImage}>
                  <Image
                    src={category.image}
                    alt={category.alt}
                    width={400}
                    height={210}
                    className={styles.categoryImg}
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  <div className={styles.imageOverlay} />
                  <span className={styles.cardIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDescription}>
                    {category.description}
                  </p>
                  <Link href={category.link} className={styles.categoryLink}>
                    Get a Quote
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>🔍</p>
              <p>No products found for &ldquo;{query}&rdquo;</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.productsCta}>
            <div className={styles.ctaContent}>
              <h3>Need a Custom Solution?</h3>
              <p>
                Our global sourcing network ensures we can supply customized
                products tailored precisely to your industry requirements.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Contact Our Trade Experts →
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Products;
