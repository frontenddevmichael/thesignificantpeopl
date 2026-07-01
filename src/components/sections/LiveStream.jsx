import SectionHeading from '../ui/SectionHeading';
import styles from './LiveStream.module.css';

export default function LiveStream({ youtubeUrl }) {
  const videoId = youtubeUrl ? extractVideoId(youtubeUrl) : null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading eyebrow="Live" dark large>Watch &amp; Worship With Us</SectionHeading>
        <div className={styles.embed}>
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className={styles.offline}>
              <div className={styles.offlineIcon}>&#x25B6;</div>
              <div className={styles.offlineText}>No live stream at the moment.<br />Check back during service hours.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function extractVideoId(url) {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}
