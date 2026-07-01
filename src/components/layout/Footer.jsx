import { Link } from 'react-router-dom';
import { churchInfo } from '../../data/churchInfo';
import styles from './Footer.module.css';

const stroke = { stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };

function IconFb() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
    </svg>
  );
}

function IconIg() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  );
}

function IconYt() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

function IconTt() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke}>
      <path d="M9 12a4 4 0 1 0 4 4V4h3a4 4 0 0 0 4 4" />
    </svg>
  );
}

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.borderLine}>
        <span className={styles.borderTick} />
        <span className={styles.borderRule} />
        <span className={styles.borderTick} />
      </div>
      <div className={styles.inner}>
        <div>
          <h3 className={styles.colTitle}>{churchInfo.name}</h3>
          <div className={styles.colText}>
            <p>{churchInfo.shortDescription.split('.')[0]}.</p>
            <p>{churchInfo.contact.address}</p>
          </div>
          <div className={styles.social}>
            <a href={churchInfo.social.facebook[0]} className={styles.socialLink} data-brand="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><IconFb /></a>
            <a href={churchInfo.social.instagram} className={styles.socialLink} data-brand="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconIg /></a>
            <a href={churchInfo.social.youtube} className={styles.socialLink} data-brand="youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><IconYt /></a>
            <a href={churchInfo.social.tiktok} className={styles.socialLink} data-brand="tiktok" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><IconTt /></a>
          </div>
        </div>
        <div>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <div className={styles.linkCol}>
            <Link to="/about">About</Link>
            <Link to="/ministries">Ministries</Link>
            <Link to="/sermons">Sermons</Link>
            <Link to="/events">Events</Link>
            <Link to="/live">Live Stream</Link>
          </div>
        </div>
        <div>
          <h3 className={styles.colTitle}>Connect</h3>
          <div className={styles.linkCol}>
            <Link to="/give">Give</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/contact">Prayer Request</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copyright}>&copy; {year} {churchInfo.name}. All rights reserved.</span>
        <div className={styles.legal}>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
