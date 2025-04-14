// src/components/common/StandardizedTabs.jsx
import React from 'react';
import './StandardizedTabs.css';

/**
 * Standardized tab component to be used across different sections
 * 
 * @param {Array} tabs - Array of tab objects with id, title, and icon (optional)
 * @param {String} activeTab - ID of the currently active tab
 * @param {Function} setActiveTab - Function to update active tab
 * @param {String} theme - Color theme to use (default, alternate)
 */
const StandardizedTabs = ({ tabs, activeTab, setActiveTab, theme = 'default' }) => {
  return (
    <div className={`standardized-tabs standardized-tabs--${theme}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => setActiveTab(tab.id)}
          className={`standardized-tab-button ${activeTab === tab.id ? 'active' : ''}`}
          aria-selected={activeTab === tab.id}
          role="tab"
        >
          {tab.icon && <span className="standardized-tab-icon">{tab.icon}</span>}
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default StandardizedTabs;