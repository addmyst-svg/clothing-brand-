import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = false,
  className = ''
}) => {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: {
      shri: 'text-2xl',
      kala: 'text-xl',
      mark: 'w-2.5 h-2.5',
      tagline: 'text-[10px]'
    },
    md: {
      shri: 'text-3xl sm:text-[34px]',
      kala: 'text-2xl sm:text-[28px]',
      mark: 'w-3 h-3',
      tagline: 'text-xs'
    },
    lg: {
      shri: 'text-4xl sm:text-5xl',
      kala: 'text-3xl sm:text-4xl',
      mark: 'w-4 h-4',
      tagline: 'text-sm'
    }
  }[size];

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="inline-flex items-baseline gap-1.5 leading-none">
        {/* "श्री" in authentic Devanagari */}
        <span 
          className={`font-devanagari font-semibold tracking-normal transition-colors ${
            isDark ? 'text-[#B33927]' : 'text-[#f5a65b]'
          } ${sizeClasses.shri}`}
          style={{ lineHeight: 1 }}
        >
          श्री
        </span>

        {/* Small Mirror-work or thread medallion mark */}
        <span 
          className="relative inline-flex items-center justify-center -translate-y-1"
          aria-hidden="true"
        >
          <span className={`${sizeClasses.mark} rounded-full bg-gradient-to-tr from-[#D9822B] to-[#F5A65B] shadow-sm inline-block border border-amber-300 ring-1 ring-[#B33927]/30`} />
          <span className="absolute w-1 h-1 bg-white rounded-full opacity-90" />
        </span>

        {/* "Kala" in elegant Cormorant Garamond */}
        <span 
          className={`font-heading font-medium tracking-tight transition-colors ${
            isDark ? 'text-[#1E2A44]' : 'text-[#FAF7F2]'
          } ${sizeClasses.kala}`}
          style={{ lineHeight: 1 }}
        >
          Kala
        </span>
      </div>

      {showTagline && (
        <span 
          className={`font-serif italic tracking-wide mt-1 ${
            isDark ? 'text-[#57534E]' : 'text-[#E8DED0]'
          } ${sizeClasses.tagline}`}
        >
          Kala that carries a story
        </span>
      )}
    </div>
  );
};
