"use client";

import {motion} from "framer-motion";
import Image from "next/image";

export default function Contact() {
    return(
        <section id = "contact" className="px-6 sm:px-14 lg:px-24 py-25 border-b border-white/30 bg-black/50">
            <motion.p
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5}}
                className="text-green-400 text-[10px] font-normal tracking-widest uppercase mb-3"
            >
                Contact
            </motion.p>

            <motion.h2
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.1}}
                className="text-4xl md:text-5xl font-bold mb-6"
            >
                Let&apos;s work together
            </motion.h2>

            <motion.p
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.2}}
                className="text-white/60 text-lg font-light leading-relaxed max-w-xl mb-10 text-justify"
            >
                Open to full-time developer roles and freelance projects.
                Feel free to reach out or use the AI chat widget to ask me anything instantly.
            </motion.p>
           
            <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.3}}
                className="flex flex-wrap gap-4"
            > 
                    <a href ="mailto:ktav3316@gmail.com"
                        className="w-fit"
                        aria-label="Send Email"
                    >
                        <Image 
                            src="/email.svg" 
                            alt="" 
                            width={36} 
                            height={36} 
                            className="invert hover:scale-120 duration-200" />
                    </a>
                    <a href ="https://github.com/kaatovi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit"
                        aria-label="View GitHub Profile"
                    >
                        <Image 
                            src="/github.svg"
                            alt=""
                            width={36}
                            height={36} 
                            className="invert hover:scale-120 duration-200" />
                    </a>   
                    <a href="https://www.linkedin.com/in/ktav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit"
                        aria-label="View LinkedIn Profile"
                    >
                        <Image 
                            src="linkedin.svg" 
                            alt="" 
                            width="36" 
                            height={36} 
                            className="invert hover:scale-120 duration-200"/>
                    </a>
            </motion.div>

        </section>
    );
}