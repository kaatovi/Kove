"use client";

import { motion } from "framer-motion";

export default function Hero(){
    return (
        <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 sm:px-14 lg:px-24">
            <motion.p 
                initial={{opacity:0, y:20}} 
                whileInView={{opacity:1, y:0}} 
                transition={{duration:0.5}}
                className="px-3 py-1.5 border-b w-fit text-green-400 text-xs tracking-widest uppercase"
                >Full-Stack JavaScript Developer
            </motion.p>

            <motion.p
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.1}}
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                > Hi, I`m <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-yellow-300">kaatov</span>
            </motion.p>

            <motion.p
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.2}}
                className="text-white/50 text-sm md:text-lg leading-relaxed mb-6 max-w-xl"
                >I build practical to nonsensical web apps using React, Next.js and Node.js.
            </motion.p>

            <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.3}}
                className="flex flex-wrap gap-4"
            >
                <a href="#projects" className="px-4 py-3 text-xs md:px-6 md:py-3 md:text-sm self-center rounded-xl bg-green-600 duration-200 hover:bg-transparent border border-transparent hover:border-green-400/30 text-white font-bold transition-colors">
                View Projects
                </a>
                <a href="#contact" className="relative px-5 py-3 text-xs md:text-sm md:px-6 md:py-3 self-center overflow-hidden rounded-xl border border-white/35 hover:border-white/50 text-white/70 hover:text-white font-bold transition-all group">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"/>
                </a>
            </motion.div>
        </section>
    );
}