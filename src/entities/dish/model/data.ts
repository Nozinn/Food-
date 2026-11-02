import type { Dish, DishCategory } from './types';

export const DISH_CATEGORIES: DishCategory[] = [
  { id: 'breakfast', title: 'Завтраки' },
  { id: 'raw', title: 'Raw' },
  { id: 'cold-appetizers', title: 'Холодные закуски' },
  { id: 'bruschetta', title: 'Брускетты' },
  { id: 'wine', title: 'К вину' },
  { id: 'salads', title: 'Салаты' },
  { id: 'soups', title: 'Супы' },
  { id: 'pasta', title: 'Паста и ризотто' },
  { id: 'meat', title: 'Мясо' },
  { id: 'fish', title: 'Рыба' },
  { id: 'grill', title: 'Grill' },
  { id: 'brazier', title: 'Мангал' },
  { id: 'sides', title: 'Гарниры' },
];

export const DEFAULT_CATEGORY_ID = DISH_CATEGORIES[0].id;

const EXTRAS: Dish['options'] = [
  { id: 'shrimps', title: 'Тигровые креветки 60 г', price: 450 },
  { id: 'tomatoes', title: 'Томаты / паприка', price: 80 },
  { id: 'bacon', title: 'Бекон', price: 120 },
  { id: 'cheddar', title: 'Сыр чеддер 30 г', price: 80 },
];

const breakfast = (
  id: string,
  title: string,
  price: number,
  image: string,
  extra: Partial<Dish> = {}
): Dish => {
  const src = `/images/dishes/${image}.png`;
  return {
    id,
    title,
    price,
    image: src,
    gallery: [src, src, src],
    category: DEFAULT_CATEGORY_ID,
    options: EXTRAS,
    ...extra,
  };
};

export const DISHES: Dish[] = [
  breakfast('glazunya', 'Яичница-глазунья из трех яиц', 250, 'glazunya', { weight: '400 грамм' }),
  breakfast('omlet', 'Омлет из трёх яиц', 250, 'omlet'),
  breakfast('syrniki', 'Домашние сырники', 490, 'syrniki'),
  breakfast('bliny', 'Блины', 190, 'bliny', { priceFrom: true }),
  breakfast('kasha', 'Каша c ягодами и кедровыми орехами', 450, 'kasha'),
  breakfast('skrembl', 'Скрэмбл', 290, 'skrembl'),
  breakfast('benedikt-losos', 'Яйцо Бенедикт с лососем', 850, 'benedikt-losos'),
  breakfast('benedikt-bekon', 'Яйцо Бенедикт с беконом', 650, 'benedikt-bekon'),
  breakfast('grechka', 'Гречневая каша с авокадо, яйцом пашот и пармезаном', 490, 'glazunya'),
  breakfast('kobb-losos', 'Кобб – салат с лососем', 890, 'kobb'),
  breakfast('kobb-krevetki', 'Кобб – салат с креветками', 960, 'kobb'),
];
