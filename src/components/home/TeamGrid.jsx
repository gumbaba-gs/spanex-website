import React, { useState, useEffect } from 'react';
import './TeamGrid.css';
import asmitaImage from './images/ASmita.png';
import rasulImage from './images/rasul.png';
import gbImage from './images/GB.png';
import bbImage from './images/bb.png';




const TeamGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  // Import images directly as referenced in your original code
  // These images should be replaced with the actual paths to your images
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

  // Filter by category
  const filteredMembers = activeCategory === 'all'
    ? teamMembers
    : teamMembers.filter(member => member.category === activeCategory);

  // Animation on scroll
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const cards = document.querySelectorAll('.team-card');
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const isVisible = cardTop < window.innerHeight - 100;
        if (isVisible) {
          card.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory]);

  return (
    <div className="team-section">
      <div className="team-filters">
        <button 
          className={`team-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Team
        </button>
        <button 
          className={`team-filter-btn ${activeCategory === 'leadership' ? 'active' : ''}`}
          onClick={() => setActiveCategory('leadership')}
        >
          Leadership
        </button>
        <button 
          className={`team-filter-btn ${activeCategory === 'operations' ? 'active' : ''}`}
          onClick={() => setActiveCategory('operations')}
        >
          Operations
        </button>
      </div>
      
      <div className="team-grid">
        {filteredMembers.map((member, index) => (
          <div 
            key={member.id} 
            className="team-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="member-image-wrapper">
              <div className="member-image-placeholder">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image" 
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
            
            <div className="member-social">
              <a 
                href={member.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn linkedin" 
                aria-label={`${member.name}'s LinkedIn`}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href={member.social.email} 
                className="social-btn email" 
                aria-label={`Email ${member.name}`}
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;