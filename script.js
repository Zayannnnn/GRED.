let heroVisible = true;
let heroPointer = { x: 0, y: 0 };
let heroScrollTilt = 0;
let animationFrameId = null;

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function getScrollTargetFromLink(link) {
  if (!link) return null;
  if (link.dataset && link.dataset.scrollTarget) {
    return link.dataset.scrollTarget;
  }
  const href = link.getAttribute("href") || "";
  const match = href.match(/[?&]scroll=([^&]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function scrollToTargetId(targetId) {
  if (!targetId) return;
  const target = document.getElementById(targetId);
  if (!target) return;
  const header = document.getElementById("site-header");
  const headerHeight = header ? header.offsetHeight : 0;
  const targetTop = Math.max(target.getBoundingClientRect().top + window.scrollY - headerHeight + 1, 0);
  window.scrollTo({ top: targetTop, behavior: "smooth" });
}

function scrollToSectionFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const scrollTarget = params.get("scroll");
  if (!scrollTarget) return;
  const element = document.getElementById(scrollTarget);
  if (!element) return;
  const header = document.getElementById("site-header");
  const headerHeight = header ? header.offsetHeight : 0;
  const targetTop = Math.max(element.getBoundingClientRect().top + window.scrollY - headerHeight + 1, 0);
  window.scrollTo({ top: targetTop, behavior: "smooth" });
  const cleanPath = window.location.pathname === "/index.html" ? "/" : window.location.pathname.replace(/index\.html$/, "") || "/";
  window.history.replaceState(null, "", cleanPath);
}

function scheduleNonCritical(callback) {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(callback, { timeout: 600 });
  } else {
    setTimeout(callback, 260);
  }
}

function initHeroExperience() {
  const heroSection = document.getElementById("hero-section");
  const heroCanvas = document.getElementById("hero-canvas");
  const ticker = document.getElementById("booking-ticker-msg");
  if (!heroSection || !heroCanvas) return;

  const tickerMessages = [
    "Deep cleaning accepted",
    "Electrician arriving in 4 min",
    "Car service matched nearby",
    "Plumber verified and dispatched",
    "Partner payout updated live",
  ];

  let pointerX = 0;
  let pointerY = 0;
  let currentX = 0;
  let currentY = 0;
  let tickerIndex = 0;

  heroSection.addEventListener("pointermove", (event) => {
    const rect = heroSection.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    heroPointer = { x: pointerX, y: pointerY };
  });

  heroSection.addEventListener("pointerleave", () => {
    pointerX = 0;
    pointerY = 0;
    heroPointer = { x: 0, y: 0 };
  });

  let heroHeight = heroSection.offsetHeight || window.innerHeight;
  window.addEventListener("resize", () => {
    heroHeight = heroSection.offsetHeight || window.innerHeight;
  }, { passive: true });

  window.addEventListener("scroll", () => {
    heroScrollTilt = Math.min(1, Math.max(0, window.scrollY / heroHeight));
  }, { passive: true });

  if (ticker) {
    setInterval(() => {
      tickerIndex = (tickerIndex + 1) % tickerMessages.length;
      ticker.style.opacity = "0";
      ticker.style.transform = "translateY(5px)";
      setTimeout(() => {
        ticker.textContent = tickerMessages[tickerIndex];
        ticker.style.opacity = "1";
        ticker.style.transform = "translateY(0)";
      }, 180);
    }, 2400);
  }

  function animateHero() {
    if (!heroVisible) {
      animationFrameId = null;
      return;
    }
    currentX = lerp(currentX, pointerX, 0.08);
    currentY = lerp(currentY, pointerY, 0.08);
    const rotateX = currentY * -5 + heroScrollTilt * 2;
    const rotateY = currentX * 6;
    const translateY = heroScrollTilt * -18;
    heroCanvas.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${currentX * 8}px, ${translateY + currentY * 8}px, 0)`;
    animationFrameId = requestAnimationFrame(animateHero);
  }

  if (heroVisible) {
    animationFrameId = requestAnimationFrame(animateHero);
  }

  window.triggerAnimateHero = () => {
    if (!animationFrameId && heroVisible) {
      animationFrameId = requestAnimationFrame(animateHero);
    }
  };
}


function initSiteHeaderNav() {
  const header = document.getElementById("site-header");
  const toggle = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const closeButton = document.getElementById("mobile-drawer-close");
  const links = document.querySelectorAll(".site-nav-links a, .mobile-nav-links a, .footer-links a, .brand-link");

  if (header) {
    const updateHeader = () => {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }

  const closeDrawer = () => {
    if (!drawer || !toggle) return;
    drawer.classList.remove("open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
  };

  const openDrawer = () => {
    if (!drawer || !toggle) return;
    drawer.classList.add("open");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("nav-open");
  };

  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      if (drawer.classList.contains("open")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    drawer.addEventListener("click", (event) => {
      if (event.target === drawer) closeDrawer();
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", closeDrawer);
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = getScrollTargetFromLink(link);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      event.preventDefault();
      closeDrawer();
      scrollToTargetId(targetId);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer();
  });
}

// Setup simple floating background particles
function initParticles() {
  const container = document.getElementById("particles");
  if (!container) return;
  container.innerHTML = "";
  const isMobile = window.innerWidth <= 768;
  const count = isMobile ? 8 : 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    const size = Math.random() * 3 + 2;
    p.style.position = "absolute";
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.background = i % 5 === 0 ? "#000000" : "#FFB200";
    p.style.borderRadius = "50%";
    p.style.opacity = Math.random() * 0.13 + 0.04;
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = Math.random() * 100 + "vh";
    p.style.filter = "blur(0.5px)";
    p.style.animation = `float ${Math.random() * 7 + 10}s ease-in-out infinite`;
    p.style.animationDelay = Math.random() * -8 + "s";
    p.style.willChange = "transform";
    container.appendChild(p);
  }
}

// 1. SCROLL REVEAL INTERSECTION OBSERVER
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        observer.unobserve(entry.target); // Triggers once for optimal rendering
      }
    });
  }, observerOptions);

  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    observer.observe(el);
  });
}

// 1.5. HIGH-PERFORMANCE 70+ CANVAS PARTICLE SYSTEM (CINEMATIC BACKDROP)
function initWorkflowParticles() {
  const canvas = document.getElementById("workflow-particles-canvas");
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

  window.addEventListener("resize", resizeCanvas);

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

  resizeCanvas();

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

  const section = document.getElementById("how-it-works");
  if (section) {
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
  }
}

// 2. PREMIUM INTERACTIVE PROCESS FLOW SEQUENCER
function initInteractiveWorkflow() {
  const section = document.getElementById("how-it-works");
  const cards = document.querySelectorAll(".workflow-card");
  if (!section || cards.length === 0) return;

  // Initialize Canvas Particles Backdrop
  initWorkflowParticles();

  let activeIndex = 0;
  let intervalId = null;
  const STEP_DURATION = 1100; // 1.1 seconds per step

  function activateStep(index) {
    cards.forEach((card, idx) => {
      // Remove active states
      card.classList.remove("active", "line-active", "completed");
      
      if (idx < index) {
        // Steps before the active one are completed (stay colored)
        card.classList.add("completed");
        card.classList.add("line-active"); // Lights up the connector line
      } else if (idx === index) {
        // Active step gets full scale and orange glow
        card.classList.add("active");
      }
    });
  }

  function startLoop() {
    stopLoop(); // Clear any existing intervals
    activeIndex = 0;
    activateStep(activeIndex);
    
    intervalId = setInterval(() => {
      activeIndex = (activeIndex + 1) % (cards.length + 1);
      
      if (activeIndex === cards.length) {
        // Final completion state: all cards fully colored, final connector active
        cards.forEach(card => {
          card.classList.remove("active");
          card.classList.add("completed");
          card.classList.add("line-active");
        });
        
        // Pause in completed state, then restart
        setTimeout(() => {
          if (intervalId) { // Check if we are still active
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
    // Reset cards to default state when section is hidden
    cards.forEach(card => {
      card.classList.remove("active", "line-active", "completed");
    });
  }

  // Optimize performance: observer triggers looping ONLY when section is visible!
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
}

// 3. STATS COUNT-UP ANIMATION
function initStatsCounter() {
  const statsSection = document.getElementById("stats");
  if (!statsSection) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsSection);

  function animateCounters() {
    const counters = [
      { id: "counter-customers", suffix: "+", target: 500 },
      { id: "counter-completed", suffix: "+", target: 1000 },
      { id: "counter-providers", suffix: "+", target: 250 },
      { id: "counter-cities", suffix: "+", target: 24 },
    ];

    counters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (!el) return;

      const duration = 2000; // 2 seconds animation time
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress * (2 - progress); // Quadratic ease out
        const currentValue = Math.floor(easeProgress * c.target);

        el.textContent = currentValue.toLocaleString() + c.suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = c.target.toLocaleString() + c.suffix;
        }
      }

      requestAnimationFrame(update);
    });
  }
}

// 4. INTERACTIVE MOBILE APP SIMULATOR (Redesigned for Premium Light White-Orange Interface)
function initAppSimulator() {
  const screenTarget = document.getElementById("phone-screen-target");
  if (!screenTarget) return;

  const triggers = [
    { id: "trigger-app-booking", key: "booking" },
    { id: "trigger-app-tracking", key: "tracking" },
    { id: "trigger-app-chat", key: "cart" },
    { id: "trigger-app-status", key: "status" },
    { id: "trigger-app-dashboard", key: "history" },
  ];

  const screenTemplates = {
    booking: `
      <div class="phone-app-header">
        <span class="phone-app-brand">GRED</span>
        <div class="phone-app-user-avatar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 14px; height: 14px;">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      <div style="margin-bottom: 18px; position: relative;">
        <input type="text" placeholder="Search cleaning, plumbing..." disabled style="width: 100%; padding: 10px 14px 10px 32px; border-radius: 10px; border: 1px solid #cbd5e1; background: #ffffff; color:#000000; font-size:0.8rem;" />
        <span style="position: absolute; left: 10px; top: 9px; font-size: 0.8rem;">🔍</span>
      </div>
      <div style="border-radius:12px; overflow:hidden; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); width: 100%; aspect-ratio: 16 / 9;">
        <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1777323674/20260428_022743_uurqty.png" style="width:100%; height:100%; object-fit:cover;" />
      </div>
      <h5 style="font-size:0.85rem; margin-bottom:10px; color:#000000; font-weight:700;">Select Category</h5>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom:20px;">
        <div style="background:#ffffff; border:2px solid #FFB200; border-radius:12px; padding:10px 8px; text-align:center; font-size:0.75rem; font-weight:700; color:#000000; display:flex; flex-direction:column; align-items:center; box-shadow: 0 4px 10px rgba(255,178,0,0.06);">
          <div style="width:52px; height:52px; border-radius:50%; background:rgba(255,178,0,0.05); border:1px solid #FFB200; display:flex; align-items:center; justify-content:center; overflow:hidden; margin-bottom:6px;">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363872/file_000000004ca07208b97fa5da8c067d03_fzrobj.png" style="width:80%; height:80%; object-fit:contain;" />
          </div>
          House Help
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:10px 8px; text-align:center; font-size:0.75rem; font-weight:600; color:#4b5563; display:flex; flex-direction:column; align-items:center; box-shadow: 0 2px 6px rgba(0,0,0,0.015);">
          <div style="width:52px; height:52px; border-radius:50%; background:#f8fafc; border:1px solid rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:center; overflow:hidden; margin-bottom:6px;">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363890/file_00000000ae3072088b3e5f8eb2acc0e6_kmtkwe.png" style="width:80%; height:80%; object-fit:contain;" />
          </div>
          Car Service
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:10px 8px; text-align:center; font-size:0.75rem; font-weight:600; color:#4b5563; display:flex; flex-direction:column; align-items:center; box-shadow: 0 2px 6px rgba(0,0,0,0.015);">
          <div style="width:52px; height:52px; border-radius:50%; background:#f8fafc; border:1px solid rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:center; overflow:hidden; margin-bottom:6px;">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363808/file_0000000065347208befab56e456ffd75_jlc1m1.png" style="width:80%; height:80%; object-fit:contain;" />
          </div>
          Plumbing
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:10px 8px; text-align:center; font-size:0.75rem; font-weight:600; color:#4b5563; display:flex; flex-direction:column; align-items:center; box-shadow: 0 2px 6px rgba(0,0,0,0.015);">
          <div style="width:52px; height:52px; border-radius:50%; background:#f8fafc; border:1px solid rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:center; overflow:hidden; margin-bottom:6px;">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363750/file_0000000068d8720884b41c36d2c4f2ad_fj7lff.png" style="width:80%; height:80%; object-fit:contain;" />
          </div>
          Electrical
        </div>
      </div>
    `,
    tracking: `
      <div class="phone-app-header">
        <span style="font-weight:800; font-size:0.9rem; color:#000000;">Live Dispatch Map</span>
        <span style="color:#10b981; font-size:0.7rem; font-weight:700; display:flex; align-items:center; gap:4px;">● Connected</span>
      </div>
      <div style="height: 180px; width:100%; border-radius:16px; background: radial-gradient(circle, #f8fafc 0%, #f1f5f9 100%); border:1px solid #e2e8f0; position:relative; overflow:hidden; margin-bottom:20px; box-shadow:inset 0 0 10px rgba(0,0,0,0.02);">
        <div style="position:absolute; inset:0; background-image:linear-gradient(rgba(0,0,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.015) 1px, transparent 1px); background-size:20px 20px;"></div>
        <div style="position:absolute; width:130px; height:2px; background:rgba(255,178,0,0.15); top:80px; left:40px; transform:rotate(25deg);"></div>
        <div style="position:absolute; top:70px; left:120px; font-size:1.4rem; filter:drop-shadow(0 4px 6px rgba(0,0,0,0.08)); animation: float 2s ease-in-out infinite;">🚴</div>
        <div style="position:absolute; top:110px; left:60px; font-size:1.4rem; filter:drop-shadow(0 4px 6px rgba(0,0,0,0.08));">🏠</div>
      </div>
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; padding:14px; display:flex; align-items:center; gap:12px; box-shadow:0 4px 10px rgba(0,0,0,0.015);">
        <div style="width:36px; height:36px; border-radius:50%; background:#FFB200; display:flex; align-items:center; justify-content:center; color:#ffffff; font-weight:800; font-size:0.85rem;">RS</div>
        <div style="flex-grow:1;">
          <h6 style="font-size:0.8rem; font-weight:700; color:#000000; margin-bottom:2px;">Rohan Sharma</h6>
          <p style="font-size:0.65rem; color:#6b7280;">House Help Specialist — 4.9 ★</p>
        </div>
        <div style="text-align:right;">
          <span style="font-size:0.75rem; font-weight:800; color:#FFB200; display:block;">4 MINS</span>
          <span style="font-size:0.6rem; color:#6b7280;">Arriving</span>
        </div>
      </div>
    `,
    cart: `
      <div class="phone-app-header" style="border-bottom:1px solid #e2e8f0; padding-bottom:8px; margin-bottom:12px;">
        <span style="font-weight:800; font-size:0.9rem; color:#000000;">Your Cart</span>
        <span style="background:rgba(255,178,0,0.08); color:#FFB200; padding:2px 8px; border-radius:6px; font-size:0.6rem; font-weight:700;">1 Item Added</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:12px; height:180px; overflow-y:auto; margin-bottom:12px;">
        <div style="display:flex; align-items:center; gap:10px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:10px;">
          <div style="width:38px; height:38px; border-radius:8px; background:#ffffff; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0;">
            <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363872/file_000000004ca07208b97fa5da8c067d03_fzrobj.png" style="width:85%; height:85%; object-fit:contain;" />
          </div>
          <div style="flex-grow:1;">
            <span style="font-size:0.75rem; font-weight:700; color:#000000; display:block;">Full House Cleaning</span>
            <span style="font-size:0.6rem; color:#6b7280;">Standard 2BHK Plan</span>
          </div>
          <span style="font-size:0.75rem; font-weight:800; color:#FFB200;">$89.00</span>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:10px; font-size:0.7rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px; color:#4b5563;">
            <span>Subtotal</span>
            <span>$89.00</span>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:6px; color:#4b5563;">
            <span>Matching Fee</span>
            <span style="color:#10b981;">FREE</span>
          </div>
          <div style="display:flex; justify-content:space-between; margin-bottom:6px; color:#4b5563;">
            <span>GRED Trust Warranty</span>
            <span>$1.99</span>
          </div>
          <div style="display:flex; justify-content:space-between; border-top:1px dashed #e2e8f0; padding-top:6px; font-weight:800; color:#000000; font-size:0.75rem;">
            <span>Total Amount</span>
            <span>$90.99</span>
          </div>
        </div>
      </div>
      <button type="button" style="width:100%; background:#FFB200; border:none; padding:10px; border-radius:10px; font-weight:800; font-size:0.75rem; color:#ffffff; cursor:pointer; box-shadow:0 4px 10px rgba(255,178,0,0.15);">Proceed to Escrow Checkout</button>
    `,
    status: `
      <div class="phone-app-header">
        <span style="font-weight:800; font-size:0.85rem; color:#000000;">Job Progress Tracker</span>
        <span style="color:#FFB200; font-size:0.7rem; font-weight:700;">ID #88749</span>
      </div>
      <div style="display:flex; justify-content:center; margin-bottom:20px;">
        <div style="width:90px; height:90px; border-radius:50%; border:6px solid #f1f5f9; border-top-color:#FFB200; display:flex; align-items:center; justify-content:center; flex-direction:column; position:relative; animation: pulse 2s infinite alternate;">
          <span style="font-size:1.1rem; font-weight:800; color:#000000;">75%</span>
          <span style="font-size:0.5rem; color:#6b7280; text-transform:uppercase;">Active</span>
        </div>
      </div>
      <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:10px;">
        <div style="display:flex; align-items:center; gap:10px; font-size:0.75rem; color:#10b981;">
          <div style="width:16px; height:16px; border-radius:50%; background:#10b981; color:#ffffff; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:0.5rem;">✓</div>
          <div>
            <span style="font-weight:700; display:block; color:#000000;">Booking Confirmed</span>
            <span style="font-size:0.6rem; color:#6b7280;">10:00 AM</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:10px; font-size:0.75rem; color:#10b981;">
          <div style="width:16px; height:16px; border-radius:50%; background:#10b981; color:#ffffff; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:0.5rem;">✓</div>
          <div>
            <span style="font-weight:700; display:block; color:#000000;">Provider Dispatched</span>
            <span style="font-size:0.6rem; color:#6b7280;">10:15 AM</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:10px; font-size:0.75rem; color:#FFB200;">
          <div style="width:16px; height:16px; border-radius:50%; background:#FFB200; color:#ffffff; font-weight:800; display:flex; align-items:center; justify-content:center; font-size:0.5rem;">▶</div>
          <div>
            <span style="font-weight:700; display:block; color:#FFB200;">Work in Progress</span>
            <span style="font-size:0.6rem; color:#6b7280;">Active cleaning cycle...</span>
          </div>
        </div>
      </div>
    `,
    history: `
      <div class="phone-app-header" style="border-bottom:1px solid #e2e8f0; padding-bottom:8px; margin-bottom:12px;">
        <span style="font-weight:800; font-size:0.9rem; color:#000000;">Booking History</span>
        <span style="background:rgba(16,185,129,0.08); color:#10b981; padding:2px 8px; border-radius:6px; font-size:0.6rem; font-weight:700;">Completed</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:10px; height:225px; overflow-y:auto;">
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:10px; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; align-items:center; gap:8px; width:100%;">
            <div style="width:32px; height:32px; border-radius:6px; background:#f8fafc; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0;">
              <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363750/file_0000000068d8720884b41c36d2c4f2ad_fj7lff.png" style="width:85%; height:85%; object-fit:contain;" />
            </div>
            <div style="flex-grow:1;">
              <span style="font-size:0.75rem; font-weight:700; color:#000000; display:block;">Electrical Repair</span>
              <span style="font-size:0.6rem; color:#6b7280;">May 15, 2026 • 2:30 PM</span>
            </div>
            <span style="background:rgba(16,185,129,0.08); color:#10b981; padding:2px 6px; border-radius:4px; font-size:0.55rem; font-weight:800;">COMPLETED</span>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px dashed #e2e8f0; padding-top:6px; width:100%;">
            <span style="font-size:0.7rem; font-weight:700; color:#000000;">Paid: $45.00</span>
            <button type="button" style="background:#ffffff; border:1px solid #cbd5e1; padding:3px 8px; border-radius:6px; font-size:0.6rem; font-weight:700; color:#4b5563; cursor:pointer;">Rebook</button>
          </div>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:10px; display:flex; flex-direction:column; gap:8px;">
          <div style="display:flex; align-items:center; gap:8px; width:100%;">
            <div style="width:32px; height:32px; border-radius:6px; background:#f8fafc; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0;">
              <img src="https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363808/file_0000000065347208befab56e456ffd75_jlc1m1.png" style="width:85%; height:85%; object-fit:contain;" />
            </div>
            <div style="flex-grow:1;">
              <span style="font-size:0.75rem; font-weight:700; color:#000000; display:block;">Plumbing Service</span>
              <span style="font-size:0.6rem; color:#6b7280;">Apr 28, 2026 • 11:00 AM</span>
            </div>
            <span style="background:rgba(16,185,129,0.08); color:#10b981; padding:2px 6px; border-radius:4px; font-size:0.55rem; font-weight:800;">COMPLETED</span>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px dashed #e2e8f0; padding-top:6px; width:100%;">
            <span style="font-size:0.7rem; font-weight:700; color:#000000;">Paid: $65.00</span>
            <button type="button" style="background:#ffffff; border:1px solid #cbd5e1; padding:3px 8px; border-radius:6px; font-size:0.6rem; font-weight:700; color:#4b5563; cursor:pointer;">Rebook</button>
          </div>
        </div>
      </div>
    `
  };

  let currentIndex = 0;
  let cycleTimer = null;
  let pauseTimer = null;

  function switchTab(index) {
    currentIndex = index;
    const t = triggers[currentIndex];
    const btn = document.getElementById(t.id);
    if (!btn) return;

    triggers.forEach(x => {
      const triggerBtn = document.getElementById(x.id);
      if (triggerBtn) triggerBtn.classList.remove("active");
    });
    btn.classList.add("active");
    
    // Update screen content with elegant smooth transitions (opacity fade + translateY offset)
    screenTarget.style.opacity = "0";
    screenTarget.style.transform = "translateY(8px)";
    setTimeout(() => {
      screenTarget.innerHTML = screenTemplates[t.key];
      screenTarget.style.opacity = "1";
      screenTarget.style.transform = "translateY(0)";
    }, 180);
  }

  function startCycling() {
    stopCycling();
    cycleTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % triggers.length;
      switchTab(currentIndex);
    }, 3000);
  }

  function stopCycling() {
    if (cycleTimer) {
      clearInterval(cycleTimer);
      cycleTimer = null;
    }
  }

  function handleManualClick(index) {
    stopCycling();
    if (pauseTimer) {
      clearTimeout(pauseTimer);
    }
    
    switchTab(index);

    // Pause auto-switch briefly for 6 seconds, then resume cycling
    pauseTimer = setTimeout(() => {
      startCycling();
    }, 6000);
  }

  triggers.forEach((t, idx) => {
    const btn = document.getElementById(t.id);
    if (!btn) return;
    btn.addEventListener("click", () => {
      handleManualClick(idx);
    });
  });

  // Start automatic switching on load
  startCycling();
}

// 5. FAQ ACCORDIONS TOGGLE
function initFaqAccordion() {
  document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const body = item.querySelector(".faq-body");
      const isOpen = item.classList.contains("active");

      // Close other accordion panels
      document.querySelectorAll(".faq-item").forEach(x => {
        if (x !== item) {
          x.classList.remove("active");
          x.querySelector(".faq-body").style.maxHeight = null;
          x.querySelector(".faq-header").setAttribute("aria-expanded", "false");
        }
      });

      if (isOpen) {
        item.classList.remove("active");
        body.style.maxHeight = null;
        header.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px";
        header.setAttribute("aria-expanded", "true");
      }
    });

    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        header.click();
      }
    });
  });
}

// Performance Optimization: Check if the hero section is in standard view height
function initHeroVisibility() {
  const heroSection = document.getElementById("hero-section");
  if (!heroSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      heroVisible = entry.isIntersecting;
      if (heroVisible && window.triggerAnimateHero) {
        window.triggerAnimateHero();
      }
    });
  }, { threshold: 0.05 });

  observer.observe(heroSection);
}

// Contact form placeholder submission feedback (Premium UX touch)
function initContactForm() {
  const form = document.getElementById("gred-contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("btn-contact-submit");
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = "Sending Request...";
    submitBtn.style.background = "#22c55e";
    submitBtn.style.borderColor = "#22c55e";
    submitBtn.style.color = "#ffffff";
    
    setTimeout(() => {
      alert("Thank you! Your GRED service inquiry has been received. Our regional provider desk will contact you shortly.");
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.style.background = "";
      submitBtn.style.borderColor = "";
      submitBtn.style.color = "";
    }, 1200);
  });
}

// Upgraded auto-flowing loop services carousel (app-like marketplace slider)
function initServicesCarousel() {
  const wrapper = document.querySelector(".services-carousel-wrapper");
  const grid = document.querySelector(".services-grid");
  if (!wrapper || !grid) return;

  const originalCards = Array.from(grid.children);
  if (originalCards.length === 0) return;

  originalCards.forEach((card) => {
    const clone = card.cloneNode(true);
    grid.appendChild(clone);
  });

  let scrollSpeed = 0.6;
  let scrollPosition = wrapper.scrollLeft;
  let isInteracting = false;
  let interactionTimeout = null;
  let animationId = null;

  let halfWidth = (wrapper.scrollWidth - wrapper.clientWidth) / 2;
  function updateHalfWidth() {
    halfWidth = (wrapper.scrollWidth - wrapper.clientWidth) / 2;
  }
  window.addEventListener("resize", updateHalfWidth, { passive: true });

  function step() {
    if (!isInteracting) {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }
      wrapper.scrollLeft = Math.round(scrollPosition);
    } else {
      scrollPosition = wrapper.scrollLeft;
    }
    animationId = requestAnimationFrame(step);
  }

  function pause() {
    isInteracting = true;
    if (interactionTimeout) clearTimeout(interactionTimeout);
  }

  function resume() {
    interactionTimeout = setTimeout(() => {
      isInteracting = false;
      scrollPosition = wrapper.scrollLeft;
    }, 1200);
  }

  wrapper.addEventListener("mouseenter", pause);
  wrapper.addEventListener("mouseleave", resume);
  wrapper.addEventListener("touchstart", pause, { passive: true });
  wrapper.addEventListener("touchend", resume);
  
  wrapper.addEventListener("scroll", () => {
    if (wrapper.scrollLeft >= halfWidth * 2 - 5) {
      wrapper.scrollLeft = wrapper.scrollLeft - halfWidth;
    } else if (wrapper.scrollLeft <= 0) {
      wrapper.scrollLeft = halfWidth;
    }
  }, { passive: true });

  animationId = requestAnimationFrame(step);
}

// 5. TESTIMONIALS SLIDER / CAROUSEL CONTROLLER
function initTestimonialsCarousel() {
  const track = document.getElementById("testimonials-track");
  const indicatorContainer = document.getElementById("testimonials-indicators");
  if (!track || !indicatorContainer) return;

  const cards = Array.from(track.querySelectorAll(".testimonial-card"));
  if (cards.length === 0) return;

  let currentIndex = 0;
  let autoPlayTimer = null;
  let isTransitioning = false;
  let isHovered = false;
  let userInterrupted = false;
  let interruptTimeout = null;

  // Calculate visible cards based on screen size
  function getVisibleCardsCount() {
    const width = window.innerWidth;
    if (width > 768) return 3;
    if (width > 500) return 2;
    return 1;
  }

  // Calculate total sliding pages / slide steps
  function getTotalPages() {
    const visibleCount = getVisibleCardsCount();
    return Math.max(1, cards.length - visibleCount + 1);
  }

  // Update indicators dynamically
  function updateIndicators() {
    indicatorContainer.innerHTML = "";
    const totalPages = getTotalPages();
    
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("button");
      dot.classList.add("indicator-dot");
      if (i === currentIndex) {
        dot.classList.add("active");
      }
      dot.setAttribute("aria-label", `Go to slide page ${i + 1}`);
      dot.addEventListener("click", () => {
        if (isTransitioning) return;
        goToIndex(i);
        handleUserInteraction();
      });
      indicatorContainer.appendChild(dot);
    }
  }

  // Slide to a specific index
  function goToIndex(index) {
    const totalPages = getTotalPages();
    if (index < 0) {
      currentIndex = totalPages - 1;
    } else if (index >= totalPages) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    isTransitioning = true;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 0;
    
    // Apply smooth hardware-accelerated transform
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    // Update indicator dots active state
    const dots = indicatorContainer.querySelectorAll(".indicator-dot");
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    setTimeout(() => {
      isTransitioning = false;
    }, 750); // Matches track transition-duration
  }

  // Move next in loop
  function moveNext() {
    goToIndex(currentIndex + 1);
  }

  // Start autoplay timer
  function startAutoplay() {
    stopAutoplay();
    if (userInterrupted) return; // Don't autoplay if user manually interacted recently
    
    autoPlayTimer = setInterval(() => {
      if (!isHovered && !userInterrupted) {
        moveNext();
      }
    }, 4500); // Swaps every 4.5 seconds
  }

  // Stop autoplay timer
  function stopAutoplay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Pause briefly on user interaction and resume after 6 seconds
  function handleUserInteraction() {
    userInterrupted = true;
    stopAutoplay();

    if (interruptTimeout) clearTimeout(interruptTimeout);
    interruptTimeout = setTimeout(() => {
      userInterrupted = false;
      startAutoplay();
    }, 6000); // Resumes autoplay 6 seconds after last manual click
  }

  // Setup event listeners
  track.addEventListener("mouseenter", () => {
    isHovered = true;
    stopAutoplay();
  });

  track.addEventListener("mouseleave", () => {
    isHovered = false;
    startAutoplay();
  });

  track.addEventListener("touchstart", () => {
    isHovered = true;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener("touchend", () => {
    isHovered = false;
    startAutoplay();
  });

  // Handle browser window resizing
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Recalculate indicators and jump to corrected index to avoid layout drift
      const maxPages = getTotalPages();
      if (currentIndex >= maxPages) {
        currentIndex = maxPages - 1;
      }
      updateIndicators();
      goToIndex(currentIndex);
    }, 150);
  });

  // Initialize
  updateIndicators();
  goToIndex(0);
  startAutoplay();
}

// Bootstrap all systems on ready
window.addEventListener("DOMContentLoaded", () => {
  initSiteHeaderNav();
  initHeroVisibility();
  initHeroExperience();
  initFaqAccordion();
  initContactForm();
  scrollToSectionFromQuery();

  scheduleNonCritical(() => {
    initParticles();
    initScrollReveal();
    initInteractiveWorkflow();
    initStatsCounter();
    initAppSimulator();
    initServicesCarousel();
    initTestimonialsCarousel();
  });
});

