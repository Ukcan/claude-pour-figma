import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update visibility
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-8 z-[100] min-w-[48px] min-h-[48px] bg-surface-0 border border-border-0 text-accent-primary hover:border-border-1 transition-all duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-focus-ring rounded-full"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}