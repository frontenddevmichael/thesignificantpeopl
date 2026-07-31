import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import AboutIntro from '../components/sections/AboutIntro';
import MeasuredStats from '../components/sections/MeasuredStats';
import ScriptureBlock from '../components/sections/ScriptureBlock';
import MissionMosaic from '../components/sections/MissionMosaic';
import MinistryFloorPlan from '../components/sections/MinistryFloorPlan';
import LeadershipProfile from '../components/sections/LeadershipProfile';
import EventDetailCard from '../components/sections/EventDetailCard';
import CongressHighlight from '../components/sections/CongressHighlight';
import Gallery from '../components/sections/Gallery';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import FinalCta from '../components/sections/FinalCta';
import { leadership } from '../data/leadership';
import { ministries } from '../data/ministries';
import { events } from '../data/events';
import { testimonials } from '../data/testimonials';
import { galleryImages } from '../data/gallery';
import { churchInfo } from '../data/churchInfo';

const CANONICAL_URL = 'https://thesignificantpeopleschurch.org/';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: churchInfo.name,
    alternateName: churchInfo.history.currentName,
    slogan: churchInfo.slogan,
    url: CANONICAL_URL,
    foundingDate: '2007',
    founder: {
      '@type': 'Person',
      name: churchInfo.history.founders,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'The City of Peace, Long Farm Road, Off Auchi-Ibillo Express Road',
      addressLocality: 'Igarra, Akoko-Edo',
      addressRegion: 'Edo State',
      addressCountry: 'NG',
    },
    telephone: churchInfo.contact.phones[0],
    email: churchInfo.contact.email,
    openingHours: ['Su 07:00-11:00', 'We 17:00-18:00'],
    sameAs: [
      churchInfo.social.facebook[0],
      churchInfo.social.instagram,
      churchInfo.social.youtube,
      churchInfo.social.tiktok,
    ],
  };

  return (
    <main>
      <Helmet>
        <title>{churchInfo.seo.title}</title>
        <meta name="description" content={churchInfo.seo.description} />
        <meta name="keywords" content={churchInfo.seo.keywords} />
        <meta property="og:title" content={churchInfo.seo.title} />
        <meta property="og:description" content={churchInfo.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta name="twitter:title" content={churchInfo.seo.title} />
        <meta name="twitter:description" content={churchInfo.seo.description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Hero />
      <AboutIntro />
      <MeasuredStats />
      <ScriptureBlock
        text="I will build my church, and the gates of Hades shall not prevail against it."
        citation="Matthew 16:18"
      />
      <MissionMosaic />
      <MinistryFloorPlan ministries={ministries} />
      <LeadershipProfile profiles={[leadership[0], leadership[1]]} />
      <EventDetailCard events={events} />
      <CongressHighlight />
      <Gallery images={galleryImages} />
      <TestimonialCarousel testimonials={testimonials} />
      <FinalCta />
    </main>
  );
}
