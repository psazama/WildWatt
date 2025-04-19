import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import logo from './wildwatt-logo.png'; // Make sure this path matches where your image is saved

function Navigation() {
  return (
    <nav className="text-center mb-10 space-x-6">
      <Link to="/" className="text-blue-600 hover:underline">About Us</Link>
      <Link to="/site-owners" className="text-blue-600 hover:underline">For Site Owners</Link>
      <Link to="/conservationists" className="text-blue-600 hover:underline">For Conservationists</Link>
      <Link to="/best-practices" className="text-blue-600 hover:underline">Best Practices</Link>
      <Link to="/get-involved" className="text-blue-600 hover:underline">Get Involved</Link>
    </nav>
  );
}

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          WildWatt transforms solar and wind energy sites into thriving habitats for wildlife. We collaborate with clean energy developers to integrate pollinator plantings, native species, and biodiversity-friendly land management practices. Our goal is to ensure that renewable energy not only powers our future, but restores it.
        </p>
      </section>
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Biodiversity-Friendly Sites</h2>
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-xl mb-4">
          <span className="text-gray-500">[Map Placeholder]</span>
        </div>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Friendship Solar Farm – West Friendship, MD</li>
          <li>Clear View Farm – Howard County, MD</li>
          <li>Prairie Ronde Solar – Louisiana</li>
        </ul>
      </section>
    </div>
  );
}

function SiteOwnersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Information for Site Owners</h2>
      <p className="text-lg mb-4">Learn how to incorporate biodiversity into your energy project to support pollinators and local ecosystems while enhancing public support and environmental performance.</p>
    </div>
  );
}

function ConservationistsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Information for Conservationists</h2>
      <p className="text-lg mb-4">We’re building bridges between conservation groups and renewable energy providers. Here's how you can contribute expertise, data, or community engagement to support biodiversity on energy lands.</p>
    </div>
  );
}

function BestPracticesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Best Practices for Renewable Sites</h2>
      <ul className="list-disc list-inside space-y-2 text-lg mb-4">
        <li>Plant native wildflowers and grasses to support pollinators and soil health</li>
        <li>Avoid pesticides and synthetic fertilizers</li>
        <li>Create wildlife corridors or buffer zones to protect biodiversity</li>
        <li>Work with local ecologists to assess and improve habitat value</li>
        <li>Install signage to educate visitors and promote awareness</li>
      </ul>
      <p className="text-sm text-gray-600">Sources: Renewable Energy Wildlife Institute (REWI), Minnesota Habitat Friendly Solar Program</p>
    </div>
  );
}

function GetInvolvedPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
      <p className="text-lg mb-4">Submit renewable sites, connect with partners, or volunteer your time. Together we can expand WildWatt’s impact.</p>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" type="text" placeholder="Site Name / Location" />
        <textarea className="w-full p-2 border rounded" placeholder="Why is this site a good candidate for habitat creation?" rows={4} />
        <button type="submit" className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300">Submit</button>
      </form>
    </div>
  );
}

export default function WildWattApp() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 p-6">
        <header className="text-center mb-6">
          <img src={logo} alt="WildWatt Logo" className="mx-auto h-32 w-auto mb-4" />
          <h1 className="text-5xl font-bold tracking-tight mb-2">WildWatt</h1>
          <p className="text-xl italic mb-4">Energizing Ecosystems</p>
          <Navigation />
        </header>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/site-owners" element={<SiteOwnersPage />} />
          <Route path="/conservationists" element={<ConservationistsPage />} />
          <Route path="/best-practices" element={<BestPracticesPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <footer className="text-center text-sm text-gray-500 mt-16">
          &copy; {new Date().getFullYear()} WildWatt. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

