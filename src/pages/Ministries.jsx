import { Helmet } from 'react-helmet-async';
import { useState, useMemo, useRef, useEffect } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import MinistryFloorPlan from '../components/sections/MinistryFloorPlan';
import MinistryFilter from '../components/sections/MinistryFilter';
import ScrollReveal from '../components/ui/ScrollReveal';
import { ministries } from '../data/ministries';
import { churchInfo } from '../data/churchInfo';
import styles from './About.module.css';

export default function MinistriesPage() {
  const floorPlanRef = useRef(null);

  const allTags = useMemo(() => {
    const tags = new Set();
    ministries.forEach((m) => m.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  const [activeTag, setActiveTag] = useState(null);

  const filtered = useMemo(() => {
    if (!activeTag) return ministries;
    return ministries.filter((m) => m.tags.includes(activeTag));
  }, [activeTag]);

  useEffect(() => {
    if (activeTag && floorPlanRef.current) {
      floorPlanRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTag]);

  return (
    <main className={styles.page}>
      <Helmet>
        <title>Ministries — {churchInfo.name}</title>
        <meta name="description" content={`Explore the ministries of ${churchInfo.name}: Youth, Children's Church, Worship, Drama, Prayer, Media, and more.`} />
        <meta property="og:title" content={`Ministries — ${churchInfo.name}`} />
        <meta property="og:description" content={`Explore the ministries of ${churchInfo.name}: Youth, Children's Church, Worship, Drama, Prayer, Media, and more.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/ministries" />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Ministries</span>
          <h1 className={styles.heroTitle}>Every Member a Minister</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.twoCol}>
            <ScrollReveal>
              <SectionHeading eyebrow="Our Departments">Find Your Place</SectionHeading>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className={styles.bodyText}>
                <p>At {churchInfo.name}, we believe every believer is called to serve. Our ministries are designed to help you discover your gifts, grow in your faith, and make a difference. Find a ministry that aligns with your passion and purpose.</p>
              </div>
            </ScrollReveal>
          </div>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <MinistryFilter tags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />
          </div>
        </div>
      </section>

      <MinistryFloorPlan ministries={filtered} activeTag={activeTag} ref={floorPlanRef} />
    </main>
  );
}
