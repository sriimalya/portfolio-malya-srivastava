import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="mb-16"
    >
      <div className="glass-card p-8 sm:p-10 text-center">
        <h2 className="font-mono text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">
          Let's build something together
        </h2>
        <p className="font-sans text-sm text-[var(--text-secondary)] mb-6 max-w-md mx-auto leading-relaxed">
          Open to discussing backend systems, full-stack architecture, and new engineering challenges.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&to=malyasri0112@gmail.com"
            className="bg-lime-electric text-ink-dark px-6 py-2.5 rounded-full flex items-center gap-2 font-mono text-sm font-medium hover:brightness-105 active:translate-y-px transition-all duration-200"
          >
            <Mail size={16} /> Send an Email
          </a>
          <a
            href="https://github.com/sriimalya"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-2.5 rounded-full flex items-center gap-2 font-mono text-sm text-[var(--text-secondary)] hover:text-[var(--accent)]"
          >
            <ExternalLink size={16} /> GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;