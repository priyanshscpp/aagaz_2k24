import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaTrophy } from 'react-icons/fa';
import './../App.css';
import './../Pages/style/events.css';

const Events2 = () => {
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

  // Event data for Day 3
  const eventsData = [
    {
      id: 1,
      title: "1500 METERS",
      venue: "Athletic Track",
      time: "09:00 AM - 10:00 AM",
      description: "Long distance race for men and women categories with finals only."
    },
    {
      id: 2,
      title: "4x100 METERS RELAY",
      venue: "Athletic Track",
      time: "10:30 AM - 11:30 AM",
      description: "Relay race with teams of four runners each completing 100 meters."
    },
    {
      id: 3,
      title: "DISCUS THROW",
      venue: "Throwing Area",
      time: "12:00 PM - 01:30 PM",
      description: "Discus throw competition for men and women categories with finals only."
    },
    {
      id: 4,
      title: "BASKETBALL (SEMIFINALS & FINALS)",
      venue: "Basketball Court",
      time: "10:00 AM - 02:00 PM",
      description: "Semifinal and final matches of the basketball tournament to determine the champions."
    },
    {
      id: 5,
      title: "VOLLEYBALL (SEMIFINALS & FINALS)",
      venue: "Volleyball Court",
      time: "10:00 AM - 02:00 PM",
      description: "Semifinal and final matches of the volleyball tournament to determine the champions."
    },
    {
      id: 6,
      title: "CRICKET (SEMIFINALS & FINALS)",
      venue: "Cricket Ground",
      time: "09:00 AM - 04:00 PM",
      description: "Semifinal and final matches of the cricket tournament to determine the champions."
    },
    {
      id: 7,
      title: "CHESS FINALS",
      venue: "Indoor Hall",
      time: "10:00 AM - 01:00 PM",
      description: "Final rounds of the chess tournament to determine the champion."
    },
    {
      id: 8,
      title: "CLOSING CEREMONY",
      venue: "Main Auditorium",
      time: "05:00 PM - 07:00 PM",
      description: "The grand closing ceremony with prize distribution, performances, and the official conclusion of AAGAZ'25."
    }
  ];

  // Background particles component
  const EventsParticleBackground = () => {
    return (
      <div className="events-particles"></div>
    );
  };

  return (
    <div className="eventStyle3">
      <EventsParticleBackground />
      
      <Container className="mainSection">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center mb-4" style={{ color: 'var(--events-accent)', fontSize: '2.5rem', fontWeight: '700' }}>
            AAGAZ'25 EVENTS
          </h1>
          <p className="text-center mb-5" style={{ color: 'var(--events-text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            Experience three days of thrilling competitions, cultural performances, and unforgettable moments at AAGAZ'25.
          </p>
        </motion.div>

        <motion.div 
          className="days-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="/events0" className="link">
            <div className="dayChooserStyle">DAY 1</div>
          </Link>
          <Link to="/events1" className="link">
            <div className="dayChooserStyle">DAY 2</div>
          </Link>
          <div className="choosedDayStyle">DAY 3</div>
        </motion.div>

        <motion.div 
          className="eventsArea"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <Row>
            {eventsData.map((event) => (
              <Col lg={6} md={12} key={event.id} className="mb-4">
                <motion.div 
                  className="event-card"
                  variants={itemVariants}
                >
                  <h1>{event.title}</h1>
                  <h5>
                    <FaMapMarkerAlt style={{ marginRight: '8px' }} />
                    {event.venue}
                  </h5>
                  <p>{event.description}</p>
                  <div className="event-time">
                    <FaClock /> {event.time}
                  </div>
                  {event.id === 8 && (
                    <div className="event-highlight" style={{ marginTop: '10px', color: 'var(--events-highlight)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FaTrophy /> Grand Finale with Prize Distribution
                    </div>
                  )}
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Events2;