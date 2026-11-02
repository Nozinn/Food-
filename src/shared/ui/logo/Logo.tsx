import React from 'react';
import { cn } from '@/shared/lib';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg tracking-widest',
    md: 'text-2xl tracking-[0.25em]',
    lg: 'text-3xl tracking-[0.3em]',
    xl: 'text-4xl tracking-[0.35em]',
  };

  return (
    <div
      className={cn(
        'font-bold select-none text-[#B39B7C] inline-flex items-center justify-center font-sans uppercase',
        sizeClasses[size],
        className
      )}
      style={{ letterSpacing: '0.22em' }}
    >
      <svg
        viewBox="0 0 88 32"
        fill="currentColor"
        className={cn(
          size === 'sm' && 'h-5 w-auto',
          size === 'md' && 'h-7 w-auto',
          size === 'lg' && 'h-9 w-auto',
          size === 'xl' && 'h-12 w-auto'
        )}
        aria-label="FOOD"
      >
        {/* F */}
        <path d="M4 4h14v4H9v7h7v4H9v9H4V4z" />
        {/* First O */}
        <path d="M22 4h12c3.3 0 6 2.7 6 6v12c0 3.3-2.7 6-6 6H22c-3.3 0-6-2.7-6-6V10c0-3.3 2.7-6 6-6zm12 5H22c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2z" />
        {/* Connecting bar between Os */}
        <path d="M37 14h14v4H37z" />
        {/* Second O */}
        <path d="M52 4h12c3.3 0 6 2.7 6 6v12c0 3.3-2.7 6-6 6H52c-3.3 0-6-2.7-6-6V10c0-3.3 2.7-6 6-6zm12 5H52c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2z" />
        {/* D */}
        <path d="M74 4h7c4.4 0 8 3.6 8 8v8c0 4.4-3.6 8-8 8h-7V4zm5 20h2c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4h-2v16z" />
      </svg>
    </div>
  );
};
