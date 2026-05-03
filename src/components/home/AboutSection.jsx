// AboutSection — Editorial Pharma-Bio
import React, { useEffect, useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
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

  const blocks = [
    {
      num: 'i.',
      title: 'Encapsulated, not formulated',
      body: 'Beneficial microbes — Azotobacter, Azospirillum, Rhizobium, Bacillus megaterium, Bacillus decolorationis — are lyophilised at peak viability and sealed inside pharmaceutical-grade plant-based HPMC capsules under ICAR-IISR\'s patented Microbial Encapsulation Technology.',
      data: ['≥10¹² CFU / capsule', '0.9–1.0 g size-00', 'Moisture ≤1%'],
    },
    {
      num: 'ii.',
      title: 'Functions across the rhizosphere',
      body: 'Eight specialised SKUs cover the full agronomic toolkit: free-living and symbiotic nitrogen fixation, mineral and organic phosphorus solubilisation, mineral potassium mobilisation, and zinc bioavailability — matched to Australian soil orders from Tenosols to Ferrosols.',
      data: ['N · P · K · Zn coverage', '8 active SKUs', 'Soil-order matched'],
    },
    {
      num: 'iii.',
      title: 'Activated before application',
      body: 'A 6–8 hour cold-water soak rehydrates and metabolically activates the dormant lyophilised cells so they are field-ready on contact with soil — primed to colonise the rhizosphere immediately rather than waking up over 1–2 days. The labelled count of 10¹² CFU per capsule is preserved through activation; survival from tank to root zone, not multiplication, is what matters.',
      data: ['10¹² CFU field-ready', '30–70% field survival', 'Direct rhizosphere delivery'],
    },
    {
      num: 'iv.',
      title: 'Built for distance',
      body: 'Two-year ambient shelf life. No cold chain. No spreader. Mail-order shipping reaches Brunette Downs as easily as Coonawarra. One gram covers a hectare — a logistic order of magnitude that rewrites how biology can be applied at Australian scale.',
      data: ['2-year ambient stability', '1 g / ha logistics', 'Zero refrigeration cost'],
    },
    {
      num: 'v.',
      title: 'A second product, in development',
      body: 'The same pharmaceutical discipline, applied to the other end of the food chain. Our Shelf-Life Extender is a food-grade edible biocoating sprayed at the packhouse — a microscopic protective layer that slows respiration, inhibits microbial spoilage, and extends ambient shelf-life by 2× or more. Pilot trials Q3 2026, commercial Q4 2026.',
      data: ['2×+ shelf-life extension', 'GRAS food-grade', 'Berries · citrus · stone fruit'],
      tag: 'In development',
    },
  ];

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-grid">
        <div className="about-headline-col">
          <div className="section-marker">
            <span className="section-marker-num">01.</span>
            About SPANEX
          </div>
          <h2 className="about-headline">
            A pharmaceutical <em>discipline</em>,<br />
            applied at <em>both ends</em><br />
            of the food chain.
          </h2>
          <p className="about-sub">
            Microbial bio-capsules for the soil. Edible biocoatings
            for the harvested produce. Two products, one method.
          </p>
        </div>

        <div className="about-blocks">
          {blocks.map((b, i) => (
            <div className="about-block reveal" data-delay={i} key={b.num}>
              <div className="about-block-num">{b.num}</div>
              <div>
                <h3 className="about-block-title">
                  {b.title}
                  {b.tag && <span className="about-block-tag">{b.tag}</span>}
                </h3>
                <p className="about-block-body">{b.body}</p>
                <div className="about-block-data">
                  {b.data.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
