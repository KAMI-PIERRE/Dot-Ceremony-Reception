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
      className="relative overflow-hidden py-16"
      style={{
        background:
          "linear-gradient(135deg, #1a0a0a 0%, #2d1515 50%, #1a0a0a 100%)",
      }}
    >
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((h) => (
          <FloatingHeart key={h.id} {...h} />
        ))}
      </div>

      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
            backgroundSize: "40px 40px",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top gold line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-14" />

        {/* Logo / names */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-5xl md:text-6xl text-gold mb-2">
            Gisele & Jean Pierre
          </h2>
          <p className="font-serif text-champagne/60 tracking-[0.3em] uppercase text-xs">
            05 September 2026 · Kigali, Rwanda
          </p>
        </motion.div>

        {/* Nav links */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-serif text-xs tracking-widest uppercase text-champagne/50 hover:text-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-10" />

        {/* Thank you message */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="font-script text-3xl md:text-4xl text-rose-gold mb-3">
            Thank you for celebrating with us
          </p>
          <p className="font-serif text-champagne/50 text-sm max-w-md mx-auto">
            Your presence is the greatest gift you could give us. We are
            grateful to share this special day with family and friends.
          </p>
        </motion.div>

        {/* Hearts row */}
        <motion.div
          className="flex justify-center gap-3 mb-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {["🌹", "❤️", "💍", "❤️", "🌹"].map((e, i) => (
            <span key={i} className="text-xl">
              {e}
            </span>
          ))}
        </motion.div>

        {/* Bottom line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        <div className="text-center">
          <p className="font-serif text-champagne/30 text-xs tracking-widest">
            © {new Date().getFullYear()} Gisele & Jean Pierre · Made with{" "}
            <FaHeart className="inline text-rose-gold text-xs" /> in Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
