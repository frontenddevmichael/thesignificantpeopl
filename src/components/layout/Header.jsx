import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { churchInfo } from '../../data/churchInfo';
import BottomTabBar from './BottomTabBar';
import styles from './Header.module.css';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const navRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const nav = navRef.current;
    if (!nav) return;

    const handleKey = (e) => {
      if (e.key !== 'Tab') return;
      const focusables = nav.querySelectorAll(FOCUSABLE);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKey);
    nav.querySelector(FOCUSABLE)?.focus();
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <Link to="/" className={styles.brand} onClick={close}>
          <div className={styles.logo}>
            <img src="/icons.svg" alt={churchInfo.name} />
          </div>
          <div className={styles.wordmark}>
            <span className={styles.wordmarkMain}>Significant Peoples</span>
            <span className={styles.wordmarkSub}>Disciples of All Nations</span>
          </div>
        </Link>
        <button
          type="button"
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="site-nav"
        >
          <span /><span /><span />
        </button>
        <nav
          id="site-nav"
          ref={navRef}
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
        >
          <NavLink to="/about" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>About</NavLink>
          <NavLink to="/ministries" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>Ministries</NavLink>
          <NavLink to="/sermons" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>Sermons</NavLink>
          <NavLink to="/events" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>Events</NavLink>
          <NavLink to="/crusades" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>Crusades</NavLink>
          <NavLink to="/live" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} onClick={close}>Live</NavLink>
          <NavLink to="/give" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''} ${styles.giveLink}`} onClick={close}>Give</NavLink>
        </nav>
        <div
          className={styles.progressBar}
          role="progressbar"
          aria-label="Page scroll progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(progress * 100)}
          style={{ width: `${progress * 100}%` }}
        />
      </header>
      <BottomTabBar />
    </>
  );
}
