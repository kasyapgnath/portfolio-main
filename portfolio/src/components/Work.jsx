


import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

// ✅ Import images properly
import netflixImg from "../assets/netflix.png";
import weatherImg from "../assets/weather.png";
import portfolioImg from "../assets/frontimg.png";
import noteAppImg from "../assets/noteapp.png";
import todoImg from "../assets/todolist.webp";

// === Project Data ===
const projectList = [
  {
    name: "Netflix Clone",
    image: netflixImg,
    description:
      "A responsive Netflix clone built using React, Tailwind, and TMDB API for fetching movie data.",
    tags: ["React", "Tailwind", "API"],
    github:
      "https://github.com/kasyapgnath/Netflix-Clone/tree/efaf494d6d0b8624b7eb3168d6ed0f12ab812220/Netflixfrontend",
    live: "https://netflix-clone-last-ten.vercel.app/",
  },
  {
    name: "Weather App",
    image: weatherImg,
    description:
      "A weather app that provides real-time temperature, humidity, and forecast updates based on your location.",
    tags: ["React", "OpenWeather API"],
    github:
      "https://github.com/kasyapgnath/weather-app/tree/2e41c625d71641327ab9dd7b928cbd5fd1bdd39f/Weatherapp",
    live: "https://weather-app-new-two-iota.vercel.app/",
  },
  {
    name: "Portfolio Website",
    image: portfolioImg,
    description:
      "My personal portfolio built with React, Framer Motion, and Tailwind CSS showcasing my work and skills.",
    tags: ["React", "Framer Motion", "Tailwind"],
    github:
      "https://github.com/kasyapgnath/portfolio-main/tree/5473be8d0dbb45c607f061e7fad81cab7ce4507e/portfolio",
    live: "https://portfolio-main-last-eta.vercel.app/",
  },
  {
    name: "Note App",
    image: noteAppImg,
    description:
      "A simple markdown-based note-taking app with local storage persistence and sleek UI.",
    tags: ["React", "Tailwind"],
    github: "https://github.com/yourusername/note-app",
    live: "https://noteapp-nu-eight.vercel.app/",
  },
  {
    name: "To-Do List",
    image: todoImg,
    description:
      "An efficient task manager with CRUD operations and drag-and-drop functionality.",
    tags: ["React", "Context API"],
    github:
      "https://github.com/kasyapgnath/react-arcite/tree/de6275073454c8dbeb3b2e6b5583c8e5f7d0eee5/Day10",
    live: "https://to-do-list-rlhr.vercel.app/",
  },
];

// === Animation Variants ===
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

// === Component ===
const Work = () => {
  return (
    <section id="work" className="py-20 px-6 w-full bg-black relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute top-[-50px] left-1/3 w-80 h-80 bg-[#CBF3F0]/20 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-60px] right-1/3 w-64 h-64 bg-[#00796B]/30 rounded-full blur-2xl opacity-40"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <motion.h2
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-[#CBF3F0] mb-12 text-center drop-shadow-lg relative z-10"
      >
        My Work
        <div className="mt-3 w-40 h-[3px] bg-gradient-to-r from-[#00796B] to-[#CBF3F0] mx-auto rounded-full animate-pulse"></div>
      </motion.h2>

      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -6,
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(203, 243, 240, 0.4)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A0A0A]/80 backdrop-blur-md rounded-xl overflow-hidden border border-[#CBF3F0]/20 shadow-lg hover:border-[#CBF3F0]/40 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
            </div>

            {/* Project Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-[#CBF3F0] mb-2">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-[#CBF3F0]/10 text-[#CBF3F0] rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-start space-x-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#CBF3F0] transition-colors flex items-center space-x-1 text-sm"
                >
                  <FaGithub className="text-lg" />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#CBF3F0] transition-colors flex items-center space-x-1 text-sm"
                >
                  <FaLink className="text-lg" />
                  <span>Live</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;