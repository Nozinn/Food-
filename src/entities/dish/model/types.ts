export interface DishCategory {
  id: string;
  title: string;
}

export interface Dish {
  id: string;
  title: string;
  description?: string;
  price: number;
  priceFrom?: boolean;
  weight?: string;
  image: string;
  category: string;
  gallery?: string[];
  options?: {
    id: string;
    title: string;
    price: number;
  }[];
}
