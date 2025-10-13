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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
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
            <li key={index} className={styles.navItem}>
              <Link
                href={item.href}
                className={`${styles.navLink} ${
                  isActive(item.href) ? styles.navLinkActive : ""
                }`}
              >
                <span className={styles.navText}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className={`${styles.hamburger} ${
            isMenuOpen ? styles.hamburgerActive : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <div className={styles.mobileMenuContent}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  isActive(item.href) ? styles.mobileNavLinkActive : ""
                }`}
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
