import React from 'react';
import { Button } from '@/shared/ui';
import { useCartStore } from '@/entities/cart';
import type { Dish } from '@/entities/dish';

interface AddToCartButtonProps {
  dish: Dish;
  quantity?: number;
  selectedOptions?: string[];
  size?: 'btn-small' | 'btn-large';
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  dish,
  quantity = 1,
  selectedOptions = [],
  size = 'btn-small',
}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Button
      type="button"
      variant="accent"
      size={size}
      onClick={() => addToCart(dish, quantity, selectedOptions)}
      className="whitespace-nowrap"
    >
      В корзину
    </Button>
  );
};
