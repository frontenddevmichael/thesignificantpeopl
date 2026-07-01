import { forwardRef } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './MinistryFloorPlan.module.css';

const icons = {
  youth: (
    <svg viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.1" />
      <path d="M6 26c0-4.5 3.5-7.5 8-7.5s8 3 8 7.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M18 7l2.5-2.5 3.5 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  ),
  'teens-children': (
    <svg viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="18" cy="8" r="3" stroke="currentColor" strokeWidth="1.1" />
      <path d="M5 24c0-4.5 2.5-7.5 5-7.5s5 3 5 7.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M13 24c0-3.5 2-6 4.5-6s4.5 2.5 4.5 6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
      <path d="M20 5h5M22.5 2.5v5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
    </svg>
  ),
  worship: (
    <svg viewBox="0 0 28 28" fill="none">
      <path d="M10 5v14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M10 19c0 1.8 1.3 3 3.5 3s3.5-1.2 3.5-3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M17.5 7c0-1.8 1.8-3.5 3.5-3.5s3.5 1.7 3.5 3.5-1.8 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M17.5 10.5L10 14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
      <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.1" opacity="0.4" />
    </svg>
  ),
  drama: (
    <svg viewBox="0 0 28 28" fill="none">
      <path d="M5 7l9-3.5 9 3.5v12l-9 3.5-9-3.5V7z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="14" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.1" />
      <path d="M8 12c1 1.8 2.5 2.5 6 2.5s5-.7 6-2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
      <path d="M10.5 19l-1.5 3M17.5 19l1.5 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
  prayer: (
    <svg viewBox="0 0 28 28" fill="none">
      <path d="M14 3.5C9 3.5 5.5 9 5.5 14s3.5 10.5 8.5 10.5S24.5 19 24.5 14 19 3.5 14 3.5z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M14 10.5v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M10.5 14h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  media: (
    <svg viewBox="0 0 28 28" fill="none">
      <rect x="3.5" y="5" width="21" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="14" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.1" />
      <path d="M10.5 19l-2.5 3.5M17.5 19l2.5 3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
      <path d="M12.5 22.5h3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.3" />
    </svg>
  ),
};

const palettes = {
  youth: { border: '#c9a13b', bg: 'rgba(201,161,59,0.06)', dot: '#c9a13b', ornament: '#e8cd8a' },
  'teens-children': { border: '#e8cd8a', bg: 'rgba(232,205,138,0.07)', dot: '#d4b87a', ornament: '#f0deaa' },
  worship: { border: '#b8943a', bg: 'rgba(184,148,58,0.06)', dot: '#b8943a', ornament: '#d4b87a' },
  drama: { border: '#a8852e', bg: 'rgba(168,133,46,0.06)', dot: '#a8852e', ornament: '#c9a13b' },
  prayer: { border: '#161f44', bg: 'rgba(22,31,68,0.06)', dot: '#232e5c', ornament: '#3a4778' },
  media: { border: '#3a4778', bg: 'rgba(58,71,120,0.06)', dot: '#3a4778', ornament: '#5a6a9a' },
};

function getPalette(id) {
  return palettes[id] || palettes.youth;
}

function getTagline(desc) {
  return desc.split('.')[0] + '.';
}

const ornamentSvgs = {
  youth: (
    <svg viewBox="0 0 200 8" className={styles.ornamentSvg} preserveAspectRatio="none">
      <line x1="0" y1="4" x2="60" y2="4" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="70" cy="4" r="2" fill="currentColor" opacity="0.2" />
      <line x1="76" y1="4" x2="130" y2="4" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="140" cy="4" r="2" fill="currentColor" opacity="0.2" />
      <line x1="146" y1="4" x2="200" y2="4" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    </svg>
  ),
  default: (
    <svg viewBox="0 0 200 8" className={styles.ornamentSvg} preserveAspectRatio="none">
      <line x1="0" y1="4" x2="90" y2="4" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      <circle cx="100" cy="4" r="1.5" fill="currentColor" opacity="0.15" />
      <line x1="106" y1="4" x2="200" y2="4" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
    </svg>
  ),
};

const MinistryFloorPlan = forwardRef(function MinistryFloorPlan({ ministries, activeTag }, ref) {
  const [featured, ...rest] = ministries;

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <SectionHeading eyebrow="Our Departments" delay={0}>Find Your Place</SectionHeading>

        {/* Featured ministry — hero card */}
        <ScrollReveal delay={80}>
          {(() => {
            const p = getPalette(featured.id);
            const isHighlighted = activeTag && featured.tags.includes(activeTag);
            return (
              <div className={`${styles.featured} ${isHighlighted ? styles.highlighted : ''}`} style={{ '--p-border': p.border, '--p-bg': p.bg, '--p-dot': p.dot, '--p-ornament': p.ornament }}>
                <div className={styles.featuredOrnament}>{ornamentSvgs.youth}</div>
                <div className={styles.featuredInner}>
                  <div className={styles.featuredIconWrap}>
                    {icons[featured.id] || icons.youth}
                  </div>
                  <div className={styles.featuredText}>
                    <h3 className={styles.featuredName}>{featured.name}</h3>
                    <p className={styles.featuredDesc}>{getTagline(featured.description)}</p>
                    <div className={styles.featuredMeta}>
                      <span>{featured.leader}</span>
                      <span className={styles.featuredMetaDot} />
                      <span>{featured.meetingDay} {featured.meetingTime}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.featuredTags}>
                  {featured.tags.map((t) => (
                    <span key={t} className={styles.featuredTag}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })()}
        </ScrollReveal>

        {/* Rest — cascading side-by-side */}
        <div className={styles.grid}>
          {rest.map((m, i) => {
            const p = getPalette(m.id);
            const side = i % 2 === 0 ? 'left' : 'right';
            return (
              <ScrollReveal key={m.id} delay={120 + i * 80}>
                <div
                  className={`${styles.card} ${styles[`card_${side}`]} ${activeTag && m.tags.includes(activeTag) ? styles.highlighted : ''}`}
                  style={{ '--p-border': p.border, '--p-bg': p.bg, '--p-dot': p.dot, '--p-ornament': p.ornament }}
                >
                  {/* Watermark ID */}
                  <span className={styles.cardWatermark}>{m.id.replace('-', ' / ')}</span>

                  {/* Top ornament */}
                  <div className={styles.cardOrnament}>{ornamentSvgs.default}</div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardIconWrap}>
                      {icons[m.id] || icons.youth}
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardName}>{m.name}</h3>
                      <p className={styles.cardDesc}>{getTagline(m.description)}</p>
                      <div className={styles.cardMeta}>
                        <div className={styles.cardMetaItem}>
                          <span className={styles.cardMetaLabel}>Leader</span>
                          <span className={styles.cardMetaValue}>{m.leader}</span>
                        </div>
                        <div className={styles.cardMetaDivider} />
                        <div className={styles.cardMetaItem}>
                          <span className={styles.cardMetaLabel}>Meets</span>
                          <span className={styles.cardMetaValue}>{m.meetingDay} {m.meetingTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom dots */}
                  <div className={styles.cardDots}>
                    {m.tags.map((t) => (
                      <span key={t} className={styles.cardDot} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default MinistryFloorPlan;
