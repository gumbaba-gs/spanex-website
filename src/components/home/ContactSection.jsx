import React, { useState, useRef, useEffect } from 'react';
import StandardizedTabs from '../common/StandardizedTabs';
import './ContactSection.css';
import asmitaImage from './images/ASmita.png';
import rasulImage from './images/rasul.png';
import gbImage from './images/GB.png';
import bbImage from './images/bb.png';

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState('contact');
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

  // Tabs for StandardizedTabs
  const tabs = [
    { id: 'contact', title: 'Contact Us' },
    { id: 'support', title: 'Support' },
    { id: 'partnership', title: 'Partnerships' },
    { id: 'team', title: 'Team' }
  ];

  // Team data
  const teamMembers = [
    {
      id: 'asmita',
      name: 'Dr. Asmita Prabhune',
      image: asmitaImage,
      role: 'Chief Scientist & Founder',
      bio: 'Leading chemist with extensive experience in food preservation technology and multiple patents to her name.',
      category: 'leadership',
      social: {
        linkedin: 'https://www.linkedin.com/in/asmita-prabhune-01580732/',
        email: '#contact'
      }
    },
    {
      id: 'gum',
      name: 'Gum Shahid',
      image: gbImage,
      role: 'CTO & Co-Founder',
      bio: 'IT expert with 20 years of experience in technology implementation and system design for scientific applications.',
      category: 'leadership',
      social: {
        linkedin: 'https://www.linkedin.com/in/gumshahid/',
        email: '#contact'
      }
    },
    {
      id: 'khaja',
      name: 'Khaja Nayub Rasul Sheik',
      image: rasulImage,
      role: 'Business Development & Co-Founder',
      bio: 'Expert in international trade with 15+ years of experience in import/export operations and global market expansion.',
      category: 'leadership',
      social: {
        linkedin: 'https://www.linkedin.com/in/khaja-nayub-rasul-sheik-20b6a6145/',
        email: '#contact'
      }
    },
    {
      id: 'khaderi',
      name: 'Khaderi Sharief Karimullasha',
      image: bbImage,
      role: 'COO, American Region',
      bio: 'Operations expert specializing in American markets with extensive experience in scaling science-based startups.',
      category: 'operations',
      social: {
        linkedin: 'https://www.linkedin.com/in/khaderi-sharief-karimullasha-35110b19/',
        email: '#contact'
      }
    }
  ];

  // Team tabs for filtering
  const teamTabs = [
    { id: 'all', label: 'All Team' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'operations', label: 'Operations' }
  ];
  const [activeTeamTab, setActiveTeamTab] = useState('all');
  const filteredMembers = activeTeamTab === 'all'
    ? teamMembers
    : teamMembers.filter(member => member.category === activeTeamTab);

  return (
    <section
      className={`contact-section alt-section${isVisible ? ' visible' : ''}`}
      id="contact"
      ref={sectionRef}
    >
      <div className="container">
        <div className="contact-section__header">
          <h2 className="contact-section__title">Contact Our Team</h2>
          <p className="contact-section__subtitle">
            Reach out for technical inquiries, partnership opportunities, or product information
          </p>
        </div>

        <StandardizedTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          theme="alternate"
        />

        <div className={`contact-section__content ${isVisible ? 'visible' : ''}`}>
          {activeTab === 'contact' && (
            <div className="contact-card">
              {/* ...contact info and form as before... */}
              <div className="contact-info">
                <h3 className="card-title">Contact Information</h3>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-label">Address</h4>
                    <p className="contact-value">123 Innovation Drive, Tech Park, CA 94105</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-label">Email</h4>
                    <p className="contact-value">info@spanexsciences.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-label">Phone</h4>
                    <p className="contact-value">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-social-wrapper">
                  <h3 className="social-title">Connect With Us</h3>
                  <div className="social-icons">
                    <a href="#" className="social-icon linkedin" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-icon twitter" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon youtube" aria-label="YouTube">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" className="social-icon email" aria-label="Email">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-form-container">
                <h3 className="card-title">Send Us a Message</h3>
                {formStatus.submitted && (
                  <div className={`form-message ${formStatus.success ? 'success' : formStatus.error ? 'error' : 'sending'}`}>
                    {formStatus.message}
                  </div>
                )}
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="form-input"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={formStatus.submitted}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={formStatus.submitted}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input
                      type="text"
                      id="company"
                      className="form-input"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={formStatus.submitted}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest" className="form-label">I'm interested in:</label>
                    <select
                      id="interest"
                      className="form-select"
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
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      className="form-textarea"
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
                    className="btn-primary form-submit"
                    disabled={formStatus.submitted}
                  >
                    {formStatus.submitted ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          )}
          {activeTab === 'support' && (
            <div className="contact-support-card">
              <h3 className="card-title">Support</h3>
              <p>
                For technical support, troubleshooting, or product usage questions, please email <a href="mailto:support@spanexsciences.com">support@spanexsciences.com</a> or call our support line at <strong>+1 (555) 987-6543</strong>.
              </p>
              <p>
                Our support team is available Monday–Friday, 9am–6pm PST.
              </p>
            </div>
          )}
          {activeTab === 'partnership' && (
            <div className="contact-partnership-card">
              <h3 className="card-title">Partnerships</h3>
              <p>
                Interested in partnering with Spanex Sciences? We welcome collaboration with growers, distributors, retailers, and research institutions.
              </p>
              <p>
                Please email <a href="mailto:partnerships@spanexsciences.com">partnerships@spanexsciences.com</a> with your inquiry, and our business development team will respond promptly.
              </p>
            </div>
          )}
          {activeTab === 'team' && (
            <div className="team-tab-panel">
              <div className="team-tab-container">
                {teamTabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`team-tab-button ${activeTeamTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTeamTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="team-grid">
                {filteredMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={`team-card ${isVisible ? 'visible' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="member-image-container">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="member-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="member-content">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                      <p className="member-bio">{member.bio}</p>
                      <div className="member-social">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name}'s LinkedIn profile`}
                            className="social-link linkedin"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        )}
                        {member.social.email && (
                          <a
                            href={member.social.email}
                            aria-label={`Email ${member.name}`}
                            className="social-link email"
                          >
                            <i className="fas fa-envelope"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="team-cta-card">
                <p className="team-cta-text">
                  Interested in joining our team or learning more about our work?
                </p>
                <a href="#contact" className="team-cta-button">
                  Contact Our Team
                </a>
                <div className="team-indicator-bars">
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className={`team-indicator-bar ${index < 5 ? 'active' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;