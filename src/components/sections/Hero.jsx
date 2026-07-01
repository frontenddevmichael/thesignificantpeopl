import Button from '../ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.headlineCol}>
          <span className={styles.annotation}>The Significant Peoples Church &mdash; Est. 2007</span>
          <h1 className={styles.headline}>
            Raising<br />
            <span className={styles.headlineAccent}>Significant</span><br />
            People
          </h1>
          <p className={styles.subhead}>
            Disciples of Jesus Christ impacting the nations through purpose, power, and the Word of God.
          </p>
          <div className={styles.ctas}>
            <Button to="/about">Learn Our Story</Button>
            <Button to="/contact" variant="light">Plan Your Visit</Button>
          </div>
        </div>
        <div className={styles.illustrationCol}>
          <div className={styles.imgWrapper}>
            <img
              src="/Photos/Heroimage.jpg"
              alt="The Significant Peoples Church"
              className={styles.heroImg}
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
