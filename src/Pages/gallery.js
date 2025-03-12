import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from 'react-bootstrap';
import "./style/gallery.css";

const Gallery = () => {
  // State for modal
  const [modalActive, setModalActive] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Gallery images data
  const galleryData = [
    {
      image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/20220522201931__MG_2794.JPG?raw=true",
      caption: "AAGAZ'22 - Opening Ceremony",
      description: "The grand opening ceremony of AAGAZ'22 with performances and celebrations."
    },
    {
      image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/WhatsApp%20Image%202023-03-23%20at%2023.32.11.jpg?raw=true",
      caption: "AAGAZ'22 - Basketball Tournament",
      description: "Intense basketball matches during the tournament."
    },
    {
      image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/football.jpg?raw=true",
      caption: "AAGAZ'22 - Football Match",
      description: "Football teams competing on the field during AAGAZ'22."
    },
    {
      image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/WhatsApp%20Image%202023-03-23%20at%2022.50.44.jpg?raw=true",
      caption: "AAGAZ'22 - Cultural Performance",
      description: "Cultural performances showcasing talent from participating colleges."
    },
    {
      image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/WhatsApp%20Image%202023-03-23%20at%2022.50.49.jpg?raw=true",
      caption: "AAGAZ'22 - Award Ceremony",
      description: "Recognizing and celebrating achievements during the award ceremony."
    },
    {
      image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/WhatsApp%20Image%202023-03-23%20at%2022.50.46.jpg?raw=true",
      caption: "AAGAZ'22 - Team Celebration",
      description: "Teams celebrating their victories and participation in AAGAZ'22."
    },
    {
      image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/WhatsApp%20Image%202023-03-23%20at%2022.50.47.jpg?raw=true",
      caption: "AAGAZ'22 - Closing Ceremony",
      description: "The grand finale of AAGAZ'22 with closing performances and celebrations."
    },
  ];

  // Handle opening the modal
  const openModal = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setModalActive(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Handle closing the modal
  const closeModal = () => {
    setModalActive(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle navigation in the modal
  const navigateModal = (direction) => {
    let newIndex = currentIndex + direction;
    
    // Loop back to the beginning or end if needed
    if (newIndex < 0) newIndex = galleryData.length - 1;
    if (newIndex >= galleryData.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
    setCurrentImage(galleryData[newIndex]);
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight' && modalActive) navigateModal(1);
      if (e.key === 'ArrowLeft' && modalActive) navigateModal(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalActive, currentIndex]);

  // Background particles component
  const GalleryParticleBackground = () => {
    return (
      <div className="gallery-particles"></div>
    );
  };

  return (
    <div className="gallery-container">
      <GalleryParticleBackground />
      
      <Container>
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gallery-title">AAGAZ Moments</h1>
          <p className="gallery-subtitle">
            Relive the memorable moments from previous AAGAZ events through our gallery.
          </p>
        </motion.div>

        <motion.div 
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {galleryData.map((item, index) => (
            <motion.div 
              key={index}
              className="gallery-item"
              variants={itemVariants}
              onClick={() => openModal(item, index)}
            >
              <img src={item.image} alt={item.caption} className="gallery-image" />
              <div className="gallery-caption">
                <h3>{item.caption}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Modal for full-size image view */}
      <div className={`gallery-modal ${modalActive ? 'active' : ''}`} onClick={closeModal}>
        <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
          {currentImage && (
            <>
              <img 
                src={currentImage.image} 
                alt={currentImage.caption} 
                className="gallery-modal-image" 
              />
              <div className="gallery-modal-caption">
                {currentImage.caption}
              </div>
            </>
          )}
          <div className="gallery-modal-close" onClick={closeModal}></div>
          <div className="gallery-modal-nav gallery-modal-prev" onClick={() => navigateModal(-1)}></div>
          <div className="gallery-modal-nav gallery-modal-next" onClick={() => navigateModal(1)}></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;