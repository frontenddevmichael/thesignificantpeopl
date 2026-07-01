import { useEffect } from 'react';
import styles from './Toast.module.css';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`} role="status">
      <span className={styles.icon}>
        {type === 'success' ? '\u2714' : type === 'error' ? '\u2718' : '\u24D8'}
      </span>
      <span className={styles.message}>{message}</span>
      <button className={styles.close} onClick={onClose} aria-label="Dismiss">&times;</button>
    </div>
  );
}
