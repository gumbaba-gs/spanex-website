// src/components/Navbar.js
import React, { useState } from 'react';
import '../App.css';

/**
 * Responsive Navbar with accessible toggle for mobile.
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
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
          <a href="#about" className="navbar-link" onClick={() => setOpen(false)}>About</a>
          <a href="#products" className="navbar-link" onClick={() => setOpen(false)}>Products</a>
          <a href="#contact" className="navbar-link" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;