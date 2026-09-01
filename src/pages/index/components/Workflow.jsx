import React, { useEffect, useRef, useState, useCallback } from 'react';

function Workflow() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Current active step: 0 = Step 1, 1 = Step 2, 2 = Step 3, 3 = Step 4
  const [currentStep, setCurrentStep] = useState(0);
  const currentStepRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const touchStartYRef = useRef(0);

  // Scroll reveal state to prevent React virtual DOM class wipes
  const [sectionRevealed, setSectionRevealed] = useState(false);
  const [cardsRevealed, setCardsRevealed] = useState([false, false, false, false]);

  // Manage scroll-reveal intersection observer declaratively inside React
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "how-it-works") {
            setSectionRevealed(true);
          } else if (entry.target.id === "workflow-step-1") {
            setCardsRevealed(prev => { const n = [...prev]; n[0] = true; return n; });
          } else if (entry.target.id === "workflow-step-2") {
            setCardsRevealed(prev => { const n = [...prev]; n[1] = true; return n; });
          } else if (entry.target.id === "workflow-step-3") {
            setCardsRevealed(prev => { const n = [...prev]; n[2] = true; return n; });
          } else if (entry.target.id === "workflow-step-4") {
            setCardsRevealed(prev => { const n = [...prev]; n[3] = true; return n; });
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
      const cards = section.querySelectorAll(".workflow-card");
      cards.forEach(card => observer.observe(card));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Scroll-controlled Step Progression (No continuous timers or automatic looping)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let isNearViewport = false;
    const COOLDOWN_MS = 450; // Tactile gesture debounce

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isNearViewport = entry.isIntersecting;
      });
    }, { threshold: 0.15 });

    observer.observe(section);

    const isEngagedInViewport = () => {
      if (!isNearViewport) return false;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Section is engaged when occupying the active viewport center
      return rect.top <= viewportHeight * 0.45 && rect.bottom >= viewportHeight * 0.55;
    };

    const handleWheel = (e) => {
      if (!isEngagedInViewport()) return;

      const now = Date.now();
      const isCoolingDown = now - lastScrollTimeRef.current < COOLDOWN_MS;

      if (e.deltaY > 15) {
        // User scrolls DOWN
        if (currentStepRef.current < 3) {
          e.preventDefault();
          if (!isCoolingDown) {
            currentStepRef.current += 1;
            setCurrentStep(currentStepRef.current);
            lastScrollTimeRef.current = now;
          }
        }
        // If currentStep >= 3, do NOT preventDefault -> allows smooth natural scroll down to next section
      } else if (e.deltaY < -15) {
        // User scrolls UP
        if (currentStepRef.current > 0) {
          e.preventDefault();
          if (!isCoolingDown) {
            currentStepRef.current -= 1;
            setCurrentStep(currentStepRef.current);
            lastScrollTimeRef.current = now;
          }
        }
        // If currentStep <= 0, do NOT preventDefault -> allows smooth natural scroll up to previous section
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!isEngagedInViewport() || !e.touches || e.touches.length === 0) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;
      const now = Date.now();
      const isCoolingDown = now - lastScrollTimeRef.current < COOLDOWN_MS;

      // Swiping UP (scrolling DOWN page)
      if (deltaY > 40) {
        if (currentStepRef.current < 3) {
          if (!isCoolingDown) {
            currentStepRef.current += 1;
            setCurrentStep(currentStepRef.current);
            lastScrollTimeRef.current = now;
            touchStartYRef.current = currentY;
          }
        }
      } 
      // Swiping DOWN (scrolling UP page)
      else if (deltaY < -40) {
        if (currentStepRef.current > 0) {
          if (!isCoolingDown) {
            currentStepRef.current -= 1;
            setCurrentStep(currentStepRef.current);
            lastScrollTimeRef.current = now;
            touchStartYRef.current = currentY;
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // HTML5 Canvas Static Particle field (renders crisp static dots on resize without continuous 60fps RAF loop)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function renderStaticParticles() {
      const parent = canvas.parentElement;
      if (!parent) return;

      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isMobile = window.innerWidth <= 768;
      const count = isMobile ? 18 : 60;

      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2.0 + 0.6;
        const opacity = Math.random() * 0.35 + 0.12;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${opacity})`;
        ctx.fill();
      }
    }

    renderStaticParticles();
    window.addEventListener("resize", renderStaticParticles);

    return () => {
      window.removeEventListener("resize", renderStaticParticles);
    };
  }, []);

  return (
    <section id="how-it-works" className={`section-padding scroll-reveal ${sectionRevealed ? 'reveal-active' : ''}`} ref={sectionRef}>
      <div className="grid-overlay" aria-hidden="true"></div>
      <div className="glow-blob-1" aria-hidden="true"></div>
      <div className="glow-blob-2" aria-hidden="true"></div>

      <div className="cyber-ring" style={{top: "15%", left: "85%", "--scale": "0.85", "--speed": "28s"}} aria-hidden="true"></div>
      <div className="cyber-cross" style={{top: "32%", left: "42%", "--scale": "1.1", "--speed": "22s"}} aria-hidden="true"></div>
      <div className="cyber-circle" style={{top: "68%", left: "14%", "--scale": "0.7", "--speed": "32s"}} aria-hidden="true"></div>
      <div className="cyber-cross" style={{top: "82%", left: "76%", "--scale": "0.95", "--speed": "24s"}} aria-hidden="true"></div>

      <div className="dots-background" aria-hidden="true">
        <canvas id="workflow-particles-canvas" ref={canvasRef}></canvas>
      </div>

      <div className="section-header">
        <h2 className="section-title">How GRED Works</h2>
        <p className="section-subtitle">A seamless, fully digital 4-step workflow connecting booking to finish in record time.</p>
      </div>

      <div className="workflow-grid">
        {/* Step 1 */}
        <div 
          className={`workflow-card scroll-reveal ${cardsRevealed[0] ? 'reveal-active' : ''} ${currentStep === 0 ? 'active' : ''} ${currentStep > 0 ? 'line-active completed' : ''}`} 
          id="workflow-step-1"
        >
          <span className="workflow-badge">Step 1</span>
          <div className="workflow-image-wrapper">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779412168/file_0000000062fc723082a1d9267f2d431e_tzovdm.png" alt="Choose Service" className="workflow-img" loading="lazy" />
          </div>
          <h3 className="workflow-card-title">Choose Service</h3>
          <p className="workflow-card-desc">Pick from our premium catalog of deep home cleaning, plumbing, or repairs.</p>
        </div>

        {/* Step 2 */}
        <div 
          className={`workflow-card scroll-reveal ${cardsRevealed[1] ? 'reveal-active' : ''} ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'line-active completed' : ''}`} 
          id="workflow-step-2"
        >
          <span className="workflow-badge">Step 2</span>
          <div className="workflow-image-wrapper">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779412159/file_00000000126871fbba8352056f10fab5_xsjufi.png" alt="Book Instantly" className="workflow-img" loading="lazy" />
          </div>
          <h3 className="workflow-card-title">Book Instantly</h3>
          <p className="workflow-card-desc">Input your location, choose a scheduling window, and receive upfront pricing.</p>
        </div>

        {/* Step 3 */}
        <div 
          className={`workflow-card scroll-reveal ${cardsRevealed[2] ? 'reveal-active' : ''} ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'line-active completed' : ''}`} 
          id="workflow-step-3"
        >
          <span className="workflow-badge">Step 3</span>
          <div className="workflow-image-wrapper">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779412193/file_00000000e8947209a0fec3e90e0f92d1_mmanta.png" alt="Provider Accepts" className="workflow-img" loading="lazy" />
          </div>
          <h3 className="workflow-card-title">Provider Accepts</h3>
          <p className="workflow-card-desc">An elite neighborhood crew confirms, sharing dynamic GPS coordinates.</p>
        </div>

        {/* Step 4 */}
        <div 
          className={`workflow-card scroll-reveal ${cardsRevealed[3] ? 'reveal-active' : ''} ${currentStep === 3 ? 'active' : ''}`} 
          id="workflow-step-4"
        >
          <span className="workflow-badge">Step 4</span>
          <div className="workflow-image-wrapper">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779412183/file_00000000f310720a8d6073c0d2ce0d6a_yqup8m.png" alt="Work Completed" className="workflow-img" loading="lazy" />
          </div>
          <h3 className="workflow-card-title">Work Completed</h3>
          <p className="workflow-card-desc">Your task is completed with active warranty support. Release payment securely.</p>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Workflow);
