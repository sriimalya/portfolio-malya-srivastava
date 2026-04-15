import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Terminal from './Terminal';

const terminalLines = [
  'turning ideas into shipped features',
  'shipping faster than my cold starts',
  'ai, backend, and systems in progress',
  'making systems behave (most days)',
  'debugging what i just shipped',
];

const socialLinks = [
  {
    href: 'https://github.com/sriimalya',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/malya-srivastava-5a4254229/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://mail.google.com/mail/?view=cm&to=malyasri0112@gmail.com',
    icon: Mail,
    label: 'Email',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-16"
    >
      {/* Intro Card — spans 3 columns */}
      <motion.div
        variants={itemVariants}
        className="lg:col-span-3 glass-card p-6 sm:p-8 flex flex-col justify-center"
      >
        <h1 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Hi, I am{' '}
          <span className="text-[var(--accent)]">Malya Srivastava</span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] mb-6 max-w-[55ch] leading-relaxed">
          Full Stack Developer building{' '}
          <span className="text-[var(--text-primary)] font-medium italic">
            fast, scalable, and production-ready{' '}
          </span>
          web applications with Next.js, Node.js, and PostgreSQL.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://drive.google.com/file/d/1ZWAzZG6S-wehzEgLf-AgAex9oeLgw84E/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-electric text-ink-dark px-6 py-2.5 rounded-full flex items-center gap-2 font-mono text-sm font-medium hover:brightness-105 active:translate-y-px transition-all duration-200"
          >
            Resume <ExternalLink size={16} />
          </a>

          <div className="flex gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--glass-border)] hover:border-[var(--glass-border-hover)] hover:bg-[var(--accent-wash)] transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-[18px] h-[18px] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Terminal Card — spans 2 columns */}
      <motion.div variants={itemVariants} className="lg:col-span-2 min-h-[240px]">
        <Terminal lines={terminalLines} typingSpeed={45} pauseDuration={3500} />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;