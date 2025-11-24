import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen bg-sand text-desert-dark p-10">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold mb-8 text-terracotta"
            >
                Projects
            </motion.h2>
            <div className="max-w-4xl mx-auto">
                {/* Featured Project */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/40 border border-ucsd-blue/30 rounded-xl overflow-hidden hover:bg-white/60 transition-colors duration-300 mb-8 shadow-sm"
                >
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-desert-dark">Portfolio Website</h3>
                            <span className="px-3 py-1 text-xs font-medium text-white bg-ucsd-blue rounded-full">Active</span>
                        </div>
                        <p className="text-desert-dark/80 mb-6 leading-relaxed">
                            A personal portfolio website built to showcase my academic and professional journey.
                            Designed with a custom "San Diego" theme reflecting my background.
                            Features a responsive design, smooth animations, and a modern tech stack.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2 py-1 text-xs border border-ucsd-blue text-ucsd-blue font-medium rounded">React</span>
                            <span className="px-2 py-1 text-xs border border-ucsd-blue text-ucsd-blue font-medium rounded">TypeScript</span>
                            <span className="px-2 py-1 text-xs border border-ucsd-blue text-ucsd-blue font-medium rounded">Tailwind CSS</span>
                            <span className="px-2 py-1 text-xs border border-ucsd-blue text-ucsd-blue font-medium rounded">Framer Motion</span>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://github.com/acjeter/acjeter.github.io" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:text-sunset font-medium transition-colors">
                                View Source →
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Placeholder for future projects */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center text-desert-dark/40 py-12 border-t border-desert-dark/10"
                >
                    <p>More projects coming soon...</p>
                </motion.div>
            </div>
            <div className="mt-8">
                <a href="/" className="text-ocean hover:text-ocean-dark underline">← Back to Home</a>
            </div>
        </div>
    );
};

export default Projects;
