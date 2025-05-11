// src/components/common/StandardizedTabs.jsx
import React from 'react';
import styles from './StandardizedTabs.module.css';

/**
 * Standardized tab component to be used across different sections
 * 
 * @param {Object} props - Component props
 * @param {Array} props.tabs - Array of tab objects with id, title, and icon (optional)
 * @param {String} props.activeTab - ID of the currently active tab
 * @param {Function} props.setActiveTab - Function to update active tab
 * @param {String} props.theme - Color theme to use (default, alternate, accent)
 * @param {String} props.className - Additional CSS class names
 */
const StandardizedTabs = ({ 
  tabs, 
  activeTab, 
  setActiveTab, 
  theme = 'default',
  className = '' 
}) => {
  return (
    <div className={`${styles.tabs} ${styles[`theme${theme.charAt(0).toUpperCase() + theme.slice(1)}`]} ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => setActiveTab(tab.id)}
          className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
          aria-selected={activeTab === tab.id}
          role="tab"
        >
          {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default StandardizedTabs;