"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

/* Social links — edit these in one place. */
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/andre3004",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/andre-damasceno",
    icon: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:andreferreira.junior235@gmail.com",
    icon: (
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67zM22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@andreferreira.junior235",
    icon: (
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/damasceno3005/",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    ),
  },
];

/** Full years of experience, counting from February 2017. */
function yearsSince(year: number, month: number) {
  const now = new Date();
  let years = now.getFullYear() - year;
  if (now.getMonth() < month) years -= 1;
  return years;
}

export default function Hero() {
  const reduce = useReducedMotion();
  const yearsExperience = yearsSince(2017, 1); // Feb = month index 1

  const fade = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4 } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-20 grid-pattern">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-[0.12] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[-6rem] h-80 w-80 rounded-full bg-purple-500 opacity-[0.08] blur-[120px]"
      />

      <div className="relative flex w-full max-w-xl flex-col items-center text-center">
        {/* Photo */}
        <motion.div {...fade(0)} className="relative mb-8">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-[var(--accent)] opacity-20 blur-3xl"
          />
          <div className="relative h-44 w-44 overflow-hidden rounded-3xl border-2 border-[var(--border)] bg-[var(--card)] sm:h-52 sm:w-52">
            <Image
              src="/photo1.jpeg"
              alt="Andre Ferreira"
              fill
              sizes="(min-width: 640px) 208px, 176px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Status */}
        <motion.div
          {...fade(0.1)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
          </span>
          <span className="text-sm font-medium text-[var(--foreground)]/80">Based in Dublin, Ireland</span>
        </motion.div>

        {/* Name + role */}
        <motion.h1
          {...fade(0.2)}
          className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl"
        >
          Andre Ferreira
        </motion.h1>
        {/* font-['Instrument_Serif',serif] italic text-[var(--accent)] */}
        <motion.p {...fade(0.3)} className="text-[var(--accent)] mt-4 text-xl sm:text-2xl">
          Senior Software Engineer{" "}
          {/* <span className="text-[var(--muted)]">@</span>{" "}
          <span className="font-['Instrument_Serif',serif] italic text-[var(--accent)]">
            EIDA
          </span> */}
        </motion.p>

        <motion.ul
          {...fade(0.35)}
          aria-label="Tech stack"
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
        >
          {["Java", "React", "AWS", "GCP"].map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 font-mono text-xs tracking-wide text-[var(--muted)]"
            >
              {tech}
            </li>
          ))}
        </motion.ul>

        <motion.p
          {...fade(0.4)}
          className="mt-5 max-w-md text-[18px] leading-relaxed text-[var(--muted)]"
        >
          I’m a Senior Full-Stack Engineer ({yearsExperience}+ years), specialising in back-end, with strong experience in AWS/GCP and enterprise integrations,  I integrate AI where it creates measurable value without compromising delivery quality.
        </motion.p>

        {/* Social links */}
        <motion.nav
          {...fade(0.5)}
          aria-label="Social links"
          className="mt-10 flex items-center gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              title={s.label}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] outline-none transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                {s.icon}
              </svg>
            </a>
          ))}
        </motion.nav>
      </div>
    </main>
  );
}
