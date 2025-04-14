// src/components/Footer.js
import React from 'react';
import '../App.css';

/**
 * Accessible, theme-aware footer.
 */
const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div>
      &copy; {new Date().getFullYear()} Spanex Sciences. All rights reserved.<br />
      Market data provided by <a href="https://www.statista.com" target="_blank" rel="noopener noreferrer">Statista</a> and <a href="https://www.nielsen.com" target="_blank" rel="noopener noreferrer">Nielsen</a>.
    </div>
  </footer>
);

export default Footer;