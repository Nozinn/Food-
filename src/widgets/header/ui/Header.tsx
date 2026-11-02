import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { useNavigationStore } from '@/features/navigation';

export const Header: React.FC = () => {
  const { openBookingModal } = useNavigationStore();

  return (
    <header className="absolute top-0 right-0 left-0 z-30 flex items-center justify-end px-6 sm:px-12 py-6">
      <nav className="flex items-center gap-6 sm:gap-10">
        <a
          href="#menu"
          className="text-white text-xs sm:text-sm tracking-wider hover:text-[#B39B7C] transition-colors"
        >
          Меню
        </a>

        <Link
          to={ROUTES.DELIVERY}
          className="text-white text-xs sm:text-sm tracking-wider hover:text-[#B39B7C] transition-colors"
        >
          Доставка
        </Link>

        <Link
          to={ROUTES.PAYMENT}
          className="text-white text-xs sm:text-sm tracking-wider hover:text-[#B39B7C] transition-colors"
        >
          Оплата
        </Link>

        <Button
          type="button"
          variant="primary"
          size="sm"
          onClick={openBookingModal}
          className="rounded-none text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 tracking-wider"
        >
          Бронь столика
        </Button>
      </nav>
    </header>
  );
};
