import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Eager load
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// Lazy load the rest for code splitting
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const MachineryPage = lazy(() => import('./pages/MachineryPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const VideosPage = lazy(() => import('./pages/VideosPage'));
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookServicePage = lazy(() => import('./pages/BookServicePage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PostersPage = lazy(() => import('./pages/PostersPage'));

// Service pages
const PaddyHarvesterPage = lazy(() => import('./pages/services/PaddyHarvesterPage'));
const TractorPage = lazy(() => import('./pages/services/TractorPage'));
const TractorRotavatorPage = lazy(() => import('./pages/services/TractorRotavatorPage'));
const JCBPage = lazy(() => import('./pages/services/JCBPage'));
const JCB3CXPage = lazy(() => import('./pages/services/JCB3CXPage'));
const MiniExcavatorPage = lazy(() => import('./pages/services/MiniExcavatorPage'));
const RoundBalerPage = lazy(() => import('./pages/services/RoundBalerPage'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fdf9]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#e8f5ec] border-t-[#1a5c2e] rounded-full animate-spin" />
        <p className="tamil text-[#4b5563] text-sm">ஏற்றுகிறோம்...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Main pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/machinery" element={<MachineryPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-service" element={<BookServicePage />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* Services */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/paddy-harvester" element={<PaddyHarvesterPage />} />
          <Route path="/services/tractor" element={<TractorPage />} />
          <Route path="/services/tractor-rotavator" element={<TractorRotavatorPage />} />
          <Route path="/services/jcb" element={<JCBPage />} />
          <Route path="/services/jcb-3cx" element={<JCB3CXPage />} />
          <Route path="/services/jcb-mini-excavator" element={<MiniExcavatorPage />} />
          <Route path="/services/tractor-round-baler" element={<RoundBalerPage />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          {/* Marketing */}
          <Route path="/posters" element={<PostersPage />} />

          {/* Legal */}
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
