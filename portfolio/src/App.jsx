import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Work />
        <Contact />
      </main>

      
    </div>
  );
};

export default App;