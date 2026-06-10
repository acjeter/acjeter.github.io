import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import { Badge, Card, PageShell, Section, SectionHeading, TextLink } from '../components/design-system';

interface Project {
    title: string;
    status: 'Active' | 'Completed' | 'Archived';
    description: string;
    tags: string[];
    affiliation: string;
    link: string;
    linkText: string;
}

// Canonical project copy lives here; homepage featured cards should stay shorter but consistent.
const projects: Project[] = [
    // Portfolio Website
    {
        title: 'Portfolio Website',
        status: 'Active',
        description: 'A personal portfolio website built to showcase my academic and professional journey. Designed with a custom "San Diego" theme reflecting my background. Features a responsive design, smooth animations, and a modern tech stack.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare', 'GitHub Pages'],
        affiliation: 'Personal',
        link: 'https://github.com/acjeter/acjeter.github.io',
        linkText: 'View Source Code on GitHub'
    },
    // CSE 198 Course Website
    {
        title: 'CSE 198: HKN Outreach Course Website',
        status: 'Active',
        description: 'A course website for CSE 198: HKN Outreach, a course that enables students to develop and present CSE lessons to socioeconomically disadvantaged K-12 San Diego students. The website is built using JustTheDocs, a Jekyll theme for documentation websites.',
        tags: ['JustTheDocs', 'Markdown', 'Jekyll', 'HTML', 'GitHub Pages'],
        affiliation: 'CSE 198: HKN Outreach',
        link: 'https://www.andrewcjeter.com/cse198-sp26',
        linkText: 'View Course Website'
    },
    // CSE 118 Final Project
    {
        title: 'HoloLens ASL Translator',
        status: 'Completed',
        description: 'A Microsoft HoloLens 2 application exploring ASL translation with computer vision, Unity, and team-based Agile development. The project used trained ASL frame data and investigated how HoloLens-captured input could be constrained and processed for translation.',
        tags: ['Python', 'Unity', 'Microsoft HoloLens 2', 'HTML', 'TCP/IP', 'Machine Learning', 'Agile', 'Scrum', 'Git', 'GitLab'],
        affiliation: 'CSE 118 Ubiquitous Computing Final Project',
        link: 'https://github.com/acjeter/CSE118_Final_Project',
        linkText: 'View Source Code on GitHub'
    },
    // CSE 141L RISC-Style ISA Processor (AJUSH)
    {
        title: 'RISC-Style ISA Processor (AJUSH)',
        status: 'Completed',
        description: 'Designed and verified a custom 9-bit, 8-bit-datapath load/store RISC-style processor (AJUSH) including a PC jump LUT, load/store DMEM interface, and start/done multi-program control. Built and validated a Python assembler by executing workloads for closest-pair Hamming distance (min/max), and signed shift-and-add multiplication (2-term + 3-term, 16/24-bit results).',
        tags: ['SystemVerilog', 'Python', 'Quartus Prime Lite', 'ModelSim', 'Git', 'RISC Architecture'],
        affiliation: 'CSE 141L Project in Computer Architecture',
        link: '',
        linkText: 'Available on Request; Unable to Publicly Share.'
    },
    // CSE 110 Final Project
    {
        title: 'Basketball Physics Game',
        status: 'Completed',
        description: 'A basketball physics game built to simulate the physics of throwing a basketball. The main intention of this project was to learn how to develop software in a team, using Agile with Scrum methodology, using Git heavily for version control, and using Projects to manage issues and tasks.',
        tags: ['React', 'Konva', 'TypeScript', 'HTML', 'Agile', 'Scrum', 'Git', 'Projects'],
        affiliation: 'CSE 110 Software Engineering Final Project',
        link: 'https://github.com/CSE110-Coblenz/cse-110-project-team-10',
        linkText: 'View Source Code on GitHub'
    },
    // CSE 167 Final Project
    {
        title: 'Ray Tracer',
        //term: 'Winter 2025',
        status: 'Completed',
        description: 'A ray tracer built to render a scene of a reflective sphere inside of a colored box, with a camera and light sources. Working in pairs, we used C++ and C to implement the ray tracer, and used OpenGL to render the scene.',
        tags: ['C++', 'C', 'OpenGL', 'Computer Graphics'],
        affiliation: 'CSE 167 Computer Graphics Final Project',
        link: 'https://github.com/acjeter/CSE167_Final_Project',
        linkText: 'View Source Code on GitHub'
    },
    // ECE 111 Final Project
    {
        title: 'Simplified SHA256 & Bitcoin Hash',
        //term: 'Special Summer Session 2025',
        status: 'Completed',
        description: 'A SHA256 hasher and Bitcoin hashing algorithm built to simulate the process of mining a block in the Bitcoin network. I used SystemVerilog to implement the SHA256 basic non-optimized version, then optimized my SHA256 implementation using parallel hashing for speedups of up to 156%. Then, I implemented a Bitcoin hashing algorithm with eight nonces using my optimized SHA256 implementation. I used Quartus Prime Lite to create the design, RTL Synthesis to synthesize my design, and ModelSim to simulate the design.',
        tags: ['SystemVerilog', 'RTL Synthesis', 'Quartus Prime Lite', 'ModelSim'],
        affiliation: 'ECE 111 Advanced Digital Design Project',
        link: '',
        linkText: 'Available on Request; Unable to Publicly Share.'
    }
];

const Projects: React.FC = () => {
    useEffect(() => {
        document.title = 'Projects - Andrew Jeter';
    }, []);

    return (
        <PageShell>
            <BackButton />
            <Section className="pt-28">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                    <SectionHeading
                        eyebrow="Projects"
                        title="Engineering work across software, systems, and hardware."
                    >
                        <p>
                            A selection of personal, academic, and team projects spanning web interfaces, mixed reality,
                            computer architecture, graphics, and digital design.
                        </p>
                    </SectionHeading>
                </motion.div>

                <div className="mt-10 grid gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                    >
                        <Card className="transition hover:-translate-y-1">
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <p className="eyebrow mb-2">{project.affiliation}</p>
                                    <h3 className="display-heading text-3xl text-ink-900 md:text-4xl">{project.title}</h3>
                                </div>
                                <Badge tone={project.status === 'Active' ? 'cool' : project.status === 'Completed' ? 'natural' : 'warm'}>
                                    {project.status}
                                </Badge>
                            </div>
                            <p className="mt-5 max-w-4xl leading-8 text-text-muted">
                                {project.description}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </div>
                            <div className="mt-7">
                                {/* Academic-integrity-sensitive projects can stay listed without forcing a dead link. */}
                                {project.link ? (
                                    <TextLink href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.linkText}
                                    </TextLink>
                                ) : (
                                    <span className="font-bold text-text-muted">
                                    {project.linkText}
                                    </span>
                                )}
                            </div>
                        </Card>
                    </motion.div>
                ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 border-t border-clay-700/10 py-12 text-center text-text-muted"
                >
                    <p>Additional work will be added as it is ready to share.</p>
                </motion.div>
            </Section>
        </PageShell>
    );
};

export default Projects;
