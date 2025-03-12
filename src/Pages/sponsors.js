import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaHandshake } from 'react-icons/fa';
import './style/sponsors.css';

// Import placeholder logos (you can replace these with actual sponsor logos later)
import aagaz_logo from "../res/onlyaagaz.png";

const Sponsors = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Intersection observer for scroll animations
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Placeholder sponsor data (replace with actual sponsors when available)
  const platinumSponsors = [
    // { id: 1, name: "Company Name", type: "Technology Partner", logo: "logo-url" },
  ];

  const goldSponsors = [
    // { id: 1, name: "Company Name", type: "Food Partner", logo: "logo-url" },
  ];

  const silverSponsors = [
    // { id: 1, name: "Company Name", type: "Media Partner", logo: "logo-url" },
  ];

  // Background particles component
  const SponsorsParticleBackground = () => {
    return (
      <div className="sponsors-particles"></div>
    );
  };

  return (
    <div className="sponsors-container">
      <SponsorsParticleBackground />
      
      <Container>
        <motion.div
          className="sponsors-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="sponsors-title">Our Sponsors</h1>
          <p className="sponsors-subtitle">
            We are grateful to our sponsors who make AAGAZ'25 possible. Their support helps us create an unforgettable sporting experience.
          </p>
        </motion.div>

        {/* If there are platinum sponsors, show them */}
        {platinumSponsors.length > 0 && (
          <motion.div 
            className="sponsors-tier"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <div className="text-center mb-4">
              <h2 className="tier-title">Platinum Sponsors</h2>
            </div>
            
            <div className="sponsors-grid">
              {platinumSponsors.map((sponsor) => (
                <motion.div 
                  key={sponsor.id}
                  className="sponsor-card"
                  variants={itemVariants}
                >
                  <div className="sponsor-logo">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                  <div className="sponsor-content">
                    <h3 className="sponsor-name">{sponsor.name}</h3>
                    <p className="sponsor-type">{sponsor.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* If there are gold sponsors, show them */}
        {goldSponsors.length > 0 && (
          <motion.div 
            className="sponsors-tier"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="text-center mb-4">
              <h2 className="tier-title">Gold Sponsors</h2>
            </div>
            
            <div className="sponsors-grid">
              {goldSponsors.map((sponsor) => (
                <motion.div 
                  key={sponsor.id}
                  className="sponsor-card"
                  variants={itemVariants}
                >
                  <div className="sponsor-logo">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                  <div className="sponsor-content">
                    <h3 className="sponsor-name">{sponsor.name}</h3>
                    <p className="sponsor-type">{sponsor.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* If there are silver sponsors, show them */}
        {silverSponsors.length > 0 && (
          <motion.div 
            className="sponsors-tier"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="text-center mb-4">
              <h2 className="tier-title">Silver Sponsors</h2>
            </div>
            
            <div className="sponsors-grid">
              {silverSponsors.map((sponsor) => (
                <motion.div 
                  key={sponsor.id}
                  className="sponsor-card"
                  variants={itemVariants}
                >
                  <div className="sponsor-logo">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                  <div className="sponsor-content">
                    <h3 className="sponsor-name">{sponsor.name}</h3>
                    <p className="sponsor-type">{sponsor.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* If no sponsors yet, show coming soon section */}
        {platinumSponsors.length === 0 && goldSponsors.length === 0 && silverSponsors.length === 0 && (
          <motion.div 
            className="sponsors-coming-soon"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="coming-soon-logo mb-4">
              <img src={aagaz_logo} alt="AAGAZ'25" style={{ height: '120px' }} />
            </div>
            <h2 className="coming-soon-title">SPONSORS COMING SOON</h2>
            <p className="coming-soon-text">
              We're currently in talks with potential sponsors for AAGAZ'25. 
              If you're interested in sponsoring our event, please reach out to us.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="mailto:aagaz24official@gmail.com" className="sponsors-cta">
                <FaHandshake style={{ marginRight: '10px' }} />
                Become a Sponsor
              </a>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </div>
  );
};

export default Sponsors;