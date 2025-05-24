// src/components/products/ContactSection.jsx
import React, { useState, useRef, useEffect } from 'react';
import Container from '../layout/Container';
import StandardizedTabs from '../common/StandardizedTabs';
import TeamGrid from './TeamGrid';
import styles from './ContactSection.module.css';

/**
 * Contact section component with tabs for different contact options
 * and a scientific expertise section
 */
const ContactSection = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [activeCategory, setActiveCategory] = useState('scientific');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'berry',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Setup intersection observer to animate in when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus({
      submitted: true,
      success: false,
      error: false,
      message: 'Sending your message...'
    });

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        error: false,
        message: 'Thanks for your message! We will get back to you soon.'
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        interest: 'berry',
        message: ''
      });

      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          error: false,
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  // Function to switch to contact tab
  const switchToContactTab = (e) => {
    e.preventDefault();
    setActiveTab('contact');
  };

  // Tabs for StandardizedTabs
  const tabs = [
    { id: 'contact', title: 'Contact Us' },
    { id: 'team', title: 'Our Team' },
    { id: 'support', title: 'Support' },
    { id: 'partnership', title: 'Partnerships' }
  ];

  // Scientific expertise data
  const scientificExpertise = {
    title: "Scientific Excellence in Food Preservation",
    description: "Our team of scientists and researchers are at the forefront of food preservation technology, developing innovative solutions to extend shelf life and reduce waste.",
    capabilities: [
      "Advanced formulation development for various produce types",
      "Comprehensive shelf-life testing and validation",
      "Food safety and regulatory compliance expertise",
      "Customized preservation solutions for specific client needs",
      "Ongoing research into next-generation preservation technologies"
    ]
  };

  // Manufacturing team data
  const manufacturingTeam = {
    title: "World-Class Manufacturing",
    description: "Our manufacturing facilities are equipped with state-of-the-art technology to ensure consistent, high-quality production of our preservation solutions.",
    capabilities: [
      "ISO-certified production facilities",
      "Rigorous quality control processes",
      "Scalable production capacity",
      "Environmentally responsible manufacturing practices",
      "Global distribution capabilities"
    ],
    locations: [
      {
        name: "Global Manufacturing Hub",
        country: "India",
        certifications: [
          "ISO 9001:2015",
          "GRAS Certified",
          "Organic Compatible",
          "GMP Compliant"
        ]
      }
    ]
  };

  // Team categories
  const teamCategories = [
    { id: 'scientific', name: 'Scientific Expertise' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'careers', name: 'Careers' }
  ];

  return (
    <section
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      id="contact"
      ref={sectionRef}
    >
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>Contact Our Team</h2>
          <p className={styles.subtitle}>
            Reach out for technical inquiries, partnership opportunities, or product information
          </p>
        </div>

        <StandardizedTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          theme="alternate"
          className={styles.tabs}
        />

        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          {activeTab === 'contact' && (
            <div className={styles.contactCard}>
              <div className={styles.contactInfo}>
                <h3 className={styles.cardTitle}>Contact Information</h3>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className={styles.contactText}>
                    <h4 className={styles.contactLabel}>Global Headquarters</h4>
                    <p className={styles.contactValue}>4 Cabrini Street, Point Cook, Victoria 3030, Australia</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className={styles.contactText}>
                    <h4 className={styles.contactLabel}>US Office</h4>
                    <p className={styles.contactValue}>13275 Early Crimson St, Eastvale, CA 92880</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className={styles.contactText}>
                    <h4 className={styles.contactLabel}>Email</h4>
                    <p className={styles.contactValue}>info@spanex.com.au</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className={styles.contactText}>
                    <h4 className={styles.contactLabel}>Phone</h4>
                    <p className={styles.contactValue}>+61 452 199 786</p>
                  </div>
                </div>
                <div className={styles.socialWrapper}>
                  <h3 className={styles.socialTitle}>Connect With Us</h3>
                  <div className={styles.socialIcons}>
                    <a href="#" className={`${styles.socialIcon} ${styles.linkedin}`} aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className={`${styles.socialIcon} ${styles.twitter}`} aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className={`${styles.socialIcon} ${styles.youtube}`} aria-label="YouTube">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" className={`${styles.socialIcon} ${styles.email}`} aria-label="Email">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.formContainer}>
                <h3 className={styles.cardTitle}>Send Us a Message</h3>
                {formStatus.submitted && (
                  <div className={`${styles.formMessage} ${formStatus.success ? styles.success : formStatus.error ? styles.error : styles.sending}`}>
                    {formStatus.message}
                  </div>
                )}
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>Name</label>
                      <input
                        type="text"
                        id="name"
                        className={styles.formInput}
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={formStatus.submitted}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>Email</label>
                      <input
                        type="email"
                        id="email"
                        className={styles.formInput}
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={formStatus.submitted}
                      />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.formLabel}>Company</label>
                    <input
                      type="text"
                      id="company"
                      className={styles.formInput}
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={formStatus.submitted}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="interest" className={styles.formLabel}>I'm interested in:</label>
                    <select
                      id="interest"
                      className={styles.formSelect}
                      value={formData.interest}
                      onChange={handleChange}
                      disabled={formStatus.submitted}
                    >
                      <option value="berry">Berry Preservation</option>
                      <option value="apple">Apple Preservation</option>
                      <option value="custom">Custom Formulation</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>Message</label>
                    <textarea
                      id="message"
                      className={styles.formTextarea}
                      rows="4"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={formStatus.submitted}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={styles.formSubmit}
                    disabled={formStatus.submitted}
                  >
                    {formStatus.submitted ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          )}
          
          {activeTab === 'team' && (
            <div className={styles.teamContainer}>
              <div className={styles.teamCategories}>
                {teamCategories.map(category => (
                  <button
                    key={category.id}
                    className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Team Members Section */}
              {activeCategory === 'team' && (
                <TeamGrid />
              )}
              
              {/* Scientific Expertise Section */}
              {activeCategory === 'scientific' && (
                <div className={styles.scientificExpertiseSection}>
                  <div className={styles.expertiseCard}>
                    <h3 className={styles.expertiseTitle}>{scientificExpertise.title}</h3>
                    <p className={styles.expertiseDescription}>{scientificExpertise.description}</p>
                    
                    <div className={styles.capabilitiesContainer}>
                      <h4 className={styles.capabilitiesTitle}>Core Capabilities</h4>
                      <ul className={styles.capabilitiesList}>
                        {scientificExpertise.capabilities.map((capability, index) => (
                          <li key={index} className={styles.capabilityItem}>
                            <div className={styles.capabilityIcon}>
                              <i className="fas fa-flask"></i>
                            </div>
                            <div className={styles.capabilityText}>{capability}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.collaborationCta}>
                      <h4 className={styles.collaborationTitle}>Join Our Scientific Network</h4>
                      <p className={styles.collaborationText}>
                        We're always looking to collaborate with scientists and researchers in food preservation technology.
                      </p>
                      <a href="#contact" onClick={switchToContactTab} className={styles.scientificContactBtn}>
                        Contact Our Scientific Team
                      </a>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Manufacturing Team Section */}
              {activeCategory === 'manufacturing' && (
                <div className={styles.manufacturingTeamSection}>
                  <div className={styles.manufacturingCard}>
                    <h3 className={styles.manufacturingTitle}>{manufacturingTeam.title}</h3>
                    <p className={styles.manufacturingDescription}>{manufacturingTeam.description}</p>
                    
                    <div className={styles.manufacturingHighlights}>
                      <div className={styles.manufacturingImageContainer}>
                        <div className={styles.manufacturingImagePlaceholder}>
                          {/* Placeholder icon if no image is available */}
                          <div className={styles.manufacturingPlaceholderIcon}>
                            <i className="fas fa-industry"></i>
                          </div>
                        </div>
                        <div className={styles.manufacturingLocationBadge}>
                          <div className={styles.locationIcon}>
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div className={styles.locationText}>India</div>
                        </div>
                      </div>
                      
                      <div className={styles.manufacturingDetails}>
                        <h4 className={styles.manufacturingDetailsTitle}>Our Manufacturing Excellence</h4>
                        
                        <div className={styles.manufacturingMetrics}>
                          <div className={styles.metricItem}>
                            <div className={styles.metricValue}>100%</div>
                            <div className={styles.metricLabel}>Quality Control</div>
                          </div>
                          <div className={styles.metricItem}>
                            <div className={styles.metricValue}>24/7</div>
                            <div className={styles.metricLabel}>Production Capability</div>
                          </div>
                          <div className={styles.metricItem}>
                            <div className={styles.metricValue}>Global</div>
                            <div className={styles.metricLabel}>Distribution Network</div>
                          </div>
                        </div>
                        
                        <div className={styles.certificationBadges}>
                          {manufacturingTeam.locations[0].certifications.map((cert, index) => (
                            <div key={index} className={styles.certificationBadge}>
                              <div className={styles.certificationIcon}>
                                <i className="fas fa-certificate"></i>
                              </div>
                              <div className={styles.certificationText}>{cert}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className={`${styles.capabilitiesContainer} ${styles.manufacturingCapabilities}`}>
                      <h4 className={styles.capabilitiesTitle}>Manufacturing Capabilities</h4>
                      <ul className={styles.capabilitiesList}>
                        {manufacturingTeam.capabilities.map((capability, index) => (
                          <li key={index} className={styles.capabilityItem}>
                            <div className={styles.capabilityIcon}>
                              <i className="fas fa-cogs"></i>
                            </div>
                            <div className={styles.capabilityText}>{capability}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Careers Section */}
              {activeCategory === 'careers' && (
                <div className={styles.careersSection}>
                  <div className={styles.careersCard}>
                    <h3 className={styles.careersTitle}>Join Our Team</h3>
                    <p className={styles.careersDescription}>
                      We're looking for talented individuals to join our mission of revolutionizing food preservation technology.
                    </p>
                    
                    <div className={styles.openPositions}>
                      <h4 className={styles.openPositionsTitle}>Current Openings</h4>
                      
                      <div className={styles.positionCard}>
                        <h5 className={styles.positionTitle}>Senior Food Scientist</h5>
                        <p className={styles.positionLocation}>
                          <i className="fas fa-map-marker-alt"></i> Melbourne, Australia
                        </p>
                        <p className={styles.positionDescription}>
                          Lead research and development efforts for our next-generation food preservation technologies.
                        </p>
                        <a href="#contact" onClick={switchToContactTab} className={styles.applyButton}>Apply Now</a>
                      </div>
                      
                      <div className={styles.positionCard}>
                        <h5 className={styles.positionTitle}>Quality Control Specialist</h5>
                        <p className={styles.positionLocation}>
                          <i className="fas fa-map-marker-alt"></i> Mumbai, India
                        </p>
                        <p className={styles.positionDescription}>
                          Ensure the highest quality standards for our preservation solutions through rigorous testing and validation.
                        </p>
                        <a href="#contact" onClick={switchToContactTab} className={styles.applyButton}>Apply Now</a>
                      </div>
                      
                      <div className={styles.positionCard}>
                        <h5 className={styles.positionTitle}>Business Development Manager</h5>
                        <p className={styles.positionLocation}>
                          <i className="fas fa-map-marker-alt"></i> Remote
                        </p>
                        <p className={styles.positionDescription}>
                          Expand our market presence and develop strategic partnerships with key industry players.
                        </p>
                        <a href="#contact" onClick={switchToContactTab} className={styles.applyButton}>Apply Now</a>
                      </div>
                    </div>
                    
                    <div className={styles.careersCta}>
                      <h4 className={styles.careersCtaTitle}>Don't see the right fit?</h4>
                      <p className={styles.careersCtaText}>
                        We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
                      </p>
                      <a href="#contact" onClick={switchToContactTab} className={styles.careersContactBtn}>
                        Submit Your Resume
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'support' && (
            <div className={styles.supportCard}>
              <h3 className={styles.cardTitle}>Support</h3>
              <p>
                For technical support, troubleshooting, or product usage questions, please email <a href="mailto:support@spanex.com.au">support@spanex.com.au</a> or call our support line at <strong>+61 452 199 786</strong>.
              </p>
              <p>
                Our support team is available Monday–Friday, 9am–6PM AEST.
              </p>
            </div>
          )}
          
          {activeTab === 'partnership' && (
            <div className={styles.partnershipCard}>
              <h3 className={styles.cardTitle}>Partnerships</h3>
              <p>
                Interested in partnering with Spanex Sciences? We welcome collaboration with growers, distributors, retailers, and research institutions.
              </p>
              <p>
                Please email <a href="mailto:partnerships@spanex.com.au">partnerships@spanex.com.au</a> with your inquiry, and our business development team will respond promptly.
              </p>
              <div className={styles.partnershipCta}>
                <a href="#contact" onClick={switchToContactTab} className={styles.partnershipContactBtn}>
                  Schedule a Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;