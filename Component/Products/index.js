import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/Component/AnimateOnScroll";
import styles from "./Products.module.css";

const Products = () => {
  const productCategories = [
    {
      title: "Electronics & Technology",
      description:
        "Advanced electronic components, devices, and technology solutions for global industries.",
      image: "/product/electronics-tech.png",
      link: "/contact",
    },
    {
      title: "Industrial Machinery",
      description:
        "Heavy-duty industrial equipment and precision machinery for manufacturing excellence.",
      image: "/product/industrial-machinery.png",
      link: "/contact",
    },
    {
      title: "Textiles & Fabrics",
      description:
        "Premium textiles, fabrics, and garment materials supplied to international markets.",
      image: "/product/textile-products.png",
      link: "/contact",
    },
    {
      title: "Agricultural Products",
      description:
        "Fresh produce and high-quality agricultural commodities sourced globally.",
      image: "/product/pet-2.jpg",
      link: "/contact",
    },
    {
      title: "Chemicals & Raw Materials",
      description:
        "Industrial-grade chemicals and essential raw materials for diverse sectors.",
      image: "/product/bopp-secs.jpg",
      link: "/contact",
    },
    {
      title: "Consumer Goods",
      description:
        "Reliable sourcing and export of everyday consumer merchandise worldwide.",
      image: "/product/pet-1.webp",
      link: "/contact",
    },
  ];

  const topProducts = [
    {
      title: "Electronic Components",
      description:
        "Certified electronic components meeting international quality standards.",
      image: "/product/electronics-tech.png",
    },
    {
      title: "Industrial Machinery",
      description:
        "High-performance machinery engineered for durability and efficiency.",
      image: "/product/industrial-machinery.png",
    },
    {
      title: "Textile Products",
      description:
        "Export-quality fabrics and textile solutions for global buyers.",
      image: "/product/textile-products.png",
    },
  ];

  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        {/* Section Header */}
        <AnimateOnScroll animation="fadeUp">
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Global Product Portfolio</h2>
            <p className={styles.sectionDescription}>
              Delivering world-class products across industries with 50+ years of
              expertise in international trade.
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
            <AnimateOnScroll
              key={index}
              animation="fadeUp"
              delay={index * 100}
            >
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

        {/* Featured Products */}
        <AnimateOnScroll animation="fadeUp">
          <div className={styles.topProducts}>
            <h3 className={styles.topProductsTitle}>Featured Export Products</h3>

            <div className={styles.productsGrid}>
              {topProducts.map((product, index) => (
                <article
                  key={index}
                  className={`${styles.productCard} glass-card`}
                >
                  <div className={styles.productImage}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={300}
                      className={styles.productImg}
                    />
                  </div>

                  <div className={styles.productContent}>
                    <h4 className={styles.productTitle}>{product.title}</h4>
                    <p className={styles.productDescription}>
                      {product.description}
                    </p>

                    <Link href="/contact" className={styles.productLink}>
                      Request Quotation →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

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
