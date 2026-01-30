// // src/pages/Skills.jsx
// import React from 'react';
// import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// // Install react-icons: npm install react-icons
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPython, } from 'react-icons/fa';

// const skillsData = {
//   languages: [
//     { name: 'HTML5', icon: <FaHtml5 className="me-2" /> },
//     { name: 'CSS3', icon: <FaCss3Alt className="me-2" /> },
//     { name: 'JavaScript', icon: <FaJs className="me-2" /> },
//     {name: 'Python', icon: <FaPython className="me-2" />},
//   ],
//   frameworks: [
//     { name: 'React', icon: <FaReact className="me-2" /> },
    
//   ],
//   tools: [
//     { name: 'Git & GitHub', icon: <FaGitAlt className="me-2" /> },
//     { name: 'Webpack', icon: '📦' },
//   ],
// };

// const Skills = () => {
//   return (
//     <Container className="py-5">
//       <h2 className="text-center fw-bold mb-5">My Skills</h2>
//       <Row className="g-4 justify-content-center">
//         {Object.entries(skillsData).map(([category, skills]) => (
//           <Col md={6} lg={4} key={category}>
//             <Card className="shadow-sm h-100">
//               <Card.Header className="fw-bold fs-5 text-capitalize text-primary">{category}</Card.Header>
//               <Card.Body>
//                 <ListGroup variant="flush">
//                   {skills.map((skill, index) => (
//                     <ListGroupItem key={index} className="d-flex align-items-center">
//                       <span className="me-2 fs-5">{skill.icon}</span> {skill.name}
//                     </ListGroupItem>
//                   ))}
//                 </ListGroup>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Skills;

// import React from 'react';
// import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// // Install react-icons: npm install react-icons
// import { FaCode, FaReact, FaCss3Alt, FaJs, FaGitAlt, FaHtml5,  } from 'react-icons/fa';
// // import "animate.css/animate.min.css";

// const skillsData = {
//   frontend_core: {
//     title: 'Frontend Core',
//     icon: <FaCode />,
//     skills: [
//       { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
//       { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
//       { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-500" /> },
//     ],
//   },
//   frameworks: {
//     title: 'Frameworks & Libraries',
//     icon: <FaReact />,
//     skills: [
//       { name: 'React', icon: <FaReact className="text-info" /> },
//       // { name: 'Next.js', icon: <FaTerminal className="text-white" /> },
//       // { name: 'Vue.js', icon: <FaVuejs className="text-success" /> },
//     ],
//   },
//   styling: {
//     title: 'Styling & Design',
//     icon: <FaCss3Alt />,
//     skills: [
//       { name: 'Bootstrap', icon: '🇧' },
//       { name: 'Tailwind CSS', icon: '💨' },
//       { name: 'Responsive Design', icon: '📱' },
//     ],
//   },
//   tools: {
//     title: 'Tools & Workflow',
//     icon: <FaGitAlt />,
//     skills: [
//       { name: 'Git & GitHub', icon: <FaGitAlt className="text-danger" /> },
//       // { name: 'NPM/Yarn', icon: <FaNodeJs className="text-success" /> },
//       // { name: 'VS Code', icon: '💻' },
//     ],
//   },
// };

// const Skills = () => {
//   return (
//     <div className="bg-dark text-white py-5" style={{ minHeight: '90vh' }}>
//       <Container className="py-2">
//         <h2
//           className="text-center fw-bold mb-5 display-4 animate__animated animate__fadeInDown"
//           style={{
//             color: '#00FFFF',
//             textShadow: '0 0 10px rgba(0, 255, 255, 0.4)',
//             animationDuration: '1s',
//           }}
//         >
//           My Technical Skills
//         </h2>

