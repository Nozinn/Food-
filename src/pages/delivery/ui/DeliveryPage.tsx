import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_CATEGORY_ID, DISHES } from '@/entities/dish';
import { CategoryFilter } from '@/widgets/category-filter';
import { ContactsSection } from '@/widgets/contacts-section';
import { DishGrid } from '@/widgets/dish-grid';
import { Footer } from '@/widgets/footer';
import { TopBar } from '@/widgets/top-bar';

export const DeliveryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const activeId = searchParams.get('category') ?? DEFAULT_CATEGORY_ID;

  return (
    <main className="min-h-screen w-full bg-white">
      <TopBar />
      <CategoryFilter activeId={activeId} />
      <DishGrid dishes={DISHES.filter((dish) => dish.category === activeId)} />
      <ContactsSection />
      <Footer payments />
    </main>
  );
};
