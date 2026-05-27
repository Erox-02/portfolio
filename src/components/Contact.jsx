import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Send } from 'lucide-react';

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
          <p className="text-text-secondary text-center mb-8">
            Open to weird collabs, research chats, or just saying hi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="https://github.com/0x1fbuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface-2/50 hover:bg-surface-2 transition-colors"
            >
              <Github size={18} className="text-accent-soft" />
              <span className="text-text-secondary text-sm">github/0x1fbuilder</span>
            </a>
            <a
              href="mailto:builder@0x1f.dev"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-surface-2/50 hover:bg-surface-2 transition-colors"
            >
              <Mail size={18} className="text-accent-soft" />
              <span className="text-text-secondary text-sm">builder@0x1f.dev</span>
            </a>
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