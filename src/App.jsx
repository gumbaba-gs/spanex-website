// src/App.jsx
import React from 'react';
import HomePage from './pages/HomePage';
import './styles/variables.css';
import './styles/globals.css';
import './styles/components.css';
import './styles/section-transitions.css';
import './styles/enhanced-animations.css';

/**
 * Main App component
 * Imports global styles and renders the HomePage component
 */
const App = () => {
  return (
    <div className="app">
      <HomePage />
    </div>
  );
};

export default App;