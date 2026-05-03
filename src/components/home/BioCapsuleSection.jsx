// BioCapsuleSection — Editorial Pharma-Bio treatment for the bio-capsule technology
import React, { useEffect, useRef } from 'react';
import './BioCapsuleSection.css';
import CropSchedulesTab from './CropSchedulesTab';
import capsuleImg from './images/bio-capsules/capsule.webp';

const STATS = [
  { value: '10¹²',  unit: 'CFU per capsule' },
  { value: '16',    unit: 'Months ambient',   sup: '+ mo' },
  { value: '8',     unit: 'Active SKUs' },
  { value: '∅',     unit: 'Animal derivatives' },
];

const PROTOCOL = [
  { phase: 'prep', step: '01', title: 'Take 5 capsules',     detail: 'Five SPANEX bio-capsules.' },
  { phase: 'prep', step: '02', title: 'Add 5 L water',       detail: 'Clean, chlorine-free.' },
  { phase: 'prep', step: '03', title: 'Soak 6–8 hours',      detail: 'Or overnight; agitate intermittently.' },
  { phase: 'app',  step: '04', title: 'Dilute in 500 L',     detail: 'Mix activated solution into spray volume.' },
  { phase: 'app',  step: '05', title: 'Apply to 2 ha',       detail: 'Drip, irrigation, or soil drench at root zone.' },
];

const BioCapsuleSection = () => {
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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="biocap" id="biocapsules" ref={ref}>
      {/* Vertical-rotated print stamp on the right edge — matches Shelf-Life */}
      <div className="biocap-margin-stamp" aria-hidden="true">
        PATENTED ENCAPSULATION · ICAR-IISR · ISO 9001:2015 · GMP
      </div>

      {/* === A. Specimen — image + editorial text === */}
      <div className="biocap-grid biocap-block">
        {/* LEFT: text */}
        <div className="biocap-text">
          <div className="section-marker">
            <span className="section-marker-num">03.</span>
            Bio-Capsule
          </div>

          <div className="biocap-status reveal">
            <span className="biocap-status-dot"></span>
            In production · ICAR-IISR licensed · DAFF-permitted Mar&nbsp;2026
          </div>

          <h2 className="biocap-headline reveal" data-delay="1">
            One <em>trillion</em> microbes,<br />
            sealed inside a capsule<br />
            the size of <em>a vitamin</em>.
          </h2>

          <p className="biocap-lede reveal" data-delay="2">
            <strong>SPANEX bio-capsules</strong> are pharmaceutical-grade HPMC capsules
            housing lyophilised consortia of beneficial soil microbes — fixed at peak
            viability inside a plant-based shell. The format isn't decorative.
            Encapsulation is the only reason a one-gram dose is shelf-stable for
            two years at ambient temperature, ships by mail, and reaches the
            rhizosphere with most of its cells still alive.
          </p>

          <div className="biocap-patent reveal" data-delay="3">
            <span className="biocap-patent-label">Patent</span>
            <span className="biocap-patent-num">IN 361021/CHE/2013</span>
            <span className="biocap-patent-holder">
              ICAR-IISR · Manufactured under licence by SRT Agro Science
            </span>
          </div>

          <div className="biocap-stats reveal" data-delay="4">
            {STATS.map((s) => (
              <div className="biocap-stat-cell" key={s.unit}>
                <div className="biocap-stat-value">
                  {s.value}
                  {s.sup && <span className="biocap-stat-sup">{s.sup}</span>}
                </div>
                <div className="biocap-stat-unit">{s.unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: capsule image with orbit (mirrors Shelf-Life treatment) */}
        <div className="biocap-visual reveal" data-delay="5">
          <div className="bc-stage">
            <div className="bc-orbit" aria-hidden="true"></div>
            <img
              src={capsuleImg}
              alt="SPANEX bio-capsule — pharmaceutical-grade HPMC encapsulation of beneficial soil microbes"
              className="bc-image"
            />
            <div className="bc-image-caption">
              <span className="bc-image-caption-label">FIG. 03 ·</span>
              SPANEX HPMC bio-capsule, size&nbsp;00
            </div>
          </div>
        </div>
      </div>

      {/* === B. Activation Protocol === */}
      <div className="biocap-protocol biocap-block">
        <div className="biocap-sub-marker reveal">
          <span className="biocap-sub-marker-num">03 · A</span>
          Activation Protocol
        </div>
        <h3 className="biocap-sub-headline reveal" data-delay="1">
          A six-hour soak — and the dose comes alive.
        </h3>
        <p className="biocap-sub-lede reveal" data-delay="2">
          Lyophilised cells are dormant until rehydrated. The activation soak
          gives them back the moisture, temperature, and time to <em>multiply</em>
          before contacting soil — so the live count at the root zone is an
          order of magnitude higher than dry-format application.
        </p>

        <ol className="biocap-steps reveal" data-delay="3">
          {PROTOCOL.map((p) => (
            <li
              key={p.step}
              className={`biocap-step biocap-step--${p.phase}`}
              data-phase={p.phase}
            >
              <div className="biocap-step-num">{p.step}</div>
              <div className="biocap-step-body">
                <div className="biocap-step-title">{p.title}</div>
                <div className="biocap-step-detail">{p.detail}</div>
              </div>
            </li>
          ))}
        </ol>

        <div className="biocap-phase-key reveal" data-delay="4">
          <span className="biocap-phase">
            <span className="biocap-phase-dot biocap-phase-dot--prep"></span>
            Preparation
          </span>
          <span className="biocap-phase">
            <span className="biocap-phase-dot biocap-phase-dot--app"></span>
            Application
          </span>
        </div>
      </div>

      {/* === C. Crop Schedules === */}
      <div className="biocap-schedules biocap-block">
        <div className="biocap-sub-marker reveal">
          <span className="biocap-sub-marker-num">03 · B</span>
          Crop Schedules
        </div>
        <h3 className="biocap-sub-headline reveal" data-delay="1">
          Eight SKUs, mapped to the Australian growing calendar.
        </h3>
        <p className="biocap-sub-lede reveal" data-delay="2">
          Browse per-crop programs by growth stage. Each schedule specifies
          which SKU, how many capsules, what water rate, and at which BBCH
          window — drawn from SRT field manuals and adapted to Australian
          soil orders.
        </p>

        <div className="biocap-schedules-frame reveal" data-delay="3">
          <CropSchedulesTab />
        </div>
      </div>
    </section>
  );
};

export default BioCapsuleSection;
