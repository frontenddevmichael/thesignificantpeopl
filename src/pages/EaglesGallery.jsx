import { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import { eaglesEvent, eaglesGalleryImages } from '../data/eaglesGallery';
import { churchInfo } from '../data/churchInfo';
import styles from './EaglesGallery.module.css';

export default function EaglesGallery() {
  const len = eaglesGalleryImages.length;
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  const next = useCallback(() => setActive((p) => (p + 1) % len), [len]);
  const prev = useCallback(() => setActive((p) => (p - 1 + len) % len), [len]);

  const openAt = useCallback((i) => {
    setActive(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setActive((p) => (p + 1) % len);
      if (e.key === 'ArrowLeft') setActive((p) => (p - 1 + len) % len);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, len]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const el = dialogRef.current;
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
  }, [open]);

  return (
    <main className={styles.page}>
      <Helmet>
        <title>{eaglesEvent.name} Gallery — {churchInfo.name}</title>
        <meta name="description" content={`Photo gallery from ${eaglesEvent.name} — a life-changing five-day residential camp for young people.`} />
        <meta property="og:title" content={`${eaglesEvent.name} Gallery — ${churchInfo.name}`} />
        <meta property="og:description" content={`Photo gallery from ${eaglesEvent.name}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thesignificantpeopleschurch.org/events/eagles-of-destiny/gallery" />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Event Gallery</span>
          <h1 className={styles.heroTitle}>
            {eaglesEvent.name.replace('The ', '')}
          </h1>
          <p className={styles.heroMeta}>
            {eaglesEvent.month} &middot; {eaglesEvent.venue} &middot; {eaglesEvent.scripture}
          </p>
          <div className={styles.heroActions}>
            <Link to="/events" className={styles.backLink}>
              &larr; Back to Events
            </Link>
            <Button to="/contact" variant="light">Join the Next Congress</Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.intro}>
            Memories from {eaglesEvent.name} — worship, word, and a generation of young people stepping into destiny. Tap any photo to view it full size.
          </p>
          <div className={styles.grid}>
            {eaglesGalleryImages.map((img, i) => (
              <ScrollReveal key={img.src} delay={(i % 4) * 80}>
                <button
                  type="button"
                  className={styles.tile}
                  onClick={() => openAt(i)}
                  aria-label={`Enlarge: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={styles.tileImg}
                    loading="lazy"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className={styles.tileIndex}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div
          ref={dialogRef}
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={eaglesGalleryImages[active]?.alt || 'Photo viewer'}
        >
          <button type="button" className={styles.lbClose} onClick={close} aria-label="Close photo viewer">&times;</button>
          <button type="button" className={styles.lbNav} onClick={prev} aria-label="Previous photo">&larr;</button>
          <figure className={styles.lbFigure}>
            <img
              src={eaglesGalleryImages[active]?.src}
              alt={eaglesGalleryImages[active]?.alt || 'Gallery image'}
              className={styles.lbImage}
            />
            <figcaption className={styles.lbCaption}>
              {eaglesGalleryImages[active]?.alt} &middot; {active + 1} / {len}
            </figcaption>
          </figure>
          <button type="button" className={styles.lbNav} onClick={next} aria-label="Next photo">&rarr;</button>
        </div>
      )}
    </main>
  );
}
