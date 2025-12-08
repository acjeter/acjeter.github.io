import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    status: 'Active' | 'Completed' | 'Archived';
    description: string;
    tags: string[];
    link: string;
    linkText: string;
}

const projects: Project[] = [
    // Portfolio Website
    {
        title: 'Portfolio Website',
        status: 'Active',
        description: 'A personal portfolio website built to showcase my academic and professional journey. Designed with a custom "San Diego" theme reflecting my background. Features a responsive design, smooth animations, and a modern tech stack.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://github.com/acjeter/acjeter.github.io',
        linkText: 'View Source Code on GitHub →'
    },
    // CSE 118 Final Project
    {
        title: 'HoloLens ASL Translator | CSE 118 Project',
        status: 'Active',
        description: 'A HoloLens application built to translate specific American Sign Language into text using computer vision and machine learning. Our AI model was trained on a dataset of ASL frames, and we are currently in the process of refining it to be able to train on our own dataset generated from the HoloLens. Our HoloLens team is working on utilizing a geofenced box as a space for where the ASL input data will be collected. Another primary learning objective is to efficiently develop our project in a team following Agile with Scrum methodology, and using GitLab for version control.',
        tags: ['Python', 'Unity', 'HoloLens', 'HTML', 'TCP/IP', 'Machine Learning', 'Agile', 'Scrum', 'Git', 'GitLab'],
        link: 'https://github.com/acjeter/CSE118_Final_Project',
        linkText: 'View Source Code on GitHub →'
    },
    // CSE 110 Final Project
    {
        title: 'Basketball Physics Game | CSE 110 Project',
        status: 'Active',
        description: 'A basketball physics game built to simulate the physics of throwing a basketball. The main intention of this project was to learn how to develop software in a team, using Agile with Scrum methodology, using Git heavily for version control, and using Projects to manage issues and tasks.',
        tags: ['React', 'Konva', 'TypeScript', 'HTML', 'Agile', 'Scrum', 'Git', 'Projects'],
        link: 'https://github.com/CSE110-Coblenz/cse-110-project-team-10',
        linkText: 'View Source Code on GitHub →'
    },
    // CSE 167 Final Project
    {
        title: 'Ray Tracer | CSE 167 Final Project',
        //term: 'Winter 2025',
        status: 'Completed',
        description: 'A ray tracer built to render a scene of a reflective sphere inside of a colored box, with a camera and light sources. Working in pairs, we used C++ and C to implement the ray tracer, and used OpenGL to render the scene.',
        tags: ['C++', 'C', 'OpenGL', 'Computer Graphics'],
        link: 'https://github.com/acjeter/CSE167_Final_Project',
        linkText: 'Available on Request; Unable to Publicly Share.'
    },
    // ECE 111 Final Project
    {
        title: 'Simplified SHA256 & Bitcoin Hash | ECE 111 Final Project',
        //term: 'Special Summer Session 2025',
        status: 'Completed',
        description: 'A SHA256 hasher and Bitcoin hashing algorithm built to simulate the process of mining a block in the Bitcoin network. I used SystemVerilog to implement the SHA256 basic non-optimized version, then optimized my SHA256 implementation using parallel hashing for speedups of up to 156%. Then, I implemented a Bitcoin hashing algorithm with eight nonces using my optimized SHA256 implementation. I used Quartus Prime Lite to create the design, RTL Synthesis to synthesize my design, and ModelSim to simulate the design.',
        tags: ['SystemVerilog', 'RTL Synthesis', 'Quartus Prime Lite', 'ModelSim'],
        link: '',
        linkText: 'Available on Request; Unable to Publicly Share.'
    }
];

const Projects: React.FC = () => {
    useEffect(() => {
        document.title = 'Projects - Andrew Jeter';
    }, []);

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
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="bg-white/40 border border-ucsd-blue/30 rounded-xl overflow-hidden hover:bg-white/60 transition-colors duration-300 mb-8 shadow-sm"
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-desert-dark">{project.title}</h3>
                                <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${project.status === 'Active' ? 'bg-ucsd-blue' :
                                    project.status === 'Completed' ? 'bg-sage' : 'bg-terracotta'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>
                            <p className="text-desert-dark/80 mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 text-xs border border-ucsd-blue text-ucsd-blue font-medium rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <Link to={project.link} target="_blank" rel="noopener noreferrer" className="text-terracotta hover:text-sunset font-medium transition-colors">
                                    {project.linkText}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}

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
                <Link to="/" className="text-ocean hover:text-ocean-dark underline">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Projects;
