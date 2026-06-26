import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMusic, FaVolumeMute } from "react-icons/fa";

export default function MusicToggle() {
  // start playing by default
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef(null);

  // Use the Rwandan song from the archive.org collection.
  const AUDIO_URL = "/music/cecil-kayirebwa-tarihinda.mp3";

  useEffect(() => {
    audioRef.current = new Audio(AUDIO_URL);
    audioRef.current.loop = true;
    audioRef.current.autoplay = true;
    audioRef.current.muted = false;
    audioRef.current.volume = 0.3;

    // Try to autoplay on mount. Browsers may block autoplay until user interaction.
    audioRef.current
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        console.warn("Autoplay blocked by browser");
      });

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay blocked — user must interact first (already is)
      });
    }
    setPlaying(!playing);
  };

  return (
    <motion.button
      onClick={toggleMusic}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-white shadow-lg border border-champagne flex items-center justify-center hover:border-gold transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={playing ? "Pause music" : "Play music"}
      aria-label={playing ? "Pause background music" : "Play background music"}
    >
      <motion.div
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={
          playing
            ? { duration: 4, repeat: Infinity, ease: "linear" }
            : { duration: 0.3 }
        }
      >
        {playing ? (
          <FaMusic className="text-gold text-sm" />
        ) : (
          <FaVolumeMute className="text-gray-400 group-hover:text-rose-gold text-sm transition-colors" />
        )}
      </motion.div>

      {/* Ripple when playing */}
      {playing && (
        <>
          {[1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full border border-gold"
              animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
}
