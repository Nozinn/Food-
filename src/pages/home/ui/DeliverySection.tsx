import React from 'react';
import { Link } from 'react-router-dom';
import { SectionLabel, Button } from '@/shared/ui';
import { ROUTES } from '@/shared/config';

export const DeliverySection: React.FC = () => {
  return (
    <section id="delivery" className="py-20 sm:py-28 px-6 sm:px-14 lg:px-20 max-w-7xl mx-auto border-t border-[#F0F0F0]">
      <SectionLabel title="Доставка" className="mb-10 sm:mb-14" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F1F1F] tracking-tight leading-[1.08]">
            Служба <br />
            доставки
          </h2>
        </div>

        {/* Right Column: Text & Buttons */}
        <div className="lg:col-span-7 space-y-8">
          <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
            Мы бережно доставим изысканные блюда ресторана Food Exxe Relo прямо к вашему столу.
            Специальная термоупаковка сохраняет первозданную температуру, текстуру и подачу
            каждого блюда, чтобы ваш ужин дома или в офисе был сравним с визитом в ресторан.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link to={ROUTES.DELIVERY}>
              <Button
                variant="primary"
                size="md"
                className="rounded-none tracking-wider uppercase text-xs px-8 py-3.5"
              >
                Подробнее
              </Button>
            </Link>

            <a
              href="#terms"
              className="inline-flex items-center justify-center text-xs tracking-wider uppercase px-8 py-3.5 border border-[#B39B7C] text-[#222222] hover:bg-[#B39B7C] hover:text-white transition-colors duration-200"
            >
              Условия доставки
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
