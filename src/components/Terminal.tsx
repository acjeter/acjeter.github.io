import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
        { cmd: 'init', output: 'Welcome to the Desert Terminal. Type "help" for commands.' }
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
                output = "Hi! I'm Andrew, a Computer Engineering student at UC San Diego. I'm from San Diego, California. I love to learn new things, spend time with those I care about, and find new ways to challenge myself.";
                break;
            case 'projects':
                output = (
                    <div>
                        My projects include this portfolio website, a HoloLens ASL translator, a RISC-V processor, a ray tracer, a FPGA implementation of a simplified SHA-256 and Bitcoin hashing algorithm, and more. <br />
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
                onClick={(e) => {
                    e.stopPropagation(); // Prevent immediate closing
                    setIsOpen(!isOpen);
                }}
                className="fixed bottom-6 right-6 p-4 bg-desert-dark text-sand rounded-full shadow-lg hover:bg-terracotta transition-colors z-50 border-2 border-sand/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
                        className="fixed bottom-20 right-6 w-80 md:w-96 h-96 bg-desert-dark/95 backdrop-blur-sm rounded-lg border-2 border-terracotta shadow-2xl overflow-hidden flex flex-col z-50 font-mono text-sm"
                        onClick={handleTerminalClick}
                    >
                        {/* Header */}
                        <div className="bg-desert-dark/50 p-2 border-b border-white/10 flex justify-between items-center text-xs text-sand/60 select-none">
                            <span>visitor@desert:~</span>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden text-sand scrollbar-thin scrollbar-thumb-terracotta scrollbar-track-transparent">
                            {history.map((entry, i) => (
                                <div key={i} className="mb-2">
                                    {entry.cmd !== 'init' && (
                                        <div className="flex text-ocean/80">
                                            <span className="mr-2">➜</span>
                                            <span>{entry.cmd}</span>
                                        </div>
                                    )}
                                    <div className="text-sand/90 break-words whitespace-pre-wrap">
                                        {entry.output}
                                    </div>
                                </div>
                            ))}

                            {/* Input Line */}
                            <div className="flex items-center text-ocean">
                                <span className="mr-2">➜</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 bg-transparent border-none outline-none text-sand placeholder-sand/30"
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
