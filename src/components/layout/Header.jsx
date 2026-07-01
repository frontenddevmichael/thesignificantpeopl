import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { churchInfo } from '../../data/churchInfo';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand} onClick={close}>
        <div className={styles.logo}>
          <img src="/icons.svg" alt={churchInfo.name} />
        </div>
        <div className={styles.wordmark}>
          <span className={styles.wordmarkMain}>Significant Peoples</span>
          <span className={styles.wordmarkSub}>Product of Grace</span>
        </div>
      </Link>
      <button
        type="button"
        className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
      <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
        <NavLink to="/about" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>About</NavLink>
        <NavLink to="/ministries" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>Ministries</NavLink>
        <NavLink to="/sermons" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>Sermons</NavLink>
        <NavLink to="/events" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>Events</NavLink>
        <NavLink to="/live" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>Live</NavLink>
        <NavLink to="/give" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''} ${styles.giveLink}`} onClick={close}>Give</NavLink>
      </nav>
    </header>
  );
}
