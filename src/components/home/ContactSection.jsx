import React, { useState, useRef, useEffect } from 'react';
import StandardizedTabs from '../common/StandardizedTabs';
import TeamGrid from './TeamGrid';
import './ContactSection.css';

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
    { id: 'team', title: 'Our Team' },
    { id: 'support', title: 'Support' },
    { id: 'partnership', title: 'Partnerships' }
  ];

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
              <div className="contact-info">
                <h3 className="card-title">Contact Information</h3>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-label">Address</h4>
                    <p className="contact-value">13275 Early Crimson St, Eastvale, CA 92880</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-label">Email</h4>
                    <p className="contact-value">info@spanex.com.au</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4 className="contact-label">Phone</h4>
                    <p className="contact-value">+61 452 199 786</p>
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
          
          {activeTab === 'team' && (
            <div className="team-container contact-card">
              <TeamGrid />
            </div>
          )}
          
          {activeTab === 'support' && (
            <div className="contact-support-card">
              <h3 className="card-title">Support</h3>
              <p>
                For technical support, troubleshooting, or product usage questions, please email <a href="mailto:support@spanex.com.au">support@spanex.com.au</a> or call our support line at <strong>+61 452 199 786</strong>.
              </p>
              <p>
                Our support team is available Monday–Friday, 9am–6PM AEST.
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
                Please email <a href="mailto:partnerships@spanex.com.au">partnerships@spanex.com.au</a> with your inquiry, and our business development team will respond promptly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;