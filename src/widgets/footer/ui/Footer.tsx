import React from 'react';
import { Logo } from '@/shared/ui';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#242424] text-white border-t border-[#333333] py-8 px-6 sm:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/60">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Logo size="sm" />
          <span className="text-[11px] text-white/40 tracking-wider">
            © {new Date().getFullYear()} Food Exxe Relo
          </span>
        </div>

        {/* Center: Privacy Policy */}
        <div>
          <a
            href="#privacy"
            className="hover:text-[#B39B7C] transition-colors tracking-wide underline-offset-4 hover:underline"
          >
            Политика конфиденциальности
          </a>
        </div>

        {/* Right: Credits */}
        <div className="text-right text-[11px] tracking-wide text-white/50">
          Видовой ресторан на Крестовском острове
        </div>
      </div>
    </footer>
  );
};
