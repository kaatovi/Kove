"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

type introProps = {
    onEnter: () => void;
};

type Particle = {
        id: number;
        x: number;
        size: number;
        duration: number;
        delay: number;
};

type Ripple = {
    id: number;
    x: number;
};

export default function Intro({onEnter}: introProps) {
    const [rippling, setRippling] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [ripples, setRipples] = useState<Ripple[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setParticles(
                Array.from({length:40}, (_, i) => ({
                    id: i,
                    x: Math.random() * 100,
                    size: Math.random() * 12 + 10,
                    duration: Math.random() * 2 + 2,
                    delay: Math.random() * 10,
                }))
            );
        }, 0);
        return() => clearTimeout(timer);
    }, []);

    function handleClick() {
        setRippling(true);
    }

    function handleBubbleStart(x: number) {
        const id = Date.now() + Math.random();
        setRipples(prev => [...prev, {id, x}]);
        setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== id));
        }, 1200);
    }
    
    return (
        <motion.div
            exit={{opacity:0, scale:1.05}}
            transition={{duration:1, ease: "easeInOut"}}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] overflow-hidden"
            style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(rgba(255,255,255,0.13) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
            }}
        >
            {particles.map((p, index) => (
                <motion.div
                    key={`particle-${index}`}
                    initial={{y:0, opacity:0, scale:1}}
                    animate={{
                        y:[25, -225],
                        opacity:[1,0.5,0],
                        scale:[1.2, 0.5, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                    onAnimationIteration={() => handleBubbleStart(p.x)}
                    style={{
                        position: "absolute",
                        bottom: "0%",
                        left: `${p.x}%`,
                        width: p.size * 0.9,
                        height: p.size,
                        borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%",
                        background: "radial-gradient(ellipse at 40% 35%, rgba(34,197,94,0.5) 80%, rgba(20,150,70,0.0) 100%)",
                        boxShadow: "0 0 8px 2px rgba(74,222,128,0.3), inset 0 0 4px rgba(255,255,255,0.2)",
                        filter: "blur(0.1px)",
                    }}
                />
            ))}
            
            {Array.from({length: 20}).map((_, i) => (
                <motion.div
                    key={`wave-${i}`}
                    animate={{
                        scaleY: [1, 2, 1, 3, 1, 2, 1],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.9,
                    }}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: `${(i / 7) * 100}%`,
                        transformOrigin: "bottom",
                        width: `${100 / 3}%`,
                        height: "6px",
                        borderRadius: "50% 50% 50% 0",
                        background: "radial-gradient(ellipse at 50% 0%, rgba(74,222,128,0.6) 0%, rgba(34,197,94,0.7) 50%, rgba(20,120,60,0.8) 100%)",
                        boxShadow: "0 0 0px 3px rgba(74,222,128,0.1), 0 0 40px 10px rgba(74,222,128,0.1)",
                        pointerEvents: "none",
                    }}
                />
            ))}

            {ripples.map((r) => (
                <motion.div
                    key={r.id}
                    initial={{ scaleX: 0, opacity: 0.8 }}
                    animate={{ scaleX: 4, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{
                        position: "absolute",
                        bottom: "6px",
                        left: `${r.x}%`,
                        transform: "translateX(-50%)",
                        width: "120px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "radial-gradient(ellipse, rgba(74,222,128,0.6) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }}
                />
            ))}

            <AnimatePresence>
                {rippling && (
                    <motion.div
                        initial={{scale:0, opacity:1}}
                        animate={{scale:6, opacity:0}}
                        transition={{duration:1, ease:"easeInOut"}}
                        onAnimationComplete={onEnter}
                        className="absolute w-64 h-64 rounded-full bg-green-500/30 pointer-events-none"
                    />
                )}
            </AnimatePresence>

            <motion.div
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.6, ease: "easeOut"}}
                className="flex flex-col items-center gap-10"
            >
                <motion.button
                    onClick={handleClick}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    whileHover={{scale:1.2}}
                    whileTap={{scale:0.95}}
                    className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center ease-out"
                    style={{
                        filter: "drop-shadow(0px 0px 20px rgba(74,222,128,0.3))",
                    }}
                >
                    <Image
                        src="/koveColor.png"
                        alt="Kove Logo"
                        width={200}
                        height={200}    
                    />
                </motion.button>
            </motion.div>
        </motion.div>
    );
}