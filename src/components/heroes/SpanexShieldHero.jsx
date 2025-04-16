import React, { useState, useEffect } from 'react';

const ShieldHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [centerFruitIndex, setCenterFruitIndex] = useState(0);

  // Mechanism data
  const mechanisms = [
    {
      id: 0,
      name: "Respiration Control",
      color: "#2d5500", 
      icon: "🍃",
      description: "Regulates gas exchange and slows ripening"
    },
    {
      id: 1,
      name: "Moisture Optimization",
      color: "#87643e", 
      icon: "💧",
      description: "Prevents dehydration while avoiding excess moisture"
    },
    {
      id: 2,
      name: "Microbial Inhibition",
      color: "#ff6e4e", 
      icon: "🦠",
      description: "Creates inhospitable environment for microbes"
    },
    {
      id: 3,
      name: "Oxidation Prevention",
      color: "#fea201", 
      icon: "⚛️",
      description: "Scavenges free radicals that cause oxidative damage"
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
    <div style={styles.heroSection}>
      {/* Animation keyframes included directly in the component */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.3; }
            100% { transform: scale(1); opacity: 0.6; }
          }
        `}
      </style>
      
      <div style={styles.container}>
        {/* Left content */}
        <div style={styles.textContent}>
          <h1 style={styles.heroTitle}>
            Extending Nature's Freshness
          </h1>
          
          <p style={styles.heroSubtitle}>
            Revolutionary patented <span style={styles.highlight}>Spanex Shelf Max</span> formulations
            that extend produce shelf life by up to 5x, reducing losses for packhouses, growers, and retailers.
          </p>
          
          <div style={styles.badge}>
            <div style={styles.badgeIcon}>🛡️</div>
            <div style={styles.badgeContent}>
              <div style={styles.badgeTitle}>Multi-Mechanism Protection</div>
              <div style={styles.badgeText}>All 4 mechanisms work together for complete protection</div>
            </div>
          </div>
          
          <div style={styles.buttonContainer}>
            <a href="#products" style={styles.primaryButton}>
              Our Solutions
            </a>
            <a href="#contact" style={styles.outlineButton}>
              Schedule a Consultation
            </a>
          </div>
        </div>
        
        {/* Right visualization */}
        <div style={styles.visualizationContainer}>
          <div style={styles.mechanismDisplay}>
            {/* Produce icon in center */}
            <div style={styles.centerCircle}>
              <span style={{
                ...styles.fruitIcon,
                animation: 'float 3s ease-in-out infinite'
              }}>
                {protectedFruits[centerFruitIndex]}
              </span>
              <div style={{
                ...styles.pulseRing, 
                borderColor: mechanisms[activeIndex].color,
                animation: 'pulse 2s infinite'
              }}></div>
            </div>
            
            {/* Four mechanism cards */}
            {mechanisms.map((mechanism, index) => {
              // Position styles based on index
              let positionStyle = {};
              if (index === 0) positionStyle = styles.topPosition;
              if (index === 1) positionStyle = styles.rightPosition;
              if (index === 2) positionStyle = styles.bottomPosition;
              if (index === 3) positionStyle = styles.leftPosition;
              
              return (
                <div 
                  key={mechanism.id}
                  style={{
                    ...styles.mechanismCard,
                    ...positionStyle,
                    background: activeIndex === index ? 
                      `linear-gradient(135deg, ${mechanism.color}bb, ${mechanism.color}88)` : 
                      'rgba(0, 0, 0, 0.6)',
                    boxShadow: activeIndex === index ?
                      `0 4px 12px ${mechanism.color}44` :
                      styles.mechanismCard.boxShadow,
                    transform: activeIndex === index ?
                      `${positionStyle.transform} scale(1.05)` :
                      positionStyle.transform
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div style={styles.mechanismNumber}>{index + 1}</div>
                  <div style={{
                    ...styles.mechanismIcon,
                    backgroundColor: activeIndex === index ? 
                      'rgba(255, 255, 255, 0.2)' : 
                      'rgba(255, 255, 255, 0.1)'
                  }}>
                    {mechanism.icon}
                  </div>
                  <div style={styles.mechanismName}>{mechanism.name}</div>
                </div>
              );
            })}
            
            {/* Connecting lines */}
            <div style={styles.connectingLines}>
              <div style={styles.horizontalLine}></div>
              <div style={styles.verticalLine}></div>
            </div>
            
            {/* Protection tag */}
            <div style={styles.protectionTag}>
              <span style={styles.protectionText}>Protected Up To</span>
              <span style={styles.protectionValue}>5× Longer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  heroSection: {
    backgroundColor: '#0d1a00',
    color: '#fff',
    width: '100%',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  textContent: {
    flex: '1 1 500px',
    padding: '20px',
    marginBottom: '40px'
  },
  heroTitle: {
    fontSize: '2.8rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#ffffff'
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '30px',
    maxWidth: '600px',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  highlight: {
    color: '#ff6e4e',
    fontWeight: '600'
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(45, 85, 0, 0.2)',
    border: '1px solid rgba(45, 85, 0, 0.3)',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '30px',
    maxWidth: '460px'
  },
  badgeIcon: {
    fontSize: '2.2rem',
    marginRight: '15px'
  },
  badgeContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  badgeTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#ffe02a',
    marginBottom: '5px'
  },
  badgeText: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)'
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px'
  },
  primaryButton: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#ff6e4e',
    color: 'white',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  },
  outlineButton: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: '50px',
    border: '2px solid rgba(255, 255, 255, 0.4)',
    textDecoration: 'none',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  },
  
  // Visualization styles
  visualizationContainer: {
    flex: '1 1 500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  mechanismDisplay: {
    position: 'relative',
    width: '400px',
    height: '400px'
  },
  centerCircle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100px',
    height: '100px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    zIndex: 5
  },
  fruitIcon: {
    fontSize: '3rem'
  },
  pulseRing: {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    borderRadius: '50%',
    border: '2px solid',
    opacity: '0.6'
  },
  mechanismCard: {
    position: 'absolute',
    width: '120px',
    height: '120px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '8px',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    zIndex: 4
  },
  topPosition: {
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  rightPosition: {
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)'
  },
  bottomPosition: {
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  leftPosition: {
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)'
  },
  mechanismNumber: {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#ffe02a',
    color: '#000',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem'
  },
  mechanismIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    marginBottom: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  mechanismName: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'white',
    textAlign: 'center'
  },
  connectingLines: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: 2
  },
  horizontalLine: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    width: '80%',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  verticalLine: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    width: '1px',
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  protectionTag: {
    position: 'absolute',
    bottom: '20px',
    right: '-10px',
    backgroundColor: 'rgba(45, 85, 0, 0.8)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 6
  },
  protectionText: {
    fontSize: '0.7rem',
    opacity: '0.8'
  },
  protectionValue: {
    fontWeight: '700',
    color: '#ffe02a',
    fontSize: '1rem'
  }
};

export default ShieldHero;