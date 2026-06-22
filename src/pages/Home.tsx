import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Terminal from '../components/Terminal';
import SkillCloud from '../components/SkillCloud';
import { Badge, ButtonLink, Card, PageShell, PhotoFrame, Section, SectionHeading, TextLink } from '../components/design-system';
import { skills } from '../data/skills';

// Homepage field notes translate personal-statement themes into concise UI annotations.
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

// Keep these summaries factual and aligned with the canonical project entries in Projects.tsx.
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

// Staggered principles for the photo-and-copy section; these should stay short enough to scan.
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

// Tone names map content intent to semantic design-system colors.
const toneClasses = {
    warm: 'border-clay-500/30 bg-white-soft/80 text-clay-700',
    natural: 'border-saguaro-500/30 bg-white-soft/80 text-saguaro-700',
    cool: 'border-pacific-500/30 bg-white-soft/80 text-pacific-700',
};

const systemTokens = [
    { label: 'sand', className: 'bg-sand-100' },
    { label: 'clay', className: 'bg-clay-500' },
    { label: 'pacific', className: 'bg-pacific-500' },
    { label: 'saguaro', className: 'bg-saguaro-500' },
    { label: 'gold', className: 'bg-gold-500' },
    { label: 'ink', className: 'bg-ink-900' },
];

const systemControls = [
    { label: 'contrast', value: '78%', className: 'w-[78%] bg-ink-900' },
    { label: 'spacing', value: '64px', className: 'w-[58%] bg-clay-500' },
    { label: 'radius', value: '28px', className: 'w-[68%] bg-pacific-500' },
];

const DesignSystemPreview: React.FC = () => (
    <div
        aria-hidden="true"
        className="mt-8 overflow-hidden rounded-[1.5rem] border border-clay-700/15 bg-sand-50/70 p-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.65)]"
    >
        <div className="flex items-start justify-between gap-4">
            <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-action-primary">Refined Sonoran Coast</p>
                <p className="mt-2 font-display text-3xl font-semibold leading-none text-ink-900">Aa</p>
            </div>
            <div className="rounded-full border border-pacific-500/20 bg-white-soft/70 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-pacific-700">
                palette / type / rhythm
            </div>
        </div>

        <div className="mt-5 grid grid-cols-6 gap-2">
            {systemTokens.map((token) => (
                <div key={token.label} className="min-w-0">
                    <div className={`h-9 rounded-full border border-ink-900/10 ${token.className}`} />
                    <p className="mt-2 truncate font-mono text-[0.58rem] uppercase tracking-[0.12em] text-text-muted">{token.label}</p>
                </div>
            ))}
        </div>

        <div className="mt-6 space-y-4 rounded-[1.25rem] border border-pacific-500/15 bg-white-soft/65 p-4">
            {systemControls.map((control) => (
                <div key={control.label}>
                    <div className="mb-2 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.16em] text-text-muted">
                        <span>{control.label}</span>
                        <span>{control.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-sand-200">
                        <div className={`h-full rounded-full ${control.className}`} />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Home: React.FC = () => {
    useEffect(() => {
        document.title = 'Home – Andrew Jeter';
    }, []);

    return (
        <PageShell>
            {/* Ambient washes keep the blueprint grid warm without competing with the content. */}
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

            {/* The desktop hero uses an explicit text/divider/photo grid so the divider stays centered. */}
            <Section className="grid min-h-[calc(100vh-6rem)] items-center gap-14 pt-10 md:grid-cols-[minmax(0,1.05fr)_1px_minmax(0,0.95fr)] md:gap-x-10 md:pt-16">
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
                        Recently graduated with a B.S. in Computer Engineering from UC San Diego. I'm interested in creating dependable systems software and the technical decisions building trustworthy software.
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
                        <Badge tone="warm">Incoming @ Raytheon</Badge>
                        <Badge tone="natural">Mesa, AZ</Badge>
                    </div>
                </motion.div>

                <div className="hidden h-[34rem] w-px self-center bg-gold-500/40 md:block" />

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="relative"
                >
                    <PhotoFrame
                        src="/images/home/headshot.png"
                        label="Square Headshot"
                        alt="Andrew Jeter headshot"
                        className="aspect-square w-full max-w-[25rem] rounded-[2.5rem] md:ml-12"
                    />
                    <div className="mt-4 max-w-sm rounded-[1.125rem] border border-clay-700/12 bg-white-soft/70 px-4 py-3 shadow-[0_18px_50px_-38px_rgb(31_37_34/0.6)] backdrop-blur-md md:absolute md:-bottom-6 md:right-0 md:mt-0 md:w-[24rem] md:max-w-none">
                        <p className="font-display text-base leading-relaxed text-text-muted">
                            <span className="md:whitespace-nowrap">&ldquo;You never fail until you stop trying.&rdquo;</span>
                            <span className="mt-2 block font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-clay-700">
                                - Albert Einstein
                            </span>
                        </p>
                    </div>
                </motion.div>
            </Section>

            {/* This wide image is the San Diego/UCSD story beat before the page turns technical. */}
            <Section className="grid gap-6 pt-4 md:grid-cols-[0.82fr_0.18fr] md:items-end">
                <PhotoFrame
                    src="/images/home/pinkgeisel.png"
                    label="Wide UCSD / San Diego Photo"
                    alt="Pink evening light on Geisel Library at UC San Diego"
                    className="min-h-[18rem] rounded-[2.75rem] md:min-h-[24rem]"
                />
                <p className="font-display text-xl leading-relaxed text-text-muted md:-mb-2">
                    On a personal note, I've always loved this Geisel pic :)
                </p>
            </Section>

            {/* About copy keeps the personal-statement influence thematic rather than autobiographical. */}
            <Section id="about" className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
                <div>
                    <SectionHeading eyebrow="About" title="I'm passionate about crafting reliable systems users can trust.">
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

            {/* Asymmetry here keeps the proof points from feeling like a generic three-card grid. */}
            <Section className="grid gap-5 md:grid-cols-[0.36fr_0.64fr]">
                <PhotoFrame
                    src="/images/home/fluffygeiselsunset.png"
                    label="Project / Hardware Visual"
                    alt="Geisel Library at sunset with soft clouds"
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

            <Section id="skills">
                <Card className="bg-white-soft/55">
                    <SkillCloud
                        skills={skills}
                        title="Technical Competencies"
                        description="A practical map of the programming, systems, hardware, lab, and engineering practices I have built through coursework and projects."
                    />
                </Card>
            </Section>

            <Section id="featured">
                <div className="grid gap-8 md:grid-cols-[0.7fr_0.3fr] md:items-end">
                    <SectionHeading eyebrow="Featured work" title="Selected work, with context." />
                    <p className="body-copy">
                        A few projects that show how I think across interfaces, people, mixed reality, architecture, and verification.
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
                            {project.title === 'Portfolio Website' ? <DesignSystemPreview /> : null}
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
                            Reach out if you want to talk software, hardware, outreach, or dependable systems work.
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
