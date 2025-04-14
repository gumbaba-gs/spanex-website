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
        title="Fresh Produce, Delivered Daily"
        subtitle="Experience the freshness of locally sourced fruits and vegetables, delivered straight to your doorstep."
        ctaText="Shop Now"
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

      {/* Product Section */}
      <ProductSection />

      
      {/* Featured Section */}
      <section className="section">
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
      </section>
      
      {/* Featured Products */}
      <section className="section" style={{ backgroundColor: 'var(--color-alabaster)' }}>
        <Container>
          <div className="text-center">
            <h2>Featured Products</h2>
            <p className="my-2">Explore our selection of fresh and organic produce.</p>
          </div>
          
          <div className="grid grid-4 my-4">
            {/* Product Card 1 */}
            <div className="product-card">
              <div className="product-image">
                <img src="/images/product-1.jpg" alt="Organic Apples" />
              </div>
              <div className="product-content">
                <h3 className="product-title">Organic Apples</h3>
                <p className="product-price">$4.99 / lb</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
            
            {/* Product Card 2 */}
            <div className="product-card">
              <div className="product-image">
                <img src="/images/product-2.jpg" alt="Fresh Strawberries" />
              </div>
              <div className="product-content">
                <h3 className="product-title">Fresh Strawberries</h3>
                <p className="product-price">$3.99 / basket</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
            
            {/* Product Card 3 */}
            <div className="product-card">
              <div className="product-image">
                <img src="/images/product-3.jpg" alt="Organic Avocados" />
              </div>
              <div className="product-content">
                <h3 className="product-title">Organic Avocados</h3>
                <p className="product-price">$2.49 / each</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
            
            {/* Product Card 4 */}
            <div className="product-card">
              <div className="product-image">
                <img src="/images/product-4.jpg" alt="Fresh Kale" />
              </div>
              <div className="product-content">
                <h3 className="product-title">Fresh Kale</h3>
                <p className="product-price">$3.29 / bunch</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          
          <div className="text-center my-4">
            <a href="/products" className="btn btn-outline">View All Products</a>
          </div>
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="section">
        <Container>
          <div className="text-center">
            <h2>What Our Customers Say</h2>
            <p className="my-2">Hear from our satisfied customers who enjoy our fresh produce every day.</p>
          </div>
          
          <div className="grid grid-3 my-4">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I've been ordering from this service for months now, and the quality is consistently excellent. The produce always arrives fresh and tastes amazing!"</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src="/images/avatar-1.jpg" alt="Sarah J." />
                </div>
                <div className="testimonial-info">
                  <h4>Sarah J.</h4>
                  <p>Regular Customer</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The convenience of having farm-fresh produce delivered to my door has been a game-changer. The selection is great and everything is always top quality."</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src="/images/avatar-2.jpg" alt="Michael T." />
                </div>
                <div className="testimonial-info">
                  <h4>Michael T.</h4>
                  <p>Weekly Subscriber</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As a chef, I'm extremely picky about my ingredients. This service consistently provides restaurant-quality produce that I'm proud to use in my dishes."</p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src="/images/avatar-3.jpg" alt="Chef Amanda" />
                </div>
                <div className="testimonial-info">
                  <h4>Chef Amanda</h4>
                  <p>Professional Customer</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
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