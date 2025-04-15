import React, { useState, useEffect } from 'react';

const SpanexHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Mechanism data
  const mechanisms = [
    {
      id: 0,
      name: "Respiration Control",
      color: "#2d5500", // Dark Green
      icon: "🍃",
      description: "Regulates gas exchange and slows ripening"
    },
    {
      id: 1,
      name: "Moisture Optimization",
      color: "#87643e", // Brown
      icon: "💧",
      description: "Prevents dehydration while avoiding excess moisture"
    },
    {
      id: 2,
      name: "Microbial Inhibition",
      color: "#ff6e4e", // Coral/Orange
      icon: "🦠",
      description: "Creates inhospitable environment for microbes"
    },
    {
      id: 3,
      name: "Oxidation Prevention",
      color: "#fea201", // Bright Orange
      icon: "⚛️",
      description: "Scavenges free radicals that cause oxidative damage"
    }
  ];

  // Fruits for center display
  const protectedFruits = ["🍎", "🫐", "🥑", "🍓", "🍊", "🍋", "🍇"];
  const [centerFruitIndex, setCenterFruitIndex] = useState(0);

  // Auto-rotate mechanisms every 5 seconds
  useEffect(() => {
    const mechanismTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mechanisms.length);
    }, 5000);
    
    return () => clearInterval(mechanismTimer);
  }, [mechanisms.length]);

  // Change center fruit more frequently
  useEffect(() => {
    const fruitTimer = setInterval(() => {
      setCenterFruitIndex((prev) => (prev + 1) % protectedFruits.length);
    }, 2000);
    
    return () => clearInterval(fruitTimer);
  }, [protectedFruits.length]);
  
  return (
    <section className="hero-section">
      {/* Background */}
      <div className="background-overlay"></div>
      
      {/* Content Container */}
      <div className="content-container">
        {/* Text Content */}
        <div className="text-content">
          <h1 className="hero-title">
            Extending Nature's Freshness
          </h1>
          
          <p className="hero-subtitle">
            Revolutionary patented <span className="highlight">Spanex Shelf Max</span> formulations 
            that extend produce shelf life by up to 5x, reducing losses for packhouses, growers, and retailers.
          </p>
          
          <div className="mechanism-badge">
            <div className="badge-icon">🛡️</div>
            <div className="badge-content">
              <div className="badge-title">Multi-Mechanism Protection</div>
              <div className="badge-text">All 4 mechanisms work together for complete protection</div>
            </div>
          </div>
          
          <div className="cta-buttons">
            <a href="#products" className="btn btn-primary">Our Solutions</a>
            <a href="#contact" className="btn btn-outline">Schedule a Consultation</a>
          </div>
        </div>
        
        {/* Shield Visualization */}
        <div className="shield-visualization">
          {/* <div className="active-label">{mechanisms[activeIndex].name}</div> */}
          
          {/* Shield Display */}
          <div className="shield-display">
            {/* Center Fruit Display - Replaces Spanex logo */}
            <div className="center-fruit">
              <div className="fruit-circle">
                <div className="center-fruit-icon">
                  {protectedFruits[centerFruitIndex]}
                </div>
                <div className="protection-ring" style={{ borderColor: mechanisms[activeIndex].color }}></div>
              </div>
            </div>
            
            {/* Card - Top */}
            <div 
              className={`mechanism-card card-top ${activeIndex === 0 ? 'active' : ''}`}
              onClick={() => setActiveIndex(0)}
            >
              <div className="mechanism-number">1</div>
              <div className="mechanism-icon" style={{ backgroundColor: mechanisms[0].color }}>
                {mechanisms[0].icon}
              </div>
              <div className="mechanism-name">{mechanisms[0].name}</div>
            </div>
            
            {/* Card - Right */}
            <div 
              className={`mechanism-card card-right ${activeIndex === 1 ? 'active' : ''}`}
              onClick={() => setActiveIndex(1)}
            >
              <div className="mechanism-number">2</div>
              <div className="mechanism-icon" style={{ backgroundColor: mechanisms[1].color }}>
                {mechanisms[1].icon}
              </div>
              <div className="mechanism-name">{mechanisms[1].name}</div>
            </div>
            
            {/* Card - Bottom */}
            <div 
              className={`mechanism-card card-bottom ${activeIndex === 2 ? 'active' : ''}`}
              onClick={() => setActiveIndex(2)}
            >
              <div className="mechanism-number">3</div>
              <div className="mechanism-icon" style={{ backgroundColor: mechanisms[2].color }}>
                {mechanisms[2].icon}
              </div>
              <div className="mechanism-name">{mechanisms[2].name}</div>
            </div>
            
            {/* Card - Left */}
            <div 
              className={`mechanism-card card-left ${activeIndex === 3 ? 'active' : ''}`}
              onClick={() => setActiveIndex(3)}
            >
              <div className="mechanism-number">4</div>
              <div className="mechanism-icon" style={{ backgroundColor: mechanisms[3].color }}>
                {mechanisms[3].icon}
              </div>
              <div className="mechanism-name">{mechanisms[3].name}</div>
            </div>
            
            {/* Shield Circle */}
            <div className="shield-circle"></div>
            
            {/* Active Shield Effect */}
            <div 
              className={`active-shield shield-${activeIndex}`}
              style={{
                borderColor: mechanisms[activeIndex].color
              }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Protected Fruit Label */}
      <div className="protection-label">
        <span className="protection-text">Protected Up To</span>
        <span className="protection-value">5× Longer</span>
      </div>
      
      {/* Indicators */}
      <div className="indicators">
        {mechanisms.map((mech, index) => (
          <button
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={mech.name}
            style={{
              backgroundColor: index === activeIndex ? mech.color : 'rgba(255,255,255,0.3)'
            }}
          />
        ))}
      </div>
    </section>
  );
};

