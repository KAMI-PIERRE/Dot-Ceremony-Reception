import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="loading-screen fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Decorative rings */}
      <div className="relative flex items-center justify-center mb-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-gold opacity-30"
            style={{
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Center rings icon */}
        <motion.div
          className="relative z-10 text-6xl"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          💍
        </motion.div>
      </div>

      {/* Names */}
      <motion.h1
        className="font-script text-5xl md:text-6xl text-gold text-center mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Gisele & Jean Pierre
      </motion.h1>

      <motion.p
        className="font-serif text-champagne tracking-[0.3em] uppercase text-sm mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        05 September 2026
      </motion.p>

      {/* Progress bar */}
      <div className="w-48 h-px bg-white/20 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 scroll-progress"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      <motion.p
        className="font-serif text-champagne/60 text-xs mt-4 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Preparing your invitation...
      </motion.p>
    </motion.div>
  );
}
