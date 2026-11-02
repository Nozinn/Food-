import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => (
  <label className="relative block h-6 w-6 shrink-0 cursor-pointer">
    <input
      type="checkbox"
      aria-label={label}
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
      className="peer absolute inset-0 m-0 cursor-pointer opacity-0"
    />
    <span className="block h-full w-full border border-[#333333]/20 transition-colors peer-hover:border-[#B59571] peer-checked:border-[#B59571] peer-checked:bg-[#B59571] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#B59571]" />
    <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" className="pointer-events-none absolute inset-0 hidden peer-checked:block" aria-hidden="true">
      <path d="M6 12.5l4 4 8-9" />
    </svg>
  </label>
);
