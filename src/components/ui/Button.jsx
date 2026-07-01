import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ children, variant = 'outline', to, href, onClick, className = '', disabled, type: btnType, ...rest }) {
  const cls = `${styles.btn} ${styles[variant]} ${disabled ? styles.disabled : ''} ${className}`.trim();

  if (to) {
    return <Link to={to} className={cls} {...rest}>{children}</Link>;
  }

  if (href) {
    return <a href={href} className={cls} {...rest}>{children}</a>;
  }

  return <button type={btnType || 'button'} onClick={onClick} className={cls} disabled={disabled} {...rest}>{children}</button>;
}
