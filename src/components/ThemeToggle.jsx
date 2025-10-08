import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white dark:bg-gray-900 shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <FiMoon className="w-3 h-3 text-blue-400" />
        ) : (
          <FiSun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}