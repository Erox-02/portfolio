import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, GitBranch } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const aboutPoints = [
  { icon: Cpu, title: 'Linux experimentation', desc: 'Daily driver on custom kernels, Wayland tinkering, and performance tuning.' },
  { icon: Cpu, title: 'AI systems', desc: 'Building tiny LLMs, RAG pipelines, and pragmatic NLP tools.' },
  { icon: CircuitBoard, title: 'Robotics curiosity', desc: 'Autonomous agents, sensor fusion, embedded prototyping.' },
  { icon: GitBranch, title: 'Optimization mindset', desc: 'Shaving milliseconds, reducing memory, squeezing every drop of performance.' },
];

const About = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">about</h2>
          <div className="w-12 h-px bg-accent-muted/40 mx-auto mt-4 mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-5 max-w-xl mx-auto lg:mx-0"
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm a <span className="text-text-primary font-medium">15-year-old builder</span> who breaks things open to understand their core.
              From kernel parameters to training small ML models on modest hardware,
              I believe in <span className="text-accent-muted">radical hands-on engineering</span>.
            </p>
            <p className="text-text-tertiary">
              My lab runs on curiosity, caffeine, and the urge to automate everything. I build from scratch,
              optimize until it's elegant, and document every weird discovery.
            </p>
            <div className="pt-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-muted">
                <span className="w-1.5 h-1.5 bg-accent-muted rounded-full"></span>
                <span>currently: building something weird</span>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {aboutPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-surface-1 rounded-xl border border-border p-5 hover:border-accent-muted/20 transition-all"
              >
                <point.icon className="text-accent-soft w-6 h-6 mb-3" />
                <h3 className="font-semibold text-text-primary mb-1">{point.title}</h3>
                <p className="text-text-tertiary text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;