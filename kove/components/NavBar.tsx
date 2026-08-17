import Image from "next/image";

export default function NavBar() {
    return (
        <nav className ="fixed bg-transparent shadow-2xl backdrop-blur-lg top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-14 py-2">
            
            <div className="flex flex-row items-center px-0 sm:px-5 md:px-0 lg:px-10">
                <Image 
                src="/koveBNW.png"
                alt="Kove Logo"
                width={40}
                height={40}
                className="invert mr-1"
            />
                <span className="hidden md:flex items-center text-white font-bold text-lg">
                    Kove<span className="text-green-400">.</span> <span className="text-xs text-white/40 pl-1">v.0.1.0</span>
                </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-white/50 lg:px-10">
                <a href="https://drive.google.com/file/d/1a9rhSStJh77P8v_6mDvFz5wvF2khCPnW/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative text-md lowercase tracking-widest text-white transition-colors pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-green-400 after:scale-x-30 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">
                    Resume<span className="text-green-400">.</span>
                </a>
                <a href="#projects" className="relative text-md lowercase tracking-widest text-white transition-colors pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-green-400 after:scale-x-30 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">
                    Projects<span className="text-green-400">.</span>
                </a>
                <a href="#about" className="relative text-md lowercase tracking-widest text-white transition-colors pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-green-400 after:scale-x-30 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">
                    About<span className="text-green-400">.</span>
                </a>
                <a href="#contact" className="relative text-md lowercase tracking-widest text-white transition-colors pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-green-400 after:scale-x-30 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">
                    Contact<span className="text-green-400">.</span>
                </a>
            </div>
        </nav>
    );
}