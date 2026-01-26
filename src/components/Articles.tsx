"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Part 1: Monolith → Microservices → Space-Based: Scaling a Ticketing System",
    description:
      "Examining architectural evolution for handling ticketing systems at scale. From monolithic designs through microservices to space-based architecture that removes the database as a bottleneck.",
    url: "https://medium.com/@andreferreira.junior235/part-1-monolith-microservices-space-based-scaling-a-ticketing-system-ecde3ac4f027",
    date: "Sep 13, 2025",
    readTime: "8 min read",
    tags: ["Distributed Systems", "Microservices", "System Design"],
    cover: "/articles/scalling_part_1_article_cover.png",
  },
  {
    id: 2,
    title: "What did I learn from reading these 4 books?",
    description:
      "Key insights and lessons learned from reading four impactful books. Exploring ideas that shaped my thinking and how to apply them in daily life and career.",
    url: "https://medium.com/@andreferreira.junior235/what-did-i-learn-from-reading-these-4-books-f2223ec46c02",
    date: "Jan 2026",
    readTime: "6 min read",
    cover: "/articles/books_article_cover.png",
    tags: ["Books", "Learning", "Personal Growth"],
  },
];

export default function Articles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="articles" className="relative py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-[var(--accent)]" />
            <span className="text-sm font-mono text-[var(--accent)] tracking-wider">
              ARTICLES
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Technical
            <br />
            <span className="font-['Instrument_Serif',serif] font-normal italic text-[var(--muted)]">
              Writing
            </span>
          </h2>
        </motion.div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <article className="relative h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)]/50 transition-all duration-300 card-hover overflow-hidden">
                {/* Cover image */}
                {article.cover && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={article.cover}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  {/* Medium icon and date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-[var(--accent-muted)] text-[var(--accent)]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--muted)] mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tech-tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more indicator */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-[var(--accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </motion.a>
          ))}
        </div>

        {/* View all on Medium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://medium.com/@andreferreira.junior235"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            <span className="text-sm font-medium">View all articles on Medium</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
