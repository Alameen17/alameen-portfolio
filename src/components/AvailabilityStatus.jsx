import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiCheck, FiClock } from 'react-icons/fi';

export default function AvailabilityStatus() {
  // Set your availability status here
  const [availability, setAvailability] = React.useState({
    status: 'available', // 'available', 'limited', 'unavailable'
    message: 'Available for new projects',
    nextAvailable: null, // Date when you'll be available (if currently unavailable)
    calendarLink: 'https://calendly.com/your-username', // Your Calendly or Cal.com link
  });

  const statusConfig = {
    available: {
      color: 'bg-green-500',
      textColor: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      icon: <FiCheck className="w-4 h-4" />,
      pulseColor: 'bg-green-400'
    },
    limited: {
      color: 'bg-yellow-500',
      textColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      icon: <FiClock className="w-4 h-4" />,
      pulseColor: 'bg-yellow-400'
    },
    unavailable: {
      color: 'bg-red-500',
      textColor: 'text-red-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      icon: <FiClock className="w-4 h-4" />,
      pulseColor: 'bg-red-400'
    }
  };

  const config = statusConfig[availability.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-full border ${config.bgColor} ${config.borderColor} backdrop-blur-sm`}
    >
      {/* Animated status dot */}
      <div className="relative flex items-center justify-center">
        <span className={`absolute w-3 h-3 ${config.pulseColor} rounded-full animate-ping opacity-75`} />
        <span className={`relative w-2.5 h-2.5 ${config.color} rounded-full`} />
      </div>

      {/* Status text */}
      <div className="flex items-center gap-2">
        <span className={`${config.textColor} font-medium text-sm`}>
          {availability.message}
        </span>
        
        {availability.status === 'available' && availability.calendarLink && (
          <a
            href={availability.calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="ml-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            title="Book a meeting"
          >
            <FiCalendar className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Next available date (if unavailable) */}
      {availability.nextAvailable && (
        <span className="text-xs text-gray-500 dark:text-gray-400 border-l border-gray-300 dark:border-gray-600 pl-3">
          Available {new Date(availability.nextAvailable).toLocaleDateString('en-US', { 
            month: 'short', 
            year: 'numeric' 
          })}
        </span>
      )}
    </motion.div>
  );
}