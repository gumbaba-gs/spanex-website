// src/components/products/ProductSection.jsx
import React, { useState } from 'react';
import Container from '../layout/Container';
import ProductCard from './ProductCard';
import StandardizedTabs from '../common/StandardizedTabs';
import styles from './ProductSection.module.css';

// Product images
import berryFreshImg from '../home/images/blueberries.jpeg';
import avocadoExtendImg from '../home/images/avocado.jpg';
import citrusGuardImg from '../home/images/oranges.jpg';
import leafyFreshImg from '../home/images/leafyveg.jpeg';
import floralLifeImg from '../home/images/flowers.jpeg';
import appleKeepImg from '../home/images/apple.jpg';

/**
 * Product section component displaying all Spanex products
 */
const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Product categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fruit', name: 'Fruit Solutions' },
    { id: 'vegetable', name: 'Vegetable Solutions' },
    { id: 'specialty', name: 'Specialty Solutions' }
  ];
  
  // Product data
  const products = [
    {
      id: 'berry-fresh',
      name: 'Berry Fresh',
      image: berryFreshImg,
      badge: 'Fruit',
      badgeType: 'primary',
      category: 'fruit',
      description: 'Specialized formulation for extending shelf life of all berry varieties.',
      specs: [
        { label: 'Shelf Life Extension', value: '3-4× longer' },
        { label: 'Application Method', value: 'Spray or dip' },
        { label: 'Suitable For', value: 'All berry varieties' },
        { label: 'Certifications', value: 'GRAS, Organic compatible' }
      ],
      available: true,
      details: {
        overview: 'Berry Fresh is our specialized formulation designed specifically for extending the shelf life of all berry varieties, including strawberries, blueberries, raspberries, and blackberries.',
        benefits: [
          'Reduces spoilage by up to 75%',
          'Maintains berry firmness and appearance',
          'Prevents mold growth',
          'Preserves nutritional content'
        ],
        technicalSpecs: {
          composition: 'Proprietary blend of food-grade ingredients',
          application: 'Apply as spray or dip during post-harvest processing',
          dosage: '1-2% solution',
          compatibility: 'Compatible with existing packing lines',
          storage: 'Store in cool, dry place'
        }
      }
    },
    {
      id: 'avocado-extend',
      name: 'Avocado Extend',
      image: avocadoExtendImg,
      badge: 'Fruit',
      badgeType: 'primary',
      category: 'fruit',
      description: 'Specialized solution for delaying ripening and extending shelf life of avocados.',
      specs: [
        { label: 'Shelf Life Extension', value: '2-3× longer' },
        { label: 'Application Method', value: 'Spray' },
        { label: 'Suitable For', value: 'All avocado varieties' },
        { label: 'Certifications', value: 'GRAS, Organic compatible' }
      ],
      available: true,
      details: {
        overview: 'Avocado Extend is specifically formulated to delay ripening and extend the shelf life of avocados, maintaining quality throughout the supply chain.',
        benefits: [
          'Controls ripening process',
          'Reduces internal browning',
          'Maintains flavor profile',
          'Extends marketable period'
        ],
        technicalSpecs: {
          composition: 'Proprietary blend of food-grade ingredients',
          application: 'Apply as spray during post-harvest processing',
          dosage: '1-2% solution',
          compatibility: 'Compatible with existing packing lines',
          storage: 'Store in cool, dry place'
        }
      }
    },
    {
      id: 'citrus-guard',
      name: 'Citrus Guard',
      image: citrusGuardImg,
      badge: 'Fruit',
      badgeType: 'primary',
      category: 'fruit',
      description: 'Protective formulation for citrus fruits that prevents mold and maintains freshness.',
      specs: [
        { label: 'Shelf Life Extension', value: '3-5× longer' },
        { label: 'Application Method', value: 'Spray or dip' },
        { label: 'Suitable For', value: 'All citrus varieties' },
        { label: 'Certifications', value: 'GRAS, Organic compatible' }
      ],
      available: false,
      details: {
        overview: 'Citrus Guard is designed to protect citrus fruits from mold growth and maintain freshness throughout the supply chain.',
        benefits: [
          'Prevents green and blue mold',
          'Reduces rind disorders',
          'Maintains fruit firmness',
          'Preserves vitamin content'
        ],
        technicalSpecs: {
          composition: 'Proprietary blend of food-grade ingredients',
          application: 'Apply as spray or dip during post-harvest processing',
          dosage: '1-2% solution',
          compatibility: 'Compatible with existing packing lines',
          storage: 'Store in cool, dry place'
        }
      }
    },
    {
      id: 'leafy-fresh',
      name: 'Leafy Fresh',
      image: leafyFreshImg,
      badge: 'Vegetable',
      badgeType: 'secondary',
      category: 'vegetable',
      description: 'Specialized solution for extending shelf life of leafy greens and vegetables.',
      specs: [
        { label: 'Shelf Life Extension', value: '2-3× longer' },
        { label: 'Application Method', value: 'Spray' },
        { label: 'Suitable For', value: 'All leafy greens' },
        { label: 'Certifications', value: 'GRAS, Organic compatible' }
      ],
      available: false,
      details: {
        overview: 'Leafy Fresh is specifically formulated to extend the shelf life of leafy greens and vegetables, maintaining crispness and preventing wilting.',
        benefits: [
          'Maintains crispness and color',
          'Prevents wilting and yellowing',
          'Reduces microbial growth',
          'Preserves nutritional content'
        ],
        technicalSpecs: {
          composition: 'Proprietary blend of food-grade ingredients',
          application: 'Apply as spray during post-harvest processing',
          dosage: '1-2% solution',
          compatibility: 'Compatible with existing packing lines',
          storage: 'Store in cool, dry place'
        }
      }
    },
    {
      id: 'floral-life',
      name: 'Floral Life',
      image: floralLifeImg,
      badge: 'Specialty',
      badgeType: 'accent',
      category: 'specialty',
      description: 'Specialized solution for extending vase life of cut flowers.',
      specs: [
        { label: 'Vase Life Extension', value: '2-3× longer' },
        { label: 'Application Method', value: 'Spray or dip' },
        { label: 'Suitable For', value: 'Most cut flowers' },
        { label: 'Certifications', value: 'Eco-friendly' }
      ],
      available: false,
      details: {
        overview: 'Floral Life is designed to extend the vase life of cut flowers, maintaining appearance and preventing wilting.',
        benefits: [
          'Extends vase life significantly',
          'Maintains petal color and appearance',
          'Prevents wilting and drooping',
          'Reduces microbial growth in vase water'
        ],
        technicalSpecs: {
          composition: 'Proprietary blend of plant-friendly ingredients',
          application: 'Apply as spray or add to vase water',
          dosage: '1-2% solution',
          compatibility: 'Compatible with most cut flower varieties',
          storage: 'Store in cool, dry place'
        }
      }
    },
    {
      id: 'apple-keep',
      name: 'Apple Keep',
      image: appleKeepImg,
      badge: 'Fruit',
      badgeType: 'primary',
      category: 'fruit',
      description: 'Specialized formulation for extending shelf life of apples and pome fruits.',
      specs: [
        { label: 'Shelf Life Extension', value: '3-5× longer' },
        { label: 'Application Method', value: 'Spray or dip' },
        { label: 'Suitable For', value: 'Apples and pome fruits' },
        { label: 'Certifications', value: 'GRAS, Organic compatible' }
      ],
      available: false,
      details: {
        overview: 'Apple Keep is specifically formulated to extend the shelf life of apples and other pome fruits, maintaining crispness and preventing browning.',
        benefits: [
          'Maintains fruit firmness and crispness',
          'Prevents browning and softening',
          'Reduces respiration rate',
          'Preserves flavor profile'
        ],
        technicalSpecs: {
          composition: 'Proprietary blend of food-grade ingredients',
          application: 'Apply as spray or dip during post-harvest processing',
          dosage: '1-2% solution',
          compatibility: 'Compatible with existing packing lines',
          storage: 'Store in cool, dry place'
        }
      }
    }
  ];
  
  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  // Handle view details click
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };
  
  // Close modal
  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = '';
  };
  
  return (
    <section className={styles.section} id="products">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Solutions</h2>
          <p className={styles.sectionSubtitle}>
            Specialized formulations for different produce types, each designed to address specific preservation challenges
          </p>
        </div>
        
        {/* Category tabs */}
        <StandardizedTabs
          tabs={categories.map(cat => ({ id: cat.id, title: cat.name }))}
          activeTab={activeCategory}
          setActiveTab={setActiveCategory}
          className={styles.categoryTabs}
        />
        
        {/* Products grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.map(product => (
            <div key={product.id} className={styles.productItem}>
              <ProductCard 
                product={product}
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>
        
        {/* Product details modal */}
        {selectedProduct && (
          <div className={styles.modalBackdrop} onClick={closeModal}>
            <div 
              className={styles.modalContent}
              onClick={e => e.stopPropagation()}
            >
              <button 
                className={styles.closeButton}
                onClick={closeModal}
                aria-label="Close product details"
              >
                ✕
              </button>
              
              <div className={styles.modalHeader}>
                <div className={styles.modalImage}>
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
                <div className={styles.modalHeaderContent}>
                  <h3 className={styles.modalTitle}>{selectedProduct.name}</h3>
                  <span className={`${styles.modalBadge} ${styles[`modalBadge${selectedProduct.badgeType.charAt(0).toUpperCase() + selectedProduct.badgeType.slice(1)}`]}`}>
                    {selectedProduct.badge}
                  </span>
                  <p className={styles.modalDescription}>{selectedProduct.description}</p>
                </div>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Overview</h4>
                  <p>{selectedProduct.details.overview}</p>
                </div>
                
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Key Benefits</h4>
                  <ul className={styles.benefitsList}>
                    {selectedProduct.details.benefits.map((benefit, index) => (
                      <li key={index} className={styles.benefitItem}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Technical Specifications</h4>
                  <div className={styles.techSpecs}>
                    {Object.entries(selectedProduct.details.technicalSpecs).map(([key, value]) => (
                      <div key={key} className={styles.techSpecRow}>
                        <span className={styles.techSpecLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        <span className={styles.techSpecValue}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={styles.modalFooter}>
                  <div className={styles.b2bCta}>
                    <h5 className={styles.ctaTitle}>Interested in {selectedProduct.name}?</h5>
                    <div className={styles.ctaButtons}>
                      <a href="#contact" className={styles.ctaButton} onClick={closeModal}>
                        Request Technical Specifications
                      </a>
                      <a href="#contact" className={styles.ctaButtonOutline} onClick={closeModal}>
                        Schedule Product Demonstration
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductSection;