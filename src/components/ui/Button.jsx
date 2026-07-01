import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ children, variant = 'outline', to, href, onClick, className = '' }) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`.trim();

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }

  return <button type="button" onClick={onClick} className={cls}>{children}</button>;
}
