'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MotionExperience() {
  const pathname = usePathname();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const root = document.documentElement;
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const connect = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      root.dataset.motion = paused || preference.matches ? 'paused' : 'running';
      if (paused || preference.matches || !('IntersectionObserver' in window)) return;
      document.querySelectorAll<HTMLElement>('[data-hero-enter]').forEach((part, index) => {
        if (part.dataset.entered) return;
        part.dataset.entered = 'true';
        const isType = part.dataset.heroEnter === 'type';
        const settled = getComputedStyle(part).transform;
        const animation = part.animate([
          { opacity: isType ? 1 : 0, transform: isType ? 'translateY(105%)' : settled + ' translateY(44px) scale(.94)' },
          { opacity: 1, transform: isType ? 'translateY(0)' : settled },
        ], { duration: isType ? 900 : 1100, delay: index * 60, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement;
          element.dataset.inView = String(entry.isIntersecting);
          if (!entry.isIntersecting || element.dataset.entered) return;
          element.dataset.entered = 'true';
          const parts = element.querySelectorAll<HTMLElement>('[data-scene-part]');
          (parts.length ? Array.from(parts) : [element]).forEach((part, index) => {
            const animation = part.animate([
              { opacity: 0.35, transform: 'translateY(24px) scale(0.985)' },
              { opacity: 1, transform: 'translateY(0) scale(1)' },
            ], { duration: 650, delay: Math.min(index * 60, 180), easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        });
      }, { threshold: 0.12 });
      document.querySelectorAll<HTMLElement>('[data-scene]').forEach(scene => observer?.observe(scene));
    };
    connect();
    preference.addEventListener('change', connect);
    return () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      preference.removeEventListener('change', connect);
    };
  }, [pathname, paused]);

  return <button type="button" className="motion-toggle" aria-pressed={paused} onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play website motion' : 'Pause website motion'}><span className={paused ? 'motion-toggle-play' : 'motion-toggle-pause'} aria-hidden="true" /><span>{paused ? 'Play motion' : 'Pause motion'}</span></button>;
}
