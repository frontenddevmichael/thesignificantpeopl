import { Link } from 'react-router-dom';
import { churchInfo } from '../../data/churchInfo';
import { IconFacebook, IconInstagram, IconYoutube, IconTiktok } from '../ui/Icons';
import styles from './Footer.module.css';

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
            <a href={churchInfo.social.facebook[0]} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><IconFacebook /></a>
            <a href={churchInfo.social.instagram} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconInstagram /></a>
            <a href={churchInfo.social.youtube} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><IconYoutube /></a>
            <a href={churchInfo.social.tiktok} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><IconTiktok /></a>
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
