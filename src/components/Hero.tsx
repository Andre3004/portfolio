"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[var(--accent)] rounded-full filter blur-[128px] opacity-15 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-10" />

      {/* Geometric accent */}
      <motion.div
        className="absolute top-32 right-20 hidden xl:block"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="w-32 h-32 border border-[var(--border)] rotate-45" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="w-4 h-4 bg-[var(--accent)] rounded-full glow" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-3">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-[var(--border)] bg-[var(--card)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              <span className="text-sm text-[var(--muted)]">Based in Dublin, Ireland</span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
                <span className="block">Senior</span>
                <span className="block">
                  <span className="font-['Instrument_Serif',serif] font-normal italic text-[var(--accent)]">Tech Lead</span>
                </span>
                <span className="block text-[var(--muted)]">&amp; Engineer</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl mb-10 leading-relaxed"
            >
              I&apos;m <span className="text-[var(--foreground)] font-medium">Andre Ferreira</span>,
              a tech lead based in Dublin working with Edwin Group, a London-based holding in the education sector.
              I <span className="text-[var(--accent)]">design architecture</span>, plan and estimate project development,
              and work as a <span className="text-[var(--accent)]">full-stack engineer including DevOps</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-full hover:bg-[var(--accent)] transition-all duration-300"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="https://github.com/andreferreira"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-[var(--border)] text-[var(--foreground)] font-semibold rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                <span>GitHub</span>
              </a>
            </motion.div>

            {/* Stats
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-[var(--border)]"
            >
              {[
                { value: "8+", label: "Years Experience" },
                { value: "6+", label: "Projects Delivered" },
                { value: "10K+", label: "Users Impacted" },
                { value: "29", label: "Active Schools" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-[var(--accent)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--muted)]">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame behind */}
              <div className="absolute -inset-4 border border-[var(--accent)]/20 rounded-2xl -rotate-3" />
              <div className="absolute -inset-4 border border-[var(--border)] rounded-2xl rotate-3" />

              {/* Accent glow */}
              <div className="absolute -inset-8 bg-[var(--accent)] rounded-full filter blur-[80px] opacity-10" />

              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-96 xl:h-96 rounded-2xl overflow-hidden border-2 border-[var(--border)] bg-[var(--card)]">
                <Image
                  src="/photo.png"
                  alt="Andre Ferreira"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-full backdrop-blur-sm"
              >
                <span className="text-sm font-medium">
                  <span className="text-[var(--accent)]">8+</span> years building
                </span>
              </motion.div>

              {/* Tech stack badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-[var(--accent)] text-[var(--background)] rounded-full font-mono text-xs font-semibold"
              >
                Full-Stack
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[var(--muted)]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
