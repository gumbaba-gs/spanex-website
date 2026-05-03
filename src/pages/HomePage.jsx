// src/pages/HomePage.jsx
// Editorial Pharma-Bio composition for SPANEX
import React from 'react';
import Layout from '../components/layout/Layout';
import SpanexShieldHero from '../components/heroes/SpanexShieldHero';
import AboutSection from '../components/home/AboutSection';
import BioCapsuleSection from '../components/home/BioCapsuleSection';
import CompareSection from '../components/home/CompareSection';
import ShelfLifeSection from '../components/home/ShelfLifeSection';
import CredentialsSection from '../components/home/CredentialsSection';
import SalesPackSection from '../components/home/SalesPackSection';
import EditorialQuote from '../components/home/EditorialQuote';
import ProductSection from '../components/products/ProductSection';
import ContactSection from '../components/products/ContactSection';

const HomePage = () => {
  return (
    <Layout>
      {/* I — Hero */}
      <SpanexShieldHero />

      {/* II — About / Story */}
      <AboutSection />

      {/* III — Compare to Powder & Liquid */}
      <CompareSection />

      {/* IV — Bio-Capsule Technology + Crop Schedules */}
      <BioCapsuleSection />

      {/* V — Sales Pack monograph (closes out the Bio-Capsule chapter) */}
      <SalesPackSection />

      {/* VI — Shelf-Life Extender (the next product) */}
      <ShelfLifeSection />

      {/* VII — Credentials */}
      <CredentialsSection />

      {/* VIII — Editorial Quote */}
      <EditorialQuote />

      {/* IX — Products */}
      <ProductSection />

      {/* X — Contact */}
      <ContactSection />
    </Layout>
  );
};

export default HomePage;
