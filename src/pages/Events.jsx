import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import EventCountdown from '../components/sections/EventCountdown';
import ScrollReveal from '../components/ui/ScrollReveal';
import { events } from '../data/events';
import { churchInfo } from '../data/churchInfo';
import styles from './About.module.css';

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
          <div style={{ display: 'grid', gap: 'var(--space-6)', marginTop: 'var(--space-6)' }}>
            {events.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 150}>
                <div style={{ border: '1px solid var(--color-border-light)', padding: 'var(--space-6)', background: 'var(--color-bg-secondary)', position: 'relative', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(10, 15, 31, 0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', position: 'absolute', top: 0, left: 'var(--space-4)', background: 'var(--color-bg-secondary)', padding: '0 var(--space-2)', transform: 'translateY(-50%)' }}>
                    Detail &mdash; {event.id}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display-md)', fontWeight: 'var(--fw-semibold)', color: 'var(--color-text-on-light-primary)', marginBottom: 'var(--space-2)', letterSpacing: '-0.02em' }}>
                    {event.name}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-md)', color: 'var(--color-text-on-light-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-3)' }}>
                    {event.description}
                  </p>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: 'var(--color-accent)', letterSpacing: '0.05em' }}>
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
