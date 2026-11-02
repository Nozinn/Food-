import React from 'react';
import { Checkbox } from '@/shared/ui';
import { formatPrice, type Dish } from '@/entities/dish';

interface DishExtrasProps {
  options: NonNullable<Dish['options']>;
  selected: string[];
  onToggle: (id: string) => void;
}

export const DishExtras: React.FC<DishExtrasProps> = ({ options, selected, onToggle }) => (
  <section className="pt-[34px]">
    <h2 className="text-[32px] font-bold leading-[1.2] max-[1000px]:text-[26px]">Сделать еще вкуснее</h2>
    <ul className="mt-[31px] space-y-[22px]">
      {options.map((option) => (
        <li key={option.id} className="flex items-center justify-between gap-4">
          <div>
            <p className="text-base leading-[1.4] text-[#333333]/60">{option.title}</p>
            <p className="mt-2 text-xl font-bold leading-[1.4]">{formatPrice(option.price)}</p>
          </div>
          <Checkbox
            label={option.title}
            checked={selected.includes(option.id)}
            onChange={() => onToggle(option.id)}
          />
        </li>
      ))}
    </ul>
  </section>
);
