"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
    {
        title: "Kove",
        description:
        "An animated Next.js portfolio with a Groq (Llama 3.3) chat widget specifically trained on Kurt's stack and experiences",
        images: [
            "/Screenshots/koveSC1.png",
            "/Screenshots/koveSC2.png",
            "/Screenshots/koveSC3.png",
        ],
        tags: ["Next.js", "Framer Motion", "GroqAPI", "TypeScript", "Tailwind CSS", "Git"],
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

const TAG_COLORS: Record<string, string> = {
    "Next.js": "#86efac",
    "React": "#86efac",
    "Framer Motion": "#86efac",
    "Tailwind CSS": "#86efac",

    "Node.js": "#f87171",
    "Express": "#f87171",
    "Rest APIs": "#f87171",

    "PostgreSQL": "#60a5fa",
    "MySQL": "#60a5fa",

    "JavaScript": "#facc15",
    "TypeScript": "#facc15",
    "PHP": "#facc15",

    "Git": "#a78bfa",
    "GitHub": "#a78bfa",
    "Figma": "#a78bfa",
    "Vercel": "#a78bfa",
    "Procreate": "#a78bfa",

    "GroqAPI": "#f9a8d4",
}

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
    const controls = useAnimation();
    const trackRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

       useEffect(() => {
        if (!trackRef.current) return;

        const totalWidth = trackRef.current.scrollWidth / 2;

        controls.start({
            x: -totalWidth,
            transition: {
                duration: 10,
                ease: "linear",
            }
        });
    }, [controls, project.images]);

    return (
        <section id="projects" className="px-6 sm:px-14 lg:px-24 py-25 bg-black/50">
            <motion.p 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5}}
                
                className="text-green-400 text-[10px] font-normal tracking-widest uppercase mb-3"
            >
                Highlighted
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
                        transition={{duration: 0.5, ease: "easeIn"}}
                        className={`rounded-2xl border p-4 flex flex-col gap-4 ${
                            project.isEmpty
                                ?"backdrop-blur-lg border-white/50 bg-black/30 border-dashed min-h-70"
                                :"backdrop-blur-lg border-white/50 bg-black/30 min-h-auto"
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
                                            key={hoveredImage ?? project.images?.[0] ?? ""}
                                            src={hoveredImage ?? project.images?.[0] ?? ""}
                                            alt="Preview"
                                            initial={{opacity:0}}
                                            animate={{opacity:1}}
                                            exit={{opacity:0}}
                                            transition={{duration: 0.3, ease: "easeInOut"}}
                                            className="w-full h-full object-cover"
                                        />
                                        </AnimatePresence>
                                    </div>
                                    <div className="flex flex-col gap-2 lg:gap-2 flex-1">
                                        <h3 className="text-white font-semibold text-4xl lg:text-5xl mt-3">{project.title}</h3>
                                        <p className="text-white/60 text-sm leading-relaxed max-w-xl text-justify">
                                            {project.description}
                                        </p>
                                    
                                        {project.images &&  project.images.length > 0 && (
                                            <div 
                                                className="relative overflow-hidden lg:w-160"
                                                style={{
                                                    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                                                    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                                                }}
                                                onMouseEnter={() => controls.stop()}
                                                onMouseLeave={() => {
                                                    if (!trackRef.current) return;
                                                    const totalWidth = trackRef.current.scrollWidth/2;
                                                    const currentX = x.get();
                                                    const remaining = Math.abs(currentX) % totalWidth;
                                                    const distanceLeft = totalWidth - remaining;
                                                    const remainingRatio = (totalWidth - remaining) / totalWidth;

                                                    controls.start({
                                                        x: currentX - distanceLeft,
                                                        transition: {
                                                            duration: 10 * remainingRatio, 
                                                            ease: "linear", 
                                                            repeatDelay: 0,
                                                        }
                                                    }).then(() => {
                                                        x.set(0);
                                                        controls.start({
                                                            x: -totalWidth,
                                                            transition: {
                                                                duration: 10,
                                                                ease: "linear",
                                                                repeat: Infinity,
                                                                repeatType: "loop",
                                                                repeatDelay: 0,
                                                            }
                                                        });
                                                    });
                                                }}
                                                >
                                                    <motion.div
                                                        ref={trackRef}
                                                        className="flex gap-3 w-max"
                                                        animate={controls}
                                                        style={{x}}
                                                        initial={{x:0}}
                                                    >
                                                        {project.images.map((img, i) => (
                                                            <div 
                                                                key={`a-${i}`} className={`w-60 h-35 rounded-lg overflow-hidden shrink-0 duration-300 transtition-all${
                                                                    (hoveredImage ?? project.images[0]) === img
                                                                        ? "border-green-400/60 scale-105"
                                                                        : "border-white/10 opacity-60 hover:opacity-100"
                                                                }`}
                                                                onMouseEnter={() => setHoveredImage(img)}
                                                                onMouseLeave={() => setHoveredImage(null)}
                                                                >
                                                                <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
                                                            </div>
                                                        ))}
                                                        {project.images.map((img, i) => (
                                                            <div 
                                                                key={`b-${i}`} className={`w-60 h-35 rounded-lg overflow-hidden shrink-0 duration-300 transition-all ${
                                                                    (hoveredImage ?? project.images[0]) === img
                                                                        ? "scale-105"
                                                                        : "border-white/10 opacity-60 hover:opacity-100"
                                                                }`}
                                                                onMouseEnter={() => setHoveredImage(img)}
                                                                onMouseLeave={() => setHoveredImage(null)}
                                                            >
                                                                <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                            </div>
                                        )}
                                        <div className="flex flex-row mt-auto justify-between">
                                            <div className="flex flex-wrap gap-1 mt-auto">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-sm px-2.5 py-1 rounded-lg font-medium border"
                                                        style={{color: `${TAG_COLORS[tag] ? "#ffffff" : "#000000"}cc`, borderColor: TAG_COLORS[tag] ?? "#ffffff20"}}
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