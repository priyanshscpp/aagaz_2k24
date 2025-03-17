import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../App.css";
import "./style/home.css";
import aagaz_logo from "../res/Logo.png";
import teamPhoto from "../res/aagazbg.png";
import { FaCalendarAlt, FaUsers, FaMedal, FaTrophy, FaLaptop } from "react-icons/fa";
import sportIcon1 from "../res/valorant.jpg";
import sportIcon2 from "../res/bgmi.jpg";

const Home = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 99,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Animation controls for scroll-triggered animations
  const controls = useAnimation();
  const featuresControl = useAnimation();
  const statsControl = useAnimation();
  const eventsControl = useAnimation();
  
  // Intersection observers for different sections
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [eventsRef, eventsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Event date - wrapped in useMemo to prevent recreation on every render
  const eventDate = useMemo(() => new Date('2025-04-10T00:00:00'), []);

  // State for animated stat values
  const [animatedStats, setAnimatedStats] = useState({
    events: 0,
    colleges: 0,
    participants: 0,
    prizePool: 0
  });
  
  // Ref to track if stats have been animated
  const statsAnimated = useRef(false);

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // Trigger animations when sections come into view
  useEffect(() => {
    if (aboutInView) controls.start("visible");
    if (featuresInView) featuresControl.start("visible");
    
    // Start stats animation when stats section comes into view
    if (statsInView && !statsAnimated.current) {
      statsControl.start("visible");
      
      // Animate the stats values
      statsAnimated.current = true;
      
      // Events count animation
      let eventsCount = 0;
      const eventsInterval = setInterval(() => {
        eventsCount += 1;
        setAnimatedStats(prev => ({ ...prev, events: eventsCount }));
        if (eventsCount >= 25) clearInterval(eventsInterval);
      }, 80);
      
      // Colleges count animation
      let collegesCount = 0;
      const collegesInterval = setInterval(() => {
        collegesCount += 5;
        setAnimatedStats(prev => ({ ...prev, colleges: collegesCount }));
        if (collegesCount >= 100) clearInterval(collegesInterval);
      }, 50);
      
      // Participants count animation
      let participantsCount = 0;
      const participantsInterval = setInterval(() => {
        participantsCount += 250;
        setAnimatedStats(prev => ({ ...prev, participants: participantsCount }));
        if (participantsCount >= 5000) clearInterval(participantsInterval);
      }, 40);
      
      // Prize pool count animation
      let prizeCount = 0;
      const prizeInterval = setInterval(() => {
        prizeCount += 0.5;
        setAnimatedStats(prev => ({ ...prev, prizePool: prizeCount }));
        if (prizeCount >= 10) clearInterval(prizeInterval);
      }, 50);
    }
    
    if (eventsInView) eventsControl.start("visible");
  }, [controls, aboutInView, featuresControl, featuresInView, statsControl, statsInView, eventsControl, eventsInView]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const heroImageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const countdownVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        type: "spring",
        stiffness: 80,
        damping: 8
      }
    }),
    hover: {
      y: -15,
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 70,
        damping: 8
      }
    }),
    hover: {
      scale: 1.08,
      y: -10,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  // Event data
  const events = [
    {
      id: 1,
      name: "Valorant Tournament",
      date: "Apr 16, 2025",
      description: "Compete in the region's biggest Valorant tournament with teams from all over India.",
      image: sportIcon1,
      category: "Esports"
    },
    {
      id: 2,
      name: "BGMI Championship",
      date: "Apr 17, 2025",
      description: "Battle it out in BGMI for incredible prizes and glory in this esports extravaganza.",
      image: sportIcon2,
      category: "Esports"
    }
  ];

  // Dynamic background with particles effect
  const ParticleBackground = () => {
    return (
      <div className="particles">
        {Array.from({ length: 30 }).map((_, index) => (
          <motion.div
            key={index}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 5 + 1,
              height: Math.random() * 5 + 1,
              backgroundColor: index % 3 === 0 ? "rgba(242, 56, 73, 0.6)" : 
                             index % 3 === 1 ? "rgba(0, 78, 168, 0.6)" :
                                              "rgba(255, 203, 5, 0.6)"
            }}
          />
        ))}
      </div>
    );
  };

  // Tech-style particles for stats section
  const StatsParticleBackground = () => {
    return (
      <div className="stats-particles">
        {Array.from({ length: 50 }).map((_, index) => (
          <motion.div
            key={index}
            className="stats-particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1
            }}
          />
        ))}
      </div>
    );
  };

  // Digital data flow animation
  const DataFlowAnimation = () => {
    return (
      <div className="stats-data-flow">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={`horizontal-${index}`}
            className="data-particle"
            style={{
              '--y': `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={`vertical-${index}`}
            className="data-particle-vertical"
            style={{
              '--x': `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="home-page">
      {/* Hero Section with dynamic background and countdown */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <ParticleBackground />
        
        <Container>
          <Row className="hero-content">
            <Col lg={6} className="hero-text">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                <motion.h1 variants={fadeIn} className="hero-title">
                  AAGAZ <span className="highlight-text">'25</span>
                </motion.h1>
                
                <motion.p variants={fadeIn} className="hero-subtitle">
                  HBTU's Premier Sports & Innovation Festival
                </motion.p>

                <motion.div variants={fadeIn} className="hero-description">
                  Join us for an unforgettable celebration of athleticism, technology, and college spirit. 
                  Where passion meets performance.
                </motion.div>
                
                <motion.div 
                  className="countdown-container"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="countdown-title">Event Starts In</h3>
                  <div className="countdown-timer">
                    <motion.div custom={0} variants={countdownVariants} className="countdown-item">
                      <div className="countdown-value">{timeLeft.days}</div>
                      <div className="countdown-label">Days</div>
                    </motion.div>
                    <motion.div custom={1} variants={countdownVariants} className="countdown-item">
                      <div className="countdown-value">{timeLeft.hours}</div>
                      <div className="countdown-label">Hours</div>
                    </motion.div>
                    <motion.div custom={2} variants={countdownVariants} className="countdown-item">
                      <div className="countdown-value">{timeLeft.minutes}</div>
                      <div className="countdown-label">Minutes</div>
                    </motion.div>
                    <motion.div custom={3} variants={countdownVariants} className="countdown-item">
                      <div className="countdown-value">{timeLeft.seconds}</div>
                      <div className="countdown-label">Seconds</div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </Col>
            
            <Col lg={6} className="hero-image-container d-flex align-items-center">
              <motion.div 
                className="hero-image-wrapper"
                variants={heroImageVariants}
                initial="hidden"
                animate="visible"
              >
                <Image 
                  src={aagaz_logo} 
                  alt="AAGAZ Sports Festival" 
                  className="hero-image" 
                  fluid 
                />
                <div className="hero-image-glow"></div>
                
                <motion.div
                  className="logo-register-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Button className="register-cta">
                    <a
                      href="https://forms.fillout.com/t/7eJkvXYn6jus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-link"
                    >
                      Register Now
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            delay: 1.5,
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span>Scroll for more</span>
          <div className="scroll-arrow"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section" ref={aboutRef} id="about-section">
        <Container>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="section-content"
          >
            <motion.div variants={fadeIn} className="section-heading">
              <h2>About <span className="highlight-text">AAGAZ'25</span></h2>
              <div className="heading-underline"></div>
            </motion.div>
            
            <Row className="about-content">
              <Col md={6} className="about-text">
                <motion.p variants={fadeIn} className="about-paragraph">
                  <span className="highlight-text">AAGAZ'25</span>, HBTU Kanpur's annual sports fest, promises an even grander celebration of
                  sportsmanship, competition, and innovation. Led by{" "}
                  <strong>Secretary Akhilesh Yadav and Awantika</strong>, 3rd-year B.Tech students, the event builds upon the phenomenal success of
                  AAGAZ'24.
                </motion.p>
                
                <motion.p variants={fadeIn} className="about-paragraph">
                  This mega inter-college sports fest, initiated by the <strong>Sports Sub-Council</strong>,
                  brings together a diverse range of sporting events under one dynamic platform.
                  <strong> AAGAZ'25 is not just a competition but a movement</strong>—fostering athletic
                  excellence, teamwork, and groundbreaking ideas.
                </motion.p>
                
                <motion.p variants={fadeIn} className="about-paragraph">
                  Under the leadership of <strong>Akhilesh and Awantika</strong>, the organizing team ensures
                  a seamless experience for athletes and participants. <strong>Mohammad Tauqeer, Prateek Srivastava and
                  Priyanshu Yadav </strong>, the technical heads and creators of the event's website, continue to add an
                  innovative digital touch, enhancing the online experience.
                </motion.p>
                
                <motion.div 
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="about-cta"
                >
                  <Button className="secondary-button" href="/events0">
                    View Our Events
                  </Button>
                </motion.div>
              </Col>
              
              <Col md={6} className="about-image-container">
                <motion.div 
                  className="about-image-wrapper"
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image 
                    src={teamPhoto} 
                    alt="AAGAZ Team" 
                    className="about-image" 
                    fluid 
                  />
                  <div className="image-overlay">
                    <h3>AAGAZ Team</h3>
                    <p>Passionate. Dedicated. Driven.</p>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={featuresRef} id="features-section">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={featuresControl}
            className="section-content"
          >
            <motion.div variants={fadeIn} className="section-heading text-center">
              <h2>Why Choose <span className="highlight-text">AAGAZ'25</span></h2>
              <div className="heading-underline mx-auto"></div>
            </motion.div>

            <Row className="features-grid">
              {[
                {
                  icon: <FaTrophy />,
                  title: "Competitive Excellence",
                  desc: "Participate in high-quality tournaments designed to challenge and showcase your talent"
                },
                {
                  icon: <FaUsers />,
                  title: "Community Building",
                  desc: "Connect with like-minded athletes and build lasting relationships through sports"
                },
                {
                  icon: <FaMedal />,
                  title: "Professional Standards",
                  desc: "Experience events organized according to professional standards with qualified referees"
                },
                {
                  icon: <FaLaptop />,
                  title: "Digital Integration",
                  desc: "Enjoy seamless digital experience with real-time updates and online registrations"
                }
              ].map((feature, i) => (
                <Col lg={3} md={6} sm={6} key={i}>
                  <motion.div
                    className="feature-card"
                    variants={featureCardVariants}
                    custom={i}
                    whileHover="hover"
                  >
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-desc">{feature.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="stats-section" ref={statsRef} id="stats-section">
        <div className="stats-overlay"></div>
        <div className="stats-circuit"></div>
        <StatsParticleBackground />
        <DataFlowAnimation />
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={statsControl}
            className="stats-container"
          >
            <Row>
              {[
                { 
                  value: statsAnimated.current ? `${animatedStats.events}+` : "25+", 
                  finalValue: "30+",
                  label: "Sports Events", 
                  icon: "🏆" 
                },
                { 
                  value: statsAnimated.current ? `${animatedStats.colleges}+` : "100+", 
                  finalValue: "20+",
                  label: "Participating Colleges", 
                  icon: "🏫" 
                },
                { 
                  value: statsAnimated.current ? `${animatedStats.participants}+` : "5000+", 
                  finalValue: "5000+",
                  label: "Athletes & Participants", 
                  icon: "👥" 
                },
                { 
                  value: statsAnimated.current ? `₹${animatedStats.prizePool}L+` : "₹10L+", 
                  finalValue: "₹10L+",
                  label: "Prize Pool", 
                  icon: "💰" 
                }
              ].map((stat, i) => (
                <Col lg={3} md={6} sm={6} xs={6} key={i}>
                  <motion.div
                    className="stat-card"
                    variants={statVariants}
                    custom={i}
                    whileHover="hover"
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-value">
                      {statsAnimated.current ? stat.value : stat.finalValue}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                </Col>
              ))}
            </Row>

            <motion.div
              className="stats-cta"
              variants={fadeIn}
            >
              <h3 className="stats-tagline">Get ready for AAGAZ'25 – where sports meet innovation like never before!</h3>
            </motion.div>
          </motion.div>
        </Container>
      </section>
      
      {/* Featured Events Section */}
      <section className="events-section" ref={eventsRef} id="events-section">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={eventsControl}
            className="section-content"
          >
            <motion.div variants={fadeIn} className="section-heading">
              <h2>Featured <span className="highlight-text">Events</span></h2>
              <div className="heading-underline"></div>
            </motion.div>
            
            <Row>
              {events.map((event, i) => (
                <Col lg={6} md={6} key={i}>
                  <motion.div 
                    className="event-card"
                    variants={featureCardVariants}
                    custom={i}
                    whileHover="hover"
                  >
                    <div className="event-image">
                      <Image 
                        src={event.image}
                        alt={event.name}
                        className="event-thumbnail"
                      />
                      <span className="event-category">{event.category}</span>
                    </div>
                    <div className="event-content">
                      <h3 className="event-title">{event.name}</h3>
                      <div className="event-date">
                        <FaCalendarAlt /> <span>{event.date}</span>
                      </div>
                      <p className="event-description">{event.description}</p>
                      <Button className="event-button" href={`/events0`}>
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
            
            <motion.div variants={fadeIn} className="view-all-cta">
              <Button className="primary-button" href="/events0">
                View All Events
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