//         <Row className="g-4 justify-content-center">
//           {Object.values(skillsData).map((category, index) => (
//             <Col md={6} lg={4} key={category.title}>
//               {/* Card with zoom-in animation and delay */}
//               <Card
//                 className="shadow-lg h-100 border-primary bg-secondary-dark-custom animate__animated animate__zoomIn"
//                 style={{
//                   animationDuration: '1s',
//                   animationDelay: `${0.2 + index * 0.1}s`,
//                   // Custom deep dark card background
//                   backgroundColor: '#1C1C1C',
//                 }}
//               >
//                 <Card.Header className="fw-bold fs-5 text-capitalize text-info d-flex align-items-center bg-dark-header"
//                   style={{ borderBottom: '1px solid #00FFFF33' }}>
//                   <span className="me-2 fs-4">{category.icon}</span> {category.title}
//                 </Card.Header>
//                 <ListGroup variant="flush" className="bg-transparent">
//                   {category.skills.map((skill, skillIndex) => (
//                     <ListGroup.Item
//                       key={skillIndex}
//                       className="d-flex align-items-center bg-transparent text-light border-0 py-3"
//                       style={{ borderBottom: skillIndex < category.skills.length - 1 ? '1px solid #333' : 'none' }}
//                     >
//                       <span className="me-3 fs-5" style={{ width: '25px', color: '#00FFFF' }}>{skill.icon}</span>
//                       {skill.name}
//                     </ListGroup.Item>
//                   ))}
//                 </ListGroup>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//       {/* Custom CSS for deep black background consistency */}
//       <style>{`
//         .bg-dark {
//             background-color: #0D0D0D !important;
//         }
//         .text-info {
//             color: #00FFFF !important; /* Cyan accent for consistency */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Skills;


import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
// Install react-icons: npm install react-icons
import { FaCode, FaReact, FaCss3Alt, FaJs, FaGitAlt, FaTerminal, FaHtml5, FaNodeJs, FaVuejs } from 'react-icons/fa';
// import 'animate.css/animate.min.css';

const skillsData = {
  frontend_core: {
    title: 'Frontend Core',
    icon: <FaCode />,
    skills: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-500" /> },
    ],
  },
  frameworks: {
    title: 'Frameworks & Libraries',
    icon: <FaReact />,
    skills: [
      { name: 'React', icon: <FaReact className="text-info" /> },
    ],
  },
  styling: {
    title: 'Styling & Design',
    icon: <FaCss3Alt />,
    skills: [
      { name: 'Bootstrap', icon: '🇧' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'Responsive Design', icon: '📱' },
    ],
  },
  tools: {
    title: 'Tools & Workflow',
    icon: <FaGitAlt />,
    skills: [
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-danger" /> },
      // { name: 'NPM/Yarn', icon: <FaNodeJs className="text-success" /> },
      // { name: 'VS Code', icon: '💻' },
    ],
  },
};

const Skills = () => {
  return (
    <div className="bg-dark text-white py-5" style={{ minHeight: '91.5vh' }}>
      <Container fluid="md" className="py-2"> {/* Changed to constrained Container */}
        <h2
          className="text-center fw-bold mb-5 display-4 animate__animated animate__fadeInDown"
          style={{ 
            color: '#00FFFF', 
            textShadow: '0 0 10px rgba(0, 255, 255, 0.4)', 
            animationDuration: '1s',
          }}
        >
          My Technical Skills
        </h2>

        <Row className="g-4 justify-content-center">
          {Object.values(skillsData).map((category, index) => (
            <Col md={6} lg={4} key={category.title}>
              {/* Card with zoom-in animation and delay */}
              <Card 
                className="shadow-lg h-100 border-primary bg-secondary-dark-custom animate__animated animate__zoomIn"
                style={{ 
                  animationDuration: '1s', 
                  animationDelay: `${0.2 + index * 0.1}s`,
                  // Custom deep dark card background
                  backgroundColor: '#1C1C1C', 
                }}
              >
                <Card.Header className="fw-bold fs-5 text-capitalize text-info d-flex align-items-center bg-dark-header"
                  style={{ borderBottom: '1px solid #00FFFF33' }}>
                  <span className="me-2 fs-4">{category.icon}</span> {category.title}
                </Card.Header>
                <ListGroup variant="flush" className="bg-transparent">
                  {category.skills.map((skill, skillIndex) => (
                    <ListGroup.Item 
                      key={skillIndex} 
                      className="d-flex align-items-center bg-transparent text-light border-0 py-3"
                      style={{ borderBottom: skillIndex < category.skills.length - 1 ? '1px solid #333' : 'none' }}
                    >
                      <span className="me-3 fs-5" style={{ width: '25px', color: '#00FFFF' }}>{skill.icon}</span> 
                      {skill.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* Custom CSS for deep black background consistency */}
      <style>{`
        .bg-dark {
            background-color: #0D0D0D !important;
        }
        .text-info {
            color: #00FFFF !important; /* Cyan accent for consistency */
        }
      `}</style>
    </div>
  );
};

export default Skills;
