import styles from './MinistryFilter.module.css';

export default function MinistryFilter({ tags, activeTag, onTagChange }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tags}>
        <button
          type="button"
          className={`${styles.tag} ${activeTag === null ? styles.tagActive : ''}`}
          onClick={() => onTagChange(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`${styles.tag} ${activeTag === tag ? styles.tagActive : ''}`}
            onClick={() => onTagChange(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
