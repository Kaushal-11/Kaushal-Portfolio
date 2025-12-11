// src/utils/animations.js
// Animation configurations for Framer Motion

// Common variants for page transitions
export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

// Staggered children animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Child item animation for staggered containers
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Fade in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

// Slide in from left
export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide in from right
export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide in from bottom
export const slideInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Scale up animation
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Rotate and scale animation for icons
export const rotateScale = {
  hidden: { opacity: 0, scale: 0, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

export const hoverBounce = {
  scale: 1.1,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
};

// Button click animation
export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

// Card hover effect
export const cardHover = {
  y: -5,
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 }
};

// Animate presence transition settings
export const animatePresenceTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

// Skill bar animation
export const skillBarAnimation = {
  hidden: { width: 0 },
  visible: width => ({
    width: `${width}%`,
    transition: { duration: 1, ease: "easeInOut" }
  })
};

// Progress circle animation
export const progressCircleAnimation = {
  hidden: { pathLength: 0 },
  visible: percentage => ({
    pathLength: percentage / 100,
    transition: { duration: 1.5, ease: "easeInOut" }
  })
};

// Letter reveal animation for text
export const letterRevealAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Scroll-triggered animations
export const scrollReveal = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};