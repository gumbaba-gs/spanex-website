import React, { useState, useEffect, useRef } from 'react';
import './ComparisonSection.css';
import StandardizedTabs from '../common/StandardizedTabs';

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
    { id: 'spanex', name: 'Spanex', shortName: 'Spanex', color: 'var(--primary-color)', lightColor: 'rgba(11, 61, 145, 0.1)', darkColor: '#0B3D91', description: 'Our revolutionary multi-mechanism preservation technology' },
    { id: 'waxes', name: 'Conventional Waxes', shortName: 'Waxes', color: 'var(--warning-color)', lightColor: 'rgba(234, 179, 8, 0.1)', darkColor: '#eab308', description: 'Traditional wax coatings used in the produce industry' },
    { id: 'chemical', name: 'Chemical Preservatives', shortName: 'Chemical', color: 'var(--error-color)', lightColor: 'rgba(239, 68, 68, 0.1)', darkColor: '#ef4444', description: 'Synthetic chemical solutions for extending shelf life' },
    { id: 'map', name: 'Modified Atmosphere', shortName: 'MAP', color: 'var(--secondary-color)', lightColor: 'rgba(0, 128, 128, 0.1)', darkColor: '#008080', description: 'Controlled atmosphere packaging technologies' },
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
      if (value === 'HIGH') return 'comparison-section__value--good';
      if (value === 'MODERATE') return 'comparison-section__value--medium';
      return 'comparison-section__value--poor';
    }
    if (metric.id === 'cost') {
      if (value === 'LOW') return 'comparison-section__value--good';
      if (value === 'MODERATE') return 'comparison-section__value--medium';
      return 'comparison-section__value--poor';
    }
    if (metric.id === 'taste') {
      const ratingValue = getRatingValue(value);
      const isHighest = !otherValues.some(v => getRatingValue(v) > ratingValue);
      return isHighest ? 'comparison-section__value--good' : (ratingValue >= 3 ? 'comparison-section__value--medium' : 'comparison-section__value--poor');
    }
    if (metric.valueType === 'boolean') {
      return value ? 'comparison-section__value--good' : 'comparison-section__value--poor';
    } else if (metric.valueType === 'rating') {
      const ratingValue = getRatingValue(value);
      const isHighest = !otherValues.some(v => getRatingValue(v) > ratingValue);
      if (metric.higherIsBetter) {
        return isHighest ? 'comparison-section__value--good' : 'comparison-section__value--medium';
      } else {
        return isHighest ? 'comparison-section__value--poor' : 'comparison-section__value--medium';
      }
    } else if (metric.valueType === 'number') {
      const numericOtherValues = otherValues.map(v => typeof v === 'string' ? parseFloat(v) : v);
      const isHighest = !numericOtherValues.some(v => v > value);
      return isHighest ? 'comparison-section__value--good' : 'comparison-section__value--medium';
    }
    return '';
  };

  return (
    <section className="tech-section" id="comparison">
      <div className="tech-section__header">
        <h2 className="tech-section__title">Compare Preservation Methods</h2>
        <p className="tech-section__subtitle">
          See how Spanex technology stacks up against traditional preservation methods
        </p>
      </div>
      <div className="container">
        <div
          ref={sectionRef}
          className={`comparison-section__container${isVisible ? ' visible' : ''}`}
        >
          <div className="comparison-section__content-card">
            <div className="comparison-section__text-container">
              <p className="comparison-section__text">
                Spanex Sciences has developed <span className="comparison-section__highlight">superior preservation technology</span> that outperforms traditional methods across key metrics. Our solution offers <span className="comparison-section__highlight--secondary">longer shelf life</span>, <span className="comparison-section__highlight">complete organic compatibility</span>, and <span className="comparison-section__highlight--secondary">no impact on taste or texture</span> compared to conventional alternatives.
              </p>
              <p className="comparison-section__text">
                Select a produce type and explore how <span className="comparison-section__highlight">Spanex</span> compares to <span className="comparison-section__highlight--secondary">conventional waxes</span>, <span className="comparison-section__highlight--secondary">chemical preservatives</span>, and <span className="comparison-section__highlight--secondary">modified atmosphere packaging</span> across various performance metrics.
              </p>
            </div>
            {/* StandardizedTabs for tab navigation */}
            <StandardizedTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              theme="alternate"
            />
            <div className="comparison-section__tab-content" role="tabpanel">
              {activeTab === 'overview' && (
                <div className="comparison-section__overview">
                  <div className="comparison-section__overview-content">
                    <h3 className="comparison-section__overview-title">Spanex Advantage</h3>
                    <p className="comparison-section__overview-text">
                      Our revolutionary Spanex Shelf Max technology is designed to address the key challenges in produce preservation. Unlike conventional waxes or chemical treatments, our solution is completely compatible with organic certification, while providing superior shelf life extension.
                    </p>
                    <p className="comparison-section__overview-text">
                      The multi-mechanism approach of Spanex technology targets all major causes of produce deterioration simultaneously, setting it apart from single-mechanism alternatives that can only address one aspect of spoilage.
                    </p>
                    <div className="comparison-section__metrics-grid">
                      {highlights.map((metric, index) => (
                        <div className="comparison-section__metric-card" key={index}>
                          <div className="comparison-section__metric-value">{metric.value}</div>
                          <p className="comparison-section__metric-label">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="comparison-section__methods-overview">
                      <h4 className="comparison-section__methods-title">Preservation Technologies</h4>
                      <div className="comparison-section__methods-grid">
                        {methods.map((method) => (
                          <div
                            key={method.id}
                            className={`comparison-section__method-card ${highlightedMethod === method.id ? 'highlighted' : ''} ${method.id}`}
                            onClick={() => setHighlightedMethod(method.id)}
                            onMouseEnter={() => setHighlightedMethod(method.id)}
                          >
                            <h4 className="comparison-section__method-name">{method.name}</h4>
                            <p className="comparison-section__method-description">{method.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'produce' && (
                <div className="comparison-section__produce">
                  <h3 className="comparison-section__selector-title">Select Produce Type</h3>
                  <div className="comparison-section__product-selector">
                    {products.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => !product.comingSoon && setSelectedProduct(product.id)}
                        className={`comparison-section__product-button ${selectedProduct === product.id ? 'active' : ''} ${product.comingSoon ? 'disabled' : ''}`}
                        aria-selected={selectedProduct === product.id}
                        disabled={product.comingSoon}
                      >
                        <span className="comparison-section__product-icon">{product.icon}</span>
                        {product.name}
                        {product.comingSoon && (
                          <span className="comparison-section__coming-soon">Coming Soon</span>
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="comparison-section__comparison-results">
                    <h3 className="comparison-section__results-title">
                      Results for {products.find(p => p.id === selectedProduct).icon} {products.find(p => p.id === selectedProduct).name}
                    </h3>
                    <div className="comparison-section__metrics-detail-grid">
                      {metrics.map((metric) => {
                        const otherValues = methods
                          .filter(m => m.id !== highlightedMethod)
                          .map(m => comparisonData[selectedProduct][m.id][metric.id]);
                        return (
                          <div key={metric.id} className="comparison-section__metric-detail-card">
                            <div className="comparison-section__metric-header">
                              <div className="comparison-section__metric-icon">{metric.icon}</div>
                              <h4 className="comparison-section__metric-title">{metric.name}</h4>
                              <p className="comparison-section__metric-description">{metric.description}</p>
                            </div>
                            <div className="comparison-section__values-grid">
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
                                    className={`comparison-section__value-card ${highlightedMethod === method.id ? 'highlighted' : ''}`}
                                  >
                                    <div className="comparison-section__value-method">{method.shortName}</div>
                                    <div className={`comparison-section__value ${comparisonClass}`}>
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
      </div>
    </section>
  );
};

export default ComparisonSection;