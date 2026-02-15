import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import PrivacyPolicyModal from "../Modal/PrivacyPolicyModal";
import TermsOfServiceModal from "../Modal/TermsOfServiceModal";
import styles from "./Footer.module.css";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Use current year directly since we're only rendering on client
  const currentYear = isClient ? new Date().getFullYear() : 2025;

  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <h3 className={styles.logoText}>
                A A SHA
                <span className={styles.logoAccent}> IMPEX & EXPORTS</span>
              </h3>
              <p className={styles.logoDescription}>
                Empowering Global Trade with Quality and Reliability
              </p>
            </div>
            <div className={styles.socialLinks}>
              {/* <a
                href="https://wa.me/919444184855?text=Hello%2C%20I%20am%20interested%20in%20your%20import-export%20services."
                className={styles.socialLink}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                <span>WhatsApp</span>
              </a> */}
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className={styles.footerLink}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className={styles.footerLink}>
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <ul className={styles.footerLinks}>
              <li>
                <span className={styles.serviceItem}>Import Services</span>
              </li>
              <li>
                <span className={styles.serviceItem}>Export Services</span>
              </li>
              <li>
                <span className={styles.serviceItem}>Logistics</span>
              </li>
              <li>
                <span className={styles.serviceItem}>Trade Consulting</span>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <i className="bi bi-geo-alt-fill"></i>
                <span>
                  24, Sembudoss Street, Parry's Corner, George Town,
                  <br />
                  Chennai, Tamil Nadu 600001
                </span>
              </p>
              <p className={styles.contactItem}>
                <i className="bi bi-telephone-fill"></i>
                <span>
                  <a href="tel:+919444184855" className={styles.phoneLink}>
                    +91 9444184855
                  </a>
                  <br />
                  <a href="tel:+918122816789" className={styles.phoneLink}>
                    +91 8122816789
                  </a>
                </span>
              </p>
              <p className={styles.contactItem}>
                <i className="bi bi-envelope-fill"></i>
                <span>
                  <a
                    href="mailto:aashaimpexandexports@gmail.com"
                    className={styles.emailLink}
                  >
                    aashaimpexandexports@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>
              &copy; {isClient ? currentYear : "2025"} A A Sha Impex and
              Exports. All rights reserved.
            </p>
          </div>
          <div className={styles.bottomLinks}>
            <button onClick={openPrivacyModal} className={styles.bottomLink}>
              Privacy Policy
            </button>
            <button onClick={openTermsModal} className={styles.bottomLink}>
              Terms of Service
            </button>
          </div>
        </div>

        <div className={styles.developerCredit}>
          <p>
            Crafted with excellence by{" "}
            <a
              href="https://techbrothers.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.developerLink}
            >
              Tech Brothers
            </a>
          </p>
        </div>
      </div>

      {/* Modals */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={closePrivacyModal}
      />
      <TermsOfServiceModal
        isOpen={isTermsModalOpen}
        onClose={closeTermsModal}
      />
    </footer>
  );
};

export default Footer;
