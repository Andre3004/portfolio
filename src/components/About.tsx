"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 diagonal-lines opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-[var(--border)] translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border border-[var(--accent)] -translate-x-4 -translate-y-4 opacity-30" />

              {/* Main visual */}
              <div className="relative h-full bg-gradient-to-br from-[var(--card)] to-transparent border border-[var(--border)] p-8 flex flex-col justify-between">
                {/* Code snippet visual */}
                <div className="font-mono text-sm space-y-2">
                  <div className="text-[var(--muted)]">{"// engineer.config.ts"}</div>
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-[var(--accent)]">andre</span>
                    <span className="text-[var(--muted)]">{" = {"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">role</span>
                    <span className="text-[var(--muted)]">:</span>{" "}
                    <span className="text-orange-300">&quot;Tech Lead&quot;</span>
                    <span className="text-[var(--muted)]">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">location</span>
                    <span className="text-[var(--muted)]">:</span>{" "}
                    <span className="text-orange-300">&quot;Dublin, IE&quot;</span>
                    <span className="text-[var(--muted)]">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-400">passion</span>
                    <span className="text-[var(--muted)]">:</span>{" "}
                    <span className="text-orange-300">&quot;Building at scale&quot;</span>
                  </div>
                  <div className="text-[var(--muted)]">{"};"}</div>
                </div>

                {/* Bottom decorative element */}
                <div className="flex items-center gap-4 pt-8 border-t border-[var(--border)]">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="font-mono text-xs text-[var(--muted)]">system.ready</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-[var(--accent)]" />
              <span className="text-sm font-mono text-[var(--accent)] tracking-wider">ABOUT ME</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Crafting Digital
              <br />
              <span className="font-['Instrument_Serif',serif] font-normal italic text-[var(--muted)]">
                Experiences
              </span>
            </h2>

            <div className="space-y-6 text-[var(--muted)] leading-relaxed">
              <p>
                I&apos;m a Senior Tech Lead at{" "}
                <span className="text-[var(--foreground)]">Simple Syntax</span>, working with Edwin Group—a
                holding company in the education sector. My focus is on building solutions for recruitment,
                retention, HR support, and employee wellbeing.
              </p>

              <p>
                My journey spans from building{" "}
                <span className="text-[var(--accent)]">logistics systems for the Brazilian Navy</span>{" "}
                to developing{" "}
                <span className="text-[var(--accent)]">geotechnical analysis platforms</span>{" "}
                for mining giants like Vale and Samarco. Each project has deepened my expertise in
                distributed systems, event-driven architectures, and team leadership.
              </p>

              <p>
                I believe in{" "}
                <span className="text-[var(--foreground)]">domain-driven design</span>,
                clean architectures, and writing code that other developers can understand and extend.
                When I&apos;m not coding, I&apos;m probably exploring new technologies or mentoring
                junior engineers.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: "🎓", text: "BSc Information Systems (UDC)" },
                { icon: "📍", text: "Based in Dublin 07, Ireland" },
                { icon: "🌍", text: "C1 English Proficiency" },
                { icon: "💼", text: "8+ Years Experience" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)]"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
