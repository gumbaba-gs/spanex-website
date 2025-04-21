import React, { useState, useEffect } from 'react';
import './TransformingNavbar.css';
// import '../App.css';
import logo from './home/images/spanex.png';
/**
 * Navbar that transforms from full to hamburger-only when scrolling
 */
const TransformingNavbar = () => {
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
  
    return (
      <>
        {/* Boxed navbar container */}
        <div className="navbar-container">
          {/* Full navbar shown initially, hidden when scrolled */}
          <nav className={`boxed-navbar ${scrolled ? 'hidden' : ''}`} role="navigation" aria-label="Main Navigation">
            <div className="navbar-content">
              <div className="navbar-logo-container">
                <a href="#home" className="navbar-logo">
                  <img src={logo} alt="Spanex Logo" className="navbar-logo-image" />
                  Spanex
                </a>
              </div>
              <div className="navbar-links">
                <a href="#home" className="navbar-link">Home</a>
                <a href="#about" className="navbar-link">About Us</a>
                <a href="#technology" className="navbar-link">Technology</a>
                <a href="#impact" className="navbar-link">Sustainability</a>
                <a href="#products" className="navbar-link">Our Solutions</a>
                <a href="#contact" className="navbar-link">Contact</a>
              </div>
            </div>
          </nav>
        </div>
  
        {/* Hamburger button shown when scrolled */}
        <button 
          className={`hamburger-btn ${scrolled ? 'visible' : ''}`} 
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
        >
          <span className="hamburger-icon">☰</span>
          <span className="menu-text">Menu</span>
        </button>
  
        {/* Menu Overlay */}
        <div className={`menu-overlay ${open ? 'open' : ''}`}>
          <button 
            className="close-menu-btn" 
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
          
          <nav className="menu-links">
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
  
export default TransformingNavbar;