import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Terminal from '../components/Terminal';
import { Badge, ButtonLink, Card, PageShell, PhotoFrame, Section, SectionHeading, TextLink } from '../components/design-system';

const annotations = [
    {
        title: 'Reliability',
        body: 'Small implementation choices affect the dependability of larger systems.',
        tone: 'warm',
    },
    {
        title: 'Ethics',
        body: 'Reliability is a design responsibility, not a checkbox.',
        tone: 'natural',
    },
    {
        title: 'Invisible layers',
        body: 'The unseen parts of computing determine behavior when it matters.',
        tone: 'cool',
    },
];

const featuredProjects = [
    {
        title: 'Portfolio Website',
        description: 'This site is both a portfolio and a design system experiment: a place to present my work, sharpen the way I explain engineering, and make the page feel more like me.',
        tags: ['React', 'TypeScript', 'GitHub Pages'],
        to: '/projects',
    },
    {
        title: 'HoloLens ASL Translator',
        description: 'A Microsoft HoloLens 2 project exploring ASL translation through computer vision, Unity, and Agile team development.',
        tags: ['Microsoft HoloLens 2', 'Python', 'Unity', 'Agile'],
        to: '/projects',
    },
    {
        title: 'RISC-Style ISA Processor (AJUSH)',
        description: 'A custom 9-bit ISA processor, assembler, and verification workflow that made low-level behavior feel concrete.',
        tags: ['SystemVerilog', 'Python', 'ModelSim'],
        to: '/projects',
    },
];

const highlights = [
    {
        title: 'Dependable systems',
        description: 'Software and hardware decisions that hold up when larger systems depend on small details.',
    },
    {
        title: 'Ethical engineering',
        description: 'Technical judgment grounded in safety, trust, and the real effects systems have beyond the room.',
    },
    {
        title: 'Invisible layers',
        description: 'Memory, synchronization, architecture, and the low-level behavior most users never directly see.',
    },
];

const toneClasses = {
    warm: 'border-clay-500/30 bg-white-soft/80 text-clay-700',
    natural: 'border-saguaro-500/30 bg-white-soft/80 text-saguaro-700',
    cool: 'border-pacific-500/30 bg-white-soft/80 text-pacific-700',
};

