import styles from './CropFrame.module.css';

export default function CropFrame({ children, className = '' }) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
