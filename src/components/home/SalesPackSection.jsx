// SalesPackSection — Editorial showcase for the printed Sales Pack monograph
import React, { useEffect, useRef } from 'react';
import './SalesPackSection.css';
import logo from './images/spanex.png';

const TOC = [
  { num: '§ I',   title: 'Eight organisms',     detail: '8 product specimens — strain, mode, dose' },
  { num: '§ II',  title: 'Application',         detail: 'Crop guide · tank-mix · field record' },
  { num: '§ III', title: 'Evidence',            detail: 'Indian field-trial summary, reframed' },
  { num: '§ IV',  title: 'Asks',                detail: 'Trial templates · purchase orders' },
];

const SalesPackSection = () => {
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
    <section className="pack" id="pack" ref={ref}>
      {/* Margin notation — vertical stamp like the print-pack pages */}
      <div className="pack-margin-stamp" aria-hidden="true">
        SALES PACK · 23 SHEETS · A4 · APR 2026
      </div>

      <div className="pack-grid">
        {/* === LEFT: The pack cover, presented as a printed sheet === */}
        <div className="pack-stage reveal">
          {/* Back sheets to suggest stack */}
          <div className="pack-sheet pack-sheet-3" aria-hidden="true" />
          <div className="pack-sheet pack-sheet-2" aria-hidden="true" />

          {/* The cover sheet itself */}
          <article className="pack-sheet pack-cover" aria-label="Sales pack cover">
            <header className="pack-cover-head">
              <div className="pack-cover-mark">
                <img src={logo} alt="" aria-hidden="true" />
                <div>
                  <div className="pack-cover-wm">SPANEX<sup>™</sup></div>
                  <div className="pack-cover-tag">Microbial Soil Inoculants</div>
                </div>
              </div>
              <div className="pack-cover-id">
                <div className="pack-cover-id-doc">Sales Pack 01</div>
                <div className="pack-cover-id-meta">
                  REV 2026.04 · ISO A4<br />
                  EN-AU
                </div>
              </div>
            </header>

            <div className="pack-cover-body">
              <div className="pack-cover-eyebrow">A field reference for agronomists</div>
              <h3 className="pack-cover-title">
                Eight <em>organisms</em>,<br />
                one capsule format,<br />
                the science <em>behind</em><br />
                the dose.
              </h3>
              <div className="pack-cover-rule" aria-hidden="true" />
              <ul className="pack-cover-list">
                <li><span>I.</span> Organisms — 8 specimens</li>
                <li><span>II.</span> Application by growth stage</li>
                <li><span>III.</span> Evidence — Indian trials</li>
                <li><span>IV.</span> Asks — trial &amp; PO templates</li>
              </ul>
            </div>

            <footer className="pack-cover-foot">
              <span>SPANEX · Meem International Pty Ltd</span>
              <span>SHEET 01 / 23</span>
            </footer>
          </article>

          {/* Decorative orbital line — reuses the hero motif */}
          <div className="pack-orbit" aria-hidden="true" />
        </div>

        {/* === RIGHT: Editorial copy + TOC + CTAs === */}
        <div className="pack-text">
          <div className="pack-eyebrow reveal">04 · The Pack</div>
          <h2 className="pack-headline reveal">
            A 23-sheet <em>monograph</em> for the agronomist who actually has to recommend it.
          </h2>
          <p className="pack-lede reveal">
            We wrote the <strong>SPANEX Sales Pack</strong> the way a clinician
            would read a drug compendium — every organism gets a sheet,
            every claim a citation, every recommendation a tank-mix note.
            No marketing spreads. No infinite scroll. Just the document
            you'd want in front of you on a fence-line.
          </p>

          {/* Table of contents */}
          <ol className="pack-toc reveal">
            {TOC.map(({ num, title, detail }) => (
              <li key={num} className="pack-toc-row">
                <span className="pack-toc-num">{num}</span>
                <span className="pack-toc-title">{title}</span>
                <span className="pack-toc-detail">{detail}</span>
              </li>
            ))}
          </ol>

          {/* Data strip — print specs, like the pack itself */}
          <div className="pack-spec reveal">
            <div className="pack-spec-cell">
              <div className="pack-spec-val">23</div>
              <div className="pack-spec-lab">Sheets</div>
            </div>
            <div className="pack-spec-cell">
              <div className="pack-spec-val">A4</div>
              <div className="pack-spec-lab">Portrait · ISO 216</div>
            </div>
            <div className="pack-spec-cell">
              <div className="pack-spec-val">8</div>
              <div className="pack-spec-lab">Product specimens</div>
            </div>
            <div className="pack-spec-cell">
              <div className="pack-spec-val">04 / 26</div>
              <div className="pack-spec-lab">Edition</div>
            </div>
          </div>

          <div className="pack-cta-row reveal">
            <a
              href="/sales-pack/"
              target="_blank"
              rel="noopener noreferrer"
              className="pack-cta pack-cta-solid"
            >
              Read online
              <span className="pack-cta-arrow" aria-hidden="true">→</span>
            </a>
            <a
              href="/sales-pack/spanex-sales-pack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pack-cta pack-cta-ghost"
              download
            >
              Download PDF
              <span className="pack-cta-arrow" aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="pack-fineprint">
            Designed for screen and print. A4 portrait, 23 sheets,
            ~320&nbsp;KB. For commercial inquiries:&nbsp;
            <a href="mailto:naomi.wilson@aaco.com.au">naomi.wilson@aaco.com.au</a>.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesPackSection;
