import ScrollReveal from './ScrollReveal';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ eyebrow, children, dark = false, large = false, alignRight = false, delay = 0 }) {
  return (
    <ScrollReveal delay={delay}>
      <div className={styles.wrapper} style={{ textAlign: alignRight ? 'right' : 'left' }}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h2 className={`${styles.heading} ${dark ? styles.headingDark : ''} ${large ? styles.headingLarge : ''}`}>{children}</h2>
        <div className={`${styles.rule} ${alignRight ? styles.ruleRight : ''}`}>
          <span className={styles.ruleLine} />
        </div>
      </div>
    </ScrollReveal>
  );
}
