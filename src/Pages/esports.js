import React, { useEffect, useState } from 'react';
import './style/esports.css'; 
import muthi from "../res/bgmichar.png";
import valorantImg from "../res/valorant.jpg";
import bgmiImg from "../res/bgmi.jpg";
import codImg from "../res/cod.jpg";
import { Image, Container, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaTrophy } from 'react-icons/fa';

const Esports = () => {
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

  const [eventsRef, eventsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
      <section className="main-cont">
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
              onClick={() => window.open("https://forms.gle/WpdnB9kTyVo9wohE9", "_blank")}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2>Register Now</h2>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="upcoming-events"
        ref={eventsRef}
        variants={containerVariants}
        initial="hidden"
        animate={eventsInView ? "visible" : "hidden"}
      >
        <h1 className="upcoming">Featured Games</h1>
        <Container className="events-name">
          {games.map((game) => (
            <motion.div 
              key={game.id}
              className="event"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Card className="game-card">
                <Card.Img variant="top" src={game.image} alt={game.title} loading="lazy" />
                <Card.Body>
                  <Card.Title>{game.title}</Card.Title>
                  <Card.Text>{game.description}</Card.Text>
                  <p>
                    <FaCalendarAlt /> {game.date} <br />
                    <FaTrophy /> Prize: {game.prize}
                  </p>
                  <Button 
                    variant="primary" 
                    onClick={() => window.open("https://forms.gle/WpdnB9kTyVo9wohE9", "_blank")}
                  >
                    Register Now
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </Container>
      </motion.section>
    </div>
  );
};

export default Esports;
