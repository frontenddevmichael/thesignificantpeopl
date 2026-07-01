import { NavLink } from 'react-router-dom';
import styles from './BottomTabBar.module.css';

export default function BottomTabBar() {
  return (
    <nav className={styles.bar} aria-label="Mobile navigation">
      <NavLink to="/" className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`} end>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.tabIcon}>
          <path d="M3 12l9-9 9 9" />
          <path d="M5 10v9a1 1 0 0 0 1 1h3v-5h6v5h3a1 1 0 0 0 1-1v-9" />
        </svg>
        <span className={styles.tabLabel}>Home</span>
      </NavLink>

      <NavLink to="/ministries" className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.tabIcon}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        <span className={styles.tabLabel}>Ministries</span>
      </NavLink>

      <NavLink to="/sermons" className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.tabIcon}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="12" y1="6" x2="12" y2="14" />
          <line x1="8" y1="10" x2="16" y2="10" />
        </svg>
        <span className={styles.tabLabel}>Sermons</span>
      </NavLink>

      <NavLink to="/give" className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.tabIcon}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <span className={styles.tabLabel}>Give</span>
      </NavLink>

      <NavLink to="/about" className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.tabIcon}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span className={styles.tabLabel}>About</span>
      </NavLink>
    </nav>
  );
}
