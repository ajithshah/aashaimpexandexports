import About from "@/Component/About";
import Meta from "@/Component/Meta";

export default function AboutPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="About Us | 50+ Years of Specialty Materials Trade – A A Sha Impex and Exports"
        description="Learn about A A Sha Impex and Exports — a trusted supplier and exporter of electrical insulation materials and specialty films from India for over 50 years. Serving 500+ clients across 20+ countries with BOPP films, PET films, polyimide films, and more."
        keywords="about A A Sha Impex, specialty materials supplier India, electrical insulation company India, trusted exporter India, 50 years trade experience, specialty films company, insulation materials manufacturer India, B2B specialty materials"
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
