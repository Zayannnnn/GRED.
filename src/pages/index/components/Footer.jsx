import React from 'react';
import { handleNavLinkClick } from '../../../utils/scroll.js';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        {/* Col 1: Brand details */}
        <div className="footer-brand">
          <h4 id="footer-logo-header">
            <img src="/logo.png" alt="GRED Logo" className="footer-brand-logo" />
            GRED
          </h4>
          <p>A premium on-demand hyperlocal marketplace bringing vetted, expert home solutions right to your doorstep.</p>
        </div>

        {/* Col 2: Services Quick Links */}
        <div className="footer-col">
          <h5>Services</h5>
          <div className="footer-links">
            <a href="/?scroll=services" onClick={(e) => handleNavLinkClick(e, 'services')} data-scroll-target="services" id="footer-link-cleaning">Home Cleaning</a>
            <a href="/?scroll=services" onClick={(e) => handleNavLinkClick(e, 'services')} data-scroll-target="services" id="footer-link-plumbing">Plumbing Services</a>
            <a href="/?scroll=services" onClick={(e) => handleNavLinkClick(e, 'services')} data-scroll-target="services" id="footer-link-electrical">Electrical Repairs</a>
            <a href="/?scroll=services" onClick={(e) => handleNavLinkClick(e, 'services')} data-scroll-target="services" id="footer-link-car">Car Service</a>
          </div>
        </div>

        {/* Col 3: Company Links */}
        <div className="footer-col">
          <h5>Company</h5>
          <div className="footer-links">
            <a href="/?scroll=about" onClick={(e) => handleNavLinkClick(e, 'about')} data-scroll-target="about" id="footer-link-about">About Us</a>
            <a href="/?scroll=how-it-works" onClick={(e) => handleNavLinkClick(e, 'how-it-works')} data-scroll-target="how-it-works" id="footer-link-how">How it Works</a>
            <a href="/?scroll=why-choose" onClick={(e) => handleNavLinkClick(e, 'why-choose')} data-scroll-target="why-choose" id="footer-link-why">Why Choose Us</a>
            <a href="/?scroll=faq" onClick={(e) => handleNavLinkClick(e, 'faq')} data-scroll-target="faq" id="footer-link-faq">Help FAQs</a>
          </div>
        </div>

        {/* Col 4: Connect With GRED */}
        <div className="footer-col footer-connect">
          <h5>Connect With GRED</h5>
          <p>Follow GRED across our social platforms and stay connected with our latest updates and services.</p>
          <div className="social-links-container">
            <a href="https://www.instagram.com/gred.now/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://x.com/Gred_now" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/gredstore/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:storegred@gmail.com" className="social-icon-link" aria-label="Gmail">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1BVx62pvSJ/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p id="copyright-text">&copy; 2026 GRED. All rights reserved. Vetted partners on active warranty schedules.</p>
        <div className="footer-bottom-links">
          <a href="/terms-of-service" id="footer-link-tos">Terms of Service</a>
          <a href="/privacy-policy" id="footer-link-privacy">Privacy Policy</a>
          <a href="/delete-data" id="footer-link-delete-data">Delete Account Data</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
