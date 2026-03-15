import Products from "@/Component/Products";
import Meta from "@/Component/Meta";

export default function ProductsPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="Products | BOPP Films, PET Films, Insulation Materials & More – A A Sha Impex"
        description="Browse our full product range: BOPP films, PET films, polyimide films, Nomex paper, mica tape, glass cloth tape, cotton tape, insulation varnish, ELANTAS resins, PTFE products, copper foil, aramid fiber, silicone sheets, and 35+ more specialty materials. Export from India."
        keywords="BOPP films India, PET films supplier, polyimide Kapton films, Nomex paper India, mica tape supplier, glass cloth tape, cotton insulation tape, AAEROTHERM varnish, ELANTAS resins India, PTFE products supplier, copper foil PCB, aramid fiber India, silicone rubber sheet, fiberglass sleeving, prepreg materials, thermal interface materials, shrink tubing supplier, epoxy sheets India, phenolic laminates, insulation materials export India"
        url="https://aashaimpexandexports.com/products"
        siteName="A A Sha Impex and Exports"
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
