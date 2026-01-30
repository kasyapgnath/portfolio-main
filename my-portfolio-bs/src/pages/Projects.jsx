// src/pages/Projects.jsx
// import React from 'react';
// import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
// // Import your project images here
// // import projectImg1 from '../assets/project1.jpg'; // Example, replace with your actual images
// // import projectImg2 from '../assets/project2.jpg';
// // import projectImg3 from '../assets/project3.jpg';

// const projectsData = [
//   {
//     id: 1,
//     title: 'Agro-connect',
//     description: 'A fully responsive e-commerce platform built with React, featuring product listings, a shopping cart, and user authentication.',
//     // image: projectImg1,
//     techStack: ['React', 'Bootstrap', 'Redux'],
//     liveDemo: 'https://ecommerce.example.com',
//     githubRepo: 'https://github.com/yourusername/ecommerce-store',
//   },
//   {
//     id: 2,
//     title: 'weather app',
//     description: 'A robust task management application allowing users to create, organize, and track their daily tasks with drag-and-drop functionality.',
//     // image: projectImg2,
//     techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
//     liveDemo: 'https://tasks.example.com',
//     githubRepo: 'https://github.com/yourusername/task-manager',
//   },
//   {
//     id: 3,
//     title: 'To-do-list',
//     description: 'A modern blogging platform with a rich text editor for post creation, comment sections, and dynamic routing for articles.',
//     // image: projectImg3,
//     techStack: ['Next.js', 'GraphQL', 'Strapi CMS', 'Bootstrap'],
//     liveDemo: 'https://blog.example.com',
//     githubRepo: 'https://github.com/yourusername/personal-blog',
//   },
//   {
//     id: 4,
//     title: 'Netflix clone',
//     description: 'A modern blogging platform with a rich text editor for post creation, comment sections, and dynamic routing for articles.',
//     // image: projectImg3,
//     techStack: ['Next.js', 'GraphQL', 'Strapi CMS', 'Bootstrap'],
//     liveDemo: 'https://blog.example.com',
//     githubRepo: 'https://github.com/yourusername/personal-blog',
//   },
//   {
//      id: 4,
//     title: 'Note App',
//     description: 'A modern blogging platform with a rich text editor for post creation, comment sections, and dynamic routing for articles.',
//     // image: projectImg3,
//     techStack: ['Next.js', 'GraphQL', 'Strapi CMS', 'Bootstrap'],
//     liveDemo: 'https://blog.example.com',
//     githubRepo: 'https://github.com/yourusername/personal-blog',
//   },
// ];

// const Projects = () => {
//   return (
//     <Container className="py-5">
//       <h2 className="text-center fw-bold mb-5">My Projects</h2>
//       <Row className="g-4">
//         {projectsData.map((project) => (
//           <Col md={6} lg={4} key={project.id}>
//             <Card className="h-100 shadow-sm">
//               <Card.Img variant="top" src={project.image} alt={project.title} style={{ height: '250px', objectFit: 'cover' }} />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="fw-bold fs-4">{project.title}</Card.Title>
//                 <Card.Text>{project.description}</Card.Text>
//                 <div className="mb-3">
//                   {project.techStack.map((tech, index) => (
//                     <Badge key={index} bg="info" className="me-2">{tech}</Badge>
//                   ))}
//                 </div>
//                 <div className="mt-auto d-flex justify-content-between">
//                   {project.liveDemo && (
//                     <Button as="a" href={project.liveDemo} target="_blank" rel="noopener noreferrer" variant="primary">
//                       Live Demo
//                     </Button>
//                   )}
//                   {project.githubRepo && (
//                     <Button as="a" href={project.githubRepo} target="_blank" rel="noopener noreferrer" variant="outline-secondary">
//                       GitHub
//                     </Button>
//                   )}
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Projects;

