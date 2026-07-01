import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/sections/ContactForm';
import PrayerRequestForm from '../components/sections/PrayerRequestForm';
import ScrollReveal from '../components/ui/ScrollReveal';
import { IconMapPin, IconPhone, IconMail, IconClock, IconWhatsApp } from '../components/ui/Icons';
import { churchInfo } from '../data/churchInfo';
import styles from './Contact.module.css';

const waNumber = churchInfo.contact.whatsapp[0].replace(/^0/, '234');
const waUrl = `https://wa.me/${waNumber}`;

export default function Contact() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Contact — {churchInfo.name}</title>
        <meta name="description" content={`Get in touch with ${churchInfo.name}. Find our location, service times, and contact information in Igarra, Edo State.`} />
        <meta property="og:title" content={`Contact — ${churchInfo.name}`} />
        <meta property="og:description" content={`Get in touch with ${churchInfo.name}. Find our location, service times, and contact information in Igarra, Edo State.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/contact" />
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
          <span className={styles.heroEyebrow}>Contact</span>
          <h1 className={styles.heroTitle}>We&rsquo;d Love to Connect</h1>
          <p className={styles.heroSub}>Whether you have a question, need prayer, or want to know more about the church, we are here for you.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <ScrollReveal>
            <SectionHeading eyebrow="Connect With Us">Come Visit, Reach Out, or Write to Us</SectionHeading>
          </ScrollReveal>

          <div className={styles.connectGrid}>
            <ScrollReveal delay={100}>
              <div className={styles.connectCard}>
                <span className={styles.decoRing} />
                <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" className={styles.connectCardDecor}>
                  <line x1="40" y1="10" x2="40" y2="70" strokeWidth="0.6" />
                  <line x1="10" y1="40" x2="70" y2="40" strokeWidth="0.6" />
                  <circle cx="40" cy="10" r="2" fill="currentColor" stroke="none" />
                  <circle cx="40" cy="70" r="2" fill="currentColor" stroke="none" />
                  <circle cx="10" cy="40" r="2" fill="currentColor" stroke="none" />
                  <circle cx="70" cy="40" r="2" fill="currentColor" stroke="none" />
                </svg>
                <p className={styles.connectCardTitle}>Visit Us</p>
                <div className={styles.connectRow}>
                  <div className={styles.connectIcon}><IconMapPin /></div>
                  <div className={styles.connectLabel}>
                    <strong>Headquarters</strong>
                    {churchInfo.contact.address}
                  </div>
                </div>
                <div className={styles.connectRow}>
                  <div className={styles.connectIcon}><IconClock /></div>
                  <div className={styles.connectLabel}>
                    <strong>Service Times</strong>
                    {churchInfo.services.map((s) => (
                      <p key={s.day + s.time} className={styles.connectTime}>
                        {s.day} &mdash; <span>{s.time}</span> &middot; {s.label}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className={styles.connectCard}>
                <span className={styles.decoRing2} />
                <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" className={styles.connectCardDecor}>
                  <line x1="40" y1="10" x2="40" y2="70" strokeWidth="0.6" />
                  <line x1="10" y1="40" x2="70" y2="40" strokeWidth="0.6" />
                  <circle cx="40" cy="10" r="2" fill="currentColor" stroke="none" />
                  <circle cx="40" cy="70" r="2" fill="currentColor" stroke="none" />
                  <circle cx="10" cy="40" r="2" fill="currentColor" stroke="none" />
                  <circle cx="70" cy="40" r="2" fill="currentColor" stroke="none" />
                </svg>
                <p className={styles.connectCardTitle}>Reach Out</p>
                <div className={styles.connectRow}>
                  <div className={styles.connectIcon}><IconPhone /></div>
                  <div className={styles.connectLabel}>
                    <strong>Phone</strong>
                    {churchInfo.contact.phones.map((p) => (
                      <span key={p} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-text-on-light-primary)', display: 'block' }}>{p}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.connectRow}>
                  <div className={styles.connectIcon}><IconMail /></div>
                  <div className={styles.connectLabel}>
                    <strong>Email</strong>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{churchInfo.contact.email}</span>
                  </div>
                </div>
                <div className={styles.whatsappRow}>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                    <IconWhatsApp /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.formSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDiamond} />
            <span className={styles.dividerLine} />
          </div>
          <div className={styles.formWrap}>
            <ScrollReveal>
              <div className={styles.formCard}>
                <span className={styles.decoRing2} />
                <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" className={styles.formCardDecor}>
                  <circle cx="30" cy="30" r="26" strokeWidth="0.4" />
                  <line x1="30" y1="6" x2="30" y2="54" strokeWidth="0.5" />
                  <line x1="6" y1="30" x2="54" y2="30" strokeWidth="0.5" />
                  <circle cx="30" cy="30" r="2" fill="currentColor" stroke="none" opacity="0.3" />
                </svg>
                <h2 className={styles.formCardTitle}>Send a Message</h2>
                <p className={styles.formCardDesc}>Write to us and we&rsquo;ll get back to you. Your message will be sent directly to our team via WhatsApp.</p>
                <ContactForm />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className={styles.formCard}>
                <span className={styles.decoRing} />
                <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" className={styles.formCardDecor}>
                  <circle cx="30" cy="30" r="26" strokeWidth="0.4" />
                  <line x1="30" y1="6" x2="30" y2="54" strokeWidth="0.5" />
                  <line x1="6" y1="30" x2="54" y2="30" strokeWidth="0.5" />
                  <circle cx="30" cy="30" r="2" fill="currentColor" stroke="none" opacity="0.3" />
                </svg>
                <h2 className={styles.formCardTitle}>Prayer Request</h2>
                <p className={styles.formCardDesc}>Share what&rsquo;s on your heart. Our prayer team will stand with you.</p>
                <PrayerRequestForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
