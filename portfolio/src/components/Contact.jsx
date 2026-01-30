// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Tilt from 'react-parallax-tilt';
// import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// const socialLinks = [
//   { icon: FaEnvelope, href: 'kasyapgnath97@gmail.com', label: 'Email', value: 'kasyapgnath97@gmail.com' },
//   { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kasyap-g-nath-08a54631b/', label: 'LinkedIn', value: 'Connect on LinkedIn' },
//   { icon: FaGithub, href: 'https://github.com/kasyapgnath', label: 'GitHub', value: 'Follow My Work' },
//   { icon: FaMapMarkerAlt, href: 'https://maps.app.goo.gl/UtiPdj4ogcrGAVmLA', label: 'Location', value: 'Adoor, kerala' },
// ];

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate submission
//     setFormSubmitted(true);
//     setTimeout(() => {
//       setFormSubmitted(false);
//       setFormData({ name: '', email: '', message: '' });
//     }, 3000);
//   };

//   return (
//     <section id="contact" className="relative pt-20  w-full bg-black overflow-hidden">
//       {/* Background Neon Shapes */}
//       <motion.div
//         className="absolute top-[-50px] left-1/4 w-72 h-72 bg-[#CBF3F0] rounded-full filter blur-3xl opacity-30 animate-pulse-slow"
//         initial={{ scale: 0.8 }}
//         animate={{ scale: 1.2 }}
//         transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
//       />
//       <motion.div
//         className="absolute bottom-[-50px] right-1/4 w-64 h-64 bg-[#00796B] rounded-full filter blur-2xl opacity-20 animate-pulse-slow"
//         initial={{ scale: 1 }}
//         animate={{ scale: 1.3 }}
//         transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
//       />

//       {/* Section Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="text-5xl font-extrabold text-[#CBF3F0] mb-12 text-center drop-shadow-lg z-10 relative"
//       >
//         Contact Me
//          <div className="mt-3 w-40 h-[3px] bg-gradient-to-r from-[#00796B] to-[#CBF3F0] mx-auto rounded-full animate-pulse"></div>
 
//       </motion.h2>

//       <div className="flex flex-col lg:flex-row gap-12 justify-center items-start w-full max-w-[1200px] mx-auto relative z-10">
//         {/* Contact Form */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInLeft}
//           className="w-full lg:w-1/2 p-6 bg-[#00796B]/5 rounded-xl border border-[#CBF3F0]/30 shadow-lg"
//         >
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* Name */}
//             <div className="relative group">
//               <input
//                 type="text"
//                 id="name"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder=" "
//                 className="peer w-full p-3 pt-5 border border-[#CBF3F0] rounded-lg focus:ring-2 focus:ring-[#CBF3F0] focus:border-[#CBF3F0] outline-none text-white bg-black"
//               />
//               <label
//                 htmlFor="name"
//                 className="absolute left-3 top-3 text-[#CBF3F0] text-sm transition-all duration-300 transform -translate-y-0 scale-100
//                 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-1 peer-focus:text-[#CBF3F0]"
//               >
//                 Name
//               </label>
//             </div>

//             {/* Email */}
//             <div className="relative group">
//               <input
//                 type="email"
//                 id="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder=" "
//                 className="peer w-full p-3 pt-5 border border-[#CBF3F0] rounded-lg focus:ring-2 focus:ring-[#CBF3F0] focus:border-[#CBF3F0] outline-none text-white bg-black"
//               />
//               <label
//                 htmlFor="email"
//                 className="absolute left-3 top-3 text-[#CBF3F0] text-sm transition-all duration-300 transform -translate-y-0 scale-100
//                 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-1 peer-focus:text-[#CBF3F0]"
//               >
//                 Email
//               </label>
//             </div>

