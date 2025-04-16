// src/components/home/AboutSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import './AboutSection.css';
import StandardizedTabs from '../common/StandardizedTabs';


const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Core offerings data
  const coreOfferings = [
    { 
      id: 'preservation', 
      title: 'Shelf Max Technology', 
      icon: '🍎',
      description: 'Our patented powder formula for extending produce shelf life',
      details: [
        'Extends shelf life by 3-5x for various produce types',
        'Maintains original taste, texture, and nutritional profile',
        'Reduces waste throughout the supply chain',
        'Works with both organic and conventional produce'
      ]
    },
    { 
      id: 'global', 
      title: 'Regulatory Compliance', 
      icon: '🌐',
      description: 'GRAS-compliant ingredients for food safety',
      details: [
        'GRAS (Generally Recognized As Safe) ingredients',
        'Complies with FDA and global regulatory standards',
        'Transparent ingredient disclosure',
        'Extensive safety testing and documentation'
      ]
    },
    { 
      id: 'organic', 
      title: 'Organic Compatibility', 
      icon: '🌱',
      description: 'Formulations suitable for organic produce',
      details: [
        'Compatible with organic certification requirements',
        'Plant-based, food-derived ingredients',
        'No synthetic chemicals or preservatives',
        'Supports organic farming and handling practices'
      ]
    },
    { 
      id: 'produce', 
      title: 'Produce-Specific Solutions', 
      icon: '🥑',
      description: 'Tailored formulations for different produce types',
      details: [
        'Berry Fresh - specifically formulated for all berry varieties',
        'Avocado Extend - optimized for avocado preservation',
        'Additional formulations for other high-value produce',
        'Each solution targets specific preservation challenges'
      ]
    },
    { 
      id: 'application', 
      title: 'Simple Application', 
      icon: '🧪',
      description: 'Easy integration with existing packing processes',
      details: [
        'Simple spray or dip application methods',
        'Compatible with standard packhouse equipment',
        'Low training requirements for implementation',
        'Cost-effective application process'
      ]
    }
  ];

  // Company metrics for the overview tab
  const companyMetrics = [
    { value: 'Patented', label: 'Technology' },
    { value: '3-5×', label: 'Shelf Life Extension' },
    { value: '75%', label: 'Potential Waste Reduction' },
    { value: 'Testing Phase', label: 'Not Yet Launched' }
  ];

  // Tabs configuration for the standardized component
  const tabs = [
    { id: 'overview', title: 'Company Overview' },
    { id: 'offerings', title: 'Product Line' }
  ];

  // Toggle feature expansion
  const toggleFeature = (id) => {
    setExpandedFeature(prevId => prevId === id ? null : id);
  };
  
  // Set up intersection observer for animation on scroll
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
    <section className="about-section" id="about">
      {/* Section header */}
      <div className="about-section__header">
        <h2 className="about-section__title">About Spanex Sciences</h2>
        <p className="about-section__subtitle">
          Pioneering shelf life extension solutions for packhouses, growers, and retailers
        </p>
      </div>
      
      {/* Main content container */}
      <div className="container">
        <div 
          ref={sectionRef}
          className={`about-section__container ${isVisible ? 'visible' : ''}`}
        >
          <div className="about-section__content-card">
            {/* Company description */}
            <div className="about-section__text-container">
              <p className="about-section__text">
                Spanex Sciences is a <span className="about-section__highlight">food technology startup</span> founded by a team of experts who have developed and patented <span className="about-section__highlight">Spanex Shelf Max</span>, an innovative powder formulation for <span className="about-section__highlight--secondary">extending the shelf life of fresh produce</span>. Our <span className="about-section__highlight--accent">proprietary technology</span> will soon be available with targeted solutions for <span className="about-section__highlight">berries, avocados, and other high-value produce</span>.
              </p>
              
              <p className="about-section__text">
                Our flagship product line, <span className="about-section__highlight">Spanex Shelf Max</span>, includes specialized formulations such as <span className="about-section__highlight">Berry Fresh</span> and <span className="about-section__highlight">Avocado Extend</span>—each designed to <span className="about-section__highlight--secondary">address the specific preservation challenges</span> of different produce types.
              </p>
              
              <p className="about-section__text">
                Developed specifically for <span className="about-section__highlight">commercial applications</span>, our solutions address the <span className="about-section__highlight--accent">critical challenge of food waste</span> that impacts profit margins throughout the supply chain. Each formulation is designed to <span className="about-section__highlight">integrate seamlessly with existing packing processes</span> while offering significant <span className="about-section__highlight--success">ROI through reduced spoilage and extended marketable periods</span>.
              </p>
            </div>
            <div className="about-section__disclaimer">
              <p>
                <strong>Note:</strong> Our Spanex Shelf Max product line is currently in the <strong>testing phase</strong> and has <strong>not yet been launched commercially</strong>. All ingredients used are <strong>GRAS (Generally Recognized As Safe)</strong> certified.
              </p>
            </div>
            
            {/* Standardized Tab navigation */}
            <StandardizedTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              theme="alternate"
            />
            
            {/* Tab content container */}
            <div className="about-section__tab-content" role="tabpanel">
              {activeTab === 'overview' && (
                <div className="about-section__overview">
                  <div className="about-section__overview-content">
                    <h3 className="about-section__overview-title">Our Story</h3>
                    <p className="about-section__overview-text">
                      Spanex Sciences was founded by a team of innovators committed to solving the critical problem of food waste in the agricultural supply chain. After years of research and development, we've created and patented a revolutionary shelf life extension formula.
                    </p>
                    <p className="about-section__overview-text">
                      We're now preparing to launch our Spanex Shelf Max product line, targeting commercial clients like packhouses, distributors, and retailers who face significant challenges with fresh produce spoilage and waste.
                    </p>
                    
                    {/* Metrics grid with improved structure */}
                    <div className="about-section__metrics-grid">
                      {companyMetrics.map((metric, index) => (
                        <div className="about-section__metric-card" key={index}>
                          <div className="about-section__metric-value">{metric.value}</div>
                          <p className="about-section__metric-label">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'offerings' && (
                <div className="about-section__offerings">
                  <h3 className="about-section__offerings-title">Spanex Shelf Max Product Line</h3>
                  
                  {/* Offerings list with accessibility improvements */}
                  <div className="about-section__offerings-list">
                    {coreOfferings.map(offering => (
                      <div 
                        key={offering.id}
                        className={`about-section__offering ${
                          expandedFeature === offering.id ? 'about-section__offering--expanded' : ''
                        }`}
                      >
                        <button 
                          className="about-section__offering-header"
                          onClick={() => toggleFeature(offering.id)}
                          aria-expanded={expandedFeature === offering.id}
                          aria-controls={`offering-details-${offering.id}`}
                        >
                          <div className="about-section__offering-icon">
                            <span aria-hidden="true">{offering.icon}</span>
                          </div>
                          <div className="about-section__offering-info">
                            <h4 className="about-section__offering-title">{offering.title}</h4>
                            <p className="about-section__offering-description">{offering.description}</p>
                          </div>
                          <div className="about-section__offering-toggle">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2"
                              className={expandedFeature === offering.id ? 'about-section__toggle-icon--expanded' : ''}
                              style={{ transition: 'transform 0.3s ease' }}
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </div>
                        </button>
                        
                        {/* Conditionally rendered details section */}
                        {expandedFeature === offering.id && (
                          <div 
                            className="about-section__offering-details"
                            id={`offering-details-${offering.id}`}
                          >
                            <ul className="about-section__details-list">
                              {offering.details.map((detail, index) => (
                                <li key={index} className="about-section__details-item">{detail}</li>
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

export default AboutSection;