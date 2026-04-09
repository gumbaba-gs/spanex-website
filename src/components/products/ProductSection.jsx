// src/components/products/ProductSection.jsx
import React, { useState } from 'react';
import Container from '../layout/Container';
import ProductCard from './ProductCard';
import StandardizedTabs from '../common/StandardizedTabs';
import styles from './ProductSection.module.css';

// Shelf Life product images
import berryFreshImg from '../home/images/blueberries.jpeg';
import avocadoExtendImg from '../home/images/avocado.jpg';
import citrusGuardImg from '../home/images/oranges.jpg';
import leafyFreshImg from '../home/images/leafyveg.jpeg';
import floralLifeImg from '../home/images/flowers.jpeg';
import appleKeepImg from '../home/images/apple.jpg';

// Bio-Capsule product images
import potashProImg from '../home/images/bio-capsules/potash-pro.webp';
import azoProImg from '../home/images/bio-capsules/azo-pro.webp';
import azotoProImg from '../home/images/bio-capsules/azoto-pro.webp';
import psbProImg from '../home/images/bio-capsules/psb-pro.webp';
import acetoProImg from '../home/images/bio-capsules/aceto-pro.webp';
import rhizoCapsImg from '../home/images/bio-capsules/rhizo-caps.webp';
import npkGrowImg from '../home/images/bio-capsules/npk-grow.webp';
import zincProImg from '../home/images/bio-capsules/zinc-pro.webp';

/**
 * Product section component displaying all Spanex products
 */
