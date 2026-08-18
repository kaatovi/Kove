"use client";

import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const linkClass = "relative text-[12px] lowercase tracking-widest text-white transition-colors pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-green-400 after:scale-x-30 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300";
    
    return (
        <nav className ="fixed bg-transparent shadow-2xl backdrop-blur-lg top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-14 py-2">
            
            <div className="flex flex-row px-1 sm:px-5 md:px-0 lg:px-10">
                <Image 
                src="/koveBNW.png"
                alt="Kove Logo"
                width={40}
                height={40}
                className={`invert w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition-opacity duration-300 ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            />
                <span className="hidden md:flex items-center text-white font-bold text-lg">
                    Kove<span className="text-green-400">.</span> <span className="text-xs text-white/40 pl-1">v.0.1.0</span>
                </span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm text-white/50 lg:px-10">
                <a href="https://drive.google.com/file/d/1wi3JZhwsCHT3lYUcxgA4lc0O9I6wIyFi/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={linkClass}>
                    Resume<span className="text-green-400">.</span>
                </a>
                <a href="#projects" className={linkClass}>
                    Projects<span className="text-green-400">.</span>
                </a>
                <a href="#about" className={linkClass}>
                    About<span className="text-green-400">.</span>
                </a>
                <a href="#contact" className={linkClass}>
                    Contact<span className="text-green-400">.</span>
                </a>
            </div>
            <div className={`md:hidden flex flex-col gap-5 py-2 px-2 transition-all duration-300 overflow-hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                <a href="https://drive.google.com/file/d/1wi3JZhwsCHT3lYUcxgA4lc0O9I6wIyFi/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={linkClass}>
                    Resume<span className="text-green-400">.</span>
                </a>
                <a href="#projects" className={linkClass}>
                    Projects<span className="text-green-400">.</span>
                </a>
                <a href="#about" className={linkClass}>
                    About<span className="text-green-400">.</span>
                </a>
                <a href="#contact" className={linkClass}>
                    Contact<span className="text-green-400">.</span>
                </a>
            </div>
            <button 
                onClick={() => setOpen(!open)}
                className="md:hidden flex flex-col gap-1.5 p-2 ml-auto"
                aria-label="Toggle Menu"
                >
                    <span className = {`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className = {`block h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`}></span>
                    <span className = {`block h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button> 
        </nav>
    );
}