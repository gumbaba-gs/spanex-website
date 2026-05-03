// ShelfLifeSection — Editorial Pharma-Bio treatment for the Shelf-Life Extender
import React, { useEffect, useRef } from 'react';
import './ShelfLifeSection.css';
import shelfLifeImg from './images/shelf-life.png';

const ShelfLifeSection = () => {
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
    <section className="shelflife" id="shelflife" ref={ref}>
      <div className="shelflife-grid">
        {/* === LEFT: Image === */}
        <div className="shelflife-visual reveal">
          <div className="sl-stage">
            <div className="sl-orbit" aria-hidden="true"></div>
            <img
              src={shelfLifeImg}
              alt="SPANEX shelf-life extender — fresh produce protected against spoilage"
              className="sl-image"
            />
            <div className="sl-image-caption">
              <span className="sl-image-caption-label">FIG. 05 ·</span>
              SPANEX-treated vs untreated produce, ambient storage
            </div>
          </div>
        </div>

        {/* === RIGHT: Editorial text === */}
        <div className="shelflife-text">
          <div className="section-marker">
            <span className="section-marker-num">05.</span>
            Shelf-Life Extender
          </div>

          <div className="shelflife-status reveal">
            <span className="shelflife-status-dot"></span>
            In development · Pilot trials Q3&nbsp;2026 · Commercial Q4&nbsp;2026
          </div>

          <h2 className="shelflife-headline reveal" data-delay="1">
            An <em>edible biocoating</em><br />
            that slows respiration<br />
            and arrests spoilage.
          </h2>

          <p className="shelflife-lede reveal" data-delay="2">
            Food-grade powder formulations applied as a fine spray or dip
            at the packhouse. Forms a microscopic protective layer over
            harvested produce — slowing gas exchange, inhibiting microbial
            colonisation, and extending shelf life by <strong>2× or more</strong>
            at ambient temperature.
          </p>

          <div className="shelflife-data reveal" data-delay="3">
            <div className="shelflife-data-cell">
              <div className="shelflife-data-value">2×<span className="data-value-sub">+</span></div>
              <div className="shelflife-data-unit">Shelf-life extension</div>
            </div>
            <div className="shelflife-data-cell">
              <div className="shelflife-data-value">GRAS</div>
              <div className="shelflife-data-unit">Food-grade ingredients</div>
            </div>
            <div className="shelflife-data-cell">
              <div className="shelflife-data-value">∅</div>
              <div className="shelflife-data-unit">No taste impact</div>
            </div>
          </div>

          <div className="shelflife-applications reveal" data-delay="4">
            <div className="shelflife-applications-label">Target applications</div>
            <div className="shelflife-applications-list">
              Berries · Citrus · Avocados · Stone fruit · Leafy greens · Cut flowers · Tomatoes
            </div>
          </div>

          <div className="shelflife-cta reveal" data-delay="5">
            <a href="#contact" className="btn btn-link">Register interest →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShelfLifeSection;
