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
    <div className={cn('flex items-center gap-[30px] font-circe text-xl font-bold leading-[1.4] text-[#333333] uppercase select-none', className)}>
      <span>{title}</span>
      <span className="inline-block w-[60px] h-[3px] bg-[#B59571]" />
    </div>
  );
};
