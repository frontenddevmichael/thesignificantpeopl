import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/sections/ContactForm';
import PrayerRequestForm from '../components/sections/PrayerRequestForm';
import ScrollReveal from '../components/ui/ScrollReveal';
import { IconMapPin, IconPhone, IconMail, IconClock, IconHeart } from '../components/ui/Icons';
import { churchInfo } from '../data/churchInfo';
import styles from './About.module.css';

export default function Contact() {
  return (
    <main className={styles.page}>
      <Helmet>
        <title>Contact — {churchInfo.name}</title>
        <meta name="description" content={`Get in touch with ${churchInfo.name}. Find our location, service times, and contact information in Igarra, Edo State.`} />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Contact</span>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.twoCol}>
            <ScrollReveal>
              <SectionHeading eyebrow="Connect With Us">We Would Love to Hear From You</SectionHeading>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className={styles.bodyText}>
                <p>Whether you have a question, need prayer, or want to know more about the church, we are here for you.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--spc-cream-200)' }}>
        <div className={styles.sectionInner}>
          <div className={styles.twoCol}>
            <ScrollReveal>
              <div>
                <SectionHeading eyebrow="Visit Us">Our Location</SectionHeading>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-accent)', fontSize: '1.2rem', lineHeight: 1, marginTop: '2px', flexShrink: 0 }}><IconMapPin /></div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-1)', fontWeight: 'var(--fw-medium)' }}>Headquarters</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body-md)', color: 'var(--color-text-on-light-secondary)', lineHeight: '1.7' }}>{churchInfo.contact.address}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-accent)', fontSize: '1.2rem', lineHeight: 1, marginTop: '2px', flexShrink: 0 }}><IconClock /></div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-1)', fontWeight: 'var(--fw-medium)' }}>Service Times</p>
                      {churchInfo.services.map((s) => (
                        <p key={s.day + s.time} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-on-light-primary)', marginBottom: 'var(--space-1)' }}>
                          {s.day} &mdash; {s.time} &middot; {s.label}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <SectionHeading eyebrow="Reach Us">Contact Info</SectionHeading>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-accent)', fontSize: '1.2rem', lineHeight: 1, marginTop: '2px', flexShrink: 0 }}><IconPhone /></div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-1)', fontWeight: 'var(--fw-medium)' }}>Phone / WhatsApp</p>
                      {churchInfo.contact.phones.map((p) => (
                        <span key={p} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-accent)', display: 'block' }}>{p}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-accent)', fontSize: '1.2rem', lineHeight: 1, marginTop: '2px', flexShrink: 0 }}><IconMail /></div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 'var(--space-1)', fontWeight: 'var(--fw-medium)' }}>Email</p>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)' }}>{churchInfo.contact.email}</span>
                    </div>
                  </div>
                  <div style={{ marginTop: 'var(--space-2)', display: 'flex', gap: 'var(--space-3)' }}>
                    <Button href={`https://wa.me/${churchInfo.contact.whatsapp[0].replace(/^0/, '234')}`}>WhatsApp</Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner} style={{ maxWidth: 'var(--container-narrow)' }}>
          <ScrollReveal>
            <SectionHeading eyebrow="Send a Message">Contact Form</SectionHeading>
          </ScrollReveal>
          <ContactForm />
        </div>
      </section>

      <section className={styles.section} style={{ background: 'var(--spc-cream-200)' }}>
        <div className={styles.sectionInner} style={{ maxWidth: 'var(--container-narrow)' }}>
          <ScrollReveal>
            <SectionHeading eyebrow="Prayer">Prayer Request</SectionHeading>
          </ScrollReveal>
          <PrayerRequestForm />
        </div>
      </section>
    </main>
  );
}
