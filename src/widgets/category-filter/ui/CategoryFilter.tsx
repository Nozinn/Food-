import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { ROUTES } from '@/shared/config';
import { DISH_CATEGORIES } from '@/entities/dish';

interface CategoryFilterProps {
  activeId: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeId }) => (
  <Container className="pt-[60px] max-[768px]:pt-6">
    <nav
      aria-label="Категории меню"
      className="flex flex-wrap justify-center gap-x-10 gap-y-3 font-circe text-base leading-[1.4] text-[#333333] max-[1439px]:gap-x-6 max-[768px]:flex-nowrap max-[768px]:justify-start max-[768px]:overflow-x-auto max-[768px]:pb-2"
    >
      {DISH_CATEGORIES.map((category) => (
        <Link
          key={category.id}
          to={`${ROUTES.DELIVERY}?category=${category.id}`}
          aria-current={category.id === activeId ? 'page' : undefined}
          className={cn(
            'whitespace-nowrap border-b-[3px] pb-[5px] transition-colors hover:text-[#B59571]',
            category.id === activeId ? 'border-[#B59571]' : 'border-transparent'
          )}
        >
          {category.title}
        </Link>
      ))}
    </nav>
  </Container>
);