//             {/* Message */}
//             <div className="relative group">
//               <textarea
//                 id="message"
//                 rows={3}
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder=" "
//                 className="peer w-full p-3 pt-5 border border-[#CBF3F0] rounded-lg focus:ring-2 focus:ring-[#CBF3F0] focus:border-[#CBF3F0] outline-none text-white bg-black"
//               />
//               <label
//                 htmlFor="message"
//                 className="absolute left-3 top-3 text-[#CBF3F0] text-sm transition-all duration-300 transform -translate-y-0 scale-100
//                 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-1 peer-focus:text-[#CBF3F0]"
//               >
//                 Message
//               </label>
//             </div>

//             {/* Submit Button */}
//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05, boxShadow: '0 0 15px #CBF3F0' }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full px-5 py-2.5 bg-gradient-to-r from-[#CBF3F0] to-[#00796B] text-black font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
//             >
//               Send Message
//             </motion.button>

//             {/* Success Message */}
//             {formSubmitted && (
//               <motion.div
//                 initial={{ opacity: 0, y: -15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -15 }}
//                 className="mt-3 p-2.5 bg-[#CBF3F0] text-black rounded-lg text-center font-semibold shadow-md"
//               >
//                 Message Sent Successfully!
//               </motion.div>
//             )}
//           </form>
//         </motion.div>

//         {/* Social Cards */}
//         <div className="lg:w-1/3 flex flex-col space-y-5">
//           {socialLinks.map((link, index) => {
//             const Icon = link.icon;
//             return (
//               <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.1}>
//                 <motion.a
//                   href={link.href}
//                   target={link.href.startsWith('http') ? '_blank' : '_self'}
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   whileHover={{ scale: 1.05, boxShadow: '0 0 15px #CBF3F0' }}
//                   className="flex items-start p-4 bg-black rounded-xl border border-[#CBF3F0]/30 shadow-md transition-all duration-300 hover:bg-[#00796B]/10"
//                 >
//                   <Icon className="text-3xl text-[#CBF3F0] mr-3 mt-1 flex-shrink-0" />
//                   <div>
//                     <h4 className="text-lg font-semibold text-[#CBF3F0]">{link.label}</h4>
//                     <p className="text-gray-400 text-sm">{link.value}</p>
//                   </div>
//                 </motion.a>
//               </Tilt>
//             );
//           })}
//         </div>
//       </div>
//       <footer className="w-full mt-20 bg-black border-t border-[#CBF3F0]/30 py-3 relative overflow-hidden">
//   {/* Soft glowing background accents */}
//   <div className="absolute inset-0 bg-gradient-to-r from-[#00796B]/10 via-transparent to-[#CBF3F0]/10 opacity-40 blur-2xl"></div>

//   <div className="relative z-10 w-full mx-auto px-6 text-center">
//     <p className="text-sm text-[#CBF3F0] tracking-wide">
//       &copy; 2025 <span className="font-semibold text-[#CBF3F0]">Kasyap G Nath</span>. All rights reserved.
//     </p>

//     {/* Subtle animated glow line */}
//     <div className="mt-3 w-24 h-[2px] bg-gradient-to-r from-[#00796B] to-[#CBF3F0] mx-auto rounded-full animate-pulse"></div>
//   </div>
// </footer>

