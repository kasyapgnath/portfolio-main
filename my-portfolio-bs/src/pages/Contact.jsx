// // src/pages/Contact.jsx
// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// // Install react-icons: npm install react-icons
// import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // In a real app, you would send this data to a backend or a service.
//     alert('Message sent successfully!');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <Container className="py-5">
//       <h2 className="text-center fw-bold mb-5">Get In Touch</h2>
//       <Row className="justify-content-center">
//         <Col md={8} lg={6}>
//           <Card className="shadow-sm p-4">
//             <Card.Body>
//               <h4 className="mb-4">Send Me a Message</h4>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor="name">Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor="email">Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label htmlFor="message">Message</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={5}
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" className="w-100">
//                   Submit
//                 </Button>
//               </Form>
//               <hr className="my-4" />
//               <div className="text-center">
//                 <h4 className="mb-3">Find Me On</h4>
//                 <div className="d-flex justify-content-center gap-4 fs-3">
//                   <a href="mailto:your.email@example.com" className="text-secondary"><FaEnvelope /></a>
//                   <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary"><FaLinkedin /></a>
//                   <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-dark"><FaGithub /></a>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// Install react-icons: npm install react-icons
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, replace this alert with a custom modal UI.
    // For local testing, we'll use a log and a placeholder alert substitute.
    console.log('--- Message sent successfully! (Substitute for modal/success message) ---');
    setFormData({ name: '', email: '', message: '' });
  };

  // Custom styles for dark theme and animations
  const customStyles = {
    // Deep dark background for the page container
    pageBg: { backgroundColor: '#0D0D0D', color: 'white', minHeight: '100vh' },
    // Custom card style for dark background with a subtle border/shadow
    cardBg: { backgroundColor: '#1C1C1C', color: 'white', border: '1px solid #333' },
    // Accent color for primary actions
    primaryAccent: '#00FFFF',
  };

  return (
    <div style={customStyles.pageBg}>
      <Container className="py-5 animate__animated animate__zoomIn">
        <h2 className="text-center fw-bold mb-5 text-light">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg p-4" style={customStyles.cardBg}>
              <Card.Body>
                <h4 className="mb-4 text-light">Send Me a Message</h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="name" className="text-light">Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#333', borderColor: '#555', color: 'white' }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email" className="text-light">Email</Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#333', borderColor: '#555', color: 'white' }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label htmlFor="message" className="text-light">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#333', borderColor: '#555', color: 'white' }}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100 fw-bold" style={{ backgroundColor: customStyles.primaryAccent, borderColor: customStyles.primaryAccent, color: customStyles.cardBg.backgroundColor }}>
                    Submit Message
                  </Button>
                </Form>
                <hr className="my-4" style={{ borderColor: '#555' }} />
                <div className="text-center">
                  <h4 className="mb-3 text-light">Find Me On</h4>
                  <div className="d-flex justify-content-center gap-4 fs-2">
                    {/* Mailto link - uses the primary blue accent */}
                    <a href="mailto:your.email@example.com" style={{ color: customStyles.primaryAccent }} className="transition-all hover-scale">
                      <FaEnvelope />
                    </a>
                    {/* LinkedIn link */}
                    <a href="https://www.linkedin.com/in/kasyap-g-nath-08a54631b/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077B5' }} className="transition-all hover-scale">
                      <FaLinkedin />
                    </a>
                    {/* GitHub link */}
                    <a href="https://github.com/kasyapgnath" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }} className="transition-all hover-scale">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
