import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { coupleInfo } from "../data/weddingData";

// Countdown hook
function useCountdown(targetDate) {
  const calculate = () => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate);

  useEffect(() => {
    const id = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return time;
}

function CountdownBox({ value, label }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black/30 backdrop-blur-sm border border-gold/40 flex items-center justify-center relative overflow-hidden">
        <motion.span
          key={value}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-light"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
        {/* Gold corner accents */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/60" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/60" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/60" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/60" />
      </div>
      <span className="font-serif text-xs tracking-widest uppercase text-champagne/80 mt-2">
        {label}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const countdown = useCountdown(coupleInfo.weddingDate);

  const scrollToInvitation = () => {
    document.querySelector("#parents")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=90')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-overlay" />

      {/* Decorative gold lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/40" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold/40" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold/40" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        {/* Pre-title */}
        <motion.p
          className="font-serif text-champagne tracking-[0.4em] uppercase text-xs sm:text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          You are cordially invited to the wedding of
        </motion.p>

        {/* Gold decorative line */}
        <motion.div
          className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Names */}
        <motion.h1
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white text-shadow-lg leading-none mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          Gisele
        </motion.h1>

        <motion.div
          className="flex items-center gap-4 my-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="w-12 h-px bg-gold/60" />
          <span className="text-gold text-2xl">❧</span>
          <div className="w-12 h-px bg-gold/60" />
        </motion.div>

        <motion.h1
          className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white text-shadow-lg leading-none mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
        >
          Jean Pierre
        </motion.h1>

        {/* Date */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <p className="font-serif text-champagne tracking-[0.3em] uppercase text-sm sm:text-base">
            05 · September · 2026
          </p>
          <p className="font-serif text-champagne/70 tracking-widest text-xs mt-1">
            Kigali, Rwanda
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <p className="font-serif text-champagne/70 tracking-[0.3em] uppercase text-xs mb-6 text-center">
            Counting down to forever
          </p>
          <div className="flex items-start gap-4 sm:gap-6">
            <CountdownBox value={countdown.days} label="Days" />
            <div className="text-gold text-2xl font-serif mt-4 sm:mt-5">:</div>
            <CountdownBox value={countdown.hours} label="Hours" />
            <div className="text-gold text-2xl font-serif mt-4 sm:mt-5">:</div>
            <CountdownBox value={countdown.minutes} label="Minutes" />
            <div className="text-gold text-2xl font-serif mt-4 sm:mt-5">:</div>
            <CountdownBox value={countdown.seconds} label="Seconds" />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToInvitation}
          className="btn-primary text-sm tracking-[0.3em] relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">View Invitation</span>
          <motion.div
            className="absolute inset-0 bg-gold"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToInvitation}
      >
        <span className="font-serif text-champagne/60 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-champagne/60 to-transparent" />
      </motion.div>
    </section>
  );
}
