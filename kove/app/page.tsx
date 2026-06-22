"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects"
import About from "@/components/About";
import Contact from "@/components/Contact";
import FloatingBackground from "@/components/FloatingBackground";
import Trademark from "@/components/Trademark";

export default function Home() {
  const[entered, setEntered] = useState(false);
  
  return (
      <main style={{minHeight: "100vh", position:"relative", background: "#1A1A1A"}}> 
        <AnimatePresence>
          {!entered && (
            <Intro onEnter={() => setEntered(true)} />
          )}
        </AnimatePresence>

          {entered && (
            <>
              <FloatingBackground />
              <div style={{position:"relative", zIndex:1}}>
                <Hero />
                <Projects />
                <About />
                <Contact />
                <Trademark />
              </div>
            </>
          )}
      </main>
  );
}
