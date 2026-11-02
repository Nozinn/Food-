import React from 'react';
import { Container, Logo } from '@/shared/ui';

const PAYMENTS = ['visa', 'mir', 'mastercard'];

interface FooterProps {
  payments?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ payments = false }) => (
  <footer className="w-full select-none bg-[#333333] font-circe text-base leading-[1.4] text-white">
    <Container className="flex min-h-[120px] items-center justify-between gap-6 py-[30px] max-[768px]:flex-col max-[768px]:text-center">
      <Logo size="kit" />
      <a href="#privacy" className="transition-colors hover:text-[#B59571]">
        Политика конфиденциальности
      </a>
      {payments && (
        <div className="flex items-center gap-[29px]">
          {PAYMENTS.map((name) => (
            <img key={name} src={`/images/payments/${name}.png`} alt={name} width={41} height={40} />
          ))}
        </div>
      )}
      <a href="https://d-e-n.ru" target="_blank" rel="noopener noreferrer" className="text-right font-bold transition-colors hover:text-[#B59571]">
        Дизайн d-e-n.ru
      </a>
    </Container>
  </footer>
);
