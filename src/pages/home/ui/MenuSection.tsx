import React from 'react';
import { Link } from 'react-router-dom';
import { SectionLabel } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import menuMainImg from '@/assets/images/menu-main.jpg';

export const MenuSection: React.FC = () => {
  // Bar card image using high-quality Unsplash cocktail photography
  const barCardImg =
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80';

  return (
    <section id="menu" className="py-20 sm:py-28 px-6 sm:px-14 lg:px-20 max-w-7xl mx-auto border-t border-[#F0F0F0]">
      <SectionLabel title="Меню" className="mb-10 sm:mb-14" />

      {/* Header and description */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14">
        <div className="lg:col-span-5">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F1F1F] tracking-tight">
            Меню
          </h2>
        </div>

        <div className="lg:col-span-7 text-[#555555] text-sm sm:text-base leading-relaxed">
          <p>
            Каждый сезон наша команда шеф-поваров и сомелье обновляет карту блюд и напитков,
            черпая вдохновение в чистых натуральных вкусах и свежайших ингредиентах.
            Откройте для себя наше регулярное меню или насладитесь коктейльной и винной классикой.
          </p>
        </div>
      </div>

      {/* Two Menu Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Main Menu Card */}
        <Link
          to={ROUTES.DELIVERY}
          className="group block relative overflow-hidden bg-[#F7F7F7] border border-[#E5E5E5] transition-shadow hover:shadow-xl"
        >
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={menuMainImg}
              alt="Основное меню Food Exxe Relo"
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="p-6 bg-white flex items-center justify-between border-t border-[#EAEAEA]">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#222222] uppercase group-hover:text-[#B39B7C] transition-colors">
              Основное меню
            </span>
            <span className="w-8 h-[1px] bg-[#B39B7C] transition-all group-hover:w-14" />
          </div>
        </Link>

        {/* Bar Menu Card */}
        <a
          href="#bar-menu"
          className="group block relative overflow-hidden bg-[#F7F7F7] border border-[#E5E5E5] transition-shadow hover:shadow-xl"
        >
          <div className="aspect-[4/3] w-full overflow-hidden">
            <img
              src={barCardImg}
              alt="Барная карта Food Exxe Relo"
              className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="p-6 bg-white flex items-center justify-between border-t border-[#EAEAEA]">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#222222] uppercase group-hover:text-[#B39B7C] transition-colors">
              Барная карта
            </span>
            <span className="w-8 h-[1px] bg-[#B39B7C] transition-all group-hover:w-14" />
          </div>
        </a>
      </div>
    </section>
  );
};
