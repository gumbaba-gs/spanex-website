// src/components/products/ProductCard.jsx — Editorial Pharma-Bio specimen card
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, index = 0, onViewDetails, onRequestSample }) => {
  const { name, image, badge, description, available } = product;
  const idStr = String(index + 1).padStart(2, '0');

  return (
    <article className={`${styles.card} ${!available ? styles.cardComingSoon : ''}`}>
      {/* Spec strip — editorial card-id + status */}
      <div className={styles.specStrip}>
        <span className={styles.specId}>{idStr}</span>
        <span className={styles.specBadge}>{badge}</span>
        <span className={`${styles.specStatus} ${available ? styles.specStatusOn : styles.specStatusOff}`}>
          {available ? 'In production' : 'In development'}
        </span>
      </div>

      {/* Image plate */}
      <div className={styles.imagePlate}>
        <img
          src={image}
          alt={name}
          className={styles.image}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.ctaRow}>
          <button
            type="button"
            onClick={() => available && onViewDetails(product)}
            className={`${styles.cta} ${!available ? styles.ctaDisabled : ''}`}
            disabled={!available}
          >
            {available ? 'Learn more' : 'Coming soon'}
            {available && <span className={styles.ctaArrow} aria-hidden="true">→</span>}
          </button>
          {available && (
            <button
              type="button"
              onClick={() => onRequestSample(product)}
              className={styles.ctaSample}
            >
              Sample
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
