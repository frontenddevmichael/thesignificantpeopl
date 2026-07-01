import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import { IconTelegram } from '../components/ui/Icons';
import { churchInfo } from '../data/churchInfo';
import styles from './Sermons.module.css';

const sermons = [
  { title: 'The Blueprint of a Vision', speaker: 'Pastor Wisdom Adeyemo', date: '2024', series: 'Vision' },
  { title: 'Raising Significant People', speaker: 'Pastor Wisdom Adeyemo', date: '2024', series: 'Identity' },
  { title: 'Built for Purpose', speaker: 'Pastor Wisdom Adeyemo', date: '2023', series: 'Purpose' },
  { title: 'The Power of Identity', speaker: 'Pastor Wisdom Adeyemo', date: '2023', series: 'Identity' },
];

const seriesColors = {
  Vision: { border: '#c9a13b', bg: 'rgba(201,161,59,0.05)' },
  Identity: { border: '#e8cd8a', bg: 'rgba(232,205,138,0.05)' },
  Purpose: { border: '#b8943a', bg: 'rgba(184,148,58,0.05)' },
};

function WaveOrnament() {
  return (
    <svg className={styles.waveOrnament} viewBox="0 0 200 24" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12 Q25 0 50 12 T100 12 T150 12 T200 12" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15" />
      <path d="M0 12 Q25 4 50 12 T100 12 T150 12 T200 12" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.1" />
      <circle cx="50" cy="12" r="1.5" fill="currentColor" opacity="0.12" />
      <circle cx="100" cy="12" r="1.5" fill="currentColor" opacity="0.12" />
      <circle cx="150" cy="12" r="1.5" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 13 8 5 13" fill="currentColor" />
    </svg>
  );
}

export default function Sermons() {
  return (
    <main>
      <Helmet>
        <title>Sermons — {churchInfo.name}</title>
        <meta name="description" content={`Listen to audio messages from ${churchInfo.name} on Telegram. Teaching that transforms lives.`} />
        <meta property="og:title" content={`Sermons — ${churchInfo.name}`} />
        <meta property="og:description" content={`Listen to audio messages from ${churchInfo.name} on Telegram. Teaching that transforms lives.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/sermons" />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Sermons</span>
          <h1 className={styles.heroTitle}>Teaching That Transforms</h1>
          <div className={styles.waveRow}>
            <WaveOrnament />
          </div>
        </div>
      </section>

      {/* Message list */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <ScrollReveal>
            <span className={styles.eyebrow}>Recent Messages</span>
          </ScrollReveal>
          <div className={styles.grid}>
            {sermons.map((s, i) => {
              const sc = seriesColors[s.series] || seriesColors.Vision;
              return (
                <ScrollReveal key={s.title} delay={i * 100}>
                  <div className={styles.card} style={{ '--s-border': sc.border, '--s-bg': sc.bg }}>
                    <div className={styles.cardTop}>
                      <span className={styles.seriesBadge} style={{ borderColor: sc.border, color: sc.border }}>{s.series}</span>
                      <span className={styles.cardDate}>{s.date}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{s.title}</h3>
                    <p className={styles.cardSpeaker}>{s.speaker}</p>
                    <div className={styles.cardAction}>
                      <a href="https://t.me/PstWisdom_Adeyemo" target="_blank" rel="noopener noreferrer" className={styles.listenBtn} aria-label={`Listen to ${s.title}`}>
                        <PlayIcon />
                        <span>Listen</span>
                      </a>
                    </div>
                    <div className={styles.cardGlow} style={{ background: `radial-gradient(ellipse at center, ${sc.border} 0%, transparent 70%)` }} />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Telegram channel full-bleed CTA */}
      <section className={styles.telegramSection}>
        <div className={styles.telegramInner}>
          <ScrollReveal>
            <div className={styles.telegramContent}>
              <div className={styles.telegramIconWrap}>
                <IconTelegram />
              </div>
              <h2 className={styles.telegramTitle}>Join Our Telegram Channel</h2>
              <p className={styles.telegramText}>
                All our messages are available on Telegram. Join <strong>@PstWisdom_Adeyemo</strong> to access the full library of teachings, sermons, and prophetic messages — free, anytime.
              </p>
              <Button href="https://t.me/PstWisdom_Adeyemo" variant="light">Open Telegram</Button>
            </div>
          </ScrollReveal>
        </div>
        <div className={styles.telegramBg} />
      </section>

      {/* Closing scripture */}
      <section className={styles.scripture}>
        <div className={styles.scriptureInner}>
          <p className={styles.scriptureText}>&ldquo;Faith comes from hearing, and hearing through the word of Christ.&rdquo;</p>
          <p className={styles.scriptureRef}>Romans 10:17</p>
        </div>
      </section>
    </main>
  );
}
