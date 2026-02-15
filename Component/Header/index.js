import React, { useState, useEffect } from "react";
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
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const originalOverflow = document.body.style.overflow;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    }
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
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
        isMenuOpen ? styles.menuOpen : ""
      }`}
    >
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoContainer}>
              <div className={styles.logoImage}>
                <Image
                  src="/logo.png"
                  alt="A A SHA IMPEX & EXPORTS"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <span className={styles.logoText}>
                A A SHA
                <span className={styles.logoAccent}> IMPEX & EXPORTS</span>
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navMenu}>
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className={styles.navItem}
              style={{ "--item-index": index }}
            >
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  isActive(item.href) ? styles.navLinkActive : ""
                }`}
              >
                <span className={styles.navText}>{item.name}</span>
                <span className={styles.navGlow}></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`${styles.hamburger} ${
            isMenuOpen ? styles.hamburgerActive : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <div className={styles.mobileMenuContent}>
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  isActive(item.href) ? styles.mobileNavLinkActive : ""
                }`}
                style={{ "--item-index": index }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
                <div className={styles.mobileNavGlow}></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className={styles.menuOverlay}
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Header;
