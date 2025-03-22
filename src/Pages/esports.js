// index.jsx
import React, { useEffect, useState } from 'react';
import './style/esports.css'; 
import muthi from "../res/bgmichar.png";
import valorantImg from "../res/valorant.jpg";
import bgmiImg from "../res/bgmi.jpg";
import codImg from "../res/cod.jpg";
import { Image, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaTrophy } from 'react-icons/fa';

const Esports = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
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

  // Intersection observers for scroll animations
  const [eventsRef, eventsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // State for image loading status
  const [imagesLoaded, setImagesLoaded] = useState({
    bgmi: false,
    valorant: false,
    cod: false,
    char: false,
    bg: false,
    gamingBg: false
  });

  useEffect(() => {
    // Mobile menu handling
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const navMenuButton = document.getElementById('navmenuButton');
      const navMenu = document.getElementById('nav-menu');
      
      if (windowWidth <= 956) {
        navMenuButton?.classList?.remove('hidden');
        navMenu?.classList?.add('hidden');
      } else {
        navMenuButton?.classList?.add('hidden');
        navMenu?.classList?.remove('hidden');
      }
    };

    // Check if background images exist
    const checkBackgroundImages = async () => {
      try {
        const bgResponse = await fetch('../../res/bgmibg.jpg');
        const gamingBgResponse = await fetch('../../res/gamingbg.jpg');
        
        setImagesLoaded(prev => ({
          ...prev,
          bg: bgResponse.ok,
          gamingBg: gamingBgResponse.ok
        }));
      } catch (error) {
        console.warn('Background images not found:', error);
      }
    };

    window.addEventListener('resize', handleResize);
    checkBackgroundImages();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Game data
  const games = [
    {
      id: 1,
      title: "Valorant",
      description: "Compete in the region's biggest Valorant tournament with teams from all over India. Show your tactical prowess and aim skills!",
      image: valorantImg,
      date: "April 10, 2025",
      prize: "Coming Soon"
    },
    {
      id: 2,
      title: "BGMI",
      description: "Battle it out in BGMI for incredible prizes and glory in this esports extravaganza. Will your squad be the last one standing?",
      image: bgmiImg,
      date: "April 10, 2025",
      prize: "Coming Soon"
    },
    {
      id: 3,
      title: "Call of Duty",
      description: "Join the Call of Duty tournament and showcase your skills in this fast-paced FPS competition with teams from across the country.",
      image: codImg,
      date: "April 10, 2025",
      prize: "Coming Soon"
    }
  ];

  const openRegistration = () => {
    window.location.href = "https://forms.gle/WpdnB9kTyVo9wohE9";
  };

  // Handle image load errors
  const handleImageError = (imageKey) => {
    setImagesLoaded(prev => ({ ...prev, [imageKey]: false }));
  };

  const handleImageLoad = (imageKey) => {
    setImagesLoaded(prev => ({ ...prev, [imageKey]: true }));
  };

  return (
    <div className="esports-container">
      {/* Animated background elements */}
      <div className="esports-bg"></div>
      <div className="esports-grid"></div>
      
      {/* Hero section */}
      <section className={`main-cont ${imagesLoaded.bg ? 'with-bg' : ''}`}>
        <div className="hero-content">
          <motion.h1 
            className="why-esport"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Esports Championship
          </motion.h1>
          <motion.div 
            id="espmain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              onClick={openRegistration}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2>Register Now</h2>
            </motion.button>
          </motion.div>
        </div>
        {muthi && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Image 
              className="bgmi-char" 
              src={muthi} 
              alt="BGMI character"
              loading="lazy"
              onError={() => handleImageError('char')}
              onLoad={() => handleImageLoad('char')}
              style={{ display: imagesLoaded.char ? 'block' : 'none' }}
            />
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Esports;
