// CompareSection — three-format comparison on dark forest background
import React, { useEffect, useRef } from 'react';
import './CompareSection.css';

const CompareSection = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="compare" id="comparison" ref={ref}>
      <div className="compare-inner">
        <div className="section-marker compare-marker">
          <span className="section-marker-num">02.</span>
          Compared to conventional
        </div>
        <h2 className="compare-headline">
          Three formats. <em>Different physics.</em><br />
          Different economics.
        </h2>

        <div className="compare-grid">
          <div className="compare-col reveal">
            <div className="compare-col-tag">Format · 01</div>
            <div className="compare-col-title">Conventional Powder</div>
            <div className="compare-row">
              <div className="compare-row-label">Density</div>
              <div className="compare-row-value">~10⁹ CFU / gram</div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Coverage</div>
              <div className="compare-row-value">~1 kg per hectare</div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Shelf life</div>
              <div className="compare-row-value">6–12 months</div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Cold chain</div>
              <div className="compare-row-value">Sometimes required</div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Logistics</div>
              <div className="compare-row-value">Pallet freight, dust handling, PPE</div>
            </div>
          </div>

          <div className="compare-col reveal" data-delay="1">
            <div className="compare-col-tag">Format · 02</div>
            <div className="compare-col-title">Conventional Liquid</div>
            <div className="compare-row">
              <div className="compare-row-label">Density</div>
              <div className="compare-row-value">~10⁹–10¹⁰ CFU / mL</div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Coverage</div>
              <div className="compare-row-value">~5–10 L per hectare</div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Shelf life</div>
              <div className="compare-row-value">3–6 months refrigerated</div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Cold chain</div>
              <div className="compare-row-value">Often required</div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Logistics</div>
              <div className="compare-row-value">Drums, refrigerated transport</div>
            </div>
          </div>

          <div className="compare-col compare-col--spanex reveal" data-delay="2">
            <div className="compare-col-tag">Format · 03 · SPANEX</div>
            <div className="compare-col-title">Bio-Capsule</div>
            <div className="compare-row">
              <div className="compare-row-label">Density</div>
              <div className="compare-row-value"><strong>≥10¹² CFU / gram</strong></div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Coverage</div>
              <div className="compare-row-value"><strong>1 g per hectare</strong></div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Shelf life</div>
              <div className="compare-row-value"><strong>2 years ambient</strong></div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Cold chain</div>
              <div className="compare-row-value"><strong>None required</strong></div>
            </div>
            <div className="compare-row">
              <div className="compare-row-label">Logistics</div>
              <div className="compare-row-value"><strong>Mail-order, shelf-stable, no equipment</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
