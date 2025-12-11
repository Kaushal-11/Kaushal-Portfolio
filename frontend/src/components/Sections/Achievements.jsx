import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTrophy, 
  FaBook, 
  FaLaptopCode, 
  FaTimes, 
  FaExternalLinkAlt, 
  FaMedal, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaCertificate,
  FaStar,
  FaUsers,
  FaCode,
  FaGraduationCap,
  FaRunning
} from 'react-icons/fa';
import achievementsData from '../../data/achievements'; // Import your data

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const openModal = (category, item) => {
    setActiveCategory(category);
    setSelectedItem(item);
  };
  
  const closeModal = () => {
    setSelectedItem(null);
  };
  
  // Transform the data structure to match the component's expectations
  const transformedData = {
    publications: achievementsData.find(item => item.title === 'Publications')?.details.publications || [],
    hackathons: achievementsData.find(item => item.title === 'Hackathon')?.details.hackathons || [],
    extracurricular: achievementsData.find(item => item.title === 'Curriculum')?.details.activities || []
  };

  // Category config
  const categories = [
    { 
      id: 'publications', 
      title: 'Publications', 
      icon: FaBook,
      color: 'from-blue-500 to-indigo-600',
      data: transformedData.publications
    },
    { 
      id: 'hackathons', 
      title: 'Hackathons', 
      icon: FaLaptopCode,
      color: 'from-purple-500 to-pink-600',
      data: transformedData.hackathons
    },
    { 
      id: 'extracurricular', 
      title: 'Extracurricular', 
      icon: FaTrophy,
      color: 'from-emerald-500 to-teal-600',
      data: transformedData.extracurricular
    }
  ];
  
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 z-0"></div>
      
      {/* Decorative elements */}
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
      
      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Achievements & <span className="heading-gradient">Extracurricular</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Highlighting my academic publications, hackathon victories, and extracurricular contributions
            </p>
          </motion.div>
          
          {/* Hexagon Categories */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-16"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 } 
                  }}
                  className="relative group"
                >
                  {/* Hexagon Shape - Using clip-path */}
                  <button
                    onClick={() => openModal(category.id, null)}
                    className={`w-64 h-72 relative bg-gradient-to-br ${category.color} p-0.5 clip-path-hexagon shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="absolute inset-0.5 bg-white dark:bg-dark-100 clip-path-hexagon flex flex-col items-center justify-center p-6 transition-colors">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white text-3xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{category.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{category.data.length} items</p>
                      
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-dark-800/90 text-primary-600 dark:text-primary-400 text-sm font-medium shadow-sm">
                          View All
                        </span>
                      </div>
                    </div>
                  </button>
                  
                  {/* Glowing effect behind hexagon on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} filter blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 clip-path-hexagon -z-10`}></div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Category Items Modal */}
      <AnimatePresence>
        {activeCategory && !selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveCategory(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white dark:bg-dark-100 rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Find the active category */}
              {(() => {
                const category = categories.find(c => c.id === activeCategory);
                if (!category) return null;
                
                return (
                  <>
                    <div className={`p-6 bg-gradient-to-r ${category.color} flex items-center justify-between`}>
                      <div className="flex items-center">
                        <category.icon className="text-white text-2xl mr-3" />
                        <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      </div>
                      <button 
                        onClick={() => setActiveCategory(null)}
                        className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                      >
                        <FaTimes />
                      </button>
                    </div>
                    
                    <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
                      <div className="space-y-6">
                        {category.data.map((item, index) => (
                          <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.1 }}
                            className={`bg-gradient-to-br from-white to-gray-50 dark:from-dark-200 dark:to-dark-300 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700/50 hover:shadow-lg transition-all relative`}
                          >
                            {/* Decorative accent */}
                            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${category.color}`}></div>
                            
                            <div className="p-6 pl-8">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                                  {item.title || item.name || item.project}
                                </h4>
                                
                                <div className="flex flex-wrap items-center gap-3">
                                  {category.id === 'publications' && (
                                    <>
                                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium">
                                        <FaCalendarAlt className="mr-1 w-3 h-3" />
                                        {item.date || item.year}
                                      </span>
                                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium">
                                        {item.type}
                                      </span>
                                    </>
                                  )}
                                  
                                  {category.id === 'hackathons' && (
                                    <>
                                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs font-medium">
                                        <FaMedal className="mr-1 w-3 h-3" />
                                        {item.position}
                                      </span>
                                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium">
                                        <FaCalendarAlt className="mr-1 w-3 h-3" />
                                        {item.date}
                                      </span>
                                    </>
                                  )}
                                  
                                  {category.id === 'extracurricular' && (
                                    <>
                                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                                        <FaCalendarAlt className="mr-1 w-3 h-3" />
                                        {item.date || item.duration}
                                      </span>
                                      {item.type && (
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                                          {item.type}
                                        </span>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                              
                              {category.id === 'publications' && (
                                <div className="mb-4 text-gray-600 dark:text-gray-400 text-sm">
                                  <span className="font-medium text-gray-700 dark:text-gray-300">Conference:</span> {item.conference}
                                  <br />
                                  <span className="font-medium text-gray-700 dark:text-gray-300">Authors:</span> {Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}
                                </div>
                              )}
                              
                              {category.id === 'hackathons' && (
                                <div className="mb-4 text-gray-600 dark:text-gray-400 text-sm">
                                  <span className="font-medium text-gray-700 dark:text-gray-300">Event:</span> {item.name}
                                  <br />
                                  <span className="font-medium text-gray-700 dark:text-gray-300">Location:</span> {item.location}
                                  <br />
                                  {item.prize && (
                                    <span className="font-medium text-gray-700 dark:text-gray-300">Prize:</span> 
                                  )} {item.prize}
                                </div>
                              )}
                              
                              {category.id === 'extracurricular' && (
                                <div className="mb-4 text-gray-600 dark:text-gray-400 text-sm">
                                  {item.role && (
                                    <>
                                      <span className="font-medium text-gray-700 dark:text-gray-300">Role:</span> {item.role}
                                      <br />
                                    </>
                                  )}
                                  {item.event && (
                                    <>
                                      <span className="font-medium text-gray-700 dark:text-gray-300">Event:</span> {item.event}
                                      <br />
                                    </>
                                  )}
                                </div>
                              )}
                              
                              <div className="mb-4">
                                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                                  {item.description}
                                </p>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <motion.button
                                  onClick={() => setSelectedItem(item)}
                                  className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${category.color} hover:underline flex items-center`}
                                  whileHover={{ x: 3 }}
                                >
                                  View details <FaExternalLinkAlt className="ml-1 w-3 h-3" />
                                </motion.button>
                                
                                {item.link && (
                                  <motion.a 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r ${category.color} text-white text-xs font-medium`}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ y: 0 }}
                                  >
                                    Visit {category.id === 'publications' ? 'Publication' : 
                                           category.id === 'hackathons' ? 'Project' : 'Link'}
                                  </motion.a>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Individual Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white dark:bg-dark-100 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const category = categories.find(c => c.id === activeCategory);
                if (!category || !selectedItem) return null;
                
                return (
                  <>
                    <div className={`relative h-48 bg-gradient-to-r ${category.color} overflow-hidden`}>
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/4 -translate-y-1/2"></div>
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-x-1/4 translate-y-1/2"></div>
                      
                      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/50 to-transparent">
                        <div className="flex items-center mb-2">
                          <category.icon className="text-white text-xl mr-2" />
                          <h5 className="text-white/90 text-sm font-medium">
                            {category.title.slice(0, -1)}
                          </h5>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title || selectedItem.name || selectedItem.project}</h3>
                        
                        <div className="flex flex-wrap items-center text-white/80 text-sm space-x-4">
                          {(selectedItem.date || selectedItem.year || selectedItem.duration) && (
                            <div className="flex items-center">
                              <FaCalendarAlt className="mr-1.5 text-xs" />
                              {selectedItem.date || selectedItem.year || selectedItem.duration}
                            </div>
                          )}
                          
                          {selectedItem.location && (
                            <div className="flex items-center">
                              <FaMapMarkerAlt className="mr-1.5 text-xs" />
                              {selectedItem.location}
                            </div>
                          )}
                          
                          {selectedItem.conference && (
                            <div>
                              {selectedItem.conference}
                            </div>
                          )}
                          
                          {selectedItem.organizer && (
                            <div>
                              {selectedItem.organizer}
                            </div>
                          )}
                          
                          {selectedItem.position && (
                            <div className="flex items-center">
                              <FaMedal className="mr-1.5 text-amber-400 text-xs" />
                              {selectedItem.position}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <button 
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/30 rounded-full p-2 transition-colors"
                      >
                        <FaTimes />
                      </button>
                    </div>
                    
                    <div className="p-6 overflow-y-auto max-h-[calc(90vh-192px)]">
                      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-200 dark:to-dark-300 rounded-xl p-6 shadow-md">
                        {/* Publication specific content */}
                        {activeCategory === 'publications' && (
                          <>
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Authors
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                {Array.isArray(selectedItem.authors) ? selectedItem.authors.join(', ') : selectedItem.authors}
                              </p>
                            </div>
                            
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Conference Details
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                <span className="font-medium">Conference:</span> {selectedItem.conference}<br />
                                <span className="font-medium">Held by:</span> {selectedItem.heldBy}
                              </p>
                            </div>
                            
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Description
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                {selectedItem.description}
                              </p>
                            </div>
                            
                            {selectedItem.skills && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                  Skills/Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {selectedItem.skills.map((skill, index) => (
                                    <span key={index} className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                        
                        {/* Hackathon specific content */}
                        {activeCategory === 'hackathons' && (
                          <>
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Event Details
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                <span className="font-medium">Hackathon:</span> {selectedItem.name}<br />
                                <span className="font-medium">Organizer:</span> {selectedItem.organizer || 'Various'}<br />
                                <span className="font-medium">Location:</span> {selectedItem.location}
                              </p>
                            </div>
                            
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Project
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                {selectedItem.project}
                              </p>
                            </div>
                            
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Description
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                {selectedItem.description}
                              </p>
                            </div>
                            
                            {selectedItem.tech && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                  Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {selectedItem.tech.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                        
                        {/* Extracurricular specific content */}
                        {activeCategory === 'extracurricular' && (
                          <>
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Details
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                {selectedItem.type === 'Sports' ? (
                                  <>
                                    <span className="font-medium">Event:</span> {selectedItem.event}<br />
                                    <span className="font-medium">Date:</span> {selectedItem.date}
                                  </>
                                ) : (
                                  <>
                                    <span className="font-medium">Organization:</span> {selectedItem.name}<br />
                                    <span className="font-medium">Role:</span> {selectedItem.role}<br />
                                    <span className="font-medium">Duration:</span> {selectedItem.duration}
                                  </>
                                )}
                              </p>
                            </div>
                            
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                Description
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                {selectedItem.description}
                              </p>
                            </div>
                            
                            {selectedItem.achievements && (
                              <div className="mb-6">
                                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                  Achievements
                                </h4>
                                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                                  {Array.isArray(selectedItem.achievements) ? (
                                    selectedItem.achievements.map((achievement, index) => (
                                      <li key={index}>{achievement}</li>
                                    ))
                                  ) : (
                                    <li>{selectedItem.achievements}</li>
                                  )}
                                </ul>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Add CSS for hexagon clip path */}
      <style jsx global>{`
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </section>
  );
};

export default Achievements;

