import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(100);
      return;
    }
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 bg-background z-[100] flex items-center justify-center">
      <div className="w-64 text-center">
        <div className="font-mono text-accent-muted text-lg mb-5 tracking-wide">booting</div>
        <div className="h-px w-full bg-border overflow-hidden">
          <motion.div
            className="h-full bg-accent-muted/60"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.1 }}
          />
        </div>
        <div className="mt-4 text-text-tertiary text-[11px] font-mono">
          {progress < 100 ? 'loading modules...' : 'ready.'}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;