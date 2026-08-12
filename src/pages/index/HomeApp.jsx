import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Drawer from './components/Drawer.jsx';
import Particles from './components/Particles.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Workflow from './components/Workflow.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import AppFeatures from './components/AppFeatures.jsx';
import TrustSafety from './components/TrustSafety.jsx';
import Testimonials from './components/Testimonials.jsx';
import Stats from './components/Stats.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function HomeApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-glow">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <Particles />
      
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Drawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div className="content-wrapper">
        <Hero />
        <About />
        <Services />
        <Workflow />
        <WhyChoose />
        <AppFeatures />
        <TrustSafety />
        <Testimonials />
        <Stats />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default HomeApp;
