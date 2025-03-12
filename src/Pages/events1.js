import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './../App.css';
import './../Pages/style/events.css';

const Events1 = () => {
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

  // Event data for Day 2
  const eventsData = [
    {
      id: 1,
      title: "400 METERS",
      venue: "Athletic Track",
      time: "09:00 AM - 10:00 AM",
      description: "Middle distance race for men and women categories with preliminary heats and finals."
    },
    {
      id: 2,
      title: "800 METERS",
      venue: "Athletic Track",
      time: "10:30 AM - 11:30 AM",
      description: "Middle distance race for men and women categories with preliminary heats and finals."
    },
    {
      id: 3,
      title: "HIGH JUMP",
      venue: "Jump Pit",
      time: "12:00 PM - 01:30 PM",
      description: "High jump competition for men and women categories with qualifying rounds and finals."
    },
    {
      id: 4,
      title: "SHOT PUT",
      venue: "Throwing Area",
      time: "02:00 PM - 03:30 PM",
      description: "Shot put competition for men and women categories with qualifying rounds and finals."
    },
    {
      id: 5,
      title: "BASKETBALL (QUARTERFINALS)",
      venue: "Basketball Court",
      time: "10:00 AM - 02:00 PM",
      description: "Quarterfinal matches of the basketball tournament with the top teams from the preliminary rounds."
    },
    {
      id: 6,
      title: "VOLLEYBALL (QUARTERFINALS)",
      venue: "Volleyball Court",
      time: "10:00 AM - 02:00 PM",
      description: "Quarterfinal matches of the volleyball tournament with the top teams from the preliminary rounds."
    },
    {
      id: 7,
      title: "CRICKET (PRELIMS)",
      venue: "Cricket Ground",
      time: "09:00 AM - 05:00 PM",
      description: "Preliminary rounds of the cricket tournament with teams competing in group stages."
    },
    {
      id: 8,
      title: "TECH SHOWCASE",
      venue: "Exhibition Hall",
      time: "11:00 AM - 04:00 PM",
      description: "Exhibition of innovative tech projects and startups from participating colleges."
    },
    {
      id: 9,
      title: "DJ NIGHT",
      venue: "Main Stage",
      time: "07:00 PM - 10:00 PM",
      description: "An electrifying evening of music and dance with a renowned DJ performing live."
    }
  ];

  // Background particles component
  const EventsParticleBackground = () => {
    return (
      <div className="events-particles"></div>
    );
  };

  return (
    <div className="eventStyle2">
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
          <div className="choosedDayStyle">DAY 2</div>
          <Link to="/events2" className="link">
            <div className="dayChooserStyle">DAY 3</div>
          </Link>
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
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Events1;