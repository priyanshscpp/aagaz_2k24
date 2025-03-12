import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import img from "../res/onlyaagaz.png";
import { Link } from "react-router-dom";
import "../Pages/style/navbar.css";

const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleNavLinkClick = () => {
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Navbar
      collapseOnSelect
      style={{ 
        width: "80vw", 
        color: "rgb(255,255,255)",
        background: "transparent",
        boxShadow: "none",
        borderRadius: "15px",
        top: visible ? "30px" : "-100px",
        padding: "15px",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.03)",
        transition: "top 0.3s ease-in-out"
      }}
      variant="dark"
      expand="lg"
      expanded={isNavbarOpen}
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand
          style={{ 
            fontSize: "20px", 
            letterSpacing: "2px",
            padding: "5px 15px"
          }}
          href="/"
        >
          <img
            alt="img"
            src={img}
            width="30"
            height="25"
            className="d-inline-block align-top"
          />{" "}
          AAGAZ'25
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className={isNavbarOpen ? 'show' : ''}>
          <Nav className="navLinks ms-auto">
            <Link className="navLinks1" to="/" onClick={handleNavLinkClick}>
              Home
            </Link>
            <Link
              className="navLinks1"
              to="/events0"
              onClick={handleNavLinkClick}
            >
              Events
            </Link>
            <Link
              className="navLinks1"
              to="/sponsers"
              onClick={handleNavLinkClick}
            >
              Sponsors
            </Link>
            <Link
              className="navLinks1"
              to="/ourTeam"
              onClick={handleNavLinkClick}
            >
              Team
            </Link>
            <Link
              className="navLinks1"
              to="/merch"
              onClick={handleNavLinkClick}
            >
              Merch and Passes
            </Link>
            <Link
              className="navLinks1"
              to="/gallery"
              onClick={handleNavLinkClick}
            >
              Gallery
            </Link>
            <Link
              className="navLinks1"
              to="/esports"
              onClick={handleNavLinkClick}
            >
              Esports
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
