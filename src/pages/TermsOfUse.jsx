import { Helmet } from 'react-helmet-async';
import { churchInfo } from '../data/churchInfo';
import styles from './About.module.css';

export default function TermsOfUse() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Terms of Use — {churchInfo.name}</title>
        <meta name="description" content={`Terms of Use for ${churchInfo.name}. Please read these terms carefully before using our website.`} />
        <meta property="og:title" content={`Terms of Use — ${churchInfo.name}`} />
        <meta property="og:description" content={`Terms of Use for ${churchInfo.name}. Please read these terms carefully before using our website.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/terms-of-use" />
      </Helmet>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Legal</span>
          <h1 className={styles.heroTitle}>Terms of Use</h1>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionInner} style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className={styles.bodyText}>
            <p><em>Last updated: January 2025</em></p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-on-light-primary)', margin: 'var(--space-6) 0 var(--space-3)' }}>Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by these terms of use. If you do not agree, please do not use this website.</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-on-light-primary)', margin: 'var(--space-6) 0 var(--space-3)' }}>Use of Content</h2>
            <p>All content on this website, including text, graphics, logos, and sermons, is the property of {churchInfo.name} unless otherwise stated. You may not reproduce, distribute, or modify any content without prior written permission.</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-on-light-primary)', margin: 'var(--space-6) 0 var(--space-3)' }}>External Links</h2>
            <p>This website may contain links to third-party websites. We are not responsible for the content or practices of these websites.</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-on-light-primary)', margin: 'var(--space-6) 0 var(--space-3)' }}>Changes</h2>
            <p>We reserve the right to update these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-on-light-primary)', margin: 'var(--space-6) 0 var(--space-3)' }}>Contact</h2>
            <p>For questions about these terms, contact us at {churchInfo.contact.email}.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
