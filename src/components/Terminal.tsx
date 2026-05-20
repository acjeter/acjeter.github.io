import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
        { cmd: 'init', output: 'Welcome to the Sonoran Coast terminal. Type "help" for commands.' }
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isOpen]);

    // Focus input when clicking anywhere in terminal
    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    // Handle Click Outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode = '';

        switch (cleanCmd) {
            case 'help':
                output = (
                    <div className="flex flex-col gap-1">
                        <span>Available commands:</span>
                        <span className="text-terracotta font-bold">about</span> - Who am I?
                        <span className="text-terracotta font-bold">projects</span> - View my work
                        <span className="text-terracotta font-bold">contact</span> - Get in touch
                        <span className="text-terracotta font-bold">clear</span> - Clear the terminal
                        <span className="text-terracotta font-bold">game</span> - Start a mini-game (Coming Soon)
                    </div>
                );
                break;
            case 'about':
                output = "Hi, I'm Andrew: a Computer Engineering student at UC San Diego focused on software, hardware, systems thinking, and engineering leadership.";
                break;
            case 'projects':
                output = (
                    <div>
                        My projects include this portfolio website, a HoloLens ASL translator, a RISC-style processor, a ray tracer, a FPGA implementation of a simplified SHA-256 and Bitcoin hashing algorithm, and more. <br />
                        Type <span className="text-ocean font-bold">gui</span> to visit the full Projects page.
                    </div>
                );
                break;
            case 'contact':
                output = "Email me at: andrewcjeter@gmail.com";
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'gui':
                output = "Navigating to Projects...";
                // In a real app we might use router navigation here, but for now just text
                window.location.href = '/projects';
                break;
            case '':
                output = '';
                break;
            default:
                output = `Command not found: ${cleanCmd}. Type "help" for assistance.`;
        }

        setHistory(prev => [...prev, { cmd, output }]);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                onClick={(e) => {
                    e.stopPropagation(); // Prevent immediate closing
                    setIsOpen(!isOpen);
                }}
                className="focus-ring fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-[var(--radius-pill)] bg-ink-900 px-5 py-3 font-mono text-sm font-bold text-sand-50 shadow-[var(--shadow-soft-desert)] hover:bg-pacific-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open Terminal"
            >
                {/* Simple Terminal Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
            </motion.button>

            {/* Terminal Window Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={containerRef}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-20 right-4 z-50 flex h-96 w-[calc(100vw-2rem)] max-w-96 flex-col overflow-hidden rounded-[1.5rem] border border-clay-500/35 bg-ink-900/95 font-mono text-sm shadow-[var(--shadow-soft-desert)] backdrop-blur-md md:right-6 md:w-96"
                        onClick={handleTerminalClick}
                    >
                        {/* Header */}
                        <div className="flex select-none items-center justify-between border-b border-sand-50/10 bg-white/5 p-3 text-xs text-sand-50/60">
                            <span>visitor@desert:~</span>
                            <div className="flex gap-2">
                                <div className="h-3 w-3 rounded-full bg-clay-500/70"></div>
                                <div className="h-3 w-3 rounded-full bg-gold-500/70"></div>
                                <div className="h-3 w-3 rounded-full bg-saguaro-500/70"></div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 text-sand-50 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-clay-500">
                            {history.map((entry, i) => (
                                <div key={i} className="mb-2">
                                    {entry.cmd !== 'init' && (
                                        <div className="flex text-pacific-500">
                                            <span className="mr-2">➜</span>
                                            <span>{entry.cmd}</span>
                                        </div>
                                    )}
                                    <div className="break-words whitespace-pre-wrap text-sand-50/90">
                                        {entry.output}
                                    </div>
                                </div>
                            ))}

                            {/* Input Line */}
                            <div className="flex items-center text-pacific-500">
                                <span className="mr-2">➜</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 border-none bg-transparent text-sand-50 outline-none placeholder-sand-50/30"
                                    autoFocus
                                    spellCheck={false}
                                    autoComplete="off"
                                />
                            </div>
                            <div ref={bottomRef} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
