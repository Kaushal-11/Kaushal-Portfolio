import { motion } from 'framer-motion';
import { FiCpu, FiBox, FiTerminal } from 'react-icons/fi';
import { skills } from '../data/portfolioData.js';
import SectionWrapper from './SectionWrapper.jsx';

const ICONS = [<FiCpu />, <FiBox />, <FiTerminal />];

const ACCENT = [
  {
    iconWrap: 'bg-cyan/10 text-cyan',
    chipHover: 'hover:border-cyan/60 hover:text-cyan hover:bg-cyan/5',
    edge: 'hover:border-cyan/40 hover:shadow-glow',
    bar: 'bg-cyan',
  },
  {
    iconWrap: 'bg-violet/10 text-violet',
    chipHover: 'hover:border-violet/60 hover:text-violet hover:bg-violet/5',
    edge: 'hover:border-violet/40 hover:shadow-glow-violet',
    bar: 'bg-violet',
  },
  {
    iconWrap: 'bg-amber/10 text-amber',
    chipHover: 'hover:border-amber/60 hover:text-amber hover:bg-amber/5',
    edge: 'hover:border-amber/40',
    bar: 'bg-amber',
  },
];

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="04 · Stack"
      title="Tools I reach for."
      subtitle="A working stack shaped by hands-on research across the AI landscape."
    >
      <div className="space-y-5">
        {skills.map((group, gi) => {
          const accent = ACCENT[gi % ACCENT.length];
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className={`glass-card relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all duration-300 hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-8 sm:p-7 ${accent.edge}`}
            >
              <span className={`absolute inset-y-0 left-0 w-1 ${accent.bar}`} />

              <div className="flex shrink-0 items-center gap-3 sm:w-56">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${accent.iconWrap}`}>
                  {ICONS[gi % ICONS.length]}
                </span>
                <h3 className="font-display text-base font-semibold text-mist-100">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.06 + i * 0.02 }}
                    whileHover={{ y: -2 }}
                    className={`rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-mist-300 transition-colors duration-200 ${accent.chipHover}`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
