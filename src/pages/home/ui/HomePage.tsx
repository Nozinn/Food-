import React from 'react';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { MenuSection } from './MenuSection';
import { DeliverySection } from './DeliverySection';
import { ContactsSection } from '@/widgets/contacts-section';
import { Footer } from '@/widgets/footer';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <DeliverySection />
      <ContactsSection />
      <Footer />
    </main>
  );
};
