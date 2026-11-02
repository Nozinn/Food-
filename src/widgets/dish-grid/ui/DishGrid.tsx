import React from 'react';
import { Container } from '@/shared/ui';
import { DishCard, type Dish } from '@/entities/dish';
import { AddToCartButton } from '@/features/add-to-cart';

interface DishGridProps {
  dishes: Dish[];
}

export const DishGrid: React.FC<DishGridProps> = ({ dishes }) => (
  <Container className="pt-[52px] max-[768px]:pt-6">
    {dishes.length > 0 ? (
      <div className="grid grid-cols-4 gap-6 max-[1279px]:grid-cols-3 max-[768px]:grid-cols-2 max-[768px]:gap-4 max-[359px]:grid-cols-1">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} action={<AddToCartButton dish={dish} />} />
        ))}
      </div>
    ) : (
      <p className="py-20 text-center font-circe text-lg text-[#333333]/60">
        В этой категории пока нет блюд
      </p>
    )}
  </Container>
);
