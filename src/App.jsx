import { lazy, Suspense } from 'react';
import {
  Routes, Route, Outlet, useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import MobileTabBar from './components/MobileTabBar.jsx';
import WhatsappFloatButton from './components/WhatsappFloatButton.jsx';
import { SiteDataProvider, useSiteData } from './context/SiteDataContext.jsx';
import { AdminAuthProvider } from './admin/AdminAuthContext.jsx';
import RequireAdminAuth from './admin/RequireAdminAuth.jsx';
import AdminLayout from './admin/AdminLayout.jsx';

// Rota bazlı code-splitting: her sayfa ayrı bir chunk olarak yalnızca o rota
// ziyaret edildiğinde indirilir — tek büyük JS paketi yerine ilk yükleme
// süresini kısaltır.
const Home = lazy(() => import('./pages/Home.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Process = lazy(() => import('./pages/Process.jsx'));
const DocumentGuide = lazy(() => import('./pages/DocumentGuide.jsx'));
const FAQ = lazy(() => import('./pages/FAQ.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const CountryDetail = lazy(() => import('./pages/CountryDetail.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
const TrackApplication = lazy(() => import('./pages/TrackApplication.jsx'));
const AdminLogin = lazy(() => import('./admin/pages/Login.jsx'));
const AdminDashboard = lazy(() => import('./admin/pages/Dashboard.jsx'));
const AdminContacts = lazy(() => import('./admin/pages/ContactsAdmin.jsx'));
const AdminCountries = lazy(() => import('./admin/pages/CountriesAdmin.jsx'));
const AdminSettings = lazy(() => import('./admin/pages/SettingsAdmin.jsx'));
const AdminTestimonials = lazy(() => import('./admin/pages/TestimonialsAdmin.jsx'));
const AdminFaqs = lazy(() => import('./admin/pages/FaqsAdmin.jsx'));
const AdminBlog = lazy(() => import('./admin/pages/BlogAdmin.jsx'));
const AdminApplications = lazy(() => import('./admin/pages/ApplicationsAdmin.jsx'));

function PublicLayoutInner() {
  const location = useLocation();
  const { loading, error } = useSiteData();

  if (loading) {
    return <div className="admin-loading">Yükleniyor…</div>;
  }

  if (error) {
    return <div className="admin-loading">Bir şeyler ters gitti. Lütfen sayfayı yenileyin.</div>;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <div key={location.pathname} className="page-transition">
          <Suspense fallback={<div className="admin-loading">Yükleniyor…</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
      <BackToTop />
      <MobileTabBar />
      <WhatsappFloatButton />
    </>
  );
}

function PublicLayout() {
  return (
    <SiteDataProvider>
      <PublicLayoutInner />
    </SiteDataProvider>
  );
}

function AdminRoot() {
  return (
    <AdminAuthProvider>
      <Suspense fallback={<div className="admin-loading">Yükleniyor…</div>}>
        <Outlet />
      </Suspense>
    </AdminAuthProvider>
  );
}

function AdminProtectedLayout() {
  return (
    <RequireAdminAuth>
      <AdminLayout />
    </RequireAdminAuth>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/ulkeler/:countryId" element={<CountryDetail />} />
        <Route path="/surec" element={<Process />} />
        <Route path="/evrak-rehberi" element={<DocumentGuide />} />
        <Route path="/sss" element={<FAQ />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/takip" element={<TrackApplication />} />
      </Route>

      <Route path="/admin" element={<AdminRoot />}>
        <Route path="login" element={<AdminLogin />} />
        <Route element={<AdminProtectedLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="applications" element={<AdminApplications />} />
          <Route path="countries" element={<AdminCountries />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="faqs" element={<AdminFaqs />} />
          <Route path="testimonials" element={<AdminTestimonials />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Route>
    </Routes>
  );
}
