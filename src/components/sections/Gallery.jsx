import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './Gallery.module.css';

const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Gallery({ images = [] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const len = images.length;
  const lastInteraction = useRef(0);
  const stripRef = useRef(null);
  const thumbRefs = useRef({});
  const lightboxRef = useRef(null);

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

  const openLightbox = useCallback((i) => {
    goTo(i);
    setLightbox(true);
  }, [goTo]);

  const closeLightbox = useCallback(() => setLightbox(false), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const el = lightboxRef.current;
    if (!el) return;
    const focusables = el.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();
    const onTab = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener('keydown', onTab);
    return () => document.removeEventListener('keydown', onTab);
  }, [lightbox]);

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
    if (len < 2 || prefersReduced || paused || lightbox) return;
    const timer = setInterval(() => {
      if (Date.now() - lastInteraction.current >= 4000) {
        setActive((prev) => (prev + 1) % len);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [len, paused, lightbox]);

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
            <button
              type="button"
              className={styles.zoomBtn}
              onClick={() => openLightbox(i)}
              aria-label={img.alt ? `Enlarge: ${img.alt}` : `Enlarge photo ${i + 1}`}
            >
              <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
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
                  aria-label={img.alt || `Photo ${i + 1}`}
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

      {lightbox && (
        <div
          ref={lightboxRef}
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={images[active]?.alt || 'Photo viewer'}
        >
          <button type="button" className={styles.lbClose} onClick={closeLightbox} aria-label="Close photo viewer">&times;</button>
          <button type="button" className={styles.lbNav} onClick={prev} aria-label="Previous photo">&larr;</button>
          <figure className={styles.lbFigure}>
            <img src={images[active]?.src} alt={images[active]?.alt || 'Gallery image'} className={styles.lbImage} />
            <figcaption className={styles.lbCaption}>
              {images[active]?.alt || `Photo ${active + 1} of ${len}`}
            </figcaption>
          </figure>
          <button type="button" className={styles.lbNav} onClick={next} aria-label="Next photo">&rarr;</button>
        </div>
      )}
    </section>
  );
}
