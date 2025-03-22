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

  return (
    <div className="esports-container">
      <motion.section 
        className="upcoming-events"
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
                />
                <motion.div
                  className="event-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3>{game.title}</h3>
                  <p className="text-bgmi">
                    {game.description}
                    <br />
                    <span><FaCalendarAlt /> {game.date}</span>
                    <span><FaTrophy /> Prize: {game.prize}</span>
                  </p>
                  <motion.a 
                    className="register"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdrm5x6F5IAISOdWeaf5wQjYxATEfWwCnMre9kKgmagAGd8gw/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.a>
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
