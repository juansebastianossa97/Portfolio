import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Send } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading gradient-text mb-6">
            Get In Touch
          </h2>

          <p className="mb-16 text-lg text-muted-foreground">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            action="https://formsubmit.co/juan.sebastian.ossa97@gmail.com"
            method="POST"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from portfolio"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_next"
              value="http://localhost:8080/"
            />

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="glass-card rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground outline-none transition-all focus:ring-1 focus:ring-primary"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="glass-card rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground outline-none transition-all focus:ring-1 focus:ring-primary"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="glass-card resize-none rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground outline-none transition-all focus:ring-1 focus:ring-primary"
            />

            <button
              type="submit"
              className="btn-neon flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center gap-6"
          >
            <a
              href="mailto:juan.sebastian.ossa97@gmail.com"
              className="gradient-border flex items-center gap-4 rounded-xl p-5 transition-all hover:scale-[1.02]"
            >
              <div className="relative z-10 flex items-center gap-4">
                <Mail size={24} className="text-primary" />

                <div>
                  <p className="font-display text-sm tracking-wider uppercase text-muted-foreground">
                    Email
                  </p>

                  <p className="text-foreground">
                    juan.sebastian.ossa97@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/juan-sebastian-ossa-pulido-292328267/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border flex items-center gap-4 rounded-xl p-5 transition-all hover:scale-[1.02]"
            >
              <div className="relative z-10 flex items-center gap-4">
                <Linkedin size={24} className="text-primary" />

                <div>
                  <p className="font-display text-sm tracking-wider uppercase text-muted-foreground">
                    LinkedIn
                  </p>

                  <p className="text-foreground">
                    Juan Sebastian Ossa
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}