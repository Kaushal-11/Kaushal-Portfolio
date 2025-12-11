import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
    console.log('Form Submitted', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 
            text-gray-800 dark:text-white flex items-center 
            justify-center gap-4">
            <FaEnvelope className="text-blue-500" />
            Get In Touch
          </h2>

          <form 
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-700 
              shadow-lg rounded-xl p-8 space-y-6"
          >
            <div>
              <label 
                htmlFor="name" 
                className="block mb-2 text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg 
                  bg-gray-100 dark:bg-gray-600 
                  text-gray-800 dark:text-white 
                  focus:outline-none focus:ring-2 
                  focus:ring-blue-500 transition-all"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block mb-2 text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg 
                  bg-gray-100 dark:bg-gray-600 
                  text-gray-800 dark:text-white 
                  focus:outline-none focus:ring-2 
                  focus:ring-blue-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block mb-2 text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg 
                  bg-gray-100 dark:bg-gray-600 
                  text-gray-800 dark:text-white 
                  focus:outline-none focus:ring-2 
                  focus:ring-blue-500 transition-all"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center 
                bg-blue-500 text-white py-3 rounded-lg 
                hover:bg-blue-600 transition-all duration-300 
                group"
            >
              <FaPaperPlane className="mr-2 group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;