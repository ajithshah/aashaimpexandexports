import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import WhatsAppFab from "@/Component/WhatsAppFab";
import Maintenance from "@/Component/Maintenance";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsTransitioning(true);
    const handleComplete = () => {
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {/* <Header />
      <div
        className={`page-transition ${isTransitioning ? "page-exit" : "page-enter"}`}
      >
        <Component {...pageProps} />
      </div>
      <Footer />
      <WhatsAppFab /> */}
<Maintenance/>
    </>
  );
}
