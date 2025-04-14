// src/components/navigation/NavItem.jsx
import React, { useState } from 'react';

/**
 * Navigation item component for both desktop and mobile navigation
 * 
 * @param {string} label - Display text
 * @param {string} href - Link destination
 * @param {array} children - Potential dropdown items
 * @param {boolean} isActive - Whether item is active
 * @param {boolean} isMobile - Whether this is being rendered in mobile nav
 */
const NavItem = ({ label, href, children = [], isActive = false, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Classes for styling
  const navItemClass = `nav-item ${isActive ? 'nav-item-active' : ''} ${isMobile ? 'nav-item-mobile' : ''}`;
  const hasDropdown = children && children.length > 0;
  
  // Handle toggle for dropdown
  const handleToggle = (e) => {
    if (hasDropdown) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <li className={navItemClass}>
      <a 
        href={href} 
        className={`nav-link ${hasDropdown ? 'has-dropdown' : ''}`}
        onClick={hasDropdown ? handleToggle : undefined}
        aria-expanded={hasDropdown ? isOpen : undefined}
      >
        {label}
        {hasDropdown && (
          <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        )}
      </a>
      
      {hasDropdown && isOpen && (
        <ul className={`dropdown-menu ${isMobile ? 'dropdown-menu-mobile' : ''}`}>
          {children.map((item, index) => (
            <li key={index} className="dropdown-item">
              <a href={item.href} className="dropdown-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;