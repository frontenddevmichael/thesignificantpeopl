import SectionHeading from '../ui/SectionHeading';
import { IconChurch, IconCalendar, IconClock } from '../ui/Icons';
import { churchInfo } from '../../data/churchInfo';
import styles from './LiveStream.module.css';

export default function LiveStream({ videoId, youtubeUrl }) {
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {embedUrl ? (
          <>
            <SectionHeading eyebrow="Live" dark large>Watch &amp; Worship With Us</SectionHeading>
            <div className={styles.embed}>
              <iframe
                src={embedUrl}
                title="Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.liveIndicator}>
              <span className={styles.liveDot} />
              <span>Live now</span>
            </div>
          </>
        ) : (
          <>
            <SectionHeading eyebrow="Not Live Yet" dark large>Join Us In Person</SectionHeading>
            <div className={styles.offlineLayout}>
              <div className={styles.offlineCard}>
                <div className={styles.offlineIconWrap}>
                  <IconCalendar />
                </div>
                <h3 className={styles.offlineHeading}>Service Schedule</h3>
                <div className={styles.scheduleList}>
                  {churchInfo.services.map((s) => (
                    <div key={s.day + s.time} className={styles.scheduleRow}>
                      <span className={styles.scheduleDay}>{s.day}</span>
                      <span className={styles.scheduleDot} />
                      <span className={styles.scheduleTime}><IconClock /> {s.time}</span>
                      <span className={styles.scheduleLabel}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.offlineCard}>
                <div className={styles.offlineIconWrap}>
                  <IconChurch />
                </div>
                <h3 className={styles.offlineHeading}>Watch Online Later</h3>
                <p className={styles.offlineText}>
                  Recordings of our services are available on our YouTube channel and Telegram.
                </p>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.watchBtn}
                >
                  Visit YouTube Channel
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
