import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import myimg from "../assets/prof2.jpeg"; // Replace with your image

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-black relative z-10">
      <motion.h2
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-[#CBF3F0] mb-16 text-center drop-shadow-lg"
      >
        About Me
        <div className="mt-3 w-40 h-[3px] bg-gradient-to-r from-[#00796B] to-[#CBF3F0] mx-auto rounded-full animate-pulse"></div>
 
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Profile Image with Tilt */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/3 flex justify-center"
        >
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.1}
            scale={1.03}
            transitionSpeed={2000}
            className="relative w-64 h-64"
          >
            <div className="absolute inset-0 bg-[#CBF3F0] rounded-xl opacity-20 blur-xl"></div>
            <div className="w-full h-full border-4 border-[#CBF3F0] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={myimg}
                alt="Profile"
                className="w-full h-full object-cover brightness-110"
              />
            </div>
          </Tilt>
        </motion.div>

        {/* Bio Content */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-2/3"
        >
          <h3 className="text-3xl font-semibold text-[#00796B] mb-4">
            Hi, It's <span className="text-[#CBF3F0]">Kasyap G Nath</span>
          </h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            I am a <strong>Frontend Developer</strong> with a passion for crafting visually stunning and responsive web experiences. My expertise spans from concept  to full implementation using <strong>React, Tailwind CSS, and modern JavaScript</strong>.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I enjoy turning complex problems into elegant, user-friendly solutions. My goal is to create digital experiences that are not just functional, but delightful for users. Let's collaborate and bring your next project to life!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
