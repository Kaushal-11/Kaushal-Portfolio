// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import Button from '../Common/Button';
// import { FiDownload, FiMail, FiMapPin, FiMessageSquare } from 'react-icons/fi';

// const AboutMe = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut',
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.215, 0.61, 0.355, 1],
//       },
//     },
//   };

//   return (
//     <section id="about" className="section-padding relative overflow-hidden">
//       {/* Background elements similar to HeroSection */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 z-0"></div>
      
//       {/* Floating geometric shapes */}
//         <motion.div 
//           className="absolute top-32 left-16 w-24 h-24 bg-gradient-to-br from-secondary-400/20 to-purple-400/20 rounded-2xl rotate-12"
//           animate={{ 
//             rotate: [12, 45, 12],
//             scale: [1, 1.05, 1],
//           }}
//           transition={{ 
//             duration: 6, 
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div 
//           className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full"
//           animate={{ 
//             y: [-8, 8, -8],
//             x: [-4, 4, -4],
//           }}
//           transition={{ 
//             duration: 5, 
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />

//       {/* Decorative circles */}
//       <motion.div 
//         className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-300/10 dark:bg-primary-600/10 filter blur-3xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       />
//       <motion.div 
//         className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-secondary-300/10 dark:bg-secondary-600/10 filter blur-3xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5, delay: 0.3 }}
//       />
      
//       <div className="container-custom relative z-10">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={controls}
//           variants={containerVariants}
//           className="max-w-5xl mx-auto"
//         >
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold mb-4">
//               About <span className="heading-gradient">Me</span>
//             </h2>
//             <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
//               Get to know me better - my background, education, and what drives my passion for AI.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
//             {/* Left Column - Education & Details */}
//             <motion.div variants={itemVariants} className="md:col-span-5 space-y-6">
//               {/* Personal Details Card with glowing border */}
//               <motion.div 
//                 variants={cardVariants}
//                 whileHover={{ y: 1 }} // Subtle hover effect
//                 className="card p-7 bg-white/60 dark:bg-dark-200/60 backdrop-blur-sm rounded-xl border border-primary-200 dark:border-primary-700/50 shadow-lg"
//                 style={{
//                   boxShadow: "0 0 15px 2px rgba(56, 189, 248, 0.2), 0 4px 6px -1px rgba(0, 0, 0, 0.1)" // Glowing border effect
//                 }}
//               >
//                 <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200 flex items-center">
//                   <span className="text-primary-500 mr-2">👨‍💻</span>
//                   Personal Details
//                 </h3>
//                 <ul className="space-y-4">
//                   <motion.li 
//                     className="flex items-start p-3 bg-white/80 dark:bg-dark-100/80 rounded-lg"
//                     whileHover={{ x: 3 }} // Subtle hover movement
//                   >
//                     <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm shadow-primary-500/20">
//                       <FiMail className="text-primary-500" size={16} />
//                     </div>
//                     <div>
//                       <div className="font-medium text-gray-700 dark:text-gray-300">Email</div>
//                       <div className="text-gray-600 dark:text-gray-400">kaushalbhanderi34@gmail.com</div>
//                     </div>
//                   </motion.li>
                  
//                   <motion.li 
//                     className="flex items-start p-3 bg-white/80 dark:bg-dark-100/80 rounded-lg"
//                     whileHover={{ x: 3 }} // Subtle hover movement
//                   >
//                     <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm shadow-primary-500/20">
//                       <FiMapPin className="text-primary-500" size={16} />
//                     </div>
//                     <div>
//                       <div className="font-medium text-gray-700 dark:text-gray-300">Location</div>
//                       <div className="text-gray-600 dark:text-gray-400">Surat, Gujarat, India</div>
//                     </div>
//                   </motion.li>
                  
