import { useState } from 'react';
import styles from './FaqAccordion.module.css';

export default function FaqAccordion({ items }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className={styles.list}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={styles.item}>
            <button
              type="button"
              id={`faq-trigger-${item.id}`}
              className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''}`}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
            >
              {item.question}
              <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>+</span>
            </button>
            <div id={`faq-panel-${item.id}`} className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`} role="region" aria-labelledby={`faq-trigger-${item.id}`}>
              <div className={styles.panelText}>{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
