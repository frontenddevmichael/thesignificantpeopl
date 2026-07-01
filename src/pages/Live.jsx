import { Helmet } from 'react-helmet-async';
import LiveStream from '../components/sections/LiveStream';
import { churchInfo } from '../data/churchInfo';
import styles from './About.module.css';

export default function Live() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Live Stream — {churchInfo.name}</title>
        <meta name="description" content={`Watch live services from ${churchInfo.name}. Join us for worship, teaching, and fellowship online.`} />
      </Helmet>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Live</span>
          <h1 className={styles.heroTitle}>Worship With Us Online</h1>
        </div>
      </section>
      <LiveStream youtubeUrl={churchInfo.social.youtube} />
    </main>
  );
}
