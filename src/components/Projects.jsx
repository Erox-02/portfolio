import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import projectsData from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-surface-1/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">featured projects</h2>
          <div className="w-12 h-px bg-accent-muted/40 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-surface-1 rounded-xl border border-border overflow-hidden hover:border-accent-muted/30 transition-all hover:-translate-y-1"
            >
              <div className="h-32 bg-gradient-to-br from-surface-2 to-surface-1/50" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-tertiary text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-surface-2 border border-border text-accent-muted font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-1.5 text-text-tertiary hover:text-text-primary transition text-sm">
                    <Github size={15} /> GitHub
                  </a>
                  {project.liveDemo && (
                    <a href="#" className="flex items-center gap-1.5 text-text-tertiary hover:text-text-primary transition text-sm">
                      <ExternalLink size={15} /> demo
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
};

export default Projects;