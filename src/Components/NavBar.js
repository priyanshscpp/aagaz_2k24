import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import img from "../res/onlyaagaz.png";
import { Link } from "react-router-dom";
import "../Pages/style/navbar.css";

const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleNavLinkClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <Navbar
      collapseOnSelect
      style={{ width: "80vw", color: "rgb(255,255,255)" }}
      variant="dark"
      expand="lg"
      expanded={isNavbarOpen}
    >
      <Container>
        <Navbar.Brand
          style={{ "font-size": "20px", letterSpacing: "2px" }}
          align-items-center
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
          onClick={handleNavLinkClick}
        />
        <Navbar.Collapse className="responsive-navbar-nav">
          <Nav style={{ "font-size": "10px" }} className="navLinks ms-auto">
            <Link className="navLinks1" to="/" onClick={handleNavLinkClick}>
              Home
            </Link>
            &nbsp;
            <Link
              className="navLinks1"
              to="/events0"
              onClick={handleNavLinkClick}
            >
              Events
            </Link>
            &nbsp;
            <Link
              className="navLinks1"
              to="/sponsers"
              onClick={handleNavLinkClick}
            >
              Sponsors
            </Link>
            &nbsp;
            <Link
              className="navLinks1"
              to="/ourTeam"
              onClick={handleNavLinkClick}
            >
              Team
            </Link>
            &nbsp;
            <Link
              className="navLinks1"
              to="/merch"
              onClick={handleNavLinkClick}
            >
              Merch and Passes
            </Link>
            &nbsp;
            <Link
              className="navLinks1"
              to="/gallery"
              onClick={handleNavLinkClick}
            >
              Gallery
            </Link>
            &nbsp;
            <Link
              className="navLinks1"
              to="/esports"
              onClick={handleNavLinkClick}
            >
              Esports
            </Link>
            &nbsp;
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
