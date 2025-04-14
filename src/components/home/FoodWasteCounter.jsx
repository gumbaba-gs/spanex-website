import React, { useEffect, useState, useRef } from 'react';
import './FoodWasteCounter.css';

const FoodWasteCounter = () => {
  // Tab state for interaction
  const [activeTab, setActiveTab] = useState('impact');
  const [expandedFeature, setExpandedFeature] = useState('profit');
  const [counterValue, setCounterValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  // Define the startRealTimeCounter function
  const startRealTimeCounter = (baseValue) => {
    const perSecond = baseValue / (365 * 24 * 60 * 60);
    const updateInterval = 100; // ms

    const intervalId = setInterval(() => {
      setCounterValue(prev => {
        const newValue = prev + perSecond * (updateInterval / 1000);
        return newValue;
      });
    }, updateInterval);

    return intervalId; // Return the interval ID for cleanup
  };

  // Setup intersection observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Add slight delay before showing counter for better UX
          setTimeout(() => {
            setIsCounterVisible(true);
          }, 300);
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

  // Animation and counter logic
  useEffect(() => {
    if (!isCounterVisible) return;

    if (!hasAnimated.current) {
      hasAnimated.current = true;
      
      const targetValue = 3100000000; // $3.1 billion
      const duration = 2000; // 2 seconds
      const interval = 50; // update every 50ms
      const steps = duration / interval;
      
      let currentStep = 0;
      
      const updateCounter = setInterval(() => {
        currentStep++;
        
        // Easing function for more natural animation
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        const newValue = Math.min(targetValue, Math.floor(targetValue * easedProgress));
        setCounterValue(newValue);
        
        if (currentStep >= steps) {
          clearInterval(updateCounter);
          
          // Start real-time counter after initial animation
          const intervalId = startRealTimeCounter(targetValue);
          
          // Clean up the interval when component unmounts
          return () => clearInterval(intervalId);
        }
      }, interval);
      
      // Clean up the interval when component unmounts or dependencies change
      return () => clearInterval(updateCounter);
    }
  }, [isCounterVisible]);

  // Format the counter value with commas for thousands separators
  const formatCurrency = (value) => {
    return '$' + Math.floor(value).toLocaleString();
  };

  return (
    <section className="foodwaste-section" id="problem">
      {/* Section header */}
      <div className="foodwaste-section__header">
        <h2 className="foodwaste-section__title">The Business Challenge We Solve</h2>
        <p className="foodwaste-section__subtitle">
          Food waste directly impacts profit margins while reducing product availability and quality for end consumers
        </p>
      </div>
      
      {/* Main content container - match AboutSection structure exactly */}
      <div className="container">
        <div 
          ref={sectionRef}
          className={`foodwaste-section__container ${isVisible ? 'visible' : ''}`}
        >
          <div className="foodwaste-section__content-card">
            {/* Main text container - same as AboutSection */}
            <div className="foodwaste-section__text-container">
              <p className="foodwaste-section__text">
                The fresh produce industry faces <span className="foodwaste-section__highlight">annual losses of over {formatCurrency(counterValue)}</span> due to spoilage. With <span className="foodwaste-section__highlight--secondary">40-50% of harvested produce</span> lost before reaching consumers, this represents a <span className="foodwaste-section__highlight--accent">major financial challenge</span> for packhouses, distributors, and retailers.
              </p>
              
              <p className="foodwaste-section__text">
                These losses translate to <span className="foodwaste-section__highlight">approximately $12,500 per truckload</span> and can amount to <span className="foodwaste-section__highlight--secondary">$3.8 million annually</span> for a single distribution center. This significantly impacts bottom-line profitability while creating logistical inefficiencies.
              </p>
              
              <p className="foodwaste-section__text">
                <span className="foodwaste-section__highlight">Spanex Shelf Max</span> technology directly addresses this challenge by <span className="foodwaste-section__highlight--secondary">extending shelf life by 3-5×</span> and potentially <span className="foodwaste-section__highlight--accent">reducing waste by up to 75%</span>, offering significant ROI for businesses throughout the supply chain.
              </p>
            </div>
            
            {/* Tab navigation - same as AboutSection */}
            <div className="foodwaste-section__tabs">
              <button
                type="button"
                onClick={() => setActiveTab('impact')}
                className={`foodwaste-section__tab-button ${activeTab === 'impact' ? 'active' : ''}`}
                aria-selected={activeTab === 'impact'}
                role="tab"
              >
                Business Impact
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('roi')}
                className={`foodwaste-section__tab-button ${activeTab === 'roi' ? 'active' : ''}`}
                aria-selected={activeTab === 'roi'}
                role="tab"
              >
                ROI Potential
              </button>
            </div>
            
            {/* Tab content container - same as AboutSection */}
            <div className="foodwaste-section__tab-content" role="tabpanel">
              {activeTab === 'impact' && (
                <div className="foodwaste-section__offerings">
                  <h3 className="foodwaste-section__offerings-title">Key Business Challenges</h3>
                  <div className="foodwaste-section__offerings-list">
                    {/* Reduced Profit Margins */}
                    <div className={`foodwaste-section__offering ${expandedFeature === 'profit' ? 'foodwaste-section__offering--expanded' : ''}`}>
                      <button
                        className="foodwaste-section__offering-header"
                        onClick={() => setExpandedFeature(expandedFeature === 'profit' ? null : 'profit')}
                        aria-expanded={expandedFeature === 'profit'}
                        aria-controls="offering-details-profit"
                      >
                        <div className="foodwaste-section__offering-icon">
                          <span aria-hidden="true">📉</span>
                        </div>
                        <div className="foodwaste-section__offering-info">
                          <h4 className="foodwaste-section__offering-title">Reduced Profit Margins</h4>
                          <p className="foodwaste-section__offering-description">Revenue losses from unsold inventory</p>
                        </div>
                        <div className="foodwaste-section__offering-toggle">
                          <i className={`fas fa-chevron-down ${expandedFeature === 'profit' ? 'foodwaste-section__toggle-icon--expanded' : ''}`}></i>
                        </div>
                      </button>
                      {expandedFeature === 'profit' && (
                        <div className="foodwaste-section__offering-details" id="offering-details-profit">
                          <ul className="foodwaste-section__details-list">
                            <li className="foodwaste-section__details-item">15-20% reduction in profitability due to spoilage</li>
                            <li className="foodwaste-section__details-item">Higher operational costs without corresponding revenue</li>
                            <li className="foodwaste-section__details-item">Unpredictable financial performance across seasons</li>
                          </ul>
                        </div>
                      )}
                    </div>
                    {/* Transportation Costs */}
                    <div className={`foodwaste-section__offering ${expandedFeature === 'transport' ? 'foodwaste-section__offering--expanded' : ''}`}>
                      <button
                        className="foodwaste-section__offering-header"
                        onClick={() => setExpandedFeature(expandedFeature === 'transport' ? null : 'transport')}
                        aria-expanded={expandedFeature === 'transport'}
                        aria-controls="offering-details-transport"
                      >
                        <div className="foodwaste-section__offering-icon">
                          <span aria-hidden="true">🚚</span>
                        </div>
                        <div className="foodwaste-section__offering-info">
                          <h4 className="foodwaste-section__offering-title">Transportation Costs</h4>
                          <p className="foodwaste-section__offering-description">Expenses for products that never sell</p>
                        </div>
                        <div className="foodwaste-section__offering-toggle">
                          <i className={`fas fa-chevron-down ${expandedFeature === 'transport' ? 'foodwaste-section__toggle-icon--expanded' : ''}`}></i>
                        </div>
                      </button>
                      {expandedFeature === 'transport' && (
                        <div className="foodwaste-section__offering-details" id="offering-details-transport">
                          <ul className="foodwaste-section__details-list">
                            <li className="foodwaste-section__details-item">Wasted fuel and labor for unsold shipments</li>
                            <li className="foodwaste-section__details-item">Increased carbon footprint from unnecessary logistics</li>
                          </ul>
                        </div>
                      )}
                    </div>
                    {/* Limited Shelf Space */}
                    <div className={`foodwaste-section__offering ${expandedFeature === 'shelf' ? 'foodwaste-section__offering--expanded' : ''}`}>
                      <button
                        className="foodwaste-section__offering-header"
                        onClick={() => setExpandedFeature(expandedFeature === 'shelf' ? null : 'shelf')}
                        aria-expanded={expandedFeature === 'shelf'}
                        aria-controls="offering-details-shelf"
                      >
                        <div className="foodwaste-section__offering-icon">
                          <span aria-hidden="true">🏪</span>
                        </div>
                        <div className="foodwaste-section__offering-info">
                          <h4 className="foodwaste-section__offering-title">Limited Shelf Space</h4>
                          <p className="foodwaste-section__offering-description">Valuable display area with short-lived products</p>
                        </div>
                        <div className="foodwaste-section__offering-toggle">
                          <i className={`fas fa-chevron-down ${expandedFeature === 'shelf' ? 'foodwaste-section__toggle-icon--expanded' : ''}`}></i>
                        </div>
                      </button>
                      {expandedFeature === 'shelf' && (
                        <div className="foodwaste-section__offering-details" id="offering-details-shelf">
                          <ul className="foodwaste-section__details-list">
                            <li className="foodwaste-section__details-item">Lost sales opportunities due to expired stock</li>
                            <li className="foodwaste-section__details-item">Reduced customer satisfaction from poor product quality</li>
                          </ul>
                        </div>
                      )}
                    </div>
                    {/* Disposal Expenses */}
                    <div className={`foodwaste-section__offering ${expandedFeature === 'disposal' ? 'foodwaste-section__offering--expanded' : ''}`}>
                      <button
                        className="foodwaste-section__offering-header"
                        onClick={() => setExpandedFeature(expandedFeature === 'disposal' ? null : 'disposal')}
                        aria-expanded={expandedFeature === 'disposal'}
                        aria-controls="offering-details-disposal"
                      >
                        <div className="foodwaste-section__offering-icon">
                          <span aria-hidden="true">♻️</span>
                        </div>
                        <div className="foodwaste-section__offering-info">
                          <h4 className="foodwaste-section__offering-title">Disposal Expenses</h4>
                          <p className="foodwaste-section__offering-description">Waste management and sustainability issues</p>
                        </div>
                        <div className="foodwaste-section__offering-toggle">
                          <i className={`fas fa-chevron-down ${expandedFeature === 'disposal' ? 'foodwaste-section__toggle-icon--expanded' : ''}`}></i>
                        </div>
                      </button>
                      {expandedFeature === 'disposal' && (
                        <div className="foodwaste-section__offering-details" id="offering-details-disposal">
                          <ul className="foodwaste-section__details-list">
                            <li className="foodwaste-section__details-item">Rising landfill and composting costs</li>
                            <li className="foodwaste-section__details-item">Negative impact on sustainability goals</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'roi' && (
                <div className="foodwaste-section__offerings">
                  <h3 className="foodwaste-section__offerings-title">ROI Potential</h3>
                  <div className="foodwaste-section__offerings-list">
                    {/* Extended Shelf Life */}
                    <div className={`foodwaste-section__offering ${expandedFeature === 'shelfLife' ? 'foodwaste-section__offering--expanded' : ''}`}>
                      <button
                        className="foodwaste-section__offering-header"
                        onClick={() => setExpandedFeature(expandedFeature === 'shelfLife' ? null : 'shelfLife')}
                        aria-expanded={expandedFeature === 'shelfLife'}
                        aria-controls="offering-details-shelfLife"
                      >
                        <div className="foodwaste-section__offering-icon">
                          <span aria-hidden="true">⏳</span>
                        </div>
                        <div className="foodwaste-section__offering-info">
                          <h4 className="foodwaste-section__offering-title">3-5× Extended Shelf Life</h4>
                          <p className="foodwaste-section__offering-description">Longer product viability throughout the supply chain</p>
                        </div>
                        <div className="foodwaste-section__offering-toggle">
                          <i className={`fas fa-chevron-down ${expandedFeature === 'shelfLife' ? 'foodwaste-section__toggle-icon--expanded' : ''}`}></i>
                        </div>
                      </button>
                      {expandedFeature === 'shelfLife' && (
                        <div className="foodwaste-section__offering-details" id="offering-details-shelfLife">
                          <ul className="foodwaste-section__details-list">
                            <li className="foodwaste-section__details-item">Reduces spoilage during transit and storage</li>
                            <li className="foodwaste-section__details-item">Enables access to distant markets</li>
                            <li className="foodwaste-section__details-item">Improves inventory management</li>
                          </ul>
                        </div>
                      )}
                    </div>
                    {/* Profit Margin Improvement */}
                    <div className={`foodwaste-section__offering ${expandedFeature === 'margin' ? 'foodwaste-section__offering--expanded' : ''}`}>
                      <button
                        className="foodwaste-section__offering-header"
                        onClick={() => setExpandedFeature(expandedFeature === 'margin' ? null : 'margin')}
                        aria-expanded={expandedFeature === 'margin'}
                        aria-controls="offering-details-margin"
                      >
                        <div className="foodwaste-section__offering-icon">
                          <span aria-hidden="true">💹</span>
                        </div>
                        <div className="foodwaste-section__offering-info">
                          <h4 className="foodwaste-section__offering-title">10-15% Profit Margin Improvement</h4>
                          <p className="foodwaste-section__offering-description">Decreased losses lead to increased profitability</p>
                        </div>
                        <div className="foodwaste-section__offering-toggle">
                          <i className={`fas fa-chevron-down ${expandedFeature === 'margin' ? 'foodwaste-section__toggle-icon--expanded' : ''}`}></i>
                        </div>
                      </button>
                      {expandedFeature === 'margin' && (
                        <div className="foodwaste-section__offering-details" id="offering-details-margin">
                          <ul className="foodwaste-section__details-list">
                            <li className="foodwaste-section__details-item">Lower write-offs from unsold inventory</li>
                            <li className="foodwaste-section__details-item">Higher sell-through rates</li>
                            <li className="foodwaste-section__details-item">Improved bottom-line performance</li>
                          </ul>
                        </div>
                      )}
                    </div>
                    {/* Reduction in Spoilage Claims */}
                    <div className={`foodwaste-section__offering ${expandedFeature === 'claims' ? 'foodwaste-section__offering--expanded' : ''}`}>
                      <button
                        className="foodwaste-section__offering-header"
                        onClick={() => setExpandedFeature(expandedFeature === 'claims' ? null : 'claims')}
                        aria-expanded={expandedFeature === 'claims'}
                        aria-controls="offering-details-claims"
                      >
                        <div className="foodwaste-section__offering-icon">
                          <span aria-hidden="true">📉</span>
                        </div>
                        <div className="foodwaste-section__offering-info">
                          <h4 className="foodwaste-section__offering-title">25-40% Reduction in Spoilage Claims</h4>
                          <p className="foodwaste-section__offering-description">Fewer rejections from distributors and retailers</p>
                        </div>
                        <div className="foodwaste-section__offering-toggle">
                          <i className={`fas fa-chevron-down ${expandedFeature === 'claims' ? 'foodwaste-section__toggle-icon--expanded' : ''}`}></i>
                        </div>
                      </button>
                      {expandedFeature === 'claims' && (
                        <div className="foodwaste-section__offering-details" id="offering-details-claims">
                          <ul className="foodwaste-section__details-list">
                            <li className="foodwaste-section__details-item">Reduced returns and credits</li>
                            <li className="foodwaste-section__details-item">Stronger relationships with buyers</li>
                            <li className="foodwaste-section__details-item">Lower risk of contract penalties</li>
                          </ul>
                        </div>
                      )}
                    </div>
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

export default FoodWasteCounter;