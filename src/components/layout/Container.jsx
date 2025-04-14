// src/components/layout/Container.jsx
import React from 'react';

/**
 * Container component for consistent content width and padding
 * 
 * @param {boolean} fluid - Whether container should be full-width or fixed-width
 * @param {string} className - Additional classes for customization
 * @param {React.ReactNode} children - Child components
 */
const Container = ({ fluid = false, className = '', children }) => {
  return (
    <div className={`${fluid ? 'container-fluid' : 'container'} ${className}`}>
      {children}
    </div>
  );
};

export default Container;