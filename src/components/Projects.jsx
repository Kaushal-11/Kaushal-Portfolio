import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiLayers } from 'react-icons/fi';
import { projects } from '../data/projects.js';
import { profile } from '../data/portfolioData.js';
import SectionWrapper from './SectionWrapper.jsx';

const TECH_LABEL = { LLM: 'LLM', NLP: 'NLP', DL: 'Deep Learning', ML: 'Machine Learning' };
const TECH_COLOR = {
  LLM: 'text-violet border-violet/30',
  NLP: 'text-cyan border-cyan/30',
  DL: 'text-amber border-amber/30',
  ML: 'text-cyan-soft border-cyan/30',
};

const CATEGORIES = ['NLP', 'ML', 'LLM', 'DL'];

// Cycles through 4 distinct visual treatments so the grid doesn't feel monotonous.
const VARIANT_CLASS = [
  'hover:[transform:perspective(900px)_rotateX(2deg)_rotateY(-2deg)_translateY(-6px)]',
  'hover:backdrop-blur-2xl hover:-translate-y-2',
  'hover:-translate-y-2 hover:scale-[1.015]',
  'hover:-translate-y-2 hover:[transform:perspective(900px)_rotateX(-2deg)_rotateY(2deg)_translateY(-6px)]',
];

function ProjectImage({ image, title }) {
  const [errored, setErrored] = useState(false);
  if (errored || !image) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-700 to-ink-900">
        <span className="px-4 text-center font-display text-sm font-medium text-mist-700">{title}</span>
      </div>
    );
  }
  return (
    <img
      src={image}
      alt={title}
      onError={() => setErrored(true)}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  );
}

function ProjectCard({ p, i }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
      className={`group glass-card relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${VARIANT_CLASS[i % VARIANT_CLASS.length]}`}
    >
      <div className="relative h-44 w-full overflow-hidden">
        <ProjectImage image={p.image} title={p.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
        {p.featured && (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ink-900/80 px-2.5 py-1 font-mono text-[10px] text-amber backdrop-blur">
            <FiStar /> Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-base font-semibold text-mist-100">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-500">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.technologies.map((t) => (
            <span key={t} className={`rounded-full border bg-white/[0.02] px-3 py-1 font-mono text-[11px] ${TECH_COLOR[t] || 'text-mist-500 border-white/10'}`}>
              {TECH_LABEL[t] || t}
            </span>
          ))}
        </div>

        {(p.githubLink || p.demoLink) && (
          <div className="mt-5 flex items-center gap-4 border-t border-white/[0.06] pt-4">
            {p.githubLink && (
              <a href={p.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-mist-500 transition-colors hover:text-cyan">
                <FiGithub /> Code
              </a>
            )}
            {p.demoLink && (
              <a href={p.demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-mist-500 transition-colors hover:text-cyan">
                <FiExternalLink /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [category, setCategory] = useState(null);

  const featured = projects.filter((p) => p.featured);
  const categorized = category ? projects.filter((p) => !p.featured && p.technologies.includes(category)) : [];

  return (
    <SectionWrapper id="projects" eyebrow="03 · Selected Work" title="Projects worth a closer look.">
      {/* Featured */}
      <div className="mb-6 flex items-center gap-2">
        <FiStar className="text-amber" />
        <p className="font-mono text-xs uppercase tracking-wider text-mist-500">Featured</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} />
        ))}
      </div>

      {/* Category browser */}
      <div className="mt-16">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-mist-500">
            <FiLayers /> Browse the rest by category
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((c) => {
            const count = projects.filter((p) => !p.featured && p.technologies.includes(c)).length;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(category === c ? null : c)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-xs tracking-wide transition-all duration-300 ${
                  category === c
                    ? 'border-transparent bg-signal-gradient text-ink-950'
                    : 'border-white/10 text-mist-500 hover:border-white/25 hover:text-mist-100'
                }`}
              >
                {TECH_LABEL[c]}
                <span className={`rounded-full px-1.5 text-[10px] ${category === c ? 'bg-ink-950/20' : 'bg-white/[0.06]'}`}>{count}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {category && (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {categorized.map((p, i) => (
                <ProjectCard key={p.id} p={p} i={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!category && (
          <p className="mt-6 text-sm text-mist-700">Pick a category above to browse the rest of the projects.</p>
        )}
      </div>

      <div className="mt-14 flex justify-center">
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
          <FiGithub /> See everything on GitHub
        </a>
      </div>
    </SectionWrapper>
  );
}
