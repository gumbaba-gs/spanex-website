// CredentialsSection — editorial trust markers
import React, { useEffect, useRef } from 'react';
import './CredentialsSection.css';

const CredentialsSection = () => {
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
    <section className="credentials" id="credentials" ref={ref}>
      <div className="credentials-inner">
        <div className="credentials-eyebrow">Credentials</div>
        <h2 className="credentials-headline reveal">
          Built on patented science.<br />Audited at every step.
        </h2>

        <div className="credentials-row">
          <div className="cred-cell reveal">
            <div className="cred-num">IN&nbsp;361021<sup>/2013</sup></div>
            <div className="cred-label">ICAR-IISR Patent</div>
            <div className="cred-detail">
              World's first microbial encapsulation technology, licensed by SRT Agro Science.
            </div>
          </div>
          <div className="cred-cell reveal" data-delay="1">
            <div className="cred-num"><em>0011744619</em></div>
            <div className="cred-label">DAFF Import Permit</div>
            <div className="cred-detail">
              Granted March 2026. Valid through March 2028. HPMC capsules approved.
            </div>
          </div>
          <div className="cred-cell reveal" data-delay="2">
            <div className="cred-num">ISO&nbsp;9001<sup>:2015</sup></div>
            <div className="cred-label">GMP Manufacture</div>
            <div className="cred-detail">
              SRT Agro Science (Chhattisgarh, India). Per-batch CoA. NCIM / MTCC-verified strains.
            </div>
          </div>
          <div className="cred-cell reveal" data-delay="3">
            <div className="cred-num">ACO</div>
            <div className="cred-label">Organic Certification</div>
            <div className="cred-detail">
              In progress 2026. Compatible with Australian Certified Organic input requirements.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
