import SectionHeading from '../ui/SectionHeading';
import styles from './MinistryFloorPlan.module.css';

const spanMap = {
  'youth': { gridRow: 'span 2', gridColumn: 'span 2' },
  'teens-children': { gridRow: 'span 1', gridColumn: 'span 1' },
  'worship': { gridRow: 'span 1', gridColumn: 'span 1' },
  'drama': { gridRow: 'span 1', gridColumn: 'span 1' },
  'prayer': { gridRow: 'span 1', gridColumn: 'span 2' },
  'media': { gridRow: 'span 1', gridColumn: 'span 1' },
};

export default function MinistryFloorPlan({ ministries }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading eyebrow="Our Departments" delay={0}>Find Your Place</SectionHeading>
        <div className={styles.grid}>
          {ministries.map((m) => {
            const spans = spanMap[m.id] || { gridRow: 'span 1', gridColumn: 'span 1' };
            return (
              <div key={m.id} className={styles.block} style={{ gridRow: spans.gridRow, gridColumn: spans.gridColumn }}>
                <div className={styles.blockLabel}>
                  <span className={styles.blockLabelLine} />
                  {m.id}
                </div>
                <h3 className={styles.blockName}>{m.name}</h3>
                <p className={styles.blockDesc}>{m.description.split('.')[0]}.</p>
                <div className={styles.blockMeta}>
                  <span>{m.leader}</span>
                  <span>&middot;</span>
                  <span>{m.meetingDay} {m.meetingTime}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
