import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../../data/skills';
import { FaCode, FaServer, FaTools, FaLayerGroup } from 'react-icons/fa';
import React from 'react';

// Icon mapping for categories
const categoryIcons = {
  "frontend": FaCode,
  "backend": FaServer,
  "devops": FaTools,
  "other": FaLayerGroup
};

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);

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
        staggerChildren: 0.05,
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
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Get the active category data
  const activeCategoryData = skillsData.find(category => category.id === activeCategory);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background gradient similar to AboutMe and HeroSection */}
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
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-primary-300/10 dark:bg-primary-600/10 filter blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-secondary-300/10 dark:bg-secondary-600/10 filter blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* Neural network nodes - decorative */}
      {[...Array(8)].map((_, index) => (
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
              My <span className="heading-gradient">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A comprehensive overview of my technical expertise and proficiency across various technologies and domains.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {skillsData.map((category) => {
              const CategoryIcon = categoryIcons[category.id] || FaLayerGroup;
              const isActive = category.id === activeCategory;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30' 
                      : 'bg-white/60 dark:bg-dark-200/60 text-gray-700 dark:text-gray-300 hover:bg-primary-500/10 dark:hover:bg-primary-500/20'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <CategoryIcon className={`w-4 h-4 md:w-5 md:h-5 mr-2 ${isActive ? 'text-white' : 'text-primary-500'}`} />
                  {category.title}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Display Area */}
          <div className="mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/60 dark:bg-dark-200/60 backdrop-blur-sm rounded-2xl border border-primary-200 dark:border-primary-700/50 shadow-lg overflow-hidden"
                style={{
                  boxShadow: "0 0 15px 2px rgba(56, 189, 248, 0.2), 0 4px 6px -1px rgba(0, 0, 0, 0.1)" // Glowing border effect
                }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    {(() => {
                      const Icon = categoryIcons[activeCategoryData.id] || FaLayerGroup;
                      return <Icon className="w-10 h-10 text-primary-600 dark:text-primary-400 mr-4" />;
                    })()}
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {activeCategoryData.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {activeCategoryData.skills.map((skill) => (
                      <motion.div 
                        key={skill.name}
                        whileHover={{ y: -3 }}
                        className="bg-white dark:bg-dark-100 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700"
                      >
                        <div className="flex items-start">
                          <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4 shadow-md">
                            <img
                              src={`/images/skills/${skill.icon}.svg`}
                              alt={skill.name}
                              className="w-6 h-6"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                                {skill.name}
                              </h4>
                              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded">
                                {skill.level}%
                              </span>
                            </div>
                            
                            <div className="mb-3">
                              <div className="h-2 bg-gray-200 dark:bg-dark-300 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: 0.3 }}
                                />
                              </div>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {skill.description}
                            </p>
                            <div className="flex items-center mt-2">
                              <span className="inline-block h-2 w-2 rounded-full bg-primary-500 mr-2"></span>
                              <span className="text-xs text-gray-500 dark:text-gray-500">
                                {skill.yearsOfExperience} years experience
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;