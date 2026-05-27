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
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">toolkit</h2>
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
          className="mt-16 max-w-md mx-auto bg-surface-1 rounded-lg border border-border p-4"
        >
          <div className="flex justify-between text-xs font-mono text-accent-muted mb-2">
            <span>$ system info</span>
            <span>skillset loaded</span>
          </div>
          <div className="w-full bg-surface-2 h-1.5 rounded-full">
            <div className="bg-accent-muted/60 w-11/12 h-full rounded-full"></div>
          </div>
          <div className="flex justify-between mt-2 text-text-tertiary text-[10px] font-mono">
            <span>proficiency ~92%</span>
            <span>continuous build</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;