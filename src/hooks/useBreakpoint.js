import { useState, useEffect } from 'react';

const queries = {
  phone: '(max-width: 599px)',
  tablet: '(min-width: 600px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
};

export function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === 'undefined') return 'desktop';
    if (window.matchMedia(queries.phone).matches) return 'phone';
    if (window.matchMedia(queries.tablet).matches) return 'tablet';
    return 'desktop';
  });

  useEffect(() => {
    const mqls = Object.entries(queries).map(([key, q]) => {
      const mql = window.matchMedia(q);
      const handler = (e) => { if (e.matches) setBp(key); };
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    });
    return () => mqls.forEach((unsub) => unsub());
  }, []);

  return bp;
}
