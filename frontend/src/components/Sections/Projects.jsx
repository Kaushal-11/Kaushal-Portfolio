import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaEye } from 'react-icons/fa';
import projects from '../../data/projects';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('Featured');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // Extract unique categories from projects
  const allCategories = projects.reduce((categories, project) => {
    const techs = project.technologies || [];
    techs.forEach(tech => {
      if (!categories.includes(tech)) {
        categories.push(tech);
      }
    });
    return categories;
  }, []);
  
  // Create filters array with 'Featured' first, then top technology categories
  const filters = ['Featured', ...allCategories.slice(0, 5)];

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'Featured') {
      setFilteredProjects(
        projects.filter(project => project.featured === true)
      );
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.technologies && project.technologies.includes(activeFilter)
        )
      );
    }
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Different card styles for variety
  const getCardStyle = (index) => {
    const styles = [
      'card-style-1', // Standard card
      'card-style-2', // Tilted card
      'card-style-3', // Glass morphism
      'card-style-4', // Gradient border
    ];
    return styles[index % styles.length];
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-purple-500/5 dark:from-primary-500/10 dark:via-secondary-500/10 dark:to-purple-500/10 z-0"></div>
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-3xl rotate-45"
        animate={{ 
          rotate: [45, 135, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full"
        animate={{ 
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent transform -skew-y-12"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="heading-gradient">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Discover innovative solutions crafted with cutting-edge technologies
            </p>
          </motion.div>

          {/* Enhanced Project Filters */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-sm border overflow-hidden group
                  ${activeFilter === filter 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg border-transparent' 
                    : 'bg-white/60 dark:bg-dark-100/60 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700/50 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-600'}`}
                whileHover={{ 
                  y: -2, 
                  scale: 1.02,
                }}
                whileTap={{ y: 0, scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Animated background for active state */}
                {activeFilter === filter && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl"
                    layoutId="activeFilter"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  whileHover={{ 
                    y: -12, 
                    rotateY: 5,
                    scale: 1.02,
                    transition: { 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                  className={`project-card ${getCardStyle(index)} relative group cursor-pointer`}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Card Container with unique styling based on index */}
                  <div className={`
                    relative overflow-hidden rounded-2xl shadow-xl border transition-all duration-500 group-hover:shadow-2xl
                    ${index % 4 === 0 ? 'bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-dark-100/90 dark:to-dark-200/90 border-gradient-to-r border-primary-200 dark:border-primary-700/50' :
                      index % 4 === 1 ? 'bg-white/70 dark:bg-dark-100/70 backdrop-blur-md border-2 border-white/20 dark:border-gray-700/20' :
                      index % 4 === 2 ? 'bg-gradient-to-br from-primary-50/80 to-secondary-50/80 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200/50 dark:border-primary-700/30' :
                      'bg-white/80 dark:bg-dark-100/80 backdrop-blur-sm border-2 border-transparent bg-clip-padding'
                    }
                  `}>
                    
                    {/* Unique decorative elements per card type */}
                    {index % 4 === 1 && (
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-bl-3xl"></div>
                    )}
                    {index % 4 === 2 && (
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl"></div>
                    )}
                    {index % 4 === 3 && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5 rounded-2xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white dark:bg-dark-100 rounded-2xl h-full w-full"></div>
                        </div>
                      </>
                    )}

                    {/* Image Section with Enhanced Effects */}
                    <div className="relative overflow-hidden h-48 md:h-56">
                      <motion.img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                      
                      {/* Enhanced overlay with gradient mesh */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-transparent to-secondary-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Action buttons with stagger animation */}
                      <div className="absolute bottom-4 right-4 flex gap-3">
                        {project.githubLink && (
                          <motion.a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/40 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/60 transition-all shadow-lg"
                            aria-label="GitHub Repository"
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ delay: 0.1 }}
                          >
                            <FaGithub className="text-lg" />
                          </motion.a>
                        )}
                        {project.demoLink && (
                          <motion.a 
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-3 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all shadow-lg"
                            aria-label="Live Demo"
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ scale: 1.15, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ delay: 0.2 }}
                          >
                            <FaExternalLinkAlt className="text-lg" />
                          </motion.a>
                        )}
                      </div>
                      
                      {/* Enhanced featured badge */}
                      {project.featured && (
                        <motion.div 
                          className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs uppercase tracking-wider py-2 px-4 rounded-full font-bold shadow-lg flex items-center gap-2"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                        >
                          <FaStar className="text-xs" />
                          Featured
                        </motion.div>
                      )}


                    </div>
                    
                    {/* Content Section with Enhanced Typography */}
                    <div className="p-6 relative z-10">
                      <motion.h3 
                        className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Enhanced technology tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer
                              ${tech === activeFilter 
                                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md' 
                                : 'bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400'
                              }`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter(tech)}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700/60 dark:to-gray-600/60 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-secondary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Enhanced empty state */}
          {filteredProjects.length === 0 && activeFilter !== 'Featured' && (
            <motion.div
              variants={itemVariants}
              className="text-center py-16 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-dark-200/80 dark:to-dark-100/80 backdrop-blur-lg rounded-3xl border border-primary-200 dark:border-primary-700/50 shadow-xl mx-auto max-w-2xl p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5"></div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaCode className="w-16 h-16 text-primary-500/70 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  No Projects Found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                  No projects found with <span className="font-semibold text-primary-600 dark:text-primary-400">{activeFilter}</span> technology.
                </p>
                <p className="text-gray-500 dark:text-gray-500 mb-6">
                  Try selecting a different technology filter
                </p>
                <motion.button
                  onClick={() => setActiveFilter('Featured')}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-medium hover:from-primary-600 hover:to-secondary-600 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Featured Projects
                </motion.button>
              </div>
            </motion.div>
          )}
          
          {/* Enhanced CTA section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-xl"></div>
              <motion.a 
                href="https://github.com/kaushalmehra" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-10 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all backdrop-blur-sm border border-white/20"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-xl" />
                <span>Explore All Projects</span>
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional CSS for card styles */}
      <style jsx>{`
        .card-style-1 {
          transform-style: preserve-3d;
        }
        .card-style-2 {
          transform: perspective(1000px) rotateX(5deg);
        }
        .card-style-3 {
          backdrop-filter: blur(20px);
        }
        .card-style-4 {
          position: relative;
        }
      `}</style>
    </section>
  );
}

export default Projects;