import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import "./style/team.css";

import faiz from "./images/faiz.png";
import namrata from "./images/Awantika.jpg";
import sahil from "./images/Tauqeer.jpg";
import sonu from "./images/Dev.png";
import aryan from "./images/Abhishek.jpg";
import vikas from "./images/Vikas.jpg";

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const leadershipTeam = [
    {
      id: 1,
      name: "Akhilesh Yadav",
      role: "Students Secretary",
      image: faiz,
      description: "Leading the AAGAZ'25 organizing committee with vision and dedication.",
      instagram: "https://www.instagram.com/akhil_023ii/",
      linkedin: "https://www.linkedin.com/in/akhilesh-yadav-59541425a/",
      email: "subcoucilsports@gmail.com",
      phone: "+916392782210"
    },
    {
      id: 2,
      name: "Awantika",
      role: "Students Secretary",
      image: namrata,
      description: "Coordinating all aspects of AAGAZ'25 with exceptional organizational skills.",
      instagram: "https://www.instagram.com/tishaaachaudhary",
      linkedin: "https://www.linkedin.com/in/namrata-singh-75a88322b/",
      email: "210113028@hbtu.ac.in",
      phone: "+919548499530"
    }
  ];

  const teamMembers = [
    {
      id: 3,
      name: "Mohammad Tauqeer",
      role: "Technical Head",
      image: sahil,
      description: "Managing all technical aspects of AAGAZ'25 with expertise and innovation.",
      instagram: "https://www.instagram.com/tauqeer_7770/",
      linkedin: "https://www.linkedin.com/in/mohammad-tauqeer-a-642702258/",
      email: "220110035@hbtu.ac.in",
      phone: "+918009593561"
    },
    {
      id: 5,
      name: "Dev Chitousia",
      role: "Event Coordinator",
      image: sonu,
      description: "Coordinating all events and ensuring smooth execution during AAGAZ'25.",
      instagram: "#",
      linkedin: "#",
      email: "example@hbtu.ac.in",
      phone: "+91XXXXXXXXXX"
    },
    {
      id: 7,
      name: "Abhishek Mishra",
      role: "Event Manager",
      image: aryan,
      description: "Managing event logistics and coordination for AAGAZ'25.",
      instagram: "#",
      linkedin: "#",
      email: "example@hbtu.ac.in",
      phone: "+91XXXXXXXXXX"
    },
    {
      id: 9,
      name: "Vikas",
      role: "Design Head",
      image: vikas,
      description: "Coordinating sports events and competitions during AAGAZ'25.",
      instagram: "#",
      linkedin: "#",
      email: "example@hbtu.ac.in",
      phone: "+91XXXXXXXXXX"
    },
    
// {
//   id: 10,
//   name: "Ashutosh",
//   role: "PR Head",
//   image: ashutosh,
//   description: "Managing public relations and external communications for AAGAZ'25.",
//   instagram: "#",
//   linkedin: "#",
//   email: "example@hbtu.ac.in",
//   phone: "+91XXXXXXXXXX"
// }
  ];

  const TeamCard = ({ member }) => {
    return (
      <motion.div className="team-card" variants={itemVariants}>
        <img src={member.image} alt={member.name} className="team-card-image" />
        <div className="team-card-content">
          <h3 className="team-card-title">{member.name}</h3>
          <p className="team-card-role">{member.role}</p>
          <p className="team-card-description">{member.description}</p>
          <div className="team-social-links">
            <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="team-social-link"><FaInstagram /></a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="team-social-link"><FaLinkedin /></a>
            <a href={`mailto:${member.email}`} className="team-social-link"><FaEnvelope /></a>
            <a href={`tel:${member.phone}`} className="team-social-link"><FaPhone /></a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="team-container">
      <Container>
        <motion.div className="team-header" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="team-title">Meet Our Team</h1>
          <p className="team-subtitle">The dedicated individuals behind AAGAZ'25 who work tirelessly to make this event a grand success.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} ref={ref}>
          <div className="team-leadership">{leadershipTeam.map(member => <TeamCard key={member.id} member={member} />)}</div>
          <div className="team-grid">{teamMembers.map(member => <TeamCard key={member.id} member={member} />)}</div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Team;
