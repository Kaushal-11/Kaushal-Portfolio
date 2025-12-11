import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import Button from '../Common/Button';

const HeroSection = () => {
  // Use state to control flip animation
  const [isFlipped, setIsFlipped] = useState(false);
  const flipTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    // Small delay before flipping back for a better experience
    flipTimeoutRef.current = setTimeout(() => {
      setIsFlipped(false);
    }, 300);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      } 
    },
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      } 
    },
  };

  // Tech icons data
  const techIcons = [
    { name: 'python', path: '/images/tech/python.svg' },
    { name: 'tensorflow', path: '/images/tech/tensorflow.svg' },
    { name: 'pytorch', path: '/images/tech/pytorch.svg' },
    { name: 'huggingface', path: '/images/tech/huggingface.svg' },
    { name: 'flask', path: '/images/tech/Flask.svg' },
    { name: 'qdrant', path: '/images/tech/qdrant.svg' },
    { name: 'langchain', path: '/images/tech/langchain.svg' },
    { name: 'mcp', path: '/images/tech/mcp.svg' },
    { name: 'docker', path: '/images/tech/Docker.svg' },
    { name: 'gemini', path: '/images/tech/gemini-ai.svg' },
  ];
  
  // Cleanup function for the timeout
  useEffect(() => {
    return () => {
      if (flipTimeoutRef.current) {
        clearTimeout(flipTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background elements from AboutMe.jsx */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 z-0"></div>
      
      {/* Floating geometric shapes */}
      <motion.div 
        className="absolute top-32 right-16 w-24 h-24 bg-gradient-to-br from-secondary-400/20 to-purple-400/20 rounded-2xl rotate-12"
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
        className="absolute bottom-8 right-16 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full"
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

      {/* Neural network decorative lines */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heroLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="url(#heroLineGradient)" strokeWidth="1" />
        <line x1="80%" y1="30%" x2="60%" y2="70%" stroke="url(#heroLineGradient)" strokeWidth="1" />
        <line x1="30%" y1="80%" x2="70%" y2="40%" stroke="url(#heroLineGradient)" strokeWidth="1" />
        <line x1="90%" y1="60%" x2="50%" y2="90%" stroke="url(#heroLineGradient)" strokeWidth="1" />
      </svg>

      {/* Neural network nodes */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`bg-node-${index}`}
          className="absolute w-2 h-2 bg-primary-500 rounded-full z-0"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.p variants={item} className="text-primary-600 dark:text-primary-400 font-medium mb-2">
              👋 Hello, I'm
            </motion.p>
            <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Kaushal <span className="heading-gradient">Bhanderi</span>
            </motion.h1>
            
            <motion.div variants={item} className="h-8 mb-6">
              <TypeAnimation
                sequence={[
                  'Machine Learning Engineer',
                  1500,
                  'Deep Learning Enthusiast',
                  1500,
                  'NLP Specialist',
                  1500,
                  'Computer Vision Expert',
                  1500,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              />
            </motion.div>
            
            <motion.p variants={item} className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl">
              A Computer Engineering student passionate about creating intelligent solutions through AI & ML. 
              Specializing in Deep Learning, NLP, Computer Vision, and Reinforcement Learning.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Button href="#projects" size="lg">
                View My Work
              </Button>
              <Button href="/resume.pdf" variant="outline" size="lg" className="flex items-center">
                <FiDownload className="mr-2" /> Resume
              </Button>
            </motion.div>
            
            <motion.div variants={item} className="flex gap-4 mt-8">
              <motion.a
                href="https://github.com/Kaushal-11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/kaushal-bhanderi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image with AI-themed decorations */}
          <motion.div 
            className="order-1 lg:order-2 relative flex justify-center"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full animate-pulse" 
                   style={{
                     background: "radial-gradient(circle at center, rgba(56, 189, 248, 0.4) 0%, rgba(14, 165, 233, 0.2) 50%, rgba(0, 0, 0, 0) 70%)",
                     transform: "scale(1.1)",
                     filter: "blur(8px)",
                     zIndex: -1
                   }}
              ></div>

              {/* Flip Container - This is the main container for the flip effect */}
              <motion.div
                className="relative w-full h-full group"
                style={{ 
                  perspective: "1200px",
                  transformStyle: "preserve-3d" 
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05 }}
              >
                {/* Front Side - Profile Image */}
                <motion.div
                  className="absolute w-full h-full rounded-full border-4 border-sky-300/50 shadow-lg overflow-hidden bg-white"
                  style={{ 
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    boxShadow: "0 0 15px rgba(236, 28, 135, 0.5)"
                  }}
                  animate={{ 
                    rotateY: isFlipped ? 180 : 0
                  }}
                  transition={{ 
                    duration: 0.8, 
                    type: "spring", 
                    stiffness: 100
                  }}
                >
                  <img
                    src="/images/profile.JPG"
                    alt="Kaushal Bhanderi"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </motion.div>

                {/* Back Side - Neural Network Visualization */}
                <motion.div
                  className="absolute w-full h-full rounded-full border-4 border-sky-300/50 shadow-lg overflow-hidden bg-gradient-to-br from-primary-500/10 to-secondary-500/10"
                  style={{ 
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)"
                  }}
                  animate={{ 
                    rotateY: isFlipped ? 0 : -180
                  }}
                  transition={{ 
                    duration: 0.8, 
                    type: "spring", 
                    stiffness: 100
                  }}
                >
                  {/* Neural Network Visualization */}
                  <div className="relative w-full h-full">
                    {/* Neural Network Nodes */}
                    {[...Array(8)].map((_, index) => (
                      <motion.div
                        key={`node-${index}`}
                        className="absolute w-3 h-3 bg-primary-500 rounded-full"
                        style={{
                          top: `${Math.random() * 80 + 10}%`,
                          left: `${Math.random() * 80 + 10}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                    
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4338ca" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                      {[...Array(5)].map((_, i) => (
                        <line 
                          key={`line-${i}`}
                          x1={`${Math.random() * 100}%`}
                          y1={`${Math.random() * 100}%`}
                          x2={`${Math.random() * 100}%`}
                          y2={`${Math.random() * 100}%`}
                          stroke="url(#lineGradient1)"
                          strokeWidth="1.5"
                        />
                      ))}
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Effects - Outside of flip container */}
              <div className="absolute inset-0 overflow-hidden rounded-full -z-10">
                {/* Animated AI Pattern Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-300/20 to-secondary-300/20 rounded-full blur-lg"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    rotate: [0, 5, 0] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />

                {/* Background Neural Network Nodes */}
                {[...Array(6)].map((_, index) => (
                  <motion.div
                    key={`bg-node-${index}`}
                    className="absolute w-2 h-2 bg-primary-500 rounded-full -z-10"
                    style={{
                      top: `${Math.random() * 80 + 10}%`,
                      left: `${Math.random() * 80 + 10}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
                
                {/* Background Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full -z-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4338ca" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <line x1="30%" y1="20%" x2="70%" y2="80%" stroke="url(#lineGradient2)" strokeWidth="1" />
                  <line x1="20%" y1="40%" x2="60%" y2="30%" stroke="url(#lineGradient2)" strokeWidth="1" />
                  <line x1="80%" y1="30%" x2="40%" y2="70%" stroke="url(#lineGradient2)" strokeWidth="1" />
                </svg>
              </div>
              
              {/* Tech Icons Floating Around - Only visible when neural network is showing */}
              {isFlipped && techIcons.map((tech, index) => {
                // Calculate the base angle based on index
                const baseAngle = (index / techIcons.length) * 2 * Math.PI;
                const radius = 140;
                
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-md z-30"
                    style={{
                      width: '46px',
                      height: '46px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      top: '50%',
                      left: '50%',
                      marginTop: '-16px',
                      marginLeft: '-16px',
                    }}
                    initial={{ 
                      x: radius * Math.cos(baseAngle),
                      y: radius * Math.sin(baseAngle),
                      opacity: 0 
                    }}
                    animate={{ 
                      x: [
                        radius * Math.cos(baseAngle),
                        radius * Math.cos(baseAngle + 0.1),
                        radius * Math.cos(baseAngle + 0.2),
                        radius * Math.cos(baseAngle + 0.1),
                        radius * Math.cos(baseAngle)
                      ],
                      y: [
                        radius * Math.sin(baseAngle),
                        radius * Math.sin(baseAngle + 0.1),
                        radius * Math.sin(baseAngle + 0.2),
                        radius * Math.sin(baseAngle + 0.1),
                        radius * Math.sin(baseAngle)
                      ],
                      opacity: 1,
                      scale: [0.8, 1, 0.9, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <img
                      src={tech.path}
                      alt={tech.name}
                      className="w-5 h-5 object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;