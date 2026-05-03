// FieldPrimerSection — Editorial card announcing the Living Capsule explainer
// Mirrors the SalesPackSection rhythm but for the interactive web primer.
import React, { useEffect, useRef } from 'react';
import './FieldPrimerSection.css';

const CHAPTERS = [
  { num: '§ 01', title: 'What crops want',         detail: 'Demand by family · N · P · K' },
  { num: '§ 02', title: 'Biological N-fixation',   detail: 'Atmosphere → ammonia, mechanism' },
  { num: '§ 03', title: 'Phosphate unlock',        detail: 'How PSB releases bound P' },
  { num: '§ 04', title: 'Potassium release',       detail: 'KMB and clay-mineral lattices' },
  { num: '§ 05', title: 'Synthetic vs biology',    detail: 'Two different pathways, one atom' },
  { num: '§ 06', title: 'The CFU survival curve',  detail: 'Label count vs root-zone count' },
  { num: '§ 07', title: 'The 75/25 model',         detail: 'Three-year integrated nutrition' },
  { num: '§ 08', title: 'In one sentence',         detail: 'The closing takeaway' },
];

const FieldPrimerSection = () => {
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
    <section className="primer" id="primer" ref={ref}>
      {/* Margin notation — vertical stamp like a journal volume marker */}
      <div className="primer-margin-stamp" aria-hidden="true">
        FIELD PRIMER · 8 CHAPTERS · WEB · MAY 2026
      </div>

      <div className="primer-grid">
        {/* === LEFT: A simulated browser frame holding the explainer === */}
        <div className="primer-stage reveal">
          <article className="primer-frame" aria-label="Field Primer browser frame">
            <header className="primer-frame-head">
              <div className="primer-frame-dots" aria-hidden="true">
                <span /><span /><span />
              </div>
              <div className="primer-frame-url">
                spanex.com.au<span className="primer-frame-url-path">/explainer</span>
              </div>
            </header>

            <div className="primer-frame-body">
              <div className="primer-frame-eyebrow">A SPANEX field primer</div>
              <h3 className="primer-frame-title">
                The <em>Living</em><br />
                Capsule.
              </h3>
              <div className="primer-frame-rule" aria-hidden="true" />
              <ul className="primer-frame-list">
                <li><span>00</span> Cover</li>
                <li><span>01</span> What crops want</li>
                <li><span>02</span> Nitrogen fixation</li>
                <li><span>03</span> Phosphate unlock</li>
                <li className="primer-frame-list-more">+ four more chapters</li>
              </ul>
            </div>

            <footer className="primer-frame-foot">
              <span>Scrollable. Animated. Browser-native.</span>
              <span>~7 MIN</span>
            </footer>
          </article>

          {/* Decorative orbital line — same motif as the hero / pack */}
          <div className="primer-orbit" aria-hidden="true" />
        </div>

        {/* === RIGHT: Editorial copy + TOC + CTAs === */}
        <div className="primer-text">
          <div className="primer-eyebrow reveal">04 · A · The Field Primer</div>
          <h2 className="primer-headline reveal">
            A scrollable, animated <em>walk</em> through the biology — chapter by chapter.
          </h2>
          <p className="primer-lede reveal">
            <strong>The Living Capsule</strong> is the visual companion to the
            Sales Pack — a single-page primer that takes the curious reader
            from crop demand through the three biological mechanisms,
            the CFU survival curve, and the integrated 75/25 model.
            Built for the agronomist who learns by following the diagram,
            not by reading the table of contents.
          </p>

          {/* Table of contents — eight chapters */}
          <ol className="primer-toc reveal">
            {CHAPTERS.map(({ num, title, detail }) => (
              <li key={num} className="primer-toc-row">
                <span className="primer-toc-num">{num}</span>
                <span className="primer-toc-title">{title}</span>
                <span className="primer-toc-detail">{detail}</span>
              </li>
            ))}
          </ol>

          {/* Stats strip */}
          <div className="primer-spec reveal">
            <div className="primer-spec-cell">
              <div className="primer-spec-val">8</div>
              <div className="primer-spec-lab">Chapters</div>
            </div>
            <div className="primer-spec-cell">
              <div className="primer-spec-val">~7</div>
              <div className="primer-spec-lab">Minutes</div>
            </div>
            <div className="primer-spec-cell">
              <div className="primer-spec-val">∅</div>
              <div className="primer-spec-lab">Login required</div>
            </div>
            <div className="primer-spec-cell">
              <div className="primer-spec-val">05 / 26</div>
              <div className="primer-spec-lab">Edition</div>
            </div>
          </div>

          <div className="primer-cta-row reveal">
            <a
              href="/explainer/"
              target="_blank"
              rel="noopener noreferrer"
              className="primer-cta primer-cta-solid"
            >
              Read the primer
              <span className="primer-cta-arrow" aria-hidden="true">→</span>
            </a>
            <a
              href="#pack"
              className="primer-cta primer-cta-ghost"
            >
              Or the printed Sales Pack
              <span className="primer-cta-arrow" aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="primer-fineprint">
            Designed for screen. Best on desktop or tablet — the survival
            timeline animates through full-width scrolling. Mobile-friendly fallback included.
            Sister artefact to the printed&nbsp;Sales&nbsp;Pack.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FieldPrimerSection;
