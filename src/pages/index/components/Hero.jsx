import React, { useState, useEffect, useRef } from 'react';

const tickerMessages = [
  "Deep cleaning accepted",
  "Electrician arriving in 4 min",
  "Car service matched nearby",
  "Plumber verified and dispatched",
  "Partner payout updated live",
];

function Hero() {
  const [tickerText, setTickerText] = useState(tickerMessages[0]);
  const [tickerStyle, setTickerStyle] = useState({ opacity: 1, transform: 'translateY(0px)', transition: 'all 0.18s ease' });

  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const tickerIndexRef = useRef(0);

  // Interval for the booking status ticker
  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: Fade out and move down
      setTickerStyle({ opacity: 0, transform: 'translateY(5px)', transition: 'all 0.18s ease' });
      
      setTimeout(() => {
        // Step 2: Swap message text and fade back in
        tickerIndexRef.current = (tickerIndexRef.current + 1) % tickerMessages.length;
        setTickerText(tickerMessages[tickerIndexRef.current]);
        setTickerStyle({ opacity: 1, transform: 'translateY(0px)', transition: 'all 0.18s ease' });
      }, 180);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  // 3D Canvas Pointer Move and Scroll Tilt Parallax effect
  useEffect(() => {
    const heroSection = heroRef.current;
    const heroCanvas = canvasRef.current;
    if (!heroSection || !heroCanvas) return;

    let isVisible = true;
    let pointerX = 0;
    let pointerY = 0;
    let currentX = 0;
    let currentY = 0;
    let heroScrollTilt = 0;
    let animationFrameId = null;
    let heroHeight = heroSection.offsetHeight || window.innerHeight;

    // Wake up animation loop on demand
    const requestTick = () => {
      if (isVisible && !animationFrameId) {
        animationFrameId = requestAnimationFrame(animateHero);
      }
    };

    // Handle mouse movement coordinates
    const handlePointerMove = (event) => {
      const rect = heroSection.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      requestTick();
    };

    const handlePointerLeave = () => {
      pointerX = 0;
      pointerY = 0;
      requestTick();
    };

    // Handle scroll coordinate updates
    const handleScroll = () => {
      heroScrollTilt = Math.min(1, Math.max(0, window.scrollY / heroHeight));
      requestTick();
    };

    // Handle resize configurations
    const handleResize = () => {
      heroHeight = heroSection.offsetHeight || window.innerHeight;
      requestTick();
    };

    // IntersectionObserver to start/stop the RAF loop
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          requestTick();
        } else if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      });
    }, { threshold: 0.05 });

    observer.observe(heroSection);

    // Bind event listeners with passive flags
    heroSection.addEventListener("pointermove", handlePointerMove, { passive: true });
    heroSection.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Initialize height
    handleResize();

    // Lerping helper
    const lerp = (start, end, factor) => start + (end - start) * factor;

    // Animation frame execution loop with smart idle sleeping
    function animateHero() {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }
      currentX = lerp(currentX, pointerX, 0.08);
      currentY = lerp(currentY, pointerY, 0.08);
      const rotateX = currentY * -5 + heroScrollTilt * 2;
      const rotateY = currentX * 6;
      const translateY = heroScrollTilt * -18;
      
      heroCanvas.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${currentX * 8}px, ${translateY + currentY * 8}px, 0)`;

      // Sleep RAF when motion has settled to save battery & CPU on mobile
      const isMoving = Math.abs(currentX - pointerX) > 0.001 || Math.abs(currentY - pointerY) > 0.001;
      if (isMoving) {
        animationFrameId = requestAnimationFrame(animateHero);
      } else {
        animationFrameId = null;
      }
    }

    // Start initial frame
    requestTick();

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      heroSection.removeEventListener("pointermove", handlePointerMove);
      heroSection.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="scene" id="hero-section" ref={heroRef}>
      <div className="hero-ambient hero-ambient-one" aria-hidden="true"></div>
      <div className="hero-ambient hero-ambient-two" aria-hidden="true"></div>

      <div className="hero-split-container">
        <section className="hero-left" aria-label="GRED marketplace introduction">
          <h1 className="hero-heading">Professional On-Demand Home Services at Your Doorstep.</h1>
          <p className="hero-subtitle">GRED is a city-based service marketplace platform that connects customers with trusted local service providers.</p>
          <div className="hero-cta-group" aria-label="Primary actions">
            <a className="btn-hero btn-secondary" id="btn-hero-partner" href="/provider">Become a Partner</a>
          </div>
          <div className="hero-app-badges" aria-label="Download the GRED app">
            <a href="javascript:void(0)" className="app-badge app-store" aria-label="Download on the App Store">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.52-.63.73-1.18 1.87-1.03 2.97 1.12.09 2.27-.56 2.98-1.43Z"/>
              </svg>
              <div className="badge-text">
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.gredapp.mobile" target="_blank" rel="noopener noreferrer" className="app-badge google-play" aria-label="Get it on Google Play">
              <svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
              </svg>
              <div className="badge-text">
                <span>GET IT ON</span>
                <strong>Google Play</strong>
              </div>
            </a>
          </div>
        </section>

        <section className="hero-right" aria-label="Animated GRED live marketplace">
          <div className="hero-canvas-wrap">
            <div className="hero-dashboard-wrapper">
              <div className="hero-glow-blob glow-1" aria-hidden="true"></div>
              <div className="hero-glow-blob glow-2" aria-hidden="true"></div>
              <div className="hero-canvas" id="hero-canvas" ref={canvasRef}>
                <svg className="city-svg-bg" viewBox="0 0 520 520" role="img" aria-label="Animated smart city dispatch map">
                  <defs>
                    <linearGradient id="amberRoad" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFB200" />
                      <stop offset="52%" stopColor="#FFC933" />
                      <stop offset="100%" stopColor="#F5A623" />
                    </linearGradient>
                    <linearGradient id="glassTower" x1="0%" x2="100%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#f8fafc" />
                    </linearGradient>
                  </defs>

                  <g className="city-grid">
                    <path d="M74 348 C114 312 160 282 210 256 S292 234 340 196" />
                    <path d="M104 304 C148 272 190 246 236 226" />
                    <path d="M156 384 C214 336 260 316 322 298" />
                    <path d="M148 190 C206 220 254 278 306 342" />
                  </g>

                  <path className="idle-road" d="M88 358 C156 308 214 276 282 238 S346 198 374 180" />

                  <path className="route-shadow"
                    d="M88 358 C116 376 166 346 190 286 C210 238 234 200 272 178 C312 156 362 132 402 118" />
                  <path className="route-line"
                    d="M88 358 C116 376 166 346 190 286 C210 238 234 200 272 178 C312 156 362 132 402 118" />
                  <circle className="map-node" cx="348" cy="122" r="4" />
                  <circle className="map-node" cx="272" cy="178" r="4" />
                  <circle className="map-node" cx="190" cy="286" r="4" />
                  <circle className="map-node" cx="118" cy="368" r="4" />

                  <g className="city-block block-a">
                    <polygon points="174,205 224,180 274,205 224,232" />
                    <polygon points="174,205 224,232 224,292 174,264" />
                    <polygon points="274,205 224,232 224,292 274,264" />
                  </g>
                  <g className="city-block block-b">
                    <polygon points="304,275 356,249 408,275 356,303" />
                    <polygon points="304,275 356,303 356,364 304,335" />
                    <polygon points="408,275 356,303 356,364 408,335" />
                  </g>
                  <g className="city-block block-c">
                    <polygon points="106,305 150,284 194,306 150,330" />
                    <polygon points="106,305 150,330 150,380 106,354" />
                    <polygon points="194,306 150,330 150,380 194,354" />
                  </g>

                  <g className="dashboard-panel-svg">
                    <rect x="58" y="88" width="126" height="72" rx="18" />
                    <path d="M78 128 L104 116 L130 124 L158 104" />
                    <circle cx="78" cy="128" r="4" />
                    <circle cx="104" cy="116" r="4" />
                    <circle cx="130" cy="124" r="4" />
                    <circle cx="158" cy="104" r="4" />
                  </g>
                </svg>

                <div className="hero-orbit-ring ring-one" aria-hidden="true"></div>
                <div className="hero-orbit-ring ring-two" aria-hidden="true"></div>

                <div className="dispatch-rider active-provider" aria-hidden="true">
                  <svg viewBox="0 0 96 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="48" cy="62" rx="38" ry="5" fill="rgba(0,0,0,0.15)" />
                    <circle cx="24" cy="52" r="10" fill="#111827" />
                    <circle cx="24" cy="52" r="6" fill="#94a3b8" />
                    <circle cx="24" cy="52" r="3" fill="#334155" />
                    <circle cx="72" cy="52" r="10" fill="#111827" />
                    <circle cx="72" cy="52" r="6" fill="#94a3b8" />
                    <circle cx="72" cy="52" r="3" fill="#334155" />
                    <path d="M34 50 L64 50 L66 44 L34 44 Z" fill="#1f2937" />
                    <path d="M24 50 C24 38 34 34 48 34 L58 34 C64 34 66 42 64 50 Z" fill="#FFB200" />
                    <path d="M60 48 L68 28 C70 24 73 24 74 24 L76 28 L68 50 Z" fill="#FFB200" />
                    <rect x="36" y="30" width="22" height="6" rx="3" fill="#111827" />
                    <rect x="10" y="16" width="20" height="20" rx="3" fill="#111827" />
                    <rect x="13" y="19" width="14" height="14" rx="2" fill="#FFB200" />
                    <path d="M22 23 C20 23 18 24 18 26 C18 28 20 29 22 29 C23.5 29 24 28 24 27.5 L24 26.5 L21.5 26.5"
                      stroke="#111827" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="72" y1="52" x2="68" y2="22" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
                    <path d="M64 22 L72 22" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
                    <path d="M47 36 L52 46 L60 46" stroke="#111827" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M47 34 L53 22 L63 24" stroke="#111827" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M53 22 L66 22" stroke="#111827" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <circle cx="53" cy="14" r="7" fill="#FFB200" stroke="#111827" strokeWidth="1.5" />
                    <path d="M54 12 L58 14 L55 17" fill="#111827" />
                  </svg>
                </div>

                <div className="dispatch-rider idle-provider idle-provider-1" aria-hidden="true">
                  <svg viewBox="0 0 96 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="48" cy="62" rx="38" ry="5" fill="rgba(0,0,0,0.15)" />
                    <circle cx="24" cy="52" r="10" fill="#111827" />
                    <circle cx="24" cy="52" r="6" fill="#94a3b8" />
                    <circle cx="24" cy="52" r="3" fill="#334155" />
                    <circle cx="72" cy="52" r="10" fill="#111827" />
                    <circle cx="72" cy="52" r="6" fill="#94a3b8" />
                    <circle cx="72" cy="52" r="3" fill="#334155" />
                    <path d="M34 50 L64 50 L66 44 L34 44 Z" fill="#1f2937" />
                    <path d="M24 50 C24 38 34 34 48 34 L58 34 C64 34 66 42 64 50 Z" fill="#FFB200" />
                    <path d="M60 48 L68 28 C70 24 73 24 74 24 L76 28 L68 50 Z" fill="#FFB200" />
                    <rect x="36" y="30" width="22" height="6" rx="3" fill="#111827" />
                    <rect x="10" y="16" width="20" height="20" rx="3" fill="#111827" />
                    <rect x="13" y="19" width="14" height="14" rx="2" fill="#FFB200" />
                    <path d="M22 23 C20 23 18 24 18 26 C18 28 20 29 22 29 C23.5 29 24 28 24 27.5 L24 26.5 L21.5 26.5"
                      stroke="#111827" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="72" y1="52" x2="68" y2="22" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
                    <path d="M64 22 L72 22" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
                    <path d="M47 36 L52 46 L60 46" stroke="#111827" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M47 34 L53 22 L63 24" stroke="#111827" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M53 22 L66 22" stroke="#111827" stroke-width="4" fill="none" strokeLinecap="round" />
                    <circle cx="53" cy="14" r="7" fill="#FFB200" stroke="#111827" strokeWidth="1.5" />
                    <path d="M54 12 L58 14 L55 17" fill="#111827" />
                  </svg>
                </div>

                <div className="dispatch-rider idle-provider idle-provider-2" aria-hidden="true">
                  <svg viewBox="0 0 96 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="48" cy="62" rx="38" ry="5" fill="rgba(0,0,0,0.15)" />
                    <circle cx="24" cy="52" r="10" fill="#111827" />
                    <circle cx="24" cy="52" r="6" fill="#94a3b8" />
                    <circle cx="24" cy="52" r="3" fill="#334155" />
                    <circle cx="72" cy="52" r="10" fill="#111827" />
                    <circle cx="72" cy="52" r="6" fill="#94a3b8" />
                    <circle cx="72" cy="52" r="3" fill="#334155" />
                    <path d="M34 50 L64 50 L66 44 L34 44 Z" fill="#1f2937" />
                    <path d="M24 50 C24 38 34 34 48 34 L58 34 C64 34 66 42 64 50 Z" fill="#FFB200" />
                    <path d="M60 48 L68 28 C70 24 73 24 74 24 L76 28 L68 50 Z" fill="#FFB200" />
                    <rect x="36" y="30" width="22" height="6" rx="3" fill="#111827" />
                    <rect x="10" y="16" width="20" height="20" rx="3" fill="#111827" />
                    <rect x="13" y="19" width="14" height="14" rx="2" fill="#FFB200" />
                    <path d="M22 23 C20 23 18 24 18 26 C18 28 20 29 22 29 C23.5 29 24 28 24 27.5 L24 26.5 L21.5 26.5"
                      stroke="#111827" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="72" y1="52" x2="68" y2="22" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />
                    <path d="M64 22 L72 22" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
                    <path d="M47 36 L52 46 L60 46" stroke="#111827" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M47 34 L53 22 L63 24" stroke="#111827" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M53 22 L66 22" stroke="#111827" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <circle cx="53" cy="14" r="7" fill="#FFB200" stroke="#111827" strokeWidth="1.5" />
                    <path d="M54 12 L58 14 L55 17" fill="#111827" />
                  </svg>
                </div>

                <div className="gps-pin-pulse user-pin" aria-hidden="true"><span className="gps-pin-inner"></span></div>
                <div className="gps-pin-pulse provider-pin" aria-hidden="true"><span className="gps-pin-inner"></span></div>

                <article className="hero-card hero-card-booking">
                  <div className="booking-icon">
                    <img src="/20260304_121316 copy.png" alt="GRED Logo" width="32" height="32" decoding="async" />
                  </div>
                  <div className="booking-text-wrap">
                    <span>New booking</span>
                    <p className="booking-ticker-msg" style={tickerStyle}>{tickerText}</p>
                  </div>
                </article>

                <article className="hero-card hero-card-status">
                  <span className="status-badge">Provider found</span>
                  <h6>GRED provider is on the way</h6>
                  <div className="loading-bar-wrap">
                    <div className="loading-bar-fill"></div>
                  </div>
                </article>

                <article className="hero-card hero-card-badge">verified partners nearby</article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default React.memo(Hero);
