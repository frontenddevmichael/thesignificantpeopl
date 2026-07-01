import ScrollReveal from '../ui/ScrollReveal';
import styles from './MeasuredStats.module.css';

const stats = [
  {
    value: '500+',
    label: 'Members',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.statIcon}>
        <circle cx="12" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M3 28c0-5.5 4-9 9-9s9 3.5 9 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="22" cy="12" r="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M20 28c0-4.2 2.8-6.8 7-6.8s7 2.6 7 6.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: '17',
    label: 'Fellowships',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.statIcon}>
        <path d="M4 16l12-11 12 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14v12h6V18h4v8h6V14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: '5',
    label: 'Branches',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.statIcon}>
        <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
        <path d="M16 16v12M12 24h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: '19',
    label: 'Years',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.statIcon}>
        <rect x="4" y="6" width="24" height="22" rx="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10 2v6M22 2v6M4 12h24" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="16" cy="20" r="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M16 18v2l1.2 1.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function MeasuredStats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <ScrollReveal>
          <span className={styles.eyebrow}>By the Numbers</span>
        </ScrollReveal>
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className={styles.card}>
                <div className={styles.iconWrap}>
                  {s.icon}
                </div>
                <span className={styles.value}>{s.value}</span>
                <span className={styles.label}>{s.label}</span>
                <div className={styles.cardLine} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
