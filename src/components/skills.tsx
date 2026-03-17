"use client";

import { createElement } from "react";
import { motion, Variants } from "framer-motion";
import { Code2, Smartphone, Shield, Hexagon, Database, Cpu } from "lucide-react";

export default function skills() {
  const data = [
    { name: "C++", icon: Cpu },
    { name: "Go", icon: Code2 },
    { name: "iOS", icon: Smartphone },
    { name: "Android", icon: Smartphone },
    { name: "Cryptography", icon: Shield },
    { name: "Web3", icon: Hexagon },
    { name: "Post-Quantum", icon: Database }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemanim: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-0 max-w-5xl mx-auto relative z-10">
      <div className="mb-20 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-widest text-[#a855f7] drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] mb-6">
          EXPERTISE
        </h2>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#a855f7] to-transparent opacity-50" />
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto"
      >
        {data.map((item) => (
          <motion.div
            key={item.name}
            variants={itemanim}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 glass rounded-2xl border border-white/5 hover:border-[#00ffff]/40 hover:bg-white/[0.03] transition-all duration-300 backdrop-blur-md cursor-default"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 text-[#ededed] group-hover:text-[#00ffff] transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.6)] mb-4">
              {createElement(item.icon, { size: 36, strokeWidth: 1.5 })}
            </div>
            
            <span className="relative z-10 font-sans text-xs md:text-sm tracking-wider uppercase text-gray-400 group-hover:text-white transition-colors duration-300">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
