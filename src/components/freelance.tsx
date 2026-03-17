"use client";

import { createElement } from "react";
import { motion, Variants } from "framer-motion";
import { Copy, Terminal, MonitorSmartphone, Cpu, ShieldCheck, Mail } from "lucide-react";

export default function freelance() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemvariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const services = [
    {
      title: "Full-Stack Web Architect",
      desc: "End-to-end development of scalable, high-performance web applications using modern React, Next.js, and complex backend integrations.",
      icon: MonitorSmartphone,
      color: "#00ffff"
    },
    {
      title: "Mobile Ecosystems",
      desc: "Native and cross-platform mobile application development for iOS and Android, ensuring seamless user experiences.",
      icon: Terminal,
      color: "#a855f7"
    },
    {
      title: "Cryptographic Engineering",
      desc: "Implementation of Post-Quantum cryptographic algorithms, zero-knowledge proofs, and secure data transmission protocols.",
      icon: ShieldCheck,
      color: "#00ffff"
    },
    {
      title: "Web3 & Smart Contracts",
      desc: "Robust Ethereum and blockchain solutions, from decentralized exchanges to secure escrow smart contracts.",
      icon: Cpu,
      color: "#a855f7"
    }
  ];

  return (
    <section id="freelance" className="py-32 px-4 md:px-0 max-w-6xl mx-auto relative z-10 mb-20">
      <div className="text-center mb-16 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-widest text-[#00ffff] drop-shadow-[0_0_15px_rgba(0,255,255,0.4)] mb-6">
          FREELANCE / CONSULTING
        </h2>
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#00ffff] to-transparent opacity-50 mb-6" />
        <p className="text-gray-300 max-w-2xl text-lg font-light leading-relaxed">
          I build everything. From high-conversion landing pages to complex, quantum-secure enterprise architectures. If it runs on code, I can engineer it.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
      >
        {services.map((svc) => {
          const iscyan = svc.color === "#00ffff";
          const hoverborder = iscyan ? "hover:border-[#00ffff]/40" : "hover:border-[#a855f7]/40";
          const gloweffect = iscyan ? "group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]" : "group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]";
          
          return (
            <motion.div
              key={svc.title}
              variants={itemvariant}
              className={`group glass p-8 rounded-2xl border border-white/5 ${hoverborder} transition-all duration-500 hover:bg-white/[0.02]`}
            >
              <div className={`mb-6 text-white transition-colors duration-500 ${gloweffect}`}>
                {createElement(svc.icon, { size: 40, color: svc.color, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-2xl font-medium mb-3 text-white tracking-wide">{svc.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{svc.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7]/10 to-[#00ffff]/10 opacity-50" />
        
        <div className="relative z-10 flex-1">
          <h3 className="text-3xl font-light text-white mb-2">Ready to Build?</h3>
          <p className="text-gray-300 font-light">Initiate a secure data stream to discuss your next project architecture.</p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
           <a
            href="mailto:contact@gauravpandey.com"
            className="group relative overflow-hidden rounded-xl bg-white/5 px-8 py-4 text-sm uppercase tracking-widest text-[#00ffff] border border-[#00ffff]/30 hover:border-[#00ffff] transition-all flex items-center justify-center gap-3 backdrop-blur-md"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#00ffff]/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={16} /> Secure Mail
            </span>
          </a>
          
          <button
            onClick={() => navigator.clipboard.writeText('contact@gauravpandey.com')}
            className="group relative overflow-hidden rounded-xl bg-white/5 px-8 py-4 text-sm uppercase tracking-widest text-[#a855f7] border border-[#a855f7]/30 hover:border-[#a855f7] transition-all flex items-center justify-center gap-3 backdrop-blur-md"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10 flex items-center gap-2">
              <Copy size={16} /> Copy Address
            </span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
