import React, { useState, useEffect, useRef } from 'react';
import SustainabilityDashboard from './SustainabilityDashboard';
import './SustainabilitySection.css';

const SustainabilitySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`sustainability-section alt-section${isVisible ? ' visible' : ''}`}
      id="impact"
      ref={sectionRef}
    >
      <div className="container">
        <div className="sustainability-section__header">
          <h2 className="sustainability-section__title">Environmental Impact</h2>
          <p className="sustainability-section__subtitle">
            Explore how Spanex technology reduces food waste, carbon emissions, water usage, and packaging
          </p>
        </div>
        <SustainabilityDashboard />
      </div>
    </section>
  );
};

export default SustainabilitySection;