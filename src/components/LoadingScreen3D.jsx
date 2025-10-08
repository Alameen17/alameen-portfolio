import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ isLoading }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          const increment = Math.random() * 15 + 5;
          return Math.min(prev + increment, 100);
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center overflow-hidden"
        >
          {/* Subtle background - monochrome with hint of color */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-800/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-700/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="text-center relative z-10">
            {/* 3D Cube Container */}
            <div className="perspective-1000 mb-8">
              <motion.div
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative w-32 h-32 mx-auto preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Monochrome sophisticated palette */}
                
                {/* Front face - Charcoal */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 border border-zinc-600/30 backdrop-blur-sm flex items-center justify-center"
                     style={{ transform: 'translateZ(64px)' }}>
                  <span className="text-2xl font-bold text-zinc-300">A</span>
                </div>
                
                {/* Back face - Slate */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-600/30 backdrop-blur-sm flex items-center justify-center"
                     style={{ transform: 'translateZ(-64px) rotateY(180deg)' }}>
                  <span className="text-2xl font-bold text-slate-300">A</span>
                </div>
                
                {/* Right face - Neutral gray */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/40 to-neutral-900/40 border border-neutral-600/30 backdrop-blur-sm flex items-center justify-center"
                     style={{ transform: 'rotateY(90deg) translateZ(64px)' }}>
                  <span className="text-2xl font-bold text-neutral-300">A</span>
                </div>
                
                {/* Left face - Stone */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-800/40 to-stone-900/40 border border-stone-600/30 backdrop-blur-sm flex items-center justify-center"
                     style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}>
                  <span className="text-2xl font-bold text-stone-300">A</span>
                </div>
                
                {/* Top face - Subtle accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-600/30 backdrop-blur-sm flex items-center justify-center"
                     style={{ transform: 'rotateX(90deg) translateZ(64px)' }}>
                  <span className="text-2xl font-bold text-gray-300">A</span>
                </div>
                
                {/* Bottom face - Deep gray */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 to-black/40 border border-zinc-700/30 backdrop-blur-sm flex items-center justify-center"
                     style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}>
                  <span className="text-2xl font-bold text-zinc-400">A</span>
                </div>
              </motion.div>
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {progress < 100 ? 'Loading Portfolio' : 'Welcome'}
              </h2>
              <p className="text-gray-500 text-sm">
                {progress < 30 && 'Initializing...'}
                {progress >= 30 && progress < 60 && 'Loading assets...'}
                {progress >= 60 && progress < 90 && 'Almost there...'}
                {progress >= 90 && progress < 100 && 'Finishing up...'}
                {progress >= 100 && 'Ready!'}
              </p>
            </motion.div>

            {/* Progress bar - Minimalist white */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="w-64 mx-auto"
            >
              <div className="h-[2px] bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-white"
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-600 text-xs">{Math.round(progress)}%</p>
                <p className="text-gray-500 text-xs font-mono">Al-ameen Adekunle</p>
              </div>
            </motion.div>

            {/* Minimalist dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-zinc-600"
                />
              ))}
            </div>
          </div>

          <style>{`
            .perspective-1000 {
              perspective: 1000px;
            }
            .preserve-3d {
              transform-style: preserve-3d;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}