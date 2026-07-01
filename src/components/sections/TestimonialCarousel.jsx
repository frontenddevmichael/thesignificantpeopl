import { useState, useEffect, useCallback } from 'react';
import SectionHeading from '../ui/SectionHeading';
import styles from './TestimonialCarousel.module.css';

export default function TestimonialCarousel({ testimonials = [] }) {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    if (testimonials.length < 2) return;
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (testimonials.length < 2) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, testimonials.length]);

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
        <div className={styles.carousel}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.slide} ${i === active ? styles.slideActive : ''}`}>
              <p className={styles.quote}>&ldquo;{t.text}&rdquo;</p>
              <span className={styles.author}>{t.name}</span>
            </div>
          ))}
        </div>
        {testimonials.length > 1 && (
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button key={i} type="button" className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
