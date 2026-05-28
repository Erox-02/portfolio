import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CircuitBoard, GitBranch } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const aboutPoints = [
  {
    icon: Cpu,
    title: 'Linux Experimentation',
    desc: 'Daily driving Arch Linux, tweaking KDE, testing kernels, and cutting down system bloat.'
  },
  {
    icon: Cpu,
    title: 'Local AI Systems',
    desc: 'Training small ML models, building privacy-focused tools, and running LLMs locally.'
  },
  {
    icon: CircuitBoard,
    title: 'Hardware & Bots',
    desc: 'Exploring drones, microcontrollers, automation, and robotics projects.'
  },
  {
    icon: GitBranch,
    title: 'Optimization Mindset',
    desc: 'Reducing latency, lowering RAM usage, and squeezing every bit of performance from hardware.'
  },
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
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            about
          </h2>
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
              I'm a{' '}
              <span className="text-text-primary font-medium">
                15-year-old builder
              </span>{' '}
              With main setup runs Arch Linux with KDE, although Arch
              occasionally decides Proton should stop cooperating,
              which is why I keep a Nobara dual-boot around to play genshin.
            </p>

            <p className="text-text-tertiary">
              Most of my projects start with a random frustration and end
              with "final_last_fr_last git commit. I enjoy working on local 
              LLM systems, Linux optimization, privacy tooling, automation,
              and anything that helps me understand how computers actually work.
            </p>

            <p className="text-text-tertiary">
              I like running models locally, squeezing extra performance
              out of hardware. If something can be optimized, I'm probably
              already trying because i use arch btw XD.
            </p>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-muted">
                <span className="w-1.5 h-1.5 bg-accent-muted rounded-full"></span>
                <span>
                  currently: building PII masking models & exploring Proton
                </span>
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

                <h3 className="font-semibold text-text-primary mb-1">
                  {point.title}
                </h3>

                <p className="text-text-tertiary text-sm">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
