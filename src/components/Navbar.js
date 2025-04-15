// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import '../App.css';

/**
 * Responsive Navbar with accessible toggle for mobile.
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
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
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} role="navigation" aria-label="Main Navigation">
      <div className="container navbar-content">
        <a href="#home" className="navbar-logo">Spanex</a>
        <button
          className="navbar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div className={`navbar-links${open ? ' open' : ''}`}>
          <a href="#home" className="navbar-link" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" className="navbar-link" onClick={() => setOpen(false)}>About Us</a>
          <a href="#technology" className="navbar-link" onClick={() => setOpen(false)}>Technology</a>
          <a href="#impact" className="navbar-link" onClick={() => setOpen(false)}>Sustainability</a>
          <a href="#products" className="navbar-link" onClick={() => setOpen(false)}>Our Solutions</a>
          <a href="#contact" className="navbar-link" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;