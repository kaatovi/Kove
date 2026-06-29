"use client";

import { motion } from "framer-motion";

const SKILLS = [
    {label: "Frontend", items: ["React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"] },
    {label: "Backend", items: ["Node.js", "Express", "REST APIs", "PostgreSQL"]},
    {label: "Tools", items: ["Git", "GitHub", "Figma", "Vercel", "Procreate"]}, 
];

export default function About() {
    return(
        <section id="about" className="px-6 md:px-16 lg:px-24 py-24">
            <motion.p 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                
                transition={{duration:0.5}}
                className="text-green-400 text-sm font-medium tracking-widest uppercase mb-3"
            >
                About
            </motion.p>
            <motion.h2 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                
                transition={{duration:0.6}}
                className="text-4xl md:text-5xl font-bold mb-6"
            >
                Skills & Stack
            </motion.h2>
            <motion.p 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                
                transition={{duration:0.7}}    
                className="text-white/50 text-lg text-justify max-w-xl leading-relaxed mb-8"
            >
                I`m an aspiring full-stack JavaScript developer based in Bataan, Philippines.
                I enjoy building scalable products that solve personal and/or real problems.
                I also dabble on creative projects on the side.
            </motion.p>

            <motion.div 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                
                transition={{duration:0.8}}
                className="grid md:grid-cols-3 gap-8"
            >
                {SKILLS.map((group, i) => (
                    <motion.div
                        key={group.label}
                        initial={{opacity: 0, y:30}}
                        whileInView={{opacity: 1, y:0}}

                        transition={{duration: 0.4, delay: i * 0.1}}
                        className="relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 rounded-2xl border border-white/8 bg-black/30 p-6 group"
                    >
                        <span className="relative z-10">
                            <p className="text-white/70 text-xs font-medium tracking-widest uppercase mb-4">
                                {group.label}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm px-3 py-1.5 rounded-lg bg-green-600/15 text-green-300"
                                    >
                                    {skill}
                                    </span>
                                ))}
                            </div>
                        </span>
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"/>
                    </motion.div>
                ))}
            </motion.div>
        </section> 
    );
}