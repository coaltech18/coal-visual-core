// Performance optimization utilities

// Preload critical resources
export const preloadResource = (href: string, as: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Image optimization
export const optimizeImage = (src: string, width: number, quality: number = 80) => {
  // Add image optimization parameters
  const url = new URL(src, window.location.origin);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', quality.toString());
  return url.toString();
};

// Cache management
export const cacheKey = (key: string) => `coal-tech-${key}`;

export const setCache = (key: string, data: any, ttl: number = 3600000) => {
  const item = {
    data,
    timestamp: Date.now(),
    ttl,
  };
  localStorage.setItem(cacheKey(key), JSON.stringify(item));
};

export const getCache = (key: string) => {
  const cached = localStorage.getItem(cacheKey(key));
  if (!cached) return null;

  const item = JSON.parse(cached);
  const now = Date.now();
  
  if (now - item.timestamp > item.ttl) {
    localStorage.removeItem(cacheKey(key));
    return null;
  }

  return item.data;
}; 