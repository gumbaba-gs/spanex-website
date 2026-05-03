import React, { useEffect } from 'react';
import './SpanexShieldHero.css';

const SpanexHero = () => {
  // Trigger scroll reveal observer once on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="hero" id="home">
      {/* Decorative patent number rotated 90° on the left edge */}
      <div className="hero-patent-stamp">IN&nbsp;361021&nbsp;/&nbsp;CHE&nbsp;/&nbsp;2013</div>

      <div className="hero-grid">
        {/* === LEFT — TEXT === */}
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span>Patented Microbial Encapsulation · IN&nbsp;361021/CHE/2013</span>
          </div>

          <h1 className="hero-headline">
            Living biology<br />
            delivered as a <em>capsule</em>—<br />
            <span className="hero-headline-strong">not a bag.</span>
          </h1>

          <p className="hero-lede">
            One gram. One trillion microbes. Two-year ambient shelf life. Engineered for the distance and discipline of Australian agriculture.
          </p>

          <div className="hero-data">
            <div className="data-cell">
              <div className="data-value">10<sup>12+</sup></div>
              <div className="data-unit">CFU per capsule</div>
            </div>
            <div className="data-cell">
              <div className="data-value">2<span className="data-value-sub">yr</span></div>
              <div className="data-unit">Ambient shelf life</div>
            </div>
            <div className="data-cell">
              <div className="data-value">8</div>
              <div className="data-unit">Specialised SKUs</div>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#biocapsules" className="btn btn-primary">
              Read the Science
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-link">Request a sample</a>
          </div>
        </div>

        {/* === RIGHT — CAPSULE STAGE === */}
        <div className="hero-visual">
          <div className="capsule-stage">
            <div className="capsule-circle" aria-hidden="true"></div>
            <div className="capsule-art" aria-hidden="true">
              <div className="capsule-half capsule-half--top">
                <div className="capsule-brand">SPANEX</div>
              </div>
              <div className="capsule-half capsule-half--bottom">
                <div className="capsule-cfu">
                  10<sup>12</sup>
                </div>
                <div className="capsule-cfu-label">CFU · POST-ACTIVATION</div>
              </div>
            </div>

            <div className="annotation annotation--left ann-1">
              <div><strong>Plant-based HPMC</strong><br />shell · 1 g · ICAR-IISR</div>
            </div>
            <div className="annotation annotation--right ann-2">
              <div><strong>Lyophilised cells</strong><br />NCIM / MTCC verified</div>
            </div>
            <div className="annotation annotation--left ann-3">
              <div><strong>Activates in 6–8 hr</strong><br />cold-water soak</div>
            </div>
            <div className="annotation annotation--right ann-4">
              <div><strong>Multiplies 10×</strong><br />before field application</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpanexHero;
