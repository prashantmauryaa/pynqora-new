import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        {/* Top CTA band */}
        <div className="footer__cta-band">
          <div className="footer__cta-content">
            <h3 className="footer__cta-title">Have a project in mind?</h3>
            <p className="footer__cta-desc">
              We'd love to hear about it. Tell us what you're building.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Get in touch
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Main footer grid */}
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-text">Pynqora</span>
            </Link>
            <p className="footer__tagline">
              Engineering intelligent software for modern businesses. Built for scale, designed for performance.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__list">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/work" className="footer__link">Our Work</Link></li>
              <li><Link to="/insights" className="footer__link">Insights</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__list">
              <li><Link to="/services" className="footer__link">AI & ML</Link></li>
              <li><Link to="/services" className="footer__link">Front-End</Link></li>
              <li><Link to="/services" className="footer__link">Back-End</Link></li>
              <li><Link to="/services" className="footer__link">Automation</Link></li>
              <li><Link to="/services" className="footer__link">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer__col">
            <h4 className="footer__col-title">Connect</h4>
            <ul className="footer__list">
              <li><Link to="/contact" className="footer__link">Contact Us</Link></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__link">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a></li>
            </ul>
          </div>

          {/* Location & Legal */}
          <div className="footer__col">
            <h4 className="footer__col-title">Headquarters</h4>
            <address className="footer__list" style={{ fontStyle: 'normal', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', lineHeight: '1.6' }}>
              101 Innovation Drive<br />
              Tech District, SF 94107<br />
              <a href="mailto:hello@pynqora.com" className="footer__link" style={{ display: 'block', marginTop: '0.5rem' }}>hello@pynqora.com</a>
            </address>
            <h4 className="footer__col-title" style={{ marginTop: '2rem' }}>Legal</h4>
            <ul className="footer__list">
              <li><span className="footer__link" style={{ cursor: 'pointer' }}>Privacy Policy</span></li>
              <li><span className="footer__link" style={{ cursor: 'pointer' }}>Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copyright">
            &copy; {currentYear} Pynqora Solutions. All rights reserved.
          </span>
          <span className="footer__built">
            Engineered with precision.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
