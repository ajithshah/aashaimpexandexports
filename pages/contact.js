import Head from "next/head";
import Contact from "@/Component/Contact";
import Meta from "@/Component/Meta";

const BASE_URL = "https://aashaimpexandexports.com";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/contact#contactpage`,
  name: "Contact A A Sha Impex and Exports",
  description:
    "Get in touch with A A Sha Impex and Exports for electrical insulation materials — Polyester Films, Aramid Papers, Varnishes, Fibre Glass Sleeves, and more. Request a quote from our team in Chennai, India.",
  url: `${BASE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "A A Sha Impex and Exports",
  image: `${BASE_URL}/logo.png`,
  url: BASE_URL,
  telephone: ["+91-9444455626", "+91-9444184855", "+91-8122816789"],
  email: "aashaimpexandexports@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.24, Sembudoss Street, Broadway",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.094390512173847,
    longitude: 80.28444877532364,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function ContactPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="Contact Us | Get a Quote for Insulation Materials – A A Sha Impex and Exports"
        description="Contact A A Sha Impex and Exports to request a quote for electrical insulation materials — Polyester Films, Aramid Papers, Varnishes, Fibre Glass Sleeves, and more. Located at No.24, Sembudoss Street, Broadway, Chennai - 600 001."
        keywords="contact A A Sha Impex, insulation materials quote Chennai, buy polyester film Chennai, buy varnish ELANTAS India, insulation materials inquiry, fibre glass sleeve supplier contact, motor insulation quote, Chennai insulation supplier, Broadway Chennai"
        url="https://aashaimpexandexports.com/contact"
        image="/product/Sample01.jpg"
        images={["/product/01.jpg", "/product/09.jpeg"]}
        siteName="A A Sha Impex and Exports"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactPageSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>
      <main className="flex-grow-1">
        <Contact />
      </main>
    </div>
  );
}
