import React from 'react';

function ProviderApp() {
  return (
    <>


  {/* Floating Glow Background Blobs */}
  <div className="provider-bg-wrapper">
    <div className="provider-glow-blob blob-1" aria-hidden="true"></div>
    <div className="provider-glow-blob blob-2" aria-hidden="true"></div>
    <div className="provider-dots-grid" aria-hidden="true"></div>
  </div>

  {/* Page Header Nav */}
  <header className="provider-header">
    <a className="provider-brand-link" href="/" aria-label="GRED home">
      <span className="provider-brand-text">GRED</span>
    </a>
    <a href="/" className="back-home-btn">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: "middle"}}>
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Back to Home
    </a>
  </header>

  {/* Split Grid Container */}
  <main className="provider-main-container">

    {/* LEFT SIDE: Text and Trust Indicators */}
    <section className="provider-left-hero" aria-label="GRED partner advantages">
      <span className="provider-tag">Become a Service Partner</span>
      <h1 className="provider-hero-title">Become a <span>Service Partner</span></h1>
      <p className="provider-hero-desc">
        Join GRED’s trusted provider network and connect your company with customers across Kerala. Access endless local demand, organize bookings seamlessly, and scale your service revenue.
      </p>

      {/* Trust Badges List */}
      <div className="provider-trust-grid">
        <div className="provider-trust-card">
          <div className="provider-trust-icon" aria-hidden="true">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div className="provider-trust-text">
            <h3 className="provider-trust-heading">100% Pre-Verified Jobs</h3>
            <p className="provider-trust-desc">All user requests are pre-screened with confirmed addresses and details before dispatch.</p>
          </div>
        </div>

        <div className="provider-trust-card">
          <div className="provider-trust-icon" aria-hidden="true">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div className="provider-trust-text">
            <h3 className="provider-trust-heading">Direct & Secure Payouts</h3>
            <p className="provider-trust-desc">Receive clear, hassle-free automated deposits directly into your bank account with complete transparency.</p>
          </div>
        </div>

        <div className="provider-trust-card">
          <div className="provider-trust-icon" aria-hidden="true">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div className="provider-trust-text">
            <h3 className="provider-trust-heading">Flexible Operational Hours</h3>
            <p className="provider-trust-desc">You hold the wheel. Choose exactly when your crews are active and take jobs on your schedule.</p>
          </div>
        </div>
      </div>

      {/* Vector SVG Service Partner Illustration */}
      <svg className="provider-illustration" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="illamber" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FFB200" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="illgray" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        {/* Isometric Base Grid */}
        <path d="M50 250 L250 150 L450 250 L250 350 Z" fill="rgba(247,166,0,0.04)" stroke="rgba(247,166,0,0.15)" strokeWidth="2" />
        <path d="M100 225 L250 150 L400 225" stroke="rgba(247,166,0,0.1)" strokeWidth="1" />
        <path d="M100 275 L250 350 L400 275" stroke="rgba(247,166,0,0.1)" strokeWidth="1" />

        {/* Smart Hub Nodes */}
        <circle cx="250" cy="150" r="10" fill="url(#illamber)" />
        <circle cx="250" cy="150" r="22" stroke="#FFB200" strokeWidth="2" opacity="0.4" strokeDasharray="4 4" />
        <circle cx="250" cy="350" r="8" fill="url(#illamber)" />
        <circle cx="50" cy="250" r="6" fill="#ea580c" />
        <circle cx="450" cy="250" r="6" fill="#ea580c" />

        {/* Routing Vectors (Active path lines) */}
        <path d="M50 250 L250 150 M450 250 L250 150 M250 350 L250 150" stroke="url(#illamber)" strokeWidth="3" strokeLinecap="round" />

        {/* Floating Isometric Application Dashboard */}
        <g transform="translate(140, 170)">
          {/* Glass Card Behind */}
          <path d="M10 50 L110 0 L210 50 L110 100 Z" fill="rgba(255,255,255,0.82)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
          <path d="M10 55 L110 5 L210 55 L110 105 Z" fill="rgba(247,166,0,0.06)" />

          {/* Micro UI details */}
          <path d="M40 45 L110 10 M110 10 L180 45" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 65 L110 35 M110 35 L170 65" stroke="url(#illamber)" strokeWidth="4" strokeLinecap="round" />

          {/* Floating Smart Service Tokens */}
          <circle cx="110" cy="10" r="12" fill="#10b981" />
          <path d="M105 10 L108 13 L115 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          {/* Animated Scooter Spark */}
          <circle cx="80" cy="40" r="5" fill="#FFB200" />
          <circle cx="140" cy="50" r="5" fill="#ea580c" />
        </g>
      </svg>
    </section>

    {/* RIGHT SIDE: Application Form Card */}
    <section className="provider-right-form" aria-label="GRED partner registration form">
      <div className="provider-form-card">
        <h2 className="provider-form-title">Partner Application Form</h2>

        <form className="provider-form" action="https://api.web3forms.com/submit" method="POST">

          {/* Hidden inputs for Web3Forms */}
          <input type="hidden" name="access_key" value="88ebc932-5173-4c09-a4b0-f37e152723a0" />
          <input type="checkbox" name="botcheck" style={{display: "none"}} />
          <input type="hidden" name="_subject" value="New Provider Application - GRED" />
          <input type="hidden" name="redirect" value="provider-thankyou.html" />

          {/* Form Fields Grid Row */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="full-name">Full Name *</label>
              <input className="form-input" type="text" id="full-name" name="Full Name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone-number">Phone Number *</label>
              <input className="form-input" type="tel" id="phone-number" name="Phone Number" placeholder="+91 98XXXXXXXX" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address *</label>
              <input className="form-input" type="email" id="email" name="Email Address" placeholder="yourcompany@gmail.com" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="company-name">Company Name *</label>
              <input className="form-input" type="text" id="company-name" name="Company Name" placeholder="ABC Facility Services" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="company-location">Company Location *</label>
              <input className="form-input" type="text" id="company-location" name="Company Location" placeholder="Kakkanad, Kochi" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="services-provided">Services Provided *</label>
              <input className="form-input" type="text" id="services-provided" name="Services Provided" placeholder="Cleaning, Plumbing, Electrical" required />
            </div>
          </div>

          <div className="form-group full-width">
            <label className="form-label" htmlFor="message">Message / Additional Details</label>
            <textarea className="form-textarea" id="message" name="Message" placeholder="Tell us about your company and services"></textarea>
          </div>

          {/* Premium Submit Button */}
          <button className="submit-btn" type="submit">
            Submit Application
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </form>
      </div>
    </section>

  </main>

  {/* Footer */}
  <footer className="provider-footer">
    <p>&copy; 2026 GRED. All rights reserved. Made in Kerala for a smarter future.</p>
  </footer>

    </>
  );
}

export default ProviderApp;
