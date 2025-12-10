import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-accent/20 z-50"
      initial={{ scaleX: 0 }}
      style={{ transformOrigin: 'left' }}
    >
      <motion.div
        className="h-full bg-accent"
        style={{ scaleX: scrollProgress / 100, transformOrigin: 'left' }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      />
    </motion.div>
  );
};

export default ScrollProgress;