const Home: React.FC = () => {
    useEffect(() => {
        document.title = 'Home – Andrew Jeter';
    }, []);

    return (
        <PageShell>
            <div className="pointer-events-none absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-pacific-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-[-8rem] top-0 h-96 w-96 rounded-full bg-gold-500/14 blur-3xl" />

            <header className="section-shell flex items-center justify-between py-6">
                <Link to="/" className="focus-ring rounded-sm text-base font-extrabold tracking-[-0.02em] text-ink-900">
                    Andrew Jeter
                </Link>
                <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-bold text-text-muted md:flex">
                    <Link className="focus-ring rounded-sm hover:text-action-primary" to="/projects">Projects</Link>
                    <Link className="focus-ring rounded-sm hover:text-action-primary" to="/courses">Courses</Link>
                    <a className="focus-ring rounded-sm hover:text-action-primary" href="/Andrew-Jeter-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    <a className="focus-ring rounded-sm hover:text-action-primary" href="mailto:andrewcjeter@gmail.com">Contact</a>
                </nav>
            </header>

            <Section className="relative grid min-h-[calc(100vh-6rem)] items-center gap-14 pt-10 md:grid-cols-[1.05fr_0.95fr] md:pt-16">
                <div className="absolute left-[58%] top-20 hidden h-[34rem] w-px bg-gold-500/40 md:block" />
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="eyebrow mb-5">UC San Diego / Computer Engineering / Dependable Systems</p>
                    <h1 className="display-heading max-w-4xl text-7xl font-semibold text-ink-900 md:text-8xl lg:text-[8.75rem]">
                        Andrew Jeter
                    </h1>
                    <p className="mt-7 max-w-2xl font-display text-2xl leading-snug text-text-muted md:text-3xl">
                        Computer Engineering senior at UC San Diego interested in dependable systems software,
                        hardware-aware engineering, and the technical decisions that make software trustworthy.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <ButtonLink to="/projects">View Projects</ButtonLink>
                        <ButtonLink href="/Andrew-Jeter-Resume.pdf" target="_blank" rel="noopener noreferrer" variant="secondary">
                            View Resume
                        </ButtonLink>
                        <ButtonLink to="/courses" variant="ghost">Academic Journey</ButtonLink>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Badge tone="cool">UC San Diego</Badge>
                        <Badge tone="warm">Raytheon Summer 2026</Badge>
                        <Badge tone="natural">Phoenix-based next chapter</Badge>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="relative"
                >
                    <PhotoFrame
                        label="Square Headshot"
                        alt="Andrew Jeter portrait placeholder"
                        className="aspect-square w-full max-w-[25rem] rounded-[2.5rem] md:ml-12"
                    />
                    <div className="surface-card absolute -bottom-10 right-0 hidden w-64 rounded-[1.5rem] p-5 md:block">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-action-primary">Reliability</p>
                        <p className="mt-3 text-sm leading-6 text-text-muted">
                            Small implementation choices shape larger systems.
                        </p>
                    </div>
                </motion.div>
            </Section>

            <Section className="grid gap-6 pt-4 md:grid-cols-[0.82fr_0.18fr] md:items-end">
                <PhotoFrame
                    label="Wide UCSD / San Diego Photo"
                    alt="UC San Diego or San Diego landscape placeholder"
                    className="min-h-[18rem] rounded-[2.75rem] md:min-h-[24rem]"
                />
                <p className="font-display text-xl leading-relaxed text-text-muted md:-mb-2">
                    A place-based pause for San Diego: campus architecture, coastline light, Geisel at a good hour,
                    or a natural scene that actually feels connected to this chapter.
                </p>
            </Section>

            <Section id="about" className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
                <div>
                    <SectionHeading eyebrow="About" title="Systems that work when details matter.">
                        <p>
                            I&apos;m drawn to the parts of computing that sit below the surface: systems software, memory,
                            synchronization, and the engineering habits that make larger systems reliable.
                        </p>
                        <p className="mt-4">
                            I am building toward software and hardware engineering leadership grounded in technical rigor,
                            ethical responsibility, and the trust people place in systems they rarely inspect directly.
                        </p>
                    </SectionHeading>
                </div>

                <div className="grid gap-4 md:pt-20">
                    {annotations.map((annotation, index) => (
                        <div
                            key={annotation.title}
                            className={`rounded-[1.25rem] border p-5 ${toneClasses[annotation.tone as keyof typeof toneClasses]} ${index === 1 ? 'md:translate-x-10' : ''}`}
                        >
                            <p className="font-mono text-xs uppercase tracking-[0.22em]">{annotation.title}</p>
                            <p className="mt-3 text-sm leading-6 text-text-muted">{annotation.body}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="grid gap-5 md:grid-cols-[0.36fr_0.64fr]">
                <PhotoFrame
                    label="Project / Hardware Visual"
                    alt="Engineering project or hardware visual placeholder"
                    className="min-h-[16rem] rounded-[1.75rem]"
                />
                <div className="grid gap-4 md:grid-cols-3">
                    {highlights.map((highlight, index) => (
                        <div key={highlight.title} className={`border-t border-clay-700/20 pt-5 ${index === 1 ? 'md:mt-12' : ''} ${index === 2 ? 'md:mt-24' : ''}`}>
                            <p className="font-mono text-xs uppercase tracking-[0.22em] text-action-primary">0{index + 1}</p>
                            <h3 className="mt-4 font-display text-3xl font-semibold leading-none text-ink-900">{highlight.title}</h3>
                            <p className="mt-4 leading-7 text-text-muted">{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="featured">
                <div className="grid gap-8 md:grid-cols-[0.7fr_0.3fr] md:items-end">
                    <SectionHeading eyebrow="Featured work" title="Project work as evidence." />
                    <p className="body-copy">
                        
                    </p>
                </div>
                <div className="mt-10 grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
                    {featuredProjects.map((project) => (
                        <Card
                            key={project.title}
                            className={`flex min-h-64 flex-col ${project.title === 'Portfolio Website' ? 'md:row-span-2 md:min-h-[24rem]' : ''}`}
                        >
                            <h3 className="display-heading text-4xl font-semibold text-ink-900">{project.title}</h3>
                            <p className="mt-4 flex-1 leading-8 text-text-muted">{project.description}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag}>{tag}</Badge>
                                ))}
                            </div>
                            <TextLink to={project.to} className="mt-7 inline-flex">
                                Explore project details
                            </TextLink>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="pb-32">
                <Card className="grid gap-8 bg-ink-900/95 text-sand-50 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                        <p className="eyebrow text-gold-500">Contact</p>
                        <h2 className="display-heading mt-3 text-4xl md:text-6xl">Let&apos;s connect.</h2>
                        <p className="mt-5 max-w-2xl text-sand-100/80">
                            Reach out if you want to talk software engineering, hardware engineering, systems work, outreach,
                            or anything connected to building dependable technology.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <ButtonLink href="mailto:andrewcjeter@gmail.com">Email</ButtonLink>
                        <ButtonLink href="https://linkedin.com/in/andrewcjeter" target="_blank" rel="noopener noreferrer" variant="ghost" className="border-sand-50/30 text-sand-50 hover:bg-sand-50/10">
                            LinkedIn
                        </ButtonLink>
                        <ButtonLink href="https://github.com/acjeter" target="_blank" rel="noopener noreferrer" variant="ghost" className="border-sand-50/30 text-sand-50 hover:bg-sand-50/10">
                            GitHub
                        </ButtonLink>
                    </div>
                </Card>
            </Section>

            <Terminal />
        </PageShell>
    );
};

export default Home;
