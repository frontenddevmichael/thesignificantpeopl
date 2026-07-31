import { useState, useEffect, useRef } from 'react';
import styles from './EventCountdown.module.css';

const EVENT_DATES = [
  { name: 'Fire in the Word Conference', month: 4, day: 1 },
  { name: 'Eagles of Destiny Congress', month: 8, day: 1 },
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

function FlipUnit({ value, label }) {
  const prevRef = useRef(value);
  const [tick, setTick] = useState(null);

  useEffect(() => {
    if (value === prevRef.current) return;
    setTick({ from: prevRef.current, to: value });
    prevRef.current = value;
  }, [value]);

  const text = String(value).padStart(2, '0');

  return (
    <div className={styles.unit}>
      <div className={styles.card} aria-hidden="true">
        {tick ? (
          <>
            <span className={`${styles.digit} ${styles.digitOut}`}>
              {String(tick.from).padStart(2, '0')}
            </span>
            <span
              className={`${styles.digit} ${styles.digitIn}`}
              onAnimationEnd={() => setTick(null)}
            >
              {String(tick.to).padStart(2, '0')}
            </span>
          </>
        ) : (
          <span className={styles.digit}>{text}</span>
        )}
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function EventCountdown() {
  const next = getNextEvent();
  const [delta, setDelta] = useState(() => calcDelta(next.date));
  const [srText, setSrText] = useState(() =>
    `Countdown to ${next.name}: ${delta.days} days, ${delta.hours} hours, ${delta.minutes} minutes, ${delta.seconds} seconds`
  );

  useEffect(() => {
    const timer = setInterval(() => setDelta(calcDelta(next.date)), 1000);
    return () => clearInterval(timer);
  }, [next.date]);

  useEffect(() => {
    const refreshSr = () => {
      const d = calcDelta(next.date);
      setSrText(
        `Countdown to ${next.name}: ${d.days} days, ${d.hours} hours, ${d.minutes} minutes, ${d.seconds} seconds`
      );
    };
    const timer = setInterval(refreshSr, 30000);
    return () => clearInterval(timer);
  }, [next.name, next.date]);

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{next.name}</h3>
      <div className={styles.units} aria-hidden="true">
        <FlipUnit value={delta.days} label="Days" />
        <span className={styles.separator}>:</span>
        <FlipUnit value={delta.hours} label="Hours" />
        <span className={styles.separator}>:</span>
        <FlipUnit value={delta.minutes} label="Min" />
        <span className={styles.separator}>:</span>
        <FlipUnit value={delta.seconds} label="Sec" />
      </div>
      <p className={styles.srOnly} aria-live="polite">
        {srText}
      </p>
    </div>
  );
}
