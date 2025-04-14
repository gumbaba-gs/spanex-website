// src/components/layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Main layout wrapper with header and footer
 * 
 * @param {React.ReactNode} children - The main content to be rendered between header and footer
 */
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;