import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { experiencesData } from '../../data/experience';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaEye, FaTimes } from 'react-icons/fa';

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  // Track which card is expanded (can only have one at a time)
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

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

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background elements */}
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
          className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full"
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
        className="absolute top-40 right-20 w-80 h-80 rounded-full bg-primary-300/10 dark:bg-primary-600/10 filter blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-secondary-300/10 dark:bg-secondary-600/10 filter blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* Neural network nodes */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`node-${index}`}
          className="absolute w-2 h-2 bg-primary-500/40 rounded-full z-0 hidden md:block"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Work <span className="heading-gradient">Experience</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              My professional journey, internships and work experiences in the field of AI and Machine Learning.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="max-w-6xl mx-auto relative"
          >
            {/* Timeline Container */}
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-secondary-500 z-10"></div>
              
              {experiencesData.map((experience, index) => {
                const isLeft = index % 2 === 0;
                const isExpanded = expandedCard === experience.id;
                
                return (
                  <div 
                    className="relative mb-24 last:mb-12" 
                    key={experience.id}
                    style={{
                      marginBottom: isExpanded ? '320px' : '100px', // More space when expanded
                      transition: 'margin-bottom 0.4s ease'
                    }}
                  >
                    {/* Timeline Dot - Connect to Card */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-12 flex items-center justify-center z-20">
                      <div className="w-5 h-5 bg-white dark:bg-dark-100 rounded-full border-4 border-primary-500"></div>
                      
                      {/* Horizontal connectors to cards */}
                      <div className={`absolute h-0.5 ${isLeft ? 'right-0 w-12' : 'left-0 w-12'} bg-primary-500`}></div>
                    </div>
                    
                    {/* Card - Collapsed State - Now wider */}
                    <motion.div 
                      className={`w-6/12 ${isLeft ? 'mr-auto pr-3' : 'ml-auto pl-3'}`}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: isExpanded ? 0.2 : 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ pointerEvents: isExpanded ? 'none' : 'auto' }}
                    >
                      <motion.div 
                        className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                        style={{
                          transformStyle: "preserve-3d",
                          transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.15), 0 5px 10px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        whileHover={{
                          transform: isLeft
                            ? "perspective(1000px) rotateY(-1deg) rotateX(1deg)"
                            : "perspective(1000px) rotateY(1deg) rotateX(1deg)",
                          boxShadow: "0 15px 35px -15px rgba(0, 0, 0, 0.2), 0 10px 20px -5px rgba(0, 0, 0, 0.1)",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* View Details Button - Now positioned on the timeline-connecting edge */}
                        <motion.button
                          onClick={() => toggleExpand(experience.id)}
                          className={`absolute ${isLeft ? 'right-0' : 'left-0'} top-12 transform -translate-y-1/2 ${isLeft ? 'translate-x-1/2' : '-translate-x-1/2'} bg-primary-500 text-white rounded-full p-2 shadow-lg border-2 border-white dark:border-dark-100 z-10`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaEye />
                        </motion.button>
                        
                        {/* Gradient Corner */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-full"></div>
                        
                        {/* Company Logo and Basic Info */}
                        <div className="flex items-start">
                          <div className="w-14 h-14 bg-white dark:bg-dark-300 rounded-lg shadow-sm flex items-center justify-center p-2 mr-4 border border-gray-100 dark:border-gray-600">
                            <img
                              src={experience.logo}
                              alt={experience.company}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                              {experience.position}
                            </h3>
                            <div className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                              {experience.company}
                            </div>
                            
                            {/* Duration inside the card */}
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                              <FaCalendarAlt className="w-3 h-3 mr-1" />
                              {experience.duration}
                            </div>
                            
                            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                              <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Expanded Card - Overlays the timeline */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div 
                          className="absolute top-0 w-full z-30"
                          initial={{ 
                            opacity: 0,
                            width: "50%", // w-6/12
                            left: isLeft ? "0%" : "auto",
                            right: isLeft ? "auto" : "0%",
                            height: "auto"
                          }}
                          animate={{ 
                            opacity: 1,
                            width: "100%",
                            left: "0%",
                            right: "0%",
                            height: "auto"
                          }}
                          exit={{ 
                            opacity: 0,
                            width: "50%",
                            left: isLeft ? "0%" : "auto", 
                            right: isLeft ? "auto" : "0%",
                            height: "auto"
                          }}
                          transition={{
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                        >
                          <motion.div 
                            className="relative p-6 rounded-xl shadow-xl border border-primary-200 dark:border-primary-700/50 overflow-hidden"
                            style={{
                              background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)",
                              boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.2), 0 10px 20px -10px rgba(0, 0, 0, 0.1)",
                            }}
                            layout
                          >
                            {/* Decorative elements for expanded card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-white/0 to-secondary-500/5 dark:from-primary-500/10 dark:via-dark-100/0 dark:to-secondary-500/10 z-0"></div>
                            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-300/10 dark:bg-primary-600/10 filter blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary-300/10 dark:bg-secondary-600/10 filter blur-3xl"></div>
                            
                            {/* Glowing border effect */}
                            <div className="absolute inset-0 rounded-xl overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 dark:from-primary-500/20 dark:to-secondary-500/20 opacity-30 animate-pulse"></div>
                            </div>
                            
                            {/* Content Container - Above decorative elements */}
                            <div className="relative z-10">
                              {/* Close Button */}
                              <motion.button
                                onClick={() => toggleExpand(null)}
                                className="absolute right-4 top-4 bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-400 rounded-full p-2 z-10 hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <FaTimes />
                              </motion.button>
                              
                              {/* Header with logo and title */}
                              <div className="flex items-start mb-6">
                                <div className="w-16 h-16 bg-white dark:bg-dark-300 rounded-lg shadow-sm flex items-center justify-center p-2 mr-4 border border-gray-100 dark:border-gray-600">
                                  <img
                                    src={experience.logo}
                                    alt={experience.company}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                                    {experience.position}
                                  </h3>
                                  <div className="text-primary-600 dark:text-primary-400 font-medium">
                                    {experience.company}
                                  </div>
                                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400 text-sm space-x-4">
                                    <div className="flex items-center">
                                      <FaCalendarAlt className="w-3.5 h-3.5 mr-1.5" />
                                      {experience.duration}
                                    </div>
                                    <div className="flex items-center">
                                      <FaMapMarkerAlt className="w-3.5 h-3.5 mr-1.5" />
                                      {experience.location}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Main Content - 40% / 60% split as requested */}
                              <div className="flex flex-col md:flex-row gap-6">
                                {/* Left Column - Overview and technologies (40%) */}
                                <div className="md:w-2/5">
                                  <div className="bg-white/70 dark:bg-dark-200/70 rounded-lg p-5 backdrop-blur-sm shadow-md">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                      Overview
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                      {experience.description}
                                    </p>
                                    
                                    <div className="mt-4">
                                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                        Technologies
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech) => (
                                          <span
                                            key={tech}
                                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-colors"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Right Column - Key Responsibilities (60%) */}
                                <div className="md:w-3/5">
                                  <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 p-6 rounded-lg border border-primary-200 dark:border-primary-700/30 shadow-md h-full">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                      Key Responsibilities
                                    </h4>
                                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                                      {experience.responsibilities.map((item, idx) => (
                                        <li key={idx} className="flex items-start group">
                                          <span className="inline-block w-3 h-3 bg-primary-500 rounded-full mt-1.5 mr-3 group-hover:scale-125 transition-transform"></span>
                                          <span className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 p-8 rounded-2xl border border-primary-200 dark:border-primary-700/30 shadow-xl relative overflow-hidden backdrop-blur-sm">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-500/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <FaBriefcase className="w-12 h-12 text-primary-500/70 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Interested in working together?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <motion.a 
                  href="#contact" 
                  className="inline-block px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let's Connect
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;