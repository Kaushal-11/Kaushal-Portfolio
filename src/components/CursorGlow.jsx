import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Each blob lags a little more than the last (looser spring), so as they
// trail behind the cursor and overlap, the goo filter below fuses them
// into one continuous liquid shape instead of a string of separate dots.
const TRAIL = [
  { size: 58, color: 'rgba(34,211,238,0.95)', damping: 14, stiffness: 320, mass: 0.3 },
  { size: 76, color: 'rgba(103,232,249,0.85)', damping: 15, stiffness: 230, mass: 0.4 },
  { size: 92, color: 'rgba(167,139,250,0.8)', damping: 18, stiffness: 165, mass: 0.5 },
  { size: 102, color: 'rgba(196,181,253,0.68)', damping: 21, stiffness: 120, mass: 0.6 },
  { size: 108, color: 'rgba(251,146,60,0.55)', damping: 25, stiffness: 85, mass: 0.7 },
  { size: 98, color: 'rgba(167,139,250,0.4)', damping: 29, stiffness: 58, mass: 0.85 },
];

export default function CursorGlow({ containerRef }) {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const opacity = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (inside) {
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
        opacity.set(1);
      } else {
        opacity.set(0);
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [containerRef, x, y, opacity]);

  return (
    <motion.div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" style={{ opacity }}>
      {/* goo filter: blurs the blobs then snaps the alpha edge back sharp,
          which is what makes overlapping circles fuse into a liquid blob */}
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="cursor-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 mix-blend-screen" style={{ filter: 'url(#cursor-goo)' }}>
        {TRAIL.map((t, i) => (
          <TrailBlob key={i} x={x} y={y} config={t} />
        ))}
      </div>
    </motion.div>
  );
}

function TrailBlob({ x, y, config }) {
  const springX = useSpring(x, { damping: config.damping, stiffness: config.stiffness, mass: config.mass });
  const springY = useSpring(y, { damping: config.damping, stiffness: config.stiffness, mass: config.mass });

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: springX,
        top: springY,
        translateX: '-50%',
        translateY: '-50%',
        width: config.size,
        height: config.size,
        background: config.color,
      }}
    />
  );
}
