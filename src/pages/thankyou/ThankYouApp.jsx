import React from 'react';

function ThankYouApp() {
  return (
    <>


  {/* Floating Glow Background */}
  <div className="success-bg-wrapper">
    <div className="success-glow-blob" aria-hidden="true"></div>
    <div className="success-dots-grid" aria-hidden="true"></div>
  </div>

  {/* Success Card Display */}
  <div className="success-container">
    <div className="success-card">
      <div className="checkmark-wrapper" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h1 className="success-title">Thank You For Your Interest In GRED</h1>
      <p className="success-desc">
        Our team has received your investor inquiry and will contact you shortly.
      </p>
      <a href="/" className="return-home-btn">
        Return to Homepage
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: "middle"}}>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  </div>

  {/* Page Footer */}
  <footer className="success-footer">
    <p>&copy; 2026 GRED. All rights reserved. Confidential Investor Relations Desk.</p>
  </footer>

    </>
  );
}

export default ThankYouApp;
