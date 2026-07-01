import Button from '../ui/Button';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './FinalCta.module.css';

function ArchSvg() {
  return (
    <svg
      className={styles.archSvg}
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Arch pillars */}
      <rect x="80" y="160" width="14" height="280" rx="7" stroke="#c9a13b" strokeWidth="0.75" opacity="0.15" />
      <rect x="506" y="160" width="14" height="280" rx="7" stroke="#c9a13b" strokeWidth="0.75" opacity="0.15" />

      {/* Pillar capitals */}
      <rect x="74" y="150" width="26" height="18" rx="2" stroke="#c9a13b" strokeWidth="0.5" opacity="0.2" />
      <rect x="500" y="150" width="26" height="18" rx="2" stroke="#c9a13b" strokeWidth="0.5" opacity="0.2" />

      {/* Arch curve */}
      <path
        d="M87 160 C87 50, 300 20, 300 20 C300 20, 513 50, 513 160"
        stroke="#c9a13b"
        strokeWidth="0.75"
        opacity="0.15"
        fill="none"
      />

      {/* Inner arch ring */}
      <path
        d="M100 160 C100 70, 300 38, 300 38 C300 38, 500 70, 500 160"
        stroke="#c9a13b"
        strokeWidth="0.5"
        opacity="0.08"
        fill="none"
      />

      {/* Keystone ornament */}
      <path d="M290 22 L300 10 L310 22" stroke="#c9a13b" strokeWidth="0.75" opacity="0.25" fill="none" />
      <line x1="300" y1="10" x2="300" y2="2" stroke="#c9a13b" strokeWidth="0.75" opacity="0.2" />

      {/* Small crown/glow dot at apex */}
      <circle cx="300" cy="6" r="3" fill="#c9a13b" opacity="0.3" />

      {/* Base platform */}
      <line x1="70" y1="440" x2="530" y2="440" stroke="#c9a13b" strokeWidth="0.5" opacity="0.1" />
      <line x1="60" y1="448" x2="540" y2="448" stroke="#c9a13b" strokeWidth="0.5" opacity="0.06" />

      {/* Decorative dots along arch */}
      <circle cx="300" cy="22" r="1.5" fill="#c9a13b" opacity="0.15" />
      <circle cx="220" cy="32" r="1.5" fill="#c9a13b" opacity="0.12" />
      <circle cx="380" cy="32" r="1.5" fill="#c9a13b" opacity="0.12" />
      <circle cx="150" cy="60" r="1.5" fill="#c9a13b" opacity="0.1" />
      <circle cx="450" cy="60" r="1.5" fill="#c9a13b" opacity="0.1" />
      <circle cx="100" cy="106" r="1.5" fill="#c9a13b" opacity="0.08" />
      <circle cx="500" cy="106" r="1.5" fill="#c9a13b" opacity="0.08" />
    </svg>
  );
}

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <ArchSvg />
      <div className={styles.inner}>
        <ScrollReveal>
          <div className={styles.content}>
            <span className={styles.annotation}>You are welcome here</span>
            <h2 className={styles.text}>
              Come<br />
              <span className={styles.textAccent}>As You</span><br />
              Are
            </h2>
            <p className={styles.subtext}>
              Whether you're searching, doubting, or ready to take the next step — there's a seat for you.
            </p>
            <div className={styles.cta}>
              <Button to="/contact">Plan Your Visit</Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
