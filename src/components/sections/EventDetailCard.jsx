import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './EventDetailCard.module.css';

export default function EventDetailCard({ events }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading eyebrow="Upcoming">Mark Your Calendar</SectionHeading>
        <div className={styles.cards}>
          {events.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 150}>
              <div className={styles.card}>
                <span className={styles.cardLabel}>Detail — {event.id}</span>
                <h3 className={styles.cardName}>{event.name}</h3>
                <p className={styles.cardDesc}>{event.description}</p>
                <div className={styles.cardMeta}>
                  <span>{event.month} · {event.duration}</span>
                  <span>{event.venue}</span>
                  <span>{event.scripture}</span>
                </div>
                <Button to="/events">View Details</Button>
                <div className={styles.detailCallout} aria-hidden="true">&#x2197;</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
