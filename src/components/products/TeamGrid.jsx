// src/components/products/TeamGrid.jsx
import React, { useState, useEffect } from 'react';
import styles from './TeamGrid.module.css';
import rasulImage from '../home/images/rasul.png';
import gbImage from '../home/images/GB.png';
import bbImage from '../home/images/bb.png';

/**
 * TeamGrid component displaying team members
 */
const TeamGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Team data - removed Asmita as requested but kept other team members
  const teamMembers = [
    {
      id: 'gum',
      name: 'Gum Shahid',
      image: gbImage,
      role: 'CTO & Founder',
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
      role: 'CMO & Co-Founder',
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

  // Animation on scroll
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const cards = document.querySelectorAll(`.${styles.teamCard}`);
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const isVisible = cardTop < window.innerHeight - 100;
        if (isVisible) {
          card.classList.add(styles.visible);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.teamSection}>
      <div className={styles.headquartersInfo}>
        <div className={styles.headquartersIcon}>
          <i className="fas fa-building"></i>
        </div>
        <div className={styles.headquartersDetails}>
          <h3 className={styles.headquartersTitle}>Global Headquarters</h3>
          <p className={styles.headquartersAddress}>
            4 Cabrini Street, Point Cook, Victoria 3030, Australia
          </p>
        </div>
      </div>
      
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div 
            key={member.id} 
            className={styles.teamCard}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={styles.memberImageWrapper}>
              <div className={styles.memberImagePlaceholder}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={styles.memberImage} 
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
            
            <div className={styles.memberSocial}>
              <a 
                href={member.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.socialBtn} ${styles.linkedin}`} 
                aria-label={`${member.name}'s LinkedIn`}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="#contact" 
                className={`${styles.socialBtn} ${styles.email}`} 
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