import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import AboutIntro from '../components/sections/AboutIntro';
import MeasuredStats from '../components/sections/MeasuredStats';
import ScriptureBlock from '../components/sections/ScriptureBlock';
import MissionMosaic from '../components/sections/MissionMosaic';
import MinistryFloorPlan from '../components/sections/MinistryFloorPlan';
import LeadershipProfile from '../components/sections/LeadershipProfile';
import EventDetailCard from '../components/sections/EventDetailCard';
import Gallery from '../components/sections/Gallery';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import FinalCta from '../components/sections/FinalCta';
import { leadership } from '../data/leadership';
import { ministries } from '../data/ministries';
import { events } from '../data/events';
import { testimonials } from '../data/testimonials';
import { galleryImages } from '../data/gallery';
import { churchInfo } from '../data/churchInfo';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>{churchInfo.seo.title}</title>
        <meta name="description" content={churchInfo.seo.description} />
        <meta name="keywords" content={churchInfo.seo.keywords} />
        <meta property="og:title" content={churchInfo.seo.title} />
        <meta property="og:description" content={churchInfo.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta name="twitter:title" content={churchInfo.seo.title} />
        <meta name="twitter:description" content={churchInfo.seo.description} />
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
      <Gallery images={galleryImages} />
      <TestimonialCarousel testimonials={testimonials} />
      <FinalCta />
    </main>
  );
}
