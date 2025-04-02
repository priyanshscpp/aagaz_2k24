import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEnvelope, FaHandshake, FaChessKnight, FaRunning, FaBolt } from 'react-icons/fa';
import './style/sponsors.css';

// Import assets
import aagaz_logo from "../res/onlyaagaz.png";
import sponsor1 from "./images/sponsor1.jpg"; // Paramount Chess
import sponsor2 from "./images/sponsor2.png"; // Red Bull
import sponsor3 from "./images/sponsor3.png"; // Decathlon

const Sponsors = () => {
  // Animation controls
  const controls = useAnimation();

  // Intersection observer for scroll animations
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  // Start animations when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  // All sponsors in a single array
  const allSponsors = [
    {
      id: 1,
      tier: "platinum",
      name: "Paramount Chess",
      type: "Official Chess Partner",
      logo: sponsor1,
      description: "Paramount Chess is a leading provider of high-quality chess equipment and training resources, dedicated to promoting the game of chess worldwide.",
      icon: <FaChessKnight />
    },
    {
      id: 2,
      tier: "gold",
      name: "Red Bull",
      type: "Official Energy Drink Partner",
      logo: sponsor2,
      description: "Red Bull gives you wings! Providing energy drinks that fuel athletic performance and mental focus for competitors at AAGAZ'25.",
      icon: <FaBolt />
    },
    {
      id: 3,
      tier: "silver",
      name: "Decathlon",
      type: "Official Sports Equipment Partner",
      logo: sponsor3,
      description: "Decathlon offers quality sporting goods at affordable prices, making sports accessible to everyone and supporting our vision for AAGAZ'25.",
      icon: <FaRunning />
    }
  ];

  // Background elements component
  const SponsorsBackground = () => {
    return (
      <div className="sponsors-background">
        <div className="sponsors-particles"></div>
        <div className="sponsors-grid-overlay"></div>
      </div>
    );
  };

  return (
    <div className="sponsors-container">
      <SponsorsBackground />
      
      <Container>
        <motion.div
          className="sponsors-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="sponsors-title">Our Sponsors</h1>
          <p className="sponsors-subtitle">
            We're proud to partner with these incredible brands who share our vision for AAGAZ'25 and help make this sporting extravaganza possible.
          </p>
        </motion.div>

        <div className="sponsors-content-wrapper">
          <motion.div 
            className="sponsors-tier all-sponsors"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            <div className="sponsors-cards-container">
              {allSponsors.map((sponsor) => (
                <motion.div 
                  key={sponsor.id}
                  className={`sponsor-card ${sponsor.tier}-card`}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className={`sponsor-badge ${sponsor.tier}-badge`}>
                    {sponsor.icon}
                  </div>
                  <motion.div 
                    className="sponsor-logo"
                    variants={logoVariants}
                    whileHover="hover"
                  >
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </motion.div>
                  <div className="sponsor-content">
                    <h3 className="sponsor-name">{sponsor.name}</h3>
                    <p className={`sponsor-type ${sponsor.tier}-type`}>{sponsor.type}</p>
                    <p className="sponsor-description">{sponsor.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Become a sponsor section */}
        <motion.div 
          className="become-sponsor-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="become-sponsor-content">
            <div className="aagaz-logo">
              <img src={aagaz_logo} alt="AAGAZ'25" />
            </div>
            <h2 className="become-sponsor-title">Want to Join Our Sponsor Family?</h2>
            <p className="become-sponsor-text">
              Showcase your brand to thousands of energetic participants and spectators at AAGAZ'25. 
              We offer various sponsorship packages designed to maximize your brand visibility and impact.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="mailto:aagaz24official@gmail.com" className="sponsors-cta">
                <FaHandshake className="cta-icon" />
                Become a Sponsor
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Sponsors;