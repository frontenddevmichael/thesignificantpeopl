import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './Gallery.module.css';

const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Gallery({ images = [] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = images.length;
  const lastInteraction = useRef(0);
  const stripRef = useRef(null);
  const thumbRefs = useRef({});

  const goTo = useCallback((i) => {
    if (i < 0 || i >= len) return;
    lastInteraction.current = Date.now();
    setActive(i);
  }, [len]);

  const next = useCallback(() => {
    lastInteraction.current = Date.now();
    setActive((prev) => (prev + 1) % len);
  }, [len]);

  const prev = useCallback(() => {
    lastInteraction.current = Date.now();
    setActive((prev) => (prev - 1 + len) % len);
  }, [len]);

  useEffect(() => {
    const thumb = thumbRefs.current[active];
    const strip = stripRef.current;
    if (thumb && strip) {
      const tRect = thumb.getBoundingClientRect();
      const sRect = strip.getBoundingClientRect();
      if (tRect.left < sRect.left || tRect.right > sRect.right) {
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [active]);

  useEffect(() => {
    if (len < 2) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') { prev(); }
      if (e.key === 'ArrowRight') { next(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [len, prev, next]);

  useEffect(() => {
    if (len < 2 || prefersReduced || paused) return;
    const timer = setInterval(() => {
      if (Date.now() - lastInteraction.current >= 4000) {
        setActive((prev) => (prev + 1) % len);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [len, paused]);

  if (!len) return null;

  return (
    <section
      className={styles.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.slider}>
        {images.map((img, i) => (
          <div key={i} className={`${styles.slide} ${i === active ? styles.slideActive : ''}`}>
            <img
              src={img.src}
              alt={img.alt || 'Gallery image'}
              className={styles.image}
              key={i === active ? `active-${active}` : `img-${i}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className={styles.overlay} />
          </div>
        ))}

        {len > 1 && (
          <div className={styles.stripWrap}>
            <div className={styles.strip} ref={stripRef}>
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  ref={(el) => { thumbRefs.current[i] = el; }}
                  className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Photo ${i + 1}`}
                >
                  <img src={img.src} alt="" className={styles.thumbImg} loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                </button>
              ))}
            </div>
          </div>
        )}

        {len > 1 && (
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button key={i} type="button" className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} onClick={() => goTo(i)} aria-label={`Photo ${i + 1}`} />
            ))}
          </div>
        )}

        {len > 1 && (
          <div className={styles.controls}>
            <button type="button" className={styles.navBtn} onClick={prev} aria-label="Previous photo">&larr;</button>
            <span className={styles.counter}>{String(active + 1).padStart(2, '0')} / {String(len).padStart(2, '0')}</span>
            <button type="button" className={styles.navBtn} onClick={next} aria-label="Next photo">&rarr;</button>
          </div>
        )}
      </div>
    </section>
  );
}
