import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const originalOverflow = document.body.style.overflow;
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className={`${styles.topBar} ${isScrolled ? styles.topBarHidden : ""}`}>
        <div className={styles.topBarInner}>
          <div className={styles.topBarLeft}>
            <a href="mailto:aaborewala@gmail.com" className={styles.topBarLink}>
              <i className="bi bi-envelope-fill"></i>
              <span>aaborewala@gmail.com</span>
            </a>
            <a href="tel:+919820024498" className={styles.topBarLink}>
              <i className="bi bi-telephone-fill"></i>
              <span>+91 98200 24498</span>
            </a>
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.topBarTag}>
              <i className="bi bi-globe2"></i>
              Global Import &amp; Export Solutions
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <nav className={styles.navbar}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoWrap}>
              <div className={styles.logoImg}>
                <Image
                  src="/logo.png"
                  alt="A A SHA IMPEX & EXPORTS"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <div className={styles.logoTextWrap}>
                <span className={styles.logoName}>A A SHA</span>
                <span className={styles.logoSub}>IMPEX &amp; EXPORTS</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className={styles.desktopNav}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    isActive(item.href) ? styles.navLinkActive : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className={styles.headerActions}>
            <Link href="/contact" className={styles.ctaBtn}>
              Get a Quote
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className={`${styles.menuToggle} ${
              isMenuOpen ? styles.menuToggleActive : ""
            }`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.toggleLine}></span>
            <span className={styles.toggleLine}></span>
            <span className={styles.toggleLine}></span>
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileOverlay} ${
          isMenuOpen ? styles.mobileOverlayOpen : ""
        }`}
      >
        <div className={styles.mobileOverlayBg} onClick={() => setIsMenuOpen(false)} />
        <div className={styles.mobilePanel}>
          <div className={styles.mobilePanelHead}>
            <Link href="/" className={styles.mobileLogoLink} onClick={() => setIsMenuOpen(false)}>
              <div className={styles.logoImg}>
                <Image
                  src="/logo.png"
                  alt="A A SHA IMPEX & EXPORTS"
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <span className={styles.mobileLogoText}>A A SHA</span>
            </Link>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <nav className={styles.mobileNav}>
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileLink} ${
                  isActive(item.href) ? styles.mobileLinkActive : ""
                }`}
                style={{ transitionDelay: isMenuOpen ? `${0.05 * i + 0.1}s` : "0s" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.mobileLinkText}>{item.name}</span>
                <i className="bi bi-chevron-right"></i>
              </Link>
            ))}
          </nav>

          <div className={styles.mobileCta}>
            <Link
              href="/contact"
              className={styles.mobileCtaBtn}
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className={styles.mobileContact}>
            <a href="mailto:aaborewala@gmail.com" className={styles.mobileContactLink}>
              <i className="bi bi-envelope-fill"></i>
              aaborewala@gmail.com
            </a>
            <a href="tel:+919820024498" className={styles.mobileContactLink}>
              <i className="bi bi-telephone-fill"></i>
              +91 98200 24498
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
