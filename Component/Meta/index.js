import React from "react";
import Head from "next/head";

const BASE_URL = "https://aashaimpexandexports.com";

const Meta = ({
  title = "A A Sha Impex and Exports | Electrical Insulation & Specialty Films Supplier India",
  description = "A A Sha Impex and Exports is a leading supplier and exporter of electrical insulation materials, specialty films, industrial tapes, and specialty chemicals from India. 50+ years of trusted global trade.",
  keywords = "electrical insulation materials India, BOPP films supplier, PET films exporter, polyimide films India, Nomex paper supplier, Kapton films India, insulation varnish supplier, ELANTAS resins India, specialty films exporter, industrial tapes India, mica tape supplier, glass cloth tape, cotton tape electrical, epoxy sheets India, PTFE products India, fiberglass sleeving, aramid fiber India, thermal interface materials, A A Sha Impex, specialty materials exporter",
  image = `${BASE_URL}/logo.png`,
  images = [],
  url = BASE_URL,
  type = "website",
  article = false,
  noindex = false,
  siteName = "A A Sha Impex and Exports",
  breadcrumb = null,
  productSchema = null,
}) => {
  const absoluteImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const absoluteImages = images.map((img) =>
    img.startsWith("http") ? img : `${BASE_URL}${img}`
  );

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "A A Sha Impex and Exports",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
    description:
      "Leading supplier and exporter of electrical insulation materials, specialty films, industrial tapes, and specialty chemicals from India with 50+ years of trade expertise.",
    telephone: "+91-8122816789",
    email: "info@aashaimpexandexports.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Tamil Nadu",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8122816789",
      contactType: "sales",
      email: "info@aashaimpexandexports.com",
      availableLanguage: ["English", "Tamil"],
    },
    knowsAbout: [
      "Electrical Insulation Materials",
      "BOPP Films",
      "PET Films",
      "Polyimide Films",
      "Nomex Paper",
      "Industrial Tapes",
      "Specialty Chemicals",
      "Import Export Trade",
    ],
    sameAs: [
      "https://www.facebook.com/aashaimpexandexports",
      "https://www.instagram.com/aashaimpexandexports",
      "https://www.linkedin.com/company/aashaimpexandexports",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "A A Sha Impex and Exports",
    url: BASE_URL,
    publisher: { "@id": `${BASE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = breadcrumb
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${BASE_URL}${item.path}`,
        })),
      }
    : null;

  return (
    <Head>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="A A Sha Impex and Exports" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Locale */}
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="Tamil Nadu, India" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={`${siteName} – Specialty Materials Supplier`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {absoluteImages.map((img, i) => (
        <meta key={`og-img-${i}`} property="og:image" content={img} />
      ))}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={`${siteName} – Specialty Materials Supplier`} />

      {article && (
        <>
          <meta property="article:author" content="A A Sha Impex and Exports" />
          <meta property="article:publisher" content="A A Sha Impex and Exports" />
        </>
      )}

      {/* Business */}
      <meta name="contact" content="info@aashaimpexandexports.com" />
      <meta name="copyright" content="A A Sha Impex and Exports" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />

      {/* Mobile / PWA */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="AASha Impex" />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Theme */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />

      {/* Canonical */}
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
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
    </Head>
  );
};

export default Meta;
