import Products from "@/Component/Products";
import Meta from "@/Component/Meta";

const BASE_URL = "https://aashaimpexandexports.com";

const productItems = [
  { name: "AAEROTHERM® Nomex (APA)", image: "/product-page/aerotherm-nomex-apa.png", description: "AEROTHERM Nomex aramid paper for high-temperature Class H electrical insulation in motors, transformers, and generators." },
  { name: "Becktol Grey 1Kg", image: "/product-page/becktol-grey-1kg.jpg", description: "Becktol grey electrical insulation compound in a 1kg pack for motor and transformer maintenance." },
  { name: "Becktol (Red) 21Kg", image: "/product-page/becktol-red-21kg.png", description: "Becktol red electrical insulation compound in a 21kg bulk pack for industrial applications." },
  { name: "DMD Film", image: "/product-page/dmd-film.png", description: "DMD (Dacron-Mylar-Dacron) composite insulation laminate for Class B slot lining and phase insulation in motor and transformer windings." },
  { name: "ELANTAS Elmo Luft 1A Golden", image: "/product-page/elmo-luft-1a-golden.png", description: "ELANTAS Elmo Luft 1A-GOLDEN fast drying insulating varnish. Class F rated for motors and transformers." },
  { name: "ELANTAS Elmotherm H71", image: "/product-page/elmotherm-h71.png", description: "ELANTAS Elmotherm H71 Class H high-temperature insulating varnish for demanding motor and transformer applications." },
  { name: "Epoxy Gel Coat (Red)", image: "/product-page/epoxy-gel-coat-red.png", description: "Epoxy gel coat compound in red for sealing, potting, and protective coating of electrical components." },
  { name: "Fiberglass Sleeves", image: "/product-page/fiberglass-sleeves.jpg", description: "Heat-resistant braided fiberglass sleeving for wire and cable protection." },
  { name: "Garlam® Insulation Composite Paper", image: "/product-page/garlam-insulation-composite-paper.png", description: "Garlam laminated insulation paper for slot lining and phase insulation in motors and transformers." },
  { name: "H class Fiberglass Tape", image: "/product-page/h-class-fiberglass-tape.png", description: "H Class fiberglass insulation tape for high-temperature motor and transformer winding protection." },
  { name: "H Class pure Aramid Papers", image: "/product-page/h-class-pure-aramid-paper.png", description: "H Class pure aramid insulation paper for high-temperature Class H electrical winding and slot insulation." },
  { name: "Insulating Kraft Paper", image: "/product-page/insulating-kraft-paper.png", description: "Insulating kraft paper (Leatheroid) for coil wrapping and general-purpose electrical insulation." },
  { name: "Insulating Varnish (ELANTAS)", image: "/product-page/insulating-varnish-elantas.png", description: "ELANTAS insulating varnish range for motor rewinding, impregnation, and coil protection — trusted since 1972." },
  { name: "ELANTAS ISONEL 31J", image: "/product-page/isonel-31j.png", description: "ELANTAS ISONEL 31J industrial-grade insulating varnish in bulk drums." },
  { name: "ELANTAS ISONEL 51J", image: "/product-page/isonel-51j.jpg", description: "ELANTAS ISONEL 51J industrial-grade insulating varnish in bulk drums for high-volume motor and transformer manufacturing." },
  { name: "Polyester Film Milky White", image: "/product-page/polyester-film-milky-white.png", description: "Milky white polyester (PET) film for slot lining and phase insulation in electrical windings." },
  { name: "Rayon Winding Thread", image: "/product-page/rayon-winding-thread.jpg", description: "Rayon lacing thread for tying and securing electrical coil windings, motor assemblies, and wire harnessing." },
  { name: "ELANTAS Thinner 234", image: "/product-page/thinner-234.png", description: "ELANTAS Thinner 234 for diluting and adjusting viscosity of impregnating and finishing varnishes. Ensures smooth, even coating application." },
  { name: "Transparent Clear Polyester Film Slitted", image: "/product-page/transparent-clear-polyester-film-slitted.png", description: "Transparent slitted polyester film rolls for electrical insulation and wrapping applications." },
  { name: "F93 Component A", image: "/product-page/varnish-f93-component-a.png", description: "F93 two-component epoxy resin — Component A — for potting and encapsulation of electrical windings." },
  { name: "F93 Component B", image: "/product-page/varnish-f93-component-b.png", description: "F93 two-component epoxy resin — Component B hardener — for potting and encapsulation of electrical windings." },
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
        image="/product-page/aerotherm-nomex-apa.png"
        images={["/product-page/isonel-31j.png", "/product-page/fiberglass-sleeves.jpg", "/product-page/insulating-varnish-elantas.png", "/product-page/dmd-film.png"]}
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
