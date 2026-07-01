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
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
