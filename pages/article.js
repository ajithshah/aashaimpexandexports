import Article from "@/Component/Article";
import Meta from "@/Component/Meta";

export default function ArticlePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="Our Story | 50+ Years of Electrical Insulation Excellence – A A Sha Impex and Exports"
        description="The story of A A Sha Impex and Exports — from a Chennai trading business in 1972 to a trusted supplier of electrical insulation materials for 1000+ customers across India."
        keywords="A A Sha Impex history, electrical insulation company story, insulation materials supplier since 1972, Chennai insulation exporter story"
        url="https://aashaimpexandexports.com/article"
        image="/hero/hero-1.jpg"
        type="article"
        article
        siteName="A A Sha Impex and Exports"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Our Story", path: "/article" },
        ]}
      />
      <main className="flex-grow-1">
        <Article />
      </main>
    </div>
  );
}
