"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingBackground () {
  const [mounted, setMounted] = useState(false);  

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if(!mounted) return null;

  return (
    <div
      style={{position: "fixed", inset:0, zIndex:0, overflow:"hidden"}}>
      <motion.div
        animate={{
          x: [0,250,-40,0],
          y: [0,-80,40,0],
          scale: [1,1.1,0.9,1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(134, 239, 172, 0.4) 0%, rgba(134, 239, 172, 0) 70%)",
          filter: "blur(40px)",
          position: "absolute",
          top: "10%",
          left: "5%",
        }}
      />

      <motion.div
        animate={{
          x: [0,-250,60,0],
          y: [0,100,-30,0],
          scale: [1,0.9,1.2,1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 255, 224, 0.4) 0%, rgba(255, 255, 224, 0) 70%)",
          filter: "blur(50px)",
          position: "absolute",
          bottom: "10%",
          right: "5%",
        }}
      />
      
      <div
        style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
        }}      
      />
    </div>
    
  );
};