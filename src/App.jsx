import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Give from './pages/Give';
import Contact from './pages/Contact';
import Live from './pages/Live';
import Crusades from './pages/Crusades';
import EaglesGallery from './pages/EaglesGallery';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';
import CookieBanner from './components/ui/CookieBanner';
import BackToTop from './components/ui/BackToTop';
import ErrorBoundary from './components/ui/ErrorBoundary';

function skipToContent(e) {
  e.preventDefault();
  const main = document.querySelector('main');
  if (main) {
    main.setAttribute('tabindex', '-1');
    main.focus({ preventScroll: true });
    main.scrollIntoView();
  }
}

export default function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <a href="#main-content" className="skipLink" onClick={skipToContent}>
          Skip to main content
        </a>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/live" element={<Live />} />
          <Route path="/crusades" element={<Crusades />} />
          <Route path="/crusades/:id" element={<Crusades />} />
          <Route path="/events/eagles-of-destiny/gallery" element={<EaglesGallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CookieBanner />
        <BackToTop />
      </ErrorBoundary>
    </BrowserRouter>
  );
}
