// src/pages/Home.jsx
// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light">
//       <Container>
//         <h1 className="display-3 fw-bold mb-3">
//           Hi, I'm <span className="text-primary">KASYAP G NATH</span>
//         </h1>
//         <p className="lead mb-5">
//           A passionate Frontend Developer dedicated to crafting engaging and user-friendly web experiences.
//           I transform ideas into beautiful and functional digital products.
//         </p>
//         <div className="d-flex justify-content-center gap-3">
//           <Button as={Link} to="/projects" variant="primary" size="lg" className="rounded-pill">
//             View My Work
//           </Button>
//           <Button as={Link} to="/contact" variant="outline-secondary" size="lg" className="rounded-pill">
//             Get In Touch
//           </Button>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { Container, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     // Custom container with deep dark background and minimum full viewport height
//     <div className="bg-dark text-white d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '91.5vh' }}>
//       <Container className="text-center py-5">
        
//         {/* Animated Heading - Using bounceIn for a dramatic entrance */}
//         <h1
//           className="display-1 fw-bolder mb-4 animate__animated animate__bounceIn"
//           style={{
//             animationDelay: '0.3s',
//             // Enhanced text gradient: vibrant cyan to primary blue
//             backgroundImage: 'linear-gradient(45deg, #00FFFF, #007bff)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             // Subtle shadow for 3D effect
//             textShadow: '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 123, 255, 0.3)'
//           }}
//         >
//           Hi, I'm Kasyap G Nath
//         </h1>
        
//         {/* Animated Subtitle - Using fadeInDown to match title directionality */}
//         <p
//           className="lead mb-5 animate__animated animate__fadeInDown"
//           style={{ animationDelay: '0.8s', maxWidth: '800px', margin: '0 auto', fontSize: '1.5rem', color: '#B0B0B0' }}
//         >
//           A passionate Frontend Developer dedicated to crafting <span className="fw-semibold text-info text-shadow-glow">engaging and user-friendly web experiences.</span> I transform ideas into beautiful and functional digital products.
//         </p>

//         {/* Animated Call-to-Action Buttons - Using zoomIn for a pop-up effect */}
//         <div className="d-flex justify-content-center gap-4 mt-5 animate__animated animate__zoomIn" style={{ animationDelay: '1.2s' }}>
//           <Button
//             as={Link}
//             to="/projects"
//             variant="primary"
//             size="lg"
//             className="rounded-pill shadow-lg fw-bold px-5 py-3 custom-btn-glow"
//           >
//             View My Work
//           </Button>
//           <Button
//             as={Link}
//             to="/contact"
//             variant="outline-light"
//             size="lg"
//             className="rounded-pill fw-bold px-5 py-3 custom-btn-hover"
//           >
//             Get In Touch
//           </Button>
//         </div>

//       </Container>
      
//       {/* Custom CSS for button animations and better color integration */}
//       <style>{`
//         .bg-dark {
//           background: #0D0D0D !important; /* Even deeper black */
//         }
//         .custom-btn-hover {
//           transition: all 0.3s ease-in-out;
//         }
//         .custom-btn-hover:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
//           border-color: #00FFFF !important; /* Hover glow border */
//           color: #00FFFF !important;
//         }
        
//         /* Primary button glow effect */
//         .custom-btn-glow {
//             transition: all 0.3s ease-in-out;
//             box-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
//         }
//         .custom-btn-glow:hover {
//             transform: scale(1.05); /* Slightly bigger hover */
//             box-shadow: 0 0 25px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 123, 255, 1);
//         }
//         .text-info {
//             color: #00FFFF !important; /* Brighter cyan accent */
//         }
//         .text-shadow-glow {
//             text-shadow: 0 0 8px rgba(0, 255, 255, 0.5); /* Subtle text glow */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;




