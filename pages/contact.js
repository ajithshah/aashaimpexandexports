import Header from "@/Component/Header";
import Contact from "@/Component/Contact";
import Footer from "@/Component/Footer";
import Meta from "@/Component/Meta";

export default function ContactPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Meta
        title="Contact Us - A A Sha Impex and Exports"
        description="Get in touch with A A Sha Impex and Exports for your import-export needs. Contact us for tailored trade solutions and global business partnerships."
        keywords="contact, get in touch, import export contact, business inquiry, trade solutions, Mumbai office, India exporter contact"
        url="https://aashaimpexandexports.com/contact"
        image="/logo.png"
        siteName="A A Sha Impex and Exports"
      />
      <Header />
      <main className="flex-grow-1">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
