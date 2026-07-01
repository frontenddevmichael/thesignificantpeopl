import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { churchInfo } from '../data/churchInfo';
import styles from './About.module.css';

const sermons = [
  { title: 'The Blueprint of a Vision', speaker: 'Pastor Wisdom Adeyemo', date: '2024' },
  { title: 'Raising Significant People', speaker: 'Pastor Wisdom Adeyemo', date: '2024' },
  { title: 'Built for Purpose', speaker: 'Pastor Wisdom Adeyemo', date: '2023' },
  { title: 'The Power of Identity', speaker: 'Pastor Wisdom Adeyemo', date: '2023' },
];

export default function Sermons() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Sermons — {churchInfo.name}</title>
        <meta name="description" content={`Listen to audio messages from ${churchInfo.name} on Telegram. Teaching that transforms lives.`} />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Sermons</span>
          <h1 className={styles.heroTitle}>Teaching That Transforms</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner} style={{ maxWidth: 'var(--container-narrow)' }}>
          <ScrollReveal>
            <SectionHeading eyebrow="Listen">Recent Messages</SectionHeading>
          </ScrollReveal>
          <div style={{ display: 'grid', gap: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
            {sermons.map((sermon) => (
              <ScrollReveal key={sermon.title} delay={100}>
                <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: 'var(--space-4)', paddingBottom: 'var(--space-4)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-on-light-primary)', marginBottom: 'var(--space-1)', letterSpacing: '-0.01em' }}>
                    {sermon.title}
                  </h3>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>
                    {sermon.speaker} &middot; {sermon.date}
                  </p>
                  <Button href="https://t.me/PstWisdom_Adeyemo">Listen on Telegram</Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div style={{ padding: 'var(--space-5)', border: '1px solid var(--color-border-light)', background: 'var(--spc-cream-200)' }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>Telegram Channel</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-md)', color: 'var(--color-text-on-light-secondary)', lineHeight: '1.7' }}>
              All our messages are available on our Telegram channel. Join to access the full library of teachings, sermons, and prophetic messages.
            </p>
            <div style={{ marginTop: 'var(--space-3)' }}>
              <Button href="https://t.me/PstWisdom_Adeyemo">@PstWisdom_Adeyemo</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
