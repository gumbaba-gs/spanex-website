// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../home/images/spanex.png';

/**
 * Navbar component that transforms from full to hamburger-only when scrolling
 * This preserves the existing functionality as specified in the refactoring plan
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to transform navbar
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than threshold (80px)
      const isScrolled = window.scrollY > 80;
      
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    
    const handleClickOutside = (e) => {
      if (open && !e.target.closest(`.${styles.menuOverlay}`) && !e.target.closest(`.${styles.hamburgerBtn}`)) {
        setOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  
  return (
    <>
      {/* Boxed navbar container */}
      <div className={styles.navbarContainer}>
        <Container>
          {/* Full navbar shown initially, hidden when scrolled */}
          <nav 
            className={`${styles.boxedNavbar} ${scrolled ? styles.hidden : ''}`} 
            role="navigation" 
            aria-label="Main Navigation"
          >
            <div className={styles.navbarContent}>
              <div className={styles.navbarLogoContainer}>
                <a href="#home" className={styles.navbarLogo}>
                  <img src={logo} alt="Spanex Logo" className={styles.navbarLogoImage} />
                  Spanex
                </a>
              </div>
              <div className={styles.navbarLinks}>
                <a href="#home" className={styles.navbarLink}>Home</a>
                <a href="#about" className={styles.navbarLink}>About Us</a>
                <a href="#technology" className={styles.navbarLink}>Technology</a>
                <a href="#impact" className={styles.navbarLink}>Sustainability</a>
                <a href="#products" className={styles.navbarLink}>Our Solutions</a>
                <a href="#contact" className={styles.navbarLink}>Contact</a>
              </div>
            </div>
          </nav>
        </Container>
      </div>
  
      {/* Hamburger button shown when scrolled */}
      <button 
        className={`${styles.hamburgerBtn} ${scrolled ? styles.visible : ''}`} 
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
      >
        <span className={styles.hamburgerIcon}>☰</span>
        <span className={styles.menuText}>Menu</span>
      </button>
  
      {/* Menu Overlay */}
      <div className={`${styles.menuOverlay} ${open ? styles.open : ''}`}>
        <button 
          className={styles.closeMenuBtn} 
          onClick={() => setOpen(false)}
          aria-label="Close navigation menu"
        >
          ✕
        </button>
        
        <nav className={styles.menuLinks}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About Us</a>
          <a href="#technology" onClick={() => setOpen(false)}>Technology</a>
          <a href="#impact" onClick={() => setOpen(false)}>Sustainability</a>
          <a href="#products" onClick={() => setOpen(false)}>Our Solutions</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;