import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import WhatsAppFab from "@/Component/WhatsAppFab";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppFab />
    </>
  );
}
