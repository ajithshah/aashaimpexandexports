import Header from "@/Component/Header";
import Hero from "@/Component/Hero";
import Footer from "@/Component/Footer";
import Meta from "@/Component/Meta";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="A A Sha Impex and Exports - Empowering Global Trade"
        description="A A Sha Impex and Exports connects global markets with quality products and reliable import-export solutions. Specializing in sourcing, exporting, and importing a wide range of goods worldwide. Contact us for trusted trade partnerships."
        keywords="import export, export company, import company, global trade, India export, India import, sourcing, international trade, export business, import business, trade solutions, A A Sha Impex, A A Sha Exports, B2B trade, global sourcing, product sourcing, logistics, supply chain, Indian exporter, Indian importer, export-import services"
        url="https://aashaimpexandexports.com"
        image="/logo.png"
        siteName="A A Sha Impex and Exports"
      />
      <Header />
      <main className="flex-grow-1">
        <Hero />

        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutContent}>
                <h2 className={styles.aboutTitle}>
                  Your Partner for Global Trade Excellence
                </h2>
                <h3 className={styles.aboutSubtitle}>
                  We are into this business since last more than 25 years
                </h3>
                <p className={styles.aboutDescription}>
                  Powering international commerce with quality, reliability, and innovation.
                  A A Sha Impex and Exports is a leading import-export company with a heritage
                  spanning over 25 years. We have been at the forefront of providing cutting-edge
                  trade solutions to businesses worldwide.
                </p>
                <p className={styles.aboutDescription}>
                  Our expertise lies in sourcing, exporting, and importing a wide range of products,
                  ensuring seamless global trade operations for our clients.
                </p>
                <div className={styles.aboutActions}>
                  <a href="/products" className={styles.aboutPrimaryBtn}>
                    Explore Our Products
                  </a>
                  <a href="/contact" className={styles.aboutSecondaryBtn}>
                    Get In Touch
                  </a>
                </div>
              </div>
              <div className={styles.aboutImage}>
                <span className={styles.aboutImageText}>Global Trade Solutions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <div className={styles.servicesContainer}>
            <div className={styles.servicesHeader}>
              <h2 className={styles.servicesTitle}>Our Services</h2>
              <p className={styles.servicesDescription}>
                Comprehensive import-export solutions tailored to meet your global business needs
              </p>
            </div>
            <div className={styles.servicesGrid}>
              {[
                { icon: 'bi-rocket-takeoff', title: 'Import Services', desc: 'Comprehensive import solutions with customs clearance, documentation, and logistics support.' },
                { icon: 'bi-box-seam', title: 'Export Services', desc: 'End-to-end export management including market research, documentation, and shipping.' },
                { icon: 'bi-truck', title: 'Logistics & Supply Chain', desc: 'Integrated logistics solutions with warehousing, transportation, and supply chain management.' },
                { icon: 'bi-briefcase', title: 'Trade Consulting', desc: 'Expert trade consulting services including market analysis and regulatory compliance.' }
              ].map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    <i className={service.icon}></i>
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className={styles.productsSection}>
          <div className={styles.productsContainer}>
            <div className={styles.productsHeader}>
              <h2 className={styles.productsTitle}>Our Product Categories</h2>
              <p className={styles.productsDescription}>
                Discover our comprehensive range of products for global markets
              </p>
            </div>
            <div className={styles.productsGrid}>
              {[
                'Electronics & Technology',
                'Industrial Machinery',
                'Textiles & Fabrics',
                'Agricultural Products',
                'Chemicals & Raw Materials',
                'Consumer Goods'
              ].map((product, index) => (
                <div key={index} className={styles.productCard}>
                  <div className={styles.productIcon}>
                    <i className="bi-box-seam"></i>
                  </div>
                  <h3 className={styles.productTitle}>{product}</h3>
                  <p className={styles.productDescription}>High-quality {product.toLowerCase()} for global markets</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className={styles.industriesSection}>
          <div className={styles.industriesContainer}>
            <div className={styles.industriesHeader}>
              <h2 className={styles.industriesTitle}>Industries We Serve</h2>
              <p className={styles.industriesDescription}>
                We provide comprehensive import-export solutions across diverse industries worldwide
              </p>
            </div>
            <div className={styles.industriesGrid}>
              {[
                { name: 'Electronics & Technology', icon: 'bi-laptop' },
                { name: 'Textiles & Fashion', icon: 'bi-scissors' },
                { name: 'Agriculture & Food', icon: 'bi-tree' },
                { name: 'Chemicals & Pharmaceuticals', icon: 'bi-flask' },
                { name: 'Automotive & Machinery', icon: 'bi-car-front' },
                { name: 'Construction & Building', icon: 'bi-building' },
                { name: 'Consumer Goods', icon: 'bi-bag' },
                { name: 'Industrial Equipment', icon: 'bi-gear' }
              ].map((industry, index) => (
                <div key={index} className={styles.industryCard}>
                  <div className={styles.industryIcon}>
                    <i className={industry.icon}></i>
                  </div>
                  <h3 className={styles.industryName}>{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2 className={styles.ctaTitle}>
              Ready to Expand Your Global Business?
            </h2>
            <p className={styles.ctaDescription}>
              Join hundreds of successful businesses that trust A A Sha Impex and Exports
              for their international trade needs.
            </p>
            <div className={styles.ctaActions}>
              <a href="/contact" className={styles.ctaPrimaryBtn}>
                Start Your Journey <i className="bi-rocket-takeoff"></i>
              </a>
              <a href="/products" className={styles.ctaSecondaryBtn}>
                Explore Products
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
