import React from 'react';

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const QuantityInput: React.FC<QuantityInputProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
}) => (
  <div className="flex h-[58px] min-w-[84px] items-center gap-[15px] border border-[#333333]/20 pr-[18px] pl-6 text-xl leading-[1.4] text-[#333333]">
    <span aria-live="polite">{value}</span>
    <div className="flex flex-col gap-[3px]">
      <button
        type="button"
        aria-label="Увеличить количество"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
        className="cursor-pointer border-x-[6px] border-b-[9px] border-x-transparent border-b-[#B59571] transition-opacity hover:opacity-70 disabled:cursor-not-allowed"
      />
      <button
        type="button"
        aria-label="Уменьшить количество"
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
        className="cursor-pointer border-x-[6px] border-t-[9px] border-x-transparent border-t-[#B59571] transition-opacity hover:opacity-70 disabled:cursor-not-allowed"
      />
    </div>
  </div>
);
