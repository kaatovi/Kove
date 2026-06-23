"use client";

import {motion} from "framer-motion";

type introProps = {
    onEnter: () => void;
};

export default function Intro({onEnter}: introProps) {
    return (
        <motion.div
            exit={{opacity:0, scale:1.05}}
            transition={{duration:0.6, ease: "easeInOut"}}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808]"
        >
            <motion.div
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.6, ease: "easeOut"}}
                className="flex flex-col items-center gap-10"
            >
                <motion.button
                    onClick={onEnter}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:0.4, duration:0.5}}
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                    className="w-24 h-24 rounded-2xl bg-green-600/20 border border-green-500/30 flex items-center justify-center"
                >
                    <span className="text-green-400 text-3xl font-bold">K</span>
                </motion.button>

                <motion.div
                    animate={{opacity:[0.3, 1,0.3]}}
                    transition={{duration:2, repeat: Infinity, ease: "easeInOut"}}
                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                />
            </motion.div>
        </motion.div>
    );
}