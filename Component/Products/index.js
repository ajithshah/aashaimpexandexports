import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Products.module.css";

const Products = () => {
  const productCategories = [
    { title: "BOPP Films & Tapes", description: "High-performance BOPP security films and adhesive tapes for industrial packaging and sealing applications.", image: "/product/01.jpg", link: "/contact" },
    { title: "Milky Polyester Films", description: "Premium milky PET films used in electrical insulation, packaging, and lamination industries.", image: "/product/02.jpg", link: "/contact" },
    { title: "PET Films", description: "High-clarity polyester films for flexible packaging, capacitors, and industrial applications.", image: "/product/03.jpg", link: "/contact" },
    { title: "Cotton Tape", description: "Durable cotton insulation tapes for electrical coil winding and motor manufacturing.", image: "/product/05.jpg", link: "/contact" },
    { title: "Epoxy Sheets", description: "Glass-reinforced epoxy laminate sheets for electrical insulation and structural applications.", image: "/product/06.jpg", link: "/contact" },
    { title: "A-Seal Products", description: "High-quality sealing compounds and encapsulants for electrical and industrial applications.", image: "/product/07.jpg", link: "/contact" },
    { title: "AAEROTHERM Varnish", description: "High-temperature insulating varnish for motor coils, transformers, and electrical windings.", image: "/product/08.jpg", link: "/contact" },
    { title: "ELANTAS Resins", description: "World-class ELANTAS impregnating resins and varnishes for electrical insulation systems.", image: "/product/09.jpeg", link: "/contact" },
    { title: "Polyimide Films", description: "Kapton-grade polyimide films offering exceptional thermal and electrical insulation properties.", image: "/product/10.jpeg", link: "/contact" },
    { title: "Royan Thread", description: "Synthetic royan threads used in textile and industrial weaving for high-strength applications.", image: "/product/11.jpg", link: "/contact" },
    { title: "OMEGA Products", description: "Precision OMEGA insulation and electrical components for high-reliability industrial use.", image: "/product/12.jpeg", link: "/contact" },
    { title: "Slitting Job Work", description: "Precision slitting and rewinding services for films, tapes, and flexible packaging materials.", image: "/product/13.jpeg", link: "/contact" },
    { title: "Polyester Tapes", description: "Self-adhesive polyester tapes for electrical insulation and transformer winding.", image: "/product/15.png", link: "/contact" },
    { title: "Pink Rayon Tape", description: "Flexible rayon insulation tape for coil winding and motor assembly applications.", image: "/product/16.jpeg", link: "/contact" },
    { title: "Insulation Varnish", description: "Specialty impregnating varnish for enhancing dielectric strength of electrical windings.", image: "/product/17.jpg", link: "/contact" },
    { title: "Glass Cloth Tape", description: "Woven glass fabric tapes with high thermal resistance for transformer and motor insulation.", image: "/product/18.jpeg", link: "/contact" },
    { title: "Nomex Paper", description: "Aromatic polyamide insulation paper with outstanding thermal and electrical properties.", image: "/product/19.jpeg", link: "/contact" },
    { title: "Mica Tape", description: "Mica-based fire-resistant tapes for cables and electrical insulation under extreme conditions.", image: "/product/20.jpeg", link: "/contact" },
    { title: "Silicone Rubber Sheet", description: "High-temperature silicone rubber sheets for gaskets, seals, and electrical insulation.", image: "/product/21.jpeg", link: "/contact" },
    { title: "Fiberglass Sleeving", description: "Braided fiberglass sleeving for wire and cable protection in high-temperature environments.", image: "/product/22.jpeg", link: "/contact" },
    { title: "Kraft Paper", description: "High-tensile kraft insulation paper for transformers, capacitors, and cable wrapping.", image: "/product/23.jpeg", link: "/contact" },
    { title: "Prepreg Materials", description: "Resin-impregnated composite materials for laminated boards and electrical insulation.", image: "/product/24.jpeg", link: "/contact" },
    { title: "Thermal Interface Materials", description: "Heat-dissipating pads and compounds for power electronics and LED applications.", image: "/product/25.jpeg", link: "/contact" },
    { title: "Adhesive Films", description: "Specialty adhesive bonding films for lamination, PCB, and industrial assembly processes.", image: "/product/26.jpeg", link: "/contact" },
    { title: "Shrink Tubing", description: "Polyolefin and PTFE heat shrink tubes for wire insulation and strain relief.", image: "/product/27.jpeg", link: "/contact" },
    { title: "Crepe Paper Tape", description: "Creped kraft paper tape for transformer coil winding and moisture-resistant insulation.", image: "/product/28.jpeg", link: "/contact" },
    { title: "Nylon Films", description: "Tough nylon barrier films for food packaging, industrial laminates, and flexible pouches.", image: "/product/29.jpeg", link: "/contact" },
    { title: "EMI Shielding Materials", description: "Conductive foils and gaskets for electromagnetic interference shielding in electronics.", image: "/product/30.jpeg", link: "/contact" },
    { title: "Acetate Cloth Tape", description: "Solvent-resistant acetate fabric tape for cable harnessing and electrical bundling.", image: "/product/31.jpeg", link: "/contact" },
    { title: "Phenolic Laminates", description: "Thermoset phenolic sheets for switchboards, terminal blocks, and electrical panels.", image: "/product/32.jpeg", link: "/contact" },
    { title: "PTFE Products", description: "Chemically inert PTFE sheets, rods, and tapes for demanding industrial applications.", image: "/product/33.jpeg", link: "/contact" },
    { title: "Copper Foil", description: "Electro-deposited and rolled copper foils for PCB manufacturing and shielding.", image: "/product/34.png", link: "/contact" },
    { title: "Aramid Fiber Products", description: "High-strength aramid fiber composites for ballistic, aerospace, and electrical insulation uses.", image: "/product/35.png", link: "/contact" },
    { title: "Resin Systems", description: "Epoxy and polyester resin systems for casting, potting, and encapsulation of electronic components.", image: "/product/36.png", link: "/contact" },
    { title: "Industrial Tapes & Films", description: "Comprehensive range of specialty tapes and films for diverse industrial manufacturing requirements.", image: "/product/37.jpg", link: "/contact" },
  ];


  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        {/* Section Header */}
        <AnimateOnScroll animation="fadeUp">
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Global Product Portfolio</h2>
            <p className={styles.sectionDescription}>
              Delivering world-class products across industries with 50+ years
              of expertise in international trade.
            </p>
            <div className={styles.headerActions}>
              <a
                href="/catalog/catalog.pdf"
                download="AASha-Product-Catalog.pdf"
                className={styles.downloadBtn}
                aria-label="Download product catalog PDF"
              >
                Download Product Catalog (PDF)
              </a>
            </div>
          </header>
        </AnimateOnScroll>

        {/* Product Categories */}
        <div className={styles.categoriesGrid}>
          {productCategories.map((category, index) => (
            <AnimateOnScroll key={index} animation="flipIn" delay={index * 80} className={styles.cardWrapper}>
              <article className={`${styles.categoryCard} glass-card`}>
                <div className={styles.categoryImage}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={400}
                    height={250}
                    className={styles.categoryImg}
                  />
                </div>

                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDescription}>
                    {category.description}
                  </p>
                  <Link href={category.link} className={styles.categoryLink}>
                    Explore Category →
                  </Link>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA Section */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.productsCta}>
            <h3>Looking for a Specific Product?</h3>
            <p>
              Our global sourcing network ensures we can supply customized
              products tailored to your business needs.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Contact Our Trade Experts →
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Products;
