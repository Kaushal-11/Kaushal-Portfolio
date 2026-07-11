import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ORBIT_RADIUS = 220;
const ORBIT_DURATION = 36;

const ORBIT_ITEMS = [
  { label: 'Machine Learning', angle: 0, color: 'cyan' },
  { label: 'Deep Learning', angle: 40, color: 'violet' },
  { label: 'NLP', angle: 80, color: 'amber' },
  { label: 'Computer Vision', angle: 120, color: 'cyan' },
  { label: 'Speech AI', angle: 160, color: 'violet' },
  { label: 'Reinforcement Learning', angle: 200, color: 'amber' },
  { label: 'Generative AI', angle: 240, color: 'cyan' },
  { label: 'Multimodal AI', angle: 280, color: 'violet' },
  { label: 'RAG', angle: 320, color: 'amber' },
];

const COLOR_CLASS = {
  cyan: 'border-cyan/40 text-cyan bg-cyan/10',
  violet: 'border-violet/40 text-violet bg-violet/10',
  amber: 'border-amber/40 text-amber bg-amber/10',
};

function OrbitingChips() {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2 hidden h-0 w-0 sm:block"
      animate={{ rotate: 360 }}
      transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
    >
      {ORBIT_ITEMS.map((item) => (
        <div
          key={item.label}
          className="absolute left-0 top-0"
          style={{
            transform: `rotate(${item.angle}deg) translateX(${ORBIT_RADIUS}px) rotate(${-item.angle}deg)`,
            transformOrigin: '0 0', // rotate around the shared orbit center, not this div's own box
          }}
        >
          <motion.span
            className={`glass-card pointer-events-auto whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[10px] ${COLOR_CLASS[item.color]}`}
            style={{ display: 'inline-block', translateX: '-50%', translateY: '-50%' }} // let Framer own the translate
            animate={{ rotate: -360 }}
            transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear' }}
          >
            {item.label}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}

export default function PhotoCard() {
  const ref = useRef(null);
  const [imgError, setImgError] = useState(false);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [8, -8]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), { damping: 20, stiffness: 200 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className="relative mx-auto w-[280px] sm:w-[360px] lg:w-[400px]" style={{ perspective: 1400 }}>
      {/* ambient glow behind the cutout, blended from all 3 theme colors */}
      <div className="absolute inset-0 scale-90 rounded-full bg-signal-gradient opacity-25 blur-[70px]" />

      {/* tech stack orbiting the cutout */}
      <OrbitingChips />

      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative"
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(50px)' }}
        >
          {!imgError ? (
            <img
              src="/profile-cutout.png"
              alt="Kaushal Bhanderi"
              onError={() => setImgError(true)}
              className="relative z-10 mx-auto h-auto w-full select-none object-contain"
              style={{ filter: 'drop-shadow(0 30px 45px rgba(34,211,238,0.25)) drop-shadow(0 10px 20px rgba(167,139,250,0.2))' }}
              draggable={false}
            />
          ) : (
            <div className="relative z-10 flex aspect-[3/4] w-full items-center justify-center rounded-[3rem] border border-dashed border-white/15 bg-white/[0.02]">
              <span className="font-display text-6xl font-semibold text-signal">KB</span>
            </div>
          )}
        </motion.div>
      </motion.div>

      <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest text-mist-500">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
        Available for opportunities
      </div>
    </div>
  );
}
