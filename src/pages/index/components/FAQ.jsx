import React, { useState, useRef } from 'react';

const faqData = [
  {
    q: "How does GRED verify its service providers?",
    a: "Every service partner on GRED undergoes a strict onboarding cycle. We check government registrations, verify active service liability insurance, review past ratings, and run mandatory face-to-face background checks on all dispatch technicians."
  },
  {
    q: "Are there any hidden fees or extra travel charges?",
    a: "No. GRED is committed to absolute billing honesty. The flat estimate shown in the checkout dashboard before clicking booking confirmation is the exact amount you pay. Standard tax calculations are fully integrated, with no sudden provider fees."
  },
  {
    q: "How does GRED maintain service quality?",
    a: "Customers can rate and review every completed booking. Service agencies with repeated poor ratings are warned, monitored, and may be removed from the platform to maintain premium standards."
  },
  {
    q: "Can I track my service provider live?",
    a: "Yes. GRED provides real-time provider tracking so customers can monitor arrival progress and estimated timing directly inside the platform."
  },
  {
    q: "Can I reschedule or cancel my booking easily?",
    a: "Absolutely. Bookings can be cancelled or rescheduled with absolute flexibility up to 3 hours prior to the scheduled start window with zero penalties. You can configure this directly inside the bookings history screen of the app."
  }
];

function FAQ() {
  const [openStates, setOpenStates] = useState({});
  const bodyRefs = useRef([]);

  const toggleItem = (index) => {
    setOpenStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section id="faq" className="section-padding scroll-reveal">
      <div className="faq-glow-1"></div>
      <div className="faq-glow-2"></div>
      <div className="faq-particle faq-p-1"></div>
      <div className="faq-particle faq-p-2"></div>
      <div className="faq-particle faq-p-3"></div>

      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-subtitle">Got questions? We have laid out clear answers to clarify GRED's marketplace standards.</p>

      <div className="faq-container">
        {faqData.map((item, idx) => {
          const isOpen = !!openStates[idx];
          return (
            <div key={idx} className="faq-item glass-panel" id={`faq-item-${idx + 1}`}>
              <div 
                className={`faq-header ${isOpen ? 'active' : ''}`} 
                id={`faq-header-${idx + 1}`} 
                aria-expanded={isOpen ? "true" : "false"} 
                aria-controls={`faq-answer-${idx + 1}`} 
                role="button" 
                tabIndex="0"
                onClick={() => toggleItem(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              >
                <span className="faq-question">{item.q}</span>
                <div className="faq-chevron-wrapper">
                  <svg className="faq-chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div 
                className="faq-body" 
                id={`faq-answer-${idx + 1}`}
                ref={el => bodyRefs.current[idx] = el}
                style={{ 
                  maxHeight: isOpen ? `${bodyRefs.current[idx]?.scrollHeight}px` : '0px',
                  transition: 'max-height 0.3s ease-out',
                  overflow: 'hidden'
                }}
              >
                <div className="faq-answer">
                  {item.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
