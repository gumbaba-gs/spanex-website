// src/components/heroes/Hero.jsx
import React from 'react';
import Container from '../layout/Container';

/**
 * Hero component with background image or video
 * 
 * @param {string} backgroundImage - URL for background image
 * @param {string} backgroundVideo - Optional URL for background video
 * @param {string} title - Main headline
 * @param {string} subtitle - Subheading text
 * @param {string} ctaText - Call to action button text
 * @param {string} ctaLink - Call to action destination
 * @param {string} alignment - Text alignment (left, center, right)
 * @param {string} textColor - Text color (light or dark)
 * @param {boolean} fullHeight - Whether hero should be full viewport height
 * @param {React.ReactNode} children - Optional additional content
 */
const Hero = ({
  backgroundImage,
  backgroundVideo,
  title,
  subtitle,
  ctaText,
  ctaLink = '/',
  alignment = 'center',
  textColor = 'light',
  fullHeight = true,
  children,
}) => {
  // Determine classes based on props
  const heroClasses = `
    hero 
    hero-${alignment} 
    hero-text-${textColor}
    ${fullHeight ? 'hero-full-height' : ''}
  `;

  return (
    <section 
      className={heroClasses} 
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Background video if provided */}
      {backgroundVideo && (
        <div className="hero-video-container">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster={backgroundImage} // Use background image as poster
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      
      {/* Overlay to ensure text readability */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <Container>
        <div className="hero-content">
          {title && <h1 className="hero-title">{title}</h1>}
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          
          {ctaText && (
            <div className="hero-cta">
              <a href={ctaLink} className="btn btn-primary btn-lg">
                {ctaText}
              </a>
            </div>
          )}
          
          {children && <div className="hero-additional-content">{children}</div>}
        </div>
      </Container>
    </section>
  );
};

export default Hero;