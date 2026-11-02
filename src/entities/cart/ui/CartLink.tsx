import React from 'react';
import { BasketIcon } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { useCartStore } from '../model/useCartStore';

interface CartLinkProps {
  className?: string;
}

export const CartLink: React.FC<CartLinkProps> = ({ className }) => {
  const count = useCartStore((state) => state.getTotalCount());

  return (
    <a
      href="#cart"
      aria-label={`Корзина, товаров: ${count}`}
      className={cn('relative block transition-colors hover:text-[#B59571]', className)}
    >
      <BasketIcon />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#B59571] px-1 text-[11px] font-bold leading-none text-white">
          {count}
        </span>
      )}
    </a>
  );
};
