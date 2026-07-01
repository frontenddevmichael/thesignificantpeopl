import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <main className={styles.section}>
      <Helmet>
        <title>404 — Page Not Found | The Significant Peoples Church</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved. Let us help you find your way." />
        <meta property="og:title" content="404 — Page Not Found | The Significant Peoples Church" />
        <meta property="og:description" content="The page you are looking for does not exist or has been moved." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className={styles.inner}>
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>Page Not Found</h1>
        <p className={styles.text}>
          The page you are looking for doesn&rsquo;t exist or has been moved.
          Let&rsquo;s get you back on track.
        </p>
        <div className={styles.linkRow}>
          <Button to="/" variant="primary">Go Home</Button>
          <Button to="/contact">Contact Us</Button>
        </div>
      </div>
    </main>
  );
}
