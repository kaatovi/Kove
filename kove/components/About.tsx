"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SKILLS = [
    {
        label: "Frontend", 
        items: [
            {name: "React", icon: "/Frontend/react.svg"}, 
            {name: "Next.js", icon: "/Frontend/next.svg"}, 
            {name: "Framer Motion", icon: "/Frontend/framer.svg"}, 
            {name: "Tailwind CSS", icon: "/Frontend/tailwind.svg"}
        ] },
    {
        label: "Backend",
        items: [
            {name: "Node.js", icon: "/Backend/node.svg"},
            {name: "Express", icon: "/Backend/express.svg"},
            {name: "REST APIs", icon: "/Backend/rest.svg"}
        ]
    },
    {
        label: "Databases",
        items: [
            {name: "PostgreSQL", icon: "/Databases/postgre.svg"},
            {name: "MySQL", icon: "/Databases/mysql.svg"}
        ]
    },
    {
        label: "Languages",
        items: [
            {name: "JavaScript", icon: "/Languages/javascript.svg"},
            {name: "TypeScript", icon: "/Languages/typescript.svg"},
            {name: "PHP", icon: "/Languages/php.svg"}
        ]
    },
    {
        label: "Tools",
        items: [
            {name: "Git", icon: "/Tools/git.svg"},
            {name: "GitHub", icon: "/github.svg"},
            {name: "Figma", icon: "/Tools/figma.svg"},
            {name: "Vercel", icon: "/Tools/vercel.svg"},
            {name: "Procreate", icon: "/Tools/procreate.svg"}
        ]
    }
];

export default function About() {
    return(
        <section id="about" className="px-6 sm:px-14 lg:px-24 py-20 mt-25 border-t border-white/30 bg-black/50">
            <div className="flex flex-col">
            <motion.p 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                
                transition={{duration:0.5}}
                className="text-green-400 text-[10px] font-normal tracking-widest uppercase mb-3"
            >
                About
            </motion.p>
            <motion.h2 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                
                transition={{duration:0.6}}
                className="text-4xl md:text-5xl font-bold mb-4"
            >
                Personal & Stack
            </motion.h2>
            <motion.p 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                
                transition={{duration:0.7}}    
                className="text-white/60 text-sm md:text-lg font-light text-justify max-w-xl leading-relaxed mb-6"
            >
                I&apos;m an aspiring full-stack developer based in Bataan, Philippines.
                I enjoy building scalable products that solve personal and/or real problems, with strong focus on
                clean architecture, maintainable code, and user experience.
            </motion.p>
            </div>
            <motion.div 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                
                transition={{duration:0.8}}
                className="grid gap-2 w-full"
            >
                {SKILLS.map((group, i) => (
                    <motion.div
                        key={group.label}
                        initial={{opacity: 0, y:30}}
                        whileInView={{opacity: 1, y:0}}

                        transition={{duration: 0.2, delay: i * 0.05}}
                        className="relative overflow-hidden -mx-23.5 transition-transform duration-300 ease-in-out border-y border-transparent bg-black/50 p-6 group"
                    >
                        <span className="relative z-10 flex flex-row">
                            <div className="flex flex-row gap-2 w-full items-center justify-center">
                                <p className="text-green-400 text-2xl font-light tracking-widest lowercase my-1 mr-10">
                                    {group.label}
                                </p>
                                {group.items.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="text-sm px-3 font-extralight"
                                    >
                                        <Image 
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={34}
                                            height={34}
                                            className="inline-block mr-2 invert" 
                                        />
                                    {skill.name}
                                    </span>
                                ))}
                            </div>
                        </span>
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"/>
                    </motion.div>
                ))}
            </motion.div>
        </section> 
    );
}