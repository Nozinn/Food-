import React from 'react';
import { Header } from '@/widgets/header';
import heroImage from '@/assets/images/hero.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#1A1A1A]">
      {/* Background Image with Dark Vignette/Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Интерьер ресторана Food Exxe Relo"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] transform scale-[1.02] transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
      </div>

      {/* Top Header Navigation */}
      <Header />

      {/* Bottom Hero Title */}
      <div className="relative z-10 px-6 sm:px-14 lg:px-20 pb-16 sm:pb-20 mt-auto max-w-7xl">
        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] max-w-3xl drop-shadow-md">
          Видовой ресторан Food Exxe Relo <br className="hidden sm:inline" />
          на Крестовском острове
        </h1>
      </div>
    </section>
  );
};
