// src/components/layout/Footer.jsx
import React from 'react';
import Container from './Container';
import styles from './Footer.module.css';
import logo from '../home/images/spanex.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerGrid}>
          {/* Brand column */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <img src={logo} alt="SPANEX" className={styles.logoImage} />
              <span>SPANEX</span>
            </div>
            <p className={styles.footerTagline}>
              Pioneering shelf-life extension and sustainable bio-fertiliser
              solutions for Australian agriculture.
            </p>
            <div className={styles.certifications}>
              <div className={styles.certBadge} title="Indian Patent IN 361021/CHE/2013">
                <span className={styles.certIcon}>🛡️</span>
                <span className={styles.certText}>Patent IN 361021/CHE/2013</span>
              </div>
              <div className={styles.certBadge} title="DAFF Import Permit">
                <span className={styles.certIcon}>📋</span>
                <span className={styles.certText}>DAFF Permit #0011744619</span>
              </div>
              <div className={styles.certBadge} title="Manufactured under ISO 9001:2015 by SRT Agro Science">
                <span className={styles.certIcon}>✓</span>
                <span className={styles.certText}>ISO 9001:2015 (Manufacturer)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Shelf-Life Products</a></li>
              <li><a href="#biocapsules">Bio-Capsule Technology</a></li>
              <li><a href="#biocapsules">Crop Schedules</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact column */}
          <div className={styles.footerContact}>
            <h4>Contact Us</h4>
            <address>
              <p>
                <span className={styles.contactIcon}>📍</span>
                <span>4 Cabrini Street<br />Point Cook, Victoria 3030</span>
              </p>
              <p>
                <span className={styles.contactIcon}>📞</span>
                <span>0452 199 786</span>
              </p>
              <p>
                <span className={styles.contactIcon}>✉️</span>
                <a href="mailto:info@spanex.com.au">info@spanex.com.au</a>
              </p>
              <p>
                <span className={styles.contactIcon}>🏛️</span>
                <span>ABN 56 602 689 001</span>
              </p>
            </address>

            <div className={styles.b2bCta}>
              <h5>For Business Inquiries</h5>
              <a href="#contact" className={styles.ctaButton}>
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom strip */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} SPANEX · A Division of Meem International Pty Ltd · ABN 56 602 689 001
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
