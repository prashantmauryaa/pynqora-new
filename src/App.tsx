import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';

// New Architecture Pages
import Work from './pages/Work';
import Labs from './pages/Labs';
import Products from './pages/Products';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Manifesto from './pages/Manifesto';

// Scroll Restoration Utility
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Navbar />
      
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/work" element={<Work />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/manifesto" element={<Manifesto />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
