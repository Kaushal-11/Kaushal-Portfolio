import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import CursorGlow from './CursorGlow.jsx';
import PhotoCard from './PhotoCard.jsx';
import { profile } from '../data/portfolioData.js';

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="snap-section relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* ambient background lines, subtle */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.07]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
              <path d="M 46 0 L 0 0 0 46" fill="none" stroke="#8B8B96" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <CursorGlow containerRef={heroRef} />

      <div className="container-page relative z-10 grid grid-cols-1 items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <p className="eyebrow mb-5">Portfolio</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-mist-100 sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-signal">{profile.name}</span>
          </h1>
          <div className="mt-4 h-9 font-mono text-lg text-mist-300 sm:text-xl">
            <TypeAnimation
              sequence={profile.role.flatMap((r) => [r, 1800])}
              wrapper="span"
              speed={45}
              deletionSpeed={60}
              repeat={Infinity}
              cursor
            />
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist-500 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View my work
            </a>
            <a href="/Kaushal_Resume.pdf" download className="btn-ghost">
              <FiDownload className="text-base" /> Download resume
            </a>
            <a href="#contact" className="btn-ghost">
              <FiMail className="text-base" /> Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-xl text-mist-500 transition-colors hover:text-cyan"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-mist-500 transition-colors hover:text-cyan"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-xl text-mist-500 transition-colors hover:text-cyan"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="order-1 md:order-2"
        >
          <PhotoCard />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-mist-500 hover:text-cyan"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HiOutlineArrowDown className="text-2xl" />
      </motion.a>
    </section>
  );
}
