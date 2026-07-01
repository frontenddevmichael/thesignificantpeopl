import { Helmet } from 'react-helmet-async';
import { churchInfo } from '../data/churchInfo';
import styles from './About.module.css';

export default function CookiePolicy() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Cookie Policy — {churchInfo.name}</title>
        <meta name="description" content={`Cookie Policy for ${churchInfo.name}. Learn how we use cookies on our website.`} />
        <meta property="og:title" content={`Cookie Policy — ${churchInfo.name}`} />
        <meta property="og:description" content={`Cookie Policy for ${churchInfo.name}. Learn how we use cookies on our website.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/cookie-policy" />
      </Helmet>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Legal</span>
          <h1 className={styles.heroTitle}>Cookie Policy</h1>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionInner} style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className={styles.bodyText}>
            <p><em>Last updated: January 2025</em></p>
            <h2>What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website function properly and provide information to the site owners.</p>
            <h2>How We Use Cookies</h2>
            <p>We use only essential cookies necessary for the website to function. We do not use tracking cookies, advertising cookies, or third-party analytics cookies that collect personal information.</p>
            <h2>Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. However, disabling essential cookies may affect the functionality of the website.</p>
            <h2>Contact</h2>
            <p>If you have questions about our cookie policy, please contact us at {churchInfo.contact.email}.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
