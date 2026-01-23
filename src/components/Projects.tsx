"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Still Human App",
    subtitle: "B2B Employee Training & Wellbeing Platform",
    description:
      "A comprehensive platform for employee training and wellbeing featuring podcasts, knowledge hub, interactive activities, and manager reports. Using Langchain and Python for report insights and web scraping. Sold via school subscriptions by Edwin Group.",
    impact: [
      "29 active schools onboarded",
      "~10,000 active users",
      "10 schools in first beta month",
    ],
    technologies: [
      "React.js",
      "Vite",
      "React Native",
      "Next.js",
      "Strapi CMS",
      "Elastic Search",
      "Langchain",
      "Python",
      "AWS",
      "OpenTelemetry",
      "Grafana",
    ],
    architecture: [
      "Hexagonal Architecture",
      "Domain-Driven Design",
      "Event Sourcing",
      "CQRS",
    ],
    gradient: "from-[#c4f23f]/20 via-transparent to-purple-600/10",
    accentColor: "#c4f23f",
  },
  {
    id: 2,
    title: "DBS AutoChecker",
    subtitle: "Automated Compliance Verification System",
    description:
      "A fully serverless solution in Node.js automating monthly background checks of ~8,000 Salesforce-registered employees against the UK's Disclosure and Barring Service, all provisioned via IaC.",
    impact: [
      "8,000 employees verified monthly",
      "Eliminated 2 weeks manual work",
      "100% data confidence",
    ],
    technologies: [
      "Node.js",
      "AWS Lambda",
      "SQS",
      "EventBridge",
      "DLQs",
      "React.js",
      "Salesforce API",
      "IaC",
    ],
    architecture: [
      "Serverless Architecture",
      "Infrastructure as Code",
      "Event-Driven",
    ],
    gradient: "from-purple-600/20 via-transparent to-blue-600/10",
    accentColor: "#8b5cf6",
  },
  {
    id: 3,
    title: "SHMS Platform",
    subtitle: "Geotechnical Safety Monitoring System",
    description:
      "A comprehensive platform serving mining giants like Samarco and Vale, collecting, storing, and analyzing geotechnical data for dam safety monitoring. Owned the stability-analysis module with interactive slope heat maps.",
    impact: [
      "Serving Vale & Samarco",
      "Real-time slope analysis",
      "Key differentiator: heat maps",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "C#",
      "Java",
      "SQL Server",
      "Cassandra",
      "RabbitMQ",
      "Python",
    ],
    architecture: [
      "Microservices",
      "DDD",
      "TDD",
      "CQRS",
    ],
    gradient: "from-orange-500/20 via-transparent to-red-600/10",
    accentColor: "#f59e0b",
  },
  {
    id: 4,
    title: "GeoInspector",
    subtitle: "Field Employee Tracking Mobile App",
    description:
      "A React Native mobile app for tracking field employees' responsibilities in the mining industry. Led development of the audit module and supported the team across additional features.",
    impact: [
      "Field operations tracking",
      "Audit module ownership",
      "Cross-team collaboration",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "Mobile Development",
    ],
    architecture: [
      "Mobile-First",
      "Offline Support",
      "Real-time Sync",
    ],
    gradient: "from-cyan-500/20 via-transparent to-blue-600/10",
    accentColor: "#06b6d4",
  },
  {
    id: 5,
    title: "SINGRA",
    subtitle: "Brazilian Navy Logistics System",
    description:
      "A product cataloging module for the Brazilian Navy's logistics system, built with domain-focused, service-oriented architecture ensuring reliability and maintainability.",
    impact: [
      "85%+ test coverage",
      "Low maintenance needs",
      "Delivered ahead of schedule",
    ],
    technologies: [
      "Java",
      "Spring",
      "Angular",
      "JUnit",
      "Oracle",
    ],
    architecture: [
      "Service-Oriented Architecture",
      "Domain-Focused Design",
      "Function Point Analysis",
    ],
    gradient: "from-emerald-500/20 via-transparent to-cyan-600/10",
    accentColor: "#10b981",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32" ref={ref}>
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
            <span className="text-sm font-mono text-[var(--accent)] tracking-wider">PROJECTS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Featured
            <br />
            <span className="font-['Instrument_Serif',serif] font-normal italic text-[var(--muted)]">
              Work
            </span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div
                className={`relative rounded-3xl border border-[var(--border)] overflow-hidden transition-all duration-500 ${
                  hoveredId === project.id ? "border-[var(--accent)]/50" : ""
                }`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-8 lg:p-12">
                  <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Left: Main info */}
                    <div className="lg:col-span-3">
                      {/* Project number */}
                      <div
                        className="inline-flex items-center gap-2 mb-4 font-mono text-xs"
                        style={{ color: project.accentColor }}
                      >
                        <span>0{project.id}</span>
                        <div className="w-8 h-px" style={{ backgroundColor: project.accentColor }} />
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-[var(--muted)] mb-4">{project.subtitle}</p>

                      <p className="text-[var(--muted)] leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Architecture */}
                      <div>
                        <h4 className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-3">
                          Architecture
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.architecture.map((arch) => (
                            <span
                              key={arch}
                              className="px-3 py-1 text-xs font-medium rounded-full border border-[var(--border)] text-[var(--muted)]"
                            >
                              {arch}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Impact metrics */}
                    <div className="lg:col-span-2">
                      <div className="h-full flex flex-col justify-center">
                        <h4 className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider mb-6">
                          Key Impact
                        </h4>
                        <div className="space-y-4">
                          {project.impact.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 }}
                              className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]"
                            >
                              <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: project.accentColor }}
                              />
                              <span className="text-sm font-medium">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                  style={{
                    width: hoveredId === project.id ? "100%" : "0%",
                    backgroundColor: project.accentColor,
                  }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
