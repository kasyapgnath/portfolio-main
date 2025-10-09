import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    institution: 'Arcite school of education',
    degree: 'webdevelopment trainee',
    year: '2025 - 2025',
    details: 'Specialized in python fullstack development.',
  },
  {
    institution: 'Baselios mathews 2nd college of engineering sasthamkotta',
    degree: 'computer science',
    year: '2021 - 2025',
    details: 'specialized in computer science.',
  },
  {
    institution: 'NSS HSS Choorakode',
    degree: 'plus two',
    year: '2019-2021',
    details: 'specialized in biology science.',
  },
  {
    institution: 'KRKPM BHS & VHSS',
    degree: 'Tenth',
    year: '2018-2019',
    details: 'studied tenth.',
  }
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 w-full bg-black relative">
      <motion.h2
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-[#CBF3F0] mb-12 text-center drop-shadow-lg"
      >
        Education
        <div className="mt-3 w-40 h-[3px] bg-gradient-to-r from-[#00796B] to-[#CBF3F0] mx-auto rounded-full animate-pulse"></div>
 
      </motion.h2>

      <div className="relative w-full flex flex-col items-center">
        {/* Full-height timeline line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-[#CBF3F0]/30 h-full"></div>

        <div className="w-full max-w-6xl flex flex-col space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex w-full ${index % 2 === 0 ? 'justify-start md:pl-0' : 'justify-end md:pr-0'}`}
            >
              <div className="relative w-full md:w-1/2">
                <div
                  className={`p-6 bg-[#111111] rounded-xl shadow-lg border border-[#CBF3F0]/30 transform hover:scale-[1.02] transition-transform duration-300 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  {/* Timeline Dot/Icon */}
                  <div
                    className={`absolute top-6 w-6 h-6 bg-[#CBF3F0] rounded-full flex items-center justify-center shadow-md z-10 ${
                      index % 2 === 0 ? 'md:-right-3 -right-3' : 'md:-left-3 -left-3'
                    }`}
                  >
                    <FaGraduationCap className="text-[#00796B] text-sm" />
                  </div>

                  <h3 className="text-xl font-bold text-[#CBF3F0]">{item.degree}</h3>
                  <p className="text-[#00796B] font-semibold my-1">{item.institution}</p>
                  <p className="text-gray-400 text-sm mb-3">{item.year}</p>
                  <p className="text-gray-500 text-sm">{item.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
