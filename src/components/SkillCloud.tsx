import { motion } from 'framer-motion';
import { useState } from 'react';
import { skillCategories, type Skill, type SkillCategory, type SkillCategoryId } from '../data/skills';

interface SkillCloudProps {
  skills: Skill[];
  title?: string;
  description?: string;
  compact?: boolean;
  categoryFilter?: SkillCategoryId[];
}

type VisibleCategory = SkillCategory & { skills: Skill[] };

const categoryTone: Record<
  SkillCategoryId,
  {
    activeButton: string;
    inactiveButton: string;
    badgeActive: string;
    badgeIdle: string;
    eyebrow: string;
    count: string;
    skillCard: string;
    skillAccent: string;
  }
> = {
  programming: {
    activeButton: 'border-clay-500/45 bg-clay-500/10 text-ink-900 shadow-sm',
    inactiveButton: 'border-clay-500/15 bg-white-soft/60 text-desert-dark hover:border-clay-500/30 hover:bg-clay-500/8',
    badgeActive: 'bg-clay-500 text-white',
    badgeIdle: 'bg-clay-500/10 text-clay-700',
    eyebrow: 'text-clay-700',
    count: 'border-clay-500/24 bg-clay-500/10 text-clay-700',
    skillCard: 'border-clay-500/18 hover:border-clay-500/38',
    skillAccent: 'bg-clay-500',
  },
  systems: {
    activeButton: 'border-pacific-500/35 bg-pacific-500/10 text-ink-900 shadow-sm',
    inactiveButton: 'border-pacific-500/14 bg-white-soft/60 text-desert-dark hover:border-pacific-500/28 hover:bg-pacific-500/8',
    badgeActive: 'bg-pacific-500 text-white',
    badgeIdle: 'bg-pacific-500/10 text-pacific-700',
    eyebrow: 'text-pacific-700',
    count: 'border-pacific-500/22 bg-pacific-500/10 text-pacific-700',
    skillCard: 'border-pacific-500/16 hover:border-pacific-500/34',
    skillAccent: 'bg-pacific-500',
  },
  hardware: {
    activeButton: 'border-saguaro-500/45 bg-saguaro-500/12 text-ink-900 shadow-sm',
    inactiveButton: 'border-saguaro-500/15 bg-white-soft/60 text-desert-dark hover:border-saguaro-500/30 hover:bg-saguaro-500/8',
    badgeActive: 'bg-saguaro-500 text-white',
    badgeIdle: 'bg-saguaro-500/10 text-saguaro-700',
    eyebrow: 'text-saguaro-700',
    count: 'border-saguaro-500/24 bg-saguaro-500/10 text-saguaro-700',
    skillCard: 'border-saguaro-500/18 hover:border-saguaro-500/38',
    skillAccent: 'bg-saguaro-500',
  },
  process: {
    activeButton: 'border-gold-500/50 bg-gold-500/14 text-ink-900 shadow-sm',
    inactiveButton: 'border-gold-500/18 bg-white-soft/60 text-desert-dark hover:border-gold-500/35 hover:bg-gold-500/10',
    badgeActive: 'bg-gold-500 text-ink-900',
    badgeIdle: 'bg-gold-500/14 text-clay-700',
    eyebrow: 'text-clay-700',
    count: 'border-gold-500/26 bg-gold-500/12 text-clay-700',
    skillCard: 'border-gold-500/22 hover:border-gold-500/45',
    skillAccent: 'bg-gold-500',
  },
  tools: {
    activeButton: 'border-clay-500/40 bg-clay-500/10 text-ink-900 shadow-sm',
    inactiveButton: 'border-clay-500/15 bg-white-soft/60 text-desert-dark hover:border-clay-500/30 hover:bg-clay-500/8',
    badgeActive: 'bg-clay-500 text-white',
    badgeIdle: 'bg-clay-500/10 text-clay-700',
    eyebrow: 'text-clay-700',
    count: 'border-clay-500/24 bg-clay-500/10 text-clay-700',
    skillCard: 'border-clay-500/18 hover:border-clay-500/38',
    skillAccent: 'bg-clay-500',
  },
  methods: {
    activeButton: 'border-saguaro-500/40 bg-saguaro-500/12 text-ink-900 shadow-sm',
    inactiveButton: 'border-saguaro-500/15 bg-white-soft/60 text-desert-dark hover:border-saguaro-500/30 hover:bg-saguaro-500/8',
    badgeActive: 'bg-saguaro-500 text-white',
    badgeIdle: 'bg-saguaro-500/10 text-saguaro-700',
    eyebrow: 'text-saguaro-700',
    count: 'border-saguaro-500/24 bg-saguaro-500/10 text-saguaro-700',
    skillCard: 'border-saguaro-500/18 hover:border-saguaro-500/38',
    skillAccent: 'bg-saguaro-500',
  },
};

