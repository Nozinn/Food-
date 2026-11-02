import React from 'react';
import { SectionLabel, Button } from '@/shared/ui';
import { useNavigationStore } from '@/features/navigation';
import { MapPin, Phone } from 'lucide-react';

export const ContactsSection: React.FC = () => {
  const { openBookingModal } = useNavigationStore();

  const metrics = [
    { number: '2', label: 'мин', subtitle: 'из центра Санкт-Петербурга' },
    { number: '12', label: 'мин', subtitle: 'из города Зеленогорск' },
    { number: '42', label: 'мин', subtitle: 'из аэропорта Пулково' },
    { number: '52', label: 'мин', subtitle: 'из города Павловск' },
  ];

  return (
    <section id="contacts" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <SectionLabel title="Контакты" className="mb-12" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: 2x2 travel time numbers */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-12">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-semibold text-[#B39B7C] tracking-tight">
                  {m.number}
                </span>
                <span className="text-base sm:text-lg text-[#222222] font-medium">
                  {m.label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#737373] mt-1 leading-snug">
                {m.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Black & White Map with Dark Info Card */}
        <div className="lg:col-span-7 relative h-[380px] sm:h-[420px] bg-[#EBEBEB] overflow-hidden border border-[#E0E0E0] shadow-sm">
          {/* Stylized Vector Grayscale Map of Krestovsky Island */}
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 600 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Waterway (Malaya Neva / Gulf) */}
            <rect width="600" height="400" fill="#E8EAED" />
            <path
              d="M0,80 Q150,90 280,180 T600,240 L600,0 L0,0 Z"
              fill="#D9DCE1"
            />
            <path
              d="M0,320 Q200,310 380,260 T600,320 L600,400 L0,400 Z"
              fill="#D9DCE1"
            />
            {/* Land area */}
            <path
              d="M-20,90 Q150,110 270,190 T620,250 L620,310 Q400,270 200,310 T-20,330 Z"
              fill="#F4F4F4"
            />
            {/* Roads */}
            <path
              d="M-10,210 C120,210 200,220 340,240 T610,270"
              stroke="#D1D5DB"
              strokeWidth="12"
              fill="none"
            />
            <path
              d="M180,90 L220,340"
              stroke="#D1D5DB"
              strokeWidth="8"
              fill="none"
            />
            <path
              d="M320,160 L380,310"
              stroke="#E5E7EB"
              strokeWidth="6"
              fill="none"
            />
            {/* Coastline Severnaya Doroga */}
            <path
              d="M80,150 Q220,170 420,220"
              stroke="#B39B7C"
              strokeWidth="3"
              strokeDasharray="4 4"
              fill="none"
            />

            {/* Restaurant Pin Marker */}
            <g transform="translate(320, 215)">
              <circle cx="0" cy="0" r="14" fill="#B39B7C" fillOpacity="0.25" />
              <circle cx="0" cy="0" r="7" fill="#B39B7C" />
              <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
            </g>
          </svg>

          {/* Dark Floating Info Card */}
          <div className="absolute top-6 left-6 right-6 sm:right-auto sm:w-[320px] bg-[#333333] text-white p-5 sm:p-6 shadow-xl border border-[#444444]">
            {/* Address */}
            <div className="flex items-start gap-3 mb-3 text-xs sm:text-sm text-white/90">
              <MapPin size={16} className="text-[#B39B7C] shrink-0 mt-0.5" />
              <a
                href="https://yandex.ru/maps/?text=Санкт-Петербург,+Северная+дорога,+11"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B39B7C] transition-colors leading-relaxed"
              >
                Санкт-Петербург, Северная дорога, 11
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-5 text-xs sm:text-sm text-white/90">
              <Phone size={15} className="text-[#B39B7C] shrink-0" />
              <a
                href="tel:+79217777777"
                className="hover:text-[#B39B7C] transition-colors font-medium"
              >
                +7 (921) 777-77-77
              </a>
            </div>

            {/* Working Hours */}
            <div className="border-t border-[#464646] pt-4 mb-5">
              <span className="block text-[11px] text-white/60 uppercase tracking-wider mb-2 font-medium">
                Время работы
              </span>
              <div className="text-xs sm:text-sm space-y-1 text-white/80">
                <p className="flex justify-between">
                  <span>Вск–Чт</span>
                  <span className="font-medium text-white">с 12:00 до 23:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Пт–Сб</span>
                  <span className="font-medium text-white">с 12:00 до 03:00</span>
                </p>
              </div>
            </div>

            {/* Card Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant="primary"
                size="sm"
                onClick={openBookingModal}
                className="text-[11px] tracking-wider py-2 font-medium"
              >
                Бронь столика
              </Button>
              <a
                href="https://yandex.ru/maps/?text=Санкт-Петербург,+Северная+дорога,+11"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[11px] text-white/80 hover:text-white border border-white/40 hover:border-white transition-colors py-2 tracking-wider uppercase text-center"
              >
                Как добраться
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
