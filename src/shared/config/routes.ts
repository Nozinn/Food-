export const ROUTES = {
  HOME: '/',
  MENU: '/menu',
  DELIVERY: '/delivery',
  DISH: (id: string | number = ':id') => `/delivery/dish/${id}`,
  PAYMENT: '/payment',
} as const;
