import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './../App.css';
import './../Pages/style/events.css';

// import Events1 from './events1';
// import Events2 from './events2';

import {
  Timeline,
  Events,
  TextEvent,
  themes,
  createTheme,
} from '@merc/react-timeline';

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: '#f7141b',
  },
  marker: {
    borderColor: '#f7141b',
  },
  timelineTrack: {
    backgroundColor: '#f7141b',
  },
});

const Events0 = () => {
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

  // Event data for Day 1
  const eventsData = [
    {
      id: 1,
      title: "OPENING CEREMONY",
      venue: "Main Auditorium",
      time: "09:00 AM - 10:30 AM",
      description: "The grand opening ceremony of AAGAZ'25 with performances, speeches, and the official inauguration of the event."
    },
    {
      id: 2,
      title: "100 METERS",
      venue: "Athletic Track",
      time: "11:00 AM - 12:00 PM",
      description: "Sprint competition for men and women categories. Preliminary heats followed by finals."
    },
    {
      id: 3,
      title: "200 METERS",
      venue: "Athletic Track",
      time: "12:30 PM - 01:30 PM",
      description: "Extended sprint competition for men and women categories. Preliminary heats followed by finals."
    },
    {
      id: 4,
      title: "LONG JUMP",
      venue: "Jump Pit",
      time: "02:00 PM - 03:30 PM",
      description: "Long jump competition for men and women categories with qualifying rounds and finals."
    },
    {
      id: 5,
      title: "JAVELIN THROW",
      venue: "Throwing Area",
      time: "03:45 PM - 05:00 PM",
      description: "Javelin throw competition for men and women categories with qualifying rounds and finals."
    },
    {
      id: 6,
      title: "BASKETBALL (PRELIMS)",
      venue: "Basketball Court",
      time: "10:00 AM - 04:00 PM",
      description: "Preliminary rounds of the basketball tournament with teams competing in group stages."
    },
    {
      id: 7,
      title: "VOLLEYBALL (PRELIMS)",
      venue: "Volleyball Court",
      time: "10:00 AM - 04:00 PM",
      description: "Preliminary rounds of the volleyball tournament with teams competing in group stages."
    },
    {
      id: 8,
      title: "CULTURAL NIGHT",
      venue: "Main Stage",
      time: "06:30 PM - 09:30 PM",
      description: "An evening of cultural performances, music, and dance showcasing talent from participating colleges."
    }
  ];

  // Background particles component
  const EventsParticleBackground = () => {
    return (
      <div className="events-particles"></div>
    );
  };

  const _event1 = ({ children }) => (
    <div>
      <h1>OPENING CEREMONY</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event2 = ({ children }) => (
    <div>
      <h1>100 Meters</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event3 = ({ children }) => (
    <div>
      <h1>200 Meters</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event4 = ({ children }) => (
    <div>
      <h1>400 Meters</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event5 = ({ children }) => (
    <div>
      <h1>800 Meters</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event6 = ({ children }) => (
    <div>
      <h1>Cricket</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event7 = ({ children }) => (
    <div>
      <h1>Basketball</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event8 = ({ children }) => (
    <div>
      <h1>Volleyball</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event9 = ({ children }) => (
    <div>
      <h1>E-Sports</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event10 = ({ children }) => (
    <div>
      <h1>Table Tennis</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event11 = ({ children }) => (
    <div>
      <h1>Kabaddi</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event12 = ({ children }) => (
    <div>
      <h1>Badminton</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event13 = ({ children }) => (
    <div>
      <h1>Shott putt</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event14 = ({ children }) => (
    <div>
      <h1>Javelin throw</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event15 = ({ children }) => (
    <div>
      <h1>Discuss throw</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event16 = ({ children }) => (
    <div>
      <h1>Power lifting</h1>
      <h5>Venue : </h5>
    </div>
  );
  const _event17 = ({ children }) => (
    <div>
      <h1>Weight Lifting</h1>
      <h5>Venue : </h5>
    </div>
  );

  return (
    <div className="eventStyle1">
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
          <div className="choosedDayStyle">DAY 1</div>
          <Link to="/events1" className="link">
            <div className="dayChooserStyle">DAY 2</div>
          </Link>
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

export default Events0;