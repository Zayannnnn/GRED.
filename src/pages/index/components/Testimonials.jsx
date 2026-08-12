import React, { useState, useEffect, useRef } from 'react';

const testimonialsData = [
  {
    initials: "RS",
    stars: "★★★★★",
    name: "Rahul Sharma",
    city: "Kochi",
    text: "GRED has completely redefined home services for our family in Kochi. I booked an emergency plumbing service late in the evening. The specialist arrived in under 20 minutes, handled the pipe leak with extreme precision, and the digital escrow checkout gave us absolute confidence!"
  },
  {
    initials: "PN",
    stars: "★★★★★",
    name: "Priya Nair",
    city: "Kakkanad",
    text: "Excellent platform! Booking a deep cleaning service for our apartment in Kakkanad was incredibly seamless. The team was highly professional, fully equipped, and left every corner of the house sparkling clean. The upfront pricing eliminates any awkward negotiations."
  },
  {
    initials: "RV",
    stars: "★★★★★",
    name: "Rohit Verma",
    city: "Thrissur",
    text: "Finding a trusted electrician in Thrissur used to be a chore. With GRED, I got a verified partner matched in minutes. He resolved our complex inverter wiring issue perfectly. The level of transparency is exactly what modern home services should feel like!"
  },
  {
    initials: "AS",
    stars: "★★★★★",
    name: "Ananya Sharma",
    city: "Kannur",
    text: "I am extremely impressed by GRED's quality standards. I booked an emergency AC maintenance service in Kannur. The technician was polite, highly skilled, and completed the work cleanly. The customer support team followed up instantly. Absolutely top-tier service!"
  },
  {
    initials: "SM",
    stars: "★★★★★",
    name: "Sneha Menon",
    city: "Alappuzha",
    text: "GRED's booking flow is so fast and satisfying! When our kitchen sink backed up during a family gathering in Alappuzha, a dispatch plumber was matched and arrived within 15 minutes. He was respectful, quick, and pricing was incredibly fair."
  },
  {
    initials: "VP",
    stars: "★★★★★",
    name: "Vivek Pillai",
    city: "Kozhikode",
    text: "For working professionals, GRED is an absolute lifesaver. I scheduled a comprehensive car wash and interior detailing at our home in Kozhikode. The partner arrived precisely on time and did a premium job. Highly recommend GRED to everyone!"
  },
  {
    initials: "KR",
    stars: "★★★★★",
    name: "Kavya Reddy",
    city: "Kottayam",
    text: "The safety standards on GRED are what make them stand out. Knowing that every business provider goes through strict background checks gave me peace of mind when booking an electrical service in Kottayam. Reliable, professional, and very premium."
  },
  {
    initials: "AM",
    stars: "★★★★★",
    name: "Aditya Menon",
    city: "Malappuram",
    text: "Incredible user experience! I booked a quick sofa sanitization service in Malappuram. The matching process took seconds, and the pro was highly trained. The results were outstanding and exceeded our expectations. GRED is a game-changer!"
  },
  {
    initials: "RK",
    stars: "★★★★★",
    name: "Rohan Kulkarni",
    city: "Trivandrum",
    text: "GRED is easily the best tech product out of Kerala. I scheduled an emergency appliance repair in Trivandrum. The technician diagnosed and resolved the issue under half an hour. The flat-rate quotes and polite service made it a delight!"
  }
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const trackRef = useRef(null);

  // Responsive cards-per-page detection
  const getCardsPerPage = (width) => {
    if (width > 1024) return 3;
    if (width > 768) return 2;
    return 1;
  };

  useEffect(() => {
    const handleResize = () => {
      const perPage = getCardsPerPage(window.innerWidth);
      setCardsPerPage(perPage);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalIndicators = testimonialsData.length - cardsPerPage + 1;

  // Make sure activeIndex doesn't exceed totalIndicators limit
  useEffect(() => {
    if (activeIndex >= totalIndicators && totalIndicators > 0) {
      setActiveIndex(totalIndicators - 1);
    }
  }, [cardsPerPage, totalIndicators, activeIndex]);

  // Adjust track position when activeIndex, cardsPerPage, or resize triggers
  useEffect(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    
    const updatePosition = () => {
      const card = track.children[0];
      const cardWidth = card.getBoundingClientRect().width;
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      track.style.transform = `translate3d(-${activeIndex * (cardWidth + gap)}px, 0, 0)`;
    };

    updatePosition();
    // Wait for repaint/reflow to settle then reposition
    const timer = setTimeout(updatePosition, 50);
    window.addEventListener('resize', updatePosition, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePosition);
    };
  }, [activeIndex, cardsPerPage]);

  return (
    <section id="testimonials" className="section-padding scroll-reveal">
      <div className="testimonial-glow-1"></div>
      <div className="testimonial-glow-2"></div>
      <div className="testimonial-particle particle-1"></div>
      <div className="testimonial-particle particle-2"></div>
      <div className="testimonial-particle particle-3"></div>

      <h2 className="section-title">What Our Customers Say</h2>
      <p className="section-subtitle">Real feedback from actual homes. We let our community ratings explain our standards.</p>

      <div className="testimonials-viewport">
        <div className="testimonials-track" id="testimonials-track" ref={trackRef}>
          {testimonialsData.map((item, idx) => (
            <div key={idx} className="testimonial-card glass-panel" data-index={idx}>
              <div className="testimonial-card-header">
                <div className="testimonial-stars" aria-label={`${item.stars.length} star rating`}>{item.stars}</div>
                <div className="quote-decal">“</div>
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-user">
                <div className="testimonial-avatar">{item.initials}</div>
                <div className="testimonial-user-info">
                  <h5>{item.name}</h5>
                  <span>{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-controls">
        <div className="testimonials-indicators" id="testimonials-indicators">
          {Array.from({ length: totalIndicators }).map((_, i) => (
            <button
              key={i}
              className={`indicator-dot ${activeIndex === i ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Show slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
