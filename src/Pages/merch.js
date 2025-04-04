import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FaShoppingCart, FaMoneyBillWave, FaPhoneAlt } from 'react-icons/fa';
import './style/merch.css';
import merch1 from "../Components/assets/merch1.jpeg";
import merch2 from "../Components/assets/merch2.jpeg";
import upiImage from "../Pages/images/upi.jpeg";

const Merch = () => {
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

  // Background particles component
  const MerchParticleBackground = () => {
    return (
      <div className="merch-particles"></div>
    );
  };

  // Merch description content
  const merchDescription = `
    Greetings Harcourtians!
    
    Score big on style and performance with new Aagaz Jerseys! Get ready to ignite your passion and unleash your potential with Aagaz'25, while playing and hosting various universities from across the country. This is the ultimate platform to showcase your talent and make your mark.
    
    Are you ready?! Let's make it happen!
    
    Get ready to dominate the game and look great doing it. Wear it with pride and make a statement that's all yours.
  `;

  return (
    <div className="merch-container">
      <MerchParticleBackground />
      
      <Container>
        <motion.div
          className="merch-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="merch-title">AAGAZ'25 Merchandise</h1>
          <p className="merch-subtitle">
            Get your official AAGAZ'25 merchandise and show your support for the event.
          </p>
        </motion.div>

        <motion.div 
          className="merch-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.div 
            className="merch-image-container"
            variants={itemVariants}
          >
            <Row className="merch-images-row">
              <Col xs={12} sm={6} className="merch-image-col mb-3">
                <img src={merch1} alt="AAGAZ'25 Merchandise 1" className="merch-image" />
              </Col>
              <Col xs={12} sm={6} className="merch-image-col mb-3">
                <img src={merch2} alt="AAGAZ'25 Merchandise 2" className="merch-image" />
              </Col>
            </Row>
            
            <div className="merch-image-cta">
              <Button variant="danger" size="lg" className="merch-button">
                <FaShoppingCart style={{ marginRight: '8px' }} />
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfmi3xtwGG3YAwpWxpAp08ZamaBEObvH4rgQTwPLzez2k486w/viewform?usp=sf_link' target='_blank' rel="noopener noreferrer">
                  Book your T-Shirt now
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="merch-details"
            variants={itemVariants}
          >
            <div className="merch-description">
              <p>{merchDescription}</p>
              
              <div className="merch-contact">
                <Row>
                  <Col xs={12} md={7}>
                    <p>UPI ID: <span className="merch-upi">akhileshyadav1523@oksbi</span></p>
                    
                    <p>For any further query contact:</p>
                    <p><strong>Akhilesh Yadav (3rd CE)</strong><br /></p>
                    +916392782210<br />                  
                    <h3><strong>Regards,<br />Sports Sub-council,<br />USAC, HBTU.</strong></h3>
                  </Col>
                  <Col xs={12} md={5} className="upi-image-container">
                    <img src={upiImage} alt="UPI QR Code" className="upi-image" />
                  </Col>
                </Row>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Merch;