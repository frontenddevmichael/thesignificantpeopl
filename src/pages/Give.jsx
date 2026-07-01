import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { IconGive, IconHeart, IconChurch, IconSeedling } from '../components/ui/Icons';
import { churchInfo } from '../data/churchInfo';
import styles from './Give.module.css';

export default function Give() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Give — {churchInfo.name}</title>
        <meta name="description" content={`Support the ministry of ${churchInfo.name} through tithes, offerings, and donations. Bank details provided.`} />
        <meta property="og:title" content={`Give — ${churchInfo.name}`} />
        <meta property="og:description" content={`Support the ministry of ${churchInfo.name} through tithes, offerings, and donations.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/give" />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <svg viewBox="0 0 160 200" fill="none" stroke="currentColor" className={styles.heroDecor}>
            <path d="M80 190 L80 80" strokeWidth="0.8" />
            <path d="M80 80 Q62 74 80 64 Q98 74 80 80" strokeWidth="0.6" />
            <path d="M80 94 Q58 88 80 78" strokeWidth="0.6" />
            <path d="M80 108 Q102 102 80 92" strokeWidth="0.6" />
            <path d="M80 122 Q60 116 80 106" strokeWidth="0.6" />
            <path d="M80 136 Q100 130 80 120" strokeWidth="0.6" />
            <path d="M60 190 L60 105" strokeWidth="0.5" opacity="0.4" />
            <path d="M60 105 Q45 100 60 92 Q75 100 60 105" strokeWidth="0.4" opacity="0.4" />
            <path d="M60 116 Q47 111 60 103" strokeWidth="0.4" opacity="0.4" />
            <path d="M100 190 L100 95" strokeWidth="0.5" opacity="0.4" />
            <path d="M100 95 Q115 90 100 82 Q85 90 100 95" strokeWidth="0.4" opacity="0.4" />
            <path d="M100 108 Q113 103 100 95" strokeWidth="0.4" opacity="0.4" />
            <circle cx="80" cy="60" r="3" fill="currentColor" stroke="none" />
            <circle cx="80" cy="55" r="5" fill="currentColor" stroke="none" opacity="0.15" />
          </svg>
          <span className={styles.heroEyebrow}>Give</span>
          <h1 className={styles.heroTitle}>Sow into Significance</h1>
          <p className={styles.heroSub}>Your faithful giving makes it possible for us to reach souls, raise leaders, and impact communities. We are grateful for every seed sown into this ministry.</p>
        </div>
      </section>

      <section className={styles.bankSection}>
        <div className={styles.sectionInner}>
          <ScrollReveal>
            <div className={styles.intro}>
              <SectionHeading eyebrow="Give via Bank Transfer">Bank Details</SectionHeading>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className={styles.bankCard}>
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className={styles.bankCardDecor}>
                <circle cx="50" cy="50" r="45" strokeWidth="0.3" />
                <line x1="50" y1="8" x2="50" y2="92" strokeWidth="0.6" />
                <line x1="8" y1="50" x2="92" y2="50" strokeWidth="0.6" />
                <circle cx="50" cy="8" r="2" fill="currentColor" stroke="none" />
                <circle cx="50" cy="92" r="2" fill="currentColor" stroke="none" />
                <circle cx="8" cy="50" r="2" fill="currentColor" stroke="none" />
                <circle cx="92" cy="50" r="2" fill="currentColor" stroke="none" />
              </svg>
              <div className={styles.bankBank}>
                <IconChurch />
                <span className={styles.bankBankName}>{churchInfo.bank.bankName}</span>
              </div>
              <p className={styles.bankAccountName}>{churchInfo.bank.accountName}</p>
              <div className={styles.bankNumberWrap}>
                <p className={styles.bankNumber}>{churchInfo.bank.accountNumber}</p>
              </div>
              <p className={styles.bankHint}>Use the correct account name for seamless transfer verification</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDiamond} />
            <span className={styles.dividerLine} />
          </div>
          <ScrollReveal>
            <div className={styles.intro}>
              <SectionHeading eyebrow="Ways to Give">Seeds You Can Sow</SectionHeading>
            </div>
          </ScrollReveal>
          <div className={styles.catGrid}>
            {churchInfo.bank.categories.map((cat) => (
              <ScrollReveal key={cat} delay={100}>
                <div className={styles.catCard}>
                  <div className={styles.catIcon}>
                    {cat === 'Tithe' && <IconGive />}
                    {cat === 'Offering' && <IconHeart />}
                    {cat === 'Building Fund' && <IconChurch />}
                    {cat === 'Missions' && <IconSeedling />}
                  </div>
                  <h3 className={styles.catTitle}>{cat}</h3>
                  <p className={styles.catDesc}>
                    {cat === 'Tithe' && 'The tenth of your income, given to the storehouse of the church.'}
                    {cat === 'Offering' && 'Free-will gifts given during worship services.'}
                    {cat === 'Building Fund' && 'Contributions toward church building and expansion.'}
                    {cat === 'Missions' && 'Support for missions and outreach programmes.'}
                  </p>
                  <div className={styles.catBar}>
                    <div className={styles.catBarFill} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.scripture}>
        <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" className={styles.scriptureDecor}>
          <circle cx="150" cy="150" r="140" strokeWidth="0.3" />
          <circle cx="150" cy="150" r="120" strokeWidth="0.2" opacity="0.5" />
          <line x1="150" y1="15" x2="150" y2="285" strokeWidth="0.6" />
          <line x1="15" y1="150" x2="285" y2="150" strokeWidth="0.6" />
          <circle cx="150" cy="15" r="3" fill="currentColor" stroke="none" />
          <circle cx="150" cy="285" r="3" fill="currentColor" stroke="none" />
          <circle cx="15" cy="150" r="3" fill="currentColor" stroke="none" />
          <circle cx="285" cy="150" r="3" fill="currentColor" stroke="none" />
          <line x1="150" y1="50" x2="150" y2="250" strokeWidth="0.2" opacity="0.3" />
          <line x1="50" y1="150" x2="250" y2="150" strokeWidth="0.2" opacity="0.3" />
          <circle cx="150" cy="150" r="5" fill="currentColor" stroke="none" opacity="0.15" />
        </svg>
        <div className={styles.scriptureInner}>
          <p className={styles.scriptureQuote}>
            &ldquo;Honour the Lord with your wealth, with the firstfruits of all your crops.&rdquo;
          </p>
          <p className={styles.scriptureRef}>Proverbs 3:9</p>
        </div>
      </section>
    </main>
  );
}
