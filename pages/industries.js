import Industries from "@/Component/Industries";
import Meta from "@/Component/Meta";

export default function IndustriesPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="Industries We Serve | Motors, Transformers, Generators – A A Sha Impex"
        description="A A Sha Impex and Exports supplies electrical insulation materials for electric motors, transformers, generators, fans, pumps, switchgear, motor rewinding shops, railways, renewable energy, and automotive/EV applications."
        keywords="motor insulation supplier India, transformer insulation materials, generator insulation, fan motor insulation, pump motor insulation, motor rewinding materials, switchgear insulation, railway traction insulation, EV motor insulation, insulation materials industries"
        url="https://aashaimpexandexports.com/industries"
        image="/product-page/dmd-film.png"
        images={["/product-page/fiberglass-sleeves.jpg", "/product-page/h-class-pure-aramid-paper.png", "/product-page/insulating-varnish-elantas.png"]}
        siteName="A A Sha Impex and Exports"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />
      <main className="flex-grow-1">
        <Industries />
      </main>
    </div>
  );
}
 