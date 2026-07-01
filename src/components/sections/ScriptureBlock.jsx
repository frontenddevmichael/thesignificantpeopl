import ScrollReveal from '../ui/ScrollReveal';
import styles from './ScriptureBlock.module.css';

export default function ScriptureBlock({ text, citation }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <ScrollReveal>
          <p className={`${styles.text} ${styles.textOffset}`}>{text}</p>
          <span className={styles.citation}>{citation}</span>
        </ScrollReveal>
      </div>
    </section>
  );
}
