import { motion } from 'framer-motion'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import HeroSection from './components/Sections/HeroSection'
import AboutMe from './components/Sections/AboutMe'
import Skills from './components/Sections/Skills'
import Experience from './components/Sections/Experience'
import Projects from './components/Sections/Projects'
import Achievements from './components/Sections/Achievements'

function App() {
  return (
    <div className="min-h-screen bg-light-100 dark:bg-dark-100 transition-colors duration-300">
      <div className="relative z-10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-neural-network bg-no-repeat bg-cover"></div>
        </div>
        
        {/* Gradient Orbs */}
        <motion.div 
          className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary-500/30 to-secondary-500/30 dark:from-primary-400/20 dark:to-secondary-400/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="fixed bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-secondary-500/20 to-violet-500/20 dark:from-secondary-400/15 dark:to-violet-400/15 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="bg-white/80 dark:bg-dark-100/90 backdrop-blur-lg">
            <HeroSection />
            <AboutMe />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App

