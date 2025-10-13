import Header from "@/Component/Header";
import Products from "@/Component/Products";
import Footer from "@/Component/Footer";
import Meta from "@/Component/Meta";

export default function ProductsPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="Our Products - A A Sha Impex and Exports"
        description="Explore our comprehensive range of products and services. From electronics to textiles, we handle import-export for diverse product categories worldwide."
        keywords="products, import export products, electronics, textiles, machinery, chemicals, consumer goods, industrial products, global sourcing"
        url="https://aashaimpexandexports.com/products"
        image="/logo.png"
        siteName="A A Sha Impex and Exports"
      />
      <Header />
      <main className="flex-grow-1">
        <Products />
      </main>
      <Footer />
    </div>
  );
}
