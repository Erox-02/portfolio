import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface-1/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            toolkit
          </h2>
          <div className="w-12 h-px bg-accent-muted/40 mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skillsData.map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03, duration: 0.2 }}
              viewport={{ once: true }}
              className="px-5 py-2 rounded-full bg-surface-1 border border-border text-text-secondary text-sm font-medium hover:border-accent-muted/40 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto bg-surface-1 rounded-xl border border-border overflow-hidden shadow-card"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2/40">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-muted/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent-muted/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent-muted/20" />

            <span className="ml-3 text-xs font-mono text-text-tertiary">
              user@erox:~/
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-5 font-mono text-sm space-y-2">
            <div className="text-accent-muted">
              $ neofetch
            </div>

            <div className="text-text-secondary">
              user@erox
            </div>

            <div className="text-text-tertiary">
              os............... Arch Linux + Nobara
            </div>

            <div className="text-text-tertiary">
              desktop.......... KDE Plasma
            </div>

            <div className="text-text-tertiary">
              shell............ zsh
            </div>

            <div className="text-text-tertiary">
              focus............ Local AI Systems
            </div>

            <div className="text-text-tertiary">
              projects......... HBP100 / TuneX / Scorpio Bot
            </div>

            <div className="text-text-tertiary">
              interests........ Linux, Robotics, NLP
            </div>

            <div className="text-text-tertiary">
              current.......... PII Masking Models
            </div>

            <div className="text-text-tertiary">
              status........... optimizing everything
            </div>

            <div className="pt-3 text-accent-muted">
              $
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
