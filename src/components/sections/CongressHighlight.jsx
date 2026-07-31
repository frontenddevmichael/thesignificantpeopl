import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';
import { eaglesEvent, eaglesGalleryImages } from '../../data/eaglesGallery';
import styles from './CongressHighlight.module.css';

const FEATURED = [0, 7, 14, 21];

export default function CongressHighlight() {
  const photos = FEATURED.map((i) => eaglesGalleryImages[i]).filter(Boolean);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <ScrollReveal>
            <div className={styles.textCol}>
              <span className={styles.eyebrow}>Annual Event</span>
              <h2 className={styles.heading}>
                The <span className={styles.headAccent}>Eagles of Destiny</span> Congress
              </h2>
              <p className={styles.text}>
                A life-changing five-day residential camp where destinies are shaped — powerful worship,
                sound biblical teaching, and practical sessions that equip a generation to excel.
                Feeding, accommodation, and transportation across Edo State are provided free.
              </p>
              <div className={styles.meta}>
                <span>{eaglesEvent.month} &middot; {eaglesEvent.venue}</span>
                <span>{eaglesEvent.scripture}</span>
              </div>
              <div className={styles.actions}>
                <Button to="/events/eagles-of-destiny/gallery" variant="primary">
                  View the Congress Gallery
                </Button>
                <Link to="/events" className={styles.altLink}>
                  Event Details &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className={styles.grid}>
              {photos.map((img, i) => (
                <Link key={img.src} to="/events/eagles-of-destiny/gallery" className={styles.tile} aria-label={img.alt}>
                  <img src={img.src} alt={img.alt} className={styles.tileImg} loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                  <span className={styles.tileOverlay} aria-hidden="true">
                    <span className={styles.tileIcon}>
                      <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </span>
                  </span>
                  <span className={styles.tileIndex}>{String(i + 1).padStart(2, '0')}</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
