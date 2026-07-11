import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowUp } from 'react-icons/fi';
import { profile } from '../data/portfolioData.js';

const QUICK_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="snap-section relative border-t border-white/[0.06] bg-ink-950/60">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <a href="#home" className="font-display text-lg font-semibold text-mist-100">
              Kaushal<span className="text-signal">.ai</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist-500">
              AI engineer working across machine learning, deep learning, NLP, computer vision and generative AI.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-lg text-mist-500 transition-colors hover:text-cyan">
                <FiGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-lg text-mist-500 transition-colors hover:text-cyan">
                <FiLinkedin />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-lg text-mist-500 transition-colors hover:text-cyan">
                <FiMail />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Quick links</p>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-sm text-mist-500 transition-colors hover:text-cyan">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <ul className="space-y-2.5 text-sm text-mist-500">
              <li>{profile.email}</li>
            </ul>
            <a
              href="/Kaushal_Resume.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-cyan transition-colors hover:text-cyan-soft"
            >
              <FiDownload /> Download resume
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-center font-mono text-xs text-mist-700 sm:text-left">
            © {year} {profile.fullName}. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-1.5 font-mono text-xs text-mist-500 transition-colors hover:text-cyan"
          >
            Back to top <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
