import React from "react";
import Head from "next/head";

const Meta = ({
  title = "Aasha Impex and Exports - Global Import & Export Solutions | India",
  description = "Aasha Impex and Exports connects global markets with quality products and reliable import-export solutions. Based in India, we specialize in sourcing, exporting, and importing a wide range of goods worldwide. Contact us for trusted trade partnerships.",
  keywords = "import export, export company, import company, global trade, India export, India import, sourcing, international trade, export business, import business, trade solutions, Aasha Impex, Aasha Exports, B2B trade, global sourcing, product sourcing, logistics, supply chain, Indian exporter, Indian importer, export-import services",
  image = "/logo.svg",
  url = "https://aashaimpexandexports.com",
  type = "website",
  article = false,
  noindex = false,
  siteName = "Aasha Impex and Exports",
}) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Aasha Impex and Exports" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content="Aasha Impex and Exports - Global Import & Export Solutions"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content="Aasha Impex and Exports - Global Import & Export Solutions"
      />

      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:author" content="Aasha Impex and Exports" />
          <meta
            property="article:publisher"
            content="Aasha Impex and Exports"
          />
        </>
      )}

      {/* Business/Contact Info */}
      <meta name="contact" content="info@aashaimpexandexports.com" />
      <meta name="copyright" content="Aasha Impex and Exports" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Mobile specific */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="Aasha Impex and Exports"
      />

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Theme Color */}
      <meta name="theme-color" content="#38bdf8" />
      <meta name="msapplication-TileColor" content="#38bdf8" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Robots */}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />
      <meta
        name="googlebot"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aasha Impex and Exports",
            image: image,
            description: description,
            url: url,
            telephone: "+91-8122816789",
            email: "info@aashaimpexandexports.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
              addressRegion: "India",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "0.0000",
              longitude: "0.0000",
            },
            openingHours: "Mo-Sa 09:00-18:00",
            priceRange: "$$$",
            serviceArea: {
              "@type": "Place",
              name: "India",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Import and Export Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Product Sourcing",
                    description: "Global sourcing and procurement services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Export Services",
                    description: "Export of Indian goods worldwide",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Import Services",
                    description: "Import of global products to India",
                  },
                },
              ],
            },
            sameAs: [
              "https://www.facebook.com/aashaimpexandexports",
              "https://www.instagram.com/aashaimpexandexports",
              "https://www.linkedin.com/company/aashaimpexandexports",
            ],
          }),
        }}
      />

      {/* Website/Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Aasha Impex and Exports",
            url: url,
            logo: {
              "@type": "ImageObject",
              url: "/logo.svg",
            },
            description: description,
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8122816789",
              contactType: "customer service",
              email: "info@aashaimpexandexports.com",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
          }),
        }}
      />
    </Head>
  );
};

export default Meta;
