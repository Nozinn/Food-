import React from 'react';
import { Logo, BurgerIcon, YoutubeIcon, VkIcon, TelegramIcon } from '@/shared/ui';
import { useNavigationStore } from '@/features/navigation';

export const Sidebar: React.FC = () => {
  const { openMobileMenu } = useNavigationStore();

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-40 w-16 sm:w-20 bg-[#242424] text-white flex flex-col justify-between items-center py-6 border-r border-[#333333] select-none">
      {/* Top section: Logo & Burger */}
      <div className="flex flex-col items-center gap-6">
        <a href="/" className="transition-transform hover:scale-105" aria-label="Food Exxe Relo Главная">
          <Logo size="sm" />
        </a>

        <button
          type="button"
          onClick={openMobileMenu}
          className="text-[#B39B7C] hover:text-white transition-colors p-2 cursor-pointer focus:outline-none"
          aria-label="Открыть навигационное меню"
        >
          <BurgerIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom section: Social icons */}
      <div className="flex flex-col items-center gap-5 text-[#B39B7C]">
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
          aria-label="YouTube"
        >
          <YoutubeIcon className="w-4 h-4 fill-current" />
        </a>
        <a
          href="https://vk.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
          aria-label="ВКонтакте"
        >
          <VkIcon className="w-4 h-4 fill-current" />
        </a>
        <a
          href="https://t.me"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
          aria-label="Telegram"
        >
          <TelegramIcon className="w-4 h-4 fill-current" />
        </a>
      </div>
    </aside>
  );
};
