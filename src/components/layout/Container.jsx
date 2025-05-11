// src/components/layout/Container.jsx
import React from 'react';
import styles from './Container.module.css';

/**
 * Container component for consistent width and padding
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements
 * @param {boolean} props.fluid - Whether the container should be full-width
 * @param {string} props.className - Additional CSS classes
 */
const Container = ({ children, fluid = false, className = '' }) => {
  return (
    <div className={`${styles.container} ${fluid ? styles.fluid : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Container;