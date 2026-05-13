import About from "@/Component/About";
import Meta from "@/Component/Meta";

export default function AboutPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="About Us | House of Electrical Insulation Since 1972 – A A Sha Impex and Exports"
        description="Learn about A A Sha Impex and Exports — Authorised Importers, Distributors, and Stockists of electrical insulation materials since 1972. Based in Chennai, India. Trusted by 500+ customers for quality Polyester Films, Aramid Papers, Varnishes, and more."
        keywords="about A A Sha Impex, electrical insulation company Chennai, insulation materials supplier India, trusted since 1972, motor insulation stockist, transformer insulation dealer, polyester film dealer Chennai"
        url="https://aashaimpexandexports.com/about"
        image="/product/Sample01.jpg"
        images={["/product/01.jpg", "/product/Polyimide.jpg"]}
        siteName="A A Sha Impex and Exports"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <main className="flex-grow-1">
        <About />
      </main>
    </div>
  );
}
