// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import Container from './Container';
import MainNav from '../navigation/MainNav';
import MobileNav from '../navigation/MobileNav';

/**
 * Header component with responsive navigation
 * 
 * @param {boolean} isTransparent - Whether header should be transparent over hero sections
 * @param {string} activePage - Current active page for navigation highlighting
 */
const Header = ({ isTransparent = false, activePage = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Sample navigation items - replace with your own
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { 
      label: 'Products', 
      href: '/products',
      children: [
        { label: 'Product Category 1', href: '/products/category-1' },
        { label: 'Product Category 2', href: '/products/category-2' },
        { label: 'Product Category 3', href: '/products/category-3' },
      ]
    },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    
    // When opening mobile menu, prevent body scrolling
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };
  
  // Determine header classes based on scroll state and transparency setting
  const headerClasses = `header ${scrolled ? 'header-scrolled' : ''} ${
    isTransparent && !scrolled ? 'header-transparent' : ''
  }`;
  
  return (
    <header className={headerClasses}>
      <Container>
        <div className="header-inner">
          <div className="header-logo">
            <a href="/" aria-label="Go to homepage">
              <img src="/logo.svg" alt="Company Logo" />
            </a>
          </div>
          
          <div className="header-navigation desktop-only">
            <MainNav items={navItems} activePage={activePage} />
          </div>
          
          <div className="header-actions">
            <button className="btn btn-primary desktop-only">Get Started</button>
            
            <button 
              className="mobile-menu-toggle mobile-only" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </Container>
      
      <MobileNav 
        items={navItems} 
        isOpen={mobileMenuOpen} 
        onClose={closeMobileMenu}
        activePage={activePage}
      />
    </header>
  );
};

export default Header;