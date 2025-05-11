// src/components/layout/Footer.jsx
import React from 'react';
import Container from './Container';
import styles from './Footer.module.css';
import logo from '../home/images/spanex.png';

/**
 * Footer component with company information, links, and contact details
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerGrid}>
          {/* Company Information */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <img src={logo} alt="Spanex Logo" className={styles.logoImage} />
              <span>Spanex</span>
            </div>
            <p className={styles.footerTagline}>
              Pioneering shelf life extension solutions for packhouses, growers, and retailers
            </p>
            <div className={styles.certifications}>
              <div className={styles.certBadge}>
                <span className={styles.certIcon}>✓</span>
                <span className={styles.certText}>GRAS Certified</span>
              </div>
              <div className={styles.certBadge}>
                <span className={styles.certIcon}>🛡️</span>
                <span className={styles.certText}>Patented Technology</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#technology">Our Technology</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#impact">Sustainability</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className={styles.footerLinks}>
            <h4>Resources</h4>
            <ul>
              <li><a href="#technology">Technical Specifications</a></li>
              <li><a href="#about">ROI Calculator</a></li>
              <li><a href="#products">Product Catalog</a></li>
              <li><a href="#about">Case Studies</a></li>
              <li><a href="#about">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className={styles.footerContact}>
            <h4>Contact Us</h4>
            <address>
              <p>
                <span className={styles.contactIcon}>📍</span>
                <span>123 Innovation Drive, Suite 200<br />San Francisco, CA 94107</span>
              </p>
              <p>
                <span className={styles.contactIcon}>📞</span>
                <span>(555) 123-4567</span>
              </p>
              <p>
                <span className={styles.contactIcon}>✉️</span>
                <span>info@spanexsciences.com</span>
              </p>
            </address>
            
            {/* B2B Call to Action */}
            <div className={styles.b2bCta}>
              <h5>For Business Inquiries</h5>
              <a href="#contact" className={styles.ctaButton}>
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} Spanex Sciences. All rights reserved.
          </div>
          
          <div className={styles.footerLegal}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;