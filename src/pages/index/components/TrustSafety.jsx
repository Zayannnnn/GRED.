import React from 'react';

function TrustSafety() {
  return (
    <>
{/* 6. TRUST & SAFETY SECTION */}
    <section id="trust-safety" className="section-padding scroll-reveal">
      <h2 className="section-title">Trust & Safety</h2>
      <p className="section-subtitle">We understand home entry requires robust standards. GRED protects your household with
        strict safeguards.</p>

      <div className="trust-grid">
        {/* Badge 1: Verified companies */}
        <div className="trust-badge-card glass-panel" id="card-trust-verification">
          <div className="trust-badge-icon" aria-hidden="true">
            <svg className="trust-badge-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "40px", height: "40px"}}>
              <defs>
                <linearGradient id="trust-vetted-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB200" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="trust-vetted-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="20" fill="url(#trust-vetted-grad)" opacity="0.12" />
              <circle className="trust-anim-rotate" cx="24" cy="24" r="17" stroke="url(#trust-vetted-grad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
              <path d="M24 8l11 4v10c0 6.5-5 11.5-11 13-6-1.5-11-6.5-11-13V12l11-4z" fill="url(#trust-vetted-shield-grad)" stroke="url(#trust-vetted-grad)" strokeWidth="1.8" strokeLinejoin="round" />
              <circle className="trust-anim-pulse-dot" cx="24" cy="22" r="6" fill="url(#trust-vetted-grad)" />
              <path className="trust-anim-check" d="M21.5 22l1.5 1.5 3-3" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="13" cy="18" r="1.5" fill="#FFB200" />
              <circle cx="35" cy="26" r="2" fill="#ea580c" />
            </svg>
          </div>
          <h3 className="trust-badge-title">Verified Companies</h3>
          <p className="trust-badge-desc">Every business provider passes detailed background screening and compliance
            audits.</p>
        </div>

        {/* Badge 2: Secure booking */}
        <div className="trust-badge-card glass-panel" id="card-trust-booking">
          <div className="trust-badge-icon" aria-hidden="true">
            <svg className="trust-badge-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "40px", height: "40px"}}>
              <defs>
                <linearGradient id="trust-lock-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB200" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="trust-ticket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0.45" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="20" fill="url(#trust-lock-grad)" opacity="0.12" />
              <rect className="trust-anim-ticket" x="12" y="16" width="24" height="18" rx="3" fill="url(#trust-ticket-grad)" stroke="url(#trust-lock-grad)" strokeWidth="1.5" opacity="0.8" />
              <line x1="16" y1="22" x2="22" y2="22" stroke="url(#trust-lock-grad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <line x1="16" y1="27" x2="26" y2="27" stroke="url(#trust-lock-grad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path className="trust-anim-shackle" d="M20 20v-4a4 4 0 0 1 8 0v4" stroke="url(#trust-lock-grad)" strokeWidth="2.2" strokeLinecap="round" />
              <rect className="trust-anim-lockbody" x="18" y="20" width="12" height="10" rx="2" fill="url(#trust-lock-grad)" />
              <circle cx="24" cy="25" r="1" fill="#ffffff" />
              <circle cx="36" cy="14" r="1.5" fill="#FFB200" />
            </svg>
          </div>
          <h3 className="trust-badge-title">Secure Booking</h3>
          <p className="trust-badge-desc">All communication and scheduling details are securely encrypted to secure customer
            privacy.</p>
        </div>

        {/* Badge 3: Customer support */}
        <div className="trust-badge-card glass-panel" id="card-trust-support">
          <div className="trust-badge-icon" aria-hidden="true">
            <svg className="trust-badge-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "40px", height: "40px"}}>
              <defs>
                <linearGradient id="trust-support-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB200" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="trust-bubble-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="20" fill="url(#trust-support-grad)" opacity="0.12" />
              <circle className="trust-anim-support-radar" cx="24" cy="24" r="16" stroke="url(#trust-support-grad)" strokeWidth="1" opacity="0.3" />
              <circle className="trust-anim-support-radar2" cx="24" cy="24" r="12" stroke="url(#trust-support-grad)" strokeWidth="1.2" opacity="0.2" />
              <path d="M12 26V20a12 12 0 0 1 24 0v6" stroke="url(#trust-support-grad)" strokeWidth="2.2" strokeLinecap="round" />
              <rect className="trust-anim-headset-left" x="9" y="22" width="5" height="8" rx="2.5" fill="url(#trust-support-grad)" />
              <rect className="trust-anim-headset-right" x="34" y="22" width="5" height="8" rx="2.5" fill="url(#trust-support-grad)" />
              <path className="trust-anim-bubble" d="M22 10h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-8l-4 4v-4h-3a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3z" fill="url(#trust-bubble-grad)" stroke="url(#trust-support-grad)" strokeWidth="1.2" />
              <circle className="trust-anim-pulse-dot" cx="28" cy="16" r="2" fill="#ea580c" />
              <circle cx="32" cy="16" r="1" fill="#FFB200" />
            </svg>
          </div>
          <h3 className="trust-badge-title">Customer Support</h3>
          <p className="trust-badge-desc">Our fast-response help desk operates 24/7, resolving scheduling queries and client
            tickets instantly.</p>
        </div>

        {/* Badge 4: Quality assurance */}
        <div className="trust-badge-card glass-panel" id="card-trust-warranty">
          <div className="trust-badge-icon" aria-hidden="true">
            <svg className="trust-badge-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: "40px", height: "40px"}}>
              <defs>
                <linearGradient id="trust-warranty-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB200" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="trust-medal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="20" fill="url(#trust-warranty-grad)" opacity="0.12" />
              <path className="trust-anim-ribbon-left" d="M19 22l-3 17 4-2 4 2-2-12.5" fill="url(#trust-warranty-grad)" opacity="0.75" />
              <path className="trust-anim-ribbon-right" d="M29 22l3 17-4-2-4 2 2-12.5" fill="url(#trust-warranty-grad)" />
              <circle className="trust-anim-medal" cx="24" cy="20" r="11" fill="url(#trust-medal-grad)" stroke="url(#trust-warranty-grad)" strokeWidth="1.8" />
              <path className="trust-anim-star-one" d="M24 13.5l1 2.2h2.4l-1.9 1.4.7 2.2-1.9-1.4-1.9 1.4.7-2.2-1.9-1.4h2.4z" fill="url(#trust-warranty-grad)" />
              <circle cx="13" cy="30" r="1.5" fill="#FFB200" />
            </svg>
          </div>
          <h3 className="trust-badge-title">Quality Assurance</h3>
          <p className="trust-badge-desc">Every single service booking is fully backed by our satisfaction warranty
            protection.</p>
        </div>
      </div>
    </section>


    </>
  );
}

export default React.memo(TrustSafety);
