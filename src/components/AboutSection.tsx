import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  "React", "Angular", ".NET", "AWS", "Supabase", "TypeScript", "Node.js", "PostgreSQL",
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading gradient-text mb-16">About Me</h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              I'm a passionate Full Stack Developer with experience building
              high-performance web applications. I specialize in modern
              JavaScript frameworks and cloud-native architectures, delivering
              solutions that are both scalable and user-focused.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From crafting pixel-perfect frontends to designing robust backend
              systems, I thrive on turning complex problems into elegant,
              maintainable code. I'm driven by clean architecture and
              exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="mb-6 font-display text-xl tracking-widest uppercase text-primary">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="gradient-border rounded-lg px-5 py-2.5 font-display text-sm tracking-wider uppercase text-foreground"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}