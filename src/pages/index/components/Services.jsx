import React, { useEffect, useRef } from 'react';

const servicesData = [
  {
    id: "card-service-house-help",
    btnId: "btn-service-house-help",
    status: "available",
    statusText: "Available Now",
    icon: "https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363872/file_000000004ca07208b97fa5da8c067d03_fzrobj.png",
    title: "House Help",
    desc: "Professional on-demand household support, custom housekeeping, and daily assistance.",
    comingSoon: false
  },
  {
    id: "card-service-car-service",
    btnId: "btn-service-car-service",
    status: "coming-soon",
    statusText: "Coming Soon",
    icon: "https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363890/file_00000000ae3072088b3e5f8eb2acc0e6_kmtkwe.png",
    title: "Car Service",
    desc: "Premium on-demand car detailing, eco-wash, interior deep vacuuming, and inspection.",
    comingSoon: true
  },
  {
    id: "card-service-plumbing",
    btnId: "btn-service-plumbing",
    status: "coming-soon",
    statusText: "Coming Soon",
    icon: "https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363808/file_0000000065347208befab56e456ffd75_jlc1m1.png",
    title: "Plumbing",
    desc: "Premium diagnostic checks, leak resolutions, piping installations, and fixture repair.",
    comingSoon: true
  },
  {
    id: "card-service-electrical",
    btnId: "btn-service-electrical",
    status: "coming-soon",
    statusText: "Coming Soon",
    icon: "https://res.cloudinary.com/dhxmwk5of/image/upload/q_auto/f_auto/v1779363750/file_0000000068d8720884b41c36d2c4f2ad_fj7lff.png",
    title: "Electrical",
    desc: "Certified electricians for smart automation, system diagnostics, and elite wiring setups.",
    comingSoon: true
  }
];

function Services() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const gridRef = useRef(null);
  const pausedRef = useRef(false);

  // Render cards markup helper
  const renderCard = (item, index, isClone = false) => (
    <div 
      key={`${item.id}-${isClone ? 'clone' : 'orig'}-${index}`} 
      className="service-card glass-panel" 
      id={`${item.id}${isClone ? '-clone' : ''}`}
    >
      <span className={`service-status-badge ${item.status}`} aria-label={item.statusText}>
        {item.statusText}
      </span>
      <div className="service-card-icon-wrap">
        <div className="service-card-glow"></div>
        <img src={item.icon} alt={`${item.title} Icon`} />
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

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const grid = gridRef.current;
    if (!wrapper || !grid) return;

    let animationFrameId = null;
    let scrollPos = 0;
    const speed = 0.45; // scroll speed per frame

    // Main scroll frame update loop
    const scroll = () => {
      if (pausedRef.current) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      // Max scroll represents half the scrollWidth since cards are doubled
      const maxScroll = grid.scrollWidth / 2;
      
      scrollPos += speed;
      if (scrollPos >= maxScroll) {
        scrollPos = 0;
      }
      wrapper.scrollLeft = scrollPos;

      animationFrameId = requestAnimationFrame(scroll);
    };

    // Pause on interactions
    const handleMouseEnter = () => { pausedRef.current = true; };
    const handleMouseLeave = () => { pausedRef.current = false; };
    const handleTouchStart = () => { pausedRef.current = true; };
    const handleTouchEnd = () => { pausedRef.current = false; };

    wrapper.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    wrapper.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    wrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
    wrapper.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Start auto-scroll RAF loop
    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
      wrapper.removeEventListener('touchstart', handleTouchStart);
      wrapper.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

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
            {/* Render original set of cards */}
            {servicesData.map((item, idx) => renderCard(item, idx, false))}
            {/* Render cloned set of cards to facilitate infinite scrolling seamless wrap-around */}
            {servicesData.map((item, idx) => renderCard(item, idx, true))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
