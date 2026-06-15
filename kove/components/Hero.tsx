"use client";

import { motion } from "framer-motion";

export default function Hero(){
    return (
        <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24">
            <motion.p 
                initial={{opacity:0, y:20}} 
                animate={{opacity:1, y:0}} 
                transition={{duration:0.5}}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit border border-green-500/30 bg-green-500/10 text-green-400 text-xs tracking-widest uppercase"
                ><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>Full-Stack JavaScript Developer
            </motion.p>

            <motion.p
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.1}}
                className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
                > Hi, I`m <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-yellow-300">kaatov</span>
            </motion.p>

            <motion.p
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.2}}
                className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
                >I build practical to nonsensical web apps using React, Next.js and Node.js.
            </motion.p>

            <motion.div
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.3}}
                className="flex flex-wrap gap-4"
            >
                <a href="#projects" className="px-6 py-3 rounded-xl bg-green-600 duration-200 hover:bg-transparent border border-transparent hover:border-green-400/30 text-white font-bold transition-colors">
                View Projects
                </a>
                <a href="#contact" className="relative overflow-hidden px-6 py-3 rounded-xl border border-white/35 hover:border-white/50 text-white/70 hover:text-white font-bold transition-all group">
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"/>
                </a>
            </motion.div>
        </section>
    );
}