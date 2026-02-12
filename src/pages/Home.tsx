import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Terminal from '../components/Terminal';

const Home: React.FC = () => {
    useEffect(() => {
        document.title = 'Home – Andrew Jeter';
    }, []);
    return (
        <div className="min-h-screen bg-sand text-desert-dark font-sans overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-ocean/20 to-transparent z-0"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-terracotta/10 to-transparent z-0"></div>

            <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-ucsd-blue"
                >
                    Andrew Jeter
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl text-desert-dark/80 mb-8 max-w-2xl"
                >
                    <p className="mb-2">Senior Computer Engineering B.S. Student at <span className="text-ucsd-blue font-semibold">UC San Diego</span></p>
                    <p className="text-lg">San Diego, CA</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col items-center gap-6"
                >
                    {/* Navigation Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/projects" className="px-6 py-3 bg-terracotta text-white rounded-lg hover:bg-sunset transition-colors duration-300 shadow-lg hover:shadow-xl">
                            View Projects
                        </Link>
                        <a href="/Andrew-Jeter-Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-terracotta text-white rounded-lg hover:bg-sunset transition-colors duration-300 shadow-lg hover:shadow-xl">
                            View Resume
                        </a>
                        <Link to="/courses" className="px-6 py-3 bg-terracotta text-white rounded-lg hover:bg-sunset transition-colors duration-300 shadow-lg hover:shadow-xl">
                            View Courses
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="mailto:andrewcjeter@gmail.com" className="px-6 py-3 border border-ucsd-blue text-ucsd-blue rounded-lg hover:bg-ucsd-blue/10 transition-colors duration-300">
                            Email
                        </Link>
                        <Link to="https://linkedin.com/in/andrewcjeter" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-ucsd-blue text-ucsd-blue rounded-lg hover:bg-ucsd-blue/10 transition-colors duration-300">
                            LinkedIn
                        </Link>
                        <Link to="https://github.com/acjeter" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-ucsd-blue text-ucsd-blue rounded-lg hover:bg-ucsd-blue/10 transition-colors duration-300">
                            GitHub
                        </Link>
                    </div>
                </motion.div>
            </div>

            <Terminal />
        </div >
    );
};

export default Home;
