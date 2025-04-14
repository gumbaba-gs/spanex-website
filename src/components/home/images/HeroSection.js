import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="HeroSection">
      <div className="hero-content">
        <h1 className="hero-title">
          Extending Nature's Freshness
        </h1>
        <p className="hero-subtitle">
          Revolutionary patented Spanex Shelf Max formulations that extend produce shelf life by up to 5x,
          reducing losses for packhouses, growers, and retailers.<br />
          <span className="hero-highlight">
            <strong>Currently in testing phase – not yet commercially launched.</strong><br />
            All ingredients are <strong>GRAS (Generally Recognized As Safe)</strong> certified.
          </span>
        </p>
        <div className="hero-cta">
          <a
            href="#products"
            className="btn btn-primary"
          >
            Our Solutions
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
          >
            Schedule a Consultation
          </a>
        </div>
        <div className="hero-disclaimer">
          <small>
            Spanex Sciences develops advanced shelf life extender solutions for the agricultural and food packaging sectors. Our products are designed for B2B partners such as packhouses and farmers.
          </small>
        </div>
      </div>

      <div className="wave-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Wave path content */}
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;