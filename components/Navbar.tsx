"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoReddy}>{SITE_CONFIG.brand.logoText1}</span>
          <span className={styles.logoAnna}>{SITE_CONFIG.brand.logoText2}</span>
          <div className={styles.logoSub}>{SITE_CONFIG.brand.logoSub}</div>
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          <Link href="/#home">Home</Link>
          <Link href="/#about">About Us</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#blogs">Blogs</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className={styles.navActions}>
          <WhatsAppButton variant="outline" className={styles.desktopBtn}>Sign Up</WhatsAppButton>
          <WhatsAppButton className={styles.desktopBtn}>Login</WhatsAppButton>
          
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/#home" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/#blogs" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <div className={styles.mobileActions}>
             <WhatsAppButton variant="outline">Sign Up</WhatsAppButton>
             <WhatsAppButton>Login</WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
