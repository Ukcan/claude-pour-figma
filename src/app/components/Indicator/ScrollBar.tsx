import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

/**
 * ScrollBarIndicator
 * Ultra-thin scroll progress bar fixed at the top of the viewport.
 * Swiss minimalist style — 1px hairline, muted color, appears after hero.
 */
export function ScrollBarIndicator() {
  const { scrollYProgress } = useScroll();

  /* Smooth spring for fluid movement — tight, no bounce */
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  /* Fade in only after user scrolls past ~5% of page (past hero) */
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.04], [0, 0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none"
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Track — invisible, just for structure */}
      <div className="w-full h-px bg-border-0">
        {/* Progress fill — 1px hairline */}
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX,
            backgroundColor: 'var(--text-muted)',
          }}
        />
      </div>
    </motion.div>
  );
}
