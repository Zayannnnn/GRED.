import React, { useMemo } from 'react';

function Particles() {
  const particlesList = useMemo(() => {
    const list = [];
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const count = isMobile ? 18 : 45;
    for (let i = 0; i < count; i++) {
      const isAmber = Math.random() < 0.35;
      const size = Math.random() * 4 + 2; // 2px to 6px
      const top = Math.random() * 100; // 0 to 100%
      const left = Math.random() * 100; // 0 to 100%
      const dx = (Math.random() - 0.5) * 300; // -150px to 150px
      const dy = (Math.random() - 0.5) * 300; // -150px to 150px
      const duration = Math.random() * 12 + 12; // 12s to 24s
      const delay = Math.random() * -15; // -15s to 0s
      const opacity = Math.random() * 0.3 + 0.1; // 0.1 to 0.4

      list.push({
        className: isAmber ? "particle amber" : "particle",
        style: {
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: opacity,
          "--x": `${dx}px`,
          "--y": `${dy}px`,
          "--duration": `${duration}s`,
          "--delay": `${delay}s`,
          animation: "float var(--duration) ease-in-out var(--delay) infinite alternate"
        }
      });
    }
    return list;
  }, []);

  return (
    <div className="particles" id="particles" style={{ contain: 'strict', pointerEvents: 'none' }}>
      {particlesList.map((p, idx) => (
        <div key={idx} className={p.className} style={p.style} />
      ))}
    </div>
  );
}

export default React.memo(Particles);
