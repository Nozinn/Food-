import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { DeliveryPage } from '@/pages/delivery';
import { DishDetailPage } from '@/pages/dish-detail';
import { PaymentPage } from '@/pages/payment';
import { Sidebar } from '@/widgets/sidebar';
import { BookingModal } from '@/widgets/booking-modal';
import { MobileMenu } from '@/widgets/mobile-menu';
import { ROUTES } from '@/shared/config';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-white text-[#1F1F1F]">
        {/* Left fixed Sidebar across all pages */}
        <Sidebar />

        {/* Main Content shifted by sidebar width */}
        <div className="pl-16 sm:pl-20 transition-all duration-300">
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.DELIVERY} element={<DeliveryPage />} />
            <Route path="/delivery/dish/:id" element={<DishDetailPage />} />
            <Route path={ROUTES.PAYMENT} element={<PaymentPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/* Global Overlays: Booking Modal & Fullscreen Mobile Menu */}
        <BookingModal />
        <MobileMenu />
      </div>
    </BrowserRouter>
  );
};
