import React from 'react';

function DeleteDataApp() {
  return (
    <>


  {/* Floating Glow Background Blobs */}
  <div className="delete-bg-wrapper">
    <div className="delete-glow-blob blob-1" aria-hidden="true"></div>
    <div className="delete-glow-blob blob-2" aria-hidden="true"></div>
    <div className="delete-dots-grid" aria-hidden="true"></div>
  </div>

  {/* Page Header Nav */}
  <header className="delete-header">
    <a className="delete-brand-link" href="/" aria-label="GRED home">
      <span className="delete-brand-text">GRED</span>
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
  <main className="delete-main-container">

    {/* LEFT SIDE: Text and Trust Indicators */}
    <section className="delete-left-hero" aria-label="GRED privacy compliance information">
      <span className="delete-tag">Privacy & Compliance</span>
      <h1 className="delete-hero-title">Request Account <span>Data Deletion</span></h1>
      <p className="delete-hero-desc">
        You can request deletion of your GRED account data securely through this form. Our team will review and process your request shortly.
      </p>

      {/* Isometric Privacy & Security Illustration */}
      <svg className="delete-illustration" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="illamber" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FFB200" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="shieldGrad" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FFEAA7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFD200" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="glassShield" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {/* Isometric Base Grid */}
        <path d="M50 250 L250 150 L450 250 L250 350 Z" fill="rgba(247,166,0,0.04)" stroke="rgba(247,166,0,0.15)" strokeWidth="2" />
        <path d="M100 225 L250 150 L400 225" stroke="rgba(247,166,0,0.08)" strokeWidth="1" />
        <path d="M100 275 L250 350 L400 275" stroke="rgba(247,166,0,0.08)" strokeWidth="1" />

        {/* Smart Hub Nodes representing Databases */}
        <circle cx="250" cy="150" r="8" fill="url(#illamber)" />
        <circle cx="250" cy="150" r="18" stroke="#FFB200" strokeWidth="1.5" opacity="0.35" strokeDasharray="4 4" />
        <circle cx="100" cy="225" r="5" fill="#ea580c" />
        <circle cx="400" cy="225" r="5" fill="#ea580c" />

        {/* Active Path Lines for data flow */}
        <path d="M100 225 L250 150 M400 225 L250 150 M250 350 L250 150" stroke="url(#illamber)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

        {/* Isometric Floating Security Shield Card */}
        <g transform="translate(140, 160)">
          {/* Glass Card Behind */}
          <path d="M10 50 L110 0 L210 50 L110 100 Z" fill="url(#glassShield)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
          <path d="M10 55 L110 5 L210 55 L110 105 Z" fill="rgba(247,166,0,0.05)" />

          {/* Shield Symbol inside isometric card */}
          <path d="M110 25 C122 25 132 28 135 37 C135 60 110 75 110 78 C110 75 85 60 85 37 C88 28 98 25 110 25 Z" fill="url(#illamber)" opacity="0.9" />
          <path d="M110 32 L104 45 L116 45 Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="110" cy="58" r="4.5" fill="#ffffff" />

          {/* Animated Tech Spark Rings */}
          <circle cx="70" cy="40" r="4" fill="#FFB200" />
          <circle cx="150" cy="50" r="4" fill="#ea580c" />
          <circle cx="110" cy="85" r="5" fill="#10b981" />
          <path d="M107 85 L109.5 87.5 L113 83.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>

      {/* Trust Badges List */}
      <div className="delete-trust-grid">
        <div className="delete-trust-card">
          <div className="delete-trust-icon" aria-hidden="true">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <div className="delete-trust-text">
            <h3 className="delete-trust-heading">Secure Encryption</h3>
            <p className="delete-trust-desc">All transmission data is processed via secure HTTPS channels directly to GRED support.</p>
          </div>
        </div>

        <div className="delete-trust-card">
          <div className="delete-trust-icon" aria-hidden="true">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div className="delete-trust-text">
            <h3 className="delete-trust-heading">Play Store Compliant</h3>
            <p className="delete-trust-desc">This form complies with Google Play Store Developer Policy on account data deletion.</p>
          </div>
        </div>

        <div className="delete-trust-card">
          <div className="delete-trust-icon" aria-hidden="true">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </div>
          <div className="delete-trust-text">
            <h3 className="delete-trust-heading">Permanent Erasure</h3>
            <p className="delete-trust-desc">Upon validation, account records, profiles, and associated histories are fully purged.</p>
          </div>
        </div>
      </div>
    </section>

    {/* RIGHT SIDE: Deletion Form Card */}
    <section className="delete-right-form" aria-label="Data deletion request form">
      <div className="delete-form-card">
        <h2 className="delete-form-title">Submit Deletion Request</h2>

        {/* Modern Warning Card Banner */}
        <div className="alert-card">
          <div className="alert-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div className="alert-content">
            <h3 className="alert-title">Important Information</h3>
            <p className="alert-text">Submitting this request may permanently remove your account information and related activity from GRED systems after verification.</p>
          </div>
        </div>

        <form className="delete-form" action="https://api.web3forms.com/submit" method="POST">

          {/* Hidden inputs for Web3Forms */}
          <input type="hidden" name="access_key" value="88ebc932-5173-4c09-a4b0-f37e152723a0" />
          <input type="checkbox" name="botcheck" style={{display: "none"}} />
          <input type="hidden" name="_subject" value="New Data Deletion Request - GRED" />
          <input type="hidden" name="redirect" value="/delete-data-success" />
          {/* Form Fields */}
          <div className="form-group">
            <label className="form-label" htmlFor="full-name">Full Name *</label>
            <input className="form-input" type="text" id="full-name" name="Full Name" placeholder="e.g. Sandra Nair" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="phone-number">Phone Number *</label>
              <input className="form-input" type="tel" id="phone-number" name="Phone Number" placeholder="e.g. +91 98450 12345" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address *</label>
              <input className="form-input" type="email" id="email" name="Email Address" placeholder="e.g. sandra@example.com" required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="deletion-reason">Reason for Deletion *</label>
            <select className="form-select" id="deletion-reason" name="Reason for Deletion" required>
              <option value="" disabled selected>Select a reason...</option>
              <option value="Privacy Concerns">Privacy Concerns</option>
              <option value="No Longer Using GRED">No Longer Using GRED</option>
              <option value="Duplicate Account">Duplicate Account</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="additional-notes">Additional Notes</label>
            <textarea className="form-textarea" id="additional-notes" name="Additional Notes" placeholder="Detail any specific comments or feedback regarding your data deletion request..."></textarea>
          </div>

          {/* Premium Submit Button */}
          <button className="delete-submit-btn" type="submit">
            Submit Request
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
  <footer className="delete-footer">
    <p>&copy; 2026 GRED. All rights reserved. Made in Kerala for a smarter future.</p>
  </footer>

    </>
  );
}

export default DeleteDataApp;
