import { Link } from 'react-router-dom';
import { churchInfo } from '../../data/churchInfo';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './AboutIntro.module.css';

export default function AboutIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <ScrollReveal>
            <div className={styles.textCol}>
              <span className={styles.eyebrow}>About Us</span>
              <h2 className={styles.heading}>
                Who <span className={styles.headAccent}>We Are</span>
              </h2>
              <p className={styles.text}>{churchInfo.shortDescription}</p>
              <div className={styles.linkRow}>
                <Link to="/about" className={styles.link}>
                  Learn Our Story
                  <span className={styles.linkArrow}>&rarr;</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className={styles.imgCol}>
              <div className={styles.imgWrapper}>
                <img
                  src="/Photos/AboutImg.jpg"
                  alt="The Significant Peoples Church congregation"
                  className={styles.aboutImg}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling?.style.setProperty('display', 'flex'); }}
                />
                <div className={styles.imgFallback} aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" width="32" height="32"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/><path d="M16 32l6-8 5 6 4-4 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/></svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
