import Products from "@/Component/Products";
import Meta from "@/Component/Meta";

const BASE_URL = "https://aashaimpexandexports.com";

const productItems = [
  { name: "ELANTAS Varnish 900ml", image: "/product/01.jpg", description: "ELANTAS Elmo Luft 1A-GOLDEN fast drying insulating varnish. Class F rated for motors and transformers." },
  { name: "ELANTAS Thinner 234", image: "/product/02.jpg", description: "ELANTAS Thinner 234 for diluting impregnating and finishing varnishes." },
  { name: "Pink Rayon Tape", image: "/product/03.jpg", description: "Trinity brand pink rayon fabric insulation tape for coil winding and motor assembly." },
  { name: "Polyester Tape", image: "/product/05.jpg", description: "High-quality polyester woven tape for electrical insulation and coil banding." },
  { name: "Rayon Thread", image: "/product/06.jpg", description: "Durable synthetic rayon lacing thread for securing electrical coil windings." },
  { name: "Omega Rubber Compound Tape", image: "/product/07.jpg", description: "OMEGA self-amalgamating rubber compound tape for electrical insulation." },
  { name: "Aseal Rubber Compound Tape", image: "/product/08.jpg", description: "A-SEAL self-adhesive rubber compound tape for cable jointing and sealing." },
  { name: "ELANTAS Varnish ISONEL 31J", image: "/product/09.jpeg", description: "ELANTAS ISONEL 31J industrial-grade insulating varnish in bulk drums." },
  { name: "ELANTAS Varnish 225ml", image: "/product/10.jpeg", description: "ELANTAS Elmo Luft 1A-GOLDEN Class F varnish in 225ml pouch." },
  { name: "Aseal Varnish", image: "/product/11.jpg", description: "A-SEAL fast drying insulating varnish for motor rewinding and transformers." },
  { name: "Slitting Service", image: "/product/12.jpeg", description: "Precision slitting and rewinding services for non-adhesive films and tapes." },
  { name: "Webbing Tape", image: "/product/13.jpeg", description: "Woven webbing tape for electrical insulation wrapping and coil binding." },
  { name: "PressBoard", image: "/product/15.png", description: "High-density electrical pressboard sheets for transformer insulation." },
  { name: "Epoxy Sheet", image: "/product/16.jpeg", description: "Glass-reinforced epoxy laminate sheets (FR4/G10) for electrical insulation." },
  { name: "Fire Retardant Fiberglass Sleeves", image: "/product/17.jpg", description: "Heat-resistant braided fiberglass sleeving for wire and cable protection." },
];

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Electrical Insulation Materials & Specialty Films",
  description: "Complete product catalog of electrical insulation materials, specialty films, industrial tapes, and varnishes from A A Sha Impex and Exports, India.",
  numberOfItems: productItems.length,
  itemListElement: productItems.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: item.name,
      description: item.description,
      image: `${BASE_URL}${item.image}`,
      url: `${BASE_URL}/contact`,
      brand: {
        "@type": "Brand",
        name: "A A Sha Impex and Exports",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "INR",
        url: `${BASE_URL}/contact`,
        seller: { "@id": `${BASE_URL}/#organization` },
      },
    },
  })),
};

export default function ProductsPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="Products | Electrical Insulation Materials & Supplies – A A Sha Impex"
        description="Browse our full range of electrical insulation materials: Polyester Films, Aramid Papers, ELANTAS Varnishes, DMD/FPF Laminates, Fibre Glass Sleeves, Epoxy Sheets, Rubber Compound Tapes, Kraft Paper, and more. Authorised stockist in Chennai, India."
        keywords="polyester film supplier Chennai, ELANTAS varnish dealer India, aramid paper stockist, Nomex paper India, DMD laminates supplier, fibre glass sleeve dealer, epoxy sheet India, rubber compound tape, Kraft paper insulation, motor insulation materials, transformer insulation supplier, insulation materials store Chennai"
        url="https://aashaimpexandexports.com/products"
        image="/product/01.jpg"
        images={["/product/09.jpeg", "/product/17.jpg", "/product/Polyimide.jpg", "/product/15.png"]}
        siteName="A A Sha Impex and Exports"
        productSchema={productListSchema}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ]}
      />
      <main className="flex-grow-1">
        <Products />
      </main>
    </div>
  );
}
