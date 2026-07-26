import Image from "next/image";
import Hero from "@/Component/Hero";
import Meta from "@/Component/Meta";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "@/styles/Home.module.css";

const PRODUCT_CATS = [
  {
    img: "/home-page/polyester-film-milky-white.png",
    name: "Polyester Film Milky White",
  },
  {
    img: "/home-page/insulating-kraft-paper.png",
    name: "Insulating Kraft Paper",
  },
  {
    img: "/home-page/group.png",
    name: "Insulating Varnish",
  },
  {
    img: "/home-page/aerotherm-nomex.png",
    name: "Aerotherm Nomex",
  },
  {
    img: "/home-page/dmd-film.png",
    name: "DMD Film",
  },
  {
    img: "/home-page/thinner-234.png",
    name: "Thinner 234",
  },
  {
    img: "/home-page/heat-shrink-sleeves.png",
    name: "Heat Shrink Sleeves",
  },


  {
    img: "/home-page/epoxy-gel-coat-red.png",
    name: "Epoxy Gel Coat (Red)",
  }

];

const INDUSTRIES = [
  {
    icon: "bi-lightning-charge-fill",
    name: "Electric Motors",
    color: "#2563eb",
  },
  { icon: "bi-plugin", name: "Transformers", color: "#7c3aed" },
  { icon: "bi-gear-fill", name: "Generators", color: "#059669" },
  { icon: "bi-fan", name: "Fans & Blowers", color: "#d97706" },
  { icon: "bi-cpu-fill", name: "Choke Coils", color: "#0891b2" },
  { icon: "bi-toggles", name: "Switchgear & Panels", color: "#db2777" },
  { icon: "bi-water", name: "Pumps & Compressors", color: "#475569" },
  {
    icon: "bi-train-front-fill",
    name: "Railways & Traction",
    color: "#dc2626",
  },
  { icon: "bi-car-front-fill", name: "Automotive & EV", color: "#0d9488" },
];

const SERVICES = [
  {
    icon: "bi-layers-half",
    title: "Insulation Materials",
    desc: "Polyester Films, Aramid & Nomex Papers, DMD/FPF Laminates, Kraft Paper and Presspahn for motors, transformers, and generators.",
  },
  {
    icon: "bi-droplet-half",
    title: "Varnishes & Coatings",
    desc: "Authorised stockist of ELANTAS and A-SEAL insulating varnishes for motor rewinding, impregnation, and coil protection.",
  },
  {
    icon: "bi-scissors",
    title: "Precision Slitting",
    desc: "Custom slitting, roll-to-sheet cutting and shaping using German technology. Widths from 5mm onwards.",
  },
  {
    icon: "bi-shield-check",
    title: "Tapes & Sleeves",
    desc: "Rubber compound tapes, rayon & polyester tapes, and PU/silicone fibre glass sleeves — including fire-retardant grades.",
  },
];

const PARTNERS = [
  { name: "JBF RAK LLC", sub: "UAE — Polyester Films" },
  { name: "ELANTAS Beck India Ltd.", sub: "Insulating Varnishes" },
  { name: "Gujarat Polymers", sub: "Authorised Dealer" },
  { name: "Mithra Fiber Glass Sleeve", sub: "Fibre Glass Sleeving" },
];

