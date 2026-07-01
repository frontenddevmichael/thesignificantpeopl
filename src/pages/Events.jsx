import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import EventCountdown from '../components/sections/EventCountdown';
import ScrollReveal from '../components/ui/ScrollReveal';
import { events } from '../data/events';
import { churchInfo } from '../data/churchInfo';
import styles from './About.module.css';
import eStyles from './Events.module.css';

export default function EventsPage() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Events — {churchInfo.name}</title>
        <meta name="description" content={`Upcoming events at ${churchInfo.name}: The Eagles of Destiny Congress and Fire in the Word Conference.`} />
        <meta property="og:title" content={`Events — ${churchInfo.name}`} />
        <meta property="og:description" content={`Upcoming events at ${churchInfo.name}: The Eagles of Destiny Congress and Fire in the Word Conference.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/events" />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Events</span>
          <h1 className={styles.heroTitle}>Mark Your Calendar</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner} style={{ maxWidth: 'var(--container-narrow)' }}>
          <ScrollReveal>
            <SectionHeading eyebrow="Coming Soon">Next Event Countdown</SectionHeading>
            <EventCountdown />
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--spc-cream-200)' }}>
        <div className={styles.sectionInner}>
          <SectionHeading eyebrow="Annual Gatherings">Our Events</SectionHeading>
          <div className={eStyles.grid}>
            {events.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 150}>
                <div className={eStyles.card}>
                  <span className={eStyles.badge}>
                    Detail &mdash; {event.id}
                  </span>
                  <h3 className={eStyles.title}>
                    {event.name}
                  </h3>
                  <p className={eStyles.desc}>
                    {event.description}
                  </p>
                  <div className={eStyles.meta}>
                    <span>{event.month} &middot; {event.duration}</span><br />
                    <span>{event.venue} &middot; {event.scripture}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
