// src/components/products/ProductSection.jsx — Editorial Pharma-Bio refactor
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductSection.module.css';

// Shelf Life product images
import berryFreshImg from '../home/images/blueberries.jpeg';
import avocadoExtendImg from '../home/images/avocado.jpg';
import citrusGuardImg from '../home/images/oranges.jpg';
import leafyFreshImg from '../home/images/leafyveg.jpeg';
import floralLifeImg from '../home/images/flowers.jpeg';
import appleKeepImg from '../home/images/apple.jpg';

// Bio-Capsule product images (Spanex branded boxes)
import potashProImg from '../home/images/bio-capsules/box-potash-grow.jpeg';
import azoProImg from '../home/images/bio-capsules/box-azoss.jpeg';
import azotoProImg from '../home/images/bio-capsules/box-azoto.jpeg';
import psbProImg from '../home/images/bio-capsules/box-psb-plus.jpeg';
import acetoProImg from '../home/images/bio-capsules/box-aceto.jpeg';
import rhizoCapsImg from '../home/images/bio-capsules/box-rhizo.jpeg';
import npkGrowImg from '../home/images/bio-capsules/box-npk-grow.jpeg';
import zincProImg from '../home/images/bio-capsules/box-zinc-grow.jpeg';

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
    { id: 'bio-capsule', name: 'Bio-Capsule', detail: 'In production' },
    { id: 'shelf-life',  name: 'Shelf-Life',  detail: 'In development' },
  ];
  
  // Product data
  const products = [
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
        { label: 'Dosage', value: '5 capsules per 2 hectares' },
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
        { label: 'Dosage', value: '5 capsules per 2 hectares' },
        { label: 'Certifications', value: 'ISO 9001:2015, GMP' }
      ],
      available: true,
      details: {
        overview: 'Spanex Rhizo Caps harness Rhizobium bacteria to fix atmospheric nitrogen for leguminous crops, reducing the need for synthetic nitrogen fertilizers.',
        benefits: ['Natural nitrogen fixation for legumes', 'Improves root nodulation', 'Enhances soil fertility naturally', 'Reduces synthetic fertiliser dependency through biological N-fixation'],
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
        { label: 'Dosage', value: '5 capsules per 2 hectares' },
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
        { label: 'Dosage', value: '5 capsules per 2 hectares' },
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
        { label: 'Dosage', value: '5 capsules per 2 hectares' },
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
        { label: 'Dosage', value: '5 capsules per 2 hectares' },
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
        { label: 'Dosage', value: '5 capsules per 2 hectares' },
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
        { label: 'Dosage', value: '5 capsules per 2 hectares' },
        { label: 'Certifications', value: 'ISO 9001:2015, GMP' }
      ],
      available: true,
      details: {
        overview: 'Spanex NPK Grow Caps are the all-in-one solution combining nitrogen fixation, phosphate solubilization, and potassium mobilization in a single capsule.',
        benefits: ['Complete NPK nutrition in one capsule', 'Simplifies application for growers', 'Reduces synthetic NPK fertiliser dependency', '60-70% reduction in input costs'],
        technicalSpecs: { activeIngredient: 'Combined N-P-K microbial consortium (90% w/w)', carrier: 'Pharma-grade Talcum Powder (9% w/w)', capsule: 'HPMC plant-based (0.5% w/w)', shelfLife: '16+ months', storage: 'Below 40°C, dry conditions' }
      }
    },
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
  ];
  
  // Filter products based on active category
  const filteredProducts = products.filter(product => product.category === activeCategory);
  
  // Handle view details click
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Handle request sample
  const handleRequestSample = (product) => {
    setSampleProduct(product);
    setSampleSubmitted(false);
    setSampleForm({ name: '', email: '', company: '', abn: '', phone: '', message: '' });
  };

  const closeSampleModal = () => {
    setSampleProduct(null);
  };

  // Lock body scroll while any modal is open + ESC closes
  const anyModalOpen = !!selectedProduct || !!sampleProduct;
  useEffect(() => {
    if (!anyModalOpen) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (selectedProduct) setSelectedProduct(null);
        else if (sampleProduct) setSampleProduct(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKey);
    };
  }, [anyModalOpen, selectedProduct, sampleProduct]);

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
      {/* Vertical right-edge stamp — matches the editorial chapters */}
      <div className={styles.marginStamp} aria-hidden="true">
        SPANEX CATALOGUE · BIO-CAPSULE · SHELF-LIFE · MEEM INTERNATIONAL
      </div>

      <div className={styles.inner}>
        <header className={styles.head}>
          <div className={styles.sectionMarker}>
            <span className={styles.sectionMarkerNum}>06.</span>
            Products
          </div>
          <h2 className={styles.headline}>
            Eight bio-capsule SKUs <em>in production</em>.<br />
            Six shelf-life formats <em>in development</em>.
          </h2>
          <p className={styles.lede}>
            The full SPANEX catalogue — from microbial soil inoculants
            to edible biocoatings. Browse by category. Learn the spec.
            Request a sample.
          </p>
        </header>

        {/* Category filter — editorial mono filter row */}
        <div className={styles.filterRow} role="tablist" aria-label="Filter products by category">
          {categories.map((cat) => {
            const active = activeCategory === cat.id;
            const count = products.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={`${styles.filter} ${active ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <div className={styles.filterMain}>
                  <span className={styles.filterName}>{cat.name}</span>
                  <span className={styles.filterDetail}>{cat.detail}</span>
                </div>
                <span className={styles.filterCount}>{String(count).padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>

        {/* Products grid */}
        <div className={styles.productsGrid}>
          {filteredProducts.map((product, idx) => (
            <div key={product.id} className={styles.productItem}>
              <ProductCard
                product={product}
                index={idx}
                onViewDetails={handleViewDetails}
                onRequestSample={handleRequestSample}
              />
            </div>
          ))}
        </div>
      </div>

      {/* === Product Details Modal — editorial monograph === */}
      {selectedProduct && (
        <div className={styles.modalBackdrop} onClick={closeModal} role="presentation">
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`product-modal-${selectedProduct.id}`}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
              aria-label="Close product details"
            >
              Close ×
            </button>

            <header className={styles.modalHead}>
              <div className={styles.modalDocId}>
                SPANEX · {selectedProduct.badge}
                {!selectedProduct.available && ' · In development'}
              </div>
              <h3
                id={`product-modal-${selectedProduct.id}`}
                className={styles.modalTitle}
              >
                {selectedProduct.name}
              </h3>
              <p className={styles.modalDesc}>{selectedProduct.description}</p>
            </header>

            <div className={styles.modalBody}>
              <div className={styles.modalImageStrip}>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>

              <section className={styles.modalChapter}>
                <div className={styles.modalChapterLabel}>§ I — Overview</div>
                <p className={styles.modalChapterBody}>
                  {selectedProduct.details.overview}
                </p>
              </section>

              <section className={styles.modalChapter}>
                <div className={styles.modalChapterLabel}>§ II — Key Benefits</div>
                <ul className={styles.benefitsList}>
                  {selectedProduct.details.benefits.map((benefit, i) => (
                    <li key={i} className={styles.benefitItem}>
                      <span className={styles.benefitNum}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className={styles.modalChapter}>
                <div className={styles.modalChapterLabel}>§ III — Technical Specifications</div>
                <dl className={styles.techSpecs}>
                  {Object.entries(selectedProduct.details.technicalSpecs).map(([key, value]) => (
                    <div key={key} className={styles.techSpecRow}>
                      <dt className={styles.techSpecLabel}>
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}
                      </dt>
                      <dd className={styles.techSpecValue}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <footer className={styles.modalFoot}>
                <div className={styles.modalFootLabel}>
                  Interested in {selectedProduct.name}?
                </div>
                <div className={styles.modalFootCtas}>
                  <a href="#contact" className={styles.modalCta} onClick={closeModal}>
                    Request technical specs
                    <span aria-hidden="true">→</span>
                  </a>
                  <a href="#contact" className={styles.modalCtaGhost} onClick={closeModal}>
                    Schedule demo
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      )}

      {/* === Sample Request Modal — editorial form === */}
      {sampleProduct && (
        <div className={styles.modalBackdrop} onClick={closeSampleModal} role="presentation">
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="sample-modal-title"
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeSampleModal}
              aria-label="Close sample request"
            >
              Close ×
            </button>

            <header className={styles.modalHead}>
              <div className={styles.modalDocId}>SPANEX · Sample Request</div>
              <h3 id="sample-modal-title" className={styles.modalTitle}>
                Request a test sample
              </h3>
              <p className={styles.modalDesc}>
                <strong>{sampleProduct.name}</strong> — fill the form below;
                our team responds within one to two business days.
              </p>
            </header>

            <div className={styles.modalBody}>
              {sampleSubmitted ? (
                <div className={styles.successPanel}>
                  <div className={styles.successMark}>✓</div>
                  <div className={styles.successTitle}>Request sent</div>
                  <p className={styles.successBody}>
                    Thank you for your interest in <strong>{sampleProduct.name}</strong>.
                    Our team will be in touch within one to two business days.
                  </p>
                  <button
                    type="button"
                    onClick={closeSampleModal}
                    className={styles.modalCta}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSampleSubmit} className={styles.sampleForm}>
                  <div className={styles.sampleFormRow}>
                    <label className={styles.formField}>
                      <span className={styles.formLabel}>Full name *</span>
                      <input
                        type="text" name="name" required value={sampleForm.name}
                        onChange={handleSampleFormChange}
                        className={styles.formInput}
                      />
                    </label>
                    <label className={styles.formField}>
                      <span className={styles.formLabel}>Email *</span>
                      <input
                        type="email" name="email" required value={sampleForm.email}
                        onChange={handleSampleFormChange}
                        className={styles.formInput}
                      />
                    </label>
                  </div>
                  <div className={styles.sampleFormRow}>
                    <label className={styles.formField}>
                      <span className={styles.formLabel}>Company *</span>
                      <input
                        type="text" name="company" required value={sampleForm.company}
                        onChange={handleSampleFormChange}
                        className={styles.formInput}
                      />
                    </label>
                    <label className={styles.formField}>
                      <span className={styles.formLabel}>ABN</span>
                      <input
                        type="text" name="abn" value={sampleForm.abn}
                        onChange={handleSampleFormChange}
                        placeholder="Optional"
                        className={styles.formInput}
                      />
                    </label>
                  </div>
                  <label className={styles.formField}>
                    <span className={styles.formLabel}>Phone</span>
                    <input
                      type="tel" name="phone" value={sampleForm.phone}
                      onChange={handleSampleFormChange}
                      placeholder="Optional"
                      className={styles.formInput}
                    />
                  </label>
                  <label className={styles.formField}>
                    <span className={styles.formLabel}>Message</span>
                    <textarea
                      name="message" rows="3" value={sampleForm.message}
                      onChange={handleSampleFormChange}
                      placeholder="Tell us about your use case, crop types, or any specific requirements…"
                      className={styles.formInput}
                    />
                  </label>
                  <button type="submit" className={styles.modalCta}>
                    Submit sample request
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;