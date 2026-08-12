import React from 'react';

function ProviderThankYouApp() {
  return (
    <>


  {/* Floating Glow Wrappers */}
  <div className="thankyou-bg-wrapper">
    <div className="thankyou-glow-blob blob-1" aria-hidden="true"></div>
    <div className="thankyou-glow-blob blob-2" aria-hidden="true"></div>
    <div className="thankyou-dots-grid" aria-hidden="true"></div>
  </div>

  {/* Page Header */}
  <header className="thankyou-header">
    <a className="thankyou-brand-link" href="/" aria-label="GRED home">
      <span className="thankyou-brand-text">GRED</span>
    </a>
  </header>

  {/* Center Card Main Section */}
  <main className="thankyou-main">
    <div className="thankyou-card">

      {/* Premium Checkmark animation */}
      <div className="checkmark-wrapper">
        <div className="checkmark-ring-glow" aria-hidden="true"></div>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{width: "100%", height: "100%"}}>
          <circle className="checkmark-circle" cx="50" cy="50" r="42" />
          <path className="checkmark-check" d="M32 50 L44 62 L68 36" />
        </svg>
      </div>

      {/* Success Details */}
      <h1 className="thankyou-title">Application Submitted Successfully</h1>
      <p className="thankyou-desc">Our team will review your provider application and contact you shortly.</p>

      {/* Back to Home Action Button */}
      <a href="/" className="home-action-btn">
        Back to Home
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: "middle"}}>
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </a>

    </div>
  </main>

  {/* Footer */}
  <footer className="thankyou-footer">
    <p>&copy; 2026 GRED. All rights reserved. Made in Kerala for a smarter future.</p>
  </footer>

    </>
  );
}

export default ProviderThankYouApp;
