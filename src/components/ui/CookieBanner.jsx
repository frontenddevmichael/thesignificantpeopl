import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CookieBanner.module.css';

const STORAGE_KEY = 'spc-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="alert">
      <p className={styles.text}>
        This website uses essential cookies to function properly.{' '}
        <Link to="/cookie-policy" className={styles.link}>Learn more</Link>.
      </p>
      <button type="button" className={styles.btn} onClick={accept}>Accept</button>
    </div>
  );
}