import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
// Import your project images here
import projectImg1 from '../assets/agri.png'; // Example, replace with your actual images
import projectImg2 from '../assets/weather.png';
import projectImg3 from '../assets/to do list.webp';
import projectImg4 from '../assets/netflix.png';
import projectImg5 from '../assets/noteapp.png';

const projectsData = [
  {
    id: 1,
    title: 'Agro-connect',
    description: 'A fully responsive e-commerce platform built with React, featuring product listings, a shopping cart, and user authentication.',
    image: projectImg1,
    techStack: ['React', 'Bootstrap', 'Redux'],
    liveDemo: 'https://agroconnect.example.com',
    githubRepo: 'https://github.com/kasyapgnath',
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A robust application displaying real-time weather information and forecasts using external APIs.',
    image: projectImg2,
    techStack: ['React', 'API Integration'],
    liveDemo: 'https://weather-app-ws6n.vercel.app/',
    githubRepo: 'https://github.com/kasyapgnath',
  },
  {
    id: 3,
    title: 'To-do-list',
    description: 'A modern task management application utilizing local storage to keep track of daily goals and completed items.',
    image: projectImg3,
    techStack: ['React', 'CSS3', 'Local Storage'],
    liveDemo: 'https://todo.example.com',
    githubRepo: 'https://github.com/kasyapgnath',
  },
  {
    id: 4,
    title: 'Netflix Clone',
    description: 'A front-end replica of the Netflix browsing interface, featuring dynamic movie categories and clean responsiveness.',
    image: projectImg4,
    techStack: ['React', 'TMDB API'],
    liveDemo: 'https://netflixclone.example.com',
    githubRepo: 'https://github.com/kasyapgnath',
  },
  {
    id: 5,
    title: 'Note App',
    description: 'A sleek note-taking application designed for quick organization and retrieval of personal notes.',
    image: projectImg5,
    techStack: ['React', 'Hooks', 'Bootstrap'],
    liveDemo: 'https://noteapp.example.com',
    githubRepo: 'https://github.com/kasyapgnath',
  },
];

const Projects = () => {
 
  const customStyles = {
  
    pageBg: { backgroundColor: '#0D0D0D', color: 'white', minHeight: '100vh' },
   
    cardBg: { backgroundColor: '#1C1C1C', color: 'white', border: '1px solid #333' },
    
    badgeAccent: { backgroundColor: '#00FFFF', color: '#1C1C1C', fontWeight: 'bold' },
  };

  return (
    <div style={customStyles.pageBg}>
      <Container className="py-5 animate__animated animate__zoomIn">
        <h2 className="text-center fw-bold mb-5 text-light">My Projects</h2>
        <Row className="g-4">
          {projectsData.map((project, index) => (
            <Col md={6} lg={4} key={project.id}>
              <Card
                className="h-100 shadow-lg animate__animated animate__fadeInUp"
                style={{
                  ...customStyles.cardBg,
                  animationDelay: `${0.2 + index * 0.1}s`, 
                }}
              >
                {/* Placeholder Image */}
                <div style={{ height: '250px', backgroundColor: '#333', overflow: 'hidden', borderBottom: customStyles.cardBg.border }}>
                  <Card.Img
                    variant="top"
                    src={project.image || 'https://placehold.co/600x400/333333/AAAAAA?text=Project+Image'}
                    alt={project.title}
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold fs-4 text-primary">{project.title}</Card.Title>
                  <Card.Text className="text-light">{project.description}</Card.Text>
                  
                  {/* Tech Stack Badges */}
                  <div className="mb-3">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} style={customStyles.badgeAccent} className="me-2 text-uppercase">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="mt-auto d-flex justify-content-between pt-3">
                    {project.liveDemo && (
                      <Button as="a" href={project.liveDemo} target="_blank" rel="noopener noreferrer" variant="primary" className="fw-bold">
                        Live Demo
                      </Button>
                    )}
                    {project.githubRepo && (
                      <Button as="a" href={project.githubRepo} target="_blank" rel="noopener noreferrer" variant="outline-light" className="fw-bold">
                        GitHub
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
