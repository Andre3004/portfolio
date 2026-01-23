"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "andreferreira.junior235@gmail.com",
    href: "mailto:andreferreira.junior235@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+353 83 320 8414",
    href: "tel:+353833208414",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/andre-damasceno",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/andre3004",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-[200px] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-px bg-[var(--accent)]" />
              <span className="text-sm font-mono text-[var(--accent)] tracking-wider">CONTACT</span>
              <div className="w-12 h-px bg-[var(--accent)]" />
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Let&apos;s Build
              <br />
              <span className="font-['Instrument_Serif',serif] font-normal italic text-[var(--accent)]">
                Something Great
              </span>
            </h2>

            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities, challenging projects, and connecting
              with fellow engineers. Whether you have a question or just want to say hi,
              I&apos;ll do my best to get back to you!
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 mb-16"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 card-hover text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[var(--accent-muted)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--background)] transition-all duration-300">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-1">
                      {link.label}
                    </div>
                    <div className="font-medium group-hover:text-[var(--accent)] transition-colors duration-300">
                      {link.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-[var(--border)] bg-[var(--card)]"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-[var(--accent)] rounded-full" />
              <div className="absolute inset-0 w-3 h-3 bg-[var(--accent)] rounded-full animate-ping opacity-50" />
            </div>
            <span className="text-sm">
              Based in <span className="font-semibold">Dublin 07, Ireland</span>
            </span>
            {/* <span className="text-[var(--muted)]">|</span>
            <span className="text-sm text-[var(--muted)]">Open to remote work</span> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
