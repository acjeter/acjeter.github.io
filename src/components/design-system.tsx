import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type LinkTarget = {
    to?: string;
    href?: string;
    target?: string;
    rel?: string;
};

// Merge Tailwind utilities safely so callers can override primitive defaults without class conflicts.
const cx = (...classes: Array<string | false | null | undefined>) => twMerge(clsx(classes));

// PageShell owns the global canvas treatment; pages should compose sections inside it.
export const PageShell: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => (
    <main className={cx('app-canvas relative overflow-hidden', className)}>{children}</main>
);

export const Section: React.FC<{
    children: React.ReactNode;
    className?: string;
    id?: string;
}> = ({ children, className, id }) => (
    <section id={id} className={cx('section-shell py-14 md:py-20', className)}>
        {children}
    </section>
);

export const Card: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className }) => (
    <div className={cx('surface-card rounded-[var(--radius-card)] p-6 md:p-8', className)}>
        {children}
    </div>
);

export const Badge: React.FC<{
    children: React.ReactNode;
    tone?: 'neutral' | 'warm' | 'cool' | 'natural';
    className?: string;
}> = ({ children, tone = 'neutral', className }) => (
    <span
        className={cx(
            'inline-flex items-center rounded-[var(--radius-pill)] border px-3 py-1 text-xs font-bold tracking-[0.08em]',
            tone === 'neutral' && 'border-clay-700/15 bg-sand-100 text-text-muted',
            tone === 'warm' && 'border-clay-500/20 bg-clay-500/10 text-clay-700',
            tone === 'cool' && 'border-pacific-500/20 bg-pacific-500/10 text-pacific-700',
            tone === 'natural' && 'border-saguaro-500/20 bg-saguaro-500/10 text-saguaro-700',
            className,
        )}
    >
        {children}
    </span>
);

export const ButtonLink: React.FC<
    LinkTarget & {
        children: React.ReactNode;
        variant?: 'primary' | 'secondary' | 'ghost';
        className?: string;
    }
> = ({ children, variant = 'primary', className, to, href, target, rel }) => {
    // One CTA API supports both router links and external anchors.
    const sharedClassName = cx(
        'focus-ring inline-flex min-h-11 items-center justify-center rounded-[var(--radius-pill)] px-5 py-3 text-sm font-extrabold shadow-[var(--shadow-soft-desert)]',
        variant === 'primary' && 'bg-action-primary text-white-soft hover:bg-action-primary-hover',
        variant === 'secondary' && 'bg-ink-900 text-sand-50 hover:bg-pacific-700',
        variant === 'ghost' && 'border border-pacific-500/30 bg-white-soft/45 text-pacific-700 shadow-none hover:bg-pacific-500/10',
        className,
    );

    if (href) {
        return (
            <a href={href} target={target} rel={rel} className={sharedClassName}>
                {children}
            </a>
        );
    }

    return (
        <Link to={to ?? '/'} target={target} rel={rel} className={sharedClassName}>
            {children}
        </Link>
    );
};

export const SectionHeading: React.FC<{
    eyebrow?: string;
    title: string;
    children?: React.ReactNode;
    className?: string;
}> = ({ eyebrow, title, children, className }) => (
    <div className={cx('max-w-3xl', className)}>
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <h2 className="display-heading text-4xl text-ink-900 md:text-6xl">{title}</h2>
        {children ? <div className="body-copy mt-5">{children}</div> : null}
    </div>
);

export const PhotoFrame: React.FC<{
    src?: string;
    alt: string;
    label: string;
    className?: string;
    imageClassName?: string;
}> = ({ src, alt, label, className, imageClassName }) => (
    <figure className={cx('surface-card overflow-hidden rounded-[2rem]', className)}>
        {src ? (
            <img src={src} alt={alt} className={cx('h-full w-full object-cover', imageClassName)} />
        ) : (
            // Placeholder state keeps layout stable while final personal photos are still being selected.
            <div className="flex h-full min-h-52 items-center justify-center bg-gradient-to-br from-sand-200 via-sand-100 to-pacific-500/20 p-6 text-center">
                <span className="eyebrow text-clay-700">{label}</span>
            </div>
        )}
    </figure>
);

export const TextLink: React.FC<
    LinkTarget & {
        children: React.ReactNode;
        className?: string;
    }
> = ({ children, className, to, href, target, rel }) => {
    const sharedClassName = cx('focus-ring rounded-sm font-bold text-action-primary hover:text-action-primary-hover', className);

    if (href) {
        return (
            <a href={href} target={target} rel={rel} className={sharedClassName}>
                {children}
            </a>
        );
    }

    return (
        <Link to={to ?? '/'} target={target} rel={rel} className={sharedClassName}>
            {children}
        </Link>
    );
};
