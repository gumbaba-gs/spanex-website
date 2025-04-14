// src/components/HeroSection.js
import React from 'react';
import '../App.css';
// Optionally import a background image or video
// import heroBg from './images/your-hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      {/* Background image or video */}
      {/* <img src={heroBg} alt="" className="hero-bg" aria-hidden="true" /> */}
      {/* <video className="hero-bg" autoPlay loop muted playsInline>
        <source src="your-video.mp4" type="video/mp4" />
      </video> */}
      <div className="hero-content">
        <h1 className="hero-title">
          Extending Nature&apos;s Freshness
        </h1>
        <p className="hero-subtitle">
          Revolutionary patented <span style={{ color: 'var(--color-peacock-plume)', fontWeight: 600 }}>Spanex Shelf Max</span> formulations that extend produce shelf life by up to 5x, reducing losses for packhouses, growers, and retailers.<br />
          <span style={{ color: 'var(--color-sea-salt)', fontWeight: 600 }}>
            <strong>Currently in testing phase – not yet commercially launched.</strong><br />
            All ingredients are <strong>GRAS (Generally Recognized As Safe)</strong> certified.
          </span>
        </p>
        <div className="hero-cta">
          <a href="#products" className="btn btn-primary">Our Solutions</a>
          <a href="#contact" className="btn btn-outline">Schedule a Consultation</a>
        </div>
        <div className="hero-disclaimer">
          <small>
            Spanex Sciences develops advanced shelf life extender solutions for the agricultural and food packaging sectors. Our products are designed for B2B partners such as packhouses and farmers.
          </small>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;