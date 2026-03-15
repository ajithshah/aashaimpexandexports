import Industries from "@/Component/Industries";
import Meta from "@/Component/Meta";

export default function IndustriesPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="Industries We Serve | Electrical, Electronics, Automotive, Aerospace – A A Sha Impex"
        description="A A Sha Impex and Exports supplies specialty insulation and film materials to 12+ industries: electrical & power, electronics & PCB, automotive & EV, aerospace & defence, packaging, textiles, construction, medical, energy & renewables, and more."
        keywords="electrical insulation supplier India, PCB materials India, automotive thermal materials, aerospace insulation materials, packaging films supplier, transformer insulation India, motor insulation materials, EV thermal management materials, specialty films industries India, industrial insulation export"
        url="https://aashaimpexandexports.com/industries"
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
