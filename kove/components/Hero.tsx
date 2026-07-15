"use client";

import { motion } from "framer-motion";
import TextType from "@/components/TextType";

export default function Hero(){
    return (
        <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-14 lg:px-24">
            <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.1}}
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                > Hi, I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-yellow-300">
                    <TextType 
                        text={["Kurt.", "kaatov.", "kurval."]}
                        typingSpeed={150}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="| "
                        cursorClassName="text-green-300"
                        deletingSpeed={150}
                        cursorBlinkDuration={.8}    
                    />
                </span>
            </motion.div>

            <motion.p
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.2}}
                className="text-white/70 text-sm md:text-xl leading-relaxed font-light mb-6 max-w-xl"
                >Understanding the means to an end. System quality—building with security and functionality for long-term scalability.
            </motion.p>

            <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.3}}
                className="flex flex-wrap gap-4"
            >
                <a href="#projects" className="px-4 py-3 text-xs md:px-6 md:py-3 md:text-sm self-center rounded-xl bg-green-600 duration-200 hover:bg-transparent border border-transparent hover:border-green-400/30 text-white font-medium transition-colors">
                View Projects
                </a>
                <a href="#contact" className="relative px-5 py-3 text-xs md:text-sm md:px-6 md:py-3 self-center overflow-hidden rounded-xl border border-white/35 hover:border-white/50 text-white/70 hover:text-white font-medium transition-all group">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"/>
                </a>
            </motion.div>
        </section>
    );
}