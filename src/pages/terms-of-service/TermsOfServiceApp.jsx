import React from 'react';

function TermsOfServiceApp() {
  return (
    <>


  {/* Floating Glow Background Blobs */}
  <div className="policy-bg-wrapper">
    <div className="policy-glow-blob blob-1" aria-hidden="true"></div>
    <div className="policy-glow-blob blob-2" aria-hidden="true"></div>
    <div className="policy-dots-grid" aria-hidden="true"></div>
  </div>

  {/* Page Header Nav */}
  <header className="policy-header">
    <a className="policy-brand-link" href="/" aria-label="GRED home">
      <span className="policy-brand-text">GRED</span>
    </a>
    <a href="/" className="back-home-btn">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: "middle"}}>
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Back to Home
    </a>
  </header>

  {/* Hero Section */}
  <section className="policy-hero">
    <span className="policy-tag">Agreement &amp; Compliance</span>
    <h1 className="policy-hero-title">Terms &amp; <span>Conditions</span></h1>
    <p className="policy-hero-desc">
      By accessing GRED, you agree to comply with our platform policies. Please read these terms carefully before booking or providing services.
    </p>

    {/* Agreement / Contract / Compliance SVG Illustration */}
    <svg className="policy-illustration" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="glowGrad" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFB200" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="docGlass" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {/* Base Grid */}
      <path d="M40 200 L200 120 L360 200 L200 280 Z" fill="rgba(247,166,0,0.03)" stroke="rgba(247,166,0,0.12)" strokeWidth="1.5" />
      <path d="M120 160 L200 120 L280 160" stroke="rgba(247,166,0,0.08)" strokeWidth="1" />
      <path d="M120 240 L200 280 L280 240" stroke="rgba(247,166,0,0.08)" strokeWidth="1" />

      {/* Central Agreement Circle */}
      <circle cx="200" cy="200" r="45" fill="rgba(247, 166, 0, 0.05)" stroke="rgba(247, 166, 0, 0.15)" strokeWidth="1" />

      {/* Floating Isometric Document Sheet */}
      <g transform="translate(130, 90)">
        {/* Shadow Card */}
        <path d="M10 70 L90 20 L170 70 L90 120 Z" fill="rgba(247,166,0,0.05)" />
        {/* Main Glass Document */}
        <path d="M10 65 L90 15 L170 65 L90 115 Z" fill="url(#docGlass)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />

        {/* Inside document: lines representing terms */}
        <path d="M45 50 L90 25 M90 25 L135 50" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50 62 L90 40 M90 40 L130 62" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <path d="M55 75 L90 55 M90 55 L125 75" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M60 88 L90 70 M90 70 L120 88" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />

        {/* Badge seal on document */}
        <circle cx="90" cy="85" r="9" fill="url(#glowGrad)" />
        <path d="M86 85 L89 88 L94 83" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Floating verification sparks */}
      <circle cx="100" cy="150" r="4" fill="#10b981" />
      <path d="M100 150 L200 200" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
      <circle cx="300" cy="220" r="5" fill="#FFB200" />

      {/* Pen / Compliance cursor floating */}
      <g transform="translate(250, 110)">
        <path d="M5 25 L25 5 L35 15 L15 35 Z" fill="url(#glowGrad)" />
        <path d="M2 28 L5 25 L15 35 L12 38 Z" fill="#1e293b" />
        <path d="M0 30 L2 28 L12 38 L10 40 Z" fill="#ea580c" />
      </g>
    </svg>
  </section>

  {/* Legal Content Container */}
  <main className="policy-container">

    {/* Introduction Card */}
    <div className="policy-card">
      <h2>Welcome to GRED</h2>
      <p>
        Welcome to GRED. By accessing or using our application, you agree to be bound by these Terms of Service.
      </p>
      <p style={{fontSize: "0.9rem", color: "#64748b", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "10px"}}>
        Last Updated: April 28, 2026
      </p>
    </div>

    {/* Section 1 */}
    <div className="policy-card">
      <h2>1. Use of Our Services</h2>
      <p>You agree to use GRED only for lawful purposes.</p>
      <ul>
        <li>You must provide accurate information</li>
        <li>You must not misuse the platform</li>
        <li>You must not attempt to harm or disrupt the system</li>
      </ul>
    </div>

    {/* Section 2 */}
    <div className="policy-card">
      <h2>2. Service Role</h2>
      <p>
        GRED acts as a <strong>marketplace platform</strong> connecting users with third-party service providers.
      </p>
      <ul>
        <li>GRED does not directly provide services</li>
        <li>Service providers are independent companies</li>
        <li>GRED is not responsible for service quality</li>
      </ul>
    </div>

    {/* Section 3 */}
    <div className="policy-card">
      <h2>3. User Responsibilities</h2>
      <p>As a user, you agree:</p>
      <ul>
        <li>To provide correct booking details</li>
        <li>To behave respectfully with service providers</li>
        <li>Not to misuse or abuse the platform</li>
      </ul>
    </div>

    {/* Section 4 */}
    <div className="policy-card">
      <h2>4. Payments and Charges</h2>
      <ul>
        <li>Prices are set by service providers or platform standards</li>
        <li>Payments may include service fees</li>
        <li>GRED may take a commission</li>
      </ul>
    </div>

    {/* Section 5 */}
    <div className="policy-card">
      <h2>5. Cancellations and Refunds</h2>
      <ul>
        <li>Cancellation policies may vary</li>
        <li>Refunds depend on service conditions</li>
        <li>GRED may assist but does not guarantee refunds</li>
      </ul>
    </div>

    {/* Section 6 */}
    <div className="policy-card">
      <h2>6. Limitation of Liability</h2>
      <p>GRED is not liable for:</p>
      <ul>
        <li>Service delays or failures</li>
        <li>Damages caused by service providers</li>
        <li>Losses resulting from misuse of the app</li>
      </ul>
    </div>

    {/* Section 7 */}
    <div className="policy-card">
      <h2>7. Account Suspension</h2>
      <p>We reserve the right to:</p>
      <ul>
        <li>Suspend or terminate accounts</li>
        <li>Remove access for misuse or violation</li>
      </ul>
    </div>

    {/* Section 8 */}
    <div className="policy-card">
      <h2>8. Intellectual Property</h2>
      <ul>
        <li>All content, branding, and design belong to GRED</li>
        <li>Users may not copy or reproduce content</li>
      </ul>
    </div>

    {/* Section 9 */}
    <div className="policy-card">
      <h2>9. Changes to Terms</h2>
      <p>
        We may update these Terms at any time. Continued use of the app means acceptance of updated terms.
      </p>
    </div>

    {/* Section 10 */}
    <div className="policy-card">
      <h2>10. Contact Us</h2>
      <p>
        Email:
        <a className="contact-email" href="mailto:storegred@gmail.com">storegred@gmail.com</a>
      </p>
    </div>

  </main>

  {/* Replicated Homepage Footer Section */}
  <footer className="footer-section">
    <div className="footer-top">
      {/* Col 1: Brand details */}
      <div className="footer-brand">
        <h4 id="footer-logo-header">
          <img src="/logo.png?v=3" alt="GRED Logo" className="footer-brand-logo" />
          GRED
        </h4>
        <p>A premium on-demand hyperlocal marketplace bringing vetted, expert home solutions right to your doorstep.</p>
      </div>

      {/* Col 2: Services Quick Links */}
      <div className="footer-col">
        <h5>Services</h5>
        <div className="footer-links">
          <a href="/?scroll=services" id="footer-link-cleaning">Home Cleaning</a>
          <a href="/?scroll=services" id="footer-link-plumbing">Plumbing Services</a>
          <a href="/?scroll=services" id="footer-link-electrical">Electrical Repairs</a>
          <a href="/?scroll=services" id="footer-link-car">Car Service</a>
        </div>
      </div>

      {/* Col 3: Company Links */}
      <div className="footer-col">
        <h5>Company</h5>
        <div className="footer-links">
          <a href="/?scroll=about" id="footer-link-about">About Us</a>
          <a href="/?scroll=how-it-works" id="footer-link-how">How it Works</a>
          <a href="/?scroll=why-choose" id="footer-link-why">Why Choose Us</a>
          <a href="/?scroll=faq" id="footer-link-faq">Help FAQs</a>
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

    </>
  );
}

export default TermsOfServiceApp;
