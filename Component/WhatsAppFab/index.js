import React, { useState, useEffect } from "react";
import styles from "./WhatsAppFab.module.css";

const WhatsAppFab = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof window === "undefined") return;

    // Replace with your WhatsApp business number (include country code without + symbol)
    const phoneNumber = "919444455626";
    const message = "Hello! I'm interested in your electrical insulation materials.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  // Prevent hydration mismatch by only rendering on client
  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.whatsappFab} onClick={handleWhatsAppClick}>
      <div className={styles.fabContainer}>
        <i className="bi bi-whatsapp"></i>
        <div className={styles.ripple}></div>
      </div>
      <div className={styles.tooltip}>Chat with us on WhatsApp</div>
    </div>
  );
};

export default WhatsAppFab;
