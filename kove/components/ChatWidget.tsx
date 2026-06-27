"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import next from "next";
import Image from "next/image";

type Message = {role: "user" | "assistant"; content: string};

const STARTER_PROMPTS = [
    "What's your strongest project?",
    "What tech stack do you know?",
    "Are you currently open to full-time roles?",
    "Tell me about your background",
];

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    useEffect(() => {
        if(isOpen) setTimeout(() => inputRef.current?.focus(), 300);
    }, [isOpen]);

    async function sendMessage(text:string) {
        if(!text.trim() || isLoading) return;  

        const userMessage: Message = {role: "user", content: text};
        const nextMessages = [...messages, userMessage];
        setMessages(nextMessages);
        setInput("");
        setIsLoading(true);

        setMessages((prev) => [...prev, {role: "assistant", content: ""}]);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({messages: nextMessages}),
            })

            if(!res.body) throw new Error("No response body");

            const reader = res.body.getReader();
            const decoder = new TextDecoder();

            while(true) {
                const {done, value} = await reader.read();
                if(done) break;
                const chunk = decoder.decode(value);
                setMessages((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                        role: "assistant",
                        content: updated[updated.length - 1].content + chunk,
                    };
                    return updated;
                });
            }
        } catch {
            setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                    role: "assistant",
                    content: "Sorry, something went wrong. Please try again.",
                };
                return updated;
            });
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity:0, y:16, scale:0.96}}
                        animate={{opacity:1, y:0, scale:1}}
                        exit={{opacity:1, y:16, scale:0.96}}
                        transition={{type: "spring", stiffness:320, damping:28}}
                        className="w-[340px] rounded-2xl border border-white/20 bg-transparent backdrop-blur-lg shadow-2xl overflow-hidden flex flex-col"
                        style={{maxHeight: "480px"}}
                    >
                        <div className="flex items-center gap-1.5 px-3 py-3 border-b border-white/10 bg-black/40">
                            <div className="w-8 h-8 rounded-full bg-black/40 border flex items-center justify-center text-white text-xs font-bold">
                                <Image 
                                    src="/Screenshots/koveBNW.png"
                                    alt="KA"
                                    width="24"
                                    height="24"
                                    className="invert"
                                />
                            </div>
                            <p className="text-white text-sm font-medium leading-none py-2">
                                Kaatov`s Assistant <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-yellow-300">v.0.1.0</span>
                            </p>
                            <p className="flex text-white/40 text-xs self-center pl-4">
                                Powered by Groq
                            </p>    
                        </div>

                        <div>
                        </div>

                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm [&::-webkit-scrollbar]:hidden">
                            {messages.length === 0 ? (
                                <div className="space y-3">
                                    <p className="text-white/80 text-xs text-center mb-5">
                                        Hi there! Ask me anything about Kurt!
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        {STARTER_PROMPTS.map((prompt) => (
                                            <motion.button
                                                key={prompt}
                                                whileHover={{scale:1.02}}
                                                whileTap={{scale:0.98}}
                                                onClick={() => sendMessage(prompt)}
                                                className="text-left text-xs text-white/60 border border-white/10 rounded-xl px-3 py-2 hover:border-green-500/50 hover:text-white/90 transition-all"
                                            >
                                                {prompt}
                                            </motion.button>
                                        ))}    
                                    </div>  
                                </div>
                            ) : (
                                messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`flex ${msg.role === "user" ? "justify-end" :"justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                                                msg.role === "user"
                                                    ? "bg-green-600 text-white rounded-br-sm"
                                                    : "bg-white/8 text-white/80 rounded-bl-sm"
                                            }`}
                                        >

                                            {msg.content || (
                                                <span className="flex gap-1 items-center h-4">
                                                    <span className="w-1 h-1 rounded-full bg-black/30 animate-bounce [animation-delay:0ms]" />
                                                    <span className="w-1 h-1 rounded-full bg-black/30 animate-bounce [animation-delay:200ms]"/>
                                                    <span className="w-1 h-1 rounded-full bg-black/30 animate-bounce [animation-delay:400ms]"/>
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                            <div ref={bottomRef} />
                        </div>

                        <div className="px-3 py-3 border-t border-white/10 bg-black/40 flex gap-2">
                            <input 
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                                placeholder="Ask a question..."
                                disabled={isLoading}
                                className="flex-1 bg-white/5 text-white text-sm placeholder-white/25 rounded-xl px-3 py-2 outline-none border border-white/10 focus:border-green-500/60 transition-colors"
                            />
                            <motion.button
                                whileTap={{scale:0.9}}
                                onClick={()=> sendMessage(input)}
                                disabled={isLoading || !input.trim()}
                                className="w-8 h-8 rounded-xl bg-green-600 hover:bg-transparent border border-transparent hover:border-green-400/30 duration-200 flex items-center justify-center disabled:opacity-30 transition-all"
                            >
                                →
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{scale:1.06}}
                whileTap={{scale:0.94}}
                onClick={() => setIsOpen((v) => !v)}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl border border-transparent bg-green-600 hover:bg-transparent hover:backdrop-blur-lg hover:border-green-400/30 text-white text-xs font-bold shadow-lg shadow-green-900/40 transition-colors"
            >
                {isOpen ? "Close" : "Ask Me Anything"}
            </motion.button>
        </div>
    );
}