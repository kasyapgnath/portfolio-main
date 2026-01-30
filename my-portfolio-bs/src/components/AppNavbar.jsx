
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-lg">
      <Container>
        <Navbar.Brand 
          as={NavLink} 
          to="/" 
          className="fw-bold fs-4 text-info"
          style={{ textShadow: '0 0 5px rgba(0, 255, 255, 0.5)' }} // Logo text glow
        >
          My Portfolio.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Me</Nav.Link>
            <Nav.Link as={NavLink} to="/skills">Skills</Nav.Link>
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style>{`
        /* Ensure Navbar uses the deep dark background for consistency */
        .navbar.bg-dark {
            background-color: #0D0D0D !important;
        }

        /* NavLink base style */
        .navbar-dark .navbar-nav .nav-link {
          color: #E0E0E0; /* Light gray base color */
          transition: all 0.2s ease-in-out;
          border-bottom: 2px solid transparent; 
          margin-left: 1rem;
        }
        
        /* Active state for NavLinks (Cyan accent and bold) */
        .navbar-dark .navbar-nav .nav-link.active {
          color: #00FFFF !important; 
          font-weight: 600;
          border-bottom: 2px solid #00FFFF;
        }

        /* Hover effect (Primary blue) */
        .navbar-dark .navbar-nav .nav-link:hover:not(.active) {
            color: #007bff !important; 
            border-bottom: 2px solid rgba(0, 123, 255, 0.5);
        }
      `}</style>
    </Navbar>
  );
};

export default AppNavbar;