// Add styles
const styles = `
  .hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0d1a00;
    color: white;
    overflow: hidden;
    padding: 2rem;
  }
  
  .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #10210a, #0d1a00);
    opacity: 0.9;
    z-index: 0;
  }
  
  .content-container {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    gap: 3rem;
  }
  
  @media (min-width: 1024px) {
    .content-container {
      flex-direction: row;
      align-items: center;
      text-align: left;
    }
  }
  
  .text-content {
    max-width: 600px;
    text-align: center;
  }
  
  @media (min-width: 1024px) {
    .text-content {
      text-align: left;
    }
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  @media (min-width: 768px) {
    .hero-title {
      font-size: 3rem;
    }
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .highlight {
    color: #ff6e4e;
    font-weight: 600;
  }
  
  .mechanism-badge {
    display: flex;
    align-items: center;
    background: rgba(45, 85, 0, 0.2);
    border: 1px solid rgba(45, 85, 0, 0.3);
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
  .badge-icon {
    font-size: 2rem;
    margin-right: 1rem;
  }
  
  .badge-content {
    display: flex;
    flex-direction: column;
  }
  
  .badge-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: #ffe02a;
    margin-bottom: 0.5rem;
  }
  
  .badge-text {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  @media (min-width: 1024px) {
    .cta-buttons {
      justify-content: flex-start;
    }
  }
  
  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .btn-primary {
    background-color: #ff6e4e;
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #e85c36;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 110, 78, 0.3);
  }
  
  .btn-outline {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.6);
  }
  
  .btn-outline:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
    transform: translateY(-2px);
  }
  
  /* Shield Visualization */
  .shield-visualization {
    position: relative;
    width: 100%;
    max-width: 500px;
    height: 500px;
    margin: 0 auto;
  }
  
  .active-label {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    z-index: 30;
  }
  
  .shield-display {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 70px auto 0;
  }
  
  /* Center Fruit Display */
  .center-fruit {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 25;
  }
  
  .fruit-circle {
    width: 120px;
    height: 120px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .center-fruit-icon {
    font-size: 3rem;
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .protection-ring {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid;
    border-radius: 50%;
    opacity: 0.7;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.1); opacity: 0.5; }
    100% { transform: scale(1); opacity: 0.7; }
  }
  
  .mechanism-card {
    position: absolute;
    width: 130px;
    height: 130px;
    background: rgba(20, 20, 20, 0.8);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 20;
  }
  
  .card-top {
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .card-right {
    top: 50%;
    right: -80px;
    transform: translateY(-50%);
  }
  
  .card-bottom {
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .card-left {
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
  }
  
  .mechanism-card:hover {
    background: rgba(30, 30, 30, 0.9);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .card-top:hover, .card-bottom:hover {
    transform: translateY(-5px) translateX(-50%);
  }
  
  .card-right:hover, .card-left:hover {
    transform: translateX(-5px) translateY(-50%);
  }
  
  .mechanism-card.active {
    background: rgba(40, 40, 40, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
    z-index: 21;
  }
  
  .mechanism-number {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #ffe02a;
    color: #000;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .mechanism-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
  
  .mechanism-name {
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
  }
  
  .shield-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 280px;
    height: 280px;
    border: 2px dashed rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  .active-shield {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 280px;
    height: 280px;
    border: 2px solid;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.3;
    transition: all 0.5s ease;
    z-index: 15;
  }
  
  .shield-0 {
    clip-path: polygon(50% 0%, 100% 0, 100% 50%, 50% 50%);
  }
  
  .shield-1 {
    clip-path: polygon(100% 0, 100% 100%, 50% 100%, 50% 50%, 100% 50%);
  }
  
  .shield-2 {
    clip-path: polygon(0 100%, 50% 100%, 50% 50%, 0 50%);
  }
  
  .shield-3 {
    clip-path: polygon(0 0, 50% 0, 50% 50%, 0 50%);
  }
  
  .protection-label {
    position: absolute;
    bottom: 30px;
    right: 30px;
    background: rgba(45, 85, 0, 0.8);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 40;
  }
  
  .protection-text {
    font-size: 0.8rem;
    opacity: 0.8;
  }
  
  .protection-value {
    font-weight: 700;
    color: #ffe02a;
    font-size: 1.1rem;
  }
  
  .indicators {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 20;
  }
  
  .indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .indicator.active {
    transform: scale(1.2);
  }
  
  /* Mobile adjustments */
  @media (max-width: 767px) {
    .hero-section {
      padding: 1rem;
    }
    
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-subtitle {
      font-size: 1rem;
    }
    
    .shield-visualization {
      height: 400px;
    }
    
    .shield-display {
      transform: scale(0.8);
    }
    
    .mechanism-card {
      width: 110px;
      height: 110px;
    }
    
    .card-top {
      top: -70px;
    }
    
    .card-right {
      right: -70px;
    }
    
    .card-bottom {
      bottom: -70px;
    }
    
    .card-left {
      left: -70px;
    }
    
    .fruit-circle {
      width: 100px;
      height: 100px;
    }
    
    .center-fruit-icon {
      font-size: 2.5rem;
    }
    
    .protection-label {
      position: absolute;
      right: 10px;
      bottom: 80px;
    }
  }
  
  @media (max-width: 480px) {
    .mechanism-badge {
      flex-direction: column;
      text-align: center;
    }
    
    .badge-icon {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
    
    .btn {
      width: 100%;
    }
    
    .protection-label {
      position: static;
      margin-top: 20px;
    }
    
    .shield-display {
      transform: scale(0.7);
      margin-top: 40px;
    }
  }
`;

export default function HeroWithStyles() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <SpanexHero />
    </>
  );
}