import ScrollReveal from '../ui/ScrollReveal';
import { churchInfo } from '../../data/churchInfo';
import { IconCross } from '../ui/Icons';
import styles from './MissionMosaic.module.css';

function ConnectorSVG() {
  return (
    <svg className={styles.connectorSvg} viewBox="0 0 60 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      {/* Flowing path - top to bottom */}
      <path
        d="M 30 0 Q 10 60 30 120 T 30 240 T 30 360 Q 30 380 30 400"
        stroke="var(--color-accent)"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M 30 0 Q 10 60 30 120 T 30 240 T 30 360 Q 30 380 30 400"
        stroke="var(--color-accent)"
        strokeWidth="3"
        fill="none"
        opacity="0.08"
      />

      {/* Waypoint diamonds */}
      <rect x="26" y="35" width="8" height="8" rx="1" transform="rotate(45 30 39)" fill="var(--color-accent)" opacity="0.5" />
      <rect x="26" y="35" width="8" height="8" rx="1" transform="rotate(45 30 39)" fill="none" stroke="var(--color-accent)" strokeWidth="0.75" opacity="0.3" />

      <rect x="26" y="130" width="8" height="8" rx="1" transform="rotate(45 30 134)" fill="var(--color-accent)" opacity="0.5" />
      <rect x="26" y="130" width="8" height="8" rx="1" transform="rotate(45 30 134)" fill="none" stroke="var(--color-accent)" strokeWidth="0.75" opacity="0.3" />

      <rect x="26" y="230" width="8" height="8" rx="1" transform="rotate(45 30 234)" fill="var(--color-accent)" opacity="0.5" />
      <rect x="26" y="230" width="8" height="8" rx="1" transform="rotate(45 30 234)" fill="none" stroke="var(--color-accent)" strokeWidth="0.75" opacity="0.3" />

      {/* Small dots along path */}
      <circle cx="30" cy="80" r="1.5" fill="var(--color-accent)" opacity="0.2" />
      <circle cx="30" cy="170" r="1.5" fill="var(--color-accent)" opacity="0.2" />
      <circle cx="30" cy="280" r="1.5" fill="var(--color-accent)" opacity="0.2" />
      <circle cx="30" cy="340" r="1.5" fill="var(--color-accent)" opacity="0.2" />

      {/* Connector arrow at bottom */}
      <path d="M 25 395 L 30 400 L 35 395" stroke="var(--color-accent)" strokeWidth="0.75" fill="none" opacity="0.35" />
    </svg>
  );
}

export default function MissionMosaic() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.mosaic}>
          {/* Panel ornament top */}
          <div className={styles.ornamentTop}>
            <span className={styles.ornLine} />
            <IconCross />
            <span className={styles.ornLine} />
          </div>

          <div className={styles.panels}>
            <ScrollReveal>
              <div className={styles.panel}>
                <div className={styles.panelBorder}>
                  <span className={styles.panelLabel}>Our Vision</span>
                  <h2 className={styles.wordmark}>
                    Raising<br />
                    <span className={styles.wordAccent}>Significant</span><br />
                    People
                  </h2>
                  <div className={styles.rule} />
                  <p className={styles.text}>{churchInfo.vision}</p>
                </div>
              </div>
            </ScrollReveal>

            <div className={styles.connectorCol}>
              <ConnectorSVG />
            </div>

            <ScrollReveal delay={120}>
              <div className={styles.panel}>
                <div className={styles.panelBorder}>
                  <span className={styles.panelLabel}>Our Mission</span>
                  <h2 className={styles.wordmark}>
                    Empower<br />
                    <span className={styles.wordAccent}>Release</span><br />
                    Maximize
                  </h2>
                  <div className={styles.rule} />
                  <p className={styles.text}>{churchInfo.mission}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Panel ornament bottom */}
          <div className={styles.ornamentBottom}>
            <span className={styles.ornLine} />
            <IconCross />
            <span className={styles.ornLine} />
          </div>
        </div>
      </div>
    </section>
  );
}
