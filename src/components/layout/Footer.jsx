// src/components/layout/Footer.jsx
import React from 'react';
import Container from './Container';

/**
 * Footer component with navigation, social links, and newsletter signup
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Footer navigation categories
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Our Team', href: '/team' },
        { label: 'News', href: '/news' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Product Category 1', href: '/products/category-1' },
        { label: 'Product Category 2', href: '/products/category-2' },
        { label: 'Product Category 3', href: '/products/category-3' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Help Center', href: '/help' },
        { label: 'Resources', href: '/resources' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Accessibility', href: '/accessibility' },
      ],
    },
  ];
  
  // Social media links
  const socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ];
  
  // Social media icons
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        );
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <footer className="footer">
      <Container>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.svg" alt="Company Logo" />
            </div>
            <p className="footer-description">
              We're dedicated to providing the highest quality products and services to our customers.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="social-link"
                  aria-label={`Follow us on ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            {footerLinks.map((category, index) => (
              <div key={index} className="footer-links-column">
                <h3 className="footer-links-title">{category.title}</h3>
                <ul className="footer-links-list">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="footer-link-item">
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="footer-newsletter">
            <h3 className="newsletter-title">Subscribe to our newsletter</h3>
            <p className="newsletter-description">
              Stay updated with our latest news, products, and offers.
            </p>
            <form className="newsletter-form">
              <div className="newsletter-input-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                  aria-label="Your email address"
                  required
                />
                <button type="submit" className="btn btn-primary newsletter-submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Company Name. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/terms" className="footer-bottom-link">Terms</a>
            <a href="/privacy" className="footer-bottom-link">Privacy</a>
            <a href="/cookies" className="footer-bottom-link">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;