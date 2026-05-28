// src/components/Footer.jsx
import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 bg-surface-1/40">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-text-tertiary text-xs font-mono">
        <div className="flex items-center gap-2">
          <Terminal size={12} />
          <span>Erox::dev © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>built with</span>
          <span>↓</span>
          <span>arch black magic</span>
        </div>
        <div className="text-accent-muted/60">[ experimental ]</div>
      </div>
    </footer>
  );
};

export default Footer;
