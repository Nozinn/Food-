import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const BurgerIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    className={className}
    aria-hidden="true"
  >
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = 'w-6 h-6', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="YouTube"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const VkIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="VK"
  >
    <path d="M15.684 0H8.316C2.992 0 0 2.992 0 8.316v7.368C0 21.008 2.992 24 8.316 24h7.368C21.008 24 24 21.008 24 15.684V8.316C24 2.992 21.008 0 15.684 0zm4.27 17.38h-2.126c-.805 0-1.05-.64-2.5-2.09-.94-.906-1.356-.994-1.589-.994-.326 0-.42.093-.42.54v1.89c0 .513-.163.654-1.517.654-2.24 0-4.723-1.36-6.474-3.883-2.637-3.69-3.348-6.47-3.348-7.04 0-.315.12-.607.7-.607h2.127c.52 0 .717.235.917.8 1.008 2.932 2.7 5.503 3.4 5.503.264 0 .385-.12.385-.78v-3.04c-.08-.94-.55-1.02-.55-1.355 0-.164.137-.327.36-.327h2.268c.38 0 .52.196.52.64v3.47c0 .38.167.51.277.51.233 0 .428-.13.865-.57 1.34-1.5 2.29-3.8 2.29-3.8.127-.27.35-.45.86-.45h2.127c.64 0 .78.33.64.78-.26.96-2.24 3.86-2.35 4.05-.2.33-.28.48 0 .85.2.27.87.85 1.32 1.38 1.05 1.21 1.84 2.22 2.05 2.92.22.68-.13 1.03-.83 1.03z" />
  </svg>
);

export const TelegramIcon: React.FC<IconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="Telegram"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.939z" />
  </svg>
);
