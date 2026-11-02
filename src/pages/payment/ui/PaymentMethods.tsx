import React from 'react';

const METHODS = [
  { title: 'Наличными', text: 'Оплата наличными при получении заказа.' },
  { title: 'Банковской картой', text: 'Принимаем карты Visa, МИР и Mastercard.' },
  { title: 'Через СБП', text: 'Оплата через Систему быстрых платежей.' },
];

export const PaymentMethods: React.FC = () => (
  <ul className="grid grid-cols-3 gap-6 max-[1000px]:grid-cols-1">
    {METHODS.map((method) => (
      <li key={method.title} className="border border-[#333333]/20 p-[30px]">
        <h2 className="text-xl font-bold leading-[1.4]">{method.title}</h2>
        <p className="mt-3 text-lg leading-[1.4]">{method.text}</p>
      </li>
    ))}
  </ul>
);
