import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube, 
  FaTwitter, 
  FaHeart, 
  FaEnvelope, 
  FaMapMarkerAlt
} from 'react-icons/fa';
import aagaz_logo from '../res/onlyaagaz.png';
import './style/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-particles"></div>
      
      <Container>
        <div className="footer-content">
          {/* Logo Section */}
          <motion.div 
            className="footer-logo-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="logo-container">
              <img src={aagaz_logo} alt="Aagaz Logo" className="footer-logo" />
            </div>
            <h2 className="tech-text">AAGAZ<span className="highlight-text">'25</span></h2>
          </motion.div>
          
          {/* Contact Info - Middle */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contact-row">
              <a href="mailto:contact@aagaz.com" className="contact-link">
                <FaEnvelope className="contact-icon" /> 
                <span>contact@aagaz.com</span>
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaMapMarkerAlt className="contact-icon" /> 
                <span>HBTU, Kanpur</span>
              </a>
            </div>
          </motion.div>
          
          {/* Social Links - Right */}
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Instagram" 
              className="social-icon"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn" 
              className="social-icon"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="YouTube" 
              className="social-icon"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <FaYoutube />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Twitter" 
              className="social-icon"
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2024 AAGAZ'25</p>
          <motion.div 
            className="love-message-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="love-message">
              Designed and Developed with <FaHeart className="heart-icon" /> by Prateek Srivastava
            </p>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
