import Contact from "@/Component/Contact";
import Meta from "@/Component/Meta";

export default function ContactPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="Contact Us | Get a Quote for Specialty Materials – A A Sha Impex and Exports"
        description="Contact A A Sha Impex and Exports to request a quote for electrical insulation materials, specialty films, industrial tapes, or any specialty materials. Reach our trade experts in India for fast, reliable sourcing."
        keywords="contact A A Sha Impex, specialty materials quote India, buy BOPP films India, buy PET films India, insulation materials inquiry, industrial tapes supplier contact, electrical insulation quote, specialty films wholesale India"
        url="https://aashaimpexandexports.com/contact"
        siteName="A A Sha Impex and Exports"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <main className="flex-grow-1">
        <Contact />
      </main>
    </div>
  );
}
