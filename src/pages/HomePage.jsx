// src/pages/HomePage.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import SpanexShieldHero from '../components/heroes/SpanexShieldHero';
import AboutSection from '../components/home/AboutSection';
import FoodWasteCounter from '../components/home/FoodWasteCounter';
import ProductSection from '../components/products/ProductSection';
import TechnologySection from '../components/home/TechnologySection';
import BeforeAfterComparison from '../components/products/BeforeAfterComparison';
import ComparisonSection from '../components/products/ComparisonSection';
import SustainabilitySection from '../components/home/SustainabilitySection';
import ContactSection from '../components/products/ContactSection';

/**
 * Home page component with all sections of the Spanex Sciences website
 */
const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="home">
        <SpanexShieldHero />
      </section>

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
    </Layout>
  );
};

export default HomePage;