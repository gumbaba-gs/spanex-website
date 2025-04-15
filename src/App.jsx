// src/App.jsx
import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';

// Import global styles
import './styles/globals.css';
import './styles/components.css';

/**
 * Main App component
 */
const App = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <HomePage />
    </div>
  );
};

export default App;