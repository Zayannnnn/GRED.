import React, { useState, useEffect, useRef } from 'react';

const triggers = [
  { label: "Booking Screen", desc: "Select home service categories and check flat pricing in 3 clicks.", num: "01", key: "booking" },
  { label: "Live Tracking", desc: "Observe your service provider's physical location on a live-map grid.", num: "02", key: "tracking" },
  { label: "Cart", desc: "Review chosen home services, verify flat pricing, and check out securely.", num: "03", key: "cart" },
  { label: "Service Status", desc: "Follow a simple milestone tracker checking off job progress phase by phase.", num: "04", key: "status" },
  { label: "Booking History", desc: "View previous completed services, access invoice history, and re-book in 1 click.", num: "05", key: "history" }
];

function AppFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionState, setTransitionState] = useState({ opacity: 1, transform: 'translateY(0)' });
  const sectionRef = useRef(null);
  const isVisibleRef = useRef(false);
  const cycleTimerRef = useRef(null);
  const pauseTimerRef = useRef(null);

  const switchTab = (index) => {
    // Elegant transition fade: fade out, swap index, fade in
    setTransitionState({ opacity: 0, transform: 'translateY(8px)' });
    setTimeout(() => {
      setActiveIndex(index);
      setTransitionState({ opacity: 1, transform: 'translateY(0)' });
    }, 180);
  };

  const startCycling = () => {
    stopCycling();
    if (!isVisibleRef.current) return;
    cycleTimerRef.current = setInterval(() => {
      setActiveIndex(prev => {
        const next = (prev + 1) % triggers.length;
        // Run transition inline
        setTransitionState({ opacity: 0, transform: 'translateY(8px)' });
        setTimeout(() => {
          setTransitionState({ opacity: 1, transform: 'translateY(0)' });
        }, 180);
        return next;
      });
    }, 3000);
  };

  const stopCycling = () => {
    if (cycleTimerRef.current) {
      clearInterval(cycleTimerRef.current);
      cycleTimerRef.current = null;
    }
  };

  const handleManualClick = (index) => {
    stopCycling();
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }
    
    switchTab(index);

    // Pause auto-switch briefly for 6 seconds, then resume cycling
    pauseTimerRef.current = setTimeout(() => {
      startCycling();
    }, 6000);
  };

  // Viewport-based cycling observer: only cycle when visible in viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          startCycling();
        } else {
          stopCycling();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(section);

    return () => {
      observer.disconnect();
      stopCycling();
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  const renderScreenContent = () => {
    const key = triggers[activeIndex].key;
    if (key === "booking") {
      return (
        <div style={{ opacity: transitionState.opacity, transform: transitionState.transform, transition: 'all 0.18s ease' }}>
          <div className="phone-app-header">
            <span className="phone-app-brand">GRED</span>
            <div className="phone-app-user-avatar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width: "14px", height: "14px"}}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          <div style={{marginBottom: "18px", position: "relative"}}>
            <input type="text" placeholder="Search cleaning, plumbing..." disabled style={{width: "100%", padding: "10px 14px 10px 32px", borderRadius: "10px", border: "1px solid #cbd5e1", background: "#ffffff", color: "#000000", fontSize: "0.8rem"}} />
            <span style={{position: "absolute", left: "10px", top: "9px", fontSize: "0.8rem"}}>🔍</span>
          </div>
          <div style={{borderRadius: "12px", overflow: "hidden", marginBottom: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", width: "100%", aspectRatio: "16 / 9"}}>
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_600,c_scale/v1777323674/20260428_022743_uurqty.png" style={{width: "100%", height: "100%", objectFit: "cover"}} alt="Mockup Banner" loading="lazy" decoding="async" width="300" height="169" />
          </div>
          <h5 style={{fontSize: "0.85rem", marginBottom: "10px", color: "#000000", fontWeight: "700"}}>Select Category</h5>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px"}}>
            <div style={{background: "#ffffff", border: "2px solid #FFB200", borderRadius: "12px", padding: "10px 8px", textAlign: "center", fontSize: "0.75rem", fontWeight: "700", color: "#000000", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 4px 10px rgba(255,178,0,0.06)"}}>
              <div style={{width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,178,0,0.05)", border: "1px solid #FFB200", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: "6px"}}>
                <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363872/file_000000004ca07208b97fa5da8c067d03_fzrobj.png" style={{width: "80%", height: "80%", objectFit: "contain"}} alt="House Help" loading="lazy" decoding="async" width="42" height="42" />
              </div>
              House Help
            </div>
            <div style={{background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "10px 8px", textAlign: "center", fontSize: "0.75rem", fontWeight: "600", color: "#4b5563", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.015)"}}>
              <div style={{width: "52px", height: "52px", borderRadius: "50%", background: "#f8fafc", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: "6px"}}>
                <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363890/file_00000000ae3072088b3e5f8eb2acc0e6_kmtkwe.png" style={{width: "80%", height: "80%", objectFit: "contain"}} alt="Car Service" loading="lazy" decoding="async" width="42" height="42" />
              </div>
              Car Service
            </div>
            <div style={{background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "10px 8px", textAlign: "center", fontSize: "0.75rem", fontWeight: "600", color: "#4b5563", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.015)"}}>
              <div style={{width: "52px", height: "52px", borderRadius: "50%", background: "#f8fafc", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: "6px"}}>
                <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363808/file_0000000065347208befab56e456ffd75_jlc1m1.png" style={{width: "80%", height: "80%", objectFit: "contain"}} alt="Plumbing" loading="lazy" decoding="async" width="42" height="42" />
              </div>
              Plumbing
            </div>
            <div style={{background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "10px 8px", textAlign: "center", fontSize: "0.75rem", fontWeight: "600", color: "#4b5563", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.015)"}}>
              <div style={{width: "52px", height: "52px", borderRadius: "50%", background: "#f8fafc", border: "1px solid rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: "6px"}}>
                <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363750/file_0000000068d8720884b41c36d2c4f2ad_fj7lff.png" style={{width: "80%", height: "80%", objectFit: "contain"}} alt="Electrical" loading="lazy" decoding="async" width="42" height="42" />
              </div>
              Electrical
            </div>
          </div>
        </div>
      );
    }
    
    if (key === "tracking") {
      return (
        <div style={{ opacity: transitionState.opacity, transform: transitionState.transform, transition: 'all 0.18s ease' }}>
          <div className="phone-app-header">
            <span style={{fontWeight: 800, fontSize: "0.9rem", color: "#000000"}}>Live Dispatch Map</span>
            <span style={{color: "#10b981", fontSize: "0.7rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px"}}>● Connected</span>
          </div>
          <div style={{height: "180px", width: "100%", borderRadius: "16px", background: "radial-gradient(circle, #f8fafc 0%, #f1f5f9 100%)", border: "1px solid #e2e8f0", position: "relative", overflow: "hidden", marginBottom: "20px", boxShadow: "inset 0 0 10px rgba(0,0,0,0.02)"}}>
            <div style={{position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px)", backgroundSize: "20px 20px"}}></div>
            <div style={{position: "absolute", width: "130px", height: "2px", background: "rgba(255,178,0,0.15)", top: "80px", left: "40px", transform: "rotate(25deg)"}}></div>
            <div style={{position: "absolute", top: "70px", left: "120px", fontSize: "1.4rem", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.08))", animation: "float 2s ease-in-out infinite"}}>🚴</div>
            <div style={{position: "absolute", top: "110px", left: "60px", fontSize: "1.4rem", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.08))"}}>🏠</div>
          </div>
          <div style={{background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "14px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.015)"}}>
            <div style={{width: "36px", height: "36px", borderRadius: "50%", background: "#FFB200", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontWeight: 800, fontSize: "0.85rem"}}>RS</div>
            <div style={{flexGrow: 1}}>
              <h6 style={{fontSize: "0.8rem", fontWeight: 700, color: "#000000", marginBottom: "2px"}}>Rohan Sharma</h6>
              <p style={{fontSize: "0.65rem", color: "#6b7280"}}>House Help Specialist — 4.9 ★</p>
            </div>
            <div style={{textAlign: "right"}}>
              <span style={{fontSize: "0.75rem", fontWeight: 800, color: "#FFB200", display: "block"}}>4 MINS</span>
              <span style={{fontSize: "0.6rem", color: "#6b7280"}}>Arriving</span>
            </div>
          </div>
        </div>
      );
    }

    if (key === "cart") {
      return (
        <div style={{ opacity: transitionState.opacity, transform: transitionState.transform, transition: 'all 0.18s ease' }}>
          <div className="phone-app-header" style={{borderBottom: "1px solid #e2e8f0", paddingBottom: "8px", marginBottom: "12px"}}>
            <span style={{fontWeight: 800, fontSize: "0.9rem", color: "#000000"}}>Your Cart</span>
            <span style={{background: "rgba(255,178,0,0.08)", color: "#FFB200", padding: "2px 8px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 700}}>1 Item Added</span>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "12px", height: "180px", overflowY: "auto", marginBottom: "12px"}}>
            <div style={{display: "flex", alignItems: "center", gap: "10px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "10px"}}>
              <div style={{width: "38px", height: "38px", borderRadius: "8px", background: "#ffffff", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0}}>
                <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363872/file_000000004ca07208b97fa5da8c067d03_fzrobj.png" style={{width: "85%", height: "85%", objectFit: "contain"}} alt="Help Icon" />
              </div>
              <div style={{flexGrow: 1}}>
                <span style={{fontSize: "0.75rem", fontWeight: 700, color: "#000000", display: "block"}}>Full House Cleaning</span>
                <span style={{fontSize: "0.6rem", color: "#6b7280"}}>Standard 2BHK Plan</span>
              </div>
              <span style={{fontSize: "0.75rem", fontWeight: 800, color: "#FFB200"}}>$89.00</span>
            </div>
            <div style={{background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "10px", fontSize: "0.7rem"}}>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "6px", color: "#4b5563"}}>
                <span>Subtotal</span>
                <span>$89.00</span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "6px", color: "#4b5563"}}>
                <span>Matching Fee</span>
                <span style={{color: "#10b981"}}>FREE</span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: "6px", color: "#4b5563"}}>
                <span>GRED Trust Warranty</span>
                <span>$1.99</span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", borderTop: "1px dashed #e2e8f0", paddingTop: "6px", fontWeight: 800, color: "#000000", fontSize: "0.75rem"}}>
                <span>Total Amount</span>
                <span>$90.99</span>
              </div>
            </div>
          </div>
          <button type="button" style={{width: "100%", background: "#FFB200", border: "none", padding: "10px", borderRadius: "10px", fontWeight: 800, fontSize: "0.75rem", color: "#ffffff", cursor: "pointer", boxShadow: "0 4px 10px rgba(255,178,0,0.15)"}}>Proceed to Escrow Checkout</button>
        </div>
      );
    }

    if (key === "status") {
      return (
        <div style={{ opacity: transitionState.opacity, transform: transitionState.transform, transition: 'all 0.18s ease' }}>
          <div className="phone-app-header">
            <span style={{fontWeight: 800, fontSize: "0.85rem", color: "#000000"}}>Job Progress Tracker</span>
            <span style={{color: "#FFB200", fontSize: "0.7rem", fontWeight: 700}}>ID #88749</span>
          </div>
          <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
            <div style={{width: "90px", height: "90px", borderRadius: "50%", border: "6px solid #f1f5f9", borderTopColor: "#FFB200", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", position: "relative", animation: "pulse 2s infinite alternate"}}>
              <span style={{fontSize: "1.1rem", fontWeight: 800, color: "#000000"}}>75%</span>
              <span style={{fontSize: "0.5rem", color: "#6b7280", textTransform: "uppercase"}}>Active</span>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "12px", marginBottom: "10px"}}>
            <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "0.75rem", color: "#10b981"}}>
              <div style={{width: "16px", height: "16px", borderRadius: "50%", background: "#10b981", color: "#ffffff", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.5rem"}}>✓</div>
              <div>
                <span style={{fontWeight: 700, display: "block", color: "#000000"}}>Booking Confirmed</span>
                <span style={{fontSize: "0.6rem", color: "#6b7280"}}>10:00 AM</span>
              </div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "0.75rem", color: "#10b981"}}>
              <div style={{width: "16px", height: "16px", borderRadius: "50%", background: "#10b981", color: "#ffffff", fontWeight: 800, display: "flex", alignItems: "center", justifyZero: "center", fontSize: "0.5rem"}}>✓</div>
              <div>
                <span style={{fontWeight: 700, display: "block", color: "#000000"}}>Provider Dispatched</span>
                <span style={{fontSize: "0.6rem", color: "#6b7280"}}>10:15 AM</span>
              </div>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "0.75rem", color: "#FFB200"}}>
              <div style={{width: "16px", height: "16px", borderRadius: "50%", background: "#FFB200", color: "#ffffff", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.5rem"}}>▶</div>
              <div>
                <span style={{fontWeight: 700, display: "block", color: "#FFB200"}}>Work in Progress</span>
                <span style={{fontSize: "0.6rem", color: "#6b7280"}}>Active cleaning cycle...</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (key === "history") {
      return (
        <div style={{ opacity: transitionState.opacity, transform: transitionState.transform, transition: 'all 0.18s ease' }}>
          <div className="phone-app-header" style={{borderBottom: "1px solid #e2e8f0", paddingBottom: "8px", marginBottom: "12px"}}>
            <span style={{fontWeight: 800, fontSize: "0.9rem", color: "#000000"}}>Booking History</span>
            <span style={{background: "rgba(16,185,129,0.08)", color: "#10b981", padding: "2px 8px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 700}}>Completed</span>
          </div>
          <div style={{display: "flex", flexDirection: "column", gap: "10px", height: "225px", overflowY: "auto"}}>
            <div style={{background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px"}}>
              <div style={{display: "flex", alignItems: "center", gap: "8px", width: "100%"}}>
                <div style={{width: "32px", height: "32px", borderRadius: "6px", background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0}}>
                  <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363750/file_0000000068d8720884b41c36d2c4f2ad_fj7lff.png" style={{width: "85%", height: "85%", objectFit: "contain"}} alt="Electric" loading="lazy" decoding="async" width="32" height="32" />
                </div>
                <div style={{flexGrow: 1}}>
                  <span style={{fontSize: "0.75rem", fontWeight: 700, color: "#000000", display: "block"}}>Electrical Repair</span>
                  <span style={{fontSize: "0.6rem", color: "#6b7280"}}>May 15, 2026 • 2:30 PM</span>
                </div>
                <span style={{background: "rgba(16,185,129,0.08)", color: "#10b981", padding: "2px 6px", borderRadius: "4px", fontSize: "0.55rem", fontWeight: 800}}>COMPLETED</span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px dashed #e2e8f0", paddingTop: "6px", width: "100%"}}>
                <span style={{fontSize: "0.7rem", fontWeight: 700, color: "#000000"}}>Paid: $45.00</span>
                <button type="button" style={{background: "#ffffff", border: "1px solid #cbd5e1", padding: "3px 8px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 700, color: "#4b5563", cursor: "pointer"}}>Rebook</button>
              </div>
            </div>
            <div style={{background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "10px", display: "flex", flexDirection: "column", gap: "8px"}}>
              <div style={{display: "flex", alignItems: "center", gap: "8px", width: "100%"}}>
                <div style={{width: "32px", height: "32px", borderRadius: "6px", background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", flexShrink: 0}}>
                  <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363808/file_0000000065347208befab56e456ffd75_jlc1m1.png" style={{width: "85%", height: "85%", objectFit: "contain"}} alt="Plumb Icon" loading="lazy" decoding="async" width="32" height="32" />
                </div>
                <div style={{flexGrow: 1}}>
                  <span style={{fontSize: "0.75rem", fontWeight: 700, color: "#000000", display: "block"}}>Plumbing Service</span>
                  <span style={{fontSize: "0.6rem", color: "#6b7280"}}>Apr 28, 2026 • 11:00 AM</span>
                </div>
                <span style={{background: "rgba(16,185,129,0.08)", color: "#10b981", padding: "2px 6px", borderRadius: "4px", fontSize: "0.55rem", fontWeight: 800}}>COMPLETED</span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px dashed #e2e8f0", paddingTop: "6px", width: "100%"}}>
                <span style={{fontSize: "0.7rem", fontWeight: 700, color: "#000000"}}>Paid: $65.00</span>
                <button type="button" style={{background: "#ffffff", border: "1px solid #cbd5e1", padding: "3px 8px", borderRadius: "6px", fontSize: "0.6rem", fontWeight: 700, color: "#4b5563", cursor: "pointer"}}>Rebook</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section id="app-features" className="section-padding scroll-reveal" ref={sectionRef}>
      <h2 className="section-title">Seamless App Features</h2>
      <p className="section-subtitle">Experience a fluid, powerful interface designed for effortless home management.</p>

      <div className="app-showcase-box">
        <div className="showcase-dots-container" aria-hidden="true">
          <div className="showcase-dot" style={{top: "15%", left: "8%", width: "4px", height: "4px", "--dx": "15px", "--dy": "-25px", animationDuration: "16s"}}></div>
          <div className="showcase-dot" style={{top: "35%", left: "22%", width: "3px", height: "3px", "--dx": "-20px", "--dy": "15px", animationDuration: "20s", animationDelay: "2s"}}></div>
          <div className="showcase-dot" style={{top: "75%", left: "12%", width: "5px", height: "5px", "--dx": "12px", "--dy": "25px", animationDuration: "18s", animationDelay: "1s"}}></div>
          <div className="showcase-dot" style={{top: "20%", left: "42%", width: "3px", height: "3px", "--dx": "-22px", "--dy": "-12px", animationDuration: "22s"}}></div>
          <div className="showcase-dot" style={{top: "60%", left: "52%", width: "4px", height: "4px", "--dx": "18px", "--dy": "-18px", animationDuration: "17s", animationDelay: "3s"}}></div>
          <div className="showcase-dot" style={{top: "10%", left: "72%", width: "4px", height: "4px", "--dx": "-12px", "--dy": "22px", animationDuration: "19s", animationDelay: "1.5s"}}></div>
          <div className="showcase-dot" style={{top: "45%", left: "82%", width: "3px", height: "3px", "--dx": "22px", "--dy": "-12px", animationDuration: "21s", animationDelay: "4s"}}></div>
          <div className="showcase-dot" style={{top: "80%", left: "68%", width: "5px", height: "5px", "--dx": "-12px", "--dy": "-22px", animationDuration: "15s", animationDelay: "0.5s"}}></div>
          <div className="showcase-dot" style={{top: "70%", left: "32%", width: "4px", height: "4px", "--dx": "22px", "--dy": "12px", animationDuration: "23s", animationDelay: "2.5s"}}></div>
          <div className="showcase-dot" style={{top: "30%", left: "62%", width: "3px", height: "3px", "--dx": "-12px", "--dy": "-28px", animationDuration: "17s", animationDelay: "5s"}}></div>
          <div className="showcase-dot" style={{top: "88%", left: "88%", width: "4px", height: "4px", "--dx": "-18px", "--dy": "15px", animationDuration: "18s", animationDelay: "3s"}}></div>
          <div className="showcase-dot" style={{top: "5%", left: "32%", width: "4px", height: "4px", "--dx": "12px", "--dy": "-8px", animationDuration: "20s", animationDelay: "1s"}}></div>
        </div>

        <div className="showcase-glow" aria-hidden="true"></div>

        <div className="app-section-grid">
          <div className="app-features-list">
            {triggers.map((t, idx) => (
              <button 
                key={t.key}
                className={`app-feature-btn ${activeIndex === idx ? 'active' : ''}`} 
                id={`trigger-app-${t.key === 'cart' ? 'chat' : t.key}`}
                type="button"
                onClick={() => handleManualClick(idx)}
              >
                <span className="app-feature-btn-num">{t.num}</span>
                <div className="app-feature-btn-text">
                  <h4>{t.label}</h4>
                  <p>{t.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="phone-mockup-wrapper">
            <div className="phone-container">
              <div className="phone-dynamic-island">
                <div className="dynamic-island-speaker"></div>
                <div className="dynamic-island-camera"></div>
              </div>

              <div className="phone-screen" id="phone-screen-target">
                {renderScreenContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(AppFeatures);