export default function Home() {
  return (
    <div className={`${styles.pageWrapper} d-flex flex-column min-vh-100`}>
      <Meta
        title="A A Sha Impex and Exports | Electrical Insulation & Specialty Films Supplier India"
        description="A A Sha Impex and Exports is a leading supplier and exporter of electrical insulation materials, specialty films, industrial tapes, BOPP films, PET films, polyimide films, and Nomex paper from India. 50+ years of trusted global trade."
        keywords="electrical insulation materials India, specialty films supplier India, BOPP films exporter, PET films supplier, polyimide films Kapton India, Nomex paper supplier, industrial tapes exporter India, insulation varnish supplier, ELANTAS resins India, mica tape supplier, A A Sha Impex, specialty materials export India"
        url="https://aashaimpexandexports.com"
        image="/hemo-product/01.jpg"
        images={["/product/09.jpeg", "/hemo-product/17.jpg", "/hemo-product/Polyimide.jpg"]}
        siteName="A A Sha Impex and Exports"
        breadcrumb={[{ name: "Home", path: "/" }]}
      />

      <main className={`${styles.mainContent} flex-grow-1`}>
        {/* ===== HERO ===== */}
        <Hero />

        {/* ===== ABOUT ===== */}
        <section className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.aboutGrid}>
              <AnimateOnScroll
                animation="fadeRight"
                className={styles.aboutText}
              >
                <span className={styles.eyebrow}>
                  House of Best Quality Electrical Insulation
                </span>
                <h2 className={styles.sectionTitle}>
                  Trusted Insulation Partners Since 1972
                </h2>
                <p className={styles.bodyText}>
                  A A Sha Impex and Exports are Importers, Distributors, and
                  Stockists of best quality electrical insulation materials —
                  sourcing only the best from trusted global manufacturers for
                  over five decades.
                </p>
                <p className={styles.bodyText}>
                  From high-performance Polyester Films and Aramid Papers to
                  Varnishes, DMD/FPF Laminates, and Fiberglass Sleeves, our
                  insulation materials safeguard the motors, transformers, and
                  critical electrical equipment that keep Indian industry
                  running.
                </p>
                <div className={styles.btnRow}>
                  <a href="/about" className={styles.btnPrimary}>
                    Our Story
                  </a>
                  <a href="/contact" className={styles.btnOutline}>
                    Get In Touch
                  </a>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll
                animation="fadeLeft"
                delay={120}
                className={styles.aboutStats}
              >
                {[
                  { n: "50+", label: "Years Since 1972", icon: "bi-award" },
                  {
                    n: "1000+",
                    label: "Loyal Customers",
                    icon: "bi-people-fill",
                  },
                  {
                    n: "25+",
                    label: "Product Lines",
                    icon: "bi-box-seam-fill",
                  },
                  {
                    n: "100%",
                    label: "Quality Commitment",
                    icon: "bi-shield-check",
                  },
                ].map((s, i) => (
                  <div key={i} className={styles.aboutStat}>
                    <i className={s.icon}></i>
                    <strong>{s.n}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ===== PRODUCT CATEGORIES ===== */}
        <section className={styles.productsSection}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <span className={styles.eyebrowCenter}>Our Products</span>
              <h2 className={styles.centerTitle}>
                Premium Insulation Materials
              </h2>
              <p className={styles.centerSub}>
                Class B · F · H insulation — sourced from authorised global
                manufacturers
              </p>
            </AnimateOnScroll>

            <div className={styles.productGrid}>
              {PRODUCT_CATS.map((p, i) => (
                <AnimateOnScroll key={i} animation="fadeUp" delay={i * 55}>
                  <a href="/products" className={styles.productCard}>
                    <div className={styles.productImgWrap}>
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        sizes="(max-width:768px) 50vw, 25vw"
                        style={{ objectFit: "contain" }}
                      />
                      <div className={styles.productOverlay}>
                        <span>
                          View Products <i className="bi-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                    <div className={styles.productMeta}>
                      <h3>{p.name}</h3>
                    </div>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll animation="fadeUp">
              <div className={styles.sectionCta}>
                <a href="/products" className={styles.btnPrimary}>
                  View Full Catalogue <i className="bi-arrow-right"></i>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ===== INDUSTRIES ===== */}
        <section className={styles.industriesSection}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <span className={styles.eyebrowCenter}>Industries We Serve</span>
              <h2 className={styles.centerTitle}>
                Where Our Materials Are Used
              </h2>
              <p className={styles.centerSub}>
                From motor rewinding shops to heavy engineering OEMs — our
                insulation materials power the industries that keep the world
                running.
              </p>
            </AnimateOnScroll>

            <div className={styles.industriesGrid}>
              {INDUSTRIES.map((ind, i) => (
                <AnimateOnScroll key={i} animation="fadeUp" delay={i * 55}>
                  <div
                    className={styles.industryCard}
                    style={{ "--ind-color": ind.color }}
                  >
                    <div className={styles.indIconWrap}>
                      <i className={ind.icon}></i>
                    </div>
                    <span>{ind.name}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll animation="fadeUp">
              <div className={styles.sectionCta}>
                <a href="/industries" className={styles.btnOutline}>
                  Explore All Industries <i className="bi-arrow-right"></i>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ===== WHAT WE OFFER ===== */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <span className={styles.eyebrowCenter}>What We Offer</span>
              <h2 className={styles.centerTitle}>
                Your One-Stop Insulation Source
              </h2>
            </AnimateOnScroll>

            <div className={styles.servicesGrid}>
              {SERVICES.map((s, i) => (
                <AnimateOnScroll key={i} animation="fadeUp" delay={i * 80}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      <i className={s.icon}></i>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <a href="/products" className={styles.serviceLink}>
                      Learn more <i className="bi-arrow-right"></i>
                    </a>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BRAND PARTNERS ===== */}
        <section className={styles.partnersSection}>
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <span className={styles.eyebrowCenter}>
                Authorised Partnerships
              </span>
              <h2 className={styles.centerTitle}>Trusted Partners</h2>
            </AnimateOnScroll>

            <div className={styles.partnersGrid}>
              {PARTNERS.map((p, i) => (
                <AnimateOnScroll key={i} animation="zoomIn" delay={i * 80}>
                  <div className={styles.partnerCard}>
                    <div className={styles.partnerIcon}>
                      <i className="bi-patch-check-fill"></i>
                    </div>
                    <strong>{p.name}</strong>
                    <span>{p.sub}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LET'S WORK TOGETHER ===== */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaBg} />
          <div className={styles.container}>
            <AnimateOnScroll animation="fadeUp">
              <div className={styles.ctaInner}>
                <span className={styles.eyebrow}>Let&apos;s Work Together</span>
                <h2 className={styles.ctaTitle}>
                  Need Quality Insulation Materials?
                </h2>
                <p className={styles.ctaText}>
                  Join hundreds of customers who trust us for motor,
                  transformer, and generator insulation. Ready stock, bulk
                  orders, and expert guidance — all from one authorised source
                  in Chennai.
                </p>
                <div className={styles.ctaBtns}>
                  <a href="/contact" className={styles.ctaBtnPrimary}>
                    Request a Quote <i className="bi-arrow-right"></i>
                  </a>
                  <a href="tel:+919444455626" className={styles.ctaBtnOutline}>
                    <i className="bi-telephone-fill"></i> +91 94441 84855
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
    </div>
  );
}
