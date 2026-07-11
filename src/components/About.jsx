import { motion } from 'framer-motion';
import { FiFlag, FiCpu, FiBookOpen, FiBook } from 'react-icons/fi';
import { profile, languages, education } from '../data/portfolioData.js';
import SectionWrapper from './SectionWrapper.jsx';

const ED_ICON = [FiFlag, FiCpu, FiBookOpen, FiBook];
const ED_ACCENT = ['violet', 'cyan', 'amber', 'cyan'];
const ACCENT_CLASS = {
  cyan: { ring: 'border-cyan/40', hoverRing: 'hover:border-cyan/40', text: 'text-cyan', wash: 'from-cyan/10', glow: 'bg-cyan' },
  violet: { ring: 'border-violet/40', hoverRing: 'hover:border-violet/40', text: 'text-violet', wash: 'from-violet/10', glow: 'bg-violet' },
  amber: { ring: 'border-amber/40', hoverRing: 'hover:border-amber/40', text: 'text-amber', wash: 'from-amber/10', glow: 'bg-amber' },
};

export default function About() {
  return (
    <SectionWrapper id="about" eyebrow="01 · About" title="The person behind the models.">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.95fr]">
        {/* Left: intro / journey / passion + languages */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-mist-300">{profile.about}</p>
          <p className="text-base leading-relaxed text-mist-500">{profile.journey}</p>
          <p className="text-base leading-relaxed text-mist-500">{profile.passion}</p>

          <div className="pt-4">
            <p className="eyebrow mb-5">Languages</p>
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <span className="text-sm font-medium text-mist-100">{lang.name}</span>
                    <span className="font-mono text-[11px] text-mist-500">{lang.level}</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                    <motion.div
                      className="h-full rounded-full bg-signal-gradient"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.fill}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: education, numbered-node ladder with distinct card shapes */}
        <div className="relative">
          <p className="eyebrow mb-6">Education</p>

          <div className="relative space-y-6">
            {/* connecting line behind the node badges */}
            <div className="absolute left-[27px] top-3 bottom-3 hidden w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent sm:block" />

            {education.map((ed, i) => {
              const isGoal = ed.status === 'goal';
              const accent = ACCENT_CLASS[ED_ACCENT[i % ED_ACCENT.length]];
              const Icon = ED_ICON[i % ED_ICON.length];

              return (
                <motion.div
                  key={ed.degree}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex gap-4 sm:gap-5"
                  style={{ perspective: 900 }}
                >
                  {/* numbered node badge */}
                  <span
                    className={`relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-2xl border bg-ink-800 text-lg ${accent.ring} ${accent.text}`}
                  >
                    <Icon />
                    {isGoal && (
                      <span className="absolute -right-1.5 -top-1.5 h-3 w-3 animate-pulse rounded-full bg-violet ring-2 ring-ink-900" />
                    )}
                  </span>

                  {/* content card, diagonal-cut corner for a distinct shape */}
                  <motion.div
                    whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                    className={`group relative flex-1 overflow-hidden border bg-white/[0.02] p-5 transition-colors duration-300 sm:p-6 ${
                      isGoal ? 'border-dashed border-violet/40 hover:border-violet/70' : `border-white/[0.07] ${accent.hoverRing}`
                    }`}
                    style={{ clipPath: 'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)' }}
                  >
                    {/* giant watermark index numeral */}
                    <span className="pointer-events-none absolute -bottom-3 -right-1 select-none font-display text-7xl font-bold text-white/[0.03]">
                      {String(education.length - i).padStart(2, '0')}
                    </span>

                    {/* corner wash on hover */}
                    <div className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${accent.wash} to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100`} />

                    <div className="relative flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-base font-semibold text-mist-100 sm:text-lg">{ed.degree}</h3>
                        <p className="mt-1 text-sm text-mist-500">{ed.school}</p>
                      </div>
                      <span className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide whitespace-nowrap ${accent.ring} ${accent.text}`}>
                        {isGoal ? 'Goal · ' + ed.period : ed.period}
                      </span>
                    </div>
                    <p className="relative mt-3 text-sm leading-relaxed text-mist-500">{ed.detail}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
