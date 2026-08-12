import React, { useState, useEffect } from 'react';
import { handleNavLinkClick } from '../../../utils/scroll.js';

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    // Initialize state
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="site-header">
      <div className="site-header-inner">
        <a 
          className="brand-link" 
          href="/" 
          onClick={(e) => handleNavLinkClick(e, 'hero-section')} 
          data-scroll-target="hero-section" 
          aria-label="GRED home"
        >
          <span className="brand-text">GRED</span>
        </a>

        <nav className="site-nav-links" aria-label="Primary navigation">
          <a href="/?scroll=about" onClick={(e) => handleNavLinkClick(e, 'about')} data-scroll-target="about">About</a>
          <a href="/?scroll=services" onClick={(e) => handleNavLinkClick(e, 'services')} data-scroll-target="services">Services</a>
          <a href="/?scroll=how-it-works" onClick={(e) => handleNavLinkClick(e, 'how-it-works')} data-scroll-target="how-it-works">Workflow</a>
          <a href="/?scroll=why-choose" onClick={(e) => handleNavLinkClick(e, 'why-choose')} data-scroll-target="why-choose">Features</a>
          <a href="/?scroll=trust-safety" onClick={(e) => handleNavLinkClick(e, 'trust-safety')} data-scroll-target="trust-safety">Safety</a>
          <a href="/?scroll=testimonials" onClick={(e) => handleNavLinkClick(e, 'testimonials')} data-scroll-target="testimonials">Reviews</a>
          <a href="/?scroll=faq" onClick={(e) => handleNavLinkClick(e, 'faq')} data-scroll-target="faq">FAQ</a>
          <a href="invest.html" className="nav-invest-btn">Invest In Us</a>
        </nav>

        <div className="site-header-actions">
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'is-open' : ''}`} 
            id="mobile-menu-toggle" 
            type="button" 
            aria-label="Open navigation menu" 
            aria-controls="mobile-drawer" 
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
