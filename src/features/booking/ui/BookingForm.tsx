import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingFormData } from '../model/bookingSchema';
import { Input, Button } from '@/shared/ui';

interface BookingFormProps {
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      phone: '',
      guests: '2 персоны',
      time: '19:00',
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    // Simulate API call
    console.log('Booking submitted:', data);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitted(true);
    reset();

    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
        setIsSubmitted(false);
      }, 2500);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-8 text-center animate-in fade-in duration-300">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#B39B7C]/20 border border-[#B39B7C] flex items-center justify-center text-[#B39B7C]">
          ✓
        </div>
        <h4 className="text-xl font-medium text-white mb-2 tracking-wide">
          Столик забронирован!
        </h4>
        <p className="text-sm text-white/70 max-w-xs mx-auto leading-relaxed">
          Мы свяжемся с вами в течение 10 минут для подтверждения брони.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Имя"
          {...register('name')}
          error={errors.name?.message}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Телефон"
          {...register('phone')}
          error={errors.phone?.message}
          disabled={isSubmitting}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Input
          placeholder="Гостей"
          {...register('guests')}
          error={errors.guests?.message}
          disabled={isSubmitting}
        />
        <Input
          placeholder="Время"
          {...register('time')}
          error={errors.time?.message}
          disabled={isSubmitting}
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="md"
          fullWidth
          disabled={isSubmitting}
          className="uppercase tracking-widest text-xs py-3.5"
        >
          {isSubmitting ? 'Бронирование...' : 'Забронировать'}
        </Button>
      </div>
    </form>
  );
};
