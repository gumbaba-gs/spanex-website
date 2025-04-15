// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import SpanexShieldHeroWithStyles from '../components/heroes/SpanexShieldHero';
import AboutSection from '../components/home/AboutSection';
import FoodWasteCounter from '../components/home/FoodWasteCounter';
import ProductSection from '../components/home/ProductSection';
import TechnologySection from '../components/home/TechnologySection';
import BeforeAfterComparison from '../components/home/BeforeAfterComparison';
import ComparisonSection from '../components/home/ComparisonSection';
import SustainabilitySection from '../components/home/SustainabilitySection';
import ContactSection from '../components/home/ContactSection';

/**
 * Home page component with custom navigation structure
 */
const HomePage = () => {
  return (
    <div className="main-layout">
      {/* Accessibility skip link */}
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <SpanexShieldHeroWithStyles />
      </section>

      {/* Main Content */}
      <main id="main-content">
        {/* About Section */}
        <AboutSection />

        {/* Food Waste Counter Section */}
        <FoodWasteCounter />

        {/* Technology Section */}
        <TechnologySection />

        {/* Before/After Comparison Section */}
        <BeforeAfterComparison />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* SustainabilitySection */}
        <SustainabilitySection/>
        
        {/* Product Section */}
        <ProductSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;