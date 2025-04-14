import React, { useState, useRef, useEffect } from 'react';
import 'src/components/home/BeforeAfterComparison.css';
import 'src/components/home/TechnologySection.css';

// Import images directly to ensure they're properly bundled by webpack
import treatedDay0 from 'src/components/home/images/spanex-treated/0.png';
import treatedDay3 from 'src/components/home/images/spanex-treated/3.png';
import treatedDay7 from 'src/components/home/images/spanex-treated/7.png';
import treatedDay11 from 'src/components/home/images/spanex-treated/11.png';
import treatedDay14 from 'src/components/home/images/spanex-treated/14.png';

import untreatedDay0 from 'src/components/home/images/untreated/0.png';
import untreatedDay3 from 'src/components/home/images/untreated/3.png';
import untreatedDay7 from 'src/components/home/images/untreated/7.png';
import untreatedDay11 from 'src/components/home/images/untreated/11.png';
import untreatedDay14 from 'src/components/home/images/untreated/14.png';

const BeforeAfterComparison = () => {
  // Core state variables as per template requirements
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Component-specific state
  const [activeTab, setActiveTab] = useState(14); // Using activeTab instead of currentDay for consistency
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  
  // Days to display in the comparison
  const days = [0, 3, 7, 11, 14];

  // Toggle function for expandable items
  const toggleFeature = (id) => {
    setExpandedFeature(prevId => prevId === id ? null : id);
  };

  // Track window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Determine if we should use stacked layout on small screens
  const useStackedLayout = windowWidth < 600;

  // Intersection Observer for scroll animations
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
  
  // Get the correct image based on active tab (day)
  const getTreatedImage = () => {
    switch(activeTab) {
      case 0: return treatedDay0;
      case 3: return treatedDay3;
      case 7: return treatedDay7;
      case 11: return treatedDay11;
      case 14: return treatedDay14;
      default: return treatedDay14;
    }
  };

  const getUntreatedImage = () => {
    switch(activeTab) {
      case 0: return untreatedDay0;
      case 3: return untreatedDay3;
      case 7: return untreatedDay7;
      case 11: return untreatedDay11;
      case 14: return untreatedDay14;
      default: return untreatedDay14;
    }
  };

  // Observations data for expandable features
  const observationFeatures = [
    {
      id: 'treated',
      title: 'Spanex Treated',
      icon: '🍇',
      description: 'Berries treated with our proprietary formula',
      details: [
        ...(activeTab <= 3 ? ['Vibrant color and firmness maintained'] : []),
        ...(activeTab > 3 ? ['Excellent color retention'] : []),
        ...(activeTab <= 7 ? ['No visible spoilage'] : []),
        ...(activeTab > 7 && activeTab <= 11 ? ['Minimal moisture loss'] : []),
        ...(activeTab > 11 ? ['Still marketable quality'] : []),
        ...(activeTab > 7 ? ['Texture remains firm'] : []),
        ...(activeTab > 11 ? ['Some minor color changes'] : []),
        ...(activeTab > 3 ? ['Low microbial activity'] : [])
      ]
    },
    {
      id: 'untreated',
      title: 'Untreated Control',
      icon: '🫐',
      description: 'Standard berries without preservation treatment',
      details: [
        ...(activeTab <= 3 ? ['Beginning to lose firmness'] : []),
        ...(activeTab > 3 ? ['Significant color degradation'] : []),
        ...(activeTab > 3 ? ['Visible moisture loss'] : []),
        ...(activeTab > 7 ? ['Mold spots appearing'] : []),
        ...(activeTab > 7 ? ['Texture becoming soft'] : []),
        ...(activeTab > 11 ? ['No longer marketable'] : []),
        ...(activeTab > 11 ? ['Significant shrinkage'] : []),
        ...(activeTab > 7 ? ['High microbial activity'] : [])
      ]
    }
  ];

  return (
    // <section className="comparison-section" id="results">
    //   {/* 1. Section Header */}
    //   <div className="comparison-section__header">
    //     <h2 className="comparison-section__title">See the Difference</h2>
    //     <p className="comparison-section__subtitle">
    //       Visible proof of Spanex's effectiveness in extending produce shelf life
    //     </p>
    //   </div>

      <section className="tech-section" id="technology">
      {/* 1. Section Header */}
      <div className="tech-section__header">
        <h2 className="tech-section__title">
        See the Difference
        </h2>
        <p className="tech-section__subtitle">
          Visible proof of Spanex's effectiveness in extending produce shelf life
        </p>
      </div>


      {/* 2. Main Content Container */}
      <div className="container">
        <div 
          ref={sectionRef}
          className={`comparison-section__container ${isVisible ? 'visible' : ''}`}
        >
          <div className="comparison-section__content-card">
            {/* Text content section */}
            <div className="comparison-section__text-container">
              <p className="comparison-section__text">
                Compare blueberries treated with <span className="comparison-section__highlight">Spanex</span> versus 
                <span className="comparison-section__highlight--secondary"> untreated control samples</span> over a 14-day period.
              </p>
            </div>
            
            {/* Image comparison viewer - Moved above tabs */}
            <div className="comparison-section__viewer">
              <h3 className="comparison-section__viewer-title">Blueberry Comparison at Day {activeTab}</h3>
              
              <div className="comparison-section__image-container">
                {/* Header bar */}
                <div className="comparison-section__headers">
                  <div className="comparison-section__header comparison-section__header--treated">
                    SPANEX TREATED
                  </div>
                  <div className="comparison-section__header comparison-section__header--untreated">
                    UNTREATED
                  </div>
                </div>
                
                {/* Image container */}
                <div className={`comparison-section__images ${useStackedLayout ? 'comparison-section__images--stacked' : ''}`}>
                  {/* Left/Top side (Treated) */}
                  <div className="comparison-section__image-wrapper comparison-section__image-wrapper--treated">
                    <img
                      src={getTreatedImage()}
                      alt={`Spanex Treated Blueberry at Day ${activeTab}`}
                      className="comparison-section__image"
                    />
                    
                    {/* Day indicator overlay */}
                    <div className="comparison-section__day-badge">
                      Day {activeTab}
                    </div>
                  </div>
                  
                  {/* Right/Bottom side (Untreated) */}
                  <div className="comparison-section__image-wrapper comparison-section__image-wrapper--untreated">
                    <img
                      src={getUntreatedImage()}
                      alt={`Untreated Control Blueberry at Day ${activeTab}`}
                      className="comparison-section__image"
                    />
                  </div>
                  
                  {/* Static divider line - only show in row layout */}
                  {!useStackedLayout && (
                    <div className="comparison-section__divider"></div>
                  )}
                </div>
                
                <div className="comparison-section__caption">
                  Side-by-side comparison of treated and untreated berries
                </div>
              </div>
            </div>
            
            {/* Day selector tabs - moved below image viewer to match AboutSection style */}
            <div className="comparison-section__tabs">
              {days.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => setActiveTab(day)}
                  className={`comparison-section__tab-button ${activeTab === day ? 'active' : ''}`}
                  aria-selected={activeTab === day}
                  role="tab"
                >
                  Day {day}
                </button>
              ))}
            </div>
            
            {/* Observations section using expandable features like AboutSection */}
            <div className="comparison-section__tab-content" role="tabpanel">
              <div className="comparison-section__observations">
                <h3 className="comparison-section__observations-title">Observations at Day {activeTab}</h3>
                
                <div className="comparison-section__offerings-list">
                  {observationFeatures.map(feature => (
                    <div 
                      key={feature.id}
                      className={`comparison-section__offering ${
                        expandedFeature === feature.id ? 'comparison-section__offering--expanded' : ''
                      }`}
                    >
                      <button 
                        className="comparison-section__offering-header"
                        onClick={() => toggleFeature(feature.id)}
                        aria-expanded={expandedFeature === feature.id}
                        aria-controls={`offering-details-${feature.id}`}
                      >
                        <div className="comparison-section__offering-icon">
                          <span aria-hidden="true">{feature.icon}</span>
                        </div>
                        <div className="comparison-section__offering-info">
                          <h4 className="comparison-section__offering-title">{feature.title}</h4>
                          <p className="comparison-section__offering-description">{feature.description}</p>
                        </div>
                        <div className="comparison-section__offering-toggle">
                          <i className={`fas fa-chevron-down ${
                            expandedFeature === feature.id ? 'comparison-section__toggle-icon--expanded' : ''
                          }`}></i>
                        </div>
                      </button>
                      
                      {/* Conditionally rendered details section */}
                      {expandedFeature === feature.id && (
                        <div 
                          className="comparison-section__offering-details"
                          id={`offering-details-${feature.id}`}
                        >
                          <ul className="comparison-section__details-list">
                            {feature.details.map((detail, index) => (
                              <li key={index} className="comparison-section__details-item">{detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default BeforeAfterComparison;