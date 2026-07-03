import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './CrusadeGallery.module.css';

export default function CrusadeGallery({ crusade, onBack }) {
  const { name, images } = crusade;
  const len = images.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const stripRef = useRef(null);
  const thumbRefs = useRef([]);

  const next = useCallback(() => {
    if (len < 2) return;
    setActive((prev) => (prev + 1) % len);
  }, [len]);

  const prev = useCallback(() => {
    if (len < 2) return;
    setActive((prev) => (prev - 1 + len) % len);
  }, [len]);

  const goTo = useCallback((i) => {
    setActive(i);
    thumbRefs.current[i]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, []);

  useEffect(() => {
    if (paused || len < 2) return;
    timerRef.current = setInterval(next, 4000);
    return () => clearInterval(timerRef.current);
  }, [paused, next, len]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

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
              alt={img.alt}
              className={styles.image}
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
                  aria-label={img.alt}
                >
                  <img src={img.src} alt="" className={styles.thumbImg} loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={styles.controls}>
          <button type="button" className={styles.backBtn} onClick={onBack} aria-label="Back to crusades">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
          {len > 1 && (
            <>
              <button type="button" className={styles.navBtn} onClick={prev} aria-label="Previous photo">&larr;</button>
              <span className={styles.counter}>{active + 1} / {len}</span>
              <button type="button" className={styles.navBtn} onClick={next} aria-label="Next photo">&rarr;</button>
            </>
          )}
        </div>

        {len > 1 && (
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button key={i} type="button" className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} onClick={() => goTo(i)} aria-label={`Photo ${i + 1}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
