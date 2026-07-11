import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function ScrollRail() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
    >
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          aria-current={active === id ? 'true' : undefined}
          className="group relative flex items-center justify-end"
        >
          <span className="absolute right-6 whitespace-nowrap font-mono text-[11px] tracking-wide text-mist-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? 'h-6 w-1.5 bg-signal-gradient shadow-glow'
                : 'h-1.5 w-1.5 bg-mist-700 group-hover:bg-mist-300'
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
