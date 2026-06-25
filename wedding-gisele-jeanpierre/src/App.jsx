import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Parents from "./components/Parents";
import Timeline from "./components/Timeline";
import Venue from "./components/Venue";
import BibleVerse from "./components/BibleVerse";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingParticles from "./components/FloatingParticles";
import MusicToggle from "./components/MusicToggle";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <ScrollProgress />
          <FloatingParticles />
          <Navbar />
          <MusicToggle />

          <main>
            <Hero />
            <Parents />
            <Timeline />
            <Venue />
            <BibleVerse />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
