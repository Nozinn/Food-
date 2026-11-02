import { z } from 'zod';

export const bookingSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Имя должно содержать минимум 2 символа' })
    .max(50, { message: 'Имя слишком длинное' }),
  phone: z
    .string()
    .min(10, { message: 'Введите номер телефона (не менее 10 цифр)' })
    .regex(/^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/, {
      message: 'Формат: +7 (999) 000-00-00',
    }),
  guests: z
    .string()
    .min(1, { message: 'Укажите кол-во гостей' }),
  time: z
    .string()
    .min(1, { message: 'Укажите время' }),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
