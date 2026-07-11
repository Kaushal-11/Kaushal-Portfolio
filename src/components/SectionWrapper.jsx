import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SectionWrapper({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section
      id={id}
      className={`snap-section relative min-h-screen py-28 sm:py-32 ${className}`}
    >
      <div className="container-page">
        {(eyebrow || title) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={reveal}
            className="mb-14 sm:mb-16"
          >
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-mist-100 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 max-w-2xl text-mist-500 text-base sm:text-lg">{subtitle}</p>}
          </motion.div>
        )}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={reveal}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
