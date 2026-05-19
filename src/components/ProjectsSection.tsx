import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Tabata Timer App",
    description:
      "Mobile interval-training app built to strengthen my React Native skills, including reusable components, timer logic, workout flows, and responsive mobile UI.",
    tech: ["React Native", "Expo", "TypeScript", "Mobile UI"],
    link: "https://apps.apple.com/app/id6768385096",
    privacyLink: "/privacy/tabata",
  },
  {
    title: "AI Motivation App",
    description:
      "Mobile app that delivers personalized motivational messages generated with AI, scheduled through AWS cron jobs and sent to users using push notifications.",
    tech: ["React Native", "Expo", "AI API", "AWS", "Push Notifications"],
    link: "https://apps.apple.com/app/id6767008173",
    privacyLink: "/privacy/ai-motivation-app",
  },
  {
    title: "Gym Workout Tracker",
    description:
      "Fitness tracking app that stores workout history, manages exercise data, calculates training percentages automatically, and generates AI-powered motivational messages.",
    tech: ["React Native", "Supabase", "AI API", "Database", "TypeScript"],
    link: "#",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading gradient-text mb-16">Projects</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:border-primary/30"
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), oklch(0.7 0.25 330 / 6%), transparent 40%)",
                }}
              />

              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="font-display text-2xl tracking-wide uppercase text-foreground">
                    {project.title}
                  </h3>

                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} in App Store`}
                    >
                      <ExternalLink
                        size={18}
                        className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-0.5 hover:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>

                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-muted px-3 py-1 font-display text-xs tracking-wider uppercase text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md border border-primary/40 px-3 py-1.5 font-display text-xs tracking-wider uppercase text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary"
                    >
                      View App
                    </a>
                  )}

                  {project.privacyLink && (
                    <a
                      href={project.privacyLink}
                      className="inline-flex items-center rounded-md border border-primary/40 px-3 py-1.5 font-display text-xs tracking-wider uppercase text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary"
                    >
                      Privacy Policy
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}