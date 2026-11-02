import React from 'react';
import { cn } from '@/shared/lib';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark-outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none text-center active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-[#B39B7C] hover:bg-[#9E8669] text-white border border-[#B39B7C] shadow-sm',
    outline:
      'bg-transparent hover:bg-white/10 text-white border border-white/60 hover:border-white',
    'dark-outline':
      'bg-transparent hover:bg-[#B39B7C]/10 text-[#4A4A4A] border border-[#7A7A7A] hover:border-[#B39B7C] hover:text-[#B39B7C]',
    ghost:
      'bg-transparent hover:bg-white/5 text-white/80 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs tracking-wider',
    md: 'px-6 py-2.5 text-sm tracking-wide',
    lg: 'px-8 py-3.5 text-sm md:text-base tracking-wider',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
