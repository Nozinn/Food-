import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/config';
import { formatPrice } from '../lib/formatPrice';
import type { Dish } from '../model/types';

interface DishCardProps {
  dish: Dish;
  action: React.ReactNode;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, action }) => (
  <article className="group flex min-h-[404px] flex-col border border-[#333333]/20 font-circe text-[#333333] transition-shadow hover:shadow-[0_8px_24px_rgba(51,51,51,0.12)] max-[1279px]:min-h-0">
    <Link to={ROUTES.DISH(dish.id)} className="flex flex-1 flex-col">
      <img
        src={dish.image}
        alt={dish.title}
        loading="lazy"
        className="aspect-[304/220] w-full object-cover"
      />
      <h3 className="px-[26px] pt-[30px] pb-[25px] text-center text-xl font-bold leading-[1.4] transition-colors group-hover:text-[#B59571] max-[1439px]:px-4 max-[1279px]:pt-5 max-[1279px]:pb-4 max-[480px]:text-base">
        {dish.title}
      </h3>
    </Link>
    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-3 px-[30px] pb-[29px] max-[1439px]:px-4 max-[1279px]:pb-4">
      <span className="whitespace-nowrap text-[32px] font-bold leading-[1.2] max-[1439px]:text-2xl max-[480px]:text-xl">
        {formatPrice(dish.price, dish.priceFrom)}
      </span>
      {action}
    </div>
  </article>
);
