"use client";

import { motion, Variants } from "framer-motion";

export default function about() {
  const container: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-32 px-4 md:px-0 max-w-5xl mx-auto relative z-10">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-[#00ffff]/10 to-[#a855f7]/10 rounded-[3rem] -z-10" />
        
        <div className="flex flex-col md:flex-row items-start gap-16 glass p-10 md:p-16 rounded-[2rem] border-white/5 shadow-2xl backdrop-blur-xl">
          <motion.div variants={item} className="flex-1">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8 text-[#00ffff] drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
              PROFILE
            </h2>
            <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
              <p>
                Operating at the bleeding edge of the digital frontier. My focus lies entirely on engineering impenetrable architectures and designing the cryptographic networks of tomorrow.
              </p>
              <p>
                Forged in the depths of algorithmic complexity, my expertise bridges the gap between chaotic human intent and precise mathematical execution, ensuring systemic resilience across all operational layers.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="flex-1 flex flex-col gap-8 w-full">
            <div className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a855f7]/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/0 via-[#a855f7]/5 to-[#a855f7]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <h3 className="font-medium text-xl mb-3 text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7]" />
                Quantum Cryptography
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Developing and implementing state-of-the-art cryptographic protocols designed to withstand emerging quantum threats.</p>
            </div>
            
            <div className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00ffff]/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/0 via-[#00ffff]/5 to-[#00ffff]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <h3 className="font-medium text-xl mb-3 text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00ffff] shadow-[0_0_8px_#00ffff]" />
                System Architecture
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Architecting scalable, decentralized, and flawlessly secure infrastructures spanning multiple digital environments.</p>
            </div>

            <div className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#a855f7]/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/0 via-[#a855f7]/5 to-[#a855f7]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <h3 className="font-medium text-xl mb-3 text-white flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7]" />
                Digital Defense
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Deploying proactive intrusion detection arrays and uncompromising mitigation strategies for critical assets.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
