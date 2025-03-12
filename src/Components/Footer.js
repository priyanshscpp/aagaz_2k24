import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Pages/style/footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaCode
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 }
  };

  const hoverVariants = {
    hover: { scale: 1.1, y: -3 }
  };

  const linkItems = [
    { path: "/", name: "Home" },
    { path: "/events0", name: "Events" },
    { path: "/sponsers", name: "Sponsors" },
    { path: "/ourTeam", name: "Team" },
    { path: "/gallery", name: "Gallery" },
    { path: "/esports", name: "Esports" }
  ];

  return (
    <motion.footer 
      className="tech-footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="footer-glow"></div>
      <Container>
        <Row className="footer-content">
          <Col lg={4} md={6} className="footer-brand">
            <motion.div variants={itemVariants}>
              <h2 className="footer-logo">AAGAZ'25</h2>
              <p className="footer-tagline">Where Sports Meet Innovation</p>
              <div className="footer-divider"></div>
              <p className="footer-desc">
                AAGAZ'25 is HBTU Kanpur's annual sports fest, celebrating sportsmanship, 
                competition, and innovation through diverse sporting events.
              </p>
            </motion.div>
          </Col>

          <Col lg={4} md={6} className="quick-links">
            <motion.h3 variants={itemVariants} className="footer-heading">Quick Links</motion.h3>
            <motion.div variants={itemVariants} className="footer-links">
              {linkItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <Link to={item.path} className="footer-link">
                    <motion.span variants={hoverVariants}>{item.name}</motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          <Col lg={4} md={12} className="contact-info">
            <motion.h3 variants={itemVariants} className="footer-heading">Contact Us</motion.h3>
            
            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                HBTU, Kanpur, Uttar Pradesh
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-text">
                <a href="tel:+91-6393743138">6393743138</a> (General)
                <br />
                <a href="tel:+91-6392063720">6392063720</a> (Technical)
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <a href="mailto:aagaz24official@gmail.com">aagaz24official@gmail.com</a>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="social-links">
              <motion.a 
                href="https://www.instagram.com/hbtu_sports/" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="social-icon instagram"
              >
                <FaInstagram />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/sports-sub-council-hbtu-7312472ab/" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="social-icon linkedin"
              >
                <FaLinkedin />
              </motion.a>
              
              <motion.a 
                href="https://www.facebook.com/hbtu.ac.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="social-icon facebook"
              >
                <FaFacebook />
              </motion.a>
              
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="social-icon twitter"
              >
                <FaTwitter />
              </motion.a>
            </motion.div>
          </Col>
        </Row>
        
        <motion.div 
          variants={itemVariants}
          className="footer-bottom"
        >
          <div className="copyright">
            © {new Date().getFullYear()} AAGAZ'25. All rights reserved.
          </div>
          <div className="credits">
            <FaCode /> Designed with <span className="heart">❤</span> by Technical Team
          </div>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
