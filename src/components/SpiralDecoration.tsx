import React from 'react';

const SpiralDecoration: React.FC = () => {
  return (
    <>
      {/* Decorative spirals and circles throughout the page */}
      
      {/* Top left spiral */}
      <div className="fixed top-20 left-10 opacity-10 pointer-events-none z-10 animate-float">
        <svg width="80" height="80" viewBox="0 0 100 100" className="text-warm-400">
          <path
            d="M50 10 Q90 50 50 90 Q10 50 50 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="20" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M70 20 Q85 35 70 50 Q55 35 70 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Top right interconnected circles */}
      <div className="fixed top-32 right-16 opacity-8 pointer-events-none z-10 animate-pulse-soft">
        <svg width="120" height="60" viewBox="0 0 120 60" className="text-cream-400">
          <circle cx="25" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="65" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="95" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M45 30 Q55 20 50 30 Q55 40 65 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Middle left spiral */}
      <div className="fixed top-1/2 left-5 opacity-6 pointer-events-none z-10 animate-float" style={{ animationDelay: '1s' }}>
        <svg width="60" height="100" viewBox="0 0 60 100" className="text-warm-300">
          <path
            d="M30 10 Q50 30 30 50 Q10 30 30 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M30 60 Q45 75 30 90 Q15 75 30 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line x1="30" y1="50" x2="30" y2="60" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Middle right decorative element */}
      <div className="fixed top-2/3 right-8 opacity-7 pointer-events-none z-10 animate-pulse-soft" style={{ animationDelay: '2s' }}>
        <svg width="90" height="90" viewBox="0 0 90 90" className="text-cream-300">
          <circle cx="45" cy="45" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="45" cy="45" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="45" cy="45" r="8" fill="currentColor" opacity="0.3" />
          <path
            d="M45 10 Q70 45 45 80 Q20 45 45 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Bottom left interconnected pattern */}
      <div className="fixed bottom-32 left-12 opacity-8 pointer-events-none z-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <svg width="100" height="80" viewBox="0 0 100 80" className="text-warm-200">
          <circle cx="20" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="80" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M35 40 Q42 32 38 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M62 25 Q71 32 70 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Bottom right spiral */}
      <div className="fixed bottom-20 right-20 opacity-6 pointer-events-none z-10 animate-pulse-soft" style={{ animationDelay: '1.5s' }}>
        <svg width="70" height="70" viewBox="0 0 70 70" className="text-cream-400">
          <path
            d="M35 5 Q65 35 35 65 Q5 35 35 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="35" cy="35" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Additional floating elements for mobile */}
      <div className="fixed top-1/4 right-4 opacity-5 pointer-events-none z-10 animate-float md:hidden">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-warm-300">
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="20" cy="20" r="5" fill="currentColor" opacity="0.3" />
        </svg>
      </div>

      <div className="fixed bottom-1/4 left-4 opacity-5 pointer-events-none z-10 animate-pulse-soft md:hidden">
        <svg width="35" height="35" viewBox="0 0 35 35" className="text-cream-400">
          <path
            d="M17.5 5 Q30 17.5 17.5 30 Q5 17.5 17.5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </>
  );
};

export default SpiralDecoration;
