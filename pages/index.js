import Launching from "@/Component/Launching";
import Meta from "@/Component/Meta";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="A A Sha Impex and Exports - Empowering Global Trade"
        description="A A Sha Impex and Exports connects global markets with quality products and reliable import-export solutions. Specializing in sourcing, exporting, and importing a wide range of goods worldwide. Contact us for trusted trade partnerships."
        keywords="import export, export company, import company, global trade, India export, India import, sourcing, international trade, export business, import business, trade solutions, A A Sha Impex, A A Sha Exports, B2B trade, global sourcing, product sourcing, logistics, supply chain, Indian exporter, Indian importer, export-import services"
        url="https://aashaimpexandexports.com"
        image="/logo.png"
        siteName="A A Sha Impex and Exports"
      />
      <main className="flex-grow-1">
        <Launching />
      </main>
    </div>
  );
}
