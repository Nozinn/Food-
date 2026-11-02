import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, MenuLeftIcon, YoutubeFilledIcon, VkFilledIcon, TelegramPlaneIcon } from '@/shared/ui';
import { ROUTES } from '@/shared/config';
import { CartLink } from '@/entities/cart';
import { useNavigationStore } from '@/features/navigation';

const SOCIALS = [
  { href: 'https://youtube.com', Icon: YoutubeFilledIcon },
  { href: 'https://vk.com', Icon: VkFilledIcon },
  { href: 'https://t.me', Icon: TelegramPlaneIcon },
];

export const Sidebar: React.FC = () => {
  const { openMobileMenu } = useNavigationStore();

  return (
    <aside className="fixed top-0 left-0 z-40 flex select-none bg-[#333333] text-[#B59571] min-[769px]:bottom-0 min-[769px]:w-[120px] min-[769px]:flex-col min-[769px]:items-center min-[769px]:justify-between min-[769px]:py-[30px] max-[768px]:right-0 max-[768px]:h-16 max-[768px]:items-center max-[768px]:justify-between max-[768px]:px-4">
      <div className="flex flex-col items-center gap-5 max-[768px]:contents">
        <Link to={ROUTES.HOME} aria-label="Food Exxe Relo Главная" className="transition-opacity hover:opacity-80">
          <Logo size="kit" className="max-[768px]:h-9" />
        </Link>
        <div className="flex items-center gap-5">
          <CartLink className="text-white min-[769px]:hidden" />
          <button
            type="button"
            onClick={openMobileMenu}
            className="cursor-pointer transition-colors hover:text-white"
            aria-label="Открыть навигационное меню"
          >
            <MenuLeftIcon />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 max-[768px]:hidden">
        {SOCIALS.map(({ href, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            <Icon />
          </a>
        ))}
      </div>
    </aside>
  );
};
