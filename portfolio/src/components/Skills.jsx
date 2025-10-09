import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma,FaServer } from 'react-icons/fa';
import { SiTailwindcss,SiBootstrap} from 'react-icons/si';

// Skills data
const skillsList = [
  { name: 'HTML5', icon: FaHtml5, level: 5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, level: 5, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, level: 5, color: 'text-yellow-400' },
  { name: 'React.js', icon: FaReact, level: 5, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 5, color: 'text-cyan-500' },
   { name: 'Bootstrap', icon: SiBootstrap, level: 5, color: 'text-purple-500' },
  { name: 'Git/GitHub', icon: FaGitAlt, level: 5, color: 'text-red-500' },
    { name: 'API', icon: FaServer, level: 5, color: 'text-green-400' },

];

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, staggerChildren: 0.1 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-black relative z-10">
      <motion.h2
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-[#CBF3F0] mb-12 text-center drop-shadow-lg"
      >
        My Skills
        <div className="mt-3 w-40 h-[3px] bg-gradient-to-r from-[#00796B] to-[#CBF3F0] mx-auto rounded-full animate-pulse"></div>
 
      </motion.h2>

      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {skillsList.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: index % 2 === 0 ? 2 : -2, 
                boxShadow: '0 0 15px #CBF3F0' 
              }}
              className="p-4 bg-[#111111] border-2 border-[#CBF3F0]/50 rounded-xl shadow-lg shadow-[#39FF14]/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <Icon className={`text-4xl mb-3 ${skill.color} shadow-neon-sm`} />
                <h4 className="text-md font-bold text-[#CBF3F0] mb-1">{skill.name}</h4>
                
                {/* Skill Level */}
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${i < skill.level ? 'text-neon-green' : 'text-gray-700'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
