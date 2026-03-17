"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface point {
  x: number;
  y: number;
  id: number;
}

export default function cursor() {
  const [trail, settrail] = useState<point[]>([]);
  
  useEffect(() => {
    let pointid = 0;
    
    function handlemousemove(e: MouseEvent) {
      const newpoint = { x: e.clientX, y: e.clientY, id: pointid++ };
      
      settrail((prev) => [...prev, newpoint].slice(-20));
      
      setTimeout(() => {
        settrail((prev) => prev.filter((p) => p.id !== newpoint.id));
      }, 500);
    }
    
    window.addEventListener("mousemove", handlemousemove);
    return () => window.removeEventListener("mousemove", handlemousemove);
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <AnimatePresence>
          {trail.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-3 h-3 rounded-full bg-[#00ffff] drop-shadow-[0_0_8px_#00ffff]"
              style={{
                left: point.x - 6,
                top: point.y - 6,
              }}
            />
          ))}
        </AnimatePresence>
      </div>
      
      {/* Primary Dot */}
      {trail.length > 0 && (
        <div 
          className="fixed w-4 h-4 rounded-full bg-[#a855f7] pointer-events-none z-[101] drop-shadow-[0_0_10px_#a855f7]"
          style={{
            left: trail[trail.length - 1].x - 8,
            top: trail[trail.length - 1].y - 8,
          }}
        />
      )}
    </>
  );
}
