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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
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

  const [eventsRef, eventsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [imagesLoaded, setImagesLoaded] = useState({
    bgmi: false,
    valorant: false,
    cod: false,
    char: false,
    bg: false,
    gamingBg: false
  });

  useEffect(() => {
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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const games = [
    { id: 1, title: "Valorant", description: "Compete in the region's biggest Valorant tournament.", image: valorantImg, date: "April 10, 2025", prize: "Coming Soon" },
    { id: 2, title: "BGMI", description: "Battle it out in BGMI for incredible prizes and glory.", image: bgmiImg, date: "April 10, 2025", prize: "Coming Soon" },
    { id: 3, title: "Call of Duty", description: "Join the Call of Duty tournament and showcase your skills.", image: codImg, date: "April 10, 2025", prize: "Coming Soon" }
  ];

  const openRegistration = () => {
    alert("Registration will open soon! Stay tuned for updates.");
  };

  return (
    <div className="esports-container">
      <div className="esports-bg"></div>
      <div className="esports-grid"></div>
      
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
      </section>

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
                <Image className="game-image" src={game.image} alt={game.title} loading="lazy" />
                <motion.div className="event-overlay" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <span><FaCalendarAlt /> {game.date}</span>
                  <span><FaTrophy /> Prize: {game.prize}</span>
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
