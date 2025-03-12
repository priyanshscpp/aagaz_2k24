import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaHeart, FaEnvelope, FaPhone } from 'react-icons/fa';
import aagaz_logo from '../res/onlyaagaz.png';
import './style/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-content">
          {/* Left - Logo */}
          <div className="footer-logo-section">
            <img src={aagaz_logo} alt="Aagaz Logo" className="footer-logo" />
            <h2>AAGAZ'25</h2>
          </div>

          {/* Middle - Description */}
          <div className="footer-description">
            <p>HBTU's Premier Sports & Innovation Festival</p>
            <div className="contact-info">
              <a href="mailto:contact@aagaz.com"><FaEnvelope /> contact@aagaz.com</a>
              <a href="tel:+919876543210"><FaPhone /> +91 98765 43210</a>
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="footer-social">
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                <FaYoutube />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Made with <FaHeart className="heart-icon" /> by Technical Team</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