//                   <motion.li 
//                     className="flex items-start p-3 bg-white/80 dark:bg-dark-100/80 rounded-lg"
//                     whileHover={{ x: 3 }} // Subtle hover movement
//                   >
//                     <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm shadow-primary-500/20">
//                       <FiMessageSquare className="text-primary-500" size={16} />
//                     </div>
//                     <div>
//                       <div className="font-medium text-gray-700 dark:text-gray-300">Languages</div>
//                       <div className="text-gray-600 dark:text-gray-400">English, Hindi, Gujarati, German</div>
//                     </div>
//                   </motion.li>
//                 </ul>
//               </motion.div>

//               {/* Education Card with glowing border */}
//               <motion.div 
//                 variants={cardVariants}
//                 whileHover={{ y: 1 }} // Subtle hover effect
//                 className="card p-7 bg-white/60 dark:bg-dark-200/60 backdrop-blur-sm rounded-xl border border-primary-200 dark:border-primary-700/50 shadow-lg"
//                 style={{
//                   boxShadow: "0 0 15px 2px rgba(56, 189, 248, 0.2), 0 4px 6px -1px rgba(0, 0, 0, 0.1)" // Glowing border effect
//                 }}
//               >
//                 <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200 flex items-center">
//                   <span className="text-primary-500 mr-2">🎓</span>
//                   Education
//                 </h3>
                
//                 <div className="relative mb-8 pl-6 border-l-2 border-primary-500/70">
//                   <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-0 shadow-md shadow-primary-500/30"></div>
//                   <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">B.Tech in Computer Engineering</h4>
//                   <p className="text-gray-700 dark:text-gray-300">CHARUSAT University, Changa, Gujarat</p>
//                   <div className="flex justify-between text-sm mt-1">
//                     <p className="text-gray-600 dark:text-gray-400">2022 - 2026</p>
//                     <p className="font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 px-2 py-0.5 rounded shadow-sm">CGPA: 9.7/10</p>
//                   </div>
//                 </div>
                
//                 <div className="relative mb-8 pl-6 border-l-2 border-primary-500/70">
//                   <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-0 shadow-md shadow-primary-500/30"></div>
//                   <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">Higher Secondary Education</h4>
//                   <p className="text-gray-700 dark:text-gray-300">Gujarat Higher Secondary Education Board</p>
//                   <div className="flex justify-between text-sm mt-1">
//                     <p className="text-gray-600 dark:text-gray-400">2020 - 2022</p>
//                     <p className="font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 px-2 py-0.5 rounded shadow-sm">Percentage: 84%</p>
//                   </div>
//                 </div>

//                 <div className="relative pl-6 border-l-2 border-primary-500/70">
//                   <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-0 shadow-md shadow-primary-500/30"></div>
//                   <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">Secondary Education</h4>
//                   <p className="text-gray-700 dark:text-gray-300">Gujarat Secondary Education Board</p>
//                   <div className="flex justify-between text-sm mt-1">
//                     <p className="text-gray-600 dark:text-gray-400">2028 - 2020</p>
//                     <p className="font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 px-2 py-0.5 rounded shadow-sm">Percentage: 92%</p>
//                   </div>
//                 </div>

//               </motion.div>
              
//               {/* Resume Button */}
//               <motion.div
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.01 }} // Subtle scale on hover
//                 whileTap={{ scale: 0.99 }} // Subtle scale on tap
//                 className="mt-4"
//               >
//                 <Button 
//                   href="/resume.pdf" 
//                   className="w-full flex items-center justify-center py-3 text-base rounded-xl shadow-lg shadow-primary-500/20 border border-primary-400/20" 
//                   variant="primary"
//                 >
//                   <motion.div
//                     animate={{ x: [0, 3, 0] }} // Subtle animation
//                     transition={{ duration: 2, repeat: Infinity }}
//                   >
//                     <FiDownload className="mr-2" />
//                   </motion.div> 
//                   Download Resume
//                 </Button>
//               </motion.div>
//             </motion.div>
            
