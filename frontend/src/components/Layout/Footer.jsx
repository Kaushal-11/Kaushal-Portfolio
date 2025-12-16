import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import { FaHeart, FaCode } from "react-icons/fa";
import axios from "axios";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);  
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus("✅ " + data.message);
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ " + (data.message || "Failed to send"));
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };  

  // Check scroll position for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub size={20} />,
      href: "https://github.com/Kaushal-11",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={20} />,
      href: "https://linkedin.com/in/kaushal-bhanderi",
    },
    {
      name: "Twitter",
      icon: <FiTwitter size={20} />,
      href: "https://twitter.com/kaushalbhanderi",
    },
    {
      name: "Email",
      icon: <FiMail size={20} />,
      href: "mailto:kaushalbhanderi34@gmail.com",
    },
  ];

  const footerNavItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };


  return (
    <footer
      id="contact"
      className="relative bg-gray-50 dark:bg-dark-200 pt-16 pb-8 overflow-hidden"
    >
      {/* Wavy divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-full h-10 sm:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current text-white dark:text-dark-300"
          ></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/10 dark:bg-primary-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary-300/10 dark:bg-secondary-600/10 rounded-full filter blur-3xl"></div>

        {/* Floating particles */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-2 h-2 bg-primary-500/40 rounded-full z-0 hidden md:block"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() > 0.5 ? 10 : -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-1">
            <motion.h3
              className="text-2xl font-bold mb-4"
              whileHover={{ x: 2 }}
            >
              <span className="heading-gradient">Kaushal Bhanderi</span>
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
              Computer Engineering student specializing in AI/ML, Deep Learning,
              NLP, Computer Vision, and Web Development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-dark-100 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                  whileHover={{
                    y: -5,
                    backgroundColor: "var(--tw-color-primary-50)",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  whileTap={{ y: 0 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {footerNavItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ x: 3, color: "var(--tw-color-primary-600)" }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Get In Touch
            </h3>
            <motion.form
              onSubmit={handleContactSubmit}
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            > 
              <motion.div whileHover={{ y: -2 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="form-input w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="form-input w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  className="form-input w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={loading}
                className={`bg-gradient-to-r from-primary-600 to-secondary-600 
                  hover:from-primary-700 hover:to-secondary-700 text-white 
                  font-medium px-6 py-2 rounded-lg transition-all shadow-md
                  ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                whileHover={!loading ? {
                  scale: 1.02,
                  y: -2,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                } : {}}
                whileTap={!loading ? { scale: 0.98, y: 0 } : {}}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 inline" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
              
              {status && (
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                  {status}
                </p>
              )}
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-200 dark:border-dark-300 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Kaushal Bhanderi. All rights reserved.
          </p>

          <motion.div
            className="flex items-center text-gray-500 dark:text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span>Made with</span>
            <FaHeart className="mx-1.5 text-red-500 animate-pulse" />
            <span>using</span>
            <FaCode className="mx-1.5 text-gray-600 dark:text-gray-400" />
            <span>React & Tailwind</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed right-6 bottom-6 w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white flex items-center justify-center shadow-lg z-50"
            whileHover={{
              y: -3,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ y: 0 }}
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
