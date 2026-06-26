import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { coupleInfo } from "../data/weddingData";
import { FaHeart, FaInstagram, FaFacebook } from "react-icons/fa";

// Floating hearts for footer
const HEART_EMOJIS = ["❤️", "💕", "💖", "💗", "💓", "💝", "🌹", "🌸"];

function FloatingHeart({ emoji, x, delay, duration }) {
  return (
    <motion.span
      className="absolute text-lg pointer-events-none select-none"
      style={{ left: `${x}%`, bottom: 0 }}
      animate={{
        y: [0, -200],
        opacity: [0, 1, 1, 0],
        rotate: [0, 20, -20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      {emoji}
    </motion.span>
  );
}

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Family", href: "#parents" },
  { label: "Schedule", href: "#timeline" },
  { label: "Venue", href: "#venue" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        emoji: HEART_EMOJIS[i % HEART_EMOJIS.length],
        x: (i / 12) * 100,
        delay: i * 1.1,
        duration: 4 + (i % 4),
      })),
    []
  );

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/couple-photo.jpg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/95" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-[2rem] border border-white/10 bg-black/30 backdrop-blur-xl shadow-2xl p-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/70" />
          <div className="relative z-10">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mx-auto mb-8 w-28 h-28 rounded-full bg-white/10 border border-white/20 shadow-2xl flex items-center justify-center text-5xl text-gold">
                💍
              </div>
              <h2 className="font-script text-5xl md:text-6xl text-gold mb-2">
                Gisele & Jean Pierre
              </h2>
              <p className="font-serif text-champagne/60 tracking-[0.3em] uppercase text-xs">
                05 September 2026 · Kigali, Rwanda
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="font-serif text-xs tracking-[0.35em] uppercase text-champagne/50 hover:text-gold transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </motion.div>

            <div className="w-full h-px bg-white/10 mb-10" />

            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="font-script text-3xl md:text-4xl text-gold mb-3">
                Thank you for celebrating with us
              </p>
              <p className="font-serif text-champagne/60 text-sm max-w-2xl mx-auto">
                Your presence is the greatest gift we could receive. We are honored to share this special day with family and friends.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center gap-3 mb-10"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              {['🌹', '❤️', '💍', '❤️', '🌹'].map((e, i) => (
                <span key={i} className="text-xl">
                  {e}
                </span>
              ))}
            </motion.div>

            <div className="w-full h-px bg-white/10 mb-8" />

            <div className="text-center">
              <p className="font-serif text-champagne/30 text-xs tracking-[0.35em]">
                © {new Date().getFullYear()} Gisele & Jean Pierre · Made with <FaHeart className="inline text-rose-gold text-xs" /> in Rwanda
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
