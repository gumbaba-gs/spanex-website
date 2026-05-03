// EditorialQuote — pull-quote editorial section
import React, { useEffect, useRef } from 'react';
import './EditorialQuote.css';

const EditorialQuote = () => {
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
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="editorial" ref={ref}>
      <div className="editorial-inner">
        <p className="editorial-quote reveal">
          For decades, biological agriculture in Australia has been held back by a single
          constraint. Not biology — <strong>logistics.</strong> SPANEX is engineered to
          solve both at once.
        </p>
        <div className="editorial-attr reveal" data-delay="1">
          <div className="editorial-attr-name">— SPANEX</div>
          <div>Bio-capsule · Two problems · One gram</div>
        </div>
      </div>
    </section>
  );
};

export default EditorialQuote;
