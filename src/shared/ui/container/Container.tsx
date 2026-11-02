import React from 'react';
import { cn } from '@/shared/lib';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div
    className={cn(
      'ml-4 w-[calc(100%-32px)] min-[769px]:ml-[max(24px,calc((100vw-1296px)/2-120px))] min-[769px]:w-[min(1296px,calc(100%-48px))]',
      className
    )}
  >
    {children}
  </div>
);