//             {/* Right Column - About Text */}
//             <motion.div variants={itemVariants} className="md:col-span-7">
//               <motion.div 
//                 variants={cardVariants}
//                 whileHover={{ y: 1 }} // Subtle hover effect
//                 className="card p-8 bg-white/60 dark:bg-dark-200/60 backdrop-blur-sm rounded-xl border border-primary-200 dark:border-primary-700/50 shadow-lg relative overflow-hidden h-full"
//                 style={{
//                   boxShadow: "0 0 15px 2px rgba(56, 189, 248, 0.2), 0 4px 6px -1px rgba(0, 0, 0, 0.1)" // Glowing border effect
//                 }}
//               >
//                 {/* Decorative elements - similar to HeroSection neural network style */}
//                 <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full translate-x-1/4 -translate-y-1/4"></div>
//                 <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-500/5 rounded-full -translate-x-1/4 translate-y-1/4"></div>
                
//                 {/* Neural network-like decorative lines */}
//                 <svg className="absolute inset-0 w-full h-full z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
//                   <defs>
//                     <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#4338ca" />
//                       <stop offset="100%" stopColor="#0ea5e9" />
//                     </linearGradient>
//                   </defs>
//                   <line x1="30%" y1="20%" x2="70%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
//                   <line x1="20%" y1="40%" x2="60%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
//                   <line x1="80%" y1="30%" x2="40%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
//                   <line x1="10%" y1="50%" x2="50%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1" />
//                   <line x1="90%" y1="10%" x2="30%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
//                 </svg>
                
//                 {/* Neural network nodes */}
//                 {[...Array(5)].map((_, index) => (
//                   <motion.div
//                     key={`node-${index}`}
//                     className="absolute w-2 h-2 bg-primary-500 rounded-full z-0"
//                     style={{
//                       top: `${20 + index * 20}%`,
//                       left: `${20 + (index % 3) * 30}%`,
//                     }}
//                     animate={{
//                       scale: [1, 1.5, 1],
//                       opacity: [0.5, 0.8, 0.5],
//                     }}
//                     transition={{
//                       duration: 2 + index,
//                       repeat: Infinity,
//                       repeatType: "reverse",
//                     }}
//                   />
//                 ))}
                
//                 <div className="relative z-10">
//                   <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200 flex items-center">
//                     <span className="text-primary-500 mr-2">✨</span>
//                     My Journey
//                   </h3>
                  
//                   <div className="space-y-4 text-gray-600 dark:text-gray-400">                  
//                     <p className="leading-relaxed">
//                       My journey in technology began when I was introduced to programming during my first year of college. What started as curiosity quickly evolved into passion when I discovered the world of AI and Machine Learning. I was fascinated by how algorithms could learn from data and make intelligent decisions.
//                     </p>
                    
//                     <p className="leading-relaxed">
//                       Throughout my academic journey, I've focused on building strong foundations in various domains of AI including:
//                     </p>
                    
//                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
//                       {[
//                         { name: "Machine Learning", icon: "/images/AboutMe/ml.png" },
//                         { name: "Deep Learning", icon: "/images/AboutMe/dl.png" },
//                         { name: "Natural Language Processing", icon: "/images/AboutMe/nlp.png" },
//                         { name: "Computer Vision", icon: "/images/AboutMe/vision.png" },
//                         { name: "Large Language Model", icon: "/images/AboutMe/llm.png" },
//                         { name: "Agentic AI", icon: "/images/AboutMe/agent.png" }
//                       ].map((skill, index) => (
//                         <motion.li 
//                           key={skill.name}
//                           className="flex items-center p-3 bg-white/90 dark:bg-dark-100/90 rounded-lg shadow-md shadow-primary-500/5 border border-primary-100/50 dark:border-primary-900/30"
//                           whileHover={{ 
//                             scale: 1.02, 
//                             backgroundColor: "rgba(56, 189, 248, 0.05)" 
//                           }} // Subtle hover effect
//                         >
//                           <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3 shadow-sm">
//                             <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
//                           </div>
//                           <span className="font-medium text-gray-700 dark:text-gray-300">
//                             {skill.name}
//                           </span>
//                         </motion.li>
//                       ))}
//                     </ul>
                    
