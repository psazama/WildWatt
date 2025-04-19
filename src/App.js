
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
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

// rest of your component definitions...
