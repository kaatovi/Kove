"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
    {
        title: "Kove",
        description:
        "An animated Next.js portfolio with a GPT-4o chat widget (TBA) trained on my resume",
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

    function goTo(index: number){
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    }

    function prev(){
        goTo(current === 0 ? PROJECTS.length - 1 : current - 1);
    }

    function next(){
        goTo(current === PROJECTS.length - 1 ? 0 : current + 1);
    }

    const project = PROJECTS[current];

    return (
        <section id="projects" className="px-6 md:px-16 lg:px-24 py-24">
            <p className="text-green-400 text-sm font-medium tracking-widest uppercase mb-3">
                Personal
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Projects
            </h2>
            
            <div className="relative overflow-hidden">
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
                        transition={{duration: 0.35, ease: "easeIn"}}
                        className={`rounded-2xl border p-8 min-h-[280px] flex flex-col gap-4 ${
                            project.isEmpty
                                ?"border-white/5 bg-white/2 border-dashed"
                                :"border-white/ bg-white/3"
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
                            <h3 className="text-white font-semibold text-2xl">{project.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed max-w-xl">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
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
                                        className="text-sm text-white/40 hover:text-green-400 transition-colors w-fit"
                                    >
                                        View on GitHub
                                    </a>
                                )}
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
                            className="w-10 h-10 rounded-xl border border-white/10 hover:border-green-500/50 text-white/50 hover:text-white transition-all flex items-center justify-center"
                        >
                            ←
                        </button>
                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-xl border border-white/10 hover:border-green-500/50 text-white/50 hover:text-white transition-all flex items-center justify-center"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}