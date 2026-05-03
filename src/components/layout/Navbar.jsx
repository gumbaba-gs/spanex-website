// src/components/layout/Navbar.jsx
// Editorial Pharma-Bio nav for SPANEX
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../home/images/spanex.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`} role="navigation" aria-label="Main">
        <a href="#home" className={styles.navMark} aria-label="SPANEX home">
          <img src={logo} alt="" className={styles.navLogo} aria-hidden="true" />
          <span className={styles.navWordmark}>
            SPANEX<span className={styles.navMarkPeriod}>.</span>
          </span>
        </a>
        <div className={styles.navMeta}>
          <a href="#about">About</a>
          <a href="#biocapsules">Bio-Capsule</a>
          <a href="#primer">Primer</a>
          <a href="#shelflife">Shelf-Life</a>
          <a href="#pack">Pack</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          className={styles.menuToggle}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          Menu
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`${styles.menuOverlay} ${open ? styles.menuOpen : ''}`} aria-hidden={!open}>
        <button
          className={styles.menuClose}
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          Close
        </button>
        <nav className={styles.menuLinks}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#biocapsules" onClick={() => setOpen(false)}>Bio-Capsule</a>
          <a href="#primer" onClick={() => setOpen(false)}>Primer</a>
          <a href="#shelflife" onClick={() => setOpen(false)}>Shelf-Life</a>
          <a href="#pack" onClick={() => setOpen(false)}>Pack</a>
          <a href="#products" onClick={() => setOpen(false)}>Products</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
        <div className={styles.menuFooter}>
          <span>SPANEX</span>
          <span>ABN&nbsp;56&nbsp;602&nbsp;689&nbsp;001</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
