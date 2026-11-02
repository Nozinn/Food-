export const formatPrice = (price: number, from = false): string =>
  `${from ? 'от ' : ''}${price} ₽`;
