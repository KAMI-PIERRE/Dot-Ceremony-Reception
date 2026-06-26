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
          backgroundImage: "url('/couple-photo.jpg.jpeg')",
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay gradient (light so photo remains visible) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 flex flex-col items-center justify-center min-h-screen py-10">
        <div className="w-full max-w-5xl rounded-[2rem] p-6 sm:p-10">
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-champagne/80 mb-3">
              The wedding of
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-tight font-semibold max-w-3xl mx-auto">
              Gisele & Pierre
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white font-semibold tracking-wide">
              Saturday, 5 September 2026
            </p>
          </motion.div>

          {/* Cream countdown block similar to the provided design */}
          <motion.div
            className="w-full mt-8 bg-ivory/95 rounded-t-[2rem] py-10 px-6 sm:px-12 shadow-[0_-30px_80px_-40px_rgba(0,0,0,0.15)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-black text-center font-semibold">
              Counting Down
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-black text-center mt-3 mb-8">
              Until the big day
            </h2>

            <div className="max-w-4xl mx-auto grid grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-serif text-gold-dark font-semibold">
                  {String(countdown.days).padStart(2, "0")}
                </div>
                <div className="text-xs tracking-widest uppercase text-black mt-2">Days</div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-serif text-gold-dark font-semibold">
                  {String(countdown.hours).padStart(2, "0")}
                </div>
                <div className="text-xs tracking-widest uppercase text-black mt-2">Hours</div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-serif text-gold-dark font-semibold">
                  {String(countdown.minutes).padStart(2, "0")}
                </div>
                <div className="text-xs tracking-widest uppercase text-black mt-2">Minutes</div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-serif text-gold-dark font-semibold">
                  {String(countdown.seconds).padStart(2, "0")}
                </div>
                <div className="text-xs tracking-widest uppercase text-black mt-2">Seconds</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto mt-8 max-w-3xl rounded-[1.5rem] border border-gold/30 bg-white/85 px-6 py-5 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <p className="font-serif text-lg sm:text-xl text-black leading-relaxed italic text-center">
              “Uyu mwana ni we nasabaga, none Uhoraho yampaye icyo namusabye.”
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gold-dark font-semibold text-center">
              1 Samuel 1:27
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToInvitation}
            className="mx-auto mt-2 inline-flex items-center justify-center rounded-full border border-rose-gold/40 bg-gradient-to-r from-rose-gold/90 to-gold-light/90 px-8 py-3 text-sm uppercase tracking-[0.35em] text-black shadow-2xl shadow-rose-gold/20 transition hover:-translate-y-0.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Invitation
          </motion.button>
        </div>
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
