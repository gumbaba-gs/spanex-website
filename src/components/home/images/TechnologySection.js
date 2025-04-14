import React, { useState, useEffect, useRef } from 'react';
import 'src/components/home/TechnologySection.css';

const TechnologySection = () => {
  // Core state variables as per template requirements
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // For tabbed sections
  const [activeTab, setActiveTab] = useState('respiration');
  
  // For expandable items
  const [expandedFeature, setExpandedFeature] = useState(null);
  
  // Toggle function for expandable items
  const toggleFeature = (id) => {
    setExpandedFeature(prevId => prevId === id ? null : id);
  };
  
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
  
  // Mechanism features data
  const mechanismTypes = [
    {
      id: 'respiration',
      title: 'Respiration Control',
      features: [
        { 
          id: 'barrier-feature', 
          title: 'Semi-Permeable Barrier', 
          icon: '🍃',
          description: 'Creates a protective coating on produce surface',
          details: [
            'Regulates gas exchange and slows down ethylene-induced ripening',
            'Creates semi-permeable barrier on fruit surface',
            'Reduces CO₂ and ethylene production',
            'Slows metabolic processes without anaerobic conditions'
          ]
        },
        { 
          id: 'ethylene-feature', 
          title: 'Ethylene Management', 
          icon: '🌱',
          description: 'Controls the ethylene gas that triggers ripening',
          details: [
            'Suppresses ethylene production at cellular level',
            'Blocks ethylene receptors on fruit surface',
            'Prevents ripening cascade activation',
            'Maintains fruit in pre-climacteric state longer'
          ]
        }
      ]
    },
    {
      id: 'moisture',
      title: 'Moisture Optimization',
      features: [
        { 
          id: 'hydration-feature', 
          title: 'Hydration Balance', 
          icon: '💧',
          description: 'Prevents dehydration while avoiding excess moisture',
          details: [
            'Creates optimal moisture equilibrium',
            'Prevents fruit shriveling and weight loss',
            'Balances water activity to deter microbial growth',
            'Maintains cell turgor pressure for firmness'
          ]
        },
        { 
          id: 'transpiration-feature', 
          title: 'Transpiration Control', 
          icon: '💦',
          description: 'Regulates water vapor movement through produce skin',
          details: [
            'Slows moisture loss through transpiration',
            'Prevents condensation formation inside packaging',
            'Optimizes humidity microenvironment',
            'Maintains crisp texture in leafy vegetables'
          ]
        }
      ]
    },
    {
      id: 'microbial',
      title: 'Microbial Inhibition',
      features: [
        { 
          id: 'ph-feature', 
          title: 'pH Modification', 
          icon: '🦠',
          description: 'Creates inhospitable environment for bacteria and fungi',
          details: [
            'Lowers surface pH to inhibit microbial proliferation',
            'Creates natural antimicrobial barrier',
            'Prevents spoilage organism colonization',
            'Targets specific decay-causing pathogens'
          ]
        },
        { 
          id: 'bioactive-feature', 
          title: 'Bioactive Compounds', 
          icon: '🧪',
          description: 'Uses plant-derived compounds with antimicrobial properties',
          details: [
            'Incorporates naturally antimicrobial plant extracts',
            'Disrupts microbial cell membranes',
            'Inhibits key microbial enzymes',
            'Specifically targets common produce pathogens'
          ]
        }
      ]
    },
    {
      id: 'oxidation',
      title: 'Oxidation Prevention',
      features: [
        { 
          id: 'enzyme-feature', 
          title: 'Enzyme Inhibition', 
          icon: '⚛️',
          description: 'Prevents enzymatic browning reactions',
          details: [
            'Neutralizes free radicals that damage cell membranes',
            'Inhibits polyphenol oxidase enzymatic activity',
            'Preserves anthocyanins responsible for color',
            'Maintains nutritional value and antioxidant content'
          ]
        },
        { 
          id: 'antioxidant-feature', 
          title: 'Antioxidant Protection', 
          icon: '🍎',
          description: 'Scavenges free radicals that cause oxidative damage',
          details: [
            'Incorporates natural antioxidant compounds',
            'Prevents lipid peroxidation in cell membranes',
            'Maintains flavor compounds vulnerable to oxidation',
            'Preserves nutritional quality during storage'
          ]
        }
      ]
    }
  ];

  return (
    <section className="tech-section" id="technology">
      {/* 1. Section Header */}
      <div className="tech-section__header">
        <h2 className="tech-section__title">
          Our Multi-Mechanism Technology
        </h2>
        <p className="tech-section__subtitle">
          Spanex preservatives work through four synergistic mechanisms that provide comprehensive 
          protection against all major causes of produce deterioration.
        </p>
      </div>

      {/* 2. Main Content Container */}
      <div className="container">
        <div 
          ref={sectionRef}
          className={`tech-section__container ${isVisible ? 'visible' : ''}`}
        >
          <div className="tech-section__content-card">
            {/* Text content section */}
            <div className="tech-section__text-container">
              <p className="tech-section__text">
                Our patented <span className="tech-section__highlight">Spanex Technology</span> creates a 
                <span className="tech-section__highlight--secondary"> multi-faceted protective system</span> that
                addresses all major causes of produce deterioration simultaneously.
              </p>
            </div>
            
            {/* Tab navigation - Updated to match AboutSection style */}
            <div className="tech-section__tabs">
              {mechanismTypes.map((mechanismType) => (
                <button
                  key={mechanismType.id}
                  type="button"
                  onClick={() => setActiveTab(mechanismType.id)}
                  className={`tech-section__tab-button ${activeTab === mechanismType.id ? 'active' : ''}`}
                  aria-selected={activeTab === mechanismType.id}
                  role="tab"
                >
                  <span className="tech-section__tab-icon">{mechanismType.features[0].icon}</span>
                  {mechanismType.title}
                </button>
              ))}
            </div>
            
            {/* Tab content - Using exact same pattern as AboutSection */}
            <div className="tech-section__tab-content" role="tabpanel">
              {activeTab === 'respiration' && (
                <div className="tech-section__mechanisms">
                  <h3 className="tech-section__mechanisms-title">About Respiration Control Mechanisms</h3>
                  
                  <div className="tech-section__offerings-list">
                    {mechanismTypes[0].features.map(feature => (
                      <div 
                        key={feature.id}
                        className={`tech-section__offering ${
                          expandedFeature === feature.id ? 'tech-section__offering--expanded' : ''
                        }`}
                      >
                        <button 
                          className="tech-section__offering-header"
                          onClick={() => toggleFeature(feature.id)}
                          aria-expanded={expandedFeature === feature.id}
                          aria-controls={`offering-details-${feature.id}`}
                        >
                          <div className="tech-section__offering-icon">
                            <span aria-hidden="true">{feature.icon}</span>
                          </div>
                          <div className="tech-section__offering-info">
                            <h4 className="tech-section__offering-title">{feature.title}</h4>
                            <p className="tech-section__offering-description">{feature.description}</p>
                          </div>
                          <div className="tech-section__offering-toggle">
                            <i className={`fas fa-chevron-down ${
                              expandedFeature === feature.id ? 'tech-section__toggle-icon--expanded' : ''
                            }`}></i>
                          </div>
                        </button>
                        
                        {/* Conditionally rendered details section */}
                        {expandedFeature === feature.id && (
                          <div 
                            className="tech-section__offering-details"
                            id={`offering-details-${feature.id}`}
                          >
                            <ul className="tech-section__details-list">
                              {feature.details.map((detail, index) => (
                                <li key={index} className="tech-section__details-item">{detail}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'moisture' && (
                <div className="tech-section__mechanisms">
                  <h3 className="tech-section__mechanisms-title">About Moisture Optimization Mechanisms</h3>
                  
                  <div className="tech-section__offerings-list">
                    {mechanismTypes[1].features.map(feature => (
                      <div 
                        key={feature.id}
                        className={`tech-section__offering ${
                          expandedFeature === feature.id ? 'tech-section__offering--expanded' : ''
                        }`}
                      >
                        <button 
                          className="tech-section__offering-header"
                          onClick={() => toggleFeature(feature.id)}
                          aria-expanded={expandedFeature === feature.id}
                          aria-controls={`offering-details-${feature.id}`}
                        >
                          <div className="tech-section__offering-icon">
                            <span aria-hidden="true">{feature.icon}</span>
                          </div>
                          <div className="tech-section__offering-info">
                            <h4 className="tech-section__offering-title">{feature.title}</h4>
                            <p className="tech-section__offering-description">{feature.description}</p>
                          </div>
                          <div className="tech-section__offering-toggle">
                            <i className={`fas fa-chevron-down ${
                              expandedFeature === feature.id ? 'tech-section__toggle-icon--expanded' : ''
                            }`}></i>
                          </div>
                        </button>
                        
                        {expandedFeature === feature.id && (
                          <div 
                            className="tech-section__offering-details"
                            id={`offering-details-${feature.id}`}
                          >
                            <ul className="tech-section__details-list">
                              {feature.details.map((detail, index) => (
                                <li key={index} className="tech-section__details-item">{detail}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'microbial' && (
                <div className="tech-section__mechanisms">
                  <h3 className="tech-section__mechanisms-title">About Microbial Inhibition Mechanisms</h3>
                  
                  <div className="tech-section__offerings-list">
                    {mechanismTypes[2].features.map(feature => (
                      <div 
                        key={feature.id}
                        className={`tech-section__offering ${
                          expandedFeature === feature.id ? 'tech-section__offering--expanded' : ''
                        }`}
                      >
                        <button 
                          className="tech-section__offering-header"
                          onClick={() => toggleFeature(feature.id)}
                          aria-expanded={expandedFeature === feature.id}
                          aria-controls={`offering-details-${feature.id}`}
                        >
                          <div className="tech-section__offering-icon">
                            <span aria-hidden="true">{feature.icon}</span>
                          </div>
                          <div className="tech-section__offering-info">
                            <h4 className="tech-section__offering-title">{feature.title}</h4>
                            <p className="tech-section__offering-description">{feature.description}</p>
                          </div>
                          <div className="tech-section__offering-toggle">
                            <i className={`fas fa-chevron-down ${
                              expandedFeature === feature.id ? 'tech-section__toggle-icon--expanded' : ''
                            }`}></i>
                          </div>
                        </button>
                        
                        {expandedFeature === feature.id && (
                          <div 
                            className="tech-section__offering-details"
                            id={`offering-details-${feature.id}`}
                          >
                            <ul className="tech-section__details-list">
                              {feature.details.map((detail, index) => (
                                <li key={index} className="tech-section__details-item">{detail}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'oxidation' && (
                <div className="tech-section__mechanisms">
                  <h3 className="tech-section__mechanisms-title">About Oxidation Prevention Mechanisms</h3>
                  
                  <div className="tech-section__offerings-list">
                    {mechanismTypes[3].features.map(feature => (
                      <div 
                        key={feature.id}
                        className={`tech-section__offering ${
                          expandedFeature === feature.id ? 'tech-section__offering--expanded' : ''
                        }`}
                      >
                        <button 
                          className="tech-section__offering-header"
                          onClick={() => toggleFeature(feature.id)}
                          aria-expanded={expandedFeature === feature.id}
                          aria-controls={`offering-details-${feature.id}`}
                        >
                          <div className="tech-section__offering-icon">
                            <span aria-hidden="true">{feature.icon}</span>
                          </div>
                          <div className="tech-section__offering-info">
                            <h4 className="tech-section__offering-title">{feature.title}</h4>
                            <p className="tech-section__offering-description">{feature.description}</p>
                          </div>
                          <div className="tech-section__offering-toggle">
                            <i className={`fas fa-chevron-down ${
                              expandedFeature === feature.id ? 'tech-section__toggle-icon--expanded' : ''
                            }`}></i>
                          </div>
                        </button>
                        
                        {expandedFeature === feature.id && (
                          <div 
                            className="tech-section__offering-details"
                            id={`offering-details-${feature.id}`}
                          >
                            <ul className="tech-section__details-list">
                              {feature.details.map((detail, index) => (
                                <li key={index} className="tech-section__details-item">{detail}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologySection;

