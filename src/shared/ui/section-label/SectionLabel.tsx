import React from 'react';
import { cn } from '@/shared/lib';

interface SectionLabelProps {
  title: string;
  className?: string;
  lineColor?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  title,
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-4 text-xs tracking-[0.25em] font-semibold text-[#222222] uppercase select-none', className)}>
      <span>{title}</span>
      <span className="inline-block w-8 sm:w-12 h-[1px] bg-[#B39B7C]" />
    </div>
  );
};
