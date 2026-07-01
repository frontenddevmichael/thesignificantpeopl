import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import ScriptureBlock from '../components/sections/ScriptureBlock';
import MissionMosaic from '../components/sections/MissionMosaic';
import LeadershipProfile from '../components/sections/LeadershipProfile';
import FaqAccordion from '../components/sections/FaqAccordion';
import ScrollReveal from '../components/ui/ScrollReveal';
import { leadership } from '../data/leadership';
import { churchInfo } from '../data/churchInfo';
import { faq } from '../data/faq';
import styles from './About.module.css';

const historyEntries = [
  { label: 'Founded', value: churchInfo.history.founded },
  { label: 'Commissioned', value: churchInfo.history.commissioned },
  { label: 'First Location', value: churchInfo.history.firstService },
  { label: 'Headquarters', value: churchInfo.history.currentLocation },
  { label: 'Initial Members', value: `${churchInfo.history.initialMembers} members` },
  { label: 'Today', value: `${churchInfo.history.currentMembers} members, ${churchInfo.history.branches} branches, ${churchInfo.history.houseFellowships} fellowships` },
];

export default function About() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>About — {churchInfo.name}</title>
        <meta name="description" content={`Learn about ${churchInfo.name}: our vision, mission, history, and leadership. ${churchInfo.seo.description}`} />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>About Us</span>
          <h1 className={styles.heroTitle}>A People Built for Significance</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.twoCol}>
            <ScrollReveal>
              <SectionHeading eyebrow="Our Vision">{churchInfo.vision}</SectionHeading>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className={styles.bodyText}>
                <p>{churchInfo.shortDescription}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScriptureBlock text="He who began a good work in you will carry it on to completion." citation="Philippians 1:6" />

      <section className={styles.section} style={{ background: 'var(--spc-cream-200)' }}>
        <div className={styles.sectionInner}>
          <div className={styles.twoCol}>
            <ScrollReveal>
              <SectionHeading eyebrow="Our Mission">{churchInfo.mission}</SectionHeading>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className={styles.bodyText}>
                <p>We are committed to:</p>
                <p><strong>Teaching</strong> that grounds believers in their identity in Christ.<br />
                <strong>Training</strong> that equips every member for ministry.<br />
                <strong>Sending</strong> that launches labourers into the harvest field.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <SectionHeading eyebrow="Our Values">What We Stand For</SectionHeading>
          <div className={styles.values}>
            {churchInfo.coreValues.map((v) => (
              <ScrollReveal key={v.title} delay={100}>
                <div className={styles.valueCard}>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--spc-cream-200)' }}>
        <div className={styles.sectionInner}>
          <SectionHeading eyebrow="Our History">The Journey So Far</SectionHeading>
          <div className={styles.historyGrid}>
            {historyEntries.map((entry) => (
              <div key={entry.label} className={styles.historyItem}>
                <span className={styles.historyLabel}>{entry.label}</span>
                <p className={styles.historyValue}>{entry.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MissionMosaic />

      <section className={`${styles.section} ${styles.dividerSection}`}>
        <div className={styles.sectionInner}>
          <SectionHeading eyebrow="Our Leaders">Shepherds of the Flock</SectionHeading>
        </div>
      </section>
      <LeadershipProfile profiles={[leadership[0], leadership[1]]} />

      <section className={styles.section} style={{ background: 'var(--spc-cream-200)' }}>
        <div className={styles.sectionInner} style={{ maxWidth: 'var(--container-narrow)' }}>
          <SectionHeading eyebrow="FAQ">Frequently Asked Questions</SectionHeading>
          <FaqAccordion items={faq} />
        </div>
      </section>

      <ScriptureBlock text="I thank my God every time I remember you." citation="Philippians 1:3" />
    </main>
  );
}
