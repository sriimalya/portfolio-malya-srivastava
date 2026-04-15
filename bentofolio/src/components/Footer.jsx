import { Github, Linkedin, Mail } from 'lucide-react';

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

const Footer = () => {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--bg-surface)]">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row justify-between items-center px-6 lg:px-8 py-6 gap-4">
        <p className="font-mono text-xs text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Malya Srivastava
        </p>

        <div className="flex gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;