import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import { IconGive, IconHeart, IconChurch, IconSeedling } from '../components/ui/Icons';
import { churchInfo } from '../data/churchInfo';
import styles from './About.module.css';

export default function Give() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Give — {churchInfo.name}</title>
        <meta name="description" content={`Support the ministry of ${churchInfo.name} through tithes, offerings, and donations. Bank details provided.`} />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Give</span>
          <h1 className={styles.heroTitle}>Sow into Significance</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.twoCol}>
            <ScrollReveal>
              <SectionHeading eyebrow="Ways to Give">Your Giving Matters</SectionHeading>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className={styles.bodyText}>
                <p>Your faithful giving makes it possible for us to reach souls, raise leaders, and impact communities. We are grateful for every seed sown into this ministry.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--spc-cream-200)' }}>
        <div className={styles.sectionInner}>
          <ScrollReveal>
            <SectionHeading eyebrow="Bank Transfer">Bank Details</SectionHeading>
            <div style={{ border: '1px solid var(--color-border-light)', padding: 'var(--space-6)', background: 'var(--color-bg-secondary)', maxWidth: '500px' }}>
              <div style={{ color: 'var(--color-accent)', fontSize: '1rem', marginBottom: 'var(--space-3)', lineHeight: 1, display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <IconChurch /> <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 'var(--fw-medium)' }}>{churchInfo.bank.bankName}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-on-light-primary)', marginBottom: 'var(--space-2)' }}>{churchInfo.bank.accountName}</p>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'var(--fs-display-md)', color: 'var(--color-accent)', fontWeight: 'var(--fw-semibold)', letterSpacing: '0.05em' }}>{churchInfo.bank.accountNumber}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <ScrollReveal>
            <SectionHeading eyebrow="Give Online">Donation Categories</SectionHeading>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
            {churchInfo.bank.categories.map((cat) => (
              <ScrollReveal key={cat} delay={100}>
                <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: 'var(--space-5)' }}>
                  <div style={{ color: 'var(--color-accent)', fontSize: '1.5rem', marginBottom: 'var(--space-3)', lineHeight: 1 }}>
                    {cat === 'Tithe' && <IconGive />}
                    {cat === 'Offering' && <IconHeart />}
                    {cat === 'Building Fund' && <IconChurch />}
                    {cat === 'Missions' && <IconSeedling />}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 'var(--space-2)', fontWeight: 'var(--fw-medium)' }}>{cat}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-sm)', color: 'var(--color-text-on-light-secondary)', lineHeight: '1.7' }}>
                    {cat === 'Tithe' && 'The tenth of your income, given to the storehouse of the church.'}
                    {cat === 'Offering' && 'Free-will gifts given during worship services.'}
                    {cat === 'Building Fund' && 'Contributions toward church building and expansion.'}
                    {cat === 'Missions' && 'Support for missions and outreach programmes.'}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--spc-navy-900)' }}>
        <div className={styles.sectionInner} style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-on-dark-primary)', maxWidth: '20ch', margin: '0 auto', lineHeight: '1.15' }}>
            &ldquo;Honour the Lord with your wealth, with the firstfruits of all your crops.&rdquo;
          </p>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: 'var(--color-accent)', marginTop: 'var(--space-3)', letterSpacing: '0.1em' }}>Proverbs 3:9</p>
        </div>
      </section>
    </main>
  );
}
