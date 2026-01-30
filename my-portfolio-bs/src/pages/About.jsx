

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaLaptopCode, FaReact, FaMagic } from 'react-icons/fa';
import profileImage from "../assets/white.jpeg"; 

const About = () => {
  return (
    <div className="bg-dark text-white py-5" style={{ minHeight: '90vh' }}>
      <Container className="py-5">
        
      
        <div 
          className="animate__animated animate__zoomIn"
        
          style={{ animationDuration: '1s', animationDelay: '0.3s' }}
        >
          <h2 
            className="text-center fw-bold mb-5 display-4"
            style={{ color: '#00FFFF', textShadow: '0 0 10px rgba(0, 255, 255, 0.4)' }}
          >
            About Me
          </h2>

          <Row className="g-5 align-items-center justify-content-center">
            
           
            <Col md={4} className="text-center">
              <Image 
               
                src={profileImage} 
                alt="Kasyap G Nath Profile Picture"
                fluid 
                roundedCircle 
                
                style={{ 
                     width: '250px', 
                      height: '250px', 
                      objectFit: 'cover',
                      marginTop: '-150px'  // adjust the value as needed
                    }}
                onError={(e) => {
                 
                  console.error("Profile image import failed. Check asset path and file name.");
                }}
              />
            </Col>

            {/* Content Column */}
            <Col md={8}>
              <p className="lead" style={{ color: '#E0E0E0' }}>
                Hello! I'm Kasyap G Nath, a <strong>Frontend Developer</strong> with a passion for transforming complex problems into elegant, user-friendly interfaces. My development philosophy centers around performance, accessibility, and creating digital products that are truly enjoyable to use.
              </p>
              
              <Row className="mt-4 g-3">
                <Col md={6}>
                    <p className="mb-0 fw-semibold text-info"><FaReact className="me-2" /> Specializing in Component Architecture</p>
                    <p style={{ fontSize: '0.95rem', color: '#B0B0B0' }}>
                        I focus heavily on React's ecosystem, building scalable and maintainable applications using modern functional components and Hooks.
                    </p>
                </Col>
                <Col md={6}>
                    <p className="mb-0 fw-semibold text-info"><FaLaptopCode className="me-2" /> Aesthetic and Responsive Design</p>
                    {/* Swapping FaMagic for FaLaptopCode for more relevant icon */}
                    <p style={{ fontSize: '0.95rem', color: '#B0B0B0' }}>
                        I leverage frameworks like Bootstrap to craft pixel-perfect, fully responsive designs that look fantastic on any device.
                    </p>
                </Col>
              </Row>
              
              <p className="mt-4 lead" style={{ color: '#E0E0E0' }}>
                I thrive in collaborative environments and am constantly seeking out new challenges to expand my technical skillset. I believe the best code is clean, well-documented, and aims to solve real-world user needs.
              </p>
            </Col>
          </Row>
        </div>
        {/* Custom CSS to ensure deep black background consistency */}
        <style>{`
          .bg-dark {
              background-color: #0D0D0D !important;
          }
        `}</style>
      </Container>
    </div>
  );
};

export default About;




