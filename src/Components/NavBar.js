import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "../res/Logo.png";
import "./assets/logo.png";
import "../Pages/style/navbar.css";

function NavBar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(location.pathname);

  // Update active link when location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Handle scroll detection for navbar appearance change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleNavLinkClick = (path) => {
    setActiveLink(path);
    setExpanded(false);
  };

  // Animation variants
  const navbarVariants = {
    initial: {
      backgroundColor: "rgba(15, 15, 20, 0)",
      boxShadow: "none",
    },
    scrolled: {
      backgroundColor: "rgba(15, 15, 20, 0.9)",
      boxShadow: "0 5px 20px rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(10px)",
    },
  };

  const linkVariants = {
    hover: {
      y: -2,
      color: "#ffcb05",
      transition: { duration: 0.2 },
    },
    active: {
      color: "#ffcb05",
      fontWeight: "600",
    },
  };

  const logoVariants = {
    initial: { opacity: 1, scale: 1 },
    hover: { 
      scale: 1.05, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      } 
    },
  };

  // Array of navbar links for easy management
  const navLinks = [
    { path: "/", label: "Home" },
    { 
      label: "Events",
      children: [
        { path: "/events0", label: "Athletics" },
        { path: "/events1", label: "Indoor" },
        { path: "/events2", label: "Esports" }
      ]
    },
    { path: "/esports", label: "E-sports" },
    { path: "/merch", label: "Merchandise" },
    { path: "/gallery", label: "Gallery" },
    { path: "/subCouncils", label: "Sub Councils" },
    { path: "/ourTeam", label: "Our Team" },
    { path: "/sponsors", label: "Sponsors" }
  ];

  return (
    <motion.div
      className="navbar-wrapper"
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      <Navbar 
        expand="lg" 
        className={`main-navbar ${scrolled ? "scrolled" : ""}`} 
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Container>
          <motion.div
            initial="initial"
            whileHover="hover"
            variants={logoVariants}
          >
            <Navbar.Brand as={Link} to="/" className="logo-container">
              <img
                src={logo}
                alt="AAGAZ Logo"
                className="navbar-logo"
              />
              <div className="logo-text">
                <div className="logo-title">AAGAZ</div>
                <div className="logo-subtitle">'25</div>
              </div>
            </Navbar.Brand>
          </motion.div>

          <Navbar.Toggle 
            aria-controls="responsive-navbar-nav" 
            className="navbar-toggler-custom"
          >
            <div className={`hamburger ${expanded ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto main-nav">
              {navLinks.map((link, index) => {
                // If the link has children, render a dropdown
                if (link.children) {
                  return (
                    <NavDropdown 
                      title={link.label} 
                      id={`nav-dropdown-${link.label}`}
                      key={index}
                      className={`nav-item nav-dropdown ${link.children.some(child => child.path === activeLink) ? "active" : ""}`}
                    >
                      {link.children.map((child, childIndex) => (
                        <NavDropdown.Item 
                          as={Link} 
                          to={child.path}
                          key={childIndex}
                          className={`dropdown-item ${child.path === activeLink ? "active" : ""}`}
                          onClick={() => handleNavLinkClick(child.path)}
                        >
                          {child.label}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  );
                }
                
                // Otherwise render a regular link
                return (
                  <motion.div
                    key={index}
                    whileHover="hover"
                    variants={linkVariants}
                    initial={link.path === activeLink ? "active" : ""}
                    animate={link.path === activeLink ? "active" : ""}
                  >
                    <Nav.Link
                      as={Link}
                      to={link.path}
                      className={`nav-item ${link.path === activeLink ? "active" : ""}`}
                      onClick={() => handleNavLinkClick(link.path)}
                    >
                      {link.label}
                    </Nav.Link>
                  </motion.div>
                );
              })}
            </Nav>
            
            <motion.div 
              className="nav-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="primary" 
                className="register-button" 
              >
                <a
                  href="https://forms.fillout.com/t/7eJkvXYn6jus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="register-button-link"
                >
                  Register
                </a>
              </Button>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;
