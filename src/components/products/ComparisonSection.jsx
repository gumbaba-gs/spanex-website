// src/components/products/ComparisonSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import Container from '../layout/Container';
import StandardizedTabs from '../common/StandardizedTabs';
import styles from './ComparisonSection.module.css';

/**
 * Comparison section component showing how Spanex technology compares to other preservation methods
 */
const ComparisonSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProduct, setSelectedProduct] = useState('berries');
  const [highlightedMethod, setHighlightedMethod] = useState('spanex');

  useEffect(() => {
    const observer = new IntersectionObserver(
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

  // Tab configuration for StandardizedTabs
  const tabs = [
    { id: 'overview', title: 'Preservation Overview' },
    { id: 'produce', title: 'Produce Comparison' }
  ];

  const products = [
    { id: 'berries', name: 'Berries', icon: '🫐' },
    { id: 'apples', name: 'Apples', icon: '🍎' },
    { id: 'leafy', name: 'Leafy Greens', icon: '🥬', comingSoon: true },
    { id: 'citrus', name: 'Citrus', icon: '🍊', comingSoon: true },
  ];

  const methods = [
    { id: 'spanex', name: 'Spanex', shortName: 'Spanex', color: 'var(--color-primary)', lightColor: 'rgba(45, 85, 0, 0.1)', darkColor: '#2d5500', description: 'Our revolutionary multi-mechanism preservation technology' },
    { id: 'waxes', name: 'Conventional Waxes', shortName: 'Waxes', color: 'var(--color-warning)', lightColor: 'rgba(254, 162, 1, 0.1)', darkColor: '#fea201', description: 'Traditional wax coatings used in the produce industry' },
    { id: 'chemical', name: 'Chemical Preservatives', shortName: 'Chemical', color: 'var(--color-error)', lightColor: 'rgba(255, 110, 78, 0.1)', darkColor: '#ff6e4e', description: 'Synthetic chemical solutions for extending shelf life' },
    { id: 'map', name: 'Modified Atmosphere', shortName: 'MAP', color: 'var(--color-secondary)', lightColor: 'rgba(135, 100, 62, 0.1)', darkColor: '#87643e', description: 'Controlled atmosphere packaging technologies' },
  ];

  const metrics = [
    { id: 'shelfLife', name: 'Shelf-Life Extension', icon: '⏱️', description: 'How many times longer the produce stays fresh compared to untreated', higherIsBetter: true, unit: 'x', valueType: 'number' },
    { id: 'organic', name: 'Organic Compatible', icon: '🌱', description: 'Whether the solution can be used on organic certified produce', higherIsBetter: true, valueType: 'boolean' },
    { id: 'taste', name: 'Taste Impact', icon: '👅', description: 'Effect on the natural taste and texture of the produce', higherIsBetter: false, valueType: 'rating' },
    { id: 'application', name: 'Application Ease', icon: '🔧', description: 'How easy it is to apply at commercial scale', higherIsBetter: true, valueType: 'rating' },
    { id: 'cost', name: 'Cost-Effectiveness', icon: '💰', description: 'Relative cost per ton of produce treated', higherIsBetter: true, valueType: 'rating' },
    { id: 'mechanism', name: 'Multi-Mechanism', icon: '⚙️', description: 'Whether the solution addresses multiple preservation needs simultaneously', higherIsBetter: true, valueType: 'boolean' },
  ];

  const highlights = [
    { value: '3.5×', label: 'Shelf Life for Berries' },
    { value: '75%', label: 'Reduced Waste' },
    { value: '100%', label: 'Organic Compatible' },
    { value: 'Zero', label: 'Taste Impact' }
  ];

  const comparisonData = {
    berries: {
      spanex: { shelfLife: 3.5, organic: true, taste: 'NONE', application: 'HIGH', cost: 'LOW', mechanism: true },
      waxes: { shelfLife: 1.5, organic: false, taste: 'MODERATE', application: 'MODERATE', cost: 'HIGH', mechanism: false },
      chemical: { shelfLife: 2.5, organic: false, taste: 'SIGNIFICANT', application: 'HIGH', cost: 'LOW', mechanism: false },
      map: { shelfLife: 2.0, organic: true, taste: 'MINIMAL', application: 'LOW', cost: 'MODERATE', mechanism: false },
    },
    apples: {
      spanex: { shelfLife: 3.0, organic: true, taste: 'NONE', application: 'HIGH', cost: 'LOW', mechanism: true },
      waxes: { shelfLife: 2.0, organic: false, taste: 'MODERATE', application: 'HIGH', cost: 'HIGH', mechanism: false },
      chemical: { shelfLife: 2.5, organic: false, taste: 'MODERATE', application: 'HIGH', cost: 'LOW', mechanism: false },
      map: { shelfLife: 2.5, organic: true, taste: 'MINIMAL', application: 'LOW', cost: 'MODERATE', mechanism: false },
    },
    leafy: {
      spanex: { shelfLife: 3.0, organic: true, taste: 'NONE', application: 'HIGH', cost: 'LOW', mechanism: true },
      waxes: { shelfLife: 1.2, organic: false, taste: 'SIGNIFICANT', application: 'LOW', cost: 'HIGH', mechanism: false },
      chemical: { shelfLife: 2.0, organic: false, taste: 'MODERATE', application: 'MODERATE', cost: 'LOW', mechanism: false },
      map: { shelfLife: 2.5, organic: true, taste: 'MINIMAL', application: 'MODERATE', cost: 'MODERATE', mechanism: false },
    },
    citrus: {
      spanex: { shelfLife: 2.5, organic: true, taste: 'NONE', application: 'HIGH', cost: 'LOW', mechanism: true },
      waxes: { shelfLife: 2.0, organic: false, taste: 'MINIMAL', application: 'HIGH', cost: 'HIGH', mechanism: false },
      chemical: { shelfLife: 2.0, organic: false, taste: 'MODERATE', application: 'HIGH', cost: 'LOW', mechanism: false },
      map: { shelfLife: 1.8, organic: true, taste: 'MINIMAL', application: 'LOW', cost: 'MODERATE', mechanism: false },
    },
  };

  const getRatingValue = (rating) => {
    const ratings = { 'NONE': 5, 'MINIMAL': 4, 'MODERATE': 3, 'SIGNIFICANT': 2, 'SEVERE': 1 };
    return ratings[rating] || 0;
  };

  const formatValue = (value, metric) => {
    if (metric.valueType === 'boolean') {
      return value ? 'YES' : 'NO';
    } else if (metric.valueType === 'rating') {
      return value;
    } else if (metric.valueType === 'number') {
      return value + (metric.unit || '');
    } else {
      return value;
    }
  };

  const getComparisonClass = (value, otherValues, metric) => {
    if (metric.id === 'application') {
      if (value === 'HIGH') return styles.valueGood;
      if (value === 'MODERATE') return styles.valueMedium;
      return styles.valuePoor;
    }
    if (metric.id === 'cost') {
      if (value === 'LOW') return styles.valueGood;
      if (value === 'MODERATE') return styles.valueMedium;
      return styles.valuePoor;
    }
    if (metric.id === 'taste') {
      const ratingValue = getRatingValue(value);
      const isHighest = !otherValues.some(v => getRatingValue(v) > ratingValue);
      return isHighest ? styles.valueGood : (ratingValue >= 3 ? styles.valueMedium : styles.valuePoor);
    }
    if (metric.valueType === 'boolean') {
      return value ? styles.valueGood : styles.valuePoor;
    } else if (metric.valueType === 'rating') {
      const ratingValue = getRatingValue(value);
      const isHighest = !otherValues.some(v => getRatingValue(v) > ratingValue);
      if (metric.higherIsBetter) {
        return isHighest ? styles.valueGood : styles.valueMedium;
      } else {
        return isHighest ? styles.valuePoor : styles.valueMedium;
      }
    } else if (metric.valueType === 'number') {
      const numericOtherValues = otherValues.map(v => typeof v === 'string' ? parseFloat(v) : v);
      const isHighest = !numericOtherValues.some(v => v > value);
      return isHighest ? styles.valueGood : styles.valueMedium;
    }
    return '';
  };

  return (
    <section className={styles.section} id="comparison">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Compare Preservation Methods</h2>
          <p className={styles.sectionSubtitle}>
            See how Spanex technology stacks up against traditional preservation methods
          </p>
        </div>
        
        <div
          ref={sectionRef}
          className={`${styles.container} ${isVisible ? styles.visible : ''}`}
        >
          <div className={styles.contentCard}>
            <div className={styles.textContainer}>
              <p className={styles.text}>
                Spanex Sciences has developed <span className={styles.highlight}>superior preservation technology</span> that outperforms traditional methods across key metrics. Our solution offers <span className={styles.highlightSecondary}>longer shelf life</span>, <span className={styles.highlight}>complete organic compatibility</span>, and <span className={styles.highlightSecondary}>no impact on taste or texture</span> compared to conventional alternatives.
              </p>
              <p className={styles.text}>
                Select a produce type and explore how <span className={styles.highlight}>Spanex</span> compares to <span className={styles.highlightSecondary}>conventional waxes</span>, <span className={styles.highlightSecondary}>chemical preservatives</span>, and <span className={styles.highlightSecondary}>modified atmosphere packaging</span> across various performance metrics.
              </p>
            </div>
            
            {/* StandardizedTabs for tab navigation */}
            <StandardizedTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              theme="alternate"
              className={styles.tabs}
            />
            
            <div className={styles.tabContent} role="tabpanel">
              {activeTab === 'overview' && (
                <div className={styles.overview}>
                  <div className={styles.overviewContent}>
                    <h3 className={styles.overviewTitle}>Spanex Advantage</h3>
                    <p className={styles.overviewText}>
                      Our revolutionary Spanex Shelf Max technology is designed to address the key challenges in produce preservation. Unlike conventional waxes or chemical treatments, our solution is completely compatible with organic certification, while providing superior shelf life extension.
                    </p>
                    <p className={styles.overviewText}>
                      The multi-mechanism approach of Spanex technology targets all major causes of produce deterioration simultaneously, setting it apart from single-mechanism alternatives that can only address one aspect of spoilage.
                    </p>
                    
                    <div className={styles.metricsGrid}>
                      {highlights.map((metric, index) => (
                        <div className={styles.metricCard} key={index}>
                          <div className={styles.metricValue}>{metric.value}</div>
                          <p className={styles.metricLabel}>{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className={styles.methodsOverview}>
                      <h4 className={styles.methodsTitle}>Preservation Technologies</h4>
                      <div className={styles.methodsGrid}>
                        {methods.map((method) => (
                          <div
                            key={method.id}
                            className={`${styles.methodCard} ${highlightedMethod === method.id ? styles.highlighted : ''} ${styles[method.id]}`}
                            onClick={() => setHighlightedMethod(method.id)}
                            onMouseEnter={() => setHighlightedMethod(method.id)}
                          >
                            <h4 className={styles.methodName}>{method.name}</h4>
                            <p className={styles.methodDescription}>{method.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'produce' && (
                <div className={styles.produce}>
                  <h3 className={styles.selectorTitle}>Select Produce Type</h3>
                  <div className={styles.productSelector}>
                    {products.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => !product.comingSoon && setSelectedProduct(product.id)}
                        className={`${styles.productButton} ${selectedProduct === product.id ? styles.active : ''} ${product.comingSoon ? styles.disabled : ''}`}
                        aria-selected={selectedProduct === product.id}
                        disabled={product.comingSoon}
                      >
                        <span className={styles.productIcon}>{product.icon}</span>
                        {product.name}
                        {product.comingSoon && (
                          <span className={styles.comingSoon}>Coming Soon</span>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <div className={styles.comparisonResults}>
                    <h3 className={styles.resultsTitle}>
                      Results for {products.find(p => p.id === selectedProduct).icon} {products.find(p => p.id === selectedProduct).name}
                    </h3>
                    
                    <div className={styles.metricsDetailGrid}>
                      {metrics.map((metric) => {
                        const otherValues = methods
                          .filter(m => m.id !== highlightedMethod)
                          .map(m => comparisonData[selectedProduct][m.id][metric.id]);
                        return (
                          <div key={metric.id} className={styles.metricDetailCard}>
                            <div className={styles.metricHeader}>
                              <div className={styles.metricIcon}>{metric.icon}</div>
                              <h4 className={styles.metricTitle}>{metric.name}</h4>
                              <p className={styles.metricDescription}>{metric.description}</p>
                            </div>
                            
                            <div className={styles.valuesGrid}>
                              {methods.map((method) => {
                                const value = comparisonData[selectedProduct][method.id][metric.id];
                                const comparisonClass = getComparisonClass(
                                  value, 
                                  methods.filter(m => m.id !== method.id).map(m => comparisonData[selectedProduct][m.id][metric.id]), 
                                  metric
                                );
                                return (
                                  <div 
                                    key={`${metric.id}-${method.id}`} 
                                    className={`${styles.valueCard} ${method.id === 'spanex' ? styles.spanexHighlighted : ''}`}
                                  >
                                    <div className={styles.valueMethod}>{method.shortName}</div>
                                    <div className={`${styles.value} ${comparisonClass}`}>
                                      {formatValue(value, metric)}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComparisonSection;