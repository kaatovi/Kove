"use client";

import { motion } from "framer-motion";
import TextType from "@/components/TextType";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero(){

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section>
            <div className="flex flex-col justify-center px-10 sm:px-14 lg:px-20 z-10 min-h-screen">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-5 w-full">

                    <div className="flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-start order-last lg:order-first">
                        <motion.div
                            initial={{opacity:0, y:20}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.5, delay:0.1}}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
                            > Hi, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-yellow-300">
                                {mounted ? (
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
                                ) : (
                                    <span className="bg-linear-to-r from-green-300 to-yellow-300">Kurt.</span>
                                )}
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{opacity:0, y:20}}
                            whileInView={{opacity:1, y:0}}
                            transition={{duration:0.5, delay:0.2}}
                            className="text-white/70 text-md sm:text-xl md:text-2xl leading-relaxed font-light mb-6 max-w-xl"
                            >Code is the means. System quality is the end—security, reliability, and scalability built in from the start.
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
                    </div>
                
                    <motion.div 
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.5, delay:0.1}}
                        className="relative self-center order-first lg:order-last mb-2 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-108 lg:h-108 rounded-full overflow-hidden group shrink-0">
                    
                        <Image 
                                src="/Kurt.jpg" 
                                width={500} 
                                height={500} 
                                alt="Kurt" 
                                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                style={{ objectPosition: "center 13%" }}
                        />
                        <Image 
                            src="/kurtDraw.jpg"
                            width={500}
                            height={500}
                            alt="Kurt Drawing"
                            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            style={{ objectPosition: "center 13%" }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}