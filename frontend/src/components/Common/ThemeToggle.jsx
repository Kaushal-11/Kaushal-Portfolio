import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import useTheme from '../../hooks/useTheme'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <FiSun size={18} className="text-yellow-400" />
      ) : (
        <FiMoon size={18} className="text-indigo-600" />
      )}
    </motion.button>
  )
}

export default ThemeToggle