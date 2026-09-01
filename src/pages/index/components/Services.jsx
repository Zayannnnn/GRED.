import React, { useEffect, useRef, useCallback } from 'react';

const servicesData = [
  {
    id: "card-service-house-help",
    btnId: "btn-service-house-help",
    status: "available",
    statusText: "Available Now",
    icon: "https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363872/file_000000004ca07208b97fa5da8c067d03_fzrobj.png",
    title: "House Help",
    desc: "Professional on-demand household support, custom housekeeping, and daily assistance.",
    comingSoon: false
  },
  {
    id: "card-service-car-service",
    btnId: "btn-service-car-service",
    status: "coming-soon",
    statusText: "Coming Soon",
    icon: "https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363890/file_00000000ae3072088b3e5f8eb2acc0e6_kmtkwe.png",
    title: "Car Service",
    desc: "Premium on-demand car detailing, eco-wash, interior deep vacuuming, and inspection.",
    comingSoon: true
  },
  {
    id: "card-service-plumbing",
    btnId: "btn-service-plumbing",
    status: "coming-soon",
    statusText: "Coming Soon",
    icon: "https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363808/file_0000000065347208befab56e456ffd75_jlc1m1.png",
    title: "Plumbing",
    desc: "Premium diagnostic checks, leak resolutions, piping installations, and fixture repair.",
    comingSoon: true
  },
  {
    id: "card-service-electrical",
    btnId: "btn-service-electrical",
    status: "coming-soon",
    statusText: "Coming Soon",
    icon: "https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto,f_auto,w_160,c_scale/v1779363750/file_0000000068d8720884b41c36d2c4f2ad_fj7lff.png",
    title: "Electrical",
    desc: "Certified electricians for smart automation, system diagnostics, and elite wiring setups.",
    comingSoon: true
  }
];

