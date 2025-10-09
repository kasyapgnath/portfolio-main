import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import myimg from "../assets/prof2.jpeg"; // Replace with your image

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'frontend developer'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

const linkss = [
  { icon: FaGithub, linkk: "https://github.com/kasyapgnath" },
  { icon: FaLinkedin, linkk: "https://www.linkedin.com/in/kasyap-g-nath-08a54631b/" },
  { icon: FaEnvelope, linkk: "mailto:kasyapgnath97@gmail.com" },
];


  return (
    <section id="home" className="min-h-screen flex items-center justify-center pb-24 px-4 bg-black relative overflow-hidden">
      {/* Background Neon Glows */}
      <motion.div
        className="absolute top-10 left-1/4 w-96 h-96 bg-[#CBF3F0] rounded-full filter blur-3xl opacity-30 animate-pulse-slow"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#00796B] rounded-full filter blur-2xl opacity-25 animate-pulse-slow"
        initial={{ scale: 1 }}
        animate={{ scale: 1.3 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      ></motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="order-2 md:order-1"
        >
          <p className="text-xl text-[#CBF3F0] mb-3 font-mono tracking-wide">Hi, I'm</p>
          <h1 className="text-6xl sm:text-7xl font-extrabold text-[#00796B] mb-4 leading-tight drop-shadow-lg">
            Kasyap G Nath
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#CBF3F0] h-10 mb-8">
            <span>{text}</span>
            <Cursor cursorColor="#00796B" />
          </h2>

          <p className="text-gray-300 max-w-lg mb-8">
            Crafting responsive and visually stunning web experiences. Let's create something exceptional together.
          </p>

          <div className="flex space-x-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-[#CBF3F0] to-[#00796B] text-black font-bold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-[#CBF3F0]/50"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border-2 border-[#CBF3F0] text-[#CBF3F0] font-bold rounded-full hover:bg-[#CBF3F0]/20 transition-colors duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
  {linkss.map((each, idx) => {
    const Icon = each.icon; // ✅ assign the icon for this item
    return (
      <a
        key={idx}
        href={each.linkk}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-gray-400 hover:text-[#CBF3F0] transition-colors duration-300 drop-shadow-md"
      >
        <Icon /> {/* ✅ use the icon variable */}
      </a>
    );
  })}
</div>

        </motion.div>

        {/* Profile Image with Tilt */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={2500}
            className="relative w-72 h-72  left-35"
          >
            <div className="absolute inset-0 bg-[#CBF3F0] rounded-full opacity-20 blur-xl"></div>
            <div className="w-full h-full border-4 border-[#CBF3F0] rounded-full overflow-hidden shadow-2xl">
              <img
                src={myimg}
                alt="Kasyap G Nath Profile"
                className="w-full h-full object-cover brightness-105"
              />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
