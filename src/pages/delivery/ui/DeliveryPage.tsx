import React from 'react';
import { Link } from 'react-router-dom';
import { SectionLabel, Button } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { ContactsSection } from '@/widgets/contacts-section';
import { Footer } from '@/widgets/footer';

export const DeliveryPage: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col justify-between">
      <div className="py-20 px-6 sm:px-14 lg:px-20 max-w-7xl mx-auto w-full">
        <SectionLabel title="Доставка" className="mb-10" />

        <div className="py-16 text-center border border-dashed border-[#CCCCCC] bg-[#FAFAFA] p-12">
          <h1 className="text-3xl font-bold text-[#1F1F1F] mb-4">
            Каталог доставки
          </h1>
          <p className="text-[#666666] max-w-md mx-auto mb-8 text-sm">
            Страница доставки блюд ресторана Food Exxe Relo с фильтром категорий и корзиной.
          </p>
          <Link to={ROUTES.HOME}>
            <Button variant="primary" size="md" className="rounded-none">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>

      <ContactsSection />
      <Footer />
    </main>
  );
};
