import React from 'react';

interface StitchDividerProps {
  color?: 'terracotta' | 'turmeric' | 'indigo' | 'warm';
  className?: string;
  withMirror?: boolean;
}

export const StitchDivider: React.FC<StitchDividerProps> = ({
  color = 'terracotta',
  className = '',
  withMirror = false
}) => {
  const strokeColor = {
    terracotta: '#B33927',
    turmeric: '#D9822B',
    indigo: '#1E2A44',
    warm: '#D6C7B2'
  }[color];

  return (
    <div className={`relative flex items-center justify-center my-6 w-full ${className}`}>
      <svg className="w-full h-3" preserveAspectRatio="none" viewBox="0 0 100 6">
        <line
          x1="0"
          y1="3"
          x2="100"
          y2="3"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeDasharray="3 3"
          strokeOpacity="0.75"
        />
      </svg>
      {withMirror && (
        <div className="absolute inset-x-0 flex items-center justify-center pointer-events-none">
          <span className="w-3.5 h-3.5 rounded-full bg-white border border-[#D9822B] shadow-sm flex items-center justify-center ring-2 ring-[#FAF7F2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B33927]" />
          </span>
        </div>
      )}
    </div>
  );
};
