import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { devDiariesData } from '../data/devDiariesData';

const DevDiaries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    document.title = 'Dev Diaries — Malya Srivastava';
    window.scrollTo(0, 0);
  }, []);

  const current = devDiariesData[currentIndex];

  const navigate = useCallback(
    (dir) => {
      setDirection(dir);
      setCurrentIndex((prev) => {
        if (dir === 1) return (prev + 1) % devDiariesData.length;
        return (prev - 1 + devDiariesData.length) % devDiariesData.length;
      });
    },
    []
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-[80vh]">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
          Dev <span className="text-[var(--accent)]">Diaries</span>
        </h1>
        <p className="font-sans text-base text-[var(--text-secondary)] max-w-lg leading-relaxed">
          Snapshots from hackathons, internships, and late-night coding sessions.
          The visual story behind the code.
        </p>
      </motion.div>

      {/* Slider Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="glass-card p-4 sm:p-6 mb-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-4 items-start min-h-[400px]">
          {/* Left Context Note */}
          <div className="hidden lg:flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${currentIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-2">
                  Context
                </p>
                <p className="font-sans text-sm font-medium text-[var(--text-primary)] mb-1">
                  {current.contextLeft.label}
                </p>
                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">
                  {current.contextLeft.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Central Media */}
          <div className="relative overflow-hidden rounded-lg bg-[var(--glass-fill)] aspect-[16/10]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={currentIndex}
                src={current.media}
                alt={current.title}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0B]/80 to-transparent p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-lime-electric bg-lime-electric/10 px-2 py-0.5 rounded mb-2">
                    {current.category}
                  </span>
                  <h2 className="font-mono text-lg sm:text-xl font-bold text-white">
                    {current.title}
                  </h2>
                  <p className="font-mono text-xs text-white/60">{current.date}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#0A0A0B]/60 backdrop-blur-sm border border-white/10 hover:bg-[#0A0A0B]/80 transition-all duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#0A0A0B]/60 backdrop-blur-sm border border-white/10 hover:bg-[#0A0A0B]/80 transition-all duration-200"
              aria-label="Next slide"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </div>

          {/* Right Context Note */}
          <div className="hidden lg:flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-2">
                  Highlights
                </p>
                <p className="font-sans text-sm font-medium text-[var(--text-primary)] mb-1">
                  {current.contextRight.label}
                </p>
                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">
                  {current.contextRight.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile context notes */}
        <div className="grid grid-cols-2 gap-3 mt-4 lg:hidden">
          <div className="glass-card p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-1">
              Context
            </p>
            <p className="font-sans text-xs font-medium text-[var(--text-primary)]">
              {current.contextLeft.label}
            </p>
          </div>
          <div className="glass-card p-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] mb-1">
              Highlights
            </p>
            <p className="font-sans text-xs font-medium text-[var(--text-primary)]">
              {current.contextRight.label}
            </p>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {devDiariesData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'bg-[var(--accent)] w-6'
                  : 'bg-[var(--glass-border)] hover:bg-[var(--text-muted)]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* All Entries Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h3 className="font-mono text-lg font-bold text-[var(--text-primary)] mb-4">
          All Entries
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {devDiariesData.map((entry, idx) => (
            <button
              key={entry.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden group ${
                idx === currentIndex ? 'ring-2 ring-[var(--accent)]' : ''
              }`}
            >
              <img
                src={entry.media}
                alt={entry.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                <p className="font-mono text-xs text-white truncate">
                  {entry.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DevDiaries;
