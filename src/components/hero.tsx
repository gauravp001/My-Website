"use client";

import { TypeAnimation } from "react-type-animation";
import { motion, Variants } from "framer-motion";

export default function hero() {
  const container: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center justify-center text-center z-10 px-4"
      >
        <div className="mb-6 relative">
          <div className="absolute inset-0 blur-3xl bg-[#00ffff]/20 rounded-full" />
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] via-white to-[#a855f7] drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]">
            Gaurav Pandey
          </h1>
        </div>
        
        <div className="h-[2px] w-32 md:w-64 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent mb-8 opacity-70" />

        <div className="text-xl md:text-3xl font-light tracking-wide h-24 flex items-center justify-center text-[#ededed] drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          <TypeAnimation
            sequence={[
              "Security Architect", 2000,
              "Cybernetics Specialist", 2000,
              "Cryptographic Engineer", 2000,
              "Digital Vanguard", 2000
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="glow-text-cyan"
          />
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#00ffff] opacity-50 blur-[0.5px]"
      >
        <span className="text-xs uppercase tracking-[0.3em] mb-2 font-mono">Connect</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#00ffff] to-transparent" />
      </motion.div>
    </section>
  );
}
