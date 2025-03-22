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
    alert("Registration will open soon! Stay tuned for updates.");
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
        
        {/* Glow effects */}
        <div className="glow-effect" style={{ top: '20%', left: '10%' }} />
        <div className="glow-effect" style={{ top: '60%', right: '15%' }} />
        <div className="glow-effect" style={{ bottom: '10%', left: '20%' }} />
      </section>

      {/* Events section */}
      <motion.section 
        className={`upcoming-events ${imagesLoaded.gamingBg ? 'with-bg' : ''}`}
        ref={eventsRef}
        variants={containerVariants}
        initial="hidden"
        animate={eventsInView ? "visible" : "hidden"}
      >
        <h1 className="upcoming">Featured Games</h1>
        <div className="events-name">
          {games.map((game) => (
            <motion.div 
              key={game.id}
              className="event"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="event1">
                <Image 
                  className="game-image" 
                  src={game.image} 
                  alt={game.title}
                  loading="lazy"
                  onError={() => handleImageError(game.title.toLowerCase())}
                  onLoad={() => handleImageLoad(game.title.toLowerCase())}
                />
                <motion.div
                  className="event-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 style={{ 
                    color: 'var(--esports-primary)',
                    fontFamily: 'Orbitron, sans-serif',
                    marginBottom: '1rem'
                  }}>
                    {game.title}
                  </h3>
                  <p className="text-bgmi">
                    {game.description}
                    <br />
                    <span style={{ 
                      display: 'block', 
                      marginTop: '10px', 
                      color: 'var(--esports-accent)',
                      fontWeight: 'bold' 
                    }}>
                      <FaCalendarAlt style={{ marginRight: '5px' }} /> {game.date}
                    </span>
                    <span style={{ 
                      display: 'block', 
                      marginTop: '5px',
                      color: 'var(--esports-secondary)',
                      fontWeight: 'bold' 
                    }}>
                      <FaTrophy style={{ marginRight: '5px' }} /> Prize: {game.prize}
                    </span>
                  </p>
                  <motion.button 
                    className="register"
                    onClick={openRegistration}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Esports;
