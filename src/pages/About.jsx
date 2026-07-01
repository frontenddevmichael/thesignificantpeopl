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

const valueIcons = {
  'Loyalty to God': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  'Excellence': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  'Accountability': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </svg>
  ),
  'Discipline and Dedication': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
      <path d="M12 2l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5L12 2z" />
    </svg>
  ),
};

const historyEntries = [
  { label: 'Founded', value: churchInfo.history.founded },
  { label: 'Commissioned', value: churchInfo.history.commissioned },
  { label: 'First Location', value: churchInfo.history.firstService },
  { label: 'Headquarters', value: churchInfo.history.currentLocation },
  { label: 'Initial Members', value: `${churchInfo.history.initialMembers} members` },
  { label: 'Today', value: `${churchInfo.history.currentMembers} members, ${churchInfo.history.branches} branches, ${churchInfo.history.houseFellowships} fellowships` },
];

export default function About() {
  const storyParagraphs = churchInfo.history.story.split('\n\n');

  return (
    <main className={styles.page}>
      <Helmet>
        <title>About — {churchInfo.name}</title>
        <meta name="description" content={`Learn about ${churchInfo.name}: our vision, mission, history, and leadership. ${churchInfo.seo.description}`} />
        <meta property="og:title" content={`About — ${churchInfo.name}`} />
        <meta property="og:description" content={`Learn about ${churchInfo.name}: our vision, mission, history, and leadership.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/about" />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className={styles.heroDecor}>
            <circle cx="100" cy="100" r="88" strokeWidth="0.4" />
            <line x1="100" y1="12" x2="100" y2="188" strokeWidth="0.8" />
            <line x1="12" y1="100" x2="188" y2="100" strokeWidth="0.8" />
            <circle cx="100" cy="12" r="3" fill="currentColor" stroke="none" />
            <circle cx="100" cy="188" r="3" fill="currentColor" stroke="none" />
            <circle cx="12" cy="100" r="3" fill="currentColor" stroke="none" />
            <circle cx="188" cy="100" r="3" fill="currentColor" stroke="none" />
            <line x1="100" y1="28" x2="100" y2="172" strokeWidth="0.3" opacity="0.4" />
            <line x1="28" y1="100" x2="172" y2="100" strokeWidth="0.3" opacity="0.4" />
            <circle cx="100" cy="100" r="4" fill="currentColor" stroke="none" opacity="0.2" />
          </svg>
          <span className={styles.heroEyebrow}>About Us</span>
          <h1 className={styles.heroTitle}>A People Built for Significance</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.twoCol}>
            <ScrollReveal>
              <SectionHeading eyebrow="Our Vision">{churchInfo.vision}</SectionHeading>
              <p className={styles.scriptureRef}>{churchInfo.visionScriptures.join(' · ')}</p>
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
              <SectionHeading eyebrow="Our Mandate">{churchInfo.mission}</SectionHeading>
              <p className={styles.scriptureRef}>{churchInfo.mandateScripture}</p>
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
                  <div className={styles.valueIcon}>
                    {valueIcons[v.title] || null}
                  </div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.photoSection}>
        <div className={styles.photoRow}>
          <div className={styles.photoCol}>
            <img
              src="/Photos/AboutImg.jpg"
              alt="The Significant Peoples Church"
              className={styles.photoImg}
              loading="lazy"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className={styles.photoCol}>
            <div className={styles.photoContent}>
              <span className={styles.photoEyebrow}>Our Home</span>
              <h2 className={styles.photoTitle}>The City of Peace</h2>
              <p className={styles.photoText}>
                From a single room with seven members to a thriving congregation at The City of Peace,
                God has been faithful every step of the way. We gather to worship, grow, and reach the world
                with the love of Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.historySection}>
        <div className={styles.sectionInner}>
          <SectionHeading eyebrow="Our History">The Journey So Far</SectionHeading>
          <div className={styles.historyContent}>
            <div className={styles.historyStory}>
              {storyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
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
          <div className={styles.ornamentDivider}>
            <span className={styles.ornamentLine} />
            <span className={styles.ornamentDiamond} />
            <span className={styles.ornamentLine} />
          </div>
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
