import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './Gallery.module.css';

const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Gallery({ images = [] }) {
  const [active, setActive] = useState(0);
  const len = images.length;
  const lastInteraction = useRef(0);

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
    if (len < 2 || prefersReduced) return;
    const timer = setInterval(() => {
      if (Date.now() - lastInteraction.current >= 4000) {
        setActive((prev) => (prev + 1) % len);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [len]);

  if (!len) return null;

  return (
    <section className={styles.section}>
      <div className={styles.slider}>
        {images.map((img, i) => (
          <div key={i} className={`${styles.slide} ${i === active ? styles.slideActive : ''}`}>
            {img.src ? (
              <img src={img.src} alt={img.alt || 'Gallery image'} className={styles.image} loading={i === 0 ? 'eager' : 'lazy'} onError={(e) => { e.target.style.display = 'none'; }} />
            ) : (
              <div className={styles.placeholder}>
                <span>Gallery Image {i + 1}</span>
              </div>
            )}
            <div className={styles.overlay} />
          </div>
        ))}
        <div className={styles.caption}>
          <span className={styles.captionLabel}>Gallery &mdash; {String(active + 1).padStart(2, '0')}</span>
          <h3 className={styles.captionTitle}>Photo {active + 1}</h3>
        </div>
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
