import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiArrowUpRight } from 'react-icons/fi';
import { experience } from '../data/portfolioData.js';
import SectionWrapper from './SectionWrapper.jsx';

function LogoBadge({ logo, org, size = 'h-10 w-10 rounded-xl text-sm' }) {
  const [errored, setErrored] = useState(false);

  if (!logo || errored) {
    return (
      <span className={`flex shrink-0 items-center justify-center bg-signal-gradient font-display font-semibold text-ink-950 ${size}`}>
        {org.charAt(0)}
      </span>
    );
  }

  return (
    <span className={`flex shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-white ${size}`}>
      <img
        src={logo}
        alt={`${org} logo`}
        onError={() => setErrored(true)}
        className="h-full w-full object-contain p-1"
      />
    </span>
  );
}

export default function Experience() {
  const [active, setActive] = useState(null);

  return (
    <SectionWrapper
      id="experience"
      eyebrow="02 · Timeline"
      title="Where the work has happened."
      subtitle="Tap any role to see the full breakdown."
    >
      <div className="relative">
        {/* center line, desktop only */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />

        <div className="space-y-6 md:space-y-10">
          {experience.map((exp, i) => {
            const leftSide = i % 2 === 0;
            return (
              <div key={exp.role + exp.org} className="relative flex md:items-center md:justify-center">
                {/* dot on the center line */}
                <span className="absolute left-1/2 top-1/2 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink-900 bg-signal-gradient shadow-glow md:block" />

                <motion.button
                  type="button"
                  onClick={() => setActive(exp)}
                  initial={{ opacity: 0, x: leftSide ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className={`glass-card w-full rounded-2xl p-6 text-left transition-shadow duration-300 hover:shadow-glow sm:p-7 md:w-[45%] ${
                    leftSide ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                  }`}
                >
                  <div className={`flex items-start justify-between gap-3 ${leftSide ? 'md:flex-row-reverse' : ''}`}>
                    <LogoBadge logo={exp.logo} org={exp.org} />
                    <div className="flex items-start gap-2">
                      <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] tracking-wide text-cyan whitespace-nowrap">
                        {exp.period}
                      </span>
                      <FiArrowUpRight className="mt-1 shrink-0 text-mist-700" />
                    </div>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-mist-100">{exp.role}</h3>
                  <p className="mt-1 text-sm text-mist-500">{exp.org}</p>
                  <p className={`mt-3 font-mono text-xs text-violet ${leftSide ? 'md:text-right' : ''}`}>
                    {exp.tags[0]} · tap to expand
                  </p>
                </motion.button>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            style={{
              background:
                'radial-gradient(circle at 50% 20%, rgba(34,211,238,0.08), transparent 60%), rgba(7,7,11,0.85)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-800 shadow-glow"
            >
              {/* decorative glow corners */}
              <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-cyan/20 blur-[70px]" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-violet/20 blur-[70px]" />

              {/* header band */}
              <div className="relative border-b border-white/[0.06] bg-signal-gradient-soft px-7 pb-6 pt-7 sm:px-8">
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-mist-300 transition-colors hover:bg-white/10 hover:text-cyan"
                >
                  <FiX size={16} />
                </button>

                <div className="flex items-start gap-4">
                  <LogoBadge logo={active.logo} org={active.org} size="h-12 w-12 rounded-2xl text-lg" />
                  <div className="min-w-0 pr-8">
                    <span className="inline-block rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[10px] tracking-wide text-cyan">
                      {active.period}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-mist-100">{active.role}</h3>
                    <p className="mt-1 text-sm text-mist-500">{active.org} · {active.location}</p>
                  </div>
                </div>
              </div>

              {/* body */}
              <div className="relative max-h-[60vh] overflow-y-auto px-7 py-6 sm:px-8">
                <ul className="space-y-4">
                  {active.points.map((p, i) => (
                    <li key={p} className="flex gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.05] font-mono text-[11px] text-cyan">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm leading-relaxed text-mist-300">{p}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                  {active.tags.map((t, i) => {
                    const palette = ['border-cyan/30 text-cyan bg-cyan/5', 'border-violet/30 text-violet bg-violet/5', 'border-amber/30 text-amber bg-amber/5'];
                    return (
                      <span key={t} className={`rounded-full border px-3 py-1 font-mono text-[11px] ${palette[i % palette.length]}`}>
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
