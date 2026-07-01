import { Helmet } from 'react-helmet-async';
import { churchInfo } from '../data/churchInfo';
import styles from './About.module.css';

export default function PrivacyPolicy() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Privacy Policy — {churchInfo.name}</title>
        <meta name="description" content={`Privacy Policy for ${churchInfo.name}. Learn how we collect, use, and protect your personal information.`} />
        <meta property="og:title" content={`Privacy Policy — ${churchInfo.name}`} />
        <meta property="og:description" content={`Privacy Policy for ${churchInfo.name}. Learn how we collect, use, and protect your personal information.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/privacy-policy" />
      </Helmet>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Legal</span>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionInner} style={{ maxWidth: 'var(--container-narrow)' }}>
          <div className={styles.bodyText}>
            <p><em>Last updated: January 2025</em></p>
            <h2>Information We Collect</h2>
            <p>We collect personal information you voluntarily provide to us when you fill out forms on our website, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and prayer requests.</p>
            <h2>How We Use Your Information</h2>
            <p>We use your information to respond to your inquiries, process your prayer requests, send you church updates (with your consent), and improve our services. We do not sell, trade, or share your personal information with third parties.</p>
            <h2>Data Protection</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            <h2>Contact</h2>
            <p>If you have questions about this privacy policy, please contact us at {churchInfo.contact.email}.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
