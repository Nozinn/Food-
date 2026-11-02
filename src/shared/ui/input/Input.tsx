import React, { forwardRef } from 'react';
import { cn } from '@/shared/lib';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col text-left">
        {label && (
          <label htmlFor={inputId} className="text-xs text-white/70 uppercase tracking-wider mb-1.5 font-medium">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'w-full bg-[#363636] text-white placeholder-white/40 border border-[#4D4D4D] px-4 py-3 text-sm focus:outline-none focus:border-[#B39B7C] transition-colors duration-200',
            error && 'border-red-500 focus:border-red-500',
            className
          )}
          {...props}
        />
        {error && <span className="text-[11px] text-red-400 mt-1">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
