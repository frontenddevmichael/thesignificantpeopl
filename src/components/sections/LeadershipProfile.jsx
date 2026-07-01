import CropFrame from './CropFrame';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './LeadershipProfile.module.css';

export default function LeadershipProfile({ profiles }) {
  const [primary, secondary] = profiles;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.profiles}>
          <ScrollReveal>
            <div className={styles.profileLarge}>
              <CropFrame>
                <div className={styles.placeholder}>
                  {primary.photo ? (
                    <img src={primary.photo} alt={primary.name} />
                  ) : (
                    <div className={styles.initials}>{primary.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</div>
                  )}
                </div>
              </CropFrame>
              <div>
                <h3 className={styles.name}>{primary.name}</h3>
                <p className={styles.title}>{primary.title}</p>
                <p className={styles.bio}>{primary.bio}</p>
                <blockquote className={styles.quote}>&ldquo;{primary.quote}&rdquo;</blockquote>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className={styles.profileSmall}>
              <CropFrame>
                <div className={styles.placeholder}>
                  {secondary.photo ? (
                    <img src={secondary.photo} alt={secondary.name} />
                  ) : (
                    <div className={styles.initials}>{secondary.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</div>
                  )}
                </div>
              </CropFrame>
              <div>
                <h3 className={styles.name}>{secondary.name}</h3>
                <p className={styles.title}>{secondary.title}</p>
                <p className={styles.bio}>{secondary.bio}</p>
                <blockquote className={styles.quote}>&ldquo;{secondary.quote}&rdquo;</blockquote>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
