import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { crusades, crusadeMap } from '../data/crusades';
import { churchInfo } from '../data/churchInfo';
import CrusadeGallery from '../components/sections/CrusadeGallery';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import styles from './Crusades.module.css';
import aboutStyles from './About.module.css';

export default function CrusadesPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id) {
    const crusade = crusadeMap[id];
    if (!crusade) return null;
    return <CrusadeGallery crusade={crusade} onBack={() => navigate('/crusades')} />;
  }

  return (
    <main className={aboutStyles.page}>
      <Helmet>
        <title>Crusades — {churchInfo.name}</title>
        <meta name="description" content={`Crusades and outreaches organised by ${churchInfo.name}: Benin Republic, Ejigbo Lagos, and Fuel Outreach in Igarra.`} />
        <meta property="og:title" content={`Crusades — ${churchInfo.name}`} />
        <meta property="og:description" content={`Crusades and outreaches organised by ${churchInfo.name}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/crusades" />
      </Helmet>

      <section className={aboutStyles.hero}>
        <div className={aboutStyles.heroInner}>
          <span className={aboutStyles.heroEyebrow}>Crusades</span>
          <h1 className={aboutStyles.heroTitle}>The Great Commission in Action</h1>
        </div>
      </section>

      <section className={aboutStyles.section}>
        <div className={aboutStyles.sectionInner}>
          <SectionHeading eyebrow="Our Outreach">Taking the Gospel to the Nations</SectionHeading>
          <div className={styles.grid}>
            {crusades.map((c, i) => (
              <ScrollReveal key={c.id} delay={i * 120}>
                <div className={styles.card}>
                  <div className={styles.cardCount}>
                    <span className={styles.countNum}>{c.images.length}</span>
                    <span className={styles.countLabel}>photos</span>
                  </div>
                  <h3 className={styles.cardName}>{c.name}</h3>
                  <button type="button" className={styles.cardBtn} onClick={() => navigate(`/crusades/${c.id}`)}>
                    View Gallery &rarr;
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
