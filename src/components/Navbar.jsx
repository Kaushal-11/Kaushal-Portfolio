import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-900/70 backdrop-blur-xl border-b border-white/[0.06] py-3' : 'py-6'
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <a href="#home" className="font-display font-semibold text-lg tracking-tight text-mist-100">
          Kaushal<span className="text-signal">.ai</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-mono text-[13px] tracking-wide text-mist-500 hover:text-cyan transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Kaushal_Resume.pdf"
            download
            className="flex items-center gap-1.5 font-mono text-[13px] tracking-wide text-mist-500 transition-colors duration-200 hover:text-cyan"
          >
            <FiDownload /> Resume
          </a>
          <a href="#contact" className="btn-primary !py-2 !px-5 text-xs">
            Let's talk
          </a>
        </nav>

        <button
          className="md:hidden text-mist-100 text-2xl"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-ink-900/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="py-3 font-mono text-sm text-mist-300 border-b border-white/[0.04] last:border-none"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/Kaushal_Resume.pdf"
                download
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-3 font-mono text-sm text-cyan"
              >
                <FiDownload /> Download resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
