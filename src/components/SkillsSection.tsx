import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "Angular", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [".NET", "Node.js", "PostgreSQL", "REST APIs", "GraphQL", "Python"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Supabase", "Docker", "CI/CD", "Serverless", "Cloudflare"],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading gradient-text mb-16">Skills</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="gradient-border rounded-2xl p-8"
            >
              <div className="relative z-10">
                <cat.icon size={32} className="mb-4 text-primary" />
                <h3 className="mb-6 font-display text-2xl tracking-wider uppercase text-foreground">
                  {cat.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {cat.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + j * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
