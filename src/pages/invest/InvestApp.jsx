import React from 'react';

function InvestApp() {
  return (
    <>


  {/* Floating Glow Wrappers */}
  <div className="invest-bg-wrapper">
    <div className="invest-glow-blob blob-1" aria-hidden="true"></div>
    <div className="invest-glow-blob blob-2" aria-hidden="true"></div>
    <div className="invest-glow-blob blob-3" aria-hidden="true"></div>
    <div className="invest-dots-grid" aria-hidden="true"></div>
  </div>

  {/* Page Header */}
  <header className="invest-header">
    <a className="invest-brand-link" href="/" aria-label="GRED home">
      <span className="invest-brand-text">GRED</span>
    </a>
    <a href="/" className="back-home-btn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: "middle"}}>
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      Back to Home
    </a>
  </header>

  {/* Hero Section */}
  <section className="invest-hero">
    <span className="invest-tag">Investor Relations</span>
    <h1 className="invest-hero-title">Invest In The Future Of <span>Hyperlocal Services</span></h1>
    <p className="invest-hero-desc">
      GRED is building Kerala’s next-generation service marketplace infrastructure powered by verified partner networks, real-time dispatch systems, and scalable city-wide operations.
    </p>
  </section>

  {/* Metrics Grid Section */}
  <section className="invest-stats-padding">
    <div className="invest-section-header">
      <h2 className="invest-section-title">Why Smart Capital Backs GRED</h2>
      <p className="invest-section-subtitle">Our structural business model yields elite margins, instant dispatch liquidity, and robust local growth loops.</p>
    </div>

    <div className="invest-stats-grid">
      {/* Card 1 */}
      <div className="invest-stat-card">
        <div className="invest-stat-illustration" aria-hidden="true">
          <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hubGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB200" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
              <filter id="hubGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M20 50 L100 10 L180 50 L100 90 Z" stroke="rgba(247,166,0,0.15)" strokeWidth="1.5" />
            <path d="M60 50 L100 30 L140 50 L100 70 Z" stroke="rgba(247,166,0,0.12)" strokeWidth="1" />
            <line x1="100" y1="50" x2="60" y2="30" stroke="url(#hubGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="100" y1="50" x2="140" y2="30" stroke="url(#hubGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="100" y1="50" x2="60" y2="70" stroke="url(#hubGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="100" y1="50" x2="140" y2="70" stroke="url(#hubGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="100" cy="50" r="8" fill="url(#hubGrad)" filter="url(#hubGlow)" />
            <circle cx="60" cy="30" r="5" fill="#ea580c" />
            <circle cx="140" cy="30" r="5" fill="#FFB200" />
            <circle cx="60" cy="70" r="5" fill="#FFB200" />
            <circle cx="140" cy="70" r="5" fill="#ea580c" />
            <circle cx="100" cy="50" r="16" stroke="#FFB200" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 4" />
          </svg>
        </div>
        <h3 className="invest-stat-title">City-Wise Hub Matrix</h3>
        <p className="invest-stat-desc">Fully localized marketplace systems that balance supply and demand coordinates to maximize active specialist utilization.</p>
      </div>

      {/* Card 2 */}
      <div className="invest-stat-card">
        <div className="invest-stat-illustration" aria-hidden="true">
          <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="routeGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD200" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
            <path d="M30 50 L100 15 L170 50 L100 85 Z" fill="rgba(247,166,0,0.03)" stroke="rgba(247,166,0,0.12)" strokeWidth="1.5" />
            <path d="M50 50 Q 80 25, 100 55 T 150 50" stroke="rgba(247,166,0,0.15)" strokeWidth="2" />
            <path d="M60 45 Q 85 28, 100 55 T 135 48" stroke="url(#routeGrad)" strokeWidth="3" strokeLinecap="round" />
            <g transform="translate(130, 25)">
              <path d="M8 0 C3.58 0 0 3.58 0 8 C0 14 8 20 8 20 C8 20 16 14 16 8 C16 3.58 12.42 0 8 0 Z" fill="#ea580c" />
              <circle cx="8" cy="8" r="3" fill="#ffffff" />
            </g>
            <circle cx="90" cy="40" r="5" fill="#FFB200" stroke="#ffffff" strokeWidth="1" />
          </svg>
        </div>
        <h3 className="invest-stat-title">Real-Time Routing</h3>
        <p className="invest-stat-desc">Automated, low-latency provider matching matrix featuring integrated live GPS tracking to guarantee timely arrivals.</p>
      </div>

      {/* Card 3 */}
      <div className="invest-stat-card">
        <div className="invest-stat-illustration" aria-hidden="true">
          <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="catGrad1" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f8fafc" />
              </linearGradient>
              <linearGradient id="catGrad2" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB200" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
            <path d="M65 65 L125 35 L165 55 L105 85 Z" fill="rgba(247,166,0,0.06)" stroke="rgba(247,166,0,0.15)" strokeWidth="1.2" />
            <path d="M50 50 L110 20 L150 40 L90 70 Z" fill="rgba(255,255,255,0.7)" stroke="rgba(247,166,0,0.2)" strokeWidth="1.2" />
            <circle cx="85" cy="40" r="3.5" fill="#94a3b8" />
            <path d="M100 37 L130 22" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M95 45 L120 32" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
            <path d="M35 35 L95 5 L135 25 L75 55 Z" fill="url(#catGrad1)" stroke="url(#catGrad2)" strokeWidth="1.5" />
            <circle cx="70" cy="25" r="5" fill="#ea580c" />
            <path d="M85 22 L115 7" stroke="url(#catGrad2)" strokeWidth="3" strokeLinecap="round" />
            <path d="M80 30 L105 17" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="invest-stat-title">Scalable Catalog</h3>
        <p className="invest-stat-desc">Adaptable platform architecture spanning domestic support, repairs, plumbing, electrical, and car services within a single system.</p>
      </div>

      {/* Card 4 */}
      <div className="invest-stat-card">
        <div className="invest-stat-illustration" aria-hidden="true">
          <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="shieldGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="goldRing" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD200" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
            <ellipse cx="100" cy="50" rx="60" ry="25" stroke="url(#goldRing)" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
            <ellipse cx="100" cy="50" rx="45" ry="18" stroke="url(#goldRing)" strokeWidth="1.2" opacity="0.3" />
            <circle cx="100" cy="50" r="24" fill="rgba(16, 185, 129, 0.06)" />
            <g transform="translate(85, 30)">
              <path d="M15 0 L30 5 C30 18 20 28 15 32 C10 28 0 18 0 5 Z" fill="url(#shieldGrad)" stroke="#ffffff" strokeWidth="2" />
              <path d="M9 16 L13 20 L21 11" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <circle cx="45" cy="40" r="4.5" fill="#10b981" />
            <circle cx="155" cy="60" r="4.5" fill="#ea580c" />
          </svg>
        </div>
        <h3 className="invest-stat-title">Verified Quality Loops</h3>
        <p className="invest-stat-desc">Elite craftsmanship built upon standard 5-step background vetting, user reviews, and comprehensive service warranties.</p>
      </div>

      {/* Card 5 */}
      <div className="invest-stat-card">
        <div className="invest-stat-illustration" aria-hidden="true">
          <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="chartGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB200" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
            <path d="M30 65 L100 30 L170 65 L100 100 Z" fill="rgba(247,166,0,0.03)" stroke="rgba(247,166,0,0.1)" strokeWidth="1" />
            <g transform="translate(60, 48)">
              <path d="M0 12 L10 7 L20 12 L10 17 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.8" />
              <path d="M0 12 L0 32 L10 37 L10 17 Z" fill="#cbd5e1" />
              <path d="M10 17 L10 37 L20 32 L20 12 Z" fill="#94a3b8" />
            </g>
            <g transform="translate(90, 32)">
              <path d="M0 12 L10 7 L20 12 L10 17 Z" fill="rgba(247,166,0,0.3)" stroke="rgba(247,166,0,0.4)" strokeWidth="0.8" />
              <path d="M0 12 L0 48 L10 53 L10 17 Z" fill="rgba(247,166,0,0.45)" />
              <path d="M10 17 L10 48 L20 43 L20 12 Z" fill="rgba(234,88,12,0.5)" />
            </g>
            <g transform="translate(120, 15)">
              <path d="M0 12 L10 7 L20 12 L10 17 Z" fill="url(#chartGrad)" />
              <path d="M0 12 L0 65 L10 70 L10 17 Z" fill="#ea580c" />
              <path d="M10 17 L10 70 L20 65 L20 12 Z" fill="#b91c1c" />
            </g>
            <path d="M55 58 L85 45 L115 28 L142 16" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M132 16 L142 16 L142 26" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="invest-stat-title">Low Asset Overhead</h3>
        <p className="invest-stat-desc">Highly optimized capital structure driving outstanding capital efficiency and powerful cash margins at maturity.</p>
      </div>

      {/* Card 6 */}
      <div className="invest-stat-card">
        <div className="invest-stat-illustration" aria-hidden="true">
          <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="infinityLoop" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB200" />
                <stop offset="50%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#FFC933" />
              </linearGradient>
              <filter id="loopShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#ea580c" flood-opacity="0.15" />
              </filter>
            </defs>
            <path d="M50 50 C20 20, 20 80, 50 50 C80 20, 120 20, 150 50 C180 80, 180 20, 150 50 C120 80, 80 80, 50 50 Z" stroke="url(#infinityLoop)" strokeWidth="4.5" fill="none" strokeLinecap="round" filter="url(#loopShadow)" />
            <circle cx="50" cy="50" r="6" fill="#1e293b" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="150" cy="50" r="6" fill="#1e293b" stroke="#ffffff" strokeWidth="1.2" />
            <circle cx="100" cy="50" r="5" fill="#ea580c" />
            <path d="M100 20 L102 24 L106 24 L103 27 L104 31 L100 29 L96 31 L97 27 L94 24 L98 24 Z" fill="#FFB200" />
            <path d="M55 75 L56.5 78 L59.5 78 L57 80.5 L58 83.5 L55 82 L52 83.5 L53 80.5 L50.5 78 L53.5 78 Z" fill="#10b981" />
          </svg>
        </div>
        <h3 className="invest-stat-title">Robust Loyalty Loops</h3>
        <p className="invest-stat-desc">High-frequency user engagement models supported by escrow payments, driving superior customer lifetime value (LTV).</p>
      </div>
    </div>
  </section>

  {/* Form Section */}
  <section className="invest-form-section">
    <div className="invest-form-card">
      <div style={{textAlign: "center", marginBottom: "40px"}}>
        <span style={{fontSize: "0.75rem", fontWeight: "800", color: "#ea580c", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "8px"}}>Let's Connect</span>
        <h2 style={{fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", color: "#000000", letterSpacing: "-0.5px"}}>Investor Inquiry Desk</h2>
        <p style={{fontSize: "0.9rem", color: "#64748b", marginTop: "8px"}}>Fill in the form below. Our corporate development team will initiate contact within 24 hours.</p>
      </div>

      {/*
        DEVELOPER ACTIVATION NOTE:
        1. Web3Forms will not work if the page is opened directly as an HTML file (via the file:// protocol).
        2. You MUST run the project using a local web server (e.g. VS Code "Live Server" extension) at http://localhost:5500 or http://127.0.0.1:5500.
        3. The first form submission requires activating Web3Forms through the verification email sent to storegred@gmail.com.
      */}

      {/* Web3Forms Integration */}
      <form action="https://api.web3forms.com/submit" method="POST" className="invest-form">
        {/* Hidden inputs for Web3Forms */}
        <input type="hidden" name="access_key" value="88ebc932-5173-4c09-a4b0-f37e152723a0" />
        <input type="checkbox" name="botcheck" style={{display: "none"}} />
        <input type="hidden" name="_subject" value="New Investor Inquiry - GRED" />
        <input type="hidden" name="redirect" value="thankyou.html" />

        <div className="invest-form-grid">
          <div className="invest-form-group">
            <label htmlFor="investor-name" className="invest-form-label">Full Name</label>
            <input type="text" id="investor-name" name="Full Name" className="invest-form-input" placeholder="e.g. Sandra Nair" required />
          </div>

          <div className="invest-form-group">
            <label htmlFor="investor-company" className="invest-form-label">Company Name</label>
            <input type="text" id="investor-company" name="Company Name" className="invest-form-input" placeholder="e.g. Sequoia India / Angel Syndicate" required />
          </div>

          <div className="invest-form-group">
            <label htmlFor="investor-email" className="invest-form-label">Email Address</label>
            <input type="email" id="investor-email" name="Email" className="invest-form-input" placeholder="e.g. partner@firm.com" required />
          </div>

          <div className="invest-form-group">
            <label htmlFor="investor-phone" className="invest-form-label">Phone Number</label>
            <input type="tel" id="investor-phone" name="Phone Number" className="invest-form-input" placeholder="e.g. +91 98450 12345" required />
          </div>

          <div className="invest-form-group full-width">
            <label htmlFor="investor-allocation" className="invest-form-label">Expected Allocation / Interest</label>
            <select id="investor-allocation" name="Investment Interest" className="invest-form-select" required>
              <option value="" disabled selected>Select expected investment bracket...</option>
              <option value="Under $25k">Angel Bracket (Under $25k)</option>
              <option value="$25k - $100k">Seed Bracket ($25k - $100k)</option>
              <option value="$100k - $500k">Growth Seed ($100k - $500k)</option>
              <option value="Over $500k">Institutional / Syndicate VC (Over $500k)</option>
            </select>
          </div>

          <div className="invest-form-group full-width">
            <label htmlFor="investor-notes" className="invest-form-label">Strategic Investment Notes</label>
            <textarea id="investor-notes" name="Message" className="invest-form-textarea" placeholder="Detail any strategic scaling synergies, network references, or specific operational timelines..." required></textarea>
          </div>
        </div>

        <button type="submit" className="invest-submit-btn">
          Send Investor Inquiry
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: "middle"}}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </form>
    </div>
  </section>

  {/* Page Footer */}
  <footer className="invest-footer">
    <p>&copy; 2026 GRED. All rights reserved. Confidential Investor Documentation.</p>
  </footer>

    </>
  );
}

export default InvestApp;
