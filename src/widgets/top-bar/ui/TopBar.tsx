import React from 'react';
import { AccountIcon, Container } from '@/shared/ui';
import { CartLink } from '@/entities/cart';

export const TopBar: React.FC = () => (
  <Container className="flex items-center justify-end gap-[30px] pt-[30px] font-circe text-base leading-[1.4] text-[#333333] max-[768px]:pt-5">
    <a href="#account" className="flex items-center gap-[30px] transition-colors hover:text-[#B59571]">
      <span>Личный кабинет</span>
      <AccountIcon />
    </a>
    <CartLink className="max-[768px]:hidden" />
  </Container>
);
