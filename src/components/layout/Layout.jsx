// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../BackToTop';
import styles from './Layout.module.css';

/**
 * Layout component that wraps the entire application
 * Provides consistent structure with navbar, main content, and footer
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements (page content)
 */
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {/* Accessibility skip link */}
      <a href="#main-content" className={styles.skipLink}>Skip to main content</a>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;