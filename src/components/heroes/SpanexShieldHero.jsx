import React, { useState, useEffect } from 'react';
import './SpanexShieldHero.css';


const SpanexHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [centerFruitIndex, setCenterFruitIndex] = useState(0);

  // Mechanism data
  const mechanisms = [
    {
      id: 0,
      name: "Respiration Control",
      color: "#2d5500", 
      icon: "🍃",
    },
    {
      id: 1,
      name: "Moisture Optimization",
      color: "#87643e", 
      icon: "💧",
    },
    {
      id: 2,
      name: "Microbial Inhibition",
      color: "#ff6e4e", 
      icon: "🦠",
    },
    {
      id: 3,
      name: "Oxidation Prevention",
      color: "#fea201", 
      icon: "⚛️",
    }
  ];

  // Fruits for center display
  const protectedFruits = ["🍎", "🫐", "🥑", "🍓", "🍊", "🍋", "🍇"];

  // Auto-rotate mechanisms every 5 seconds
  useEffect(() => {
    const mechanismTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mechanisms.length);
    }, 5000);
    
    return () => clearInterval(mechanismTimer);
  }, [mechanisms.length]);

  // Change center fruit every 2 seconds
  useEffect(() => {
    const fruitTimer = setInterval(() => {
      setCenterFruitIndex((prev) => (prev + 1) % protectedFruits.length);
    }, 2000);
    
    return () => clearInterval(fruitTimer);
  }, [protectedFruits.length]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        <div className="hero-layout">
          {/* Content column */}
          <div className="hero-content-column">
            <h2 className="hero-title">
              Extending Nature's Freshness
            </h2>
            
            <p className="hero-subtitle">
              Revolutionary patented Spanex Sciences formulations extend produce shelf life, reducing industry losses.
            </p>
            <div className="hero-badge">
              <div className="hero-badge-icon">🛡️</div>
              <div className="hero-badge-content">
                <div className="hero-badge-title">Multi-Mechanism Protection</div>
                <div className="hero-badge-text">All 4 mechanisms work together for complete protection</div>
              </div>
            </div>
            
            {/* Visual column */}
            <div className="hero-visual-column">
                <div className="mechanism-display">
                    {/* Produce icon in center */}
                    <div className="mechanism-center">
                        <span className="mechanism-fruit">
                        {protectedFruits[centerFruitIndex]}
                        </span>
                        <div className="mechanism-pulse" style={{
                        borderColor: mechanisms[activeIndex].color
                        }}></div>
                    </div>
                    
                    {/* Four mechanism cards */}
                    {mechanisms.map((mechanism, index) => {
                        // Position styles based on index
                        let positionClass = '';
                        if (index === 0) positionClass = 'mechanism-position-top';
                        if (index === 1) positionClass = 'mechanism-position-right';
                        if (index === 2) positionClass = 'mechanism-position-bottom';
                        if (index === 3) positionClass = 'mechanism-position-left';
                        
                        return (
                        <div 
                            key={mechanism.id}
                            className={`mechanism-card ${positionClass} ${activeIndex === index ? 'mechanism-card-active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            style={{
                            backgroundImage: activeIndex === index ? 
                                `linear-gradient(135deg, ${mechanism.color}bb, ${mechanism.color}88)` : 
                                'none'
                            }}
                        >
                            <div className="mechanism-number">{index + 1}</div>
                            <div className="mechanism-icon">
                            {mechanism.icon}
                            </div>
                            <div className="mechanism-name">{mechanism.name}</div>
                            <div className="mechanism-description">{mechanism.description}</div>
                        </div>
                        );
                    })}
                    
                    {/* Connecting lines */}
                    <div className="mechanism-lines">
                        <div className="mechanism-line-horizontal"></div>
                        <div className="mechanism-line-vertical"></div>
                    </div>
                </div>
            </div>
            
            <div className="hero-cta">
              <a href="#products" className="btn btn-primary">
                Our Solutions
              </a>
              <a href="#contact" className="btn btn-outline">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SpanexHero;