const SkillCloud = ({
  skills,
  title = 'Technical Skills',
  description,
  compact = false,
  categoryFilter,
}: SkillCloudProps) => {
  const allowedCategories = categoryFilter ? new Set(categoryFilter) : undefined;
  const visibleCategories = skillCategories
    .filter((category) => !allowedCategories || allowedCategories.has(category.id))
    .map((category) => ({
      ...category,
      skills: skills.filter((skill) => skill.category === category.id),
    }))
    .filter((category) => category.skills.length > 0);

  const defaultCategory = visibleCategories.find((category) => category.id === 'hardware') ?? visibleCategories[0];
  const [activeCategoryId, setActiveCategoryId] = useState(defaultCategory?.id ?? '');
  const activeCategory = visibleCategories.find((category) => category.id === activeCategoryId) ?? defaultCategory;
  const activeTone = activeCategory ? categoryTone[activeCategory.id] : categoryTone.hardware;

  const selectCategory = (category: VisibleCategory) => {
    setActiveCategoryId(category.id);
  };

  if (compact) {
    return (
      <section className="space-y-5" aria-labelledby="skills-heading">
        <div className="space-y-2">
          <h2 id="skills-heading" className="text-2xl font-bold text-terracotta">
            {title}
          </h2>
          {description ? <p className="text-sm text-desert-dark/70">{description}</p> : null}
        </div>

        <div className="space-y-5">
          {visibleCategories.map((category) => (
            <div key={category.id} className="rounded-lg border border-ucsd-blue/15 bg-white/35 p-5 shadow-sm backdrop-blur">
              <SkillDetailList skills={category.skills} compact />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8" aria-labelledby="skills-heading">
      <div className="space-y-3 text-center">
        <h2 id="skills-heading" className="text-3xl font-bold text-terracotta md:text-4xl">
          {title}
        </h2>
        {description ? <p className="mx-auto max-w-3xl text-desert-dark/75">{description}</p> : null}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="overflow-hidden rounded-2xl border border-clay-700/15 bg-white-soft/70 shadow-card"
      >
        <div className="grid gap-0 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="border-b border-clay-700/10 bg-gradient-to-b from-sand-100/80 via-sand-50 to-saguaro-500/10 p-4 lg:border-b-0 lg:border-r">
            <p className="px-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-clay-700">Skill areas</p>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
              {visibleCategories.map((category) => {
                const isActive = activeCategory?.id === category.id;
                const tone = categoryTone[category.id];

                return (
                  <button
                    key={category.id}
                    type="button"
                    data-skill-category={category.id}
                    aria-pressed={isActive}
                    onClick={() => selectCategory(category)}
                    className={`min-w-[14rem] rounded-xl border p-3 text-left transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-500/60 lg:w-full lg:min-w-0 ${
                      isActive ? tone.activeButton : tone.inactiveButton
                    }`}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span>
                        <span className="block text-sm font-extrabold">{category.label}</span>
                        <span className="mt-1 block text-xs leading-5 text-desert-dark/65">
                          {category.description}
                        </span>
                      </span>
                      <span className={`rounded-full px-2 py-1 text-[0.65rem] font-bold ${isActive ? tone.badgeActive : tone.badgeIdle}`}>
                        {category.skills.length}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {visibleCategories.length > 0 ? (
            <div className="relative overflow-hidden bg-sand-50 p-5 text-desert-dark md:p-7">
              <div className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(90deg,var(--color-gold-500)_1px,transparent_1px),linear-gradient(0deg,var(--color-saguaro-500)_1px,transparent_1px)] [background-size:42px_42px]" />
              <div className="relative">
                <p className={`text-[0.68rem] font-bold uppercase tracking-[0.2em] ${activeTone.eyebrow}`}>Active skill area</p>
                <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="font-display text-4xl font-semibold leading-none text-ink-900 md:text-5xl">
                      {activeCategory?.label}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-desert-dark/70">
                      {activeCategory?.description}
                    </p>
                  </div>
                  <span className={`self-start rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${activeTone.count}`}>
                    {activeCategory?.skills.length ?? 0} skills
                  </span>
                </div>

                {activeCategory ? <SkillDetailList skills={activeCategory.skills} tone={activeTone} /> : null}
              </div>
            </div>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
};

interface SkillDetailListProps {
  skills: Skill[];
  compact?: boolean;
  tone?: (typeof categoryTone)[SkillCategoryId];
}

const SkillDetailList = ({ skills, compact = false, tone = categoryTone.hardware }: SkillDetailListProps) => (
  <div className={`mt-7 grid gap-3 ${compact ? '' : 'md:grid-cols-2 xl:grid-cols-3'}`}>
    {skills.map((skill) => (
      <article
        key={skill.id}
        data-skill-id={skill.id}
        className={`rounded-xl border bg-white-soft/85 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white-soft ${tone.skillCard}`}
      >
        <span className={`mb-3 block h-1 w-10 rounded-full ${tone.skillAccent}`} />
        <h4 className="text-sm font-extrabold text-desert-dark">{skill.label}</h4>
        <p className="mt-2 text-xs leading-5 text-desert-dark/68">{skill.summary}</p>
      </article>
    ))}
  </div>
);

export default SkillCloud;
