import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Send, Instagram, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">connect</h2>
          <div className="w-12 h-px bg-accent-muted/40 mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-2xl mx-auto bg-surface-1 rounded-xl border border-border p-8"
        >
          {/* Updated text style to fit the "ping for cool collabs" conversation */}
          <p className="text-text-secondary text-center mb-8">
            Always down to talk shop, work on systems engineering, or jump on cool collabs.
          </p>
          
          {/* Main layout grid for contact links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://github.com/Erox-02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface-2/50 hover:bg-surface-2 transition-colors"
            >
              <Github size={18} className="text-accent-soft" />
              <span className="text-text-secondary text-sm">github.com/Erox-02</span>
            </a>
            
            <a
              href="mailto:relic.of.sky@gmail.com"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface-2/50 hover:bg-surface-2 transition-colors"
            >
              <Mail size={18} className="text-accent-soft" />
              <span className="text-text-secondary text-sm">relic.of.sky@gmail.com</span>
            </a>

            <a
              href="https://instagram.com/tech_.erox"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface-2/50 hover:bg-surface-2 transition-colors"
            >
              <Instagram size={18} className="text-accent-soft" />
              <span className="text-text-secondary text-sm">@tech_.erox</span>
            </a>

            {/* Static Discord card item (not a link) matching the styling */}
            <div className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface-2/50">
              <MessageSquare size={18} className="text-accent-soft" />
              <span className="text-text-secondary text-sm">discord: tech_.erox</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <div className="inline-flex items-center gap-2 text-xs text-text-tertiary font-mono">
              <Send size={12} />
              <span>PGP fingerprint: 1F3A B7C9 · signal available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
