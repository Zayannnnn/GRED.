import React, { useState, useEffect, useRef } from 'react';

const statsData = [
  { id: "counter-customers", key: "customers", target: 500, label: "Happy Customers" },
  { id: "counter-completed", key: "completed", target: 1000, label: "Services Completed" },
  { id: "counter-providers", key: "providers", target: 250, label: "Verified Providers" },
  { id: "counter-cities", key: "cities", target: 24, label: "Cities Expanding Soon", suffix: "+" }
];

function Stats() {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState({
    customers: 0,
    completed: 0,
    providers: 0,
    cities: 0
  });
  const triggeredRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !triggeredRef.current) {
        triggeredRef.current = true;
        startCounters();
      }
    }, { threshold: 0.15 });

    observer.observe(section);

    function startCounters() {
      const duration = 1800; // 1.8s smooth counting
      let startTime = null;
      let rafId = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setCounts({
          customers: Math.floor(easeOut * 500),
          completed: Math.floor(easeOut * 1000),
          providers: Math.floor(easeOut * 250),
          cities: Math.floor(easeOut * 24)
        });

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setCounts({
            customers: 500,
            completed: 1000,
            providers: 250,
            cities: 24
          });
        }
      };

      rafId = requestAnimationFrame(step);
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
      };
    }

    let cleanupCounters = null;
    return () => {
      observer.disconnect();
      if (cleanupCounters) cleanupCounters();
    };
  }, []);

  return (
    <section id="stats" className="section-padding scroll-reveal" ref={sectionRef}>
      <h2 className="section-title" style={{display: "none"}}>Milestone Achievements</h2>

      <div className="stats-dots-container" aria-hidden="true">
        <div className="stats-dot" style={{top: "15%", left: "10%", width: "4px", height: "4px", "--dx": "22px", "--dy": "-28px", animationDuration: "14s"}}></div>
        <div className="stats-dot amber" style={{top: "35%", left: "25%", width: "3px", height: "3px", "--dx": "-28px", "--dy": "22px", animationDuration: "18s", animationDelay: "2s"}}></div>
        <div className="stats-dot" style={{top: "75%", left: "15%", width: "5px", height: "5px", "--dx": "18px", "--dy": "30px", animationDuration: "16s", animationDelay: "1s"}}></div>
        <div className="stats-dot" style={{top: "20%", left: "45%", width: "3px", height: "3px", "--dx": "-26px", "--dy": "-18px", animationDuration: "20s"}}></div>
        <div className="stats-dot amber" style={{top: "60%", left: "55%", width: "4px", height: "4px", "--dx": "22px", "--dy": "-22px", animationDuration: "15s", animationDelay: "3s"}}></div>
        <div className="stats-dot" style={{top: "10%", left: "75%", width: "4px", height: "4px", "--dx": "-18px", "--dy": "26px", animationDuration: "17s", animationDelay: "1.5s"}}></div>
        <div className="stats-dot amber" style={{top: "45%", left: "85%", width: "3px", height: "3px", "--dx": "28px", "--dy": "-18px", animationDuration: "19s", animationDelay: "4s"}}></div>
        <div className="stats-dot" style={{top: "80%", left: "70%", width: "5px", height: "5px", "--dx": "-18px", "--dy": "-26px", animationDuration: "13s", animationDelay: "0.5s"}}></div>
        <div className="stats-dot amber" style={{top: "70%", left: "35%", width: "4px", height: "4px", "--dx": "28px", "--dy": "18px", animationDuration: "21s", animationDelay: "2.5s"}}></div>
        <div className="stats-dot" style={{top: "30%", left: "65%", width: "3px", height: "3px", "--dx": "-18px", "--dy": "-32px", animationDuration: "15s", animationDelay: "5s"}}></div>
        <div className="stats-dot" style={{top: "90%", left: "90%", width: "4px", height: "4px", "--dx": "-22px", "--dy": "18px", animationDuration: "16s", animationDelay: "3s"}}></div>
        <div className="stats-dot amber" style={{top: "5%", left: "35%", width: "4px", height: "4px", "--dx": "18px", "--dy": "-12px", animationDuration: "18s", animationDelay: "1s"}}></div>
      </div>

      <div className="stats-grid">
        {statsData.map(stat => (
          <div key={stat.key} className="stat-item glass-panel" id={`stat-card-${stat.key}`}>
            <div className="stat-number" id={stat.id} data-target={stat.target}>
              {counts[stat.key]}{stat.key === "cities" ? "+" : "+"}
            </div>
            <div className="stat-label">
              {stat.key === "cities" ? "24+ Cities Expanding Soon" : stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default React.memo(Stats);
