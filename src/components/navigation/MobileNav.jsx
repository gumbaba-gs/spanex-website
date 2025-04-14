// src/components/navigation/MobileNav.jsx
import React from 'react';
import NavItem from './NavItem';

/**
 * Mobile navigation component with slide-in menu
 * 
 * @param {array} items - Same navigation items as MainNav
 * @param {boolean} isOpen - Whether mobile menu is open
 * @param {function} onClose - Handler to close menu
 * @param {string} activePage - Current active page
 */
const MobileNav = ({ items = [], isOpen = false, onClose, activePage = '' }) => {
  // Handle click outside to close
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('mobile-nav-overlay')) {
      onClose();
    }
  };

  return (
    <div 
      className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
      aria-hidden={!isOpen}
    >
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-nav-header">
          <button 
            className="mobile-nav-close" 
            onClick={onClose}
            aria-label="Close mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <ul className="mobile-nav-list">
          {items.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              href={item.href}
              children={item.children}
              isActive={activePage === item.href || activePage === item.label.toLowerCase()}
              isMobile={true}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;