import React, { useState } from 'react'; // Import useState
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Start in dark mode

  // Define color themes for easy switching
  const themes = {
    dark: {
      pageBg: '#0D0D0D', // Deep Black
      secondaryBg: '#151515', // Dark Gray for gradient
      textColor: '#FFFFFF',
      subtitleColor: '#B0B0B0',
      primaryAccent: '#00FFFF', // Cyan
      secondaryAccent: '#007bff', // Primary Blue
      shadowColor: 'rgba(0, 0, 0, 0.6)',
    },
    light: {
      pageBg: '#F8F9FA', // Light Gray/White
      secondaryBg: '#E9ECEF', // Lighter Gray for gradient
      textColor: '#343A40', // Dark text
      subtitleColor: '#6C757D', // Muted Gray
      primaryAccent: '#007bff', // Primary Blue
      secondaryAccent: '#20c997', // Teal
      shadowColor: 'rgba(108, 117, 125, 0.3)', // Lighter shadow
    },
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Styles dynamically based on the current theme
  const heroBgStyle = {
    // Background gradient for the current theme, shifted for animation
    background: `linear-gradient(135deg, ${currentTheme.pageBg} 0%, ${currentTheme.secondaryBg} 50%, ${currentTheme.pageBg} 100%)`,
    backgroundSize: '200% 200%',
    animation: 'gradientShift 30s ease infinite',
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    transition: 'background-color 0.5s ease', // Smooth transition for background switch
  };

  return (
    // Combined container with the animated background style
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={heroBgStyle}
    >
      
      {/* Theme Toggle Button */}
      <Button
        variant={isDarkMode ? 'outline-light' : 'outline-dark'}
        onClick={toggleTheme}
        className="position-absolute top-0 end-0 m-4 rounded-circle p-2"
        style={{ zIndex: 10, transition: 'color 0.3s, border-color 0.3s' }}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {/* Using simple emoji for the icon */}
        {isDarkMode ? '☀️' : '🌙'}
      </Button>

      {/* Content Container (Z-index 2 ensures content is visible) */}
      <Container className="text-center py-5" style={{ zIndex: 2, color: currentTheme.textColor }}>
        
        {/* Animated Heading - Using bounceIn for a dramatic entrance */}
        <h1
          className="display-1 fw-bolder mb-4 animate__animated animate__bounceIn"
          style={{
            animationDelay: '0.3s',
            // Enhanced text gradient using theme accents
            backgroundImage: `linear-gradient(45deg, ${currentTheme.primaryAccent}, ${currentTheme.secondaryAccent})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // Subtle shadow for 3D effect
            textShadow: `0 0 10px ${currentTheme.primaryAccent}80, 0 0 20px ${currentTheme.secondaryAccent}50`
          }}
        >
          Hi, I'm Kasyap G Nath
        </h1>
        
        {/* Animated Subtitle - Using fadeInDown to match title directionality */}
        <p
          className="lead mb-5 animate__animated animate__fadeInDown"
          style={{
              animationDelay: '0.8s',
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '1.5rem',
              color: currentTheme.subtitleColor
            }}
        >
          A passionate Frontend Developer dedicated to crafting <span className="fw-semibold" style={{ color: currentTheme.primaryAccent }}>engaging and user-friendly web experiences.</span> I transform ideas into beautiful and functional digital products.
        </p>

        {/* Animated Call-to-Action Buttons - Using zoomIn for a pop-up effect */}
        <div className="d-flex justify-content-center gap-4 mt-5 animate__animated animate__zoomIn" style={{ animationDelay: '1.2s' }}>
          {/* Primary Button (View My Work) */}
          <Button
            as={Link}
            to="/projects"
            variant="primary"
            size="lg"
            className="rounded-pill shadow-lg fw-bold px-5 py-3 custom-btn-glow"
            style={{
                // Primary button uses primary accent color for background
                backgroundColor: currentTheme.primaryAccent,
                borderColor: currentTheme.primaryAccent,
                color: currentTheme.pageBg, // Dark text on light button
            }}
          >
            View My Work
          </Button>
          {/* Secondary Button (Get In Touch) */}
          <Button
            as={Link}
            to="/contact"
            variant={isDarkMode ? 'outline-light' : 'outline-dark'}
            size="lg"
            className="rounded-pill fw-bold px-5 py-3 custom-btn-hover"
            style={{
                // Border and text color change based on mode
                color: isDarkMode ? currentTheme.textColor : currentTheme.secondaryAccent,
                borderColor: isDarkMode ? currentTheme.textColor : currentTheme.secondaryAccent,
            }}
          >
            Get In Touch
          </Button>
        </div>

      </Container>
      
      {/* Custom CSS for button animations, color integration, and the background animation */}
      <style>{`
        /* Background gradient shift animation */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Custom styles applied to buttons */
        .custom-btn-hover {
          transition: all 0.3s ease-in-out;
        }
        .custom-btn-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px ${currentTheme.shadowColor};
          /* Use primary accent for hover glow */
          border-color: ${currentTheme.primaryAccent} !important;
          color: ${currentTheme.primaryAccent} !important;
        }
        
        /* Primary button glow effect */
        .custom-btn-glow {
            transition: all 0.3s ease-in-out;
            box-shadow: 0 0 15px ${currentTheme.secondaryAccent}80;
        }
        .custom-btn-glow:hover {
            transform: scale(1.05); /* Slightly bigger hover */
            /* Use combined accents for stronger glow on hover */
            box-shadow: 0 0 25px ${currentTheme.primaryAccent}, 0 0 10px ${currentTheme.secondaryAccent};
        }
        /* Overriding Bootstrap text-info to ensure theme consistency */
        .text-info {
            color: ${currentTheme.primaryAccent} !important;
        }
        .text-shadow-glow {
            text-shadow: 0 0 8px ${currentTheme.primaryAccent}80;
        }
      `}</style>
    </div>
  );
};

export default Home;



