/*
 * Copyright (c) 2025 Andrew Jeter. All Rights Reserved.
 *
 * This file contains personal academic information and is proprietary.
 * Unauthorized copying, modification, distribution, or use of this file,
 * via any medium, is strictly prohibited.
 */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';
import { quarters, type Course } from '../data/academics';
import { getSkillsByIds } from '../data/skills';

interface CourseCardProps {
  course: Course;
  quarterLabel: string;
}

const getQuarterId = (term: string, year: string) => `${term}-${year}`.replace(/[^a-z0-9]+/gi, '-').toLowerCase();

const CourseCard = ({ course, quarterLabel }: CourseCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const courseSkills = getSkillsByIds(course.skillIds);
  const panelId = `${quarterLabel}-${course.code}`.replace(/[^a-z0-9]+/gi, '-').toLowerCase();

  return (
    <article className="group rounded-lg border border-ucsd-blue/15 bg-white/45 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-terracotta/30 hover:bg-white/70 hover:shadow-md focus-within:border-terracotta/40">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ucsd-blue/70">{quarterLabel}</p>
          <h3 className="mt-2 text-xl font-bold text-desert-dark">
            <span className="text-terracotta">{course.code}</span>
            <span className="text-desert-dark/35"> / </span>
            {course.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          className="self-start rounded-full border border-ucsd-blue/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ucsd-blue transition hover:border-terracotta/40 hover:text-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/40"
        >
          {isExpanded ? 'Hide details' : 'Details'}
        </button>
      </div>

      <div
        id={panelId}
        className={`mt-4 grid transition-all duration-300 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ucsd-blue/65">Catalog description</p>
          <p className="text-sm leading-relaxed text-desert-dark/75">{course.summary}</p>

          {course.note ? (
            <p className="mt-3 rounded-md border border-terracotta/20 bg-terracotta/10 px-3 py-2 text-xs leading-relaxed text-desert-dark/75">
              {course.note}
            </p>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            {courseSkills.map((skill) => (
              <span key={skill.id} className="rounded-full border border-ucsd-blue/20 bg-sand/70 px-3 py-1 text-xs font-medium text-ucsd-blue">
                {skill.label}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-desert-dark/55">
            {course.catalogEra ? <span>{course.catalogEra}</span> : null}
            {course.sourceUrl ? (
              <a
                href={course.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-terracotta underline decoration-dotted underline-offset-4 transition hover:text-sunset"
              >
                Catalog source
              </a>
            ) : (
              <span>Source noted from academic record</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const Courses = () => {
  const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent');
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Courses - Andrew Jeter';
  }, []);

  const sortedQuarters = sortOrder === 'recent' ? [...quarters].reverse() : quarters;
  const activeTermId = selectedTermId ?? getQuarterId(sortedQuarters[0].term, sortedQuarters[0].year);
  const completedCourseCount = quarters.reduce((count, quarter) => count + quarter.courses.length, 0);
  const visibleYears = Array.from(new Set(quarters.map((quarter) => quarter.year)));

  const focusTerm = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    section.focus({ preventScroll: true });
    setSelectedTermId(sectionId);
  };

  return (
    <div className="min-h-screen bg-sand text-desert-dark p-6 md:p-10 relative">
      <BackButton />

      <main className="mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-10 max-w-4xl pt-8 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ucsd-blue/75">UC San Diego Computer Engineering</p>
          <h1 className="mt-4 text-4xl font-bold text-terracotta md:text-5xl">Academic Journey</h1>
          <p className="mx-auto mt-4 max-w-3xl text-desert-dark/75">
            A quarter-by-quarter view of my Computer Engineering coursework, the skills it built, and the catalog description for each course if you're not familiar with UCSD course codes.
          </p>
        </motion.header>

        <section className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-xl border border-clay-700/15 bg-white-soft/65 p-5 shadow-card backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ucsd-blue/70">Quarter Guide</p>
                <span className="rounded-full border border-ucsd-blue/15 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-ucsd-blue">
                  {sortOrder === 'recent' ? 'Newest' : 'Oldest'}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg border border-clay-700/10 bg-sand-50/70 p-3">
                <div>
                  <p className="text-2xl font-extrabold leading-none text-desert-dark">{completedCourseCount}</p>
                  <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-desert-dark/55">Courses</p>
                </div>
                <div>
                  <p className="text-2xl font-extrabold leading-none text-desert-dark">{visibleYears.length}</p>
                  <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-desert-dark/55">Years</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg border border-ucsd-blue/15 bg-white/35 p-1">
                <button
                  type="button"
                  aria-pressed={sortOrder === 'recent'}
                  onClick={() => {
                    setSortOrder('recent');
                    setSelectedTermId(null);
                  }}
                  className={`rounded-md px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-terracotta/30 ${
                    sortOrder === 'recent' ? 'bg-terracotta text-white shadow-sm' : 'text-ucsd-blue hover:bg-white/55'
                  }`}
                >
                  Recent first
                </button>
                <button
                  type="button"
                  aria-pressed={sortOrder === 'oldest'}
                  onClick={() => {
                    setSortOrder('oldest');
                    setSelectedTermId(null);
                  }}
                  className={`rounded-md px-3 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-terracotta/30 ${
                    sortOrder === 'oldest' ? 'bg-terracotta text-white shadow-sm' : 'text-ucsd-blue hover:bg-white/55'
                  }`}
                >
                  Oldest first
                </button>
              </div>

              <div className="mt-5 max-h-[calc(100vh-19rem)] space-y-2 overflow-y-auto pr-1">
                {sortedQuarters.map((quarter) => {
                  const sectionId = getQuarterId(quarter.term, quarter.year);
                  const isActive = activeTermId === sectionId;

                  return (
                    <button
                      key={`${quarter.term}-${quarter.year}`}
                      type="button"
                      onClick={() => focusTerm(sectionId)}
                      className={`group flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-terracotta/30 ${
                        isActive
                          ? 'border-terracotta/35 bg-terracotta/10 shadow-sm'
                          : 'border-ucsd-blue/12 bg-white/45 hover:border-terracotta/25 hover:bg-white/70'
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className={`h-2.5 w-2.5 shrink-0 rounded-full shadow-sm transition group-hover:scale-125 ${isActive ? 'bg-terracotta' : 'bg-ucsd-blue/55'}`} />
                        <span className={`text-sm font-bold leading-tight ${isActive ? 'text-terracotta' : 'text-desert-dark/75 group-hover:text-terracotta'}`}>
                          {quarter.term} {quarter.year}
                        </span>
                      </span>
                      <span className={`shrink-0 rounded-full px-2 py-1 text-[0.65rem] font-bold ${isActive ? 'bg-white/70 text-terracotta' : 'bg-sand/60 text-ucsd-blue'}`}>
                        {quarter.courses.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            {sortedQuarters.map((quarter, index) => {
              const quarterLabel = `${quarter.term} ${quarter.year}`;
              const sectionId = getQuarterId(quarter.term, quarter.year);

              return (
                <motion.section
                  key={quarterLabel}
                  id={sectionId}
                  tabIndex={-1}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.03 }}
                  className="scroll-mt-8 rounded-xl border border-clay-700/12 bg-white/20 p-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-terracotta/30 md:p-6"
                >
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-ucsd-blue/70">Quarter</p>
                      <h2 className="text-2xl font-bold text-desert-dark">{quarterLabel}</h2>
                    </div>
                    <span className="rounded-full border border-ucsd-blue/20 px-3 py-1 text-xs font-semibold text-ucsd-blue">
                      {quarter.courses.length} {quarter.courses.length === 1 ? 'course' : 'courses'}
                    </span>
                  </div>

                  <div className="grid gap-4">
                    {quarter.courses.map((course) => (
                      <CourseCard key={`${quarterLabel}-${course.code}-${course.title}`} course={course} quarterLabel={quarterLabel} />
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Courses;
