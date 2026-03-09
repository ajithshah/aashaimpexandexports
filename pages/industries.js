import Industries from "@/Component/Industries";
import Meta from "@/Component/Meta";

export default function IndustriesPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="Industries We Serve - A A Sha Impex and Exports"
        description="We provide comprehensive import-export solutions across diverse industries including electronics, textiles, agriculture, chemicals, automotive, and more."
        keywords="industries served, electronics, textiles, agriculture, chemicals, automotive, construction, consumer goods, industrial equipment"
        url="https://aashaimpexandexports.com/industries"
        image="/logo.png"
        siteName="A A Sha Impex and Exports"
      />
      <main className="flex-grow-1">
        <Industries />
      </main>
    </div>
  );
}
