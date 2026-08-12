import React from 'react';

function About() {
  return (
    <>
{/* 1. ABOUT SECTION */}
    <section id="about" className="section-padding scroll-reveal">
      <div className="about-grid">
        <div className="about-feature-card">
          {/* Premium Ambient Decorative Elements */}
          <div className="card-ambient-glow" aria-hidden="true"></div>
          <div className="card-glow-blob blob-1" aria-hidden="true"></div>
          <div className="card-glow-blob blob-2" aria-hidden="true"></div>
          <div className="card-reflection" aria-hidden="true"></div>
          <div className="card-particles" aria-hidden="true">
            <span className="particle p-1"></span>
            <span className="particle p-2"></span>
            <span className="particle p-3"></span>
          </div>

          <div className="card-inner-content">
            <span className="about-tag premium-tag">About GRED</span>
            <h2 className="about-heading premium-heading">Premium On-Demand Hyperlocal Marketplace</h2>
            <p className="about-desc premium-desc">
              GRED is an advanced on-demand platform designed to match busy households with top-tier service providers instantly. Operating a high-performance city-wise dispatch matrix, we connect local customers with vetted companies to ensure elite craftsmanship and zero delays.
            </p>

            {/* 4 Mini Glowing Stats Cards */}
            <div className="stats-mini-grid">
              <div className="stat-mini-box">
                <div className="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 11 2 2 4-4"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Verified Partners</span>
                </div>
              </div>

              <div className="stat-mini-box">
                <div className="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-number">Real-time</span>
                  <span className="stat-label">Fast Dispatch</span>
                </div>
              </div>

              <div className="stat-mini-box">
                <div className="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-number">City-wide</span>
                  <span className="stat-label">Smart Coverage</span>
                </div>
              </div>

              <div className="stat-mini-box">
                <div className="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div className="stat-info">
                  <span className="stat-number">Top-Tier</span>
                  <span className="stat-label">Trusted Space</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-cards-container">
          <div className="about-mini-card glass-panel">
            <div className="mini-card-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <h3>Verified Partners Only</h3>
            <p>Every single service provider on our platform undergoes a rigorous 5-step background check and quality
              trial before boarding.</p>
          </div>
          <div className="about-mini-card glass-panel">
            <div className="mini-card-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="6" height="6" rx="1"/>
                <rect x="16" y="2" width="6" height="6" rx="1"/>
                <rect x="2" y="16" width="6" height="6" rx="1"/>
                <rect x="16" y="16" width="6" height="6" rx="1"/>
                <path d="M8 5h8M8 19h8M5 8v8M19 8v8"/>
              </svg>
            </div>
            <h3>Scalable City Infrastructure</h3>
            <p>Built with robust microservice routing, GRED delivers consistent marketplace experiences across rapidly
              expanding hubs.</p>
          </div>
        </div>
      </div>
    </section>


    </>
  );
}

export default About;
