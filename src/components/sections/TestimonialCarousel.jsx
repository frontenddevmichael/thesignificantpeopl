import { useState, useEffect, useCallback, useRef } from 'react';
import SectionHeading from '../ui/SectionHeading';
import styles from './TestimonialCarousel.module.css';

const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function TestimonialCarousel({ testimonials = [] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef(null);

  const next = useCallback(() => {
    if (testimonials.length < 2) return;
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    if (testimonials.length < 2) return;
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (testimonials.length < 2 || prefersReduced || paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, testimonials.length, paused]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const pause = () => setPaused(true);
    const resume = () => setPaused(false);
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', resume);
    return () => {
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('focusin', pause);
      el.removeEventListener('focusout', resume);
    };
  }, []);

  if (!testimonials.length) {
    return (
      <section className={styles.section}>
        <div className={styles.inner}>
          <SectionHeading eyebrow="Testimonials">Stories of Transformation</SectionHeading>
          <p className={styles.empty}>Testimonials coming soon. Share your story with us!</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading eyebrow="Testimonials">Stories of Transformation</SectionHeading>
        <div className={styles.carousel} ref={regionRef} aria-live="polite">
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.slide} ${i === active ? styles.slideActive : ''}`} aria-hidden={i !== active}>
              <p className={styles.quote}>&ldquo;{t.text}&rdquo;</p>
              <span className={styles.author}>{t.name}</span>
            </div>
          ))}
        </div>
        {testimonials.length > 1 && (
          <div className={styles.navRow}>
            <button type="button" className={styles.arrow} onClick={prev} aria-label="Previous testimonial">&larr;</button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button key={i} type="button" className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} aria-current={i === active} />
              ))}
            </div>
            <button type="button" className={styles.arrow} onClick={next} aria-label="Next testimonial">&rarr;</button>
          </div>
        )}
      </div>
    </section>
  );
}
