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
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Process from './pages/Process.jsx';
import DocumentGuide from './pages/DocumentGuide.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import CountryDetail from './pages/CountryDetail.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import TrackApplication from './pages/TrackApplication.jsx';
import AdminLogin from './admin/pages/Login.jsx';
import AdminDashboard from './admin/pages/Dashboard.jsx';
import AdminContacts from './admin/pages/ContactsAdmin.jsx';
import AdminCountries from './admin/pages/CountriesAdmin.jsx';
import AdminSettings from './admin/pages/SettingsAdmin.jsx';
import AdminTestimonials from './admin/pages/TestimonialsAdmin.jsx';
import AdminFaqs from './admin/pages/FaqsAdmin.jsx';
import AdminBlog from './admin/pages/BlogAdmin.jsx';
import AdminApplications from './admin/pages/ApplicationsAdmin.jsx';

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
          <Outlet />
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
      <Outlet />
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
