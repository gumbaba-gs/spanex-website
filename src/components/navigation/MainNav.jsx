// src/components/navigation/MainNav.jsx
import React from 'react';
import NavItem from './NavItem';

/**
 * Main navigation component for desktop view
 * 
 * @param {array} items - Navigation items with labels, links, and potential dropdowns
 * @param {string} activePage - Current active page
 */
const MainNav = ({ items = [], activePage = '' }) => {
  return (
    <nav className="main-nav" aria-label="Main Navigation">
      <ul className="nav-list">
        {items.map((item, index) => (
          <NavItem
            key={index}
            label={item.label}
            href={item.href}
            children={item.children}
            isActive={activePage === item.href || activePage === item.label.toLowerCase()}
          />
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;