import React, { useEffect } from 'react';
import { handleNavLinkClick } from '../../../utils/scroll.js';

function Drawer({ isMenuOpen, setIsMenuOpen }) {
  const closeDrawer = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Handle body class for scroll locking
    if (isMenuOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    
    // Handle Escape key listener
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeDrawer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.classList.remove("nav-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.id === 'mobile-drawer') {
      closeDrawer();
    }
  };

  return (
    <div 
      className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`} 
      id="mobile-drawer" 
      aria-hidden={isMenuOpen ? "false" : "true"}
      onClick={handleOverlayClick}
    >
      <div className="mobile-drawer-content" role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="mobile-drawer-header">
          <a 
            className="brand-link" 
            href="/" 
            onClick={(e) => handleNavLinkClick(e, 'hero-section', closeDrawer)}
            data-scroll-target="hero-section" 
            aria-label="GRED home"
          >
            <span className="brand-text">GRED</span>
          </a>
          <button 
            className="drawer-close" 
            id="mobile-drawer-close" 
            type="button" 
            aria-label="Close navigation menu"
            onClick={closeDrawer}
          >
            &times;
          </button>
        </div>
        <nav className="mobile-nav-links" aria-label="Mobile navigation links">
          <a href="/?scroll=about" onClick={(e) => handleNavLinkClick(e, 'about', closeDrawer)} data-scroll-target="about">About</a>
          <a href="/?scroll=services" onClick={(e) => handleNavLinkClick(e, 'services', closeDrawer)} data-scroll-target="services">Services</a>
          <a href="/?scroll=how-it-works" onClick={(e) => handleNavLinkClick(e, 'how-it-works', closeDrawer)} data-scroll-target="how-it-works">Workflow</a>
          <a href="/?scroll=why-choose" onClick={(e) => handleNavLinkClick(e, 'why-choose', closeDrawer)} data-scroll-target="why-choose">Features</a>
          <a href="/?scroll=trust-safety" onClick={(e) => handleNavLinkClick(e, 'trust-safety', closeDrawer)} data-scroll-target="trust-safety">Safety</a>
          <a href="/?scroll=testimonials" onClick={(e) => handleNavLinkClick(e, 'testimonials', closeDrawer)} data-scroll-target="testimonials">Reviews</a>
          <a href="/?scroll=faq" onClick={(e) => handleNavLinkClick(e, 'faq', closeDrawer)} data-scroll-target="faq">FAQ</a>
          <a href="/invest" className="nav-invest-btn">Invest In Us</a>
        </nav>
      </div>
    </div>
  );
}

export default Drawer;
