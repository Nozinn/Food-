import React, { useState } from 'react';
import { QuantityInput } from '@/shared/ui';
import { formatPrice, type Dish } from '@/entities/dish';
import { AddToCartButton } from '@/features/add-to-cart';
import { DishExtras } from './DishExtras';

interface DishPurchaseProps {
  dish: Dish;
}

export const DishPurchase: React.FC<DishPurchaseProps> = ({ dish }) => {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const options = dish.options ?? [];

  const toggleOption = (id: string) =>
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );

  const extrasPrice = options
    .filter((option) => selected.includes(option.id))
    .reduce((total, option) => total + option.price, 0);

  return (
    <div className="w-[306px] shrink-0 font-circe text-[#333333] max-[1000px]:min-w-0 max-[1000px]:flex-1 max-[768px]:w-full">
      <h1 className="text-[32px] font-bold leading-[1.2] max-[1000px]:text-[26px]">{dish.title}</h1>
      <div className="mt-[33px] border-t border-[#333333]/40 pt-[33px]">
        <p className="flex items-baseline gap-[10px]">
          <span className="whitespace-nowrap text-[32px] font-bold leading-[1.2]">
            {formatPrice((dish.price + extrasPrice) * quantity, dish.priceFrom)}
          </span>
          {dish.weight && (
            <span className="text-base font-bold leading-[1.4] text-[#333333]/60">/&nbsp;&nbsp;{dish.weight}</span>
          )}
        </p>
        <p className="mt-[31px] text-base font-bold leading-[1.4]">Количество порций:</p>
        <div className="mt-[25px] flex items-center gap-5">
          <QuantityInput value={quantity} onChange={setQuantity} />
          <AddToCartButton dish={dish} quantity={quantity} selectedOptions={selected} size="btn-large" />
        </div>
      </div>
      <div className="mt-[43px] border-t border-[#333333]/40">
        {options.length > 0 && <DishExtras options={options} selected={selected} onToggle={toggleOption} />}
      </div>
    </div>
  );
};