function Services() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const gridRef = useRef(null);
  const currentStepRef = useRef(0);
  const lastScrollTimeRef = useRef(0);
  const touchStartYRef = useRef(0);

  // Helper to get target horizontal scroll offset for a step index
  const getStepScrollLeft = useCallback((stepIndex) => {
    const wrapper = wrapperRef.current;
    const grid = gridRef.current;
    if (!wrapper || !grid) return 0;

    const cards = grid.children;
    if (!cards || cards.length === 0) return 0;

    const maxScroll = Math.max(0, wrapper.scrollWidth - wrapper.clientWidth);
    if (maxScroll <= 5) return 0;

    const targetCard = cards[Math.min(stepIndex, cards.length - 1)];
    if (!targetCard) return 0;

    const cardOffset = targetCard.offsetLeft - grid.offsetLeft;
    return Math.min(cardOffset, maxScroll);
  }, []);

  const getMaxSteps = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return 0;
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    if (maxScroll <= 10) return 0;
    return servicesData.length - 1;
  }, []);

  const scrollToStep = useCallback((stepIndex) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const targetLeft = getStepScrollLeft(stepIndex);
    wrapper.scrollTo({
      left: targetLeft,
      behavior: 'smooth'
    });
  }, [getStepScrollLeft]);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    let isNearViewport = false;
    const COOLDOWN_MS = 450; // Smooth gesture debounce

    // IntersectionObserver to attach wheel/touch interceptors only when in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isNearViewport = entry.isIntersecting;
      });
    }, { threshold: 0.15 });

    observer.observe(container);

    const isEngagedInViewport = () => {
      if (!isNearViewport) return false;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Section is engaged when it occupies the active viewport center
      return rect.top <= viewportHeight * 0.45 && rect.bottom >= viewportHeight * 0.55;
    };

    // Wheel listener (non-passive to control scroll progression)
    const handleWheel = (e) => {
      if (!isEngagedInViewport()) return;

      const maxSteps = getMaxSteps();
      if (maxSteps === 0) return; // All cards visible on wide screens, allow natural vertical scroll

      const now = Date.now();
      const isCoolingDown = now - lastScrollTimeRef.current < COOLDOWN_MS;

      if (e.deltaY > 15) {
        // Scrolling DOWN
        if (currentStepRef.current < maxSteps) {
          e.preventDefault();
          if (!isCoolingDown) {
            currentStepRef.current += 1;
            scrollToStep(currentStepRef.current);
            lastScrollTimeRef.current = now;
          }
        }
        // If currentStepRef.current >= maxSteps, do NOT preventDefault -> moves down naturally
      } else if (e.deltaY < -15) {
        // Scrolling UP
        if (currentStepRef.current > 0) {
          e.preventDefault();
          if (!isCoolingDown) {
            currentStepRef.current -= 1;
            scrollToStep(currentStepRef.current);
            lastScrollTimeRef.current = now;
          }
        }
        // If currentStepRef.current <= 0, do NOT preventDefault -> moves up naturally
      }
    };

    // Touch handlers for mobile
    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e) => {
      if (!isEngagedInViewport() || !e.touches || e.touches.length === 0) return;

      const maxSteps = getMaxSteps();
      if (maxSteps === 0) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - currentY;
      const now = Date.now();
      const isCoolingDown = now - lastScrollTimeRef.current < COOLDOWN_MS;

      // Swiping UP (scrolling down page)
      if (deltaY > 40) {
        if (currentStepRef.current < maxSteps) {
          if (!isCoolingDown) {
            currentStepRef.current += 1;
            scrollToStep(currentStepRef.current);
            lastScrollTimeRef.current = now;
            touchStartYRef.current = currentY;
          }
        }
      } 
      // Swiping DOWN (scrolling up page)
      else if (deltaY < -40) {
        if (currentStepRef.current > 0) {
          if (!isCoolingDown) {
            currentStepRef.current -= 1;
            scrollToStep(currentStepRef.current);
            lastScrollTimeRef.current = now;
            touchStartYRef.current = currentY;
          }
        }
      }
    };

    // Sync current step if user drags/swipes horizontally
    const handleScroll = () => {
      const scrollLeft = wrapper.scrollLeft;
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      if (maxScroll <= 0) return;

      const cards = gridRef.current ? gridRef.current.children : null;
      if (!cards || cards.length === 0) return;

      // Find closest card to current scrollLeft
      let closestIdx = 0;
      let minDiff = Infinity;
      for (let i = 0; i < cards.length; i++) {
        const offset = cards[i].offsetLeft - (gridRef.current?.offsetLeft || 0);
        const diff = Math.abs(offset - scrollLeft);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      }
      currentStepRef.current = closestIdx;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    wrapper.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      wrapper.removeEventListener('scroll', handleScroll);
    };
  }, [getMaxSteps, scrollToStep]);

  // Render card markup
  const renderCard = (item, index) => (
    <div 
      key={item.id} 
      className="service-card glass-panel" 
      id={item.id}
    >
      <span className={`service-status-badge ${item.status}`} aria-label={item.statusText}>
        {item.statusText}
      </span>
      <div className="service-card-icon-wrap">
        <div className="service-card-glow"></div>
        <img src={item.icon} alt={`${item.title} Icon`} loading="lazy" decoding="async" width="80" height="80" />
      </div>
      <div className="service-card-info">
        <h3 className="service-card-title">{item.title}</h3>
        <p className="service-card-desc">{item.desc}</p>
      </div>
      {item.comingSoon ? (
        <button className="service-card-btn disabled" id={item.btnId} type="button" disabled>
          Coming Soon
        </button>
      ) : (
        <button className="service-card-btn" id={item.btnId} type="button">
          Book Now
        </button>
      )}
    </div>
  );

  return (
    <section id="services" className="section-padding scroll-reveal" ref={containerRef}>
      <h2 className="section-title">Our Premium Services</h2>
      <p className="section-subtitle">
        Select from our elite range of household services. Fully customizable, vetted, and completed by experts.
      </p>

      <div className="services-carousel-container">
        <div className="services-bg-glow-blob blob-orange" aria-hidden="true"></div>
        <div className="services-bg-glow-blob blob-yellow" aria-hidden="true"></div>
        <div className="services-dots-grid" aria-hidden="true"></div>
        <div className="services-floating-spark spark-1" aria-hidden="true">✦</div>
        <div className="services-floating-spark spark-2" aria-hidden="true">✦</div>
        <div className="services-floating-spark spark-3" aria-hidden="true">✦</div>

        <div className="services-carousel-wrapper" ref={wrapperRef}>
          <div className="services-grid" ref={gridRef}>
            {servicesData.map((item, idx) => renderCard(item, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Services);
