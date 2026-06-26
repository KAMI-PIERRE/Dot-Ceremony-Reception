import React from "react";
import { motion } from "framer-motion";
import { GiPartyPopper } from "react-icons/gi";

export default function BibleVerse() {
  return (
    <section
      id="bible-verse"
      className="relative py-20 bg-gradient-to-b from-gold/5 to-rose-gold/5 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-4">
            <GiPartyPopper className="text-gold text-4xl" />
          </div>
          <p className="font-serif text-rose-gold/70 tracking-[0.4em] uppercase text-xs mb-4">
            Blessed union
          </p>
        </motion.div>

        {/* Bible Verse Card */}
        <motion.div
          className="bg-white border border-champagne shadow-xl rounded-lg p-10 md:p-14 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Opening quote */}
          <div className="text-5xl md:text-6xl text-gold/30 font-serif mb-6">
            "
          </div>

          {/* Verse text */}
          <p className="font-serif text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
            Icya mbere cya Samweli :1:27
            <br />
            Uyu mwana ni we nasabaga, none Uhoraho yampaye icyo namusabye.
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

          {/* Reference */}
          <p className="font-serif text-sm md:text-base text-rose-gold tracking-widest uppercase">
            1 Samuel 1:27
          </p>

          {/* Closing quote */}
          <div className="text-5xl md:text-6xl text-gold/30 font-serif mt-6 flex justify-end">
            "
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.p
          className="text-center font-serif text-gray-500 text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          A blessing from God to start this beautiful journey together
        </motion.p>
      </div>
    </section>
  );
}
