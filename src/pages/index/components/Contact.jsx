import React from 'react';

function Contact() {
  return (
    <>
{/* 10. CONNECT / CONTACT SHOWCASE SECTION */}
    <section id="contact" className="showcase-section section-padding scroll-reveal">
      {/* Soft orange ambient glows and particle layers */}
      <div className="showcase-bg-effects" aria-hidden="true">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        {/* Subtle tech background grid/dots */}
        <div className="showcase-grid-dots"></div>
      </div>

      <div className="showcase-container">
        {/* CENTER CONTENT: Brand Lockup & Heading */}
        <div className="showcase-center">
          <div className="showcase-brand-tag">GRED Marketplace</div>
          <h2 className="showcase-main-title">India’s First Quick Marketplace</h2>
          <p className="showcase-subtitle">On-demand home services designed for modern urban households with real-time dispatch and verified professionals.</p>
        </div>

        {/* Consolidated Pre-rendered Illustration Image */}
        <div className="showcase-image-container">
          <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779447195/file_00000000fe6071f7bef2d7571a211aa5_ncffqi.png" alt="GRED Marketplace Showcase" className="showcase-main-img" loading="lazy" decoding="async" width="800" height="600" />
        </div>

        {/* App Store + Play Store Badge Buttons (Centered directly below the illustration on all viewports) */}
        <div className="showcase-app-buttons">
          {/* App Store Link */}
          <a href="javascript:void(0)" className="store-badge-btn" id="showcase-btn-appstore" aria-label="Download on App Store">
            <div className="store-badge-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z"/>
              </svg>
            </div>
            <div className="store-badge-text">
              <span className="store-pre">Download on the</span>
              <span className="store-title">App Store</span>
            </div>
          </a>

          {/* Google Play Link */}
          <a href="https://play.google.com/store/apps/details?id=com.gredapp.mobile" target="_blank" rel="noopener noreferrer" className="store-badge-btn" id="showcase-btn-googleplay" aria-label="Get it on Google Play">
            <div className="store-badge-icon">
              <svg viewBox="0 0 512 512" fill="currentColor" style={{width: "24px", height: "24px"}}>
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
            </div>
            <div className="store-badge-text">
              <span className="store-pre">GET IT ON</span>
              <span className="store-title">Google Play</span>
            </div>
          </a>
        </div>

        {/* BOTTOM AREA: Soft Floating Service outline tags */}
        <div className="showcase-bottom-tags">
          <div className="bottom-tag glass-panel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>House Help</span>
          </div>
          <div className="bottom-tag glass-panel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <circle cx="12" cy="11" r="3"/>
            </svg>
            <span>Deep Cleaner</span>
          </div>
          <div className="bottom-tag glass-panel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
            <span>Plumbing</span>
          </div>
          <div className="bottom-tag glass-panel">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span>Electrical</span>
          </div>
        </div>
      </div>
    </section>


    </>
  );
}

export default React.memo(Contact);
