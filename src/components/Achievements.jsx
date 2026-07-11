import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiUsers, FiZap, FiBookOpen, FiMapPin } from 'react-icons/fi';
import { publications, certifications, hackathons, leadership } from '../data/portfolioData.js';
import SectionWrapper from './SectionWrapper.jsx';

const TABS = [
  { id: 'publications', label: 'Publications', icon: <FiBookOpen /> },
  { id: 'certifications', label: 'Certifications', icon: <FiAward /> },
  { id: 'hackathons', label: 'Hackathons', icon: <FiZap /> },
  { id: 'leadership', label: 'Leadership', icon: <FiUsers /> },
];

function PublicationsList() {
  return (
    <div className="space-y-5">
      {publications.map((pub) => (
        <a
          key={pub.title}
          href={pub.link}
          target="_blank"
          rel="noreferrer"
          className="group glass-card block rounded-2xl p-6 transition-shadow duration-300 hover:shadow-glow-violet sm:p-7"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-lg font-semibold text-mist-100">{pub.title}</h3>
            <FiExternalLink className="mt-1 shrink-0 text-mist-500 group-hover:text-cyan" />
          </div>
          <p className="mt-2 text-sm text-mist-500">{pub.venue} · {pub.publisher}</p>
          <p className="mt-1 font-mono text-xs text-mist-700">{pub.authors} · {pub.year}</p>
          <p className="mt-4 text-sm leading-relaxed text-mist-300">{pub.summary}</p>
        </a>
      ))}
    </div>
  );
}

function CertificationsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {certifications.map((c) => (
        <a
          key={c.title}
          href={c.link}
          target="_blank"
          rel="noreferrer"
          className="group glass-card flex items-center justify-between gap-4 rounded-2xl border border-white/[0.06] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40"
        >
          <div>
            <p className="text-sm font-medium text-mist-100">{c.title}</p>
            <p className="mt-1 text-xs text-mist-500">{c.issuer} · {c.date}</p>
          </div>
          <FiExternalLink className="shrink-0 text-mist-700 transition-colors group-hover:text-amber" />
        </a>
      ))}
    </div>
  );
}

function HackathonsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {hackathons.map((h) => (
        <div
          key={h.name}
          className="glass-card relative overflow-hidden rounded-2xl border border-white/[0.06] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-glow sm:p-7"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="font-display text-base font-semibold text-mist-100 sm:text-lg">{h.name}</h3>
            <span className="shrink-0 rounded-full bg-signal-gradient px-3 py-1 font-mono text-[11px] font-medium text-ink-950">
              {h.prize}
            </span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-mist-500">
            <span>{h.date}</span>
            <span className="flex items-center gap-1"><FiMapPin className="text-[11px]" /> {h.location}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-mist-300">{h.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {h.tech.map((t) => (
              <span key={t} className="rounded-full bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-mist-500">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function LeadershipList() {
  return (
    <div className="space-y-4">
      {leadership.map((v) => (
        <div
          key={v.role}
          className="glass-card rounded-2xl border border-white/[0.06] p-6 transition-colors duration-300 hover:border-violet/40 sm:p-7"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-base font-semibold text-mist-100">{v.role}</h3>
            {v.period && <span className="font-mono text-[11px] text-mist-700">{v.period}</span>}
          </div>
          <p className="mt-1 text-sm text-mist-500">{v.org}</p>
          <p className="mt-3 text-sm leading-relaxed text-mist-300">{v.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default function Achievements() {
  const [tab, setTab] = useState('publications');

  return (
    <SectionWrapper id="achievements" eyebrow="05 · Recognition" title="Achievements & involvement.">
      <div className="mb-10 flex flex-wrap gap-3">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-xs tracking-wide transition-all duration-300 ${
              tab === t.id
                ? 'border-transparent bg-signal-gradient text-ink-950'
                : 'border-white/10 text-mist-500 hover:border-white/25 hover:text-mist-100'
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {tab === 'publications' && <PublicationsList />}
          {tab === 'certifications' && <CertificationsGrid />}
          {tab === 'hackathons' && <HackathonsGrid />}
          {tab === 'leadership' && <LeadershipList />}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
