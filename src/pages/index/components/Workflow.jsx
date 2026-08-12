import React, { useEffect, useRef, useState } from 'react';

function Workflow() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  
  // States for active class names on the workflow cards to run sequencer
  const [activeStates, setActiveStates] = useState([false, false, false, false]);
  const [lineActiveStates, setLineActiveStates] = useState([false, false, false, false]);
  const [completedStates, setCompletedStates] = useState([false, false, false, false]);

  // States for scroll reveal (reveal-active) to prevent React virtual DOM wipes
  const [sectionRevealed, setSectionRevealed] = useState(false);
  const [cardsRevealed, setCardsRevealed] = useState([false, false, false, false]);

  // Manage scroll-reveal intersection observer declaratively inside React (prevents re-render class wipes)
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

  // Workflow step sequencer logic (matches script.js 388-468)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let activeIndex = 0;
    let intervalId = null;
    let completedTimeout = null;
    const STEP_DURATION = 1100; // 1.1 seconds per step

    function activateStep(index) {
      setActiveStates(prev => prev.map((_, idx) => idx === index));
      
      setLineActiveStates(prev => prev.map((_, idx) => idx < index));
      setCompletedStates(prev => prev.map((_, idx) => idx < index));
    }

    function startLoop() {
      stopLoop(); // Clear any existing
      activeIndex = 0;
      activateStep(activeIndex);

      intervalId = setInterval(() => {
        activeIndex = (activeIndex + 1) % 5; // 4 cards + 1 final completion state

        if (activeIndex === 4) {
          // Final completion state: all cards completed, final connector active
          setActiveStates([false, false, false, false]);
          setLineActiveStates([true, true, true, true]);
          setCompletedStates([true, true, true, true]);

          // Pause in completed state, then restart
          completedTimeout = setTimeout(() => {
            if (intervalId) {
              activeIndex = 0;
              activateStep(activeIndex);
            }
          }, 1100);
        } else {
          activateStep(activeIndex);
        }
      }, STEP_DURATION);
    }

    function stopLoop() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      if (completedTimeout) {
        clearTimeout(completedTimeout);
        completedTimeout = null;
      }
      // Reset states
      setActiveStates([false, false, false, false]);
      setLineActiveStates([false, false, false, false]);
      setCompletedStates([false, false, false, false]);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startLoop();
        } else {
          stopLoop();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(section);

    return () => {
      observer.disconnect();
      stopLoop();
    };
  }, []);

  // HTML5 Canvas Particle System logic (matches script.js 249-385)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles = [];
    let activeParticleCount = window.innerWidth <= 768 ? 20 : 75;
    let animationId = null;
    let isIntersecting = false;

    function resizeCanvas() {
      const parent = canvas.parentElement;
      if (parent) {
        const prevWidth = canvas.width;
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        
        const newCount = window.innerWidth <= 768 ? 20 : 75;
        if (newCount !== activeParticleCount || prevWidth === 0) {
          initParticles();
        }
      }
    }

    function initParticles() {
      particles = [];
      const count = window.innerWidth <= 768 ? 20 : 75;
      activeParticleCount = count;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 2.2 + 0.6,
          baseOpacity: Math.random() * 0.45 + 0.15,
          opacity: 0,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.015 + 0.005,
          isBlurred: Math.random() < 0.25
        });
      }
    }

    function animate() {
      if (!isIntersecting) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isMobile = window.innerWidth <= 768;

      if (!isMobile) {
        ctx.lineWidth = 0.55;
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              const alpha = (1 - dist / 100) * 0.085 * Math.min(p1.opacity, p2.opacity);
              if (alpha > 0) {
                ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        p.pulsePhase += p.pulseSpeed;
        p.opacity = p.baseOpacity + Math.sin(p.pulsePhase) * 0.12;
        if (p.opacity < 0.05) p.opacity = 0.05;
        if (p.opacity > 0.7) p.opacity = 0.7;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (!isMobile && p.isBlurred) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#f97316";
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `rgba(249, 115, 22, ${p.opacity})`;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationId = requestAnimationFrame(animate);
    }

    const section = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isIntersecting = true;
          resizeCanvas();
          if (!animationId) {
            animate();
          }
        } else {
          isIntersecting = false;
          if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
          }
        }
      });
    }, { threshold: 0.05 });

    observer.observe(section);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) cancelAnimationFrame(animationId);
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
        <div className={`workflow-card scroll-reveal ${cardsRevealed[0] ? 'reveal-active' : ''} ${activeStates[0] ? 'active' : ''} ${lineActiveStates[0] ? 'line-active' : ''} ${completedStates[0] ? 'completed' : ''}`} id="workflow-step-1">
          <span className="workflow-badge">Step 1</span>
          <div className="workflow-image-wrapper">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779412168/file_0000000062fc723082a1d9267f2d431e_tzovdm.png" alt="Choose Service" className="workflow-img" loading="lazy" />
          </div>
          <h3 className="workflow-card-title">Choose Service</h3>
          <p className="workflow-card-desc">Pick from our premium catalog of deep home cleaning, plumbing, or repairs.</p>
        </div>

        {/* Step 2 */}
        <div className={`workflow-card scroll-reveal ${cardsRevealed[1] ? 'reveal-active' : ''} ${activeStates[1] ? 'active' : ''} ${lineActiveStates[1] ? 'line-active' : ''} ${completedStates[1] ? 'completed' : ''}`} id="workflow-step-2">
          <span className="workflow-badge">Step 2</span>
          <div className="workflow-image-wrapper">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779412159/file_00000000126871fbba8352056f10fab5_xsjufi.png" alt="Book Instantly" className="workflow-img" loading="lazy" />
          </div>
          <h3 className="workflow-card-title">Book Instantly</h3>
          <p className="workflow-card-desc">Input your location, choose a scheduling window, and receive upfront pricing.</p>
        </div>

        {/* Step 3 */}
        <div className={`workflow-card scroll-reveal ${cardsRevealed[2] ? 'reveal-active' : ''} ${activeStates[2] ? 'active' : ''} ${lineActiveStates[2] ? 'line-active' : ''} ${completedStates[2] ? 'completed' : ''}`} id="workflow-step-3">
          <span className="workflow-badge">Step 3</span>
          <div className="workflow-image-wrapper">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779412193/file_00000000e8947209a0fec3e90e0f92d1_mmanta.png" alt="Provider Accepts" className="workflow-img" loading="lazy" />
          </div>
          <h3 className="workflow-card-title">Provider Accepts</h3>
          <p className="workflow-card-desc">An elite neighborhood crew confirms, sharing dynamic GPS coordinates.</p>
        </div>

        {/* Step 4 */}
        <div className={`workflow-card scroll-reveal ${cardsRevealed[3] ? 'reveal-active' : ''} ${activeStates[3] ? 'active' : ''} ${lineActiveStates[3] ? 'line-active' : ''} ${completedStates[3] ? 'completed' : ''}`} id="workflow-step-4">
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

export default Workflow;
