import React from 'react';
import { Container, SectionLabel } from '@/shared/ui';
import { ContactsSection } from '@/widgets/contacts-section';
import { Footer } from '@/widgets/footer';
import { TopBar } from '@/widgets/top-bar';
import { PaymentMethods } from './PaymentMethods';

export const PaymentPage: React.FC = () => (
  <main className="min-h-screen w-full bg-white">
    <TopBar />
    <Container className="pt-[60px] font-circe text-[#333333]">
      <SectionLabel title="Оплата" />
      <h1 className="mt-10 mb-10 text-[64px] font-bold leading-[1.2] max-[768px]:text-[40px]">Способы оплаты</h1>
      <PaymentMethods />
    </Container>
    <ContactsSection />
    <Footer payments />
  </main>
);