//     </section>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const socialLinks = [
  { icon: FaEnvelope, href: 'mailto:kasyapgnath97@gmail.com', label: 'Email', value: 'kasyapgnath97@gmail.com' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kasyap-g-nath-08a54631b/', label: 'LinkedIn', value: 'Connect on LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/kasyapgnath', label: 'GitHub', value: 'Follow My Work' },
  { icon: FaMapMarkerAlt, href: 'https://maps.app.goo.gl/UtiPdj4ogcrGAVmLA', label: 'Location', value: 'Adoor, Kerala' },
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative pt-20 w-full bg-black overflow-hidden">
      {/* Background Neon Shapes */}
      <motion.div
        className="absolute top-[-50px] left-1/4 w-72 h-72 bg-[#CBF3F0] rounded-full filter blur-3xl opacity-30 animate-pulse-slow"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute bottom-[-50px] right-1/4 w-64 h-64 bg-[#00796B] rounded-full filter blur-2xl opacity-20 animate-pulse-slow"
        initial={{ scale: 1 }}
        animate={{ scale: 1.3 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-[#CBF3F0] mb-12 text-center drop-shadow-lg z-10 relative"
      >
        Contact Me
        <div className="mt-3 w-40 h-[3px] bg-gradient-to-r from-[#00796B] to-[#CBF3F0] mx-auto rounded-full animate-pulse"></div>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 justify-center items-start w-full max-w-[1200px] mx-auto relative z-10">
        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="w-full lg:w-1/2 p-6 bg-[#00796B]/5 rounded-xl border border-[#CBF3F0]/30 shadow-lg"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative group">
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full p-3 pt-5 border border-[#CBF3F0] rounded-lg focus:ring-2 focus:ring-[#CBF3F0] focus:border-[#CBF3F0] outline-none text-white bg-black"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-3 text-[#CBF3F0] text-sm transition-all duration-300 transform -translate-y-0 scale-100
                peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-1 peer-focus:text-[#CBF3F0]"
              >
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative group">
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full p-3 pt-5 border border-[#CBF3F0] rounded-lg focus:ring-2 focus:ring-[#CBF3F0] focus:border-[#CBF3F0] outline-none text-white bg-black"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 text-[#CBF3F0] text-sm transition-all duration-300 transform -translate-y-0 scale-100
                peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-1 peer-focus:text-[#CBF3F0]"
              >
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                id="message"
                rows={3}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full p-3 pt-5 border border-[#CBF3F0] rounded-lg focus:ring-2 focus:ring-[#CBF3F0] focus:border-[#CBF3F0] outline-none text-white bg-black"
              />
              <label
                htmlFor="message"
                className="absolute left-3 top-3 text-[#CBF3F0] text-sm transition-all duration-300 transform -translate-y-0 scale-100
                peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-1 peer-focus:text-[#CBF3F0]"
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px #CBF3F0' }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-5 py-2.5 bg-gradient-to-r from-[#CBF3F0] to-[#00796B] text-black font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </motion.button>

            {/* Success Message */}
            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="mt-3 p-2.5 bg-[#CBF3F0] text-black rounded-lg text-center font-semibold shadow-md"
              >
                Message Sent Successfully!
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Social Cards */}
        <div
          className="
            lg:w-1/3 
            flex flex-col space-y-5 
            items-center md:items-start  /* ✅ center only on mobile */
            justify-center 
            w-full
          "
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Tilt
                key={index}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable
                glareMaxOpacity={0.1}
                className="w-full max-w-xs" /* ✅ ensures consistent card width on mobile */
              >
                <motion.a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px #CBF3F0' }}
                  className="flex items-center justify-start md:justify-start gap-3 p-4 bg-black rounded-xl border border-[#CBF3F0]/30 shadow-md transition-all duration-300 hover:bg-[#00796B]/10"
                >
                  <Icon className="text-3xl text-[#CBF3F0]" />
                  <div>
                    <h4 className="text-lg font-semibold text-[#CBF3F0]">{link.label}</h4>
                    <p className="text-gray-400 text-sm">{link.value}</p>
                  </div>
                </motion.a>
              </Tilt>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-20 bg-black border-t border-[#CBF3F0]/30 py-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00796B]/10 via-transparent to-[#CBF3F0]/10 opacity-40 blur-2xl"></div>
        <div className="relative z-10 w-full mx-auto px-6 text-center">
          <p className="text-sm text-[#CBF3F0] tracking-wide">
            &copy; 2025 <span className="font-semibold text-[#CBF3F0]">Kasyap G Nath</span>. All rights reserved.
          </p>
          <div className="mt-3 w-24 h-[2px] bg-gradient-to-r from-[#00796B] to-[#CBF3F0] mx-auto rounded-full animate-pulse"></div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
