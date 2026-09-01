import React from 'react';

function WhyChoose() {
  return (
    <>
{/* 4. WHY CHOOSE GRED */}
    <section id="why-choose" className="section-padding scroll-reveal">
      <h2 className="section-title">Why Choose GRED</h2>
      <p className="section-subtitle">We focus on elite standards and engineering solutions to secure total peace of mind.
      </p>

      <div className="features-grid">
        {/* Feature 1: Verified Providers */}
        <div className="feature-card glass-panel" id="card-feature-vetted">
          <div className="feature-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="feature-svg-illustration">
              <defs>
                <linearGradient id="vetted-grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB200" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="vetted-grad-shield" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0.3" />
                </linearGradient>
                <filter id="vetted-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#FFB200" flood-opacity="0.4" />
                </filter>
              </defs>
              <circle cx="24" cy="24" r="20" fill="url(#vetted-grad-bg)" filter="url(#vetted-glow)" opacity="0.15" />
              <circle cx="24" cy="24" r="16" stroke="url(#vetted-grad-bg)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
              <path d="M24 6l14 5v11c0 8.5-6.5 14-14 16-7.5-2-14-7.5-14-16V11l14-5z" fill="url(#vetted-grad-shield)" stroke="url(#vetted-grad-bg)" strokeWidth="1.8" strokeLinejoin="round" />
              <circle cx="24" cy="22" r="7" fill="url(#vetted-grad-bg)" />
              <path d="M21 22l2 2 3.5-3.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="16" r="1.5" fill="#FFB200" />
              <circle cx="36" cy="28" r="2" fill="#ea580c" />
            </svg>
          </div>
          <h3 className="feature-title">Verified Providers</h3>
          <p className="feature-desc">All partner companies undergo rigorous background validations and quality testing
            before their first booking.</p>
        </div>

        {/* Feature 2: Fast Booking */}
        <div className="feature-card glass-panel" id="card-feature-speed">
          <div className="feature-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="feature-svg-illustration">
              <defs>
                <linearGradient id="speed-grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB200" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="speed-grad-bolt" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0.4" />
                </linearGradient>
                <filter id="speed-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#ea580c" flood-opacity="0.4" />
                </filter>
              </defs>
              <circle cx="24" cy="24" r="20" fill="url(#speed-grad-bg)" filter="url(#speed-glow)" opacity="0.15" />
              <line x1="8" y1="20" x2="16" y2="20" stroke="url(#speed-grad-bg)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              <line x1="6" y1="26" x2="12" y2="26" stroke="url(#speed-grad-bg)" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
              <line x1="10" y1="32" x2="18" y2="32" stroke="url(#speed-grad-bg)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              <path d="M29 6L15 25h11l-3 17 14-19H26L29 6z" fill="url(#speed-grad-bg)" />
              <path d="M27 8L17 23h11l-3 13 10-15H24l3-13z" fill="url(#speed-grad-bolt)" stroke="#ffffff" strokeWidth="1" />
              <circle cx="38" cy="14" r="2" fill="#FFB200" />
              <circle cx="34" cy="36" r="1.5" fill="#ea580c" />
            </svg>
          </div>
          <h3 className="feature-title">Fast Booking</h3>
          <p className="feature-desc">Our intelligent hyperlocal dispatcher connects you to local pros within seconds. No
            endless calls needed.</p>
        </div>

        {/* Feature 3: Affordable Pricing */}
        <div className="feature-card glass-panel" id="card-feature-pricing">
          <div className="feature-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="feature-svg-illustration">
              <defs>
                <linearGradient id="pricing-grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB200" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="pricing-grad-card" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0.25" />
                </linearGradient>
                <filter id="pricing-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#FFB200" flood-opacity="0.4" />
                </filter>
              </defs>
              <circle cx="24" cy="24" r="20" fill="url(#pricing-grad-bg)" filter="url(#pricing-glow)" opacity="0.15" />
              <rect x="32" y="16" width="4" height="18" rx="2" fill="url(#pricing-grad-bg)" />
              <rect x="38" y="22" width="4" height="12" rx="2" fill="url(#pricing-grad-bg)" opacity="0.6" />
              <rect x="8" y="12" width="22" height="24" rx="6" fill="url(#pricing-grad-card)" stroke="url(#pricing-grad-bg)" strokeWidth="1.8" />
              <circle cx="13" cy="17" r="2" fill="url(#pricing-grad-bg)" />
              <path d="M19 19c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5c0 1.5-1 2.5-2.5 2.5s-2.5 1-2.5 2.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5M21.5 15v16" stroke="url(#pricing-grad-bg)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M26 12l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="#FFB200" />
            </svg>
          </div>
          <h3 className="feature-title">Affordable Pricing</h3>
          <p className="feature-desc">Zero hidden charges. Get transparent, comprehensive flat-rate estimates prior to
            booking approval.</p>
        </div>

        {/* Feature 4: Real-time Updates */}
        <div className="feature-card glass-panel" id="card-feature-updates">
          <div className="feature-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="feature-svg-illustration">
              <defs>
                <linearGradient id="updates-grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB200" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="updates-grad-pin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0.3" />
                </linearGradient>
                <filter id="updates-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#ea580c" flood-opacity="0.4" />
                </filter>
              </defs>
              <circle cx="24" cy="24" r="20" fill="url(#updates-grad-bg)" filter="url(#updates-glow)" opacity="0.15" />
              <circle cx="24" cy="24" r="16" stroke="url(#updates-grad-bg)" strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
              <circle cx="24" cy="24" r="10" stroke="url(#updates-grad-bg)" strokeWidth="0.8" opacity="0.2" />
              <line x1="24" y1="24" x2="36" y2="12" stroke="url(#updates-grad-bg)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path d="M24 8c-5.5 0-10 4.5-10 10 0 6.5 10 16 10 16s10-9.5 10-16c0-5.5-4.5-10-10-10z" fill="url(#updates-grad-pin)" stroke="url(#updates-grad-bg)" strokeWidth="1.8" />
              <circle cx="24" cy="18" r="3.5" fill="url(#updates-grad-bg)" />
              <circle cx="36" cy="12" r="3" fill="#ea580c" />
            </svg>
          </div>
          <h3 className="feature-title">Real-time Updates</h3>
          <p className="feature-desc">Monitor your dispatched provider's live GPS route directly within your GRED dashboard
            for seamless handoffs.</p>
        </div>

        {/* Feature 5: Safe Payments */}
        <div className="feature-card glass-panel" id="card-feature-security">
          <div className="feature-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="feature-svg-illustration">
              <defs>
                <linearGradient id="security-grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB200" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="security-grad-lock" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0.3" />
                </linearGradient>
                <filter id="security-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#FFB200" flood-opacity="0.4" />
                </filter>
              </defs>
              <circle cx="24" cy="24" r="20" fill="url(#security-grad-bg)" filter="url(#security-glow)" opacity="0.15" />
              <rect x="8" y="10" width="22" height="15" rx="3" stroke="url(#security-grad-bg)" strokeWidth="1.2" opacity="0.3" />
              <line x1="8" y1="15" x2="30" y2="15" stroke="url(#security-grad-bg)" strokeWidth="1.2" opacity="0.3" />
              <rect x="15" y="20" width="18" height="15" rx="5" fill="url(#security-grad-lock)" stroke="url(#security-grad-bg)" strokeWidth="1.8" />
              <path d="M19 20v-5a5 5 0 0 1 10 0v5" stroke="url(#security-grad-bg)" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="24" cy="26" r="1.5" fill="url(#security-grad-bg)" />
              <path d="M24 27.5v2.5" stroke="url(#security-grad-bg)" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M37 12l0.5 1 1 0.5-1 0.5-0.5 1-0.5-1-1-0.5 1-0.5 0.5-1z" fill="#FFB200" />
            </svg>
          </div>
          <h3 className="feature-title">Safe Payments</h3>
          <p className="feature-desc">Payments are securely processed and held in escrow, released only when you are 100%
            happy with the task.</p>
        </div>

        {/* Feature 6: Trusted Marketplace */}
        <div className="feature-card glass-panel" id="card-feature-trust">
          <div className="feature-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="feature-svg-illustration">
              <defs>
                <linearGradient id="trust-grad-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFB200" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
                <linearGradient id="trust-grad-glass" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFEAA7" stopOpacity="0.3" />
                </linearGradient>
                <filter id="trust-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#ea580c" flood-opacity="0.4" />
                </filter>
              </defs>
              <circle cx="24" cy="24" r="20" fill="url(#trust-grad-bg)" filter="url(#trust-glow)" opacity="0.15" />
              <circle cx="24" cy="24" r="15" stroke="url(#trust-grad-bg)" strokeWidth="1" opacity="0.3" />
              <path d="M24 8l3.6 7.2 8 1.2-5.8 5.6 1.4 8-7.2-3.8-7.2 3.8 1.4-8-5.8-5.6 8-1.2L24 8z" fill="url(#trust-grad-glass)" stroke="url(#trust-grad-bg)" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M21 23l2 2 4-4" stroke="url(#trust-grad-bg)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="18" r="1.5" fill="#FFB200" />
              <circle cx="38" cy="26" r="2" fill="#ea580c" />
            </svg>
          </div>
          <h3 className="feature-title">Trusted Marketplace</h3>
          <p className="feature-desc">Built upon deep feedback loops, transparent user ratings, and full service warranties
            for every booking.</p>
        </div>
      </div>
    </section>


    </>
  );
}

export default React.memo(WhyChoose);
