import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { DEFAULT_CATEGORY_ID, DISHES } from '@/entities/dish';
import { CategoryFilter } from '@/widgets/category-filter';
import { ContactsSection } from '@/widgets/contacts-section';
import { Footer } from '@/widgets/footer';
import { TopBar } from '@/widgets/top-bar';
import { DishGallery } from './DishGallery';
import { DishPurchase } from './DishPurchase';

export const DishDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dish = DISHES.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className="min-h-screen w-full bg-white">
      <TopBar />
      <CategoryFilter activeId={dish?.category ?? DEFAULT_CATEGORY_ID} />
      <Container className="pt-[52px] max-[768px]:pt-6">
        {dish ? (
          <div key={dish.id} className="flex items-start justify-center gap-[134px] max-[1279px]:gap-16 max-[1000px]:gap-8 max-[768px]:flex-col">
            <DishGallery images={dish.gallery ?? [dish.image]} title={dish.title} />
            <DishPurchase dish={dish} />
          </div>
        ) : (
          <div className="py-20 text-center font-circe text-[#333333]">
            <h1 className="mb-8 text-[32px] font-bold leading-[1.2]">Блюдо не найдено</h1>
            <Link to={ROUTES.DELIVERY}>
              <Button variant="accent" size="btn-large">Перейти в доставку</Button>
            </Link>
          </div>
        )}
      </Container>
      <ContactsSection />
      <Footer payments />
    </main>
  );
};
