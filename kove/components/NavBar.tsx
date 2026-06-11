export default function NavBar() {
    return (
        <nav className ="fixed bg-transparent shadow-2xl backdrop-blur-lg top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-16 py-5">
            <span className="text-white font-bold text-lg tracking-tight">
                Kove<span className="text-green-400">.</span>
            </span>

            <div className="flex items-center gap-6 text-sm text-white/50">
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
        </nav>
    );
}