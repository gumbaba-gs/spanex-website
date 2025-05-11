// src/components/products/BeforeAfterComparison.jsx
import React, { useState, useRef, useEffect } from 'react';
import Container from '../layout/Container';
import StandardizedTabs from '../common/StandardizedTabs';
import styles from './BeforeAfterComparison.module.css';

// Import images directly to ensure they're properly bundled by webpack
import treatedDay0 from '../home/images/spanex-treated/0.png';
import treatedDay3 from '../home/images/spanex-treated/3.png';
import treatedDay7 from '../home/images/spanex-treated/7.png';
import treatedDay11 from '../home/images/spanex-treated/11.png';
import treatedDay14 from '../home/images/spanex-treated/14.png';

import untreatedDay0 from '../home/images/untreated/0.png';
import untreatedDay3 from '../home/images/untreated/3.png';
import untreatedDay7 from '../home/images/untreated/7.png';
import untreatedDay11 from '../home/images/untreated/11.png';
import untreatedDay14 from '../home/images/untreated/14.png';

/**
 * Before/After comparison component showing the effectiveness of Spanex treatment
 * over time with side-by-side images and observations
 */
const BeforeAfterComparison = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(14);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);

  const days = [0, 3, 7, 11, 14];
  const tabs = days.map(day => ({ id: day, title: `Day ${day}` }));

  const toggleFeature = (id) => {
    setExpandedFeature(prevId => prevId === id ? null : id);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const useStackedLayout = windowWidth < 600;

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

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
    <section className={styles.section} id="comparison">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>See the Difference</h2>
          <p className={styles.sectionSubtitle}>
            Visible proof of Spanex's effectiveness in extending produce shelf life
          </p>
        </div>
        
        <div
          ref={sectionRef}
          className={`${styles.container} ${isVisible ? styles.visible : ''}`}
        >
          <div className={styles.contentCard}>
            <div className={styles.textContainer}>
              <p className={styles.text}>
                Compare blueberries treated with <span className={styles.highlight}>Spanex</span> versus
                <span className={styles.highlightSecondary}> untreated control samples</span> over a 14-day period.
              </p>
            </div>
            
            <div className={styles.viewer}>
              <h3 className={styles.viewerTitle}>Blueberry Comparison at Day {activeTab}</h3>
              
              <div className={styles.imageContainer}>
                <div className={`${styles.images} ${useStackedLayout ? styles.imagesStacked : ''}`}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageHeader}>
                      SPANEX TREATED
                    </div>
                    <img
                      src={getTreatedImage()}
                      alt={`Spanex Treated Blueberry at Day ${activeTab}`}
                      className={styles.image}
                    />
                  </div>
                  
                  {!useStackedLayout && (
                    <div className={styles.divider}></div>
                  )}
                  
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageHeader}>
                      UNTREATED
                    </div>
                    <img
                      src={getUntreatedImage()}
                      alt={`Untreated Control Blueberry at Day ${activeTab}`}
                      className={styles.image}
                    />
                  </div>
                </div>
                
                <div className={styles.caption}>
                  Side-by-side comparison of treated and untreated berries
                </div>
              </div>
            </div>
            
            {/* StandardizedTabs for day selector */}
            <StandardizedTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              theme="alternate"
              className={styles.tabs}
            />
            
            <div className={styles.tabContent} role="tabpanel">
              <div className={styles.observations}>
                <h3 className={styles.observationsTitle}>Observations at Day {activeTab}</h3>
                <div className={styles.offeringsList}>
                  {observationFeatures.map(feature => (
                    <div
                      key={feature.id}
                      className={`${styles.offering} ${expandedFeature === feature.id ? styles.offeringExpanded : ''}`}
                    >
                      <button
                        className={styles.offeringHeader}
                        onClick={() => toggleFeature(feature.id)}
                        aria-expanded={expandedFeature === feature.id}
                        aria-controls={`offering-details-${feature.id}`}
                      >
                        <div className={styles.offeringIcon}>
                          <span aria-hidden="true">{feature.icon}</span>
                        </div>
                        <div className={styles.offeringInfo}>
                          <h4 className={styles.offeringTitle}>{feature.title}</h4>
                          <p className={styles.offeringDescription}>{feature.description}</p>
                        </div>
                        <div className={styles.offeringToggle}>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                            className={expandedFeature === feature.id ? styles.toggleIconExpanded : ''}
                            style={{ transition: 'transform 0.3s ease' }}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </button>
                      
                      {expandedFeature === feature.id && (
                        <div
                          className={styles.offeringDetails}
                          id={`offering-details-${feature.id}`}
                        >
                          <ul className={styles.detailsList}>
                            {feature.details.map((detail, index) => (
                              <li key={index} className={styles.detailsItem}>{detail}</li>
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
      </Container>
    </section>
  );
};

export default BeforeAfterComparison;