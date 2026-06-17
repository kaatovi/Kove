"use client";

import {motion} from "framer-motion";

export default function Contact() {
    return(
        <section id = "contact" className="px-6 md:px-16 lg:px-24 py-24">
            <motion.p
                initial={{opacity:0, y:30}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5}}
                className="text-green-400 text-sm font-medium tracking-widest uppercase mb-3"
            >
                Contact
            </motion.p>

            <motion.h2
                initial={{opacity:0, y:30}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.1}}
                className="text-4xl md:text-5xl font-bold mb-6"
            >
                Let`s work together
            </motion.h2>

            <motion.p
                initial={{opacity:0, y:30}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.2}}
                className="text-white/50 text-lg leading-relaxed max-w-xl mb-10 text-justify"
            >
                Open to full-time developer roles and interesting freelance projects.
                Feel free to reach out or use the AI chat widget to ask me anything instantly.
            </motion.p>
           
            <motion.div
                initial={{opacity:0, y:30}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, delay:0.3}}
                className="flex flex-wrap gap-4"
            > 
                    <a href ="mailto:ktav3316@gmail.com"
                        className="w-fit"
                        aria-label="Send Email"
                    >
                        <img src="/email.svg" alt="" width={36} height={36} className="invert hover:scale-120 duration-200" />
                    </a>
                    <a href ="https://github.com/kaatovi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit"
                        aria-label="View GitHub Profile"
                    >
                        <img src="/github.svg" alt="" width={36} height={36} className="invert hover:scale-120 duration-200" />
                    </a>   
                    <a href="https://www.linkedin.com/in/ktav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit"
                        aria-label="View LinkedIn Profile"
                    >
                        <img src="linkedin.svg" alt="" width="36" height={36} className="invert hover:scale-120 duration-200"/>
                    </a>
            </motion.div>

        </section>
    );
}