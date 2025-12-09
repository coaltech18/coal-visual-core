import { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
}

export const usePerformance = () => {
  const metricsRef = useRef<PerformanceMetrics>({
    loadTime: 0,
    firstPaint: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
  });

  const measureLoadTime = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        metricsRef.current.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }
    }
  }, []);

  const measurePaintMetrics = useCallback(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Paint
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-paint') {
            metricsRef.current.firstPaint = entry.startTime;
          }
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.firstContentfulPaint = entry.startTime;
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metricsRef.current.largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    }
  }, []);

  const logMetrics = useCallback(() => {
    console.log('Performance Metrics:', metricsRef.current);
  }, []);

  useEffect(() => {
    measureLoadTime();
    measurePaintMetrics();

    // Log metrics after a delay to ensure all metrics are captured
    const timer = setTimeout(logMetrics, 5000);

    return () => clearTimeout(timer);
  }, [measureLoadTime, measurePaintMetrics, logMetrics]);

  return {
    metrics: metricsRef.current,
    logMetrics,
  };
}; 