// src/components/Footer.js
import React from 'react';

/**
 * Accessible, theme-aware footer with inline styles to ensure it works correctly.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Inline styles to ensure footer is visible
  const styles = {
    footer: {
      backgroundColor: '#0d1a00',
      color: '#f1f1f1',
      padding: '4rem 0 2rem',
      position: 'relative',
    },
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    footerBrand: {
      marginBottom: '1.5rem',
    },
    footerLogo: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#fff',
      marginBottom: '1rem',
    },
    footerTagline: {
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '1.5rem',
      maxWidth: '300px',
      lineHeight: '1.6',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    footerHeading: {
      color: '#fff',
      fontSize: '1.1rem',
      marginBottom: '1.25rem',
      fontWeight: '600',
      position: 'relative',
      paddingBottom: '0.75rem',
      borderBottom: '2px solid #ff6e4e',
      width: 'fit-content',
    },
    footerLinks: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
    },
    footerLinkItem: {
      marginBottom: '0.75rem',
    },
    footerLink: {
      color: 'rgba(255, 255, 255, 0.7)',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    footerContact: {
      fontStyle: 'normal',
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: '1.8',
    },
    footerContactItem: {
      marginBottom: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    footerBottom: {
      marginTop: '3rem',
      paddingTop: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    copyright: {
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: '0.9rem',
    },
  };
  
  return (
    <footer style={styles.footer} role="contentinfo">
      <div style={styles.container}>
        <div style={styles.footerGrid}>
          <div style={styles.footerBrand}>
            <h3 style={styles.footerLogo}>Spanex Sciences</h3>
            <p style={styles.footerTagline}>
              Extending Nature's Freshness With Revolutionary Technology
            </p>
          </div>
          
          <div>
            <h4 style={styles.footerHeading}>Quick Links</h4>
            <ul style={styles.footerLinks}>
              <li style={styles.footerLinkItem}><a style={styles.footerLink} href="#home">Home</a></li>
              <li style={styles.footerLinkItem}><a style={styles.footerLink} href="#about">About Us</a></li>
              <li style={styles.footerLinkItem}><a style={styles.footerLink} href="#technology">Our Technology</a></li>
              <li style={styles.footerLinkItem}><a style={styles.footerLink} href="#impact">Sustainability</a></li>
              <li style={styles.footerLinkItem}><a style={styles.footerLink} href="#products">Products</a></li>
              <li style={styles.footerLinkItem}><a style={styles.footerLink} href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={styles.footerHeading}>Products</h4>
            <ul style={styles.footerLinks}>
              <li style={styles.footerLinkItem}><a style={styles.footerLink} href="#products">Berry Fresh</a></li>
              <li style={styles.footerLinkItem}><a style={styles.footerLink} href="#products">Apple Shield</a></li>
              <li style={styles.footerLinkItem}><a style={styles.footerLink} href="#products">Citrus Guard</a></li>
              <li style={styles.footerLinkItem}><a style={styles.footerLink} href="#products">Avocado Extend</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={styles.footerHeading}>Contact Us</h4>
            <address style={styles.footerContact}>
              <p style={styles.footerContactItem}>13275 Early Crimson St, Eastvale, CA 92880</p>
              <p style={styles.footerContactItem}>+61 452 199 786</p>
              <p style={styles.footerContactItem}>info@spanex.com.au</p>
            </address>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <div style={styles.copyright}>
            &copy; {currentYear} Spanex Sciences. All rights reserved.<br />
            Market data provided by <a style={{...styles.footerLink, color: '#ff6e4e'}} href="https://www.statista.com" target="_blank" rel="noopener noreferrer">Statista</a> and <a style={{...styles.footerLink, color: '#ff6e4e'}} href="https://www.nielsen.com" target="_blank" rel="noopener noreferrer">Nielsen</a>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;