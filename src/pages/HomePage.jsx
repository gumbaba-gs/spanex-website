// src/pages/HomePage.jsx
import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/layout/Container';
import Hero from '../components/heroes/Hero';
import AboutSection from '../components/home/AboutSection';
import FoodWasteCounter from '../components/home/FoodWasteCounter';
import ProductSection from '../components/home/ProductSection';
import TechnologySection from '../components/home/TechnologySection';
import BeforeAfterComparison from '../components/home/BeforeAfterComparison';
import ComparisonSection from '../components/home/ComparisonSection';
import SustainabilitySection from '../components/home/SustainabilitySection';
import ContactSection from '../components/home/ContactSection';

/**
 * Home page component
 */
const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        backgroundImage="/images/hero-background.jpg"
        // backgroundVideo="/videos/hero-background.mp4" // Uncomment to use video
        title="Extending Nature's Freshness"
        subtitle="Revolutionary patented Spanex Shelf Max formulations that extend produce shelf life by up to 5x,
          reducing losses for packhouses, growers, and retailers."
        ctaText="Our Solutions"
        ctaLink="/products"
        alignment="center"
        textColor="light"
        fullHeight={true}
      />

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

      
      {/* Featured Section */}
      {/* <section className="section">
        <Container>
          <div className="text-center">
            <h2>Why Choose Us</h2>
            <p className="my-2">We're committed to bringing you the freshest produce with unmatched quality and service.</p>
          </div>
          
          <div className="grid grid-3 my-4">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Quality Guaranteed</h3>
              <p>We carefully select every item to ensure you get the best quality products every time.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Fast Delivery</h3>
              <p>From farm to your table in less than 24 hours, keeping everything fresh and delicious.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Local Partners</h3>
              <p>We work with local farmers and producers to support our community and reduce our carbon footprint.</p>
            </div>
          </div>
        </Container>
      </section> */}
      
      {/* Featured Products */}
     
      {/* Testimonials Section */}

      
      {/* CTA Section */}
      <section className="section-lg" style={{ backgroundColor: 'var(--color-naval)', color: 'var(--color-pure-white)' }}>
        <Container>
          <div className="text-center">
            <h2>Ready to Experience the Freshness?</h2>
            <p className="my-2">Join thousands of satisfied customers who enjoy our farm-fresh produce delivered to their doorstep.</p>
            <div className="my-4">
              <a href="/products" className="btn btn-primary">Shop Now</a>
              <a href="/about" className="btn btn-outline" style={{ marginLeft: 'var(--spacing-md)', color: 'var(--color-pure-white)', borderColor: 'var(--color-pure-white)' }}>Learn More</a>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default HomePage;