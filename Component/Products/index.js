import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Products.module.css";

const Products = () => {
  const productCategories = [
    {
      title: "Electronics & Technology",
      description: "Latest electronic components and technology products",
      image: "/images/electronics.jpg",
      link: "/contact",
    },
    {
      title: "Industrial Machinery",
      description: "Heavy machinery and industrial equipment",
      image: "/images/machinery.jpg",
      link: "/contact",
    },
    {
      title: "Textiles & Fabrics",
      description: "High-quality textiles and fabric materials",
      image: "/images/textiles.jpg",
      link: "/contact",
    },
    {
      title: "Agricultural Products",
      description: "Fresh produce and agricultural commodities",
      image: "/images/agriculture.jpg",
      link: "/contact",
    },
    {
      title: "Chemicals & Raw Materials",
      description: "Industrial chemicals and raw materials",
      image: "/images/chemicals.jpg",
      link: "/contact",
    },
    {
      title: "Consumer Goods",
      description: "Everyday consumer products and merchandise",
      image: "/images/consumer-goods.jpg",
      link: "/contact",
    },
  ];

  const topProducts = [
    {
      title: "Electronic Components",
      description: "High-quality electronic components for various industries",
      image: "/images/electronic-components.jpg",
    },
    {
      title: "Industrial Machinery",
      description: "Advanced machinery for manufacturing and production",
      image: "/images/industrial-machinery.jpg",
    },
    {
      title: "Textile Products",
      description: "Premium textiles and fabrics for global markets",
      image: "/images/textile-products.jpg",
    },
  ];

  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Product Categories</h2>
          <p className={styles.sectionDescription}>
            Discover our comprehensive range of products and services designed
            to meet your import-export needs
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {productCategories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image
                  src={category.image}
                  alt={category.title}
                  width={300}
                  height={200}
                  className={styles.categoryImg}
                />
              </div>
              <div className={styles.categoryContent}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>
                <Link href={category.link} className={styles.categoryLink}>
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.topProducts}>
          <h3 className={styles.topProductsTitle}>Top Products</h3>
          <div className={styles.productsGrid}>
            {topProducts.map((product, index) => (
              <div key={index} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={250}
                    className={styles.productImg}
                  />
                </div>
                <div className={styles.productContent}>
                  <h4 className={styles.productTitle}>{product.title}</h4>
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>
                  <Link href="#contact" className={styles.productLink}>
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
