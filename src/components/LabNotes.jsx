// src/components/LabNotes.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Code2, Zap, GitBranch } from 'lucide-react';
import labNotesData from '../data/labNotesData';

const iconMap = {
  FlaskConical, Code2, Zap, GitBranch
};

const LabNotes = () => {
  return (
    <section id="labnotes" className="py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">lab notes</h2>
          <div className="w-12 h-px bg-accent-muted/40 mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {labNotesData.map((note, idx) => {
            const Icon = iconMap[note.icon] || FlaskConical;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08, duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-surface-1 rounded-xl border border-border p-5 hover:border-accent-muted/20 transition-all"
              >
                <Icon className="text-accent-soft w-5 h-5 mb-3" />
                <h3 className="font-medium text-text-primary text-base">{note.title}</h3>
                <p className="text-text-tertiary text-xs mt-1.5 opacity-80">{note.hint}</p>
                <div className="mt-3 text-right">
                  <span className="text-accent-muted text-[11px] font-mono">read log →</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LabNotes;