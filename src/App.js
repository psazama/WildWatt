import AboutPage from './pages/AboutPage';
import ConservationistsPage from './pages/ConservationistsPage';
import SolarFarmSitesPage from './pages/SolarFarmSitesPage';
import WindFarmSitesPage from './pages/WindFarmSitesPage';
import GetInvolvedPage from './pages/GetInvolvedPage';
import ReferencesPage from './pages/ReferencesPage';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import logo from './wildwatt-logo.png';

function Navigation() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0', fontSize: '1.1rem' }}>
      <Link to="/" style={{ color: '#22543d', textDecoration: 'none' }}>About Us</Link>
      <Link to="/solar-farm-sites" style={{ color: '#22543d', textDecoration: 'none' }}>For Solar Farms</Link>
      <Link to="/conservationists" style={{ color: '#22543d', textDecoration: 'none' }}>For Conservationists</Link>
      <Link to="/get-involved" style={{ color: '#22543d', textDecoration: 'none' }}>Get Involved</Link>
       <Link to="/references" style={{ color: '#22543d', textDecoration: 'none' }}>References</Link>
    </nav>
  );
}

function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <img src={logo} alt="WildWatt" style={{ maxHeight: '300px', width: 'auto'}} />
      {/*<h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a202c', margin: '0.5rem 0' }}>WildWatt</h1>*/}
      <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#4a5568' }}>Energizing Ecosystems</p>
      <Navigation />
    </header>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ background: '#fff', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem', color: '#2f855a' }}>{title}</h2>
      {children}
    </section>
  );
}

export default function WildWattApp() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#fef7e2', color: '#1f2937', padding: '1.5rem' }}>
        <Header />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/solar-farm-sites" element={<SolarFarmSitesPage />} />
          <Route path="/wind-farm-sites" element={<WindFarmSitesPage />} />
          <Route path="/conservationists" element={<ConservationistsPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <footer style={{ textAlign: 'center', fontSize: '0.875rem', color: '#4a5568', marginTop: '4rem' }}>
          &copy; {new Date().getFullYear()} WildWatt. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

