// src/components/products/ProductCard.jsx
import React from 'react';
import styles from './ProductCard.module.css';

/**
 * Product card component for displaying product information
 * 
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data object
 * @param {Function} props.onViewDetails - Function to call when view details is clicked
 */
const ProductCard = ({ product, onViewDetails }) => {
  const { id, name, image, badge, badgeType, description, specs, available } = product;
  
  return (
    <div className={`${styles.card} ${!available ? styles.comingSoon : ''}`}>
      {!available && (
        <div className={styles.badge}>Coming Soon</div>
      )}
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={name}
          className={styles.image}
          loading="lazy"
        />
      </div>
      
      <div className={styles.content}>
        <div className={styles.headerRow}>
          <h3 className={styles.name}>{name}</h3>
          <span className={`${styles.typeBadge} ${styles[`typeBadge${badgeType.charAt(0).toUpperCase() + badgeType.slice(1)}`]}`}>
            {badge}
          </span>
        </div>
        
        <p className={styles.description}>{description}</p>
        
        <div className={styles.specs}>
          {specs.map((spec, specIndex) => (
            <div key={specIndex} className={styles.specRow}>
              <span className={styles.specLabel}>{spec.label}:</span>
              <span className={styles.specValue}>{spec.value}</span>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => available && onViewDetails(product)}
          className={styles.cta}
          aria-disabled={!available}
          disabled={!available}
        >
          {available ? 'Learn More' : 'Coming Soon'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;