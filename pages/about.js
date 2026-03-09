import About from "@/Component/About";
import Meta from "@/Component/Meta";

export default function AboutPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="About Us - A A Sha Impex and Exports"
        description="Learn about A A Sha Impex and Exports - Over 25 years of excellence in global trade solutions. Your trusted partner for import-export services worldwide."
        keywords="about A A Sha Impex, company history, import export company, global trade solutions, Indian exporter, trade expertise, business background"
        url="https://aashaimpexandexports.com/about"
        image="/logo.png"
        siteName="A A Sha Impex and Exports"
      />
      <main className="flex-grow-1">
        <About />
      </main>
    </div>
  );
}
