"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "React Native / Expo", level: 85 },
      { name: "Angular", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
    color: "#c4f23f",
  },
  {
    title: "Backend",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Java / Spring", level: 85 },
      { name: "Python / Langchain", level: 50 },
      { name: "REST / GraphQL", level: 95 },
      { name: "Microservices", level: 90 },
      { name: "Kafka / RabbitMQ", level: 85 },
    ],
    color: "#8b5cf6",
  },
  {
    title: "Database",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Elastic Search", level: 70 },
      { name: "SQL Server", level: 80 },
      { name: "Oracle", level: 75 },
      { name: "Cassandra", level: 75 },
      { name: "SQL / Hibernate", level: 85 },
    ],
    color: "#f59e0b",
  },
  {
    title: "DevOps & Cloud",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    skills: [
      { name: "AWS (Lambda, ECS, SQS)", level: 90 },
      { name: "Docker", level: 85 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Serverless", level: 85 },
      { name: "Git / GitLab / BitBucket", level: 90 },
      { name: "OpenTelemetry / Grafana", level: 80 },
    ],
    color: "#10b981",
  },
];

const additionalSkills = [
  "DDD", "Event Sourcing", "CQRS", "TDD", "Hexagonal Architecture", "Distributed Systems",
  "Jest", "JUnit", "Vitest", "Jira", "Agile", "Scrum", "Team Leadership",
  "Vite", "Zustand", "Axios", "Zod", "Styled Components", "Flutter",
  "Strapi CMS", "AI / Foundation Models", "Agents", "AMQP", "RPC",
  "System Design", "Code Review", "Mentoring", "Technical Documentation"
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-[var(--accent)]" />
            <span className="text-sm font-mono text-[var(--accent)] tracking-wider">SKILLS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Technical
            <br />
            <span className="font-['Instrument_Serif',serif] font-normal italic text-[var(--muted)]">
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 lg:p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-500"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <div style={{ color: category.color }}>{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs font-mono text-[var(--muted)]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-center">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                className="px-4 py-2 text-sm rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
