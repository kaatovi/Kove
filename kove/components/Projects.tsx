"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
    {
        title: "Kove",
        description:
        "An animated Next.js portfolio with a Groq (Llama 3.3) chat widget trained on my resume",
        images: [
            "/Screenshots/koveSC1.png",
            "/Screenshots/koveSC2.png",
            "/Screenshots/koveSC3.png",
        ],
        tags: ["Next.js", "Framer Motion", "OpenAI", "TypeScript"],
        githubUrl: "https://github.com/kaatovi/Kove",
        isEmpty: false,
    },
    {
        title: "Coming Soon",
        description:
        "Another project on the way",
        tags: [],
        githubUrl: "",
        isEmpty: true,
    },
    {
        title: "Coming Soon",
        description:
        "Another project on the way",
        tags: [],
        githubUrl: "",
        isEmpty: true,
    },
];

export default function Projects() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);

    function goTo(index: number){
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
        setHoveredImage(null);
    }

    function prev(){
        goTo(current === 0 ? PROJECTS.length - 1 : current - 1);
        setHoveredImage(null);
    }

    function next(){
        goTo(current === PROJECTS.length - 1 ? 0 : current + 1);
        setHoveredImage(null);
    }

    const project = PROJECTS[current];

    return (
        <section id="projects" className="px-6 sm:px-14 lg:px-24 py-28">
            <motion.p 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5}}
                
                className="text-green-400 text-sm font-medium tracking-widest uppercase mb-3"
            >
                Personal
            </motion.p>
            <motion.h2 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6}}
                
                className="text-4xl md:text-5xl font-bold mb-8"
            >
                Projects
            </motion.h2>
            
            <motion.div  
                initial={{opacity:0, y:80}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.8}}
                className="relative overflow-hidden"
            >
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={{
                            enter: (d:number) => ({opacity: 0, x: d * 80}),
                            center: {opacity:1, x:0},
                            exit: (d: number) => ({opacity:0, x: d * -80}),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        whileInView={{duration: 0.8, ease: "easeIn"}}
                        className={`rounded-2xl border p-4 flex flex-col gap-4 ${
                            project.isEmpty
                                ?"border-white/50 bg-black/30 border-dashed min-h-70"
                                :"border-white/50 bg-black/30 min-h-auto"
                        }`}
                    >

                        {project.isEmpty ? (
                            <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center">
                                <div className="w-12 h-12 rounded-full border border-dashed border-white/15 flex items-center justify-center text-white/20 text-2xl">
                                    +
                                </div>
                                <p className="text-white/25 text-sm">Project coming soon</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex flex-col xl:flex-row gap-3 w-full">
                                    <div className="w-auto h-auto xl:w-160 xl:h-80 rounded-xl overflow-hidden border border-white/10 shrink-0">
                                        <AnimatePresence mode="wait">
                                        <motion.img
                                            key={hoveredImage ?? project.images[0]}
                                            src={hoveredImage ?? project.images[0]}
                                            alt="Preview"
                                            initial={{opacity:0}}
                                            animate={{opacity:1}}
                                            exit={{opacity:0}}
                                            transition={{duration: 0.3, ease: "easeInOut"}}
                                            className="w-full h-full object-cover"
                                        />
                                        </AnimatePresence>
                                    </div>
                                    <div className="flex flex-col gap-2 lg:gap-4 flex-1">
                                        <h3 className="text-white font-semibold text-3xl lg:text-4xl">{project.title}</h3>
                                        <p className="text-white/50 text-sm leading-relaxed max-w-xl text-justify">
                                            {project.description}
                                        </p>
                                    
                                        {project.images &&  project.images.length > 0 && (
                                            <div className="flex gap-3">
                                                {project.images.map((img, i) => (
                                                    <div
                                                        key={i}
                                                        onMouseEnter={() => setHoveredImage(img)}
                                                        onMouseLeave={() => setHoveredImage(null)}
                                                        className={`w-20 h-10 sm:w-25 sm:h-15 rounded-lg overflow-hidden border cursor-pointer shrink-0 transition-all duration-150 ${
                                                            (hoveredImage ?? project.images[0]) === img
                                                                ? "border-green-400/60 scale-105"
                                                                : "border-white/10 opacity-60 hover:opacity-100"
                                                        }`}
                                                    >
                                                        <img
                                                            src={img}
                                                            alt={`Screenshot ${i + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                ))}
                                            
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-1 mt-auto">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-sm px-2.5 py-1 rounded-lg bg-green-600/15 text-green-300 font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {project.githubUrl && (
                                            <a href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="pt-2 w-fit self-end"
                                                aria-label="View on GitHub"
                                            >
                                                <Image 
                                                    src="/github.svg" 
                                                    alt="" 
                                                    width={36} 
                                                    height={36} 
                                                    className="invert hover:scale-120 duration-200" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </>
                            
                        )}
                    </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between mt-6">
                    <div className="flex gap-2">
                        {PROJECTS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo (i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    i === current ? "w-6 bg-green-400" : "w-1.5 bg-white/20"
                                }`}
                            />
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-xl border bg-green-600 border-transparent duration-200 hover:bg-transparent hover:border-green-500/50 text-white/90 hover:text-white transition-all flex items-center justify-center"
                        >
                            ←
                        </button>
                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-xl bg-green-600 border border-transparent duration-200 hover:bg-transparent hover:border-green-500/50 text-white/90 hover:text-white transition-all flex items-center justify-center"
                        >
                            →
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}