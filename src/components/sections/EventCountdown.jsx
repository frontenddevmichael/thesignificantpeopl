import { useState, useEffect } from 'react';
import styles from './EventCountdown.module.css';

const EVENT_DATES = [
  { name: 'Fire in the Word Conference', month: 4, day: 1 },
  { name: 'Eagles of Destiny Congress', month: 7, day: 1 },
];

function getNextEvent() {
  const now = new Date();
  const currentYear = now.getFullYear();
  for (const event of EVENT_DATES) {
    const date = new Date(currentYear, event.month - 1, event.day);
    if (date > now) return { ...event, date };
  }
  const date = new Date(currentYear + 1, EVENT_DATES[0].month - 1, EVENT_DATES[0].day);
  return { ...EVENT_DATES[0], date };
}

function calcDelta(target) {
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function EventCountdown() {
  const next = getNextEvent();
  const [delta, setDelta] = useState(() => calcDelta(next.date));

  useEffect(() => {
    const timer = setInterval(() => setDelta(calcDelta(next.date)), 1000);
    return () => clearInterval(timer);
  }, [next.date]);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{next.name}</h3>
      <div className={styles.units}>
        <div className={styles.unit}>
          <span className={styles.value}>{String(delta.days).padStart(2, '0')}</span>
          <span className={styles.label}>Days</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.unit}>
          <span className={styles.value}>{String(delta.hours).padStart(2, '0')}</span>
          <span className={styles.label}>Hours</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.unit}>
          <span className={styles.value}>{String(delta.minutes).padStart(2, '0')}</span>
          <span className={styles.label}>Min</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.unit}>
          <span className={styles.value}>{String(delta.seconds).padStart(2, '0')}</span>
          <span className={styles.label}>Sec</span>
        </div>
      </div>
    </div>
  );
}