const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState('bio-capsule');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sampleProduct, setSampleProduct] = useState(null);
  const [sampleForm, setSampleForm] = useState({
    name: '', email: '', company: '', abn: '', phone: '', message: ''
  });
  const [sampleSubmitted, setSampleSubmitted] = useState(false);
  
  // Product categories
  const categories = [
    { id: 'bio-capsule', name: 'Bio-Capsule Solutions' },
    { id: 'shelf-life', name: 'Shelf Life Solutions' },
  ];
  
  // Product data
  const products = [
    // === SHELF LIFE SOLUTIONS ===
    {
      id: 'berry-fresh',
      name: 'Berry Fresh',
      image: berryFreshImg,
      badge: 'Shelf Life',
      badgeType: 'primary',
      category: 'shelf-life',
      description: 'Specialized formulation for extending shelf life of all berry varieties.',
      specs: [
        { label: 'Shelf Life Extension', value: '3-4× longer' },
        { label: 'Application Method', value: 'Spray or dip' },
        { label: 'Suitable For', value: 'All berry varieties' },
        { label: 'Certifications', value: 'GRAS, Organic compatible' }
      ],
      available: false,
      details: {
        overview: 'Berry Fresh is our specialized formulation designed specifically for extending the shelf life of all berry varieties, including strawberries, blueberries, raspberries, and blackberries.',
        benefits: ['Reduces spoilage by up to 75%', 'Maintains berry firmness and appearance', 'Prevents mold growth', 'Preserves nutritional content'],
        technicalSpecs: { composition: 'Proprietary blend of food-grade ingredients', application: 'Apply as spray or dip during post-harvest processing', dosage: '1-2% solution', compatibility: 'Compatible with existing packing lines', storage: 'Store in cool, dry place' }
      }
    },
    {
      id: 'avocado-extend',
      name: 'Avocado Extend',
      image: avocadoExtendImg,
      badge: 'Shelf Life',
      badgeType: 'primary',
      category: 'shelf-life',
      description: 'Specialized solution for delaying ripening and extending shelf life of avocados.',
      specs: [
        { label: 'Shelf Life Extension', value: '2-3× longer' },
        { label: 'Application Method', value: 'Spray' },
        { label: 'Suitable For', value: 'All avocado varieties' },
        { label: 'Certifications', value: 'GRAS, Organic compatible' }
      ],
      available: false,
      details: {
        overview: 'Avocado Extend is specifically formulated to delay ripening and extend the shelf life of avocados, maintaining quality throughout the supply chain.',
        benefits: ['Controls ripening process', 'Reduces internal browning', 'Maintains flavor profile', 'Extends marketable period'],
        technicalSpecs: { composition: 'Proprietary blend of food-grade ingredients', application: 'Apply as spray during post-harvest processing', dosage: '1-2% solution', compatibility: 'Compatible with existing packing lines', storage: 'Store in cool, dry place' }
      }
    },
    {
      id: 'citrus-guard',
      name: 'Citrus Guard',
      image: citrusGuardImg,
      badge: 'Shelf Life',
      badgeType: 'primary',
      category: 'shelf-life',
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
        benefits: ['Prevents green and blue mold', 'Reduces rind disorders', 'Maintains fruit firmness', 'Preserves vitamin content'],
        technicalSpecs: { composition: 'Proprietary blend of food-grade ingredients', application: 'Apply as spray or dip during post-harvest processing', dosage: '1-2% solution', compatibility: 'Compatible with existing packing lines', storage: 'Store in cool, dry place' }
      }
    },
    {
      id: 'leafy-fresh',
      name: 'Leafy Fresh',
      image: leafyFreshImg,
      badge: 'Shelf Life',
      badgeType: 'primary',
      category: 'shelf-life',
      description: 'Specialized solution for extending shelf life of leafy greens and vegetables.',
      specs: [
        { label: 'Shelf Life Extension', value: '2-3× longer' },
        { label: 'Application Method', value: 'Spray' },
        { label: 'Suitable For', value: 'All leafy greens' },
        { label: 'Certifications', value: 'GRAS, Organic compatible' }
      ],
      available: false,
      details: {
        overview: 'Leafy Fresh is specifically formulated to extend the shelf life of leafy greens and vegetables.',
        benefits: ['Maintains crispness and color', 'Prevents wilting and yellowing', 'Reduces microbial growth', 'Preserves nutritional content'],
        technicalSpecs: { composition: 'Proprietary blend of food-grade ingredients', application: 'Apply as spray during post-harvest processing', dosage: '1-2% solution', compatibility: 'Compatible with existing packing lines', storage: 'Store in cool, dry place' }
      }
    },
    {
      id: 'floral-life',
      name: 'Floral Life',
      image: floralLifeImg,
      badge: 'Shelf Life',
      badgeType: 'primary',
      category: 'shelf-life',
      description: 'Specialized solution for extending vase life of cut flowers.',
      specs: [
        { label: 'Vase Life Extension', value: '2-3× longer' },
        { label: 'Application Method', value: 'Spray or dip' },
        { label: 'Suitable For', value: 'Most cut flowers' },
        { label: 'Certifications', value: 'Eco-friendly' }
      ],
      available: false,
      details: {
        overview: 'Floral Life is designed to extend the vase life of cut flowers.',
        benefits: ['Extends vase life significantly', 'Maintains petal color and appearance', 'Prevents wilting and drooping', 'Reduces microbial growth in vase water'],
        technicalSpecs: { composition: 'Proprietary blend of plant-friendly ingredients', application: 'Apply as spray or add to vase water', dosage: '1-2% solution', compatibility: 'Compatible with most cut flower varieties', storage: 'Store in cool, dry place' }
      }
    },
    {
      id: 'apple-keep',
      name: 'Apple Keep',
      image: appleKeepImg,
      badge: 'Shelf Life',
      badgeType: 'primary',
      category: 'shelf-life',
      description: 'Specialized formulation for extending shelf life of apples and pome fruits.',
      specs: [
        { label: 'Shelf Life Extension', value: '3-5× longer' },
        { label: 'Application Method', value: 'Spray or dip' },
        { label: 'Suitable For', value: 'Apples and pome fruits' },
        { label: 'Certifications', value: 'GRAS, Organic compatible' }
      ],
      available: false,
      details: {
        overview: 'Apple Keep is specifically formulated to extend the shelf life of apples and other pome fruits.',
        benefits: ['Maintains fruit firmness and crispness', 'Prevents browning and softening', 'Reduces respiration rate', 'Preserves flavor profile'],
        technicalSpecs: { composition: 'Proprietary blend of food-grade ingredients', application: 'Apply as spray or dip during post-harvest processing', dosage: '1-2% solution', compatibility: 'Compatible with existing packing lines', storage: 'Store in cool, dry place' }
      }
    },
    // === BIO-CAPSULE SOLUTIONS ===
    {
      id: 'zinc-grow-caps',
      name: 'Spanex Zinc Grow Caps',
      image: zincProImg,
      badge: 'Bio-Capsule',
      badgeType: 'secondary',
      category: 'bio-capsule',
      description: 'Zinc solubilizing bio-fertilizer capsules using Bacillus subtilis for enhanced micronutrient availability.',
      specs: [
        { label: 'Active Organism', value: 'Bacillus subtilis MTCC 8141' },
        { label: 'CFU Count', value: '1 Trillion+ per capsule' },
        { label: 'Dosage', value: '1-3 capsules per acre' },
        { label: 'Certifications', value: 'ISO 9001:2015, GMP' }
      ],
      available: true,
      details: {
        overview: 'Spanex Zinc Grow Caps contain Bacillus subtilis MTCC 8141 for zinc solubilization, making zinc more available to crops for improved growth and yield.',
        benefits: ['Enhances zinc availability in soil', 'Improves crop quality and yield', 'Reduces dependency on chemical zinc fertilizers', 'Safe plant-based HPMC capsules'],
        technicalSpecs: { activeIngredient: 'Bacillus subtilis MTCC 8141 (90% w/w)', carrier: 'Pharma-grade Talcum Powder (9% w/w)', capsule: 'HPMC plant-based (0.5% w/w)', shelfLife: '16+ months', storage: 'Below 40°C, dry conditions' }
      }
    },
    {
      id: 'rhizo-caps',
      name: 'Spanex Rhizo Caps',
      image: rhizoCapsImg,
      badge: 'Bio-Capsule',
      badgeType: 'secondary',
      category: 'bio-capsule',
      description: 'Nitrogen-fixing bio-fertilizer capsules with Rhizobium spp. for leguminous crops.',
      specs: [
        { label: 'Active Organism', value: 'Rhizobium spp.' },
        { label: 'CFU Count', value: '1 Trillion+ per capsule' },
        { label: 'Dosage', value: '1-3 capsules per acre' },
        { label: 'Certifications', value: 'ISO 9001:2015, GMP' }
      ],
      available: true,
      details: {
        overview: 'Spanex Rhizo Caps harness Rhizobium bacteria to fix atmospheric nitrogen for leguminous crops, reducing the need for synthetic nitrogen fertilizers.',
        benefits: ['Natural nitrogen fixation for legumes', 'Improves root nodulation', 'Enhances soil fertility naturally', 'Reduces chemical fertilizer costs by up to 90%'],
        technicalSpecs: { activeIngredient: 'Rhizobium spp. (90% w/w)', carrier: 'Pharma-grade Talcum Powder (9% w/w)', capsule: 'HPMC plant-based (0.5% w/w)', shelfLife: '16+ months', storage: 'Below 40°C, dry conditions' }
      }
    },
    {
      id: 'psb-plus-caps',
      name: 'Spanex PSB Plus Caps',
      image: psbProImg,
      badge: 'Bio-Capsule',
      badgeType: 'secondary',
      category: 'bio-capsule',
      description: 'Phosphate solubilizing bio-fertilizer capsules with Bacillus megaterium for improved phosphorus uptake.',
      specs: [
        { label: 'Active Organism', value: 'Bacillus megaterium' },
        { label: 'CFU Count', value: '1 Trillion+ per capsule' },
        { label: 'Dosage', value: '1-3 capsules per acre' },
        { label: 'Certifications', value: 'ISO 9001:2015, GMP' }
      ],
      available: true,
      details: {
        overview: 'Spanex PSB Plus Caps use Bacillus megaterium to solubilize bound phosphorus in soil, making it available for plant uptake.',
        benefits: ['Unlocks bound phosphorus in soil', 'Improves root development', 'Enhances flowering and fruiting', 'Reduces phosphate fertilizer dependency'],
        technicalSpecs: { activeIngredient: 'Bacillus megaterium (90% w/w)', carrier: 'Pharma-grade Talcum Powder (9% w/w)', capsule: 'HPMC plant-based (0.5% w/w)', shelfLife: '16+ months', storage: 'Below 40°C, dry conditions' }
      }
    },
    {
      id: 'potash-grow-caps',
      name: 'Spanex Potash Grow Caps',
      image: potashProImg,
      badge: 'Bio-Capsule',
      badgeType: 'secondary',
      category: 'bio-capsule',
      description: 'Potassium solubilizing bio-fertilizer capsules with Bacillus decolorationis.',
      specs: [
        { label: 'Active Organism', value: 'Bacillus decolorationis' },
        { label: 'CFU Count', value: '1 Trillion+ per capsule' },
        { label: 'Dosage', value: '1-3 capsules per acre' },
        { label: 'Certifications', value: 'ISO 9001:2015, GMP' }
      ],
      available: true,
      details: {
        overview: 'Spanex Potash Grow Caps contain Bacillus decolorationis to mobilize potassium in soil, essential for crop health and disease resistance.',
        benefits: ['Mobilizes soil potassium', 'Strengthens plant disease resistance', 'Improves water retention in crops', 'Reduces potash fertilizer costs'],
        technicalSpecs: { activeIngredient: 'Bacillus decolorationis (90% w/w)', carrier: 'Pharma-grade Talcum Powder (9% w/w)', capsule: 'HPMC plant-based (0.5% w/w)', shelfLife: '16+ months', storage: 'Below 40°C, dry conditions' }
      }
    },
    {
      id: 'azo-pro-caps',
      name: 'Spanex Azo Pro Caps',
      image: azoProImg,
      badge: 'Bio-Capsule',
      badgeType: 'secondary',
      category: 'bio-capsule',
      description: 'Nitrogen-fixing bio-fertilizer capsules with Azospirillum brasilense for cereals and grasses.',
      specs: [
        { label: 'Active Organism', value: 'Azospirillum brasilense' },
        { label: 'CFU Count', value: '1 Trillion+ per capsule' },
        { label: 'Dosage', value: '1-3 capsules per acre' },
        { label: 'Certifications', value: 'ISO 9001:2015, GMP' }
      ],
      available: true,
      details: {
        overview: 'Spanex Azo Pro Caps use Azospirillum brasilense for nitrogen fixation in cereals, grasses, and non-leguminous crops.',
        benefits: ['Fixes atmospheric nitrogen for non-legumes', 'Promotes root growth and development', 'Increases crop yield by 15-20%', 'Supports sustainable farming practices'],
        technicalSpecs: { activeIngredient: 'Azospirillum brasilense (90% w/w)', carrier: 'Pharma-grade Talcum Powder (9% w/w)', capsule: 'HPMC plant-based (0.5% w/w)', shelfLife: '16+ months', storage: 'Below 40°C, dry conditions' }
      }
    },
    {
      id: 'azoto-caps',
      name: 'Spanex Azoto Bio Pro Caps',
      image: azotoProImg,
      badge: 'Bio-Capsule',
      badgeType: 'secondary',
      category: 'bio-capsule',
      description: 'Free-living nitrogen-fixing capsules with Azotobacter chroococcum for all crop types.',
      specs: [
        { label: 'Active Organism', value: 'Azotobacter chroococcum' },
        { label: 'CFU Count', value: '1 Trillion+ per capsule' },
        { label: 'Dosage', value: '1-3 capsules per acre' },
        { label: 'Certifications', value: 'ISO 9001:2015, GMP' }
      ],
      available: true,
      details: {
        overview: 'Spanex Azoto Bio Pro Caps contain Azotobacter chroococcum, a free-living nitrogen fixer suitable for all crop types.',
        benefits: ['Free-living nitrogen fixation — works with all crops', 'Produces plant growth hormones', 'Improves soil structure', 'No crop-specific limitations'],
        technicalSpecs: { activeIngredient: 'Azotobacter chroococcum NCIM 2632 (90% w/w)', carrier: 'Pharma-grade Talcum Powder (9% w/w)', capsule: 'HPMC plant-based (0.5% w/w)', shelfLife: '16+ months', storage: 'Below 40°C, dry conditions' }
      }
    },
    {
      id: 'aceto-caps',
      name: 'Spanex Aceto Bio Pro Caps',
      image: acetoProImg,
      badge: 'Bio-Capsule',
      badgeType: 'secondary',
      category: 'bio-capsule',
      description: 'Specialized nitrogen-fixing capsules with Gluconacetobacter for sugarcane and tropical crops.',
      specs: [
        { label: 'Active Organism', value: 'Gluconacetobacter diazotrophicus' },
        { label: 'CFU Count', value: '1 Trillion+ per capsule' },
        { label: 'Dosage', value: '1-3 capsules per acre' },
        { label: 'Certifications', value: 'ISO 9001:2015, GMP' }
      ],
      available: true,
      details: {
        overview: 'Spanex Aceto Bio Pro Caps use Gluconacetobacter diazotrophicus, specifically suited for sugarcane and tropical crop nitrogen fixation.',
        benefits: ['Targeted nitrogen fixation for sugarcane', 'Enhances sugar content and yield', 'Thrives in acidic environments', 'Ideal for tropical and subtropical crops'],
        technicalSpecs: { activeIngredient: 'Gluconacetobacter diazotrophicus (90% w/w)', carrier: 'Pharma-grade Talcum Powder (9% w/w)', capsule: 'HPMC plant-based (0.5% w/w)', shelfLife: '16+ months', storage: 'Below 40°C, dry conditions' }
      }
    },
    {
      id: 'npk-grow-caps',
      name: 'Spanex NPK Grow Caps',
      image: npkGrowImg,
      badge: 'Bio-Capsule',
      badgeType: 'secondary',
      category: 'bio-capsule',
      description: 'Complete NPK bio-fertilizer capsules combining nitrogen, phosphorus, and potassium solubilizers.',
      specs: [
        { label: 'Active Organisms', value: 'Combined N-P-K solubilizers' },
        { label: 'CFU Count', value: '1 Trillion+ per capsule' },
        { label: 'Dosage', value: '1-3 capsules per acre' },
        { label: 'Certifications', value: 'ISO 9001:2015, GMP' }
      ],
      available: true,
      details: {
        overview: 'Spanex NPK Grow Caps are the all-in-one solution combining nitrogen fixation, phosphate solubilization, and potassium mobilization in a single capsule.',
        benefits: ['Complete NPK nutrition in one capsule', 'Simplifies application for growers', 'Replaces up to 90% of chemical NPK fertilizers', '60-70% reduction in input costs'],
        technicalSpecs: { activeIngredient: 'Combined N-P-K microbial consortium (90% w/w)', carrier: 'Pharma-grade Talcum Powder (9% w/w)', capsule: 'HPMC plant-based (0.5% w/w)', shelfLife: '16+ months', storage: 'Below 40°C, dry conditions' }
      }
    },
  ];
  
  // Filter products based on active category
  const filteredProducts = products.filter(product => product.category === activeCategory);
  
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

  // Handle request sample
  const handleRequestSample = (product) => {
    setSampleProduct(product);
    setSampleSubmitted(false);
    setSampleForm({ name: '', email: '', company: '', abn: '', phone: '', message: '' });
    document.body.style.overflow = 'hidden';
  };

  const closeSampleModal = () => {
    setSampleProduct(null);
    document.body.style.overflow = '';
  };

  const handleSampleFormChange = (e) => {
    setSampleForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSampleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link as simple notification
    const subject = encodeURIComponent(`Test Sample Request: ${sampleProduct.name}`);
    const body = encodeURIComponent(
      `New test sample request:\n\nProduct: ${sampleProduct.name}\nName: ${sampleForm.name}\nEmail: ${sampleForm.email}\nCompany: ${sampleForm.company}\nABN: ${sampleForm.abn}\nPhone: ${sampleForm.phone}\nMessage: ${sampleForm.message}`
    );
    window.open(`mailto:info@spanex.com.au?subject=${subject}&body=${body}`);
    setSampleSubmitted(true);
  };
  
  return (
    <section className={styles.section} id="products">
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Solutions</h2>
          <p className={styles.sectionSubtitle}>
            From shelf life extension to sustainable bio-fertilizers — specialized solutions for the entire agricultural supply chain
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
                onRequestSample={handleRequestSample}
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
        {/* Sample Request Modal */}
        {sampleProduct && (
          <div className={styles.modalBackdrop} onClick={closeSampleModal}>
            <div
              className={styles.modalContent}
              onClick={e => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={closeSampleModal}
                aria-label="Close sample request"
              >
                ✕
              </button>

              <div className={styles.modalHeader}>
                <div className={styles.modalImage}>
                  <img src={sampleProduct.image} alt={sampleProduct.name} />
                </div>
                <div className={styles.modalHeaderContent}>
                  <h3 className={styles.modalTitle}>Request Test Sample</h3>
                  <p className={styles.modalDescription}>
                    {sampleProduct.name}
                  </p>
                </div>
              </div>

              <div className={styles.modalBody}>
                {sampleSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                    <h4 style={{ color: '#2d5500', marginBottom: '0.5rem' }}>Request Sent!</h4>
                    <p style={{ color: '#666' }}>
                      Thank you for your interest in {sampleProduct.name}. Our team will contact you within 1-2 business days.
                    </p>
                    <button
                      onClick={closeSampleModal}
                      className={styles.ctaButton}
                      style={{ marginTop: '1rem' }}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSampleSubmit}>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                            Full Name *
                          </label>
                          <input
                            type="text" name="name" required value={sampleForm.name}
                            onChange={handleSampleFormChange}
                            style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                            Email *
                          </label>
                          <input
                            type="email" name="email" required value={sampleForm.email}
                            onChange={handleSampleFormChange}
                            style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                            Company Name *
                          </label>
                          <input
                            type="text" name="company" required value={sampleForm.company}
                            onChange={handleSampleFormChange}
                            style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                            ABN
                          </label>
                          <input
                            type="text" name="abn" value={sampleForm.abn}
                            onChange={handleSampleFormChange}
                            placeholder="Optional"
                            style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                          Phone
                        </label>
                        <input
                          type="tel" name="phone" value={sampleForm.phone}
                          onChange={handleSampleFormChange}
                          placeholder="Optional"
                          style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', boxSizing: 'border-box' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600, fontSize: '0.9rem', color: '#333' }}>
                          Message
                        </label>
                        <textarea
                          name="message" rows="3" value={sampleForm.message}
                          onChange={handleSampleFormChange}
                          placeholder="Tell us about your use case, crop types, or any specific requirements..."
                          style={{ width: '100%', padding: '0.6rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.95rem', resize: 'vertical', boxSizing: 'border-box' }}
                        />
                      </div>
                      <button
                        type="submit"
                        style={{
                          padding: '0.75rem 2rem',
                          backgroundColor: '#2d5500',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '1rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'background-color 0.3s',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        Submit Sample Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductSection;