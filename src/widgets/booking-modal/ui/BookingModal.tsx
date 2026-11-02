import React from 'react';
import { Modal, Logo, CloseIcon } from '@/shared/ui';
import { BookingForm } from '@/features/booking';
import { useNavigationStore } from '@/features/navigation';

export const BookingModal: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal } = useNavigationStore();

  return (
    <Modal
      isOpen={isBookingModalOpen}
      onClose={closeBookingModal}
      className="max-w-[460px] bg-[#2E2E2E] border border-[#404040] p-8 sm:p-10 shadow-2xl relative"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={closeBookingModal}
        className="absolute top-5 right-5 text-[#B39B7C] hover:text-white transition-colors cursor-pointer p-1"
        aria-label="Закрыть окно"
      >
        <CloseIcon size={20} />
      </button>

      {/* Header with Logo */}
      <div className="flex flex-col items-center text-center mb-6">
        <Logo size="md" className="mb-4" />
        <h3 className="text-white text-base sm:text-lg font-semibold tracking-[0.15em] uppercase">
          Забронировать столик
        </h3>
      </div>

      {/* Booking Form with Zod & React Hook Form */}
      <BookingForm onSuccess={closeBookingModal} />
    </Modal>
  );
};
