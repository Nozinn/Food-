import React from 'react';
import { Button, Container, LocationIcon, PhoneIcon, SectionLabel } from '@/shared/ui';
import { useNavigationStore } from '@/features/navigation';

const METRICS = [
  { number: '2', subtitle: ['из центра', 'Санкт-Петербурга'] },
  { number: '12', subtitle: ['из города', 'Зеленогорск'] },
  { number: '42', subtitle: ['из аэропорта', 'Пулково'] },
  { number: '52', subtitle: ['из города', 'Павловск'] },
];

const HOURS = [
  { days: 'Вск-Чт', time: 'с 12:00 до 23:00' },
  { days: 'Пт-Сб', time: 'с 12:00 до 03:00' },
];

const MAP_URL = 'https://yandex.ru/maps/?text=Санкт-Петербург,+Северная+дорога,+11';

export const ContactsSection: React.FC = () => {
  const { openBookingModal } = useNavigationStore();

  return (
    <section id="contacts" className="pt-[150px] pb-[100px] font-circe text-[#333333] max-[1000px]:pt-20 max-[1000px]:pb-16">
      <Container className="relative min-[1001px]:h-[558px]">
        <SectionLabel title="Контакты" />

        <div className="grid w-[416px] max-w-full grid-cols-2 gap-x-6 gap-y-[50px] min-[1001px]:absolute min-[1001px]:top-[181px] min-[1001px]:left-0 max-[1000px]:mt-12 max-[480px]:gap-y-8">
          {METRICS.map((metric) => (
            <div key={metric.number}>
              <div className="flex items-baseline gap-[15px] text-[#B59571]">
                <span className="text-[64px] font-bold leading-[1.2] max-[480px]:text-5xl">{metric.number}</span>
                <span className="text-[32px] font-bold leading-[1.2] max-[480px]:text-2xl">мин</span>
              </div>
              <p className="mt-[5px] text-lg leading-[1.4]">
                {metric.subtitle[0]}
                <br />
                {metric.subtitle[1]}
              </p>
            </div>
          ))}
        </div>

        <div className="max-[1000px]:relative max-[1000px]:mt-12">
          <img
            src="/images/map-contacts.png"
            alt="Карта: Санкт-Петербург, Северная дорога, 11"
            loading="lazy"
            className="h-[450px] object-cover min-[1001px]:absolute min-[1001px]:top-[108px] min-[1001px]:right-0 min-[1001px]:w-[min(746px,calc(100%-550px))] max-[1000px]:w-full max-[480px]:h-[260px]"
          />

          <div className="absolute w-[416px] bg-[#5B5B5B] p-10 text-white min-[1001px]:top-[163px] min-[1001px]:left-[min(440px,calc(100%-416px))] max-[1000px]:top-[50px] max-[1000px]:left-0 max-[480px]:static max-[480px]:w-full max-[480px]:p-6">
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[15px] text-base leading-[1.4] transition-colors hover:text-[#B59571]">
              <LocationIcon className="shrink-0 text-[#B59571]" />
              Санкт-Петербург, Северная дорога, 11
            </a>
            <a href="tel:+79217777777" className="mt-5 flex items-center gap-[15px] text-base leading-[1.4] transition-colors hover:text-[#B59571]">
              <PhoneIcon className="shrink-0 text-[#B59571]" />
              +7 (921) 777-77-77
            </a>
            <p className="mt-[25px] text-xl font-bold leading-[1.4]">Время работы</p>
            <div className="mt-[15px] space-y-[15px]">
              {HOURS.map((row) => (
                <p key={row.days} className="flex gap-[14px] text-lg leading-[1.4]">
                  <b className="font-bold">{row.days}</b>
                  {row.time}
                </p>
              ))}
            </div>
            <div className="mt-[30px] flex flex-wrap gap-5">
              <Button type="button" variant="accent" size="btn-small" onClick={openBookingModal}>
                Бронь столика
              </Button>
              <a href="tel:+79217777777">
                <Button type="button" variant="white-outline" size="btn-small">
                  Задать вопрос
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
