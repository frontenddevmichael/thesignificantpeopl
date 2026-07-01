import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LiveStream from '../components/sections/LiveStream';
import { churchInfo } from '../data/churchInfo';
import styles from './Live.module.css';

export default function Live() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Live Stream — {churchInfo.name}</title>
        <meta name="description" content={`Watch live services from ${churchInfo.name}. Join us for worship, teaching, and fellowship online.`} />
        <meta property="og:title" content={`Live Stream — ${churchInfo.name}`} />
        <meta property="og:description" content={`Watch live services from ${churchInfo.name}. Join us for worship, teaching, and fellowship online.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/live" />
      </Helmet>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Live</span>
          <h1 className={styles.heroTitle}>Worship With Us Online</h1>
        </div>
      </section>
      <LiveStream
        videoId={churchInfo.liveStreamVideoId || null}
        youtubeUrl={churchInfo.social.youtube}
      />
      <section className={styles.contactSection}>
        <div className={styles.contactCtaInner}>
          <h2 className={styles.contactCtaTitle}>Need Prayer or Have a Question?</h2>
          <p className={styles.contactCtaText}>
            Our team would love to hear from you. Reach out and we will be happy to connect.
          </p>
          <Link to="/contact" className={styles.contactCtaBtn}>
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
