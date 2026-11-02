import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo, CloseIcon, Button, YoutubeIcon, VkIcon, TelegramIcon } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { useNavigationStore } from '@/features/navigation';

export const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen, closeMobileMenu, openBookingModal } = useNavigationStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  if (!isMobileMenuOpen) return null;

  const handleBookingClick = () => {
    closeMobileMenu();
    openBookingModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#292929] text-white flex flex-col justify-between items-center py-10 px-6 animate-in fade-in duration-300 select-none overflow-y-auto"
    >
      {/* Top Header: Logo and Close button */}
      <div className="flex flex-col items-center gap-4">
        <Logo size="lg" />
        <button
          type="button"
          onClick={closeMobileMenu}
          className="text-[#B39B7C] hover:text-white transition-colors p-2 cursor-pointer focus:outline-none"
          aria-label="Закрыть меню"
        >
          <CloseIcon size={24} />
        </button>
      </div>

      {/* Center navigation links */}
      <nav className="flex flex-col items-center gap-8 my-auto text-center">
        <a
          href="/#menu"
          onClick={closeMobileMenu}
          className="text-white text-3xl sm:text-4xl font-semibold tracking-wide hover:text-[#B39B7C] transition-colors"
        >
          Меню
        </a>

        <Link
          to={ROUTES.DELIVERY}
          onClick={closeMobileMenu}
          className="text-white text-3xl sm:text-4xl font-semibold tracking-wide hover:text-[#B39B7C] transition-colors"
        >
          Доставка
        </Link>

        <Link
          to={ROUTES.PAYMENT}
          onClick={closeMobileMenu}
          className="text-white text-3xl sm:text-4xl font-semibold tracking-wide hover:text-[#B39B7C] transition-colors"
        >
          Оплата
        </Link>

        <div className="pt-4">
          <Button
            type="button"
            variant="primary"
            size="lg"
            onClick={handleBookingClick}
            className="rounded-none tracking-widest uppercase text-sm px-10 py-3.5"
          >
            Бронь столика
          </Button>
        </div>
      </nav>

      {/* Bottom Social Icons */}
      <div className="flex items-center gap-6 text-[#B39B7C] pt-6">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
          aria-label="YouTube"
        >
          <YoutubeIcon className="w-5 h-5 fill-current" />
        </a>
        <a
          href="https://vk.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
          aria-label="ВКонтакте"
        >
          <VkIcon className="w-5 h-5 fill-current" />
        </a>
        <a
          href="https://t.me"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
          aria-label="Telegram"
        >
          <TelegramIcon className="w-5 h-5 fill-current" />
        </a>
      </div>
    </div>
  );
};
