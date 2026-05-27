import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import TypewriterText from './TypewriterText.jsx';

const Hero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative">
      <div className="container-custom text-center">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-1/40 border border-border mb-6"
        >
          <Cpu size={14} className="text-accent-muted" />
          <span className="font-mono text-xs text-text-tertiary tracking-wide">experimental engineering</span>
        </motion.div>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5"
        >
          <span className="text-text-primary">0x1F</span>
          <span className="text-accent-muted"> / builder</span>
        </motion.h1>

        <div className="text-text-secondary text-xl md:text-2xl font-mono mb-8">
          {prefersReducedMotion ? (
            <span>I build weird things that actually work.</span>
          ) : (
            <TypewriterText text="I build weird things that actually work." delay={70} className="inline-block" />
          )}
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 0.4 }}
          className="flex gap-5 justify-center"
        >
          <a href="#projects" className="px-6 py-2.5 rounded-full bg-surface-1 border border-border text-text-primary font-medium text-sm hover:bg-surface-2 transition-colors">
            explore work
          </a>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-surface-1 border border-border text-text-secondary font-medium text-sm hover:text-text-primary transition-colors">
            connect
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-muted/5 rounded-full blur-[80px] -z-10" />
    </section>
  );
};

export default Hero;