//                     <p className="leading-relaxed">
//                       I'm always eager to learn and explore new technologies. Currently, I'm deepening my knowledge in transformer models and exploring how they can be applied to solve complex problems in healthcare and education domains.
//                     </p>
                    
//                     <motion.div 
//                       className="p-4 border border-primary-100/80 dark:border-primary-900/30 rounded-lg bg-gradient-to-r from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 mt-6 shadow-md shadow-primary-500/5"
//                       whileHover={{ scale: 1.01 }} // Subtle hover effect
//                     >
//                       <p className="italic text-gray-700 dark:text-gray-300">
//                         "I believe in the power of AI to transform industries and improve human experiences. My goal is to contribute to this revolution by developing innovative, ethical, and accessible AI solutions."
//                       </p>
//                     </motion.div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../Common/Button';
import { FiDownload, FiMail, FiMapPin, FiMessageSquare } from 'react-icons/fi';

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements similar to HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 z-0"></div>
      
      {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-32 left-16 w-24 h-24 bg-gradient-to-br from-secondary-400/20 to-purple-400/20 rounded-2xl rotate-12"
          animate={{ 
            rotate: [12, 45, 12],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-24 right-16 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full"
          animate={{ 
            y: [-8, 8, -8],
            x: [-4, 4, -4],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

      {/* Decorative circles */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-300/10 dark:bg-primary-600/10 filter blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-secondary-300/10 dark:bg-secondary-600/10 filter blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              About <span className="heading-gradient">Me</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Get to know me better - my background, education, and what drives my passion for AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column - Education & Details */}
            <motion.div variants={itemVariants} className="md:col-span-5 space-y-6">
              {/* Personal Details Card */}
              <motion.div 
                variants={cardVariants}
                className="card p-7 bg-white dark:bg-dark-200 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200 flex items-center">
                  <span className="text-primary-500 mr-2">👨‍💻</span>
                  Personal Details
                </h3>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start p-3 bg-gray-50 dark:bg-dark-100 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-dark-50 cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                      <FiMail className="text-primary-500" size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300">Email</div>
                      <div className="text-gray-600 dark:text-gray-400">kaushalbhanderi34@gmail.com</div>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start p-3 bg-gray-50 dark:bg-dark-100 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-dark-50 cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                      <FiMapPin className="text-primary-500" size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300">Location</div>
                      <div className="text-gray-600 dark:text-gray-400">Surat, Gujarat, India</div>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start p-3 bg-gray-50 dark:bg-dark-100 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-dark-50 cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                      <FiMessageSquare className="text-primary-500" size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-700 dark:text-gray-300">Languages</div>
                      <div className="text-gray-600 dark:text-gray-400">English, Hindi, Gujarati, German</div>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>

              {/* Education Card */}
              <motion.div 
                variants={cardVariants}
                className="card p-7 bg-white dark:bg-dark-200 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200 flex items-center">
                  <span className="text-primary-500 mr-2">🎓</span>
                  Education
                </h3>
                
                <div className="relative mb-8 pl-6 border-l-2 border-primary-500/70">
                  <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-0 shadow-md"></div>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">B.Tech in Computer Engineering</h4>
                  <p className="text-gray-700 dark:text-gray-300">CHARUSAT University, Changa, Gujarat</p>
                  <div className="flex justify-between text-sm mt-1">
                    <p className="text-gray-600 dark:text-gray-400">2022 - 2026</p>
                    <p className="font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 px-2 py-0.5 rounded">CGPA: 9.7/10</p>
                  </div>
                </div>
                
                <div className="relative mb-8 pl-6 border-l-2 border-primary-500/70">
                  <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-0 shadow-md"></div>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">Higher Secondary Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">Gujarat Higher Secondary Education Board</p>
                  <div className="flex justify-between text-sm mt-1">
                    <p className="text-gray-600 dark:text-gray-400">2020 - 2022</p>
                    <p className="font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 px-2 py-0.5 rounded">Percentage: 84%</p>
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-primary-500/70">
                  <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-0 shadow-md"></div>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400">Secondary Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">Gujarat Secondary Education Board</p>
                  <div className="flex justify-between text-sm mt-1">
                    <p className="text-gray-600 dark:text-gray-400">2028 - 2020</p>
                    <p className="font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 px-2 py-0.5 rounded">Percentage: 92%</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Resume Button */}
              <motion.div
                variants={itemVariants}
                className="mt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    href="/resume.pdf" 
                    className="w-full flex items-center justify-center py-3 text-base rounded-xl shadow-lg border border-primary-400/20" 
                    variant="primary"
                  >
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FiDownload className="mr-2" />
                    </motion.div> 
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - About Text */}
            <motion.div variants={itemVariants} className="md:col-span-7">
              <motion.div 
                variants={cardVariants}
                className="card p-8 bg-white dark:bg-dark-200 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg relative overflow-hidden h-full"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-500/5 rounded-full -translate-x-1/4 translate-y-1/4"></div>
                
                {/* Neural network-like decorative lines */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4338ca" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                  <line x1="30%" y1="20%" x2="70%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
                  <line x1="20%" y1="40%" x2="60%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
                  <line x1="80%" y1="30%" x2="40%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
                  <line x1="10%" y1="50%" x2="50%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1" />
                  <line x1="90%" y1="10%" x2="30%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
                </svg>
                
                {/* Neural network nodes */}
                {[...Array(5)].map((_, index) => (
                  <motion.div
                    key={`node-${index}`}
                    className="absolute w-2 h-2 bg-primary-500 rounded-full z-0"
                    style={{
                      top: `${20 + index * 20}%`,
                      left: `${20 + (index % 3) * 30}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2 + index,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                ))}
                
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-5 text-gray-800 dark:text-gray-200 flex items-center">
                    <span className="text-primary-500 mr-2">✨</span>
                    My Journey
                  </h3>
                  
                  <div className="space-y-4 text-gray-600 dark:text-gray-400">                  
                    <p className="leading-relaxed">
                      My journey in technology began when I was introduced to programming during my first year of college. What started as curiosity quickly evolved into passion when I discovered the world of AI and Machine Learning. I was fascinated by how algorithms could learn from data and make intelligent decisions.
                    </p>
                    
                    <p className="leading-relaxed">
                      Throughout my academic journey, I've focused on building strong foundations in various domains of AI including:
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                      {[
                        { name: "Machine Learning", icon: "/images/AboutMe/ml.png" },
                        { name: "Deep Learning", icon: "/images/AboutMe/dl.png" },
                        { name: "Natural Language Processing", icon: "/images/AboutMe/nlp.png" },
                        { name: "Computer Vision", icon: "/images/AboutMe/vision.png" },
                        { name: "Large Language Model", icon: "/images/AboutMe/llm.png" },
                        { name: "Agentic AI", icon: "/images/AboutMe/agent.png" }
                      ].map((skill, index) => (
                        <motion.li 
                          key={skill.name}
                          className="flex items-center p-3 bg-gray-50 dark:bg-dark-100 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-dark-50 cursor-pointer"
                          whileHover={{ 
                            scale: 1.02,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                            <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <p className="leading-relaxed">
                      I'm always eager to learn and explore new technologies. Currently, I'm deepening my knowledge in transformer models and exploring how they can be applied to solve complex problems in healthcare and education domains.
                    </p>
                    
                    <div className="p-4 border border-primary-100 dark:border-primary-900/30 rounded-lg bg-primary-50 dark:bg-primary-900/20 mt-6">
                      <p className="italic text-gray-700 dark:text-gray-300">
                        "I believe in the power of AI to transform industries and improve human experiences. My goal is to contribute to this revolution by developing innovative, ethical, and accessible AI solutions."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;