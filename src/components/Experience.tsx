"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Senior Tech Lead Engineer",
    company: "Simple Syntax – Edwin Group",
    location: "London, UK (Remote)",
    period: "Dec 2022 – Present",
    highlights: [
      "Leading two main projects, delivered 6+ applications including the Still Human App—a B2B employee training and wellbeing platform with 29 active schools and ~10,000 users",
      "Architected backend with Strapi CMS using hexagonal architecture & DDD, implementing event sourcing and CQRS for report generation, Elastic Search for global search, and Langchain with Python for report insights and web scraping",
      "Built DBS AutoChecker—a fully serverless solution in Node.js automating monthly checks of ~8,000 employees against UK's Disclosure and Barring Service, eliminating 2 weeks of manual work",
      "Infrastructure on AWS (ECR, ECS, EventBridge, Lambda, SQS, DLQs) with monitoring via OpenTelemetry and Grafana; frontend uses React.js with Vite, React Native, and Next.js for SEO",
    ],
    technologies: ["React", "Next.js", "React Native", "Node.js", "Strapi", "AWS", "Elastic Search", "Langchain", "Python"],
    accentColor: "var(--accent)",
  },
  {
    title: "Senior Software Engineer",
    company: "Simple Syntax – SAGA Group",
    location: "São Paulo, Brazil (Remote)",
    period: "Oct 2020 – Dec 2022",
    highlights: [
      "Delivered full-stack features and integrations across multiple systems supporting 200+ units in Brazil using Java/Java EE (JSF, Spring 2.5), Angular 12, WildFly/JBoss, and AWS",
      "Led performance improvements cutting commission processing from 12+ hours to ~2 hours by optimizing SQL queries and applying multi-threading, serverless components, and caching",
      "Strengthened integration reliability with anti-corruption layers and resilience patterns like circuit breakers for third-party platforms (e.g., Salesforce)",
      "Owned troubleshooting, production support, automated tests (JUnit/Jest), and stakeholder requirement gathering/estimation",
    ],
    technologies: ["Java", "Spring", "Angular", "AWS", "Salesforce", "JBoss", "PostgreSQL", "Jest", "JUnit"],
    accentColor: "#8b5cf6",
  },
  {
    title: "Middle Software Engineer",
    company: "Intelltech",
    location: "Foz do Iguaçu, Brazil",
    period: "Jan 2019 – Oct 2020",
    highlights: [
      "Built features for SHMS platform serving Samarco and Vale—a microservices architecture with SQL Server, Cassandra, C#/Java/Node.js backend, React.js frontend, and RabbitMQ",
      "Owned the stability-analysis module, translating R&D's Python risk-calculation scripts into an interactive slope heat map that became the system's key differentiator",
      "Contributed to GeoInspector, a React Native mobile app for tracking field employees; led development of the audit module",
      "Initiated refactoring to DDD-focused microservices with clear separation of responsibilities, applying TDD and CQRS principles",
    ],
    technologies: ["React", "React Native", "Node.js", "C#", "Java", "Cassandra", "RabbitMQ", "SQL Server", "Python"],
    accentColor: "#f59e0b",
  },
  {
    title: "Trainee/Junior Software Engineer",
    company: "Eits",
    location: "Foz do Iguaçu, Brazil",
    period: "Feb 2017 – Jan 2019",
    highlights: [
      "Started as intern in third semester with no prior experience, promoted to Junior after just 4 months",
      "Built a three-module system from scratch using Spring and Angular with comprehensive unit and integration tests, delivered ahead of schedule",
      "Developed SINGRA—a logistics system for the Brazilian Navy's product cataloging module with 85%+ test coverage and low maintenance needs using domain-focused, service-oriented architecture",
      "Wore analyst hat: writing functional/non-functional requirements, UML documentation, and Function Point Analysis estimation",
    ],
    technologies: ["Spring", "Angular", "Java", "JUnit", "Oracle", "UML"],
    accentColor: "#10b981",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32" ref={ref}>
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
            <span className="text-sm font-mono text-[var(--accent)] tracking-wider">EXPERIENCE</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Where I&apos;ve
            <br />
            <span className="font-['Instrument_Serif',serif] font-normal italic text-[var(--muted)]">
              Made Impact
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 bg-[var(--background)]"
                  style={{ borderColor: exp.accentColor }}
                >
                  <div
                    className="absolute inset-1 rounded-full"
                    style={{ backgroundColor: exp.accentColor }}
                  />
                </div>

                {/* Card */}
                <div className="group p-6 lg:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-500 card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-1">{exp.title}</h3>
                      <p style={{ color: exp.accentColor }} className="font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-sm text-[var(--muted)]">{exp.period}</div>
                      <div className="text-sm text-[var(--muted)]">{exp.location}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--muted)] text-sm lg:text-base leading-relaxed">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: exp.accentColor }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
