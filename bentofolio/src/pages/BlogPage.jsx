import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { blogData, blogCategories } from '../data/blogData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = 'Blog — Malya Srivastava';
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-[80vh]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-card p-6 sm:p-8 mb-8"
      >
        <h1 className="font-mono text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
          Blog & <span className="text-[var(--accent)]">Insights</span>
        </h1>
        <p className="font-sans text-base text-[var(--text-secondary)] mb-6 max-w-lg leading-relaxed">
          Technical deep-dives, architecture decisions, and engineering lessons from production systems.
        </p>

        {/* Search */}
        <div className="relative max-w-md">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
            size={18}
          />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[var(--glass-fill)] border border-[var(--glass-border)] rounded-full py-2.5 pl-11 pr-4 font-sans text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--glass-border-hover)] transition-all duration-300"
          />
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {blogCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-lime-electric text-ink-dark font-medium'
                : 'border border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-[var(--glass-border-hover)] hover:bg-[var(--accent-wash)]'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Posts */}
      {filteredPosts.length > 0 ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Featured Post (first post gets wide treatment) */}
          {featuredPost && (
            <motion.article
              variants={cardVariants}
              className="glass-card overflow-hidden mb-6 group cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-[var(--glass-fill)]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-lime-electric text-ink-dark text-[10px] font-mono font-medium px-2.5 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <h2 className="font-mono text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {featuredPost.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--glass-fill)] border border-[var(--glass-border)] px-2 py-0.5 rounded-full flex items-center gap-1"
                      >
                        <Tag size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* Remaining Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {remainingPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                className="glass-card overflow-hidden group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--glass-fill)]">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-lime-electric text-ink-dark text-[10px] font-mono font-medium px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="font-mono text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="font-sans text-xs text-[var(--text-secondary)] mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {post.abstract}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--glass-fill)] border border-[var(--glass-border)] px-1.5 py-0.5 rounded-full flex items-center gap-0.5"
                      >
                        <Tag size={8} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)] pt-3 border-t border-[var(--glass-border)]">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="glass-card text-center py-16">
          <p className="font-sans text-base text-[var(--text-secondary)]">
            No articles found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
            className="mt-3 font-mono text-sm text-[var(--accent)] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